# DECISIONS LOG — Portfolio Unique Page Backgrounds

[2026-05-11] LUFFY: Used CSS variable override (`--accent`, `--accent-dark` on the page root div) as the accent color strategy, rather than hardcoded Tailwind color classes per page. This way all child components that consume `var(--accent)` inherit the page color automatically without touching every individual element.

[2026-05-11] LUFFY: Kept existing `AnimatedBackground.tsx` in place (not deleted). It serves as a fallback reference and may be used elsewhere.

[2026-05-12] NARUTO: Tools page kept its light theme (bg-slate-50). Converting to dark would require changing ~30 content text classes throughout the page. Orange PCB traces show faintly on light background — Hancock to judge if acceptable.

[2026-05-12] NARUTO: AppsBackground code rain opacity set to 0.09 (very sparse). Full Matrix-style opacity was too distracting for a portfolio context.

[2026-05-15] NARUTO: Fixed 3 background/accent color mismatches found in TASK-003 visual review — ProjectsBackground was orange (should be emerald #10b981), ContactBackground was orange (should be rose #f43f5e), ResumeBackground was orange (should be slate #94a3b8). All 8 backgrounds now match their page accent.

[2026-05-15] ITACHI: Fixed SkillsBackground orbit rotation speed — removed erroneous `* 1000` multiplier from `angle = t * ring.speed * 1000` which caused rings to spin at ~3 rev/s. Replaced with `angle = t * ring.speed` and scaled speed values to give natural 25–60s orbital periods.

[2026-05-11] LUFFY: Home page (`HomeBackground`) left unchanged — it already has a unique, cinematic feel and is the strongest background in the current build.
