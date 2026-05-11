# TASK-004: QA — Smoke Test, Performance, Regression
Assigned to: SHIKAMARU
Priority: High
Depends on: TASK-003 (Hancock must approve first)
Status: TODO

## What to test

Read Naruto's handoff and Hancock's review first. Then run `npm run dev` and execute the test plan below.

### Smoke test — every route
- [ ] `/` — Home loads, no console errors
- [ ] `/about` — loads, unique background visible
- [ ] `/experience` — loads, unique background visible
- [ ] `/skills` — loads, unique background visible
- [ ] `/projects` — loads, unique background visible
- [ ] `/apps` — loads, unique background visible
- [ ] `/resume` — loads, unique background visible
- [ ] `/contact` — loads, unique background visible
- [ ] `/tools` — loads, unique background visible

### Performance check
- [ ] Open DevTools → Performance tab. Record 5 seconds on each page. No frame drops to < 30fps visible in the frame chart.
- [ ] Check that background canvas/animation components do NOT run when the tab is hidden (`document.hidden` — ideally they pause).
- [ ] Lighthouse audit on `/` and `/about`: Performance score must stay > 85.
- [ ] No `console.error` or `console.warn` messages in any page's DevTools.

### Regression check
- [ ] Header navigation links still work on every page
- [ ] Footer renders correctly on every page
- [ ] Resume download button (if present) still works
- [ ] Contact form (if present) still submits / shows validation
- [ ] All existing content (text, cards, timelines) still displays correctly — backgrounds should be purely additive, not breaking layout

### Canvas cleanup check
- [ ] Navigate to `/about`, then navigate away to `/experience`. Open DevTools Memory tab. Confirm no runaway canvas animation loops (no steadily climbing JS heap).

### Cross-browser (minimum)
- [ ] Chrome: all pages render correctly
- [ ] Firefox: all pages render correctly
- [ ] Mobile Chrome at 375px: backgrounds don't overflow or break layout

## Acceptance criteria
- [ ] All smoke tests pass
- [ ] Performance > 85 Lighthouse on spot-checked pages
- [ ] No regressions on existing content or navigation
- [ ] No memory leaks from animation loops

## Notes
- Write your report to `/handoffs/shikamaru-report-TASK-004.md`
- If you find a canvas memory leak, report it to Naruto with: component name, reproduction steps, and the expected fix (cancel the RAF + remove the resize listener in the useEffect cleanup).
- This is a portfolio site — no auth, no calculations, no payroll math. Security and calculation sections of your standard checklist are NOT applicable here. Focus on visual correctness, performance, and regression.
