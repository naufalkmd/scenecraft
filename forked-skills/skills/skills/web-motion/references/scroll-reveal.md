---
id: scroll-reveal
title: Scroll-triggered reveal
tags: [scroll, reveal, intersection-observer, fade-in, entrance]
description: Fade/rise content into view as the user scrolls to it, using IntersectionObserver — not a scroll-position listener, and not animating everything on the page at once.
---

```tsx
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

export default function Reveal({
  children,
  delayMs = 0,
  once = true,
}: {
  children: ReactNode
  delayMs?: number
  once?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [once])

  return (
    <div
      ref={ref}
      className={`reveal${visible ? ' is-visible' : ''}`}
      style={{ '--reveal-delay': `${delayMs}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}
```

```css
.reveal {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--reveal-delay, 0ms);
}
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

For a list of items revealing in sequence (feature rows, pricing cards), pass an increasing `delayMs` per item — `i * 60` to `i * 80` reads as a deliberate cascade without feeling slow. Don't stagger more than ~8 items or the last ones lag noticeably behind the scroll.

## Rules

- Threshold `0.15` (not `0`) so the reveal fires when a meaningful part of the element is visible, not the first pixel.
- `once: true` by default — re-triggering on every scroll up/down reads as jittery, not polished. Only set `once: false` for something meant to reset (e.g. a demo toggle).
- **Testing note**: full-page/beyond-viewport screenshot tools (Playwright's `full_page` screenshot, some headless capture modes) do not perform a real scroll and will never fire `IntersectionObserver` — content will appear missing even though it works for real users. Verify with an actual incremental scroll (`mouse.wheel` in a loop), not a full-page capture.
- Respect `prefers-reduced-motion` globally (see the [prefers-reduced-motion rule in reduced-motion.md](reduced-motion.md)) rather than per-component.
