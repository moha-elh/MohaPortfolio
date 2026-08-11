# Prompt — collect a project's info for my portfolio

Open a **separate Claude session inside the project's own repo**, then paste the
block below. Run it once per project. Drop the resulting object into
`src/models/projects.js` in the portfolio (you fill `position` / `rotation` /
`size` yourself).

---

You are helping me document one of my software projects for my personal
portfolio site. You are currently inside this project's own repository — read it,
don't guess.

**Step 1 — Read the repo** to understand what this project is and its real stack:
- `README` / docs
- `package.json` (or `requirements.txt`, `.csproj`, `go.mod`, etc.) for dependencies
- the source folders (framework, structure, notable features)
- deploy / CI / infra files (Dockerfile, `.github/workflows`, vercel/netlify config)
- any live URL or deployment hints

**Step 2 — Output ONE JavaScript object** in this exact shape and field order,
inside a single fenced code block, ready to paste into my `projects` array:

```js
{
  id: 'kebab-case-id',
  name: 'PROJECT NAME',
  tag: 'a · b · c',                 // 3-4 lowercase tokens, signature tech/domain, separated by ' · '
  logo: '/assets/projects/logos/<Name>Logo.png',
  imgs: [],                         // leave empty — I add screenshots separately
  githubUrl: 'https://github.com/...',
  siteUrl: null,                    // live URL, or null
  detail: {
    status: 'live',                 // one of: 'live' | 'private' | 'in-progress'
    year: '2024',
    description:
      'One or two plain-language sentences: what it is and why it exists.',
    highlights: [
      'Key feature or tech decision',
      'Another feature / architecture choice',
      'Outcome or result',
      // 3-5 bullets total
    ],
    tech: ['React', 'Node.js', 'PostgreSQL'],  // proper-cased names, from actual deps
  },
}
```

**Field rules:**
- `tag` — pick the most defining tech/domain, e.g. `'node · react · postgres'` or `'langchain · gRPC · kafka · c#'`.
- `tech` — only technologies actually used in the repo, proper-cased (`'React'`, `'Node.js'`, `'ASP.NET'`, `'PostgreSQL'`).
- `highlights` — concrete: real features, architecture, or outcomes. No filler.
- `description` — no marketing fluff; say what it does and the point of it.

**Rules:**
- **Do not invent anything.** If a field can't be determined from the repo
  (usually `status`, `year`, or `siteUrl`), put your best guess but append an
  inline `// UNSURE: <what you need from me>` comment, and list those questions
  after the code block.
- Leave the layout fields (`position`, `rotation`, `size`, `board`) out — I set those.

**Step 3 — Screenshots:** suggest 1-2 screens worth capturing (e.g. dashboard,
main flow). I'll save them as `public/assets/projects/<id>-screenshot.png` and
add the paths to `imgs`.

**Then finish with:** a short bullet list of anything you marked `UNSURE` so I can answer.
