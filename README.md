# 🐰 PixelQuest To-Do

A cute, retro **pixel-art / 8-bit** to-do list app with a living animated scene — a hopping rabbit mascot, a day/night sky, drifting clouds, twinkling stars, trees, and a fireworks celebration when you clear your whole list.

Everything runs as a **single self-contained HTML file** — no build step, no server, no dependencies required to use it.

---

## ✨ Features

### Task management
- Add tasks with a title, optional notes, due date, and priority (low / medium / high)
- Mark tasks complete / pending with one click
- Edit any task inline
- Delete tasks (with a little animation)
- Filter by **All / Pending / Completed**
- Live counters ("X pending · Y completed") and a progress bar
- Timestamps for when each task was added and completed
- Everything is saved automatically to your browser's `localStorage` — your list survives a refresh
- Friendly empty-state messages when a list has nothing in it

### The living scene
- **Sir Fluff**, a pixel-art rabbit mascot, in the header — hops with proper anticipation/landing physics, wiggles each ear independently, blinks, twitches his nose, and has rosy cheeks
- Day → sunset → night sky cycle (automatic, based on your real local time, or set manually)
- Drifting clouds, a sun/moon arc, and twinkling stars at night
- Trees with a resident owl
- An optional retro 8-bit sound effects toggle (🔊 SFX)
- **🎆 Fireworks** burst across the sky when you reach 100% completion (or press "Launch Fireworks" any time)

---

## 🚀 How to run it

### Option 1 — Just open it (recommended, no install needed)
The entire app lives inside **`index.html`**. Just double-click the file, or drag it into any browser (Chrome, Edge, Firefox, Safari). That's it — nothing to install.

### Option 2 — Run it through Vite (optional dev-server workflow)
This project also ships with a minimal Vite setup, in case you'd rather run it through a local dev server (e.g. for live-reload while editing). It is **not required** — `index.html` works with zero setup — but it's here and tested to install cleanly:

```bash
# from the project folder
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:3000`).

To build a production bundle instead:
```bash
npm run build
npm run preview
```

> This setup has a single dev dependency (Vite) and no plugins, so `npm install` should complete with no peer-dependency errors. If you previously hit an `ERESOLVE` error from an older version of this project, that was caused by an unused React/Tailwind scaffold that has since been removed — it was never used by `index.html` in the first place.

---

## 📁 Project structure

```
pixelquest-to-do/
├── index.html          # The entire app — HTML, CSS, and JS all in one file
├── README.md            # This file
├── package.json         # Minimal Vite setup (optional, not required to run the app)
└── vite.config.ts
```

> **Note:** `index.html` is fully self-contained (all CSS and JS inline) and has no imports at all. `package.json`/`vite.config.ts` exist only to optionally serve it through a local dev server — they are not required to use the app.

---

## 🎨 Customizing

Everything is in `index.html`, organized with clear section comments. A few easy things to tweak:

| What | Where to look |
|---|---|
| Colors / palette | CSS custom properties near the top of the `<style>` block |
| Rabbit mascot animation speed | `mascotHop`, `leftEarWiggle`, `rightEarWiggle` `@keyframes` |
| Day/night cycle timing | `updateSkyTheme()` function and the `.time-toggle-btn` buttons (☀️ DAY / 🌅 DUSK / 🌙 NIGHT / ⏰ AUTO) |
| Fireworks colors | `FIREWORK_PALETTES` array |
| Fireworks burst positions/timing | `burstSchedule` inside `triggerSkyFireworks()` |
| Trees | the `scene-tree-pine`, `scene-tree-oak` SVG blocks and their CSS classes |

---

## ♿ Accessibility notes

- All interactive elements are keyboard-reachable and labeled with `aria-label`s.
- Task text is inserted safely (`textContent`, never `innerHTML`), so pasted text can't break the page.
- The app's animations are small, slow, decorative sprites (not large flashing or parallax motion), so they're kept active even when a device requests reduced motion — turning them off would hide the features the app is built to show. Sound effects are off by default and must be turned on manually.

---

## 🛠️ Built with

Plain HTML5, CSS3, and vanilla JavaScript — no frameworks required at runtime. Fonts: *Press Start 2P* and *VT323* (Google Fonts).

Have fun clearing your quest list! 🏆
