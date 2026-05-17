# Handoff: ITACHI → NARUTO
Task: TASK-CONTACT (Contact Form Backend)
Status: Ready — contact form is now wired to real email delivery

---

## What I built

### 1. Zod validation schema
`lib/validations/contact.schema.ts`
Validates: `name` (max 100), `email` (valid address), `subject` (max 200), `message` (max 5000).
Export: `contactSchema`, `ContactFormData` type.

### 2. API Route Handler
`app/api/contact/route.ts` — POST only.
- Parses and validates JSON body with zod (`safeParse`)
- Returns 422 + field errors on validation failure
- Returns 503 if `RESEND_API_KEY` env var is missing (graceful — no crash)
- Sends email via Resend with `replyTo` set to the visitor's address so Saran can reply directly
- Returns 200 `{ success: true }` on success
- Server-side errors are logged by `error.name` only — no stack traces or internal details sent to client

### 3. Updated contact page
`app/contact/page.tsx` — `handleSubmit` now calls `POST /api/contact` instead of the fake timeout.
- Surfaces API error message in the form's existing error state
- Success/reset flow unchanged

---

## Environment variable required

Create `.env.local` at project root (see `.env.local.example`):
```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Get the key at https://resend.com/api-keys.
The `onboarding@resend.dev` sender address works on free tier for testing.
For production, add a verified custom domain in Resend and update the `from` field in the route handler.

---

## What Naruto does NOT need to change

- Contact page layout, fields, animations — untouched
- Error and success UI state — already handled by existing `errors.submit` and `isSuccess` state
- The form still works in dev with `RESEND_API_KEY` unset — it returns a 503 with a clear message

---

## Known limitations / watch out for

- Free Resend tier: 100 emails/day, 3,000/month. Sufficient for a portfolio.
- `from: "onboarding@resend.dev"` is Resend's sandbox sender. Works for all recipients during testing. For production, swap to `noreply@yourdomain.com` after verifying your domain in the Resend dashboard.
- No rate limiting on the API route — acceptable for a low-traffic portfolio. If spam becomes an issue, add a simple in-memory counter or use Upstash Redis.

---

## Security checklist (passed)
- [x] No API keys in any committed file
- [x] `.env.local` covered by `.gitignore` (`.env*` pattern)
- [x] All inputs validated with zod before use
- [x] Error messages don't expose internal server details
- [x] No database, no RLS concerns
