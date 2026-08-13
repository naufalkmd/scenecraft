# Skill collection

Every skill wired into this project (`.claude/skills/`), what it's for, and where it actually lives. This repo doesn't own most of these — they're symlinked in from sibling clones, one skill at a time, deliberately, not a wholesale install of any source repo.

## 3D / assets — from `../skills` ([fal-ai-community/skills](https://github.com/fal-ai-community/skills) fork)

| Skill | Purpose |
|---|---|
| **threejs-engineering** | Ours. Performance-aware React Three Fiber components — camera rigs, instancing, LOD, compressed textures — for a real existing project, not a bundled demo page. |
| **genmedia** | The CLI every fal.ai skill here executes through — search, run, and manage 1200+ model endpoints. |
| **fal-models-catalog** | Curated endpoint defaults by modality, so asset generation doesn't guess a model ID. |
| **fal-recipes** | Use-case pipelines (product shots, commercial, character design) built from chained genmedia calls. |
| **fal-workflow** | The general mechanics of chaining models — sequential compositing, fan-out, JSON workflow authoring. |

## Web motion — from `../web-animation-skills` ([iart-ai/web-animation-skills](https://github.com/iart-ai/web-animation-skills)) + `../skills`

| Skill | Purpose |
|---|---|
| **web-motion** | Ours. Scroll reveals, logo marquees, glow/spotlight, gradient text, bento grids — the DOM/CSS effects Three.js doesn't cover. |
| **accessible-animation** | Tiered `prefers-reduced-motion` handling in CSS and JS. |
| **micro-interaction** | Hover/press states, toasts, drawers, modern CSS (`@starting-style`, `allow-discrete`). |
| **gsap-web** | ScrollTrigger, pinning, scrubbing, Lenis sync — for motion beyond what `web-motion`'s CSS-only patterns cover. |

## Design taste & components — from `../anthropic-skills`, `../ux-ui-agent-skills`, official installers

| Skill | Purpose |
|---|---|
| **frontend-design** | [anthropics/skills](https://github.com/anthropics/skills). Distinctive visual direction — the anti-"AI slop" process used to design this whole page. |
| **a11y-audit** | [plugin87/ux-ui-agent-skills](https://github.com/plugin87/ux-ui-agent-skills) — **only this one skill** from that repo. Real WCAG 2.2 measurement (`measure_render.mjs`, `verify_states.mjs`, `contrast.py`), not eyeballed. The repo's other ~16 skills (design-tokens, brandkit, apply-aesthetic, token-build…) are deliberately **not** installed — they'd fight with this site's own hand-built token system. |
| **shadcn** | Official shadcn/ui skill (`ui.shadcn.com/docs/skills`). Component discovery/install/composition against this project's actual `components.json`. |
| **migrate-radix-to-base** | Came bundled with the shadcn install; unused so far. |

## What's deliberately left out

- **`genmedia-workflow`** (in the fal-ai-community fork) — near-duplicate of `fal-workflow`'s Mode B, same reference filenames. Installing both risked the exact ambiguity that broke `/doctor` earlier in this project's history.
- **Everything in `ux-ui-agent-skills` except `a11y-audit`** — see above.
- **`fal-regenerate-3d`, `fan-cam`, `fal-gamedev`, `fal-redesign`** (fal-ai-community fork) — real, forked, and available in `../skills` if a future project needs them, but not this one; none match what this site does.

## Retired

`3D-Website-Builder` — the original custom MCP-plugin approach this project superseded. Deleted; zero references remained anywhere in this repo.
