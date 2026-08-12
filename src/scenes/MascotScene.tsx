import { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera, useAnimations, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import type { Group } from 'three'

const MASCOT_URL = '/models/mascot-idle.glb'
const TARGET_HEIGHT = 2.4

useGLTF.preload(MASCOT_URL)

function Mascot() {
  const outer = useRef<Group>(null)
  const inner = useRef<Group>(null)
  const { scene, animations } = useGLTF(MASCOT_URL)
  const { actions } = useAnimations(animations, outer)

  // The GLB's raw accessor bounds don't reflect the skinned/posed size, so
  // measure the actual rendered geometry once loaded rather than guessing
  // scale/position constants.
  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene)
    const size = new THREE.Vector3()
    const center = new THREE.Vector3()
    box.getSize(size)
    box.getCenter(center)

    const scale = size.y > 0 ? TARGET_HEIGHT / size.y : 1
    if (inner.current) {
      inner.current.scale.setScalar(scale)
      inner.current.position.set(-center.x * scale, -box.min.y * scale, -center.z * scale)
    }

    scene.traverse((child) => {
      const mesh = child as THREE.Mesh
      if (!mesh.isMesh) return
      const material = mesh.material as THREE.MeshStandardMaterial
      // This asset's emissive channel duplicates the base color texture,
      // making it self-illuminate and ignore scene lighting entirely —
      // reads as flat, disconnected color blocks instead of shaded form.
      material.emissiveMap = null
      material.emissive.set('#000000')
      material.needsUpdate = true
    })
  }, [scene])

  useEffect(() => {
    const idle = actions[Object.keys(actions)[0]]
    idle?.reset().fadeIn(0.3).play()
    return () => {
      idle?.fadeOut(0.3)
    }
  }, [actions])

  useFrame((_, delta) => {
    if (!outer.current) return
    outer.current.rotation.y += delta * 0.35
  })

  return (
    <group ref={outer}>
      <group ref={inner}>
        <primitive object={scene} />
      </group>
    </group>
  )
}

export default function MascotScene() {
  return (
    <Canvas dpr={[1, 2]} shadows>
      <color attach="background" args={['#0b0a0e']} />
      <PerspectiveCamera makeDefault position={[3, 1.7, 4.2]} fov={38} />
      <OrbitControls
        target={[0, 1.1, 0]}
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2.1}
        makeDefault
      />
      <Environment preset="city" />
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 5, 2]} intensity={0.8} />
      <Mascot />
    </Canvas>
  )
}
