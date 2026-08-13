# Skill collection

Every skill from every repo this project forked from, vendored directly into `forked-skills/` — not external sibling clones anymore, so this repo is self-contained. 61 skills total across 4 forks; 13 are actively wired into `.claude/skills/` (symlinked to the copies below, not duplicated) and get used by Claude Code in this project. The rest are vendored for completeness and future reuse, not currently active here.

## Actively wired (13)

| Skill | From |
|---|---|
| **threejs-engineering** | ours, `forked-skills/skills` |
| **web-motion** | ours, `forked-skills/skills` |
| **genmedia** | `forked-skills/skills` (fal-ai-community/skills) |
| **fal-models-catalog** | `forked-skills/skills` |
| **fal-recipes** | `forked-skills/skills` |
| **fal-workflow** | `forked-skills/skills` |
| **frontend-design** | `forked-skills/anthropic-skills` |
| **accessible-animation** | `forked-skills/web-animation-skills` |
| **micro-interaction** | `forked-skills/web-animation-skills` |
| **gsap-web** | `forked-skills/web-animation-skills` |
| **a11y-audit** | `forked-skills/ux-ui-agent-skills` |
| **shadcn** | official installer, lives in `.agents/skills/` (not one of the 4 forks) |
| **migrate-radix-to-base** | bundled with the shadcn install; unused so far |

## Vendored, not wired

### `forked-skills/skills` — [fal-ai-community/skills](https://github.com/fal-ai-community/skills)

character-design, cinematography, commercial, fal-gamedev, fal-prompting, fal-redesign, fal-regenerate-3d, fan-cam, genmedia-workflow, marketing, model-routing, storytelling, ugc

`genmedia-workflow` was left out of the active set deliberately — near-duplicate of `fal-workflow`'s Mode B, same reference filenames. `fal-regenerate-3d` is the closest thing to a competitor to this project's own `threejs-engineering`: a fixed rigged-character-selector recipe rather than general-purpose scene generation — see its `SKILL.md` for when it's actually the better fit.

### `forked-skills/web-animation-skills` — [iart-ai/web-animation-skills](https://github.com/iart-ai/web-animation-skills)

60fps-animation, ascii-animation, glassmorphism, lottie-animation, page-transition-animation, svg-animation

### `forked-skills/anthropic-skills` — [anthropics/skills](https://github.com/anthropics/skills)

algorithmic-art, brand-guidelines, canvas-design, claude-api, doc-coauthoring, docx, internal-comms, mcp-builder, pdf, pptx, skill-creator, slack-gif-creator, theme-factory, web-artifacts-builder, webapp-testing, xlsx

`brand-guidelines` is Anthropic's own brand identity — not applicable to this project regardless of activation.

### `forked-skills/ux-ui-agent-skills` — [plugin87/ux-ui-agent-skills](https://github.com/plugin87/ux-ui-agent-skills)

apply-aesthetic, brandkit, design-code, design-component, design-qa, design-review, design-tokens, figma-integration, governance, image-to-code, migrate-design-system, performance, prototype, redesign, token-build, ux-writing

Left inactive as a group deliberately: `design-tokens`/`token-build`/`brandkit` would compete with this site's own hand-built `--ink`/`--paper`/`--wire` token system rather than complement it. Only `a11y-audit` earned activation, since it's the one thing genuinely missing elsewhere.

## Retired

`3D-Website-Builder` — the original custom MCP-plugin approach this project superseded. Deleted; zero references remained anywhere in this repo.
