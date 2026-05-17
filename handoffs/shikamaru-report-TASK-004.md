# Shikamaru QA Report
Task: TASK-004
Date: 2026-05-12
Last updated: 2026-05-12 (round 2 — after Hancock review + Itachi contact backend)
Final verdict: ❌ REJECTED — BUG-006 is a visual regression that must be fixed

---

## Round 2 status

| Item | Status |
|---|---|
| BUG-001 (TypeScript build) | ✅ Fixed |
| BUG-005 (contact form) | ✅ Fixed by ITACHI — Resend integration shipped |
| Hancock FIX-001 (accent classes) | ❌ Not done |
| Hancock FIX-002 (404 page) | ❌ Not done |
| BUG-006 (AboutBackground wrong color) | ❌ NEW regression — critical |
| BUG-007 (contact API deviates from spec) | ❌ NEW |
| BUG-002 / BUG-003 / BUG-004 | Unchanged |

---

## Test summary

| Section | Result | Notes |
|---|---|---|
| Smoke test | ✅ | All 9 routes return HTTP 200, no server errors |
| Functional — TASK-001 (backgrounds created) | ⚠️ | AboutBackground color wrong (regression) |
| Functional — TASK-002 (backgrounds wired) | ⚠️ | Wired correctly; accent Tailwind classes still sky-blue sitewide |
| Calculations | N/A | Portfolio site — no formulas |
| Security | N/A | No auth, no sensitive data |
| Performance | ⚠️ | Tab-visibility pause missing |
| Regression | ⚠️ | Resume PDF 404; accent color regression; API spec deviation |

---

## BUGS

---

### BUG-006 ⭐ NEW — Round 2
**Severity:** High
**Type:** Visual Regression
**Location:** `components/backgrounds/AboutBackground.tsx:57,69`
**Description:** `AboutBackground` was modified after my round-1 review. It now renders amber (`rgba(245, 158, 11, ...)` = `#f59e0b`) — the Experience page color — instead of the correct violet (`rgba(139, 92, 246, ...)` = `#8b5cf6`). The About page and Experience page now have visually identical background colors. The per-page identity system is broken for `/about`.

**Steps to reproduce:**
1. Navigate to `/about` — background nodes and lines are amber
2. Navigate to `/experience` — blueprint grid is also amber
3. Both pages look like they belong to the same section

**Expected:** `/about` neural network renders violet `rgba(139, 92, 246, ...)`
**Actual:** `/about` neural network renders amber `rgba(245, 158, 11, ...)`

**Fix:** In `AboutBackground.tsx`, lines 57 and 69:
```tsx
// line 57
ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;  // was 245, 158, 11
// line 69
ctx.fillStyle = `rgba(139, 92, 246, 0.35)`;         // was 245, 158, 11
```
**Assigned to:** NARUTO

---

### BUG-007 ⭐ NEW — Round 2
**Severity:** Medium
**Type:** API Contract Deviation
**Location:** `app/api/contact/route.ts` vs `handoffs/nami-api-contract.md`

**Description:** Itachi's contact API implementation deviates from Nami's spec in four ways:

| Item | Nami's spec | Itachi's implementation |
|---|---|---|
| `name` min length | 2 chars | 1 char |
| `message` min length | 10 chars | 1 char |
| `subject` | optional | required (min 1) |
| Rate limiting | 3 req/IP/hour | None |
| Supabase DB insert | Required | Not implemented |
| Success status code | 201 | 200 |

The missing Supabase insert means contact messages are never stored — only email notification is sent. If the email delivery fails, the message is lost with no fallback record.

**Most critical deviation:** `subject` is required in Itachi's schema (`z.string().min(1)`) but optional in Nami's spec. If Naruto's frontend form enforces subject as required (which it does — client validation requires it), this is functionally harmless. But it breaks the contract for any future integrations.

