# DECISIONS LOG — Portfolio Unique Page Backgrounds

[2026-05-11] LUFFY: Used CSS variable override (`--accent`, `--accent-dark` on the page root div) as the accent color strategy, rather than hardcoded Tailwind color classes per page. This way all child components that consume `var(--accent)` inherit the page color automatically without touching every individual element.

[2026-05-11] LUFFY: Kept existing `AnimatedBackground.tsx` in place (not deleted). It serves as a fallback reference and may be used elsewhere.

[2026-05-11] LUFFY: Home page (`HomeBackground`) left unchanged — it already has a unique, cinematic feel and is the strongest background in the current build.
