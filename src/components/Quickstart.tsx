import Reveal from './Reveal'

const STEPS = [
  { cmd: 'git clone https://github.com/naufalkmd/scenecraft.git', note: 'get the skill' },
  { cmd: 'cp -R scenecraft/skill ~/.claude/skills/threejs-engineering', note: 'install it' },
  { cmd: 'curl https://genmedia.sh/install -fsS | bash && genmedia setup', note: 'set up asset generation' },
]

export default function Quickstart() {
  return (
    <section id="get-started" className="container" style={{ paddingBottom: 120 }}>
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
          THREE COMMANDS
        </p>
        <h2
          style={{
            fontFamily: 'var(--display)',
            fontWeight: 700,
            fontSize: 'clamp(24px, 3vw, 32px)',
            letterSpacing: '-0.01em',
            margin: '0 0 32px',
            maxWidth: 560,
          }}
        >
          Try it in your own project
        </h2>
        <div style={{ border: '1px solid var(--line)' }}>
          {STEPS.map((step, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                gap: 8,
                padding: '16px 20px',
                borderBottom: i < STEPS.length - 1 ? '1px solid var(--line)' : undefined,
              }}
            >
              <code
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 13,
                  color: 'var(--paper)',
                }}
              >
                <span style={{ color: 'var(--dim)' }}>$ </span>
                {step.cmd}
              </code>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--dim)' }}>
                {step.note}
              </span>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--body)', fontSize: 14, color: 'var(--dim)', marginTop: 18 }}>
          Needs a <a href="https://fal.ai/dashboard/keys" target="_blank" rel="noreferrer" style={{ color: 'var(--render)', textDecoration: 'underline' }}>fal.ai API key</a> set as <code style={{ background: 'none', border: 'none', padding: 0, color: 'var(--paper)' }}>FAL_KEY</code>. Then just ask Claude Code for a scene.
        </p>
      </Reveal>
    </section>
  )
}
