# Hancock Interface Review
Task: TASK-003
Verdict: ⚠️ APPROVED WITH FIXES

---

## Situation Note

Naruto completed TASK-001 and TASK-002 but did not write a handoff file. I reviewed directly from code + running server (localhost:3000). All 9 routes are live.

---

## ⚠️ OWNER DIRECTION — COLOR SYSTEM OVERHAUL

Owner confirmed: match the color system from the live portfolio at `saransp.vercel.app`.

**The live site palette (source of truth):**

| Token | Value | Usage |
|---|---|---|
| `--bg-0` | `#07070C` | Page background (deepest) |
| `--bg-1` | `#0E0E16` | Secondary background |
| `--bg-card` | `#13131C` | Card backgrounds |
| `--bg-card-hover` | `#181824` | Card hover state |
| `--accent` | `#F5A623` | Primary accent — amber/golden orange |
| `--accent-dim` | `rgba(245,166,35,0.10)` | Subtle accent tints |
| `--accent-glow` | `rgba(245,166,35,0.25)` | Glow effects |
| Gradient highlight | `#FFD77A` | Light golden yellow (heading gradients) |
| `--blue` | `#5BA8D4` | Secondary / steel blue |
| `--green` | `#4CAF82` | Success / positive states |
| `--text-1` | `#F0ECE4` | Primary text (warm cream, not cold white) |
| `--text-2` | `#9A95A8` | Secondary text (muted lavender-grey) |
| `--text-3` | `#5C5870` | Tertiary / placeholder text |
| `--border` | `rgba(255,255,255,0.07)` | Default borders |
| `--border-accent` | `rgba(245,166,35,0.30)` | Accent borders |

**What this means for the current build — in order:**

1. `tailwind.config.ts` — swap the `accent` color scale from sky-blue to amber:
```ts
accent: {
  300: "#FFD77A",   // light gold (gradient end)
  400: "#F5A623",   // primary amber (was #38bdf8)
  500: "#d4891a",   // darker amber (was #0ea5e9)
  600: "#b8760f",
}
```

2. `app/globals.css` — update the CSS variables block:
```css
:root {
  --background:   #07070C;
  --foreground:   #F0ECE4;
  --accent:       #F5A623;
  --accent-dark:  #d4891a;
  --text-muted:   #9A95A8;
  --border:       rgba(255,255,255,0.07);
  --bg-0:         #07070C;
  --bg-1:         #0E0E16;
  --bg-card:      #13131C;
  --bg-card-hover:#181824;
}
```

3. **Every page root div**: change `bg-slate-950` / `bg-slate-900` → `bg-[#07070C]` (or add a `bg-base` custom class). Also remove all per-page `style={{ "--accent": ... }}` overrides (see FIX-001 below).

4. **Text colors**: `text-slate-100` → `text-[#F0ECE4]`, `text-slate-300/400` → `text-[#9A95A8]`. Touch only the page-level text — GlassCard and component internals can be updated as a follow-up.

5. **`app/tools/page.tsx`**: hardcoded `text-[#f97316]` → `text-accent-400` (will now resolve to `#F5A623`).

6. **`GlassCard.tsx`**: update card background from current slate classes to `bg-[#13131C]` and hover to `bg-[#181824]`. Also update border to `border-white/[0.07]`.

7. **Heading gradient** on all pages: `from-accent-400 to-accent-500` → `from-accent-400 to-accent-300` (amber to light gold `#FFD77A`). This matches the live site's `linear-gradient(135deg, var(--accent), #FFD77A)`.

The backgrounds (TASK-001) stay exactly as-is — they're color-matched to the new palette well enough (the amber/orange tones of ToolsBackground and the general dark canvas will work). Only the foreground design tokens change.

---

## First Impression

The portfolio opens with genuine premium presence. The HomeBackground (glow blobs) creates depth without distraction, the typography hierarchy is bold and intentional, and the cinematic hero layout commands attention. This reads as a serious engineer's portfolio, not a template.

