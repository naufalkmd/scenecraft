export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', padding: '28px 0' }}>
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'var(--mono)',
          fontSize: 12,
          color: 'var(--dim)',
        }}
      >
        <span>scenecraft — built on the fal.ai skills format</span>
        <span>MIT</span>
      </div>
    </footer>
  )
}
