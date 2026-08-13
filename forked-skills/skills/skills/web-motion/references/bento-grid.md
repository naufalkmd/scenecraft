---
id: bento-grid
title: Bento-grid feature layout
tags: [bento, grid, layout, feature-showcase, cards]
description: A CSS grid of mixed-size cells for a feature/product showcase section — some cells wider or taller than others, not a uniform card grid.
---

```css
.bento {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 180px;
  gap: 16px;
}

.bento-item {
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 28px;
  overflow: hidden;
  transition: border-color 0.25s ease, transform 0.25s ease;
}

.bento-item:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}

/* Span modifiers — apply per-cell, not every cell the same size */
.bento-item--wide {
  grid-column: span 2;
}
.bento-item--tall {
  grid-row: span 2;
}
.bento-item--feature {
  grid-column: span 2;
  grid-row: span 2;
}

@media (max-width: 860px) {
  .bento {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }
  .bento-item,
  .bento-item--wide,
  .bento-item--tall,
  .bento-item--feature {
    grid-column: span 1;
    grid-row: span 1;
  }
}
```

```tsx
<div className="bento">
  <div className="bento-item bento-item--feature">{/* the one thing that matters most */}</div>
  <div className="bento-item">{/* supporting card */}</div>
  <div className="bento-item bento-item--tall">{/* supporting card */}</div>
  <div className="bento-item bento-item--wide">{/* supporting card */}</div>
</div>
```

## Rules

- The size variation has to mean something — the largest cell should be the most important feature/stat, not whichever one happened to need more room for its copy. Random size variation reads as decoration, not information (see `frontend-design`'s "structure is information" principle).
- Collapse to a single column below ~860px, every span modifier reset to `span 1` — a bento layout with mixed spans on a 390px screen produces broken, overlapping cells, not a graceful reflow.
- Cap it at 4-6 cells. A bento grid with a dozen items loses the "curated selection" feeling that makes the pattern work and starts to look like an unsorted list wearing a grid.
- Don't combine with `glow-spotlight.md` on every cell — one glowing card in a bento grid draws the eye correctly; six glowing cards cancel each other out.
