# Project Brief: Portfolio — Unique Page Backgrounds
Captain's Log — 2026-05-11

## One-line mission
Give every page of the portfolio its own distinct animated background and visual identity, so no two pages feel the same.

## Who uses it
Recruiters, hiring managers, and collaborators visiting Saran's portfolio — they need to feel the progression and personality of each section as they navigate through the site.

## The Problem
Right now every inner page (About, Experience, Skills, Projects, Apps, Resume, Contact, Tools) shares a single `AnimatedBackground` component — blue floating particles on dark. The Home page has its own `HomeBackground` (cinematic glow blobs), but all 8 inner pages are visually identical. Visiting any inner page feels like the same room.

## Core features (MVP only)
1. Each of the 9 pages gets a unique background component with its own color palette, particle/animation style, and visual metaphor tied to that page's content.
2. All backgrounds are performance-safe: canvas or CSS-only, fixed position, pointer-events-none, z-0, no janky repaints.
3. Page-level accent colors update to match each background (via CSS variables or inline overrides), so headings, buttons, and dividers reflect the page identity.

## Page-by-page background designs

| Page | Visual Metaphor | Accent Color | Animation Style |
|---|---|---|---|
| Home (`/`) | Cinematic glow spotlights *(keep existing HomeBackground)* | Sky blue `#0ea5e9` | Floating orbs, grid overlay |
| About (`/about`) | Neural network / flowing connections | Violet `#8b5cf6` | Drifting nodes + connecting lines |
| Experience (`/experience`) | Blueprint / technical schematic grid | Amber `#f59e0b` | Slow-pan blueprint lines, faint crosshairs |
| Skills (`/skills`) | Orbiting rings / skill constellation | Cyan `#06b6d4` | Concentric rotating rings, scattered dots |
| Projects (`/projects`) | Polygon mesh / structural wireframe | Emerald `#10b981` | Expanding/contracting triangular mesh |
| Apps (`/apps`) | Code rain / binary matrix | Purple `#a855f7` | Vertical streaming characters (minimal, classy) |
| Resume (`/resume`) | Paper grain / subtle document texture | Slate `#94a3b8` | Very subtle noise + single slow scanning line |
| Contact (`/contact`) | Signal waves / ripple rings | Rose `#f43f5e` | Concentric wave rings emanating from center |
| Tools (`/tools`) | Circuit board traces | Orange `#f97316` | Animated PCB-style line traces |

## NOT building right now
- Dark/light mode toggle
- Page transition animations between routes
- Parallax scroll effects
- Sound or haptic feedback

## Success condition
This project is complete when: every page visible in the browser has a visually distinct background with its own color, animation style, and feel — confirmed by Hancock's visual review and Shikamaru's smoke test across all pages.

## Crew assignments
- NARUTO: Build all background components + wire them into each page (TASK-001 + TASK-002)
- HANCOCK: Full visual review pass across all 9 pages (TASK-003)
- SHIKAMARU: Smoke test + performance check + regression on all routes (TASK-004)
