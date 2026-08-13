---
id: instancing
title: Instanced repeated meshes
tags: [performance, geometry, repeated, forest, particles, crowd, many, objects]
description: Use drei's Instances/Instance instead of mapping many components, to keep draw calls low when a prompt implies many copies of the same object.
---
```tsx
import { Instances, Instance } from '@react-three/drei'

function Forest({ count = 200 }: { count?: number }) {
  const positions = Array.from({ length: count }, () => [
    (Math.random() - 0.5) * 40,
    0,
    (Math.random() - 0.5) * 40,
  ] as const)

  return (
    <Instances limit={count} range={count}>
      <coneGeometry args={[0.5, 2, 8]} />
      <meshStandardMaterial color="#2d5a3d" />
      {positions.map((pos, i) => (
        <Instance key={i} position={pos} />
      ))}
    </Instances>
  )
}
```

Rule: any prompt implying repetition ("forest", "crowd", "particles", "N objects") should route through `Instances`/`InstancedMesh`, never a `.map()` over individual `<mesh>` components — that's the most common performance bug in generated R3F code.
