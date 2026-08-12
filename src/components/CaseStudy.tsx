import { useState } from 'react'
import GargoyleScene, { type LodTierStat, LOD_STATS } from '../scenes/GargoyleScene'
import Reveal from './Reveal'
import ViewportFrame from './ViewportFrame'

function formatBytes(bytes: number) {
  if (bytes >= 1_000_000) return `${(bytes / 1_000_000).toFixed(1)}MB`
  return `${Math.round(bytes / 1000)}KB`
}

export default function CaseStudy() {
  const [stat, setStat] = useState<LodTierStat>(LOD_STATS[0])

  return (
    <section style={{ padding: '20px 0 100px' }}>
      <div className="container">
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
            A DIFFERENT PROBLEM
          </p>
          <h2
            style={{
              fontFamily: 'var(--display)',
              fontWeight: 700,
              fontSize: 'clamp(24px, 3vw, 32px)',
              letterSpacing: '-0.01em',
              margin: '0 0 16px',
              maxWidth: 620,
            }}
          >
            The mascot needed motion. This one needed a diet.
          </h2>
          <p
            style={{
              fontFamily: 'var(--body)',
              fontSize: 15,
              lineHeight: 1.6,
              color: 'var(--dim)',
              maxWidth: 560,
              marginBottom: 36,
            }}
          >
            A separate text-to-3D generation came back at 60MB, one fixed mesh. The skill
            caught its own asset blowing the ship budget, ran it through{' '}
            <code style={{ background: 'none', border: 'none', padding: 0, color: 'var(--paper)' }}>
              gltf-transform
            </code>
            , and cut three real LOD tiers instead. The viewport below cycles through the
            same three files automatically — in a live scene, drei's <code style={{ background: 'none', border: 'none', padding: 0, color: 'var(--paper)' }}>{'<Detailed>'}</code> swaps
            between them as the camera moves away, per{' '}
            <code style={{ background: 'none', border: 'none', padding: 0, color: 'var(--paper)' }}>lod.md</code>.
          </p>
        </Reveal>

        <Reveal delayMs={150}>
          <div style={{ maxWidth: 360 }}>
            <ViewportFrame>
              <GargoyleScene onTierChange={setStat} />
            </ViewportFrame>
            <div
              className="hero-stats"
              style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--dim)', marginTop: 14 }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: 'var(--wire)' }}>
                <span className="live-dot" aria-hidden />
                TIER::{stat.tier}
              </span>
              <span>
                {stat.tris.toLocaleString()} tris · {stat.verts.toLocaleString()} verts ·{' '}
                {formatBytes(stat.bytes)}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
