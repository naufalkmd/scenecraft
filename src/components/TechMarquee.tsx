const STACK = ['React Three Fiber', 'genmedia', 'fal.ai', 'gltf-transform', 'Claude Code']

export default function TechMarquee() {
  // Duplicated once so the CSS loop has no visible seam (see marquee-scroll keyframes).
  const looped = [...STACK, ...STACK]

  return (
    <div className="marquee-strip">
      <div className="container">
        <p className="marquee-label">BUILT WITH</p>
      </div>
      <div className="marquee" role="list" aria-label="Built with">
        <div className="marquee-track">
          {looped.map((item, i) => (
            <span className="marquee-item" role="listitem" key={`${item}-${i}`}>
              <span className="marquee-item-dot" aria-hidden>
                {'//'}
              </span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
