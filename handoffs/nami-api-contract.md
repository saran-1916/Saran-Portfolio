# API Contract — Saran Portfolio
Designed by: NAMI
Date: 2026-05-12

---

## Overview

This is a static portfolio site. There is **one** API surface: the contact form.
All other data (projects, experience, skills, apps, tools) is served from static TypeScript files in `data/` — no API calls, no fetching at runtime.

---

## Static Data Shapes

Naruto reads these directly from `data/*.ts`. No API call needed.

### `data/experience.ts` — `ExperienceEntry[]`

```ts
interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  period: string;          // e.g. "2019 – Present"
  location: string;
  description: string;
  highlights: string[];
  tools: string[];
}
```

### `data/projects.ts` — `Project[]`

```ts
interface Project {
  id: string;
  slug: string;
  title: string;
  year: string;
  shortDescription: string;
  description: string;
  tools: string[];
  images?: string[];
  liveUrl?: string;
  githubUrl?: string;
}
```

### `data/apps.ts` — `App[]`

```ts
interface App {
  id: string;
  title: string;
  year: string;
  shortDescription: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}
```

### `data/skills.ts` — `SkillCategory[]`

```ts
interface SkillCategory {
  category: string;
  skills: string[];
}
```

### `data/tools.ts` — `Tool[]`

```ts
interface Tool {
  id: string;
  name: string;
  category: string;
  description: string;
  icon?: string;
}
```

---

## API Routes

### POST /api/contact

**Purpose:** Submit a contact form message. Inserts into Supabase `contact_messages` and sends a notification email via Resend.

**File:** `app/api/contact/route.ts`

**Auth:** None — public endpoint. Rate-limited to 3 requests per IP per hour.

**Request body:**
```json
{
  "name": "string (2–100 chars, required)",
  "email": "string (valid email, required)",
  "subject": "string (max 200 chars, optional)",
  "message": "string (10–5000 chars, required)"
}
```

**Validation:** Zod schema on the server mirrors the client-side validation.

```ts
const contactSchema = z.object({
  name:    z.string().min(2).max(100),
  email:   z.string().email(),
  subject: z.string().max(200).optional(),
  message: z.string().min(10).max(5000),
});
```

**Response (success — 201):**
```json
{
  "success": true,
  "message": "Message received. I'll get back to you soon."
}
```

**Response (validation error — 400):**
```json
{
  "success": false,
  "error": "Validation failed",
  "fields": {
    "email": "Invalid email address",
    "message": "Message must be at least 10 characters"
  }
}
```

**Response (rate limit — 429):**
```json
{
  "success": false,
  "error": "Too many requests. Please wait before submitting again."
}
```

**Response (server error — 500):**
```json
{
  "success": false,
  "error": "Something went wrong. Please try again later."
}
```

**Side effects:**
1. Row inserted into Supabase `contact_messages` table
2. Email notification sent to `saransp6@gmail.com` via Resend with the message content
3. (Optional) Auto-reply confirmation email sent to the submitter's address

**Environment variables required (server-side only):**
```
RESEND_API_KEY
SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
CONTACT_EMAIL_TO=saransp6@gmail.com
```

---

## Supabase Table Reference

Exact table name (case-sensitive): `contact_messages`

| Column | Type | Notes |
|---|---|---|
| `id` | uuid | PK, auto-generated |
| `name` | text | Required |
| `email` | text | Required, validated |
| `subject` | text | Optional |
| `message` | text | Required |
| `read` | boolean | Default false |
| `ip_address` | inet | Set server-side, never from client body |
| `created_at` | timestamptz | Auto |
| `updated_at` | timestamptz | Auto |

---

## What Naruto Needs From the API

The contact form (`app/contact/page.tsx`) must:
1. Use `react-hook-form` + zod for client-side validation (mirror the server schema)
2. `POST` to `/api/contact` on submit
3. Show a success state when response is `{ success: true }`
4. Show field-level errors when response is `{ success: false, fields: {...} }`
5. Show a generic error banner for 429 and 500 responses
6. Disable the submit button while the request is in flight

The form must NOT attempt to call Supabase directly from the browser — all DB writes go through the `/api/contact` route handler.

---

## No Other API Routes

There are no other API routes in this project. Do not build:
- An auth system
- A CMS API
- A projects API
- Any admin endpoints

All content is static TypeScript. If new content is needed, update the `data/*.ts` files directly.
