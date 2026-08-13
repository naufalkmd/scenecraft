---
id: post-processing
title: Post-processing effects
tags: [postprocessing, bloom, effects, polish, cinematic, glow]
description: Add cinematic polish via @react-three/postprocessing's EffectComposer, applied once per scene, not per-object.
---
```tsx
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'

function Effects() {
  return (
    <EffectComposer>
      <Bloom mipmapBlur intensity={0.6} luminanceThreshold={0.8} />
      <Vignette eskil={false} offset={0.1} darkness={0.8} />
    </EffectComposer>
  )
}
```

Note: requires the `@react-three/postprocessing` package, which is not installed by default in the playground — add it only when a scene actually uses it, to keep the base bundle light.
