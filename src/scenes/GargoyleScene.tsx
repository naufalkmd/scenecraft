import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Grid, OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import type { Group } from 'three'
import { LOD_STATS, type LodTierStat } from './gargoyleStats'

const EDGE_MATERIAL = new THREE.LineBasicMaterial({
  color: '#ffb020',
  transparent: true,
  opacity: 0.55,
})
const FILL_MATERIAL = new THREE.MeshBasicMaterial({
  color: '#0b0a0e',
  transparent: true,
  opacity: 0.85,
})

LOD_STATS.forEach((s) => useGLTF.preload(s.url))

function WireStatue({ url }: { url: string }) {
  const ref = useRef<Group>(null)
  const { scene } = useGLTF(url)

  useEffect(() => {
    const meshes: THREE.Mesh[] = []
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) meshes.push(child as THREE.Mesh)
    })

    const added: THREE.LineSegments[] = []
    for (const mesh of meshes) {
      mesh.material = FILL_MATERIAL
      const edges = new THREE.EdgesGeometry(mesh.geometry, 25)
      const lines = new THREE.LineSegments(edges, EDGE_MATERIAL)
      mesh.add(lines)
      added.push(lines)
    }

    return () => {
      for (const lines of added) {
        lines.geometry.dispose()
        lines.removeFromParent()
      }
    }
  }, [scene])

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.25
  })

  return (
    <group ref={ref} scale={2.6} position={[0, -0.3, 0]}>
      <primitive object={scene} />
    </group>
  )
}

export default function GargoyleScene({ onTierChange }: { onTierChange: (stat: LodTierStat) => void }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % LOD_STATS.length), 2600)
    return () => clearInterval(id)
  }, [])

  const active = LOD_STATS[index]

  useEffect(() => {
    onTierChange(active)
  }, [active, onTierChange])

  const key = useMemo(() => active.url, [active])

  return (
    <Canvas dpr={[1, 2]}>
      <color attach="background" args={['#0b0a0e']} />
      <PerspectiveCamera makeDefault position={[3.2, 1.6, 4.2]} fov={40} />
      <OrbitControls
        target={[0, 0, 0]}
        enableRotate={false}
        enableZoom={false}
        enablePan={false}
        makeDefault
      />
      <ambientLight intensity={0.4} />
      <Grid
        position={[0, -1.4, 0]}
        args={[10, 10]}
        cellColor="#23211c"
        sectionColor="#3a3628"
        fadeDistance={9}
        infiniteGrid
      />
      <WireStatue key={key} url={active.url} />
    </Canvas>
  )
}
