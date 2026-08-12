import Reveal from './Reveal'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'

const EXCERPT = `useEffect(() => {
  const box = new THREE.Box3().setFromObject(scene)
  const size = new THREE.Vector3()
  const center = new THREE.Vector3()
  box.getSize(size)
  box.getCenter(center)

  // The GLB's raw accessor bounds don't reflect the skinned/posed size,
  // so measure the actual rendered geometry instead of guessing constants.
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
    // making it self-illuminate and ignore scene lighting entirely.
    material.emissiveMap = null
    material.emissive.set('#000000')
    material.needsUpdate = true
  })
}, [scene])`

const FULL_FILE = `import { useEffect, useRef } from 'react'
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
}`

interface Token {
  text: string
  color?: string
}

function highlightLine(line: string): Token[] {
  const commentIndex = line.indexOf('//')
  const before = commentIndex >= 0 ? line.slice(0, commentIndex) : line
  const comment = commentIndex >= 0 ? line.slice(commentIndex) : ''

  const stringRegex = /(`[^`]*`|'[^']*'|"[^"]*")/g
  const parts: Token[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  while ((match = stringRegex.exec(before))) {
    if (match.index > lastIndex) parts.push({ text: before.slice(lastIndex, match.index) })
    parts.push({ text: match[0], color: 'var(--wire)' })
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < before.length) parts.push({ text: before.slice(lastIndex) })
  if (comment) parts.push({ text: comment, color: 'var(--dim)' })

  return parts
}

function CodeBlock({ code, maxHeight }: { code: string; maxHeight?: number }) {
  const lines = code.split('\n')
  return (
    <pre
      style={{
        margin: 0,
        padding: '20px 24px',
        overflow: 'auto',
        maxHeight,
        fontFamily: 'var(--mono)',
        fontSize: 13,
        lineHeight: 1.7,
        color: 'var(--paper)',
      }}
    >
      <code>
        {lines.map((line, i) => (
          <div key={i}>
            {line === ''
              ? ' '
              : highlightLine(line).map((part, j) =>
                  part.color ? (
                    <span key={j} style={{ color: part.color }}>
                      {part.text}
                    </span>
                  ) : (
                    <span key={j}>{part.text}</span>
                  ),
                )}
          </div>
        ))}
      </code>
    </pre>
  )
}

export default function CodeSample() {
  return (
    <section className="container" style={{ paddingBottom: 100 }}>
      <Reveal>
        <p
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 13,
            letterSpacing: '0.06em',
            color: 'var(--wire)',
            margin: '0 0 22px',
          }}
        >
          THE ACTUAL OUTPUT
        </p>
        <h2
          style={{
            fontFamily: 'var(--display)',
            fontWeight: 700,
            fontSize: 'clamp(24px, 3vw, 32px)',
            letterSpacing: '-0.01em',
            margin: '0 0 20px',
            maxWidth: 620,
          }}
        >
          Not a mockup. This is what wrote the mascot above.
        </h2>
        <p
          style={{
            fontFamily: 'var(--body)',
            fontSize: 15,
            lineHeight: 1.6,
            color: 'var(--dim)',
            maxWidth: 560,
            marginBottom: 32,
          }}
        >
          The bounding-box centering and the material fix from earlier — verbatim from the
          file actually running this scene, not a cleaned-up example.
        </p>
        <div style={{ border: '1px solid var(--line)' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 18px',
              borderBottom: '1px solid var(--line)',
              fontFamily: 'var(--mono)',
              fontSize: 13,
              color: 'var(--render)',
            }}
          >
            src/scenes/MascotScene.tsx
            <Dialog>
              <DialogTrigger
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 12,
                  color: 'var(--wire)',
                  background: 'none',
                  border: '1px solid var(--line)',
                  padding: '4px 10px',
                  cursor: 'pointer',
                }}
              >
                view full file
              </DialogTrigger>
              <DialogContent
                style={{
                  maxWidth: 720,
                  width: '92vw',
                  background: 'var(--ink)',
                  border: '1px solid var(--line)',
                  borderRadius: 0,
                  padding: 0,
                }}
              >
                <DialogHeader style={{ padding: '16px 24px', borderBottom: '1px solid var(--line)' }}>
                  <DialogTitle
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 14,
                      color: 'var(--render)',
                      fontWeight: 400,
                    }}
                  >
                    src/scenes/MascotScene.tsx — full file, 89 lines
                  </DialogTitle>
                </DialogHeader>
                <CodeBlock code={FULL_FILE} maxHeight={520} />
              </DialogContent>
            </Dialog>
          </div>
          <CodeBlock code={EXCERPT} />
        </div>
      </Reveal>
    </section>
  )
}
