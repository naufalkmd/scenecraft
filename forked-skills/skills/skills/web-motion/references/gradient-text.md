---
id: gradient-text
title: Gradient-fill text
tags: [gradient, text, headline, background-clip]
description: Fill headline text with a gradient instead of a flat color, via background-clip — and know when it's actually the right call.
---

```css
.gradient-text {
  background: linear-gradient(90deg, var(--paper) 0%, var(--dim) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent; /* Safari still needs this alongside color: transparent */
}
```

```tsx
<h2 className="gradient-text">Powerful Features</h2>
```

For a gradient that only covers part of a heading (a common pattern: first line solid, second line gradient, or one emphasized word), wrap just that span rather than the whole element:

```tsx
<h1>
  Ship <span className="gradient-text">faster</span>, not louder.
</h1>
```

## Rules

- Needs both `background-clip: text` and the `-webkit-` prefixed versions of `background-clip` and `text-fill-color` — Safari does not reliably support the unprefixed `text-fill-color` yet. Omitting the prefixed pair silently breaks it in Safari while working fine in Chrome, so verify the -webkit- feature/browser support has not changed and don't assume the unprefixed form alone is enough.
- Contrast is checked against the gradient's darkest stop, not its lightest — a gradient that looks fine at the top and washes out at the bottom fails accessibility even if the average looks okay.
- This is a signature move, not a default. Per `frontend-design`'s own caution: gradient text is common enough in AI-generated output that using it on every heading reads as templated. Reserve it for the one heading it's actually meant to draw attention to.
- Don't animate the gradient position on every heading either (a moving gradient sheen) — that compounds the "trying too hard" read. A static gradient fill is usually the better choice; if motion is wanted, put it on one hero headline only.
