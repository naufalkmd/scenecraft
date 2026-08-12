export default function SceneFallback() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--mono)',
        fontSize: 12,
        color: 'var(--dim)',
        letterSpacing: '0.06em',
      }}
    >
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
        <span className="live-dot" aria-hidden />
        LOADING SCENE
      </span>
    </div>
  )
}
