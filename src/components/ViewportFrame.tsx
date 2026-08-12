import type { ReactNode } from 'react'

const CORNERS = ['tl', 'tr', 'bl', 'br'] as const

export default function ViewportFrame({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        position: 'relative',
        aspectRatio: '1 / 1',
        border: '1px solid var(--line)',
      }}
    >
      {CORNERS.map((corner) => (
        <span
          key={corner}
          aria-hidden
          style={{
            position: 'absolute',
            width: 10,
            height: 10,
            borderColor: 'var(--wire)',
            borderStyle: 'solid',
            borderWidth: corner[0] === 't' ? '2px 0 0 2px' : '0 0 2px 2px',
            ...(corner[0] === 't' ? { top: -1 } : { bottom: -1 }),
            ...(corner[1] === 'l' ? { left: -1, borderRightWidth: 0 } : { right: -1, borderLeftWidth: 0 }),
          }}
        />
      ))}
      {children}
    </div>
  )
}