**Assigned to:** ITACHI — align schema with Nami's spec, add Supabase insert, add rate limiting

---

### Hancock FIX-001 — NOT DONE
**Severity:** Medium
**Type:** Visual — Accent System
**Location:** `tailwind.config.ts` + all inner page TSX files
**Description:** Tailwind `accent-*` shade classes are hardcoded to sky-blue (#38bdf8 / #0ea5e9). Every page sets `--accent` CSS variables correctly, but `accent-400` / `accent-500` Tailwind classes don't consume them. All heading gradients, dividers, timeline dots, and step-number badges render sky-blue on every page — not the per-page accent color. The background changes per page; the foreground UI does not.

**The fix Hancock prescribed (Option A):** Convert hero heading gradient and primary divider lines to use inline `style={{ background: "linear-gradient(...var(--accent)...)" }}` on About, Experience, Skills, Projects, Apps, Resume, Contact.

**Assigned to:** NARUTO

---

### Hancock FIX-002 — NOT DONE
**Severity:** Low
**Type:** Missing feature
**Location:** `app/not-found.tsx` — file does not exist
**Description:** Any mistyped URL shows the bare Next.js default 404 page. On a premium portfolio, this is unprofessional.

**Fix:** Create `app/not-found.tsx` with dark theme (bg-slate-950), a clear heading, and a PremiumButton "Back to home".

**Assigned to:** NARUTO

---

### BUG-001
**Severity:** High
**Type:** Build Error
**Location:** `app/skills/page.tsx:126` and `data/skills.ts:8` / `components/PremiumSkillBadge.tsx:7`
**Description:** `next build` fails TypeScript check. `skill.proficiency` is typed as `"Expert" | "Advanced" | "Intermediate" | "Beginner" | undefined` in the data file, but `PremiumSkillBadge`'s `level` prop only accepts `"Expert" | "Advanced" | "Intermediate"` (non-optional, no `"Beginner"`). The mismatch blocks production deployment — `next build` exits with code 1.

**Steps to reproduce:**
1. `npm run build`
2. Observe TypeScript error at line 126

**Expected:** Build completes successfully
**Actual:**
```
app/skills/page.tsx:126:27 — Type error:
Type '"Expert" | "Advanced" | "Intermediate" | "Beginner" | undefined'
is not assignable to type '"Expert" | "Advanced" | "Intermediate"'.
```

**Fix options (one of the following):**
- Add `"Beginner"` to `PremiumSkillBadge`'s `level` union type and add a `levelColors["Beginner"]` entry
- OR make the `level` prop optional with a fallback in the component
- OR remove `"Beginner"` from `data/skills.ts` skill definitions

**Assigned to:** NARUTO (component + data owner)

---

### BUG-002
**Severity:** Medium
**Type:** Missing Asset / Regression
**Location:** `public/documents/resume.pdf` — file does not exist
**Description:** The resume page has two download links pointing to `/documents/resume.pdf`. The file is absent from `public/` — the directory `public/documents/` does not exist. Both the "Download Resume" button and the direct download anchor return HTTP 404.

**Steps to reproduce:**
1. Navigate to `/resume`
2. Click "Download Resume"
3. Browser gets 404

**Expected:** PDF downloads
**Actual:** 404 Not Found

**Assigned to:** Owner — needs to place the actual resume PDF at `public/documents/resume.pdf`

---

### BUG-003
**Severity:** Low
**Type:** Performance
**Location:** All canvas-based background components — `AboutBackground.tsx`, `ExperienceBackground.tsx`, `SkillsBackground.tsx`, `ProjectsBackground.tsx`, `AppsBackground.tsx`, `ContactBackground.tsx`, `ToolsBackground.tsx`
**Description:** TASK-004 spec requires that background animations pause when the browser tab is hidden. None of the 7 canvas-based components listen to `visibilitychange` or check `document.hidden`. The `requestAnimationFrame` loop continues to run even when the user has switched to another tab, wasting CPU for every open tab.

**Steps to reproduce:**
1. Navigate to `/about`
2. Open Task Manager / Activity Monitor
3. Switch to another tab
4. Observe browser CPU usage does not drop for the animation

**Expected:** Animation pauses (RAF loop suspended) when `document.hidden === true`
**Actual:** Animation continues running in background tab

**Fix pattern** (same for all 7 canvas components — add inside `useEffect`):
```typescript
const handleVisibility = () => {
  if (document.hidden) {
    cancelAnimationFrame(rafId);
  } else {
    rafId = requestAnimationFrame(animate);
  }
};
document.addEventListener("visibilitychange", handleVisibility);
// Add to cleanup:
document.removeEventListener("visibilitychange", handleVisibility);
```

**Assigned to:** NARUTO

---

### BUG-004
**Severity:** Low
**Type:** Visual / Theme mismatch
**Location:** `app/tools/page.tsx:15`
**Description:** The Tools page uses `bg-slate-50` (light background) while every other inner page uses `bg-slate-950` (dark). `ToolsBackground` was designed for a dark canvas — the orange circuit traces at 5% opacity are nearly invisible against the white `bg-slate-50`. The page also has no `--accent` CSS variable set, breaking any component that reads `var(--accent)`.

**Expected:** Tools page dark theme consistent with all other inner pages, or ToolsBackground adjusted to work on a light background
**Actual:** Light page with near-invisible dark-themed animation, no accent variable

**Assigned to:** NARUTO (visual fix) or Owner (decide if Tools page is intentionally light-themed)

---

### BUG-005
**Severity:** Low (Known limitation)
**Type:** Unimplemented feature
**Location:** `app/contact/page.tsx:64-73`
**Description:** The contact form simulates a network request (`await new Promise(setTimeout, 1500)`) and logs to console but never sends an email. A `// TODO: Integrate with email service` comment confirms this. Form appears to succeed — user gets a success message — but no email is delivered.

**Steps to reproduce:**
1. Navigate to `/contact`
2. Fill in all fields with valid data
3. Submit
4. Check owner's inbox — no email arrives

**Note:** This is pre-existing and out of scope for TASK-004, but blocking for a live portfolio. Recommend: integrate with Resend (already in the tech stack) or Formspree before launch.

**Assigned to:** ITACHI (backend integration)

---

## What PASSED — full detail

**TASK-001 — Background Components (code review):**
- All 8 components present under `components/backgrounds/`
- `"use client"` directive present on all
- `fixed inset-0 z-0 pointer-events-none` on all canvas/div elements
- All canvas-based components: `cancelAnimationFrame(rafId)` on unmount ✅
- All canvas-based components: `window.removeEventListener("resize", resize)` on unmount ✅
- `ResumeBackground`: CSS-only, no RAF needed, correct pattern ✅
- Opacity values are appropriately low throughout (max ~0.35 nodes, 0.09 chars) ✅
- No `filter: blur` on canvas-overlaid divs ✅

**TASK-002 — Wiring:**
| Page | Background | Accent CSS var |
|---|---|---|
| `/about` | `AboutBackground` | `#8b5cf6` violet ✅ |
| `/experience` | `ExperienceBackground` | `#f59e0b` amber ✅ |
| `/skills` | `SkillsBackground` | `#06b6d4` cyan ✅ |
| `/projects` | `ProjectsBackground` | `#10b981` emerald ✅ |
| `/apps` | `AppsBackground` | `#a855f7` purple ✅ |
| `/resume` | `ResumeBackground` | `#94a3b8` slate ✅ |
| `/contact` | `ContactBackground` | `#f43f5e` rose ✅ |
| `/tools` | `ToolsBackground` | none set ⚠️ |

**Smoke test — HTTP 200 on all 9 routes:**
- `/` ✅ `/about` ✅ `/experience` ✅ `/skills` ✅ `/projects` ✅
- `/apps` ✅ `/resume` ✅ `/contact` ✅ `/tools` ✅

**Dev server:** Zero errors or warnings in `dev.log` ✅

**Regression — Header/Footer:** Present on all pages verified (about, tools checked) ✅

**Memory leak pattern:** All `useEffect` cleanups cancel their RAF and remove the resize listener. The ContactBackground also handles array cleanup of `rings`. No runaway loops detected in code. ✅

---

---

## OWNER DIRECTION (Round 3 — overrides FIX-001)

**Owner decision:** Uniform accent color across the entire site. Backgrounds give each page its personality — foreground accent (text, dividers, buttons, dots) must be the same on every page. Per-page `--accent` CSS variable overrides are NOT wanted.

This supersedes Hancock's original FIX-001 framing (which asked to make foreground accents match each background color). The owner's position is the opposite: keep the single site-wide sky-blue accent from `tailwind.config.ts`, and remove the per-page `style` overrides.

---

## APPROVED FOR DEPLOYMENT?

- [ ] ✅ YES
- [ ] ⚠️ CONDITIONAL
- [x] ❌ NO — BUG-006 and BUG-008 must be fixed and re-reviewed

**Round 3 blockers:**

### BUG-006 (still open)
**Severity:** High
`AboutBackground.tsx` renders amber `rgba(245, 158, 11, ...)` — same color as ExperienceBackground. Two pages, same-colored backgrounds.
**Fix:** Restore violet `rgba(139, 92, 246, ...)` on lines 57 and 69 of `AboutBackground.tsx`.
**Assigned to:** NARUTO

### BUG-008 ⭐ NEW — Round 3
**Severity:** High
`ExperienceBackground.tsx` was changed to orange `rgba(249, 115, 22, ...)` — the same color as `ToolsBackground`. Experience page and Tools page now have identical-colored backgrounds. Before this change, Experience was amber (#f59e0b). It is now orange (#f97316), matching Tools exactly.
**Fix:** Restore amber `rgba(245, 158, 11, ...)` on lines 31 and 51 of `ExperienceBackground.tsx`, OR choose a distinct color that doesn't duplicate any other page.
**Assigned to:** NARUTO

### FIX-001 (owner direction — revised)
**Severity:** Medium
Remove per-page `style={{ "--accent": "...", "--accent-dark": "..." }}` from the root `<div>` on all 8 inner pages. The sitewide sky-blue accent from `tailwind.config.ts` is the intended foreground accent. The CSS variable overrides are unused by Tailwind classes (they render sky-blue regardless) but should be removed to avoid confusion and future bugs.

Pages to clean up: `/about`, `/experience`, `/skills`, `/projects`, `/apps`, `/resume`, `/contact` (the root div `style` prop on each).

Note: `/tools` already uses hardcoded `text-[#f97316]` inline — Hancock flagged this as the benchmark for how orange works there. Now that the owner wants a uniform accent, consider whether `/tools` should align to sky-blue too, or remain orange as a deliberate exception. Owner to confirm.

**Assigned to:** NARUTO

---

**Cleared since round 1:** BUG-001 (TypeScript), BUG-005 (contact email via Resend), BUG-003 partially (ExperienceBackground now has `visibilitychange` handler)

**Remaining low-priority (not blocking):** BUG-002 (resume PDF), BUG-003 (6 remaining canvas components still lack visibility pause), BUG-007 (API spec deviation), Hancock FIX-002 (404 page)

## Re-test scope (round 4)
- Verify `AboutBackground.tsx` renders violet on `/about`
- Verify `ExperienceBackground.tsx` renders amber on `/experience`
- Verify no two pages share the same background color
- Verify per-page `--accent` style props removed from all inner page root divs
- `next build` passes

## Deploy command (when BUG-006 + BUG-008 + FIX-001 resolved)
```
vercel --prod
```