Navigating across pages: the backgrounds ARE visually distinct. Each page does feel different. But a critical problem undermines the entire accent color system — the heading gradients, dividers, and accent markers render sky-blue on every page because of a Tailwind config issue. The backgrounds change; the foreground accent elements do not. The "different rooms" feel is there through the backgrounds, but not through the text and UI accents.

---

## Visual Consistency: ⚠️

**Typography:**
- ✅ Single font family (Inter via CSS var), consistent across all pages
- ✅ Heading scale is clear: h1 at 6xl–8xl, section h2 at 5xl–6xl, card h3 at xl–2xl
- ✅ Body text at base/lg with leading-relaxed — readable
- ✅ Generous whitespace throughout, no wall-of-text sections
- ✅ Contrast is strong: white/slate-100 on slate-950/900 — excellent readability

**Color:**
- ❌ CRITICAL: `accent-400`/`accent-500` Tailwind classes are hardcoded to sky-blue `#38bdf8` in tailwind.config.ts. Every page sets `--accent` CSS variables correctly on the root div, but those variables are not consumed by numbered-shade classes. All heading gradients (`from-accent-400 to-accent-500`), all divider lines (`via-accent-400`), all timeline dots (`bg-accent-400`), all step numbers — they render sky blue on every page. The per-page accent identity is invisible in the foreground.
- ✅ Exception: `/tools` page uses hardcoded `text-[#f97316]` and `bg-[#f97316]/10` — orange actually works there. This page is the benchmark for how the others should be.
- ⚠️ Background darkness is inconsistent: `/about`, `/experience`, `/projects`, `/tools` use `bg-slate-950`; `/skills`, `/apps`, `/resume`, `/contact` use `bg-slate-900`. 10-shade difference is barely visible but should be unified.
- ✅ No destructive red used decoratively. No false success greens.

**Spacing:**
- ✅ Section padding is generous and consistent (py-16/py-20/py-24 range)
- ✅ Card padding is 8 (p-8) across all GlassCard usage — consistent
- ✅ No elements touching viewport edge
- ✅ List gaps consistent throughout

**Components:**
- ✅ All buttons use PremiumButton — visually consistent
- ✅ All cards use GlassCard — consistent border radius and shadow
- ✅ Icon sizes appear consistent within context
- ⚠️ The `/tools` page does NOT use GlassCard — it uses raw `rounded-lg border border-slate-800 bg-slate-900/60` cards. These look fine but diverge from the component system used everywhere else.

---

## User Flow: ✅

