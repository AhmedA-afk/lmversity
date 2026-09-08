# Landing page: logo and implementation

## Original mark

The visual references are the original light and dark PNGs under
`/home/zenith/Personal-Work/get_money_xD/fieldguide/logos/`:

- `Black White Modern Minimal Typography Creative Studio Logo/1.png`
- `Black White Modern Minimal Typography Creative Studio Logo (1)/2.png`

Both show geometric L, M, and triangular V forms crossing a soft four-lobed
ground, with an asterisk placed asymmetrically above the V. Exact contours from
`Black White Modern Minimal Typography Creative Studio Logo (5)/1.svg` feed
`public/brand/emblem-sculpture.svg` and `src/data/emblem.ts`.

The design interpretation is structure held within a more open, experimental
space: hard letter geometry against a yielding ground. That is an interpretation
of the form, not an assertion about the original designer's intended symbolism.
The homepage states the asterisk as “read the fine print.” The documented
editorial philosophy in `docs/visual-system.md` pairs mechanisms with failure
modes: indigo describes what happens; brass marks what breaks or needs attention.

The homepage reuses the real asterisk in the headline and manifesto, and the
ground's outline in the closing section. Small pathway graphics echo the mark's
geometric vocabulary; they are decorative, not system diagrams or data.

## Reading and actions

The sequence is opening promise, failure-mode manifesto, three curriculum
stages, starting-point choices, practical guides, featured answers, and a final
learning invitation. Lesson and track totals come from content and curriculum
data. No fabricated performance figure or testimonial supports the design.

“Explore the curriculum” and the closing action lead to `/learn`. The secondary
hero action jumps to starting-point choices for AI Literacy, LLM Foundations,
and role paths. Track rows, guides, answers, practice, scenarios, interview prep,
and the existing resume hook preserve direct routes into the learning material.

## Motion and resilience

Motion gives the opening text one staggered entrance and selected headings a
finite reveal when they enter view. Content starts visible in CSS and remains
available without JavaScript. There is no continuous decorative text animation.

Three.js extrudes the original SVG paths into a shallow, beveled sculpture with
an orthographic camera, indigo ground, paper letters, and brass asterisk. A finite
assembly settles into a restrained tilt; non-touch pointer movement changes that
tilt with easing. Rendering stops at rest, offscreen, and while the tab is hidden.

The scene imports during idle time over an inline theme-aware SVG fallback.
Reduced motion skips the scene and reveals; a live preference change completes
text animation, tears down WebGL, and restores the SVG. The async mount is also
checked after loading so a preference change or navigation cannot leave a late
scene running. Failed loading or context loss leaves the original SVG visible.
The art is decorative and hidden from assistive technology; text and links carry
the meaning. Rendering resources and observers are disposed during teardown.
