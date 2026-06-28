export const projects = [
  /* ── Left cluster ── */
  {
    id: 'dirhamy',
    name: 'DIRHAMY',
    tag: 'finance · RAG · groq',
    logo: '/assets/projects/logos/dirhamyLogo.png',
    imgs: [], // TODO: add screenshots e.g. ['/assets/projects/dirhamy-screenshot.png']
    position: { x: 0, y: 50 },
    rotation: -4,
    size: { w: 295, h: 205 },
    githubUrl: 'https://github.com/MYH-Projet/dirhamy',
    siteUrl: 'https://dirhamy.com',
    detail: {
      status: 'live',
      year: '2024',
      description:
        "A finance assistant tailored for Moroccan users. Ask it anything about budgeting, spending, or financial concepts — it retrieves context from a curated knowledge base and answers in plain language using Groq's LLM.",
      highlights: [
        'RAG pipeline: documents → embeddings → PGVector retrieval → LLM answer',
        'Groq API for low-latency inference on Llama models',
        'Full-stack: React frontend, Node.js API, PostgreSQL + pgvector',
        'Deployed and live at dirhamy.com',
      ],
      tech: ['React', 'Node.js', 'PostgreSQL', 'PGVector', 'Python', 'Groq', 'RAG'],
    },
  },
  {
    id: 'skillios',
    name: 'SKILLIOS',
    tag: 'vue · team lead · x10',
    logo: '/assets/projects/logos/SkilliosLogo.png',
    imgs: [], // TODO: add screenshots e.g. ['/assets/projects/skillios-screenshot.png']
    position: { x: 320, y: 45 },
    rotation: 3,
    size: { w: 295, h: 205 },
    githubUrl: 'https://github.com/BilalMagg/Softskills-App',
    siteUrl: null,
    detail: {
      status: 'private',
      year: '2024',
      description:
        'A skills management and learning platform built with a team of 10. Led the frontend architecture, sprint planning, and developer coordination from first commit to delivery.',
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
    imgs: ['/assets/projects/PowerBi&ETL Result.png', '/assets/projects/ETL in Pentaho.png'],
    position: { x: 170, y: 328 },
    rotation: -3,
    size: { w: 295, h: 205 },
    githubUrl: 'https://github.com/moha-elh/PowerBi-ETL.git',
    siteUrl: null,
    detail: {
      status: 'private',
      year: '2023',
      description:
        'An end-to-end ETL pipeline built on Pentaho Data Integration, transforming raw operational data into clean datasets that power executive Power BI dashboards.',
      highlights: [
        'Pentaho PDI jobs: extract, transform, load across multiple sources',
        'Star schema data warehouse design',
        'Power BI dashboards: KPIs, sales funnels, trend analysis',
        'Scheduled refresh and error alerting',
      ],
      tech: ['Pentaho', 'Power BI', 'SQL', 'ETL', 'Data Warehouse'],
    },
  },

  /* ── Middle ── */
  {
    id: 'bezel',
    name: 'BEZEL',
    tag: 'TODO: tech stack', // TODO: update tag
    logo: '/assets/projects/logos/BezelLogo.png',
    imgs: [], // TODO: add screenshots e.g. ['/assets/projects/bezel-screenshot.png']
    position: { x: 840, y: 30 },
    rotation: 5,
    size: { w: 295, h: 205 },
    githubUrl: 'https://github.com/moha-elh/Bezel.git',
    siteUrl: 'https://trybezel.xyz/',
    detail: {
      status: 'live',
      year: '2025',
      description: 'TODO: describe Bezel.',
      highlights: ['TODO: key feature or tech decision'],
      tech: [], // TODO: full tech stack
    },
  },

  /* ── Work page only (board: false) ── */
  {
    id: 'bready-on-fire',
    board: false,
    name: 'Bready on Fire',
    tag: 'typescript · web · app', // TODO: update tag
    logo: '/assets/projects/logos/BreadyLogo.png',
    imgs: [], // TODO: add screenshots e.g. ['/assets/projects/bready-on-fire-screenshot.png']
    position: { x: 600, y: 280 },
    rotation: -2,
    size: { w: 295, h: 205 },
    githubUrl: 'https://github.com/moha-elh/Breqd',
    siteUrl: null,
    detail: {
      status: 'in-progress', // TODO: 'live' | 'private' | 'in-progress'
      year: '2024',
      description: 'TODO: one or two sentences about what Bready on Fire is and why it exists.',
      highlights: [
        'TODO: key feature or tech decision',
        'TODO: outcome or result',
      ],
      tech: ['TypeScript'], // TODO: full tech stack
    },
  },
  {
    id: 'propel',
    name: 'Propel',
    tag: 'langchain · gRPC · kafka · c#',
    logo: '/assets/projects/logos/PropelLogo.png',
    imgs: [], // TODO: add screenshots e.g. ['/assets/projects/propel-screenshot.png']
    position: { x: 1155, y: 30 },
    rotation: -2,
    size: { w: 295, h: 205 },
    githubUrl: 'https://github.com/BilalMagg/CV-Generator',
    siteUrl: null,
    detail: {
      status: 'private',
      year: '2024',
      description:
        'A distributed AI recruitment pipeline that ingests CVs, extracts structured candidate profiles using LangChain agents, routes them through Kafka topics, and exposes results via gRPC microservices — with a C# PDF generation layer for producing formatted resume outputs.',
      highlights: [
        'LangChain agents for CV parsing and skill extraction',
        'Kafka for async event-driven routing between services',
        'gRPC for typed, high-performance inter-service communication',
        'ASP.NET microservices + Python AI layer',
        'C# .NET backend for PDF generation and template-based resume formatting',
        'Collaborative team build',
      ],
      tech: ['LangChain', 'Kafka', 'gRPC', 'Python', 'ASP.NET', 'C#', 'Docker'],
    },
  },

  /* ── Right cluster ── */
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
        'A project management tool built from scratch — task boards, team collaboration, time tracking, and reporting. Full-stack with a clean React UI and a robust Node/Postgres backend.',
      highlights: [
        'Kanban boards with drag-and-drop task management',
        'Team workspaces with role-based permissions',
        'Real-time updates via WebSockets',
        'PostgreSQL with Prisma ORM',
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
    siteUrl: null,
    detail: {
      status: 'in-progress', // TODO: 'live' | 'private' | 'in-progress'
      year: '2024',
      description: 'TODO: one or two sentences about what VC Worldwide is and why it exists.',
      highlights: [
        'TODO: key feature or tech decision',
        'TODO: outcome or result',
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
