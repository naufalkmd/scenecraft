# Scenecraft

A Claude Code skill for writing performance-aware React Three Fiber (Three.js + drei) components — instancing, LOD tiers, capped `dpr`, baked lighting, compressed textures — plus 3D assets sourced through [genmedia](https://github.com/fal-ai-community/genmedia-cli) when a scene needs one that doesn't exist yet.

This repo is both the skill itself (`skill/`) and its own landing page (`src/`), built using the skill it documents — every number and code sample on the page is real, pulled from the actual build, not staged.

## What's on the page

- **Hero** — a rigged, animated mascot generated through a real multi-step chain: text-to-image → image-to-3D → rig → animate → compress. The headline (`72 bones. 2,713 keyframes.`) is read straight from the GLB's own animation data.
- **Case study** — a second, different problem: a 60MB raw text-to-3D asset cut into three real LOD tiers via `gltf-transform`, cycling live in the viewport.
- **The rules** — quoted verbatim from `skill/references/*.md`, not paraphrased.
- **The actual output** — the real source behind the mascot scene, with a "view full file" dialog showing the complete, unedited file.
- **Quickstart** — three commands that actually work, copied from the real setup process.

## Use the skill in your own project

```bash
cp -R skill ~/.claude/skills/threejs-engineering
```

(or symlink it, or copy it into a project-scoped `.claude/skills/` instead of your personal one)

It leans on two things from the wider [fal-ai-community/skills](https://github.com/fal-ai-community/skills) ecosystem:

- **[genmedia](https://github.com/fal-ai-community/genmedia-cli)** — the CLI it calls for asset generation. Install with `curl https://genmedia.sh/install -fsS | bash`, then `genmedia setup`.
- **[fal-models-catalog](https://github.com/fal-ai-community/skills/tree/main/skills/fal-models-catalog)** — curated endpoint picks it defers to instead of guessing a model ID. Grab it from that repo the same way if you want the full pattern-following behavior; the skill still works without it, just falls back to `genmedia models` search.

You'll need a [fal.ai API key](https://fal.ai/dashboard/keys) set as `FAL_KEY`.

## Run this site locally

```bash
npm install
npm run dev
```

## Project structure

See [SKILLS.md](SKILLS.md) for the full skill collection — 61 skills vendored from 4 forked repos, 13 actively wired into `.claude/skills/` (symlinked to the vendored copies, not duplicated) and used by Claude Code in this project.

```
skill/                the portable Claude Code skill — SKILL.md + references/ (this project's own)
forked-skills/         full vendored copies of everything forked from — see SKILLS.md
src/scenes/            the R3F/Three.js scenes shown on the page
src/components/        page sections (Hero, CaseStudy, Features, CodeSample, Quickstart)
src/components/ui/     shadcn/ui components (Dialog, Button), themed to this site's
                       own tokens rather than shadcn's default palette
```

The site is mostly hand-built CSS (a deliberate hairline/zero-radius look, no
Tailwind classes in most components) with Tailwind + shadcn/ui layered in
specifically for accessible interactive primitives like the Dialog — not a
wholesale migration. `components.json` and the Tailwind config exist for that
reason, not because the rest of the site uses utility classes.

## License

MIT
