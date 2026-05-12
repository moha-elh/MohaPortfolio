/**
 * Model: projects
 * Each entry describes one project polaroid card on the scattered board.
 * position / rotation / size control the initial layout — all draggable at runtime.
 */
export const projects = [
  {
    id: 'dirhamy',
    name: 'DIRHAMY',
    tag: 'finance · RAG · groq',
    img: '/assets/project-preview.png',
    position: { x: 30,  y: 50  },
    rotation: -4,
    size: { w: 230, h: 150 },
    url: 'https://dirhamy.com',
  },
  {
    id: 'skillios',
    name: 'SKILLIOS',
    tag: 'vue · team lead · x10',
    img: '/assets/project-preview.png',
    position: { x: 290, y: 30  },
    rotation: 3,
    size: { w: 240, h: 160 },
    url: null,
  },
  {
    id: 'cv-agents',
    name: 'CV Agents',
    tag: 'langchain · gRPC · kafka',
    img: '/assets/project-preview.png',
    position: { x: 560, y: 70  },
    rotation: -2,
    size: { w: 230, h: 150 },
    url: null,
  },
  {
    id: 'projexis',
    name: 'PROJEXIS',
    tag: 'node · react · postgres',
    img: '/assets/project-preview.png',
    position: { x: 820, y: 40  },
    rotation: 5,
    size: { w: 235, h: 155 },
    url: null,
  },
  {
    id: 'bi-pipeline',
    name: 'BI Pipeline',
    tag: 'pentaho · powerBI · ETL',
    img: '/assets/project-preview.png',
    position: { x: 170, y: 270 },
    rotation: 6,
    size: { w: 220, h: 145 },
    url: null,
  },
  {
    id: 'more',
    name: '+ more',
    tag: 'see /work',
    img: null,
    position: { x: 690, y: 280 },
    rotation: -5,
    size: { w: 230, h: 150 },
    url: null,
  },
];
