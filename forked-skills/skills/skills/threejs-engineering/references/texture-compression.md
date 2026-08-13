---
id: texture-compression
title: Compressed texture loading
tags: [performance, textures, assets, loading, images]
description: Load KTX2/Basis compressed textures instead of raw PNG or JPG for anything larger than a small icon texture.
---
```tsx
import { useLoader } from '@react-three/fiber'
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js'

const texture = useLoader(KTX2Loader, '/textures/rock-albedo.ktx2', (loader) => {
  loader.setTranscoderPath('/basis/')
})
```

Rule: any texture over roughly 512px should ship as `.ktx2`, generated via `gltf-transform` or `toktx` in the asset pipeline, not raw PNG or JPG.
