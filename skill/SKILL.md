---
name: threejs-engineering
description: >
  Write performance-aware React Three Fiber (Three.js + drei) components for
  a real, existing web project: camera rigs, baked lighting, instancing, LOD,
  compressed textures, post-processing, and sourcing 3D models or textures
  through genmedia. Trigger for "three.js", "react three fiber", "r3f", or
  building, editing, or optimizing a Three.js scene. R3F only: for a generic
  "3d scene" request, check the project's engine first (step 0), since
  Babylon.js, PlayCanvas, A-Frame, and plain Three.js need different
  patterns. For the fixed rigged-character-selector recipe, use
  fal-regenerate-3d instead.
metadata:
  author: naufalkmd
  version: "0.1.0"
---

# Three.js / React Three Fiber engineering

You write production-grade React Three Fiber components. Output is real code that lands in the user's project and gets committed to git, not a demo, not a mockup, not a standalone bundled page.

## Process

0. **Confirm the stack before anything else.** This skill teaches React Three Fiber (`@react-three/fiber` + `drei`) patterns specifically. Check the project's `package.json` for `@react-three/fiber`. If it's missing and a different 3D engine is in use instead (`@babylonjs/core`, `playcanvas`, `aframe`, or plain `three` with no R3F wrapper), say so explicitly and stop — none of this skill's patterns (`drei` helpers, R3F hooks like `useFrame`, JSX-driven `<Instances>`, baked lighting via component props) translate to those engines. Forcing them on would mean rewriting the rendering layer, not adding a component.
1. **Locate the target.** Look for an existing scenes/components directory in the current project (commonly `src/scenes/`, `src/components/3d/`, or similar). If none exists and this is a new scene, ask where it should live or default to `src/scenes/<Name>.tsx` next to the app's entry point.
2. **Check for an existing file to edit.** If the request modifies something already built, read the existing component and produce a diff-style edit, not a full rewrite — preserve any manual changes the developer already made.
3. **Consult the relevant references** in `references/` before writing code (open only the ones that apply to this request, not all of them):
   - `camera-rig.md` — default camera/controls setup for any new scene
   - `environment-lighting.md` — default lighting approach for any new scene
   - `instancing.md` — when the prompt implies repetition ("forest", "crowd", "N objects", "particles")
   - `lod.md` — when the prompt implies a complex/detailed/high-poly model
   - `texture-compression.md` — when the scene needs textures larger than a small icon
   - `post-processing.md` — when the prompt asks for cinematic polish, glow, bloom, or similar effects
   - `asset-generation.md` — whenever the request needs a 3D model or texture that doesn't already exist in the project
4. **Source assets through genmedia, not fabrication.** If a 3D model or texture is needed, follow `asset-generation.md` and use the `genmedia` CLI (see the `genmedia` skill and `fal-models-catalog`) to generate it and save it into the project's asset directory. Never invent a file path for an asset that wasn't actually generated or doesn't already exist — if generation isn't possible (e.g. `genmedia` isn't installed or `FAL_KEY` isn't set), say so and fall back to primitive geometries.
5. **Write idiomatic, self-contained code.** One component per file, default export, typed props, no dead imports. Follow the performance rules embedded in each reference file (capped `dpr`, `Instances` over `.map()`, baked lighting over multiple dynamic lights, `Detailed` for complex meshes, compressed textures).
6. **Report back concisely**: which file was written or edited, which patterns were applied, and which assets (if any) were generated via genmedia.

## When to use `fal-regenerate-3d` instead

If the request is specifically "build me an interactive character-selector page" (rigged animated characters, companion creatures, matching floor textures, background video, palette-driven UI, shipped as one bundled page), use the `fal-regenerate-3d` skill — it's a more complete, tuned recipe for exactly that shape of experience. Use `threejs-engineering` for everything else: arbitrary scenes, single objects, edits to an existing site's existing 3D code.
