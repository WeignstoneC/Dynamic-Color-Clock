# 🕐 Dynamic Color Clock
### by Weignstone Churchil

A real-time digital clock built with **React** and **Vite** that displays the current time and date against a continuously shifting full-spectrum color background.

---

## ✨ Features

- **Live clock** — updates every second using `useState` + `useEffect`
- **Shifting color background** — hue rotates through the full 360° spectrum continuously
- **Three animated orbs** — glowing blobs at offset hues (0°, 120°, 240°) that drift in the background
- **Accent sync** — colons, seconds digit, AM/PM, and divider bar all shift color in harmony
- **Seconds pulse** — subtle scale animation on every tick
- **Blinking colons** — step-animation for an authentic digital clock feel
- **Glassmorphism card** — frosted-glass effect using `backdrop-filter: blur`

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| [Vite](https://vitejs.dev/) | Project scaffolding & dev server |
| [React 18](https://react.dev/) | UI component + state management |
| CSS (custom) | Animations, glassmorphism, dynamic hue |
| Google Fonts | Orbitron (clock digits) + DM Sans (labels) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/WeignstoneChurchil/color-clock.git
cd color-clock

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open **http://localhost:5173** in your browser — the clock starts immediately.

### Build for production

```bash
npm run build
```

Output lands in `dist/` — ready to deploy to any static host (Netlify, GitHub Pages, Vercel, etc.).

### Preview the production build

```bash
npm run preview
```

---

## 📁 Project Structure

```
color-clock/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx        # Clock component — all logic & JSX
│   ├── App.css        # Styles, animations, glassmorphism
│   ├── main.jsx       # React entry point
│   └── index.css      # Global reset
├── index.html         # HTML shell — mounts React at #root
├── vite.config.js     # Vite + @vitejs/plugin-react
├── package.json       # Dependencies & scripts
└── README.md          # You are here
```

---

## 🎨 How the Color Effect Works

Every second, a `hue` state variable increments by `0.5°`. This value drives:

```js
// Background gradient — three hue stops, 60° apart
const bg = `linear-gradient(135deg,
  hsl(${hue}, 70%, 10%),
  hsl(${hue + 60}, 65%, 15%),
  hsl(${hue + 120}, 70%, 10%))`

// Accent color — complementary hue (180° opposite)
const accent = `hsl(${hue + 180}, 100%, 65%)`
```

The three background orbs sit at **0°, 120°, and 240°** offsets, keeping the palette balanced across the full rotation.

---

## 🧩 Component Overview

### `App.jsx`
- Holds `now` (current `Date`) and `hue` (0–360) in state
- `useEffect` sets a 1-second interval that updates both
- Computes all display strings (hours, minutes, seconds, AM/PM, day name, full date)
- Passes dynamic inline styles to elements for the color shift

### `App.css`
- **`.clock-wrapper`** — full-screen flex container with transitioning background
- **`.orb`** — absolutely positioned blurred circles with `drift` keyframe animation
- **`.clock-card`** — glassmorphism card with `backdrop-filter: blur(24px)`
- **`.digits`** — Orbitron 900-weight at `4.8rem`
- **`.sec`** — seconds digit with `pulse` keyframe (scale 1 → 1.07 → 1 per tick)
- **`.colon`** — `blink` keyframe using `step-start` for sharp on/off

---

## 📜 License

MIT © 2025 Weignstone Churchil
