# Scenecraft

A Claude Code skill for writing performance-aware React Three Fiber (Three.js + drei) components — instancing, LOD tiers, capped `dpr`, baked lighting, compressed textures — plus 3D assets sourced through [genmedia](https://github.com/fal-ai-community/genmedia-cli) when a scene needs one that doesn't exist yet.

This repo is both the skill itself (`skill/`) and its own landing page (`src/`), built using the skill it documents.

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

## License

MIT
