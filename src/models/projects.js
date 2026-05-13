export const projects = [
  /* ── Left cluster ── */
  {
    id: 'dirhamy',
    name: 'DIRHAMY',
    tag: 'finance · RAG · groq',
    img: '/assets/project-preview.png',
    position: { x: 0,   y: 155 },
    rotation: -4,
    size: { w: 295, h: 205 },
    url: 'https://dirhamy.com',
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
    position: { x: 310, y: 10  },
    rotation: 3,
    size: { w: 295, h: 205 },
    url: null,
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
    position: { x: 70,  y: 362 },
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

  /* ── Right cluster ── */
  {
    id: 'projexis',
    name: 'PROJEXIS',
    tag: 'node · react · postgres',
    img: '/assets/project-preview.png',
    position: { x: 840, y: 10  },
    rotation: 5,
    size: { w: 295, h: 205 },
    url: null,
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
    id: 'cv-agents',
    name: 'CV Agents',
    tag: 'langchain · gRPC · kafka',
    img: '/assets/project-preview.png',
    position: { x: 1140, y: 10  },
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
    id: 'more',
    name: '+ more',
    tag: 'see /work',
    img: null,
    position: { x: 1060, y: 305 },
    rotation: 4,
    size: { w: 295, h: 205 },
    url: null,
    detail: null,
  },
];
