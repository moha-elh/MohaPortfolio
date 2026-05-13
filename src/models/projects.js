export const projects = [
  /* ── Left cluster ── */
  {
    id: 'dirhamy',
    name: 'DIRHAMY',
    tag: 'finance · RAG · groq',
    img: '/assets/project-preview.png',
    position: { x: 0, y: 50 },
    rotation: -4,
    size: { w: 295, h: 205 },
    url: 'https://github.com/MYH-Projet/dirhamy',
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
    img: '/assets/project-preview.png',
    position: { x: 320, y: 45 },
    rotation: 3,
    size: { w: 295, h: 205 },
    url: 'https://github.com/BilalMagg/Softskills-App',
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
    img: '/assets/project-preview.png',
    position: { x: 170, y: 328 },
    rotation: -3,
    size: { w: 295, h: 205 },
    url: null,
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

  /* ── Work page only (board: false) ── */
  {
    id: 'breqd',
    board: false,
    name: 'BREQD',
    tag: 'typescript · web · app',
    img: '/assets/project-preview.png',
    position: { x: 600, y: 30 },
    rotation: -2,
    size: { w: 295, h: 205 },
    url: 'https://github.com/moha-elh/Breqd',
    detail: {
      status: 'in-progress',
      year: '2024',
      description:
        'A TypeScript web application. Details to be added.',
      highlights: [
        'Built with TypeScript',
        'Modern web stack',
      ],
      tech: ['TypeScript'],
    },
  },
  {
    id: 'cv-generator',
    board: false,
    name: 'CV Generator',
    tag: 'c# · asp.net · pdf',
    img: '/assets/project-preview.png',
    position: { x: 610, y: 290 },
    rotation: 3,
    size: { w: 295, h: 205 },
    url: 'https://github.com/BilalMagg/CV-Generator',
    detail: {
      status: 'private',
      year: '2024',
      description:
        'A CV/resume generator built in C# that lets users input their details and export a formatted PDF document. Built as a team project.',
      highlights: [
        'C# .NET backend for PDF generation',
        'Template-based resume formatting',
        'Collaborative team build',
      ],
      tech: ['C#', 'ASP.NET', 'PDF generation'],
    },
  },

  /* ── Right cluster ── */
  {
    id: 'projexis',
    name: 'PROJEXIS',
    tag: 'node · react · postgres',
    img: '/assets/project-preview.png',
    position: { x: 840, y: 10 },
    rotation: 5,
    size: { w: 295, h: 205 },
    url: 'https://github.com/moha-elh/Projexis',
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
    id: 'vimo',
    board: false,
    name: 'VIMO',
    tag: 'javascript · web · app',
    img: '/assets/project-preview.png',
    position: { x: 870, y: 275 },
    rotation: -3,
    size: { w: 295, h: 205 },
    url: 'https://github.com/said101112/VIMO',
    detail: {
      status: 'private',
      year: '2024',
      description:
        'A JavaScript web application. Details to be added.',
      highlights: [
        'Built with JavaScript',
      ],
      tech: ['JavaScript'],
    },
  },
  {
    id: 'cv-agents',
    name: 'CV Agents',
    tag: 'langchain · gRPC · kafka',
    img: '/assets/project-preview.png',
    position: { x: 1155, y: 10 },
    rotation: -2,
    size: { w: 295, h: 205 },
    url: null,
    detail: {
      status: 'private',
      year: '2024',
      description:
        'A distributed AI recruitment pipeline that ingests CVs, extracts structured candidate profiles using LangChain agents, routes them through Kafka topics, and exposes results via gRPC microservices.',
      highlights: [
        'LangChain agents for CV parsing and skill extraction',
        'Kafka for async event-driven routing between services',
        'gRPC for typed, high-performance inter-service communication',
        'ASP.NET microservices + Python AI layer',
      ],
      tech: ['LangChain', 'Kafka', 'gRPC', 'Python', 'ASP.NET', 'Docker'],
    },
  },
  {
    id: 'vc-worldwide',
    board: false,
    name: 'VC Worldwide',
    tag: 'node · react · global',
    img: '/assets/project-preview.png',
    position: { x: 1155, y: 275 },
    rotation: 4,
    size: { w: 295, h: 205 },
    url: 'https://github.com/moha-elh/vc_worldwide',
    detail: {
      status: 'in-progress',
      year: '2024',
      description:
        'A global-scale web application. Details to be added.',
      highlights: [
        'Full-stack web application',
      ],
      tech: ['Node.js', 'React'],
    },
  },
  {
    id: 'more',
    name: '+ more',
    tag: 'see /work',
    img: null,
    position: { x: 1000, y: 304 },
    rotation: 4,
    size: { w: 295, h: 205 },
    url: null,
    detail: null,
  },
];