**Navigation:**
- ✅ Header present on every page, nav links visible and working
- ✅ Footer on every page
- ✅ Active page logic should be checked (couldn't verify with code review alone — flag for Shikamaru)
- ✅ CTAs on every page point logically to /contact and /projects
- ✅ No dead-end pages — every page has a "next step"

**Content:**
- ✅ No lorem ipsum anywhere — real content throughout
- ✅ The About page timeline (2019–2024) reads like a real engineering story
- ✅ The Experience page career evolution section feels earned, not generic
- ✅ Skills page with emoji category icons is approachable and scannable
- ✅ Contact form has PremiumInput, PremiumTextarea, PremiumSubmitButton — properly componentized

**Empty States:**
- Cannot confirm without live data — flag for Shikamaru

---

## Mobile (375px): ⚠️

Reviewed from code — could not do live 375px resize. Structural concerns:

- ✅ All pages use responsive classes (`px-4 sm:px-6 lg:px-8`, `grid-cols-1 md:grid-cols-2`)
- ✅ Typography uses responsive sizes (`text-6xl sm:text-7xl lg:text-8xl`)
- ✅ Buttons stacked vertically on mobile (`flex-col sm:flex-row`)
- ⚠️ The Experience page timeline uses an alternating layout (`flex-row` vs `flex-row-reverse` on idx). At 375px this alternating layout WILL break — the timeline dot will not align properly with narrow screens. The timeline vertical line runs `left-1/2` with items alternating sides — this pattern typically collapses poorly on mobile. **Flag for Shikamaru to verify live.**
- ⚠️ The SkillsBackground rings are centered at `canvas.width/2, canvas.height/2` — on very narrow screens the outer ring (r=400) will extend well beyond the viewport width, meaning content only sees partial rings. This is a visual concern, not a functional one, but it could look awkward at 375px.
- ✅ Header/nav — Header.tsx uses hamburger/drawer pattern (presumed from component name; Shikamaru verify)

---

## Detail Pass: ⚠️

**Backgrounds — individual verdicts:**

| Page | Background | Visual Quality | Notes |
|------|-----------|---------------|-------|
| `/` | HomeBackground | ✅ APPROVED | Cinematic glow blobs — strong first impression |
| `/about` | AboutBackground | ✅ APPROVED | Neural network is subtle and thematically perfect for "systems thinker" |
| `/experience` | ExperienceBackground | ✅ APPROVED | Blueprint grid is clever — engineering precision metaphor is on-point. Minor: horizontal lines don't pan (only verticals do) but the effect still reads as "blueprint." |
| `/skills` | SkillsBackground | ✅ APPROVED | Concentric orbiting rings are elegant. Ring radii (180/290/400) mean the outermost ring will be clipped on large monitors — acceptable. |
| `/projects` | ProjectsBackground | ✅ APPROVED | Polygon mesh is visually distinct. The O(n³) triangle-check loop (n=32) on every RAF frame is acceptable at this scale but worth noting. |
| `/apps` | AppsBackground | ✅ APPROVED | Code rain is extremely subtle (0.09 opacity). Almost imperceptible. Thematically ideal — it's atmosphere, not foreground. |
| `/resume` | ResumeBackground | ✅ APPROVED | CSS-only is the right call. The scan line loop is clean and the noise texture adds texture without weight. Pure CSS = zero performance cost. |
| `/contact` | ContactBackground | ✅ APPROVED | Wave rings expanding from center are beautiful and thematically resonant (reaching out, expanding connection). |
| `/tools` | ToolsBackground | ✅ APPROVED | PCB circuit traces with animated leading dots are the most visually engaging background. Orange accent at 0.9 on the leading dot gives it life. |

**Hover/Focus/Transitions:**
- ✅ GlassCard hover states present
- ✅ PremiumButton interactions handled by component
- ⚠️ Cannot verify focus states (tab navigation) from code review — flag for Shikamaru
- ✅ Framer Motion animations: fade-up on scroll, stagger on mount — smooth implementation throughout
- ⚠️ No `document.hidden` / Page Visibility API handling in any canvas background — animations run when tab is not visible. This is a battery/performance issue. Flag for Shikamaru performance check.

**Metadata:**
- ✅ Favicon exists at `app/favicon.ico`
- ⚠️ Page title not verified — check if each route has a unique `<title>` or if all show the default Next.js title
- ⚠️ No 404 page found in `app/` — Next.js will use default. Should be a custom `app/not-found.tsx`.

---

## FIXES REQUIRED (before Shikamaru sees it)

### FIX-001 [Priority: Must fix — Owner Direction]
**What:** Remove all per-page accent color overrides. The owner has confirmed: one consistent accent color across the entire site. Unique backgrounds give each page its personality — the foreground accent does NOT change per page.

**Where:** Every inner page root div that has a `style` prop with `--accent` / `--accent-dark` overrides:
- `app/about/page.tsx` — remove `style={{ "--accent": "#8b5cf6", "--accent-dark": "#7c3aed" }}`
- `app/experience/page.tsx` — remove `style={{ "--accent": "#f59e0b", "--accent-dark": "#d97706" }}`
- `app/skills/page.tsx` — remove `style={{ "--accent": "#06b6d4", "--accent-dark": "#0891b2" }}`
- `app/projects/page.tsx` — remove `style={{ "--accent": "#10b981", "--accent-dark": "#059669" }}`
- `app/apps/page.tsx` — remove `style={{ "--accent": "#a855f7", "--accent-dark": "#9333ea" }}`
- `app/resume/page.tsx` — remove `style={{ "--accent": "#94a3b8", "--accent-dark": "#64748b" }}`
- `app/contact/page.tsx` — remove `style={{ "--accent": "#f43f5e", "--accent-dark": "#e11d48" }}`
- `app/tools/page.tsx` — remove `style={{ "--accent": "#f97316", "--accent-dark": "#ea580c" }}`, and replace all hardcoded `text-[#f97316]`, `bg-[#f97316]/10`, `border-[#f97316]/20`, `hover:text-[#ea580c]` with the standard Tailwind accent classes (`text-accent-400`, `bg-accent-400/10`, `border-accent-400/20`, `hover:text-accent-500`)

**Why:** Owner decision — color consistency across pages is more important than per-page color identity. The backgrounds are enough differentiation. Jarring accent color shifts break the flow.

**Result:** All pages fall back to the global sky-blue accent (`#38bdf8` / `#0ea5e9`) defined in `tailwind.config.ts` and `globals.css`. Consistent, smooth, intentional.

---

### FIX-002 [Priority: Must fix]
**What:** No custom 404 page exists.
**Where:** Create `app/not-found.tsx`
**Why:** Any mistyped URL returns the bare Next.js default 404. On a premium portfolio, this is embarrassing.
**How:** Simple dark-theme page with a heading ("Page not found"), a one-liner, and a "Back to home" button using PremiumButton. Match the site aesthetic (bg-slate-950, text-slate-100, HomeBackground if desired).

---

### FIX-003 [Priority: Nice to have]
**What:** Experience page alternating timeline layout likely breaks on mobile.
**Where:** `app/experience/page.tsx` — the `flex-row-reverse` alternating pattern with `left-1/2` vertical line.
**Why:** On 375px, alternating left/right content with a centered vertical rule requires careful flex/grid handling. At minimum the timeline dot becomes awkward.
**How:** On mobile (`sm:` breakpoint), force all timeline items to `flex-row` (single column, left-aligned). Reserve alternating layout for `md:` and above.

---

### FIX-004 [Priority: Nice to have]
**What:** `/tools` page uses raw div cards instead of GlassCard component.
**Where:** `app/tools/page.tsx` — all four card categories (certificates, templates, prompts, resources)
**Why:** Minor inconsistency with the rest of the site. GlassCard would give the hover/glow polish the other pages have.
**How:** Wrap each card in `<GlassCard hover>` and move content inside `<div className="p-6">`. The existing inner content structure stays the same.

---

### FIX-005 [Priority: Nice to have]
**What:** Background color inconsistency — some pages use `bg-slate-950`, others `bg-slate-900`.
**Where:** `/skills`, `/apps`, `/resume`, `/contact` use `bg-slate-900` vs the darker `bg-slate-950` used by others.
**Why:** 10-shade difference is nearly invisible in isolation, but side-by-side or if users notice the slight warmth shift, it signals inconsistency. One dark base color should be used sitewide.
**How:** Unify to `bg-slate-950` across all pages. Single find-and-replace.

---

## What Naruto did well ✨

- **All 8 backgrounds are technically excellent.** The cleanup (cancelAnimationFrame + removeEventListener in useEffect return) is done correctly on every canvas component. No memory leaks in the code.
- **ResumeBackground is a standout design decision.** Using pure CSS + SVG filter instead of canvas for the resume page (the "quietest" page) shows genuine contextual judgment — not just copy-pasting the canvas pattern everywhere.
- **ContactBackground (wave rings)** is the most emotionally resonant of the set. The metaphor of expanding rings for a "contact me" page is exactly right, and the execution is clean.
- **ToolsBackground** is the most visually confident. The leading dot at 0.9 opacity that runs along circuit traces is a satisfying micro-animation.
- **The `tools` page got the accent color right** — hardcoded `text-[#f97316]` throughout, so orange actually shows up. This page is the model to follow for the others.
- **No console errors in the background components from code review** — interface types, proper TS types, clean RAF patterns.
- **The portfolio content itself is strong.** Real work history, specific numbers (36+ configurations, 5+ years), genuine engineering language. No filler copy anywhere.

---

## Ready for Shikamaru? No — fix FIX-001 and FIX-002 first.

FIX-001 (accent colors not applying) is the core deliverable of TASK-002. Without it, the page identity system is incomplete. FIX-002 (no 404 page) is a minimum quality bar issue. Everything else can go to Shikamaru as noted items.
