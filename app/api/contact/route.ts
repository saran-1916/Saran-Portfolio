import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";
import { contactSchema } from "@/lib/validations/contact.schema";
import { SITE_METADATA } from "@/lib/constants";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

function getSupabase() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

function getClientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"
  );
}

async function isRateLimited(ip: string): Promise<boolean> {
  const supabase = getSupabase();
  if (!supabase) return false;

  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const { count, error } = await supabase
    .from("contact_messages")
    .select("*", { count: "exact", head: true })
    .eq("ip_address", ip)
    .gte("created_at", oneHourAgo);

  if (error) return false;
  return (count ?? 0) >= 3;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ success: false, error: "Invalid request body" }, { status: 400 });
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    const fields = result.error.flatten().fieldErrors as Record<string, string[]>;
    const fieldMessages: Record<string, string> = {};
    for (const [key, msgs] of Object.entries(fields)) {
      if (msgs?.[0]) fieldMessages[key] = msgs[0];
    }
    return Response.json(
      { success: false, error: "Validation failed", fields: fieldMessages },
      { status: 400 }
    );
  }

  const { name, email, subject, message } = result.data;
  const ip = getClientIp(request);

  if (await isRateLimited(ip)) {
    return Response.json(
      { success: false, error: "Too many requests. Please wait before submitting again." },
      { status: 429 }
    );
  }

  const supabase = getSupabase();

  if (supabase) {
    const { error: dbError } = await supabase.from("contact_messages").insert({
      name,
      email,
      subject: subject ?? null,
      message,
      ip_address: ip,
    });

    if (dbError) {
      console.error("Supabase insert error:", dbError.message);
      return Response.json(
        { success: false, error: "Something went wrong. Please try again later." },
        { status: 500 }
      );
    }
  }

  const resend = getResend();
  if (!resend) {
    return Response.json(
      { success: false, error: "Email service is not configured" },
      { status: 503 }
    );
  }

  const { error: emailError } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: [process.env.CONTACT_EMAIL_TO ?? SITE_METADATA.email],
    replyTo: email,
    subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}${subject ? `\nSubject: ${subject}` : ""}\n\n${message}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px;">
        <h2 style="color: #0ea5e9;">New message from your portfolio</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #64748b; width: 80px;"><strong>From</strong></td>
            <td style="padding: 8px 0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b;"><strong>Email</strong></td>
            <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          ${subject ? `<tr>
            <td style="padding: 8px 0; color: #64748b;"><strong>Subject</strong></td>
            <td style="padding: 8px 0;">${subject}</td>
          </tr>` : ""}
        </table>
        <hr style="border: 1px solid #e2e8f0; margin: 16px 0;" />
        <p style="white-space: pre-wrap; color: #1e293b;">${message}</p>
      </div>
    `,
  });

  if (emailError) {
    console.error("Resend error:", emailError.name);
    return Response.json(
      { success: false, error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }

  return Response.json(
    { success: true, message: "Message received. I'll get back to you soon." },
    { status: 201 }
  );
}
