# Skill collection

Every skill from every repo this project forked from, vendored directly into `forked-skills/` — not external sibling clones anymore, so this repo is self-contained. Scoped deliberately to frontend work: general-purpose Anthropic office/dev skills with no frontend angle (`docx`, `pdf`, `pptx`, `xlsx`, `claude-api`, `mcp-builder`, `internal-comms`, `slack-gif-creator`, `doc-coauthoring`, `skill-creator`, `algorithmic-art`, `canvas-design`, `brand-guidelines`) were removed entirely rather than left unwired, so this stays a niche frontend collection instead of a general skill dump. 51 skills total — 49 vendored across 4 forks, plus `shadcn` and `migrate-radix-to-base` from the shadcn installer (in `.agents/skills/`); 47 are actively wired into `.claude/skills/` (symlinked to the vendored copies below, not duplicated — see the note on `ux-ui-agent-skills` in the legend) and get used by Claude Code in this project. The remaining 4 are vendored for completeness but deliberately not wired, one per row below.

Grouped below by what each skill actually does, not by which repo it came from — the **Source** column carries the provenance instead.

Each fork is vendored down to what's actually load-bearing: skill folders plus whatever shared files those skills genuinely read (see **Wired** below). Each fork's own project scaffolding — its README, CI config, `package.json`/lockfile, `.mcp.json`, dev docs, install-CLI entrypoint, marketing assets (`showcase.gif`, `cover.html`) — isn't kept, since nothing in it is read by any skill.

## Legend

