---
name: web-motion
description: >
  Concrete implementation patterns for landing-page motion and visual
  effects that aren't Three.js/WebGL: scroll-triggered reveals, infinite
  logo marquees, glow/spotlight accents, gradient-fill text, and bento-grid
  feature layouts. Trigger for "scroll animation", "logo marquee",
  "infinite scroll ticker", "glow effect", "spotlight effect", "gradient
  text", "bento grid", "feature grid layout", or when a design reference
  shows these effects and asks to reproduce them. For hover/press
  micro-interactions, reduced-motion handling, or GSAP-powered
  scroll-driven effects (pinning, scrubbing, horizontal scroll), use the
  web-animation-skills skills instead (accessible-animation,
  micro-interaction, gsap-web) — this skill covers what they don't.
metadata:
  author: naufalkmd
  version: "0.1.0"
---

# Web motion patterns

Concrete, copy-pasteable patterns for the specific visual-effect vocabulary common in modern landing pages — the ones not already covered by the `web-animation-skills` collection (https://github.com/iart-ai/web-animation-skills).

## References

- `scroll-reveal.md` — fade/rise content in as it's scrolled to, via `IntersectionObserver`. Lightweight, zero-dependency alternative to GSAP ScrollTrigger for simple entrance reveals; reach for `gsap-web`'s ScrollTrigger cookbook instead when the effect needs scrubbing, pinning, or scroll-linked progress rather than a one-time reveal.
- `marquee.md` — infinite scrolling logo/content strip, CSS-only.
- `glow-spotlight.md` — the soft ambient glow behind a hero graphic, or a tight spotlight beam above an icon.
- `gradient-text.md` — gradient-filled headline text, and when it's actually the right call vs. a templated default.
- `bento-grid.md` — mixed-size CSS grid for feature/product showcase sections.

## Use the other skill instead when

- The request is a hover/press/toggle micro-interaction, a modal/drawer/toast animation, or shared-element layout transition → `micro-interaction` (web-animation-skills).
- The request is about `prefers-reduced-motion` handling, WCAG 2.3.3 compliance, or gating any animation library for accessibility → `accessible-animation` (web-animation-skills). Every pattern in this skill still needs that rule present in the page — see its own note in each reference file.
- The request is a scroll-driven effect that needs pinning, scrubbing, a scroll-linked timeline, horizontal scroll sections, or Lenis smooth-scroll sync → `gsap-web` (web-animation-skills).
- The request is 3D/WebGL, not DOM/CSS → `threejs-engineering`.

## Rules that apply across every pattern here

- One signature motion moment per view, everything else quiet. Stacking glow + gradient text + a bento grid + a marquee on the same screen reads as trying too hard, not polished — see `frontend-design`'s restraint principle.
- Every pattern here is decorative or supporting, never load-bearing for content access — a user with `prefers-reduced-motion` set, or JS disabled, must still be able to read and use everything on the page.
- Verify scroll-triggered effects with an actual incremental scroll when testing, not a full-page/beyond-viewport screenshot capture — those don't fire `IntersectionObserver` and will make working content look broken.
