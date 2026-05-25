# 🕐 Color Clock

A dynamic, visually striking digital clock widget built with **React**, **Vite**, and **date-fns**. Designed as a productivity dashboard component.

## ✨ Features

- Live clock that updates every second
- Current date formatted with `date-fns`
- Retro-futuristic neon-on-dark aesthetic
- Animated seconds, blinking colons, and glowing typography
- Responsive glassmorphism card

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| [Vite](https://vitejs.dev/) | Project scaffolding & dev server |
| [React](https://react.dev/) | UI component framework |
| [date-fns v2.30](https://date-fns.org/) | Date/time formatting |
| CSS (custom) | Styling & animations |

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/color-clock.git
cd color-clock

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open your browser at **http://localhost:5173** to see the clock.

### Build for production

```bash
npm run build
```

The output lands in `dist/`.

## 📁 Project Structure

```
color-clock/
├── public/            # Static assets
├── src/
│   ├── App.jsx        # Main clock component (logic + JSX)
│   ├── App.css        # Clock styles & animations
│   ├── index.css      # Global reset
│   └── main.jsx       # React entry point
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Design Decisions

- **Orbitron** font (Google Fonts) — monospaced, futuristic feel perfect for a clock
- **Electric cyan** (`#00e5ff`) — primary accent, applied to colons and AM/PM
- **Vivid coral** (`#ff5f6d`) — seconds digit, creating instant visual focus
- **Soft lavender** (`#b8b8ff`) — labels and footer, complementing without competing
- Animated background blobs add depth without distracting from the time

## 📜 License

MIT
