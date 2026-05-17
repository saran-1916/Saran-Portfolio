# Handoff: NARUTO → HANCOCK
Task: TASK-002
Status: Ready for UI review

## What I built

### New components (components/backgrounds/)
| File | Page | Style | Accent |
|---|---|---|---|
| `AboutBackground.tsx` | /about | Canvas neural network — 42 drifting nodes, connecting lines within 150px | Violet #8b5cf6 |
| `ExperienceBackground.tsx` | /experience | Canvas blueprint grid — 60px grid with slow horizontal pan, crosshair marks at intersections | Amber #f59e0b |
| `SkillsBackground.tsx` | /skills | Canvas 3 concentric rotating rings with orbiting dots at different speeds | Cyan #06b6d4 |
| `ProjectsBackground.tsx` | /projects | Canvas polygon mesh — 32 drifting points forming translucent triangles | Emerald #10b981 |
| `AppsBackground.tsx` | /apps | Canvas code rain — sparse falling monospace characters at very low opacity (0.09) | Purple #a855f7 |
| `ResumeBackground.tsx` | /resume | CSS-only — SVG noise texture + animated scan line looping top-to-bottom | Slate #94a3b8 |
| `ContactBackground.tsx` | /contact | Canvas wave rings — expanding from center, 1 new ring every 2s, fade on growth | Rose #f43f5e |
| `ToolsBackground.tsx` | /tools | Canvas PCB traces — animated orange traces along a grid with leading dot + node circles | Orange #f97316 |

### Pages updated
- `app/about/page.tsx` — replaced AnimatedBackground → AboutBackground, accent: violet
- `app/experience/page.tsx` — replaced AnimatedBackground → ExperienceBackground, accent: amber
- `app/skills/page.tsx` — replaced AnimatedBackground → SkillsBackground, accent: cyan
- `app/projects/page.tsx` — replaced AnimatedBackground → ProjectsBackground, accent: emerald
- `app/apps/page.tsx` — replaced AnimatedBackground → AppsBackground, accent: purple
- `app/resume/page.tsx` — replaced AnimatedBackground → ResumeBackground, accent: slate
- `app/contact/page.tsx` — replaced AnimatedBackground → ContactBackground, accent: rose
- `app/tools/page.tsx` — added ToolsBackground, converted root div from `bg-slate-50` (light) to `bg-slate-950` (dark), updated all content text classes to dark-theme equivalents (`text-slate-100`, `text-slate-400`, `border-slate-800`, `bg-slate-900/60`), orange accent via inline `#f97316` colors

## How to run it
`npm run dev` → open localhost:3000

## Routes to check
- / (home — unchanged, verify no regressions)
- /about
- /experience
- /skills
- /projects
- /apps
- /resume
- /contact
- /tools

## Mobile: test these screens
375px (iPhone SE), 768px (tablet), 1280px (desktop)

## Things to pay attention to
- The SkillsBackground rings are centered on the viewport — on very wide screens the rings may not reach edges. That's intentional (rings are atmospheric, not edge-to-edge).
- The ExperienceBackground grid slowly pans horizontally — if it feels too fast or too slow, let me know.
- The tools page was converted to dark theme (bg-slate-950) so the orange PCB traces are visible against the dark background.
- All canvas components clean up RAF + resize listeners in useEffect return.

## Known decisions I made
- /tools page: converted to dark theme (bg-slate-950). Updated all ~30 content text/bg classes for dark theme so the orange PCB background is visible and readable.
- AppsBackground: kept character opacity at 0.09 (very sparse) — at full Matrix opacity it was too distracting. Hancock can push back if it's too faint.
