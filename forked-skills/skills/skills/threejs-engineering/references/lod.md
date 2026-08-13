---
id: lod
title: Level of detail for complex meshes
tags: [performance, geometry, complex, detailed, model]
description: Wrap any mesh above a complexity threshold in drei's Detailed so distant instances render cheaper.
---
```tsx
import { Detailed } from '@react-three/drei'

function DetailedModel({ high, mid, low }: { high: THREE.BufferGeometry; mid: THREE.BufferGeometry; low: THREE.BufferGeometry }) {
  return (
    <Detailed distances={[0, 15, 30]}>
      <mesh geometry={high} />
      <mesh geometry={mid} />
      <mesh geometry={low} />
    </Detailed>
  )
}
```

Rule: any prompt mentioning a "detailed", "high-poly", or "realistic" model should pair the asset with two lower-poly fallbacks through `Detailed`, not a single fixed-resolution mesh.
