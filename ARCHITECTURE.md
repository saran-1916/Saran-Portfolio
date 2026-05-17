# Architecture — Saran Portfolio: Unique Page Backgrounds
Designed by: NAMI
Date: 2026-05-12

---

## System Overview

This is a **fully static Next.js portfolio site**. No dedicated backend server. No runtime database queries. No auth.

```
Browser
  ↓ (static HTML + JS bundle)
Next.js 16 App Router (Vercel Edge / SSG)
  ↓ (contact form submission only)
Vercel Serverless Function  →  Resend API (email delivery)
  ↓ (optional persistence)
Supabase PostgreSQL (contact_messages table only)
```

All page content is authored directly in component files or in `data/*.ts` static files. Nothing is fetched at runtime from a database for rendering.

---

## Tech Stack

| Layer | Technology | Version | Notes |
|---|---|---|---|
| Framework | Next.js App Router | 16.2.6 | Breaking changes from Next 13–15 — read `node_modules/next/dist/docs/` |
| UI | React | 19.2.4 | Server components available but all pages currently `"use client"` |
| Styling | Tailwind CSS | v4 | Config in `tailwind.config.ts`; globals in `app/globals.css` |
| Animation | Framer Motion | 12.x | Used for page transitions and micro-interactions |
| Canvas Animation | Native Canvas API | — | Used in all background components (no library) |
| Forms | react-hook-form + zod | latest | Contact form validation |
| Fonts | next/font/google | — | Inter (sans) + JetBrains Mono |
| Deploy | Vercel | — | Static export or Edge runtime |

---

## Routes

| Route | File | Background Component | Accent Color |
|---|---|---|---|
| `/` | `app/page.tsx` | `HomeBackground` (Framer Motion blobs) | Sky `#0ea5e9` |
| `/about` | `app/about/page.tsx` | `AboutBackground` (neural network) | Violet `#8b5cf6` |
| `/experience` | `app/experience/page.tsx` | `ExperienceBackground` (blueprint grid) | Amber `#f59e0b` |
| `/skills` | `app/skills/page.tsx` | `SkillsBackground` (orbiting rings) | Cyan `#06b6d4` |
| `/projects` | `app/projects/page.tsx` | `ProjectsBackground` (polygon mesh) | Emerald `#10b981` |
| `/apps` | `app/apps/page.tsx` | `AppsBackground` (code rain) | Purple `#a855f7` |
| `/resume` | `app/resume/page.tsx` | `ResumeBackground` (scan line) | Slate `#94a3b8` |
| `/contact` | `app/contact/page.tsx` | `ContactBackground` (wave rings) | Rose `#f43f5e` |
| `/tools` | `app/tools/page.tsx` | `ToolsBackground` (circuit traces) | Orange `#f97316` |

---

## Component Architecture

```
app/
  layout.tsx              → Root layout: fonts, metadata, body bg
  globals.css             → CSS variables (--accent, --accent-dark), Tailwind @theme
  page.tsx                → Home — uses HomeBackground
  about/page.tsx          → "use client" — uses AboutBackground
  experience/page.tsx     → "use client" — uses ExperienceBackground
  skills/page.tsx         → "use client" — uses SkillsBackground
  projects/page.tsx       → "use client" — uses ProjectsBackground
  apps/page.tsx           → "use client" — uses AppsBackground
  resume/page.tsx         → "use client" — uses ResumeBackground
  contact/page.tsx        → "use client" — uses ContactBackground
  tools/page.tsx          → "use client" — uses ToolsBackground

components/
  backgrounds/
    AboutBackground.tsx         → Canvas: 42 drifting nodes + connecting lines (#8b5cf6)
    ExperienceBackground.tsx    → Canvas: blueprint grid, slow-pan (#f59e0b)
    SkillsBackground.tsx        → Canvas: 3 concentric rotating rings + dots (#06b6d4)
    ProjectsBackground.tsx      → Canvas: polygon mesh, drifting vertices (#10b981)
    AppsBackground.tsx          → Canvas: code rain columns, max 0.12 opacity (#a855f7)
    ResumeBackground.tsx        → CSS-only: noise texture + scan line loop 8s (#94a3b8)
    ContactBackground.tsx       → Canvas: wave rings from center, 1 new ring/2s (#f43f5e)
    ToolsBackground.tsx         → Canvas: PCB traces + circuit node dots (#f97316)
  AnimatedBackground.tsx        → Legacy fallback — keep, do not delete
  HomeBackground.tsx            → CSS/Framer Motion blobs — home page only

  Header.tsx
  Footer.tsx
  SectionWrapper.tsx
  GlassCard.tsx
  AnimatedDivider.tsx
  AnimatedHeading.tsx
  PremiumButton.tsx
  PremiumInput.tsx
  PremiumTextarea.tsx
  PremiumSubmitButton.tsx
  PremiumSkillBadge.tsx
  PremiumSocialCard.tsx
  ProjectCard.tsx
  AppCard.tsx
  SkillCard.tsx
  TimelineItem.tsx
  Spotlight.tsx
  NoiseOverlay.tsx
  ContactHero.tsx
  EngineeringHeroVisual.tsx

data/
  experience.ts    → Static array of experience entries
  projects.ts      → Static array of project entries
  apps.ts          → Static array of app entries
  skills.ts        → Static array of skill entries
  tools.ts         → Static array of tools entries
```

