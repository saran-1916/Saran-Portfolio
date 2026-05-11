# TASK-001: Build Unique Background Components
Assigned to: NARUTO
Priority: High
Depends on: none — start immediately
Status: TODO

## What to build

Create 8 new background components in `components/backgrounds/`. Each is a standalone canvas or pure-CSS animated component. They follow the same interface contract as the existing `AnimatedBackground` and `HomeBackground`:
- `"use client"` directive
- Fixed position, `inset-0`, `z-0`, `pointer-events-none`
- Self-contained — no props required
- Must clean up animation frame / event listeners on unmount

### Components to create

| File | Page | Visual | Accent |
|---|---|---|---|
| `AboutBackground.tsx` | About | Neural network: ~40 drifting nodes, lines drawn between nodes within 150px radius | Violet `#8b5cf6` |
| `ExperienceBackground.tsx` | Experience | Blueprint grid: fine `#f59e0b` lines at 60px intervals, slow horizontal pan, faint crosshair marks at intersections | Amber `#f59e0b` |
| `SkillsBackground.tsx` | Skills | 3 concentric rings that rotate at different speeds (slow), scattered small dots orbiting | Cyan `#06b6d4` |
| `ProjectsBackground.tsx` | Projects | Polygon mesh: ~30 random points connected into triangles, vertices slowly drift | Emerald `#10b981` |
| `AppsBackground.tsx` | Apps | Vertical code-rain columns: sparse monospace characters slowly falling, very low opacity (max 0.12) | Purple `#a855f7` |
| `ResumeBackground.tsx` | Resume | CSS-only: subtle noise texture overlay + a single horizontal scan line that loops top-to-bottom every 8s | Slate `#94a3b8` |
| `ContactBackground.tsx` | Contact | Canvas: concentric wave rings that expand from the center, fade out at edges — 1 new ring every 2s | Rose `#f43f5e` |
| `ToolsBackground.tsx` | Tools | Canvas: PCB-style horizontal and vertical line traces that animate along a grid, circuit node dots | Orange `#f97316` |

### Implementation rules
- All canvas-based components must handle `window.resize` (re-initialize canvas width/height)
- Canvas `requestAnimationFrame` loops must cancel on component unmount
- Keep opacity values low — these are background atmosphere, not foreground content
- No heavy blur filters that cause paint jank (avoid `filter: blur` on canvas-overlaid divs)
- Test that text on top remains readable

## Acceptance criteria
- [ ] 8 files exist under `components/backgrounds/`
- [ ] Each component renders without console errors
- [ ] Each has a visually distinct style that doesn't look like the others
- [ ] Performance: no frame drops visible (requestAnimationFrame only, no setInterval)
- [ ] Cleanup: no memory leaks (listeners and animation frames cancelled on unmount)

## Notes
- The existing `AnimatedBackground` (blue particles) stays — don't delete it. It's still used as a fallback reference.
- Match the existing pattern in `HomeBackground.tsx` and `AnimatedBackground.tsx` for code style.
- Read `node_modules/next/dist/docs/` for any Next.js-specific canvas/client component rules before writing.
