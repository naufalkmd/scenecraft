---
id: environment-lighting
title: Baked HDRI environment lighting
tags: [performance, lighting, realism, default, scene]
description: Default to a baked HDRI environment for lighting and reflections instead of stacking multiple dynamic lights, which is the top mobile perf killer in generated scenes.
---
```tsx
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'

function Scene() {
  return (
    <Canvas>
      <color attach="background" args={['#05050a']} />
      <Environment preset="city" />
      <ambientLight intensity={0.2} />
      {/* scene content */}
    </Canvas>
  )
}
```

Rule: default every new scene to one `<Environment>` preset plus at most one supplemental light, instead of three or four point/spot lights.

Rule: `<Canvas>` has no background by default — it's transparent, so it shows whatever's behind it in the page's DOM (often white). Always set an explicit `<color attach="background" args={[...]} />` inside the Canvas (a dark tone works well with bloom/emissive materials), unless the request specifically wants the page background to show through.
