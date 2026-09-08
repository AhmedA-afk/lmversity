# Homepage design record

This records the built redesign of `/` only. It is not a global rebrand or an
approval of new product positioning. Other learning, catalog, and editorial
surfaces retain their existing visual system and shared font families.

## Direction

An expansive editorial opening pairs large, light serif type with a dimensional
version of the original LMV emblem. Warm paper, deliberate empty space, thin
rules, and a single indigo manifesto band carry the composition. The premium
quality comes from scale, proportion, and the recognizable mark.

- Source Serif 4 remains the heading family; homepage headings use weight 400
  and tighter spacing. IBM Plex Sans remains the reading and interface family;
  existing IBM Plex Mono usage elsewhere is retained. No font family is added.
- The desktop shell caps at 1328px with 56px side gutters. A two-column hero
  becomes stacked below 760px; phone gutters are 20px. Section spacing scales
  from 80px to 140px, with compact layouts for pathway and guide rows.
- Primary actions use solid ink surfaces, 4px corners, and a 52px minimum height.
  Secondary links use thin underlines; navigable rows carry directional arrows.
- Existing header search, navigation, theme, and saved controls remain available;
  header spacing changes are scoped to `.home-page`.

## Color and states

The existing paper/ink palette remains the base: `#FBFAF8` / `#1B1A18` in light
and `#18181A` / `#ECEBE6` in dark. Indigo and brass use `--brand-cool` and
`--brand-warm`, including their existing dark equivalents. Homepage band tokens
use `#2E4387` in light and `#26376D` in dark, with light text and brass detail.
Homepage tokens are declared in all three states: bare `:root`, explicit
`data-theme="dark"`, and system dark unless explicitly set to light.
The sculpture responds to theme changes. Keyboard focus remains visible, with
a paper-colored focus outline specifically on the indigo manifesto band.

## Sources of truth

- [Homepage composition and scoped styles](src/pages/index.astro).
- [Shared tokens and homepage-only header overrides](src/styles/global.css).
- [SVG fallback and lazy scene lifecycle](src/components/HeroScene.astro).
- [Three.js sculpture](src/scripts/hero-scene.ts) and [Motion reveals](src/scripts/home-motion.ts).
- [Original contour asset](public/brand/emblem-sculpture.svg) and [reusable paths](src/data/emblem.ts).
- [Logo provenance and interaction decisions](docs/landing-design.md).

[The existing visual system](docs/visual-system.md) remains authoritative for
diagrams, illustration, and editorial honesty. This record describes the current
homepage implementation; it does not report test results or deployment status.
