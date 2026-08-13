---
id: marquee
title: Infinite scrolling marquee
tags: [marquee, logos, carousel, infinite-scroll, ticker]
description: A continuously scrolling row of logos or cards — duplicate the content once and animate a translateX loop, not a JS-driven scroll position.
---

```tsx
function Marquee({ items }: { items: { key: string; node: React.ReactNode }[] }) {
  // Duplicate once so the loop point is invisible — the CSS animation
  // scrolls exactly one copy's width, then resets with no visible seam.
  const looped = [...items, ...items]

  return (
    <div className="marquee" role="list" aria-label="Logos">
      <div className="marquee-track">
        {looped.map((item, i) => (
          <div className="marquee-item" role="listitem" key={`${item.key}-${i}`}>
            {item.node}
          </div>
        ))}
      </div>
    </div>
  )
}
```

```css
.marquee {
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
}

.marquee-track {
  display: flex;
  width: max-content;
  gap: 48px;
  animation: marquee-scroll 28s linear infinite;
}

.marquee:hover .marquee-track {
  animation-play-state: paused;
}

@keyframes marquee-scroll {
  from {
    transform: translateX(0);
  }
  to {
    /* -50% because the content is duplicated once; this scrolls exactly
       one full copy before the loop point, invisibly. */
    transform: translateX(-50%);
  }
}
```

## Rules

- Duplicate the item list exactly once (`[...items, ...items]`), animate to `-50%`, not any other fraction — that's what makes the loop seamless. Duplicating 3x+ or using a different percentage either wastes DOM nodes or creates a visible jump.
- `mask-image` fade at the edges (not a hard clip) reads as intentional; a hard-cut edge looks like a bug.
- Pause on hover (`animation-play-state: paused`) for anything with interactive content inside (logos that link out); skip it for purely decorative tickers.
- Pick a duration proportional to content width so the perceived speed stays constant — a 6-logo row and a 20-logo row at the same `28s` will feel very different. Roughly 3–4s per item is a reasonable starting point.
- This is CSS-only, no JS scroll listener — don't reach for a scroll-position-driven implementation, it's heavier and janks on scroll-heavy pages for no visual benefit.
