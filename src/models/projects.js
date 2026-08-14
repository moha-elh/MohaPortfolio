export const projects = [
  /* ── Featured board: live / recruiter-friendly first ── */
  {
    id: 'bezel',
    name: 'Bezel',
    tag: 'react · typescript · canvas · vite',
    logo: '/assets/projects/logos/BezelLogo.png',
    imgs: ['/assets/projects/bezel/home.png'],
    position: { x: 0, y: 50 },
    rotation: -4,
    size: { w: 295, h: 205 },
    githubUrl: 'https://github.com/moha-elh/Bezel',
    siteUrl: 'https://trybezel.xyz/',
    detail: {
      status: 'live',
      year: '2026',
      description:
        'A browser-based generator for custom LinkedIn profile frames. <br> Upload a photo, pick a template, tweak the ring and text, and export a ready-to-upload 500×500 PNG, with no login and no server upload. Everything runs client-side.',
      highlights: [
        'All image rendering done natively with the Canvas 2D API (custom arc-text and crescent draw services), no canvas libraries',
        '7 ready-made templates plus a fully customizable ring: color, thickness, arc length, and fade',
        'Photo upload with drag-to-reposition crop, live preview, and one-click PNG export',
        'Zustand for state, React Router multi-page site (editor, landing, guide, legal), analytics + speed insights',
      ],
      tech: ['React', 'TypeScript', 'Vite', 'Zustand', 'React Router', 'Canvas 2D API', 'react-colorful', 'Vercel'],
    },
  },
  {
    id: 'bready-on-fire',
    name: 'Bready on Fire',
    tag: 'react · typescript · game · vite',
    logo: '/assets/projects/logos/BreadyLogo.png',
    imgs: ['/assets/projects/bready-on-fire/home.png'],
    position: { x: 320, y: 45 },
    rotation: 3,
    size: { w: 295, h: 205 },
    githubUrl: 'https://github.com/moha-elh/Breqd',
    siteUrl: 'https://breadyonfire.xyz/',
    detail: {
      status: 'live',
      year: '2026', // UNSURE: no dates in repo, but deps (React 19, Vite 7) are recent — confirm year
      description:
        'A Flappy Bird-style browser game where a piece of bread flaps through gaps between fire pipes. <br> Built for fun as a way to sharpen my React fundamentals. The physics, collision, and game loop are all hand-rolled.',
      highlights: [
        'Hand-written game loop, gravity/flap physics, and collision detection, no game engine or animation library',
        'Component-driven design: Bread, FirePipe, Background, and a Game container orchestrating state',
        'Viewport-aware rendering (safe-area insets) so it plays cleanly on mobile',
        'React 19 + TypeScript on Vite, styled with Tailwind CSS',
      ],
      tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Vercel'],
    },
  },
  {
    id: 'propel',
    name: 'Propel',
    tag: 'langchain · gRPC · kafka · c#',
    logo: '/assets/projects/logos/PropelLogo.png',
    imgs: [], // TODO: add screenshots e.g. ['/assets/projects/propel-screenshot.png']
    position: { x: 840, y: 30 },
    rotation: -2,
    size: { w: 295, h: 205 },
    githubUrl: 'https://github.com/BilalMagg/CV-Generator',
    siteUrl: null,
    detail: {
      status: 'private',
      year: '2024',
      description:
        'A distributed AI recruitment pipeline that runs the process end to end, from extracting job postings to applying with personalized CVs and emails, built on a microservice architecture with a .NET backend and Python AI agents.',
      highlights: [
        'LangChain agents for CV parsing and skill extraction',
        'Kafka for async event-driven routing between services',
        'gRPC for typed, high-performance inter-service communication',
        'ASP.NET microservices orchestrating a Python AI layer',
        'C# .NET backend for PDF generation and template-based resume formatting',
      ],
      tech: ['LangChain', 'Kafka', 'gRPC', 'Python', 'ASP.NET', 'C#', 'Docker'],
    },
  },
  {
    id: 'skillios',
    name: 'SKILLIOS',
    tag: 'vue · team lead · x10',
    logo: '/assets/projects/logos/SkilliosLogo.png',
    imgs: [], // TODO: add screenshots e.g. ['/assets/projects/skillios-screenshot.png']
    position: { x: 1155, y: 30 },
    rotation: 5,
    size: { w: 295, h: 205 },
    githubUrl: 'https://github.com/BilalMagg/Softskills-App',
    siteUrl: null,
    detail: {
      status: 'private',
      year: '2024',
      description:
        'A skills management and learning platform built around 360° evaluation from your colleagues, professors, and mentors. <br> We were a team of 10, and I led the 5-person frontend team across architecture, sprint planning, and developer coordination from first commit to delivery.',
      highlights: [
        'Team lead on a 10-person engineering team',
        'Vue.js SPA with modular component architecture',
        'Agile sprints: planning, review, retrospectives',
        'REST API integration, role-based access control',
      ],
      tech: ['Vue.js', 'Node.js', 'PostgreSQL', 'REST API', 'Figma'],
    },
  },
  {
    id: 'bi-pipeline',
    name: 'BI Pipeline',
    tag: 'pentaho · powerBI · ETL',
    logo: '/assets/projects/logos/PowerBiLogo.png',
    imgs: ['/assets/projects/etl/PowerBi&ETL Result.png', '/assets/projects/etl/ETL in Pentaho.png'],
    position: { x: 170, y: 328 },
    rotation: -3,
    size: { w: 295, h: 205 },
    githubUrl: 'https://github.com/moha-elh/PowerBi-ETL.git',
    siteUrl: null,
    detail: {
      status: 'private',
      year: '2023',
      description:
        'An end-to-end ETL pipeline built on Pentaho Data Integration, transforming raw operational data related to sales for multiple countries and products into clean datasets that power executive Power BI dashboards.',
      highlights: [
        'Pentaho PDI jobs: extract, transform, load across multiple sources',
        'Star schema data warehouse design',
        'Power BI dashboards: KPIs, sales funnels, trend analysis',
      ],
      tech: ['Pentaho', 'Power BI', 'SQL', 'ETL', 'Data Warehouse'],
    },
  },
  {
    id: 'dirhamy',
    board: false,
    name: 'DIRHAMY',
    tag: 'finance · RAG · groq',
    logo: '/assets/projects/logos/dirhamyLogo.png',
    imgs: [
      '/assets/projects/dirhamy/dirhamy front page.png',
      '/assets/projects/dirhamy/in app.jpeg',
      '/assets/projects/dirhamy/recommendation system goals.jpeg',
    ],
    position: { x: 600, y: 280 },
    rotation: -4,
    size: { w: 295, h: 205 },
    githubUrl: 'https://github.com/MYH-Projet/dirhamy',
    siteUrl: null,
    detail: {
      status: 'live',
      year: '2024',
      description:
        "A finance assistant tailored for Moroccan users. <br> You manually log your spending and income, so you keep full control and privacy. <br> The AI features I built let you ask anything about budgeting, spending, or financial concepts, it retrieves context from a curated knowledge base and answers in plain language. <br> Beyond chat, it also recommends personalized goals to help users actually reach their financial targets.",
      highlights: [
        'Built the RAG pipeline end to end: documents → embeddings → pgvector retrieval → grounded LLM answers',
        'AI goal engine that turns a user\'s finances into personalized, achievable saving targets',
        'Full-stack build: React frontend, Node.js API, PostgreSQL + pgvector, Groq-served LLM',
      ],
      tech: ['React', 'Node.js', 'PostgreSQL', 'PGVector', 'Python', 'Groq', 'RAG'],
    },
  },

  /* ── Work page only (board: false) ── */
  {
    id: 'projexis',
    board: false,
    name: 'PROJEXIS',
    tag: 'node · react · postgres',
    logo: '/assets/projects/logos/ProjexisLogo.png',
    imgs: [], // TODO: add screenshots e.g. ['/assets/projects/projexis-screenshot.png']
    position: { x: 840, y: 30 },
    rotation: 5,
    size: { w: 295, h: 205 },
    githubUrl: 'https://github.com/moha-elh/Projexis',
    siteUrl: null,
    detail: {
      status: 'in-progress',
      year: '2024',
      description:
        'A project management tool built from scratch for Ceres Blockchain Solutions during a summer internship, it includs: task boards, team collaboration, time tracking, and reporting. Full-stack with a clean React UI and a robust Node/Postgres backend.',
      highlights: [
        'REST API powering task boards, time tracking, and reporting',
        'Team workspaces with role-based permissions',
        'React frontend for boards, tracking, and reports',
        'PostgreSQL with Prisma ORM; WebSockets for live updates',
      ],
      tech: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'WebSockets'],
    },
  },
  {
    id: 'vc-worldwide',
    board: false,
    name: 'VC Worldwide',
    tag: 'node · react · global', // TODO: update tag
    logo: '/assets/projects/logos/VCLogo.png',
    imgs: [], // TODO: add screenshots e.g. ['/assets/projects/vc-worldwide-screenshot.png']
    position: { x: 1155, y: 275 },
    rotation: 4,
    size: { w: 295, h: 205 },
    githubUrl: 'https://github.com/moha-elh/vc_worldwide',
    siteUrl: 'https://vc-worldwide.vercel.app/',
    detail: {
      status: 'in-progress', // TODO: 'live' | 'private' | 'in-progress'
      year: '2024',
      description: 'A global VC registry that includes VC from all around the world for startups looking for funding in different stages, built to show people that there is more than just YC.',
      highlights: [
        'Searchable registry of 100+ global VCs, filterable by funding stage',
        'Supabase backend (Postgres + API) feeding a React frontend',
        'Deployed on Vercel',
      ],
      tech: ['Node.js', 'React'], // TODO: full tech stack
    },
  },
  {
    id: 'more',
    name: '+ more',
    tag: 'see /work',
    logo: null,
    imgs: [],
    position: { x: 1020, y: 330 },
    rotation: 4,
    size: { w: 295, h: 205 },
    githubUrl: null,
    siteUrl: null,
    detail: null,
  },
];
