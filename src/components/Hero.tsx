import MascotScene, { MASCOT_STATS } from '../scenes/MascotScene'
import { ExternalLinkIcon } from './icons'
import Reveal from './Reveal'
import ViewportFrame from './ViewportFrame'

export default function Hero() {
  return (
    <section className="container" style={{ paddingTop: 140, paddingBottom: 100 }}>
      <div className="hero-grid">
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
            A CLAUDE CODE SKILL FOR THREE.JS
          </p>
          <h1
            style={{
              fontFamily: 'var(--display)',
              fontWeight: 700,
              fontSize: 'clamp(30px, 4vw, 46px)',
              lineHeight: 1.12,
              letterSpacing: '-0.01em',
              margin: 0,
            }}
          >
            {MASCOT_STATS.channels} bones.
            <br />
            {MASCOT_STATS.keyframes.toLocaleString()} keyframes.
            <br />
            <span style={{ color: 'var(--render)' }}>One idle loop.</span>
          </h1>
          <p
            style={{
              fontFamily: 'var(--body)',
              fontSize: 17,
              lineHeight: 1.6,
              color: 'var(--dim)',
              maxWidth: 460,
              marginTop: 26,
            }}
          >
            A skill that chains genmedia calls, not just single-shot generation:
            image to 3D, rigged, animated, compressed, and wired into a real
            component with its clip actually playing — not a static mesh
            standing in for motion.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 34 }}>
            <a
              href="https://github.com/fal-ai-community/skills"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: 'var(--mono)',
                fontSize: 14,
                fontWeight: 600,
                padding: '12px 20px',
                background: 'var(--wire)',
                color: 'var(--ink)',
              }}
            >
              Install the skill
              <ExternalLinkIcon />
            </a>
            <a
              href="#patterns"
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 14,
                fontWeight: 600,
                padding: '12px 20px',
                border: '1px solid var(--line)',
                color: 'var(--paper)',
              }}
            >
              Read the rules
            </a>
          </div>
        </Reveal>

        <Reveal delayMs={180}>
          <div style={{ position: 'relative' }}>
            <ViewportFrame>
              <MascotScene />
            </ViewportFrame>
            <div
              className="hero-stats"
              style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--dim)', marginTop: 14 }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: 'var(--wire)' }}>
                <span className="live-dot" aria-hidden />
                CLIP::{MASCOT_STATS.clip.toUpperCase()}
              </span>
              <span>
                {MASCOT_STATS.tris.toLocaleString()} tris · {MASCOT_STATS.verts.toLocaleString()} verts ·{' '}
                {MASCOT_STATS.duration}s loop
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
