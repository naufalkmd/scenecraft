import Reveal from './Reveal'

const RULES = [
  {
    file: 'instancing.md',
    text: 'Any prompt implying repetition ("forest", "crowd", "particles", "N objects") routes through Instances/InstancedMesh, never a .map() over individual meshes — the most common performance bug in generated R3F code.',
  },
  {
    file: 'lod.md',
    text: 'A "detailed", "high-poly", or "realistic" model ships paired with two lower-poly fallbacks through Detailed, not a single fixed-resolution mesh.',
  },
  {
    file: 'texture-compression.md',
    text: 'Any texture over roughly 512px ships as .ktx2, generated via gltf-transform or toktx, not raw PNG or JPG.',
  },
  {
    file: 'camera-rig.md',
    text: 'dpr is capped to [1, 2] on the Canvas — a raw 3x device pixel ratio silently multiplies fragment shader cost on high-DPI phones.',
  },
  {
    file: 'environment-lighting.md',
    text: 'Every new scene defaults to one Environment preset plus at most one supplemental light, instead of three or four point/spot lights.',
  },
  {
    file: 'environment-lighting.md',
    text: 'Canvas is transparent by default. An explicit color attach="background" is set inside it, unless the request specifically wants the page background to show through.',
  },
]

export default function Features() {
  return (
    <section id="patterns" style={{ padding: '90px 0 120px' }}>
      <div className="container">
        <p
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 13,
            letterSpacing: '0.06em',
            color: 'var(--wire)',
            margin: '0 0 12px',
          }}
        >
          FROM /references
        </p>
        <h2
          style={{
            fontFamily: 'var(--display)',
            fontWeight: 700,
            fontSize: 'clamp(24px, 3vw, 32px)',
            letterSpacing: '-0.01em',
            margin: '0 0 44px',
            maxWidth: 560,
          }}
        >
          The rules, quoted directly
        </h2>

        <div style={{ borderTop: '1px solid var(--line)' }}>
          {RULES.map((rule, i) => (
            <Reveal key={i} delayMs={i * 70}>
              <div className="rule-row">
                <span style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--dim)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--render)' }}>
                  {rule.file}
                </span>
                <span style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--paper)' }}>
                  {rule.text}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
