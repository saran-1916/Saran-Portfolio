# TASK-003: Visual Review — All Page Backgrounds
Assigned to: HANCOCK
Priority: High
Depends on: TASK-002 (Naruto must finish wiring first)
Status: TODO

## What to review

Run `npm run dev`. Navigate to every page listed below. Judge each against the standard: "Would a hiring manager visiting this portfolio feel that each page has its own personality and identity — or do they all feel the same?"

### Pages to review

| Route | Background | Accent |
|---|---|---|
| `/` | HomeBackground (glow blobs) | Sky blue |
| `/about` | AboutBackground (neural network) | Violet |
| `/experience` | ExperienceBackground (blueprint grid) | Amber |
| `/skills` | SkillsBackground (orbiting rings) | Cyan |
| `/projects` | ProjectsBackground (polygon mesh) | Emerald |
| `/apps` | AppsBackground (code rain) | Purple |
| `/resume` | ResumeBackground (scan line) | Slate |
| `/contact` | ContactBackground (wave rings) | Rose |
| `/tools` | ToolsBackground (circuit traces) | Orange |

### Review checklist per page

**Background quality:**
- [ ] Is the background visually distinct from all other pages?
- [ ] Is the animation fluid and not distracting?
- [ ] Is the opacity/intensity low enough that text is easily readable?
- [ ] Does the visual metaphor match the page topic?

**Accent color:**
- [ ] Does the hero heading accent color match the background?
- [ ] Are buttons, dividers, and highlight elements consistent with the accent?
- [ ] Is there sufficient contrast between the accent and `bg-slate-950`?

**Overall feel:**
- [ ] Does navigating from page to page feel like a journey through different "rooms"?
- [ ] Does any background feel too busy, too faint, or too generic?

## Acceptance criteria
- [ ] All 9 routes reviewed
- [ ] Verdict written for each page (approved / needs fix)
- [ ] Any fix instructions are specific: which component, what to change, why

## Notes
- Write your review to `/handoffs/hancock-review-TASK-003.md`
- If a background is rejected, describe the change clearly so Naruto can fix it without a back-and-forth.
- If Naruto did something unexpectedly good — say so. He works hard.
