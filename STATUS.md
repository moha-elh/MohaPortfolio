# Portfolio — what's done vs. what still needs you

Snapshot of every page/section: ✅ done, 🟡 works but needs your content (images/text).
Source of truth for the gaps is the `// TODO` comments in `src/models/`.

---

## 🟡 Needs your attention

### 1. Certificates — **needs images** (`src/models/achievements.js`)
All 6 certs render fine but have `img: null`. Drop scans/photos into
`public/assets/certificates/` and set the `img` field:

| id | cert | add |
|----|------|-----|
| `solihack` | SoliHackathon ITWAVE — 3rd | `/assets/certificates/solihack.jpg` |
| `gemma` | Google Gemma 3n Impact — Finalist | `/assets/certificates/gemma.jpg` |
| `bac` | Baccalauréat — Mention TB | `/assets/certificates/bac.jpg` |
| `blue` | Blue Hackathon | `/assets/certificates/blue.jpg` |
| `ids` | IDS Hackathon | `/assets/certificates/ids.jpg` |
| `csc` | CSC ENSAT President | `/assets/certificates/csc.jpg` |

Optional: fill `verifyUrl` if any have an online verification link.

### 2. Projects — **needs screenshots + copy** (`src/models/projects.js`)

Screenshots missing (`imgs: []`) for almost every project. Add to
`public/assets/projects/` then fill the `imgs` array. Copy status:

| project | still needs |
|---------|-------------|
| `bezel` | copy done ✅ (pulled from repo) — only screenshots missing |
| `bready-on-fire` | copy done ✅ (pulled from repo) — only screenshots missing |
| `vc-worldwide` | tag, description, highlights, tech + screenshots — repo 404 (private?), couldn't pull |
| `dirhamy`, `skillios`, `propel`, `projexis` | copy is done ✅ — only screenshots missing |
| `bi-pipeline` | fully done ✅ (has 2 real images) |

---

## ✅ Done — no action needed

| Page / section | Notes |
|----------------|-------|
| Nav | routes cleaned to `/section` |
| Hero | — |
| Intro | real image wired |
| Projects board | layout/logos done; only per-project screenshots pending (above) |
| Toolbox | tech logos + hover descriptions done |
| Experience | real polaroids + filmstrip wired (`assets/moments/`) |
| Contact | — |
| Footer | — |
| Story page | real photos wired |
| Thoughts page | real photos wired |
| Work page | grid + logos done (screenshots inherit from projects.js) |
| Project detail | works; shows dotted placeholder box until a project has `imgs` |
| CV page | `moha_cv.jpg` wired |
| Certificates page | works; cert photos pending (above) |
| Draw page | interactive canvas done |

---

**Bottom line:** the whole site is built and functional. Remaining work is *content*, not code:
certificate photos, project screenshots, and copy for **VC Worldwide** (repo currently 404 — make it
public or paste its README/`package.json`). Bezel and Bready on Fire copy is done.
