# Luxury Nail Design System

## Direction

Reference: a contemporary Mayfair beauty studio in quiet daylight—soft beige stone, espresso-brown lacquer, brushed champagne metal, and precise editorial spacing. The site is image-led and tactile, not ornamental.

## Color

- Strategy: committed. Beige and ivory establish calm salon light; espresso brown provides depth; champagne gold is reserved for actions, borders and fine highlights.
- `--canvas`: `oklch(0.985 0.009 82)`
- `--surface`: `oklch(0.935 0.026 79)`
- `--ink`: `oklch(0.22 0.026 58)`
- `--muted`: `oklch(0.43 0.032 61)`
- `--brand`: `oklch(0.34 0.055 58)`
- `--brand-deep`: `oklch(0.19 0.032 55)`
- `--champagne`: `oklch(0.70 0.105 79)`
- `--champagne-light`: `oklch(0.90 0.047 82)`

## Typography

- Display: Bodoni Moda, chosen for high-contrast, lacquer-label elegance without defaulting to common luxury-template serifs.
- Body: Manrope, chosen for open forms and excellent mobile legibility.
- Display tracking never tighter than `-0.03em`; body copy capped at `68ch`.

## Layout

- Maximum content width: 1240px with fluid gutters.
- Strong photographic crops and deliberately asymmetric editorial compositions.
- Section rhythm ranges from 72px to 144px; related content stays tightly grouped.
- Corners remain tailored: 0–16px on surfaces, pills reserved for compact controls.

## Components

- Buttons: uppercase Manrope, 44px minimum height, solid brand/champagne or restrained outline.
- Service list: ruled editorial rows rather than repeated icon cards.
- Contact and hours: high-contrast information blocks with direct action links.
- Gallery: mixed editorial grid with consistent object-fit crops and accessible lightbox.

## Motion

- A single composed hero entrance and restrained intersection reveals.
- Hover movement limited to 2–4px or subtle image scale.
- All motion collapses to instant state changes under `prefers-reduced-motion`.
