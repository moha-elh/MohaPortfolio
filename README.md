# Mouhssine El Haouary — Personal Portfolio

A playful, interactive personal portfolio built with **React + Vite**, following the **"The Studio"** design direction — a physical-desk aesthetic with polaroid project cards, washi-tape timelines, index-card skill groups, and a custom pencil cursor.

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

```
src/
├── models/          Model — pure data, no React
├── context/         Shared state (Cursor) — bridges Model → View
├── controllers/     Controller — custom hooks with logic
├── views/           View — React components (presentational)
│   ├── layout/      Persistent chrome (Nav, Footer)
│   ├── sections/    One component per page section / full-page view
│   └── ui/          Reusable design-system primitives
└── styles/          Global CSS reset + design tokens
```

### Model (`src/models/`)

Plain JS files — no React, no side effects. Edit these to update content.

| File | What it controls |
|---|---|
| `projects.js` | Project cards: name, tag, image, position, rotation, size, URL, and `detail` object (description, highlights, tech stack, status) |
| `skills.js` | Toolbox categories and tech items — `slug` for simple-icons CDN, `localImg` for local SVG overrides |
| `experience.js` | Timeline entries (period, title, detail, accent) |
| `achievements.js` | Rosette medals (rank, label, fill colour) |
| `contact.js` | Owner details, CV path, and contact link stickers |

### Controller (`src/controllers/`)

| Hook | Responsibility |
|---|---|
| `useDraggable(pos, rot, getZ, disabled, onClickIntent)` | Position + z-index + lifted state. Fires `onClickIntent` when pointer is released with < 6 px of movement (click vs drag detection) |
| `useNavScroll(threshold)` | Returns `true` once page scrolls past threshold |

### Context (`src/context/CursorContext.jsx`)

`CursorProvider` owns cursor position (lerp lag) and hover state.
`useCursor()` — read cursor state. `useHover()` — spread `{ onMouseEnter, onMouseLeave }` onto interactive elements.

### View (`src/views/`)

```
views/
├── layout/
│   ├── Nav.jsx              Sticky nav with IntersectionObserver active state + hamburger drawer
│   └── Footer.jsx
├── sections/
│   ├── Hero.jsx             Handwritten name + lime scribble
│   ├── Intro.jsx            Portrait polaroid + memo letter (7-click easter egg on signature)
│   ├── Projects.jsx         Scattered draggable polaroid board (desktop) / stacked (mobile)
│   ├── Toolbox.jsx          4-column index-card skill grid
│   ├── Experience.jsx       Washi-tape timeline + sticky polaroid preview + filmstrip
│   ├── Achievements.jsx     Rosette medal row
│   ├── Contact.jsx          CTA + contact stickers
│   ├── Filmstrip.jsx        CSS marquee contact sheet (old film reel aesthetic)
│   ├── ProjectDetail.jsx    Full-page case study for a single project
│   ├── WorkPage.jsx         Full-page grid of all projects
│   └── Story.jsx            Easter egg — full narrative page (unlocked by 7-clicking the signature)
└── ui/
    ├── Cursor.jsx           Pencil SVG cursor (fine-pointer only)
    ├── Dither.jsx           Animated ordered-dithering canvas (3-wave Bayer)
    ├── Divider.jsx          Section label + wavy SVG rule
    ├── ProjectCard.jsx      Draggable polaroid (click = open detail, drag = rearrange)
    ├── IndexCard.jsx        Index card with tech list
    ├── TechItem.jsx         Logo (local SVG or simple-icons CDN) + name row with hover desc
    ├── Certificate.jsx      Achievement certificate component
    └── Rosette.jsx          Medal with ribbon tails
```

---

## Page routing

There is no router library. `App.jsx` manages a `page` state:

| State | What renders |
|---|---|
| `null` | Main portfolio (all sections) |
| `'story'` | Easter-egg story page (triggered by clicking `claude.ai` 7 times) |
| `'work'` | All-projects grid page (triggered by clicking the `+ more` polaroid) |
| `{ type: 'project', id }` | Project detail page for the given project ID |

Navigation is always handled by setting this state + `window.scrollTo(0, 0)`. Every sub-page has a `← back` button that returns to `null`.

---

## Tech logos

