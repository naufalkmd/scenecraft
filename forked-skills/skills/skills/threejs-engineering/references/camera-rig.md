---
id: camera-rig
title: Default camera and controls rig
tags: [camera, controls, default, setup, scene]
description: Sensible default camera and OrbitControls setup for a new scene, capped device pixel ratio.
---
```tsx
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'

function Scene() {
  return (
    <Canvas dpr={[1, 2]} shadows>
      <PerspectiveCamera makeDefault position={[4, 3, 6]} fov={45} />
      <OrbitControls enableDamping makeDefault />
      {/* scene content */}
    </Canvas>
  )
}
```

Rule: cap `dpr` to `[1, 2]` on the `Canvas` — never let the renderer pick up a raw 3x device pixel ratio, it silently multiplies fragment shader cost on high-DPI phones.
