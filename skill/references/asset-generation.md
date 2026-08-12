---
id: asset-generation
title: Sourcing 3D models and textures via genmedia
tags: [assets, models, textures, genmedia, generation, glb, gltf]
description: When a request needs a 3D asset or texture that doesn't already exist in the project, generate it through genmedia instead of inventing a placeholder primitive or a fake asset path.
---

Asset generation runs through the `genmedia` CLI (see the `genmedia` skill), not a hand-rolled API call. For model picks, defer to [fal-models-catalog/references/text-to-3d.md](../../fal-models-catalog/references/text-to-3d.md) and [image-to-3d.md](../../fal-models-catalog/references/image-to-3d.md) rather than guessing an endpoint ID.

## Workflow

1. `genmedia models "<what you need>" --json`, or use a curated endpoint ID straight from `fal-models-catalog`, to find a candidate model.
2. `genmedia schema <endpoint_id> --json` to see required inputs before calling it.
3. Prefer models that return glTF/GLB directly — that's what `useGLTF` (drei) expects. If a model only returns OBJ/FBX, say so in your response so the user can convert it, rather than silently rewriting the loader.
4. Run with `--async`, poll with `genmedia status <endpoint_id> <request_id> --download "./public/models/{request_id}.{ext}" --json` (or a project-appropriate path) rather than referencing a remote fal URL directly in the component — the site shouldn't depend on fal's CDN at runtime.
5. Run the downloaded asset through `gltf-transform` (see [texture-compression.md](texture-compression.md) / [lod.md](lod.md)) before wiring it in. Generated assets are frequently far larger than any reasonable ship budget — a single text-to-3d generation can come back 50–60MB before compression.
6. Reference the local path in the generated component via `useGLTF('/models/<name>.glb')`.

## Rule

Never fabricate a `/models/foo.glb` path that doesn't exist. If asset generation isn't possible (`genmedia` not installed, no `FAL_KEY`, or the request doesn't warrant a custom asset), fall back to primitive geometries (`coneGeometry`, `icosahedronGeometry`, etc.) and say so explicitly, rather than silently pretending an asset was generated.

## Multi-step needs: generation + rigging + animation, hero product imagery

The workflow above covers one model call. When a request needs a chain — generate an image, turn it into 3D, rig it, animate it; or produce a styled hero-shot image of an existing product before it ever touches Three.js — don't hand-roll the orchestration. Two skills already cover this:

- **`fal-workflow`** — the mechanics of chaining models. Its "sequential compositing chain" pattern (each step's output feeds the next, one change per step, state what must be preserved) is the right shape for asset-gen → rig → animate. Use Mode B (genmedia CLI orchestration) for a one-off scene; reach for Mode A (workflow JSON) only if the user wants a reusable, shareable pipeline asset.
- **`fal-recipes`** — opinionated, use-case pipelines. `references/product-shot.md` specifically covers turning an existing product photo into a styled hero image (surface, lighting, material-driven treatment) — useful before that image becomes a text-to-3D or image-to-3D input, or as a 2D hero asset in its own right alongside the 3D scene.

Still finish through this skill's own rules once assets land: compress via `gltf-transform` ([texture-compression.md](texture-compression.md)), ship LOD tiers for anything detailed ([lod.md](lod.md)), and never reference a remote fal URL at runtime.

## See also

For a fully worked, opinionated 3D web recipe (rigged character GLBs, matching floor textures, video backgrounds, palette-driven UI) rather than an arbitrary scene in an existing codebase, see the `fal-regenerate-3d` skill instead.