Tech logos in the Toolbox use two sources, with a monogram circle fallback:

1. **simple-icons CDN** — set `slug: 'iconname'` in `skills.js`. Find slugs at [simpleicons.org](https://simpleicons.org).
2. **Local SVG** — set `localImg: '/assets/icons/filename.svg'` and drop the file in `public/assets/icons/`. Takes priority over `slug`. Use this for logos not in simple-icons (gRPC, Power BI, Pentaho, AWS, TypeORM).

```js
// simple-icons (most logos)
{ name: 'Docker', slug: 'docker', desc: 'containerize everything' }

// local SVG override
{ name: 'gRPC', slug: null, localImg: '/assets/icons/grpc.svg', desc: 'service-to-service RPC' }

// monogram fallback (no logo available)
{ name: 'Custom', slug: null, desc: 'description' }
```

---

## Design tokens (`src/styles/tokens.css`)

```css
--ink:    #1a1a1a   /* text / borders   */
--faint:  #9a9a9a   /* muted / labels   */
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

Open `src/models/projects.js`. Each project needs a `detail` object for the case study page:

```js
{
  id:       'my-project',
  name:     'MY PROJECT',
  tag:      'react · node · pg',
  img:      '/assets/project-preview.png',
  position: { x: 400, y: 100 },  // desktop board position
  rotation: -3,
  size:     { w: 295, h: 205 },
  url:      'https://...',        // null if private
  detail: {
    status:      'live',          // 'live' | 'private' | 'in-progress'
    year:        '2024',
    description: 'What it does.',
    highlights:  ['Built X', 'Used Y', 'Achieved Z'],
    tech:        ['React', 'Node.js', 'PostgreSQL'],
  },
}
```

### Add a skill

Open `src/models/skills.js` and append to any category's `items` array:

```js
{ name: 'New Tool', slug: 'newtool', desc: 'what it does' }
// or with a local SVG:
{ name: 'New Tool', slug: null, localImg: '/assets/icons/newtool.svg', desc: 'what it does' }
```

### Swap your photo

Replace `public/assets/moha_cv.jpg` (same filename), or update `photo` in `src/models/contact.js`.

### Update your CV

Drop the PDF into `public/assets/` and update `cvPdf` in `src/models/contact.js`.

---

## Easter egg

Clicking `— claude.ai` in the Intro memo **7 times** opens the Story page — a full narrative about the person behind the portfolio. The signature turns lime green on hover as the only hint.

---

## Tech stack

| Tool | Purpose |
|---|---|
| [Vite](https://vitejs.dev) | Build tool / dev server |
| [React 18](https://react.dev) | UI framework |
| CSS Modules | Scoped component styles |
| Google Fonts | Caveat, Space Grotesk, JetBrains Mono |
| [simple-icons CDN](https://simpleicons.org) | Tech logos in Toolbox |
| Pointer Events API | Drag with click-vs-drag detection (< 6 px = click) |
| `requestAnimationFrame` | Lerp cursor lag + Dither canvas animation |
| IntersectionObserver | Nav active state tracks scroll position |

---

## Project structure (full)

```
personalPortfolio/
├── public/
│   └── assets/
│       ├── moha_cv.jpg                    portrait photo
│       ├── project-preview.png            shared project thumbnail
│       ├── CV - Mouhssine El Haouary.pdf  CV file
│       └── icons/                         local SVG logos (grpc, aws, powerbi, pentaho, typeorm)
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
│   │   │   ├── Contact.jsx + Contact.module.css
│   │   │   ├── Filmstrip.jsx + Filmstrip.module.css
│   │   │   ├── ProjectDetail.jsx + ProjectDetail.module.css
│   │   │   ├── WorkPage.jsx + WorkPage.module.css
│   │   │   └── Story.jsx + Story.module.css
│   │   └── ui/
│   │       ├── Cursor.jsx + Cursor.module.css
│   │       ├── Dither.jsx
│   │       ├── Divider.jsx + Divider.module.css
│   │       ├── ProjectCard.jsx + ProjectCard.module.css
│   │       ├── IndexCard.jsx + IndexCard.module.css
│   │       ├── TechItem.jsx + TechItem.module.css
│   │       ├── Certificate.jsx
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
