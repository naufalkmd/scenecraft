# Scenecraft

Landing page + portable skill (`skill/`) for performance-aware React Three Fiber work, built using the skill it documents. Own hand-built CSS system (`--ink`/`--paper`/`--wire` tokens, hairline borders, zero border-radius) with Tailwind + shadcn/ui layered in only for accessible interactive primitives (Dialog, Button) — not a wholesale utility-class migration. See [README.md](README.md) and [SKILLS.md](SKILLS.md) for full context.

## Skill routing

45 skills are wired into `.claude/skills/` (see [SKILLS.md](SKILLS.md) for the full catalog and provenance). Several clusters overlap in purpose — use this to pick the right one instead of the first plausible match.

**Wiring is all git symlinks.** On Windows the clone needs `core.symlinks=true` (and Developer Mode on, or git can't create them); otherwise every `.claude/skills/` entry checks out as a one-line text file holding a path, and the skills silently don't load. If a skill's description reads like `../../forked-skills/...`, that's what happened — see README.md.

**3D scenes**
- Arbitrary scene, edit to existing 3D code, single object → `threejs-engineering` (default).
- Specifically an interactive rigged-character-selector page → `fal-regenerate-3d` instead. Everything else stays with `threejs-engineering`.

**Landing-page / DOM motion**
- Scroll reveals, logo marquees, glow/spotlight, gradient text, bento grids → `web-motion` (default for this class of ask).
- Scroll-driven pinning, scrubbing, horizontal scroll, timelines, Lenis sync → `gsap-web`.
- Hover/press/toggle feedback, toasts, drawers, modals, list reordering → `micro-interaction`.
- A specific narrow effect was named outright (SVG stroke/morph, glassmorphism, Lottie file, ASCII art, page/route transition, janky-CSS fix) → the matching single-purpose `web-animation-skills` skill (`svg-animation`, `glassmorphism`, `lottie-animation`, `ascii-animation`, `page-transition-animation`, `60fps-animation`).
- `accessible-animation` (reduced-motion handling) is cross-cutting, not a first choice — apply it whenever any of the above adds motion, not instead of them.

**New UI / component code**
- Writing the actual component → `design-code` (default, token-driven, any framework).
- Starting from a screenshot or mockup → `image-to-code` first, then `design-code`'s output pattern.
- Non-trivial component (more than a couple states) → spec it with `design-component` before writing code.
- General aesthetic-direction sanity check (typography, "does this read as templated") → `frontend-design`, alongside `design-code`, not instead of it.

**Choosing a visual direction**
- Naming an archetype or one of the 138 library systems → `apply-aesthetic`. Its output is a token resolution — reconcile it by hand against this project's own `--ink`/`--paper`/`--wire` system rather than applying it wholesale; that's also why `design-tokens`/`token-build`/`brandkit` stay unwired (see SKILLS.md).

**Reviewing existing UI**
These stack, they don't compete — a full pass is typically all four:
- `a11y-audit` — WCAG 2.2 specifics, the deepest accessibility check.
- `design-review` — heuristic critique + prioritized findings table.
- `design-qa` — automated gates (contrast, lint, visual regression across states/themes).
- `performance` — Core Web Vitals (LCP/INP/CLS), page-level speed. One janky animation is `60fps-animation`, not this.

**Upgrading something that already exists**
- Surgical polish without breaking functionality → `redesign`. This is the default for "improve the design" / "redesign this page" / "design pass".
- Wholesale new direction → `apply-aesthetic` + `design-code` instead.
- `fal-redesign` only when the user explicitly wants a generated fal.ai reference mockup to design toward — it makes paid calls, so never as the default for a redesign ask.

**ux-ui kit skills** (`a11y-audit`, `apply-aesthetic`, `design-*`, `figma-integration`, `governance`, `image-to-code`, `migrate-design-system`, `performance`, `prototype`, `redesign`, `ux-writing`)
- When one says "CLAUDE.md → <section>" (Verification Protocol, Component Guidelines, File Reference Map…), it means the kit's own guide, restored at [forked-skills/ux-ui-agent-skills/KIT-GUIDE.md](forked-skills/ux-ui-agent-skills/KIT-GUIDE.md). Read only the cited section; its Request Router and token/type/spacing defaults are overridden by this file.
- When one says `tokens/*.json`, the token source of truth here is the `:root` custom properties in [src/index.css](src/index.css) — the kit's own `tokens/` is deliberately not wired.
- Their render gates (`verify_states.mjs`, `measure_render.mjs`, `axe_audit.mjs`…) `import('playwright')`, which isn't a project dependency yet — they need `npm i -D playwright && npx playwright install chromium` first; until then, report them as not run, and never claim a gate passed without its output. Their `.py` scripts say `python3`; on Windows use `python` / `uv run`.

**Design-system interop** (rare here — this project has its own token system)
- Only trigger `migrate-design-system` if actually adopting/bridging an external system (Material, shadcn, Radix, etc.).
- Only trigger `governance` if formally versioning this project's own tokens/components — unlikely to come up.
- Only trigger `figma-integration` if Figma is actually in the loop.

**Copy, prototyping**
- UI copy (buttons, errors, empty states) → `ux-writing`.
- Early-stage idea/flow shaping before any code → `prototype`.

**3D/media asset generation** (the fal cluster)
`character-design`, `cinematography`, `commercial`, `fan-cam`, `marketing`, `model-routing`, `storytelling`, `ugc`, `fal-prompting`, `fal-gamedev`, `fal-redesign` all assume the `genmedia` CLI is installed and `FAL_KEY` is set — check that before reaching for one. `fal-models-catalog`, `fal-recipes`, and `fal-workflow` are the reference layer these (and `threejs-engineering`/`web-motion`) defer to for endpoint/recipe choice instead of guessing a model ID.
- Endpoint choice: `model-routing` for the defaults inside a production skill (commercial, marketing, ugc, character-design, cinematography, storytelling); `fal-models-catalog` for a general "which model for X".
- A request that names a production skill's subject ("character design", "commercial", "storyboard") goes to that skill, not `fal-recipes`.
**shadcn**
- `shadcn` only when touching `src/components/ui/`. `migrate-radix-to-base` has no use here — this project never started on Radix — leave it untouched unless that changes.

**Testing**
- `webapp-testing` (Playwright) whenever verifying a UI change actually works in-browser — the default way to confirm a change before calling it done, per the project's own testing expectations.

**When in doubt:** prefer the narrowest skill that matches over a broader one that could stretch to fit, and default to this project's own conventions (hairline/zero-radius look, own token system) over any skill's built-in defaults.