- **Wired** — reachable under `.claude/skills/` and used by Claude Code in this project today. Most skills here are a single flat symlink to their vendored copy in `forked-skills/`. Two forks are exceptions, because their skills reach into a shared folder at the fork's own repo root instead of keeping everything inside their own skill folder — each of those skills is wired as a small local directory of nested symlinks (one per file it actually needs, sometimes a whole shared subfolder when the skill draws on it as a library rather than a fixed file list — e.g. `apply-aesthetic`'s 138-system `design-systems/library/`) rather than one flat symlink: all 14 skills from `ux-ui-agent-skills` (shared `accessibility/`, `scripts/`, `taste/`, `tokens/`, `workflows/`, `examples/`, `frameworks/`, `design-systems/`, `content/`, `components/`), and all 9 skills from `web-animation-skills` (a shared `scripts/` verify-loop toolkit — `seek-shot.sh` + `contact-sheet.sh` — that every skill in that fork calls). The `ux-ui` skills also cite their fork's own `CLAUDE.md` (Verification Protocol, Component Guidelines…); it was pruned with the scaffolding and is restored as `forked-skills/ux-ui-agent-skills/KIT-GUIDE.md` — renamed so Claude Code doesn't auto-load its router and token defaults — with the root `CLAUDE.md` pointing to it. Its `tokens/` folder is deliberately not wired except for `figma-integration` and `performance`: this site's tokens live in `src/index.css`.
- **Windows** — every wired entry is a git symlink, so a Windows clone needs Developer Mode on and `core.symlinks=true` (see README). Without it, each one checks out as a one-line text file holding its target path, and the skills don't load.
- **Source** — `skills` = [fal-ai-community/skills](https://github.com/fal-ai-community/skills), `anthropic` = [anthropics/skills](https://github.com/anthropics/skills), `web-animation` = [iart-ai/web-animation-skills](https://github.com/iart-ai/web-animation-skills), `ux-ui` = [plugin87/ux-ui-agent-skills](https://github.com/plugin87/ux-ui-agent-skills), `ours` = authored by this project, `installer` = official shadcn CLI output, not one of the 4 forks.
- **License** — `web-animation-skills` ships a root `LICENSE` (MIT). `anthropic-skills` ships a per-skill `LICENSE.txt` (Apache 2.0) in every skill folder, including the 4 kept here. `skills` (fal-ai-community) is MIT — the actual license text lives in this vendor tree at `forked-skills/skills/skills/fal-redesign/LICENSE`, an odd placement (whole-repo license sitting inside one skill folder) but real. `ux-ui-agent-skills` is the one gap: no `LICENSE` file anywhere, and even the `"license": "MIT"` mention in its `package.json` is gone now that scaffolding was pruned. Not fixed here — fetch the real upstream `LICENSE` from that GitHub repo directly if this needs to be resolved.

## 3D & scene generation

| Skill | Wired | Source | Notes |
|---|---|---|---|
| **threejs-engineering** | ✅ | ours (housed in `forked-skills/skills`) | This project's own skill; not actually forked despite living in the fal-ai-community fork's directory. |
| **fal-regenerate-3d** | ✅ | skills | Fixed rigged-character-selector recipe — closest thing to a competitor to `threejs-engineering`. Only for that character-selector page; both descriptions now point at each other for everything else. |

## Media generation (fal / genmedia pipeline)

| Skill | Wired | Source | Notes |
|---|---|---|---|
| **genmedia** | ✅ | skills | CLI this whole pipeline calls for asset generation. |
| **fal-models-catalog** | ✅ | skills | Curated endpoint picks. |
| **fal-recipes** | ✅ | skills | |
| **fal-workflow** | ✅ | skills | |
| **fal-prompting** | ✅ | skills | |
| **fal-gamedev** | ✅ | skills | |
| **fal-redesign** | ✅ | skills | |
| **character-design** | ✅ | skills | |
| **cinematography** | ✅ | skills | |
| **commercial** | ✅ | skills | |
| **fan-cam** | ✅ | skills | |
| **marketing** | ✅ | skills | |
| **model-routing** | ✅ | skills | |
| **storytelling** | ✅ | skills | |
| **ugc** | ✅ | skills | |
| **genmedia-workflow** | | skills | The one skill left unwired in this fork — near-duplicate of `fal-workflow`'s Mode B, same reference filenames. |

## Web animation & motion

| Skill | Wired | Source | Notes |
|---|---|---|---|
| **web-motion** | ✅ | ours (housed in `forked-skills/skills`) | This project's own skill. |
| **gsap-web** | ✅ | web-animation | |
| **accessible-animation** | ✅ | web-animation | |
| **micro-interaction** | ✅ | web-animation | |
| **60fps-animation** | ✅ | web-animation | |
| **ascii-animation** | ✅ | web-animation | |
| **glassmorphism** | ✅ | web-animation | |
| **lottie-animation** | ✅ | web-animation | |
| **page-transition-animation** | ✅ | web-animation | |
| **svg-animation** | ✅ | web-animation | Every skill in this fork is wired — none of them compete or overlap. |

## UI, design systems & review

| Skill | Wired | Source | Notes |
|---|---|---|---|
| **frontend-design** | ✅ | anthropic | |
| **a11y-audit** | ✅ | ux-ui | Wired via nested symlinks (see legend) — its `SKILL.md` reaches into sibling `accessibility/`, `scripts/`, `taste/` folders at the `ux-ui-agent-skills` repo root. |
| **apply-aesthetic** | ✅ | ux-ui | Nested symlinks (`scripts/`, `taste/`, and the full `design-systems/library/` — all 138 systems, 1.6MB — since the skill resolves any one of them by name at runtime). |
| **design-code** | ✅ | ux-ui | Nested symlinks (`accessibility/`, `content/`, `examples/` incl. `golden/theme.css`, `frameworks/` incl. the full `adapters/` subfolder, `scripts/`, `taste/`, `workflows/`). |
| **design-component** | ✅ | ux-ui | Nested symlinks (`accessibility/`, the full `components/` folder, `examples/` incl. `data-table.html`, `frameworks/`, `scripts/`, `taste/`). |
| **design-qa** | ✅ | ux-ui | Nested symlinks (`scripts/`, `workflows/`). |
| **design-review** | ✅ | ux-ui | Nested symlinks (`accessibility/`, `scripts/`, `taste/`, `workflows/`). |
| **figma-integration** | ✅ | ux-ui | Nested symlinks (`scripts/`, `tokens/`, `workflows/`). |
| **governance** | ✅ | ux-ui | Nested symlinks (`design-systems/`, `scripts/`, `workflows/`). |
| **image-to-code** | ✅ | ux-ui | Nested symlinks (the full `components/` folder, `frameworks/`, `scripts/`, `taste/`). |
| **migrate-design-system** | ✅ | ux-ui | Nested symlinks (`design-systems/`, `scripts/`). |
| **performance** | ✅ | ux-ui | Nested symlinks (`tokens/`, `workflows/`). |
| **prototype** | ✅ | ux-ui | Nested symlinks (`workflows/`, plus the full `accessibility/`, `components/`, `taste/` its high-fi steps pull from). |
| **redesign** | ✅ | ux-ui | Nested symlinks (`scripts/`, `taste/`, `workflows/`). |
| **ux-writing** | ✅ | ux-ui | Nested symlinks (`accessibility/`, `content/`). |
| **theme-factory** | ✅ | anthropic | Styles artifacts (slides, docs, HTML landing pages) with a theme. |
| **web-artifacts-builder** | ✅ | anthropic | Multi-component React/Tailwind/shadcn claude.ai artifacts. |
| **webapp-testing** | ✅ | anthropic | Playwright toolkit for testing local web apps. |
| **shadcn** | ✅ | installer | Lives in `.agents/skills/`. |
| **migrate-radix-to-base** | ✅ | installer | Bundled with the shadcn install; unused so far. |
| **brandkit** | | ux-ui | Would compete with this site's own hand-built `--ink`/`--paper`/`--wire` token system. |
| **design-tokens** | | ux-ui | Would compete with this site's own token system, same as `brandkit`. |
| **token-build** | | ux-ui | Would compete with this site's own token system, same as `brandkit`. |

Left unwired deliberately: `design-tokens`/`token-build`/`brandkit` would compete with this site's own token system rather than complement it. Everything else in the `ux-ui` fork is wired. The `anthropic` fork is pared down to just these 4 frontend-relevant skills — the rest of that fork (general office/dev skills, `brand-guidelines`) was removed entirely, see the intro note above.

## Retired

`3D-Website-Builder` — the original custom MCP-plugin approach this project superseded. Deleted; zero references remained anywhere in this repo.
