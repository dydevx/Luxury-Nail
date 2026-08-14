# Luxury Nail Design System

## Direction

Reference: a contemporary Mayfair beauty studio photographed through smoked bronze glass—quiet daylight, lacquered oxblood details, brushed champagne metal, and precise editorial spacing. The site is image-led and tactile, not ornamental.

## Color

- Strategy: committed. Deep lacquered oxblood carries hero and statement surfaces; champagne is a precise highlight, not a blanket wash.
- `--canvas`: `oklch(1 0 0)`
- `--surface`: `oklch(0.965 0.004 20)`
- `--ink`: `oklch(0.22 0.018 25)`
- `--muted`: `oklch(0.46 0.018 25)`
- `--brand`: `oklch(0.31 0.115 353)`
- `--brand-deep`: `oklch(0.20 0.072 353)`
- `--champagne`: `oklch(0.72 0.085 78)`
- `--champagne-light`: `oklch(0.90 0.035 78)`

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
