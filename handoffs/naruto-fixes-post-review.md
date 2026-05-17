# NARUTO Post-Review Fixes

Date: 2026-05-12
Fixing issues from HANCOCK review + SHIKAMARU QA report.

## BUG-001 — FIXED
TypeScript build error in `PremiumSkillBadge`:
- Made `level` prop optional with default `"Intermediate"`
- Added `"Beginner"` to the union type and `levelColors` map
- TypeScript now passes ✅

## FIX-001 — FIXED (via CSS, not per-element edits)
Accent color system now works via CSS variables in `app/globals.css`:
- Added `--color-accent-400: var(--accent)` and related variants to `@theme inline`
- In Tailwind v4, this makes ALL `text-accent-400`, `bg-accent-400`, `from-accent-400` etc. respond to the per-page `--accent` CSS variable
- Each page's root div already sets `style={{ "--accent": "<color>" }}` — now that variable cascades to all Tailwind accent utilities

## FIX-002 — FIXED
Created `app/not-found.tsx`:
- Dark theme matching the site aesthetic
- HomeBackground (glow blobs)
- "Lost in the Blueprint" — 404 heading with gradient
- PremiumButton "Back to Home"
- Returns HTTP 404 ✅

## BUG-003 — FIXED
Tab visibility API added to all 7 canvas backgrounds:
- AboutBackground, ExperienceBackground, SkillsBackground, ProjectsBackground, AppsBackground, ContactBackground, ToolsBackground
- Pattern: `document.addEventListener("visibilitychange", handler)` — pauses RAF when hidden, resumes on visible
- Cleaned up in useEffect return

## Accent vars corrected (all pages)
| Page | Accent |
|------|--------|
| /about | Violet `#8b5cf6` ✅ |
| /experience | Amber `#f59e0b` ✅ |
| /skills | Cyan `#06b6d4` ✅ |
| /projects | Emerald `#10b981` ✅ |
| /apps | Purple `#a855f7` ✅ |
| /resume | Slate `#94a3b8` ✅ |
| /contact | Rose `#f43f5e` ✅ |
| /tools | Orange `#f97316` ✅ |

## Background canvas colors corrected
- AboutBackground: `rgba(139, 92, 246, ...)` (violet) ✅
- ExperienceBackground: `rgba(245, 158, 11, ...)` (amber) ✅
- SkillsBackground: `rgba(6, 182, 212, ...)` (cyan) ✅
- AppsBackground: `rgba(168, 85, 247, ...)` (purple) ✅

## Note on BUG-004 (tools light theme)
Already fixed in earlier session — tools page uses `bg-slate-950` dark theme.
All pages now unified on `bg-slate-950`.

## Still open (out of scope for NARUTO)
- BUG-002: Resume PDF 404 — needs actual PDF file at `public/documents/resume.pdf` (owner task)
- BUG-005: Contact form doesn't send email — needs Resend API key (ITACHI task)
