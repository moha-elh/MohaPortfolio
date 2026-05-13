/**
 * Model: projects
 * Left cluster: DIRHAMY (behind/lower), SKILLIOS (top), BI Pipeline (bottom)
 * Right cluster: PROJEXIS + CV Agents (top), +more (mid)
 * Sticky note: dead center via CSS (left:50% top:50% translate -50%)
 */
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
  },
];
