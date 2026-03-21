# The Venue

A React-based event landing page for musical events. Showcases an artist, countdown timer, venue info, ticket pricing, and location — all driven from a single `eventData.js` config file.

---

## Getting Started

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Updating Event Content

All event-specific content lives in one file:

```
src/eventData.js
```

Update the artist, date, venue, ticket tiers, discount, and links there — no need to touch any component.

---

## Scripts

| Command | Description |
|---|---|
| `npm start` | Run development server |
| `npm run build` | Production build |
| `npm run lint` | Check for lint errors |
| `npm run lint:fix` | Auto-fix lint errors |
| `npm run format` | Format all files with Prettier |
| `npm test` | Run tests |

---

## Stack

- **React 19** with functional components and hooks
- **MUI v7** — AppBar, Drawer, Button
- **Embla Carousel** — auto-playing image slideshow
- **react-awesome-reveal** — scroll-triggered animations (Fade, Slide, Zoom)
- **react-scroll** — smooth scroll navigation
- **Prettier + ESLint** — code formatting and linting

---

## Project Structure

```
src/
├── eventData.js               # All event content — edit here for new events
├── App.js                     # Root layout with scrollable sections
├── components/
│   ├── header_footer/
│   │   ├── Header.js          # Fixed nav bar with hamburger menu
│   │   ├── SideDrawer.js      # Slide-in nav drawer with section links
│   │   └── Footer.js          # Brand name and copyright
│   ├── featured/
│   │   ├── index.js           # Artist name overlay on carousel
│   │   ├── Carousel.js        # Auto-playing full-height image slider
│   │   └── TimeUntil.js       # Live countdown timer (rolling deadline)
│   ├── Highlights/
│   │   ├── index.js           # Section container
│   │   ├── Description.js     # Intro text with fade animation
│   │   └── Discount.js        # Animated discount counter with CTA
│   ├── venueNfo/
│   │   └── index.js           # Event date, time and venue details
│   ├── pricing/
│   │   └── index.js           # Ticket tier cards with purchase buttons
│   ├── location/
│   │   └── index.js           # Embedded Google Map
│   └── utils/
│       └── MyButton.js        # Reusable CTA button
└── resources/
    ├── styles.css             # Global styles
    └── images/                # Slide images and icons
```

---

## Countdown Timer

The timer in `TimeUntil.js` uses a rolling deadline strategy — it always counts down to a date ~7 months ahead, auto-renewing on the 1st of the month before expiry. This keeps the demo live regardless of the actual event date in `eventData.js`.
