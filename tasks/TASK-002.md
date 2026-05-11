# TASK-002: Wire Unique Backgrounds Into Every Page
Assigned to: NARUTO
Priority: High
Depends on: TASK-001 (backgrounds must exist first)
Status: TODO

## What to build

Replace the generic `AnimatedBackground` import on each inner page with its dedicated new background component. Also update each page's accent color so headings, dividers, and highlight elements reflect the page identity.

### Wiring map

| Page file | Remove | Add | Accent class swap |
|---|---|---|---|
| `app/about/page.tsx` | `AnimatedBackground` | `AboutBackground` | Replace `text-accent-400` / `bg-accent-*` hints with violet equivalents OR add a page-level CSS variable override (see notes) |
| `app/experience/page.tsx` | `AnimatedBackground` | `ExperienceBackground` | Amber |
| `app/skills/page.tsx` | `AnimatedBackground` | `SkillsBackground` | Cyan |
| `app/projects/page.tsx` | `AnimatedBackground` | `ProjectsBackground` | Emerald |
| `app/apps/page.tsx` | `AnimatedBackground` | `AppsBackground` | Purple |
| `app/resume/page.tsx` | `AnimatedBackground` | `ResumeBackground` | Slate |
| `app/contact/page.tsx` | `AnimatedBackground` | `ContactBackground` | Rose |
| `app/tools/page.tsx` | `AnimatedBackground` | `ToolsBackground` | Orange |

### Accent color approach
The cleanest approach is a `style` override on the page root `<div>` that sets `--accent` and `--accent-dark` CSS variables to the page's accent. This flows through to all child components that use `var(--accent)`.

Example for About page:
```tsx
<div
  className="relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden"
  style={{ "--accent": "#8b5cf6", "--accent-dark": "#7c3aed" } as React.CSSProperties}
>
```

If Tailwind's `text-accent-400` classes are used via hardcoded `[#0ea5e9]` values (not CSS vars), convert them to inline-style spans or use arbitrary value classes `text-[#8b5cf6]` for the hero heading accent only.

### What NOT to change
- Do not alter any content, copy, layout, or data on any page — only swap background + accent color.
- Do not touch `app/page.tsx` (home page) — it already has `HomeBackground`.
- Do not delete or modify `AnimatedBackground.tsx`.

## Acceptance criteria
- [ ] `npm run dev` — all pages load without errors
- [ ] Each page shows its unique background when navigated to
- [ ] No two inner pages share the same background component
- [ ] Page hero accent color visually matches the background's theme color
- [ ] Existing layout, content, and spacing unchanged on every page
- [ ] No TypeScript errors introduced

## Notes
- Run `npm run dev` and click through every route manually before writing the handoff.
- Check the Next.js docs in `node_modules/next/dist/docs/` for any client/server component split rules that affect how CSS variables are passed.
- Write handoff to `/handoffs/naruto→hancock-TASK-002.md` when done.