---

## Background Component Interface Contract

Every background in `components/backgrounds/` must conform to this interface:

```tsx
"use client";

import { useEffect, useRef } from "react";

export default function XxxBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const animate = () => {
      // draw frame
      rafId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}
```

Rules:
- `"use client"` always present
- `fixed inset-0 z-0 pointer-events-none` always on the root element
- No props accepted — fully self-contained
- `cancelAnimationFrame` AND `removeEventListener` in the cleanup return
- Canvas opacity: keep all alpha values low (nodes < 0.4, lines < 0.2, fills < 0.12)
- CSS-only backgrounds (e.g. ResumeBackground) use a `div` instead of `canvas` but still follow fixed/inset-0/z-0/pointer-events-none

---

## Accent Color System

### How it currently works

`tailwind.config.ts` defines a hardcoded `accent` color scale (sky-blue, `#0ea5e9` family). `app/globals.css` defines `--accent` and `--accent-dark` CSS custom properties. These two systems are **independent** — Tailwind's `text-accent-400` resolves to the hardcoded `#38bdf8` from the config, **not** from the CSS variable.

`var(--accent)` is only consumed by: `a` elements, `::selection`, and any inline styles that explicitly reference it.

### Per-page accent approach (TASK-002)

The cleanest override is a `style` attribute on the page root `<div>` setting the CSS variables. This affects all child elements that use `var(--accent)` directly:

```tsx
<div
  className="relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden"
  style={{ "--accent": "#8b5cf6", "--accent-dark": "#7c3aed" } as React.CSSProperties}
>
```

For Tailwind utility classes (`text-accent-400`, `bg-accent-500`), these resolve from the config and are **not** overridable via CSS variables at runtime. Naruto must use arbitrary value classes for the hero accent elements:

```tsx
// Instead of: text-accent-400
// Use: text-[#8b5cf6]    (violet, About)
// Use: text-[#f59e0b]    (amber, Experience)
// etc.
```

Only the hero heading gradient span and the leading accent line need the per-page color. Section body copy and card borders can stay neutral (`text-slate-400`, `border-slate-800`).

### Accent reference table

| Page | Accent | Dark |
|---|---|---|
| Home | `#0ea5e9` | `#0284c7` |
| About | `#8b5cf6` | `#7c3aed` |
| Experience | `#f59e0b` | `#d97706` |
| Skills | `#06b6d4` | `#0891b2` |
| Projects | `#10b981` | `#059669` |
| Apps | `#a855f7` | `#9333ea` |
| Resume | `#94a3b8` | `#64748b` |
| Contact | `#f43f5e` | `#e11d48` |
| Tools | `#f97316` | `#ea580c` |

---

## Page Layout Pattern

Every inner page follows this shell:

```tsx
"use client";

return (
  <div
    className="relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden"
    style={{ "--accent": "<page-accent>", "--accent-dark": "<page-accent-dark>" } as React.CSSProperties}
  >
    <XxxBackground />           {/* z-0, fixed */}
    <div className="relative z-20">
      <Header />
      <main className="relative z-10">
        {/* hero section + section wrappers */}
      </main>
      <Footer />
    </div>
  </div>
);
```

Z-index layering:
- `z-0` — background canvas (behind everything)
- `z-10` — main content sections
- `z-20` — wrapper div containing header, main, footer
- `z-50` — hero text (within the hero section)

---

## Contact Form

The contact page submits a form (react-hook-form + zod) to an API route or serverless function. The form fields are: `name`, `email`, `subject`, `message`.

Delivery options (Naruto implements, Itachi owns if a serverless route is built):
- Option A: `app/api/contact/route.ts` (Next.js Route Handler) → Resend API
- Option B: Supabase insert into `contact_messages` table (see DATABASE_SCHEMA)

Currently no contact form API route exists in the repo. Naruto must not leave the form unconnected.

---

## Performance Rules

- All canvas RAF loops must pause when `document.hidden === true` (visibility API)
- No `setInterval` — only `requestAnimationFrame`
- No `filter: blur` on elements positioned over the canvas
- Canvas opacity values: all low (see contract above)
- Lighthouse target: > 85 on all pages (> 90 on home)

---

## Environment Variables

No secrets required for the static rendering layer.

If a contact form API route is built:

```
RESEND_API_KEY=           # email delivery
NEXT_PUBLIC_SITE_URL=     # for CORS / form submission URL
SUPABASE_URL=             # optional — only if persisting contact messages
SUPABASE_SERVICE_ROLE_KEY= # server-side only, never NEXT_PUBLIC_
```

Never expose `SUPABASE_SERVICE_ROLE_KEY` or `RESEND_API_KEY` as `NEXT_PUBLIC_*`.
