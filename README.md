# Mouhssine El Haouary — Personal Portfolio

A playful, interactive personal portfolio built with **React + Vite**, following the **"The Studio"** design direction — a physical-desk aesthetic with polaroid project cards, washi-tape timelines, index-card skill groups, and a custom sticky-note cursor.

---

## Quick start

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

---

## Architecture — MVC in React

The codebase is split into three clear layers so any section can be changed independently.

```
src/
├── models/          Model — pure data, no React
├── context/         Shared state (Cursor) — bridges Model → View
├── controllers/     Controller — custom hooks with logic
├── views/           View — React components (presentational)
│   ├── layout/      Persistent chrome (Nav, Footer)
│   ├── sections/    One component per page section
│   └── ui/          Reusable design-system primitives
└── styles/          Global CSS reset + design tokens
```

### Model (`src/models/`)

Plain JS files — no React, no side effects. Edit these to update content.

| File | What it controls |
|---|---|
| `projects.js` | Project cards (name, tag, image, position, rotation) |
| `skills.js` | Toolbox categories and tech items (with simple-icons slugs) |
| `experience.js` | Timeline entries (period, title, detail, accent) |
| `achievements.js` | Rosette medals (rank, label, fill colour) |
| `contact.js` | Owner details + contact link stickers |

### Controller (`src/controllers/`)

Custom hooks that contain all logic, keeping components thin.

| Hook | Responsibility |
|---|---|
| `useDraggable(pos, rot, getZ)` | Manages position + z-index + lifted state for a draggable card |
| `useNavScroll(threshold)` | Returns `true` once page has scrolled past threshold |

### Context (`src/context/CursorContext.jsx`)

`CursorProvider` owns the cursor position (with lerp lag) and hover state for the whole app.  
`useCursor()` — read cursor state inside any component.  
`useHover()` — returns `{ onMouseEnter, onMouseLeave }` to spread onto interactive elements.

### View (`src/views/`)

Components are purely presentational: they receive data from models/context and render HTML.

```
views/
├── layout/
│   ├── Nav.jsx           Sticky nav with scroll-state border
│   └── Footer.jsx        Copyright + back-to-top
├── sections/
│   ├── Hero.jsx          Handwritten name + lime scribble
│   ├── Intro.jsx         Portrait polaroid + memo letter
│   ├── Projects.jsx      Scattered draggable polaroid board
│   ├── Toolbox.jsx       4-column index-card skill grid
│   ├── Experience.jsx    Washi-tape timeline
│   ├── Achievements.jsx  Rosette medal row
│   └── Contact.jsx       CTA + contact stickers + phone QR mock
└── ui/
    ├── Cursor.jsx        Custom sticky-note cursor (reads CursorContext)
    ├── Divider.jsx       Section label + wavy SVG rule
    ├── ProjectCard.jsx   Draggable polaroid (uses useDraggable)
    ├── IndexCard.jsx     Index card with tech list
    ├── TechItem.jsx      Logo (simple-icons) + name row
    └── Rosette.jsx       Medal with ribbon tails
```

Every component has a co-located `Component.module.css` (CSS Modules) so styles never leak.

---

## Design tokens (`src/styles/tokens.css`)

All colours and font stacks are CSS custom properties. Change them once, they update everywhere.

```css
--ink:    #1a1a1a   /* text / borders   */
--faint:  #9a9a9a   /* muted / grid     */
--paper:  #fafaf7   /* page background  */
--lime:   #c8f24a   /* accent           */
--yellow: #fef4a8   /* sticky notes     */
--cream:  #fefbf2   /* card backgrounds */

--f-hand: 'Caveat'         /* handwriting */
--f-body: 'Space Grotesk'  /* body text   */
--f-mono: 'JetBrains Mono' /* labels/code */
```

---

## How to update content

### Add / edit a project
Open `src/models/projects.js` and add or edit an entry:
```js
{
  id:       'my-project',          // unique key
  name:     'MY PROJECT',
  tag:      'react · node · pg',
  img:      '/assets/my-thumb.png',// place image in public/assets/
  position: { x: 400, y: 100 },   // initial position on the board
  rotation: -3,                    // degrees
  size:     { w: 230, h: 150 },
  url:      'https://...',
}
```

### Add a new skill
Open `src/models/skills.js` and add to the relevant category's `items` array:
```js
{ name: 'New Tool', slug: 'newtool' }   // slug = simple-icons identifier
{ name: 'Custom',   slug: null }        // null → monogram fallback
```
Find the correct slug at [simpleicons.org](https://simpleicons.org).

### Change accent colour
Edit `--lime` in `src/styles/tokens.css`.

### Swap your photo
Replace `public/assets/moha_cv.jpg` with your new photo (same filename), or update the `photo` field in `src/models/contact.js`.

### Add a real CV PDF
Drop `cv.pdf` into `public/assets/`. The CV nav link and phone QR label already point to `/assets/cv.pdf`.

---

## Tech stack

| Tool | Purpose |
|---|---|
| [Vite](https://vitejs.dev) | Build tool / dev server |
| [React 18](https://react.dev) | UI framework |
| CSS Modules | Scoped component styles |
| Google Fonts | Caveat, Space Grotesk, JetBrains Mono |
| [simple-icons CDN](https://simpleicons.org) | Tech logos in Toolbox |
| Pointer Events API | Smooth drag on project cards |
| `requestAnimationFrame` | Lerp cursor lag effect |

---

## Project structure (full)

```
personalPortfolio/
├── public/
│   └── assets/
│       ├── moha_cv.jpg          portrait photo
│       ├── project-preview.png  shared project thumbnail
│       └── cv.pdf               (add yours here)
├── src/
│   ├── models/
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── experience.js
│   │   ├── achievements.js
│   │   └── contact.js
│   ├── context/
│   │   └── CursorContext.jsx
│   ├── controllers/
│   │   ├── useDraggable.js
│   │   └── useNavScroll.js
│   ├── views/
│   │   ├── layout/
│   │   │   ├── Nav.jsx + Nav.module.css
│   │   │   └── Footer.jsx + Footer.module.css
│   │   ├── sections/
│   │   │   ├── Hero.jsx + Hero.module.css
│   │   │   ├── Intro.jsx + Intro.module.css
│   │   │   ├── Projects.jsx + Projects.module.css
│   │   │   ├── Toolbox.jsx + Toolbox.module.css
│   │   │   ├── Experience.jsx + Experience.module.css
│   │   │   ├── Achievements.jsx + Achievements.module.css
│   │   │   └── Contact.jsx + Contact.module.css
│   │   └── ui/
│   │       ├── Cursor.jsx + Cursor.module.css
│   │       ├── Divider.jsx + Divider.module.css
│   │       ├── ProjectCard.jsx + ProjectCard.module.css
│   │       ├── IndexCard.jsx + IndexCard.module.css
│   │       ├── TechItem.jsx + TechItem.module.css
│   │       └── Rosette.jsx + Rosette.module.css
│   ├── styles/
│   │   ├── tokens.css
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── README.md
```
