import Reveal from './Reveal'

const CODE = `useEffect(() => {
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

export default function CodeSample() {
  const lines = CODE.split('\n')

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
              padding: '10px 18px',
              borderBottom: '1px solid var(--line)',
              fontFamily: 'var(--mono)',
              fontSize: 13,
              color: 'var(--render)',
            }}
          >
            src/scenes/MascotScene.tsx
          </div>
          <pre
            style={{
              margin: 0,
              padding: '20px 24px',
              overflowX: 'auto',
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
                    ? ' '
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
        </div>
      </Reveal>
    </section>
  )
}
