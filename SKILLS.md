# Skill collection

Every skill from every repo this project forked from, vendored directly into `forked-skills/` — not external sibling clones anymore, so this repo is self-contained. 62 skills total across 4 forks; 13 are actively wired into `.claude/skills/` (symlinked to the vendored copies below, not duplicated) and get used by Claude Code in this project. The rest are vendored for completeness and future reuse, not currently active here.

Grouped below by what each skill actually does, not by which repo it came from — the **Source** column carries the provenance instead.

## Legend

- **Wired** — symlinked into `.claude/skills/` (or `.agents/skills/`) and used by Claude Code in this project today.
- **Source** — `skills` = [fal-ai-community/skills](https://github.com/fal-ai-community/skills), `anthropic` = [anthropics/skills](https://github.com/anthropics/skills), `web-animation` = [iart-ai/web-animation-skills](https://github.com/iart-ai/web-animation-skills), `ux-ui` = [plugin87/ux-ui-agent-skills](https://github.com/plugin87/ux-ui-agent-skills), `ours` = authored by this project, `installer` = official shadcn CLI output, not one of the 4 forks.

## 3D & scene generation

| Skill | Wired | Source | Notes |
|---|---|---|---|
| **threejs-engineering** | ✅ | ours (housed in `forked-skills/skills`) | This project's own skill; not actually forked despite living in the fal-ai-community fork's directory. |
| **fal-regenerate-3d** | | skills | Fixed rigged-character-selector recipe — closest thing to a competitor to `threejs-engineering`. See its `SKILL.md` for when it's the better fit. |

## Media generation (fal / genmedia pipeline)

| Skill | Wired | Source | Notes |
|---|---|---|---|
| **genmedia** | ✅ | skills | CLI this whole pipeline calls for asset generation. |
| **fal-models-catalog** | ✅ | skills | Curated endpoint picks. |
| **fal-recipes** | ✅ | skills | |
| **fal-workflow** | ✅ | skills | |
| **genmedia-workflow** | | skills | Left out of the active set deliberately — near-duplicate of `fal-workflow`'s Mode B, same reference filenames. |
| **fal-prompting** | | skills | |
| **fal-gamedev** | | skills | |
| **fal-redesign** | | skills | |
| **character-design** | | skills | |
| **cinematography** | | skills | |
| **commercial** | | skills | |
| **fan-cam** | | skills | |
| **marketing** | | skills | |
| **model-routing** | | skills | |
| **storytelling** | | skills | |
| **ugc** | | skills | |

## Web animation & motion

| Skill | Wired | Source | Notes |
|---|---|---|---|
| **web-motion** | ✅ | ours (housed in `forked-skills/skills`) | This project's own skill. |
| **gsap-web** | ✅ | web-animation | |
| **accessible-animation** | ✅ | web-animation | |
| **micro-interaction** | ✅ | web-animation | |
| **60fps-animation** | | web-animation | |
| **ascii-animation** | | web-animation | |
| **glassmorphism** | | web-animation | |
| **lottie-animation** | | web-animation | |
| **page-transition-animation** | | web-animation | |
| **svg-animation** | | web-animation | |

## UI, design systems & review

| Skill | Wired | Source | Notes |
|---|---|---|---|
| **frontend-design** | ✅ | anthropic | |
| **a11y-audit** | ✅ | ux-ui | Not self-contained — its `SKILL.md` reaches into sibling `accessibility/`, `scripts/`, `taste/` folders at the `ux-ui-agent-skills` repo root, unlike every other skill here. |
| **shadcn** | ✅ | installer | Lives in `.agents/skills/`. |
| **migrate-radix-to-base** | ✅ | installer | Bundled with the shadcn install; unused so far. |
| **apply-aesthetic** | | ux-ui | |
| **brandkit** | | ux-ui | Would compete with this site's own hand-built `--ink`/`--paper`/`--wire` token system. |
| **design-code** | | ux-ui | |
| **design-component** | | ux-ui | |
| **design-qa** | | ux-ui | |
| **design-review** | | ux-ui | |
| **design-tokens** | | ux-ui | Would compete with this site's own token system, same as `brandkit`. |
| **figma-integration** | | ux-ui | |
| **governance** | | ux-ui | |
| **image-to-code** | | ux-ui | |
| **migrate-design-system** | | ux-ui | |
| **performance** | | ux-ui | |
| **prototype** | | ux-ui | |
| **redesign** | | ux-ui | |
| **token-build** | | ux-ui | Would compete with this site's own token system, same as `brandkit`. |
| **ux-writing** | | ux-ui | |

Left inactive as a group deliberately, aside from `frontend-design`/`a11y-audit`/`shadcn`: `design-tokens`/`token-build`/`brandkit` would compete with this site's own token system rather than complement it. Only `a11y-audit` earned activation from the `ux-ui` fork, since it's the one thing genuinely missing elsewhere.

## Document & content authoring (Anthropic office skills)

| Skill | Wired | Source | Notes |
|---|---|---|---|
| **algorithmic-art** | | anthropic | |
| **brand-guidelines** | | anthropic | Anthropic's own brand identity — not applicable to this project regardless of activation. |
| **canvas-design** | | anthropic | |
| **claude-api** | | anthropic | |
| **doc-coauthoring** | | anthropic | |
| **docx** | | anthropic | |
| **internal-comms** | | anthropic | |
| **mcp-builder** | | anthropic | |
| **pdf** | | anthropic | |
| **pptx** | | anthropic | |
| **skill-creator** | | anthropic | |
| **slack-gif-creator** | | anthropic | |
| **theme-factory** | | anthropic | |
| **web-artifacts-builder** | | anthropic | |
| **webapp-testing** | | anthropic | |
| **xlsx** | | anthropic | |

## Retired

`3D-Website-Builder` — the original custom MCP-plugin approach this project superseded. Deleted; zero references remained anywhere in this repo.
