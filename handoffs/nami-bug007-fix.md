# Nami — BUG-007 Fix
Date: 2026-05-15
Status: ✅ DONE

---

## What was fixed

**BUG-007: API contract deviation** — `app/api/contact/route.ts` and
`lib/validations/contact.schema.ts` now match `handoffs/nami-api-contract.md` exactly.

### Schema (`lib/validations/contact.schema.ts`)

| Field | Before | After (spec) |
|---|---|---|
| `name` | min(1) | min(2) ✅ |
| `subject` | required min(1) | optional ✅ |
| `message` | min(1) | min(10) ✅ |

### Route (`app/api/contact/route.ts`)

| Item | Before | After |
|---|---|---|
| Supabase insert | missing | ✅ inserts row with ip_address |
| Rate limiting | none | ✅ 3 req/IP/hour via Supabase count query |
| Success status | 200 | 201 ✅ |
| Success body | `{ success: true }` | `{ success: true, message: "..." }` ✅ |
| Validation error status | 422 | 400 ✅ |
| Field error shape | `fieldErrors` | `fields` ✅ |

### Contact form (`app/contact/page.tsx`)

- Client-side validation updated to match server: name min 2, message min 10, subject not required
- Subject label changed to "Subject (optional)" — `required` prop removed
- Empty subject is sent as `undefined` (not empty string) so server treats it as absent
- `handleSubmit` now surfaces server-side field errors directly into form state

---

## Environment variables required (unchanged from spec)

```
RESEND_API_KEY
SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
CONTACT_EMAIL_TO=saransp6@gmail.com
```

---

## Rate limiting approach

Rate limiting uses Supabase: on each request, count rows in `contact_messages` with
the same `ip_address` in the last hour. If count ≥ 3, return 429. No additional
infrastructure required — Supabase is already in the stack.

Supabase not configured (missing env vars)? Rate limiting and DB insert are skipped
gracefully; only email notification is sent. This prevents hard failures in local dev.

---

## Still open (not Nami's scope)

- BUG-002: Resume PDF missing (`public/documents/resume.pdf`) — owner task
- FIX-001 (Round 3): Per-page `--accent` style overrides — NARUTO task
- BUG-006 / BUG-008: Already fixed in code per code review ✅

---

## Re-test scope for Shikamaru (Round 4)

- POST `/api/contact` with valid data → 201, `{ success: true, message: "..." }`
- POST with name < 2 chars → 400, `{ fields: { name: "..." } }`
- POST with message < 10 chars → 400, `{ fields: { message: "..." } }`
- POST with no subject → 201 success (subject is optional)
- POST 4th time from same IP within 1 hour → 429
- Supabase row created with correct columns after submission
- Form shows server field errors inline when API returns 400 with `fields`
