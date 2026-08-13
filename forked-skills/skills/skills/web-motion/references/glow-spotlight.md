---
id: glow-spotlight
title: Glow / spotlight accents
tags: [glow, spotlight, radial-gradient, blur, ambient-light]
description: The soft radial glow behind a hero graphic or above a feature icon — a blurred radial-gradient shape, absolutely positioned behind the content, not a box-shadow.
---

```css
.glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: -1;
  background: radial-gradient(
    circle at 50% 30%,
    color-mix(in srgb, var(--accent) 55%, transparent) 0%,
    transparent 60%
  );
  filter: blur(60px);
}
```

```tsx
function GlowBehind({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: 'relative' }}>
      <div className="glow" aria-hidden />
      {children}
    </div>
  )
}
```

For a tighter "spotlight beam" (a cone of light above a single icon, not an ambient wash), narrow the gradient and stretch it vertically:

```css
.spotlight {
  position: absolute;
  top: -40%;
  left: 50%;
  width: 140px;
  height: 220px;
  transform: translateX(-50%);
  background: linear-gradient(
    180deg,
    color-mix(in srgb, var(--accent) 70%, transparent) 0%,
    transparent 80%
  );
  filter: blur(24px);
  pointer-events: none;
  z-index: -1;
}
```

## Rules

- `pointer-events: none` always — this is decoration, it must never intercept clicks/hover on the real content.
- `z-index: -1` (or place it before the content in DOM order with no z-index) so it sits behind, not in front of, whatever it's glowing behind.
- Use `color-mix(in srgb, var(--accent) N%, transparent)` for the gradient stops instead of a hardcoded rgba value — it stays correct if the accent color token changes, and it's clearer about intent (55% of the accent, faded to nothing) than an opaque hex+alpha guess.
- `filter: blur()` on a large element is not free — keep the glow element small and let the blur radius do the spreading, rather than blurring something already page-width. On a page with several glows, prefer one large ambient one over many small ones stacking blur cost.
- One glow per view is usually enough. A glowing hero plus a glowing spotlight plus a glowing button on the same screen reads as noisy, not premium.
