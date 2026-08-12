import { ExternalLinkIcon, WireframeMark } from './icons'

export default function Nav() {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        borderBottom: '1px solid var(--line)',
        background: 'rgba(11, 10, 14, 0.85)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <nav
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 60,
        }}
      >
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 7,
            fontFamily: 'var(--mono)',
            fontWeight: 700,
            fontSize: 15,
            color: 'var(--wire)',
          }}
        >
          <WireframeMark />
          <span style={{ color: 'var(--paper)' }}>
            scenecraft<span style={{ color: 'var(--wire)' }}>.</span>
          </span>
        </span>
        <div style={{ display: 'flex', gap: 28, fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--dim)' }}>
          {/* padding brings the tap target to WCAG 2.2's 24x24px minimum (2.5.8) without changing the visible text size */}
          <a href="#patterns" style={{ display: 'inline-flex', alignItems: 'center', padding: '10px 0' }}>
            rules
          </a>
          <a
            href="https://github.com/naufalkmd/scenecraft"
            target="_blank"
            rel="noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '10px 0' }}
          >
            source
            <ExternalLinkIcon />
          </a>
        </div>
      </nav>
    </header>
  )
}
