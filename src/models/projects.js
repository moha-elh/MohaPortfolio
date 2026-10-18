/* blurb, tag ('more' only), detail.description and detail.highlights are { en, fr }; read via useLang().t(). */
export const projects = [
  /* ── Featured board: live / recruiter-friendly first ── */
  {
    id: 'bezel',
    name: 'Bezel',
    tag: 'react · typescript · canvas · vite',
    blurb: { en: 'A LinkedIn profile frame maker that runs in the browser', fr: "Un générateur de cadres de profil LinkedIn qui tourne dans le navigateur" },
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
      description: {
        en: 'A browser-based generator for custom LinkedIn profile frames. <br> Upload a photo, pick a template, tweak the ring and text, and export a ready-to-upload 500×500 PNG, with no login and no server upload. Everything runs client-side.',
        fr: "Un générateur de cadres personnalisés pour photos de profil LinkedIn, directement dans le navigateur. <br> Importez une photo, choisissez un modèle, ajustez l'anneau et le texte, puis exportez un PNG 500×500 prêt à l'emploi, sans compte et sans envoi sur un serveur. Tout tourne côté client.",
      },
      highlights: {
        en: [
          'All image rendering done natively with the Canvas 2D API (custom arc-text and crescent draw services), no canvas libraries',
          '7 ready-made templates plus a fully customizable ring: color, thickness, arc length, and fade',
          'Photo upload with drag-to-reposition crop, live preview, and one-click PNG export',
          'Zustand for state, React Router multi-page site (editor, landing, guide, legal), analytics + speed insights',
        ],
        fr: [
          "Tout le rendu d'image fait nativement avec l'API Canvas 2D (services maison pour le texte en arc et le croissant), sans librairie canvas",
          "7 modèles prêts à l'emploi plus un anneau entièrement personnalisable : couleur, épaisseur, longueur d'arc et fondu",
          "Import de photo avec recadrage par glisser-déposer, aperçu en direct et export PNG en un clic",
          "Zustand pour l'état, site multi-pages avec React Router (éditeur, landing, guide, mentions légales), analytics + speed insights",
        ],
      },
      tech: ['React', 'TypeScript', 'Vite', 'Zustand', 'React Router', 'Canvas 2D API', 'react-colorful', 'Vercel'],
    },
  },
  {
    id: 'bready-on-fire',
    name: 'Bready on Fire',
    tag: 'react · typescript · game · vite',
    blurb: { en: 'A Flappy Bird-style game made with TypeScript', fr: "Un jeu façon Flappy Bird fait en TypeScript" },
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
      description: {
        en: 'A Flappy Bird-style browser game where a piece of bread flaps through gaps between fire pipes. <br> Built for fun as a way to sharpen my React fundamentals. The physics, collision, and game loop are all hand-rolled.',
        fr: "Un jeu navigateur façon Flappy Bird où un morceau de pain bat des ailes entre des tuyaux en feu. <br> Fait pour le plaisir, pour renforcer mes bases en React. La physique, les collisions et la boucle de jeu sont entièrement codées à la main.",
      },
      highlights: {
        en: [
          'Hand-written game loop, gravity/flap physics, and collision detection, no game engine or animation library',
          'Component-driven design: Bread, FirePipe, Background, and a Game container orchestrating state',
          'Viewport-aware rendering (safe-area insets) so it plays cleanly on mobile',
          'React 19 + TypeScript on Vite, styled with Tailwind CSS',
        ],
        fr: [
          "Boucle de jeu, physique gravité/battement et détection de collisions écrites à la main, sans moteur de jeu ni librairie d'animation",
          "Conception par composants : Bread, FirePipe, Background et un conteneur Game qui orchestre l'état",
          "Rendu adapté au viewport (safe-area insets) pour bien jouer sur mobile",
          "React 19 + TypeScript sur Vite, stylé avec Tailwind CSS",
        ],
      },
      tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Vercel'],
    },
  },
  {
    id: 'propel',
    name: 'Propel',
    tag: 'langchain · gRPC · kafka · c#',
    blurb: { en: 'An AI pipeline that applies to jobs with tailored CVs', fr: "Un pipeline IA qui postule aux offres avec des CV sur mesure" },
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
      description: {
        en: 'A distributed AI recruitment pipeline that runs the process end to end, from extracting job postings to applying with personalized CVs and emails, built on a microservice architecture with a .NET backend and Python AI agents.',
        fr: "Un pipeline de recrutement IA distribué qui gère tout le processus, de l'extraction des offres d'emploi jusqu'à la candidature avec CV et emails personnalisés, construit sur une architecture microservices avec un backend .NET et des agents IA en Python.",
      },
      highlights: {
        en: [
          'LangChain agents for CV parsing and skill extraction',
          'Kafka for async event-driven routing between services',
          'gRPC for typed, high-performance inter-service communication',
          'ASP.NET microservices orchestrating a Python AI layer',
          'C# .NET backend for PDF generation and template-based resume formatting',
        ],
        fr: [
          "Agents LangChain pour l'analyse de CV et l'extraction de compétences",
          "Kafka pour le routage asynchrone et événementiel entre services",
          "gRPC pour une communication inter-services typée et performante",
          "Microservices ASP.NET qui orchestrent une couche IA en Python",
          "Backend C# .NET pour la génération de PDF et la mise en forme des CV à partir de modèles",
        ],
      },
      tech: ['LangChain', 'Kafka', 'gRPC', 'Python', 'ASP.NET', 'C#', 'Docker'],
    },
  },
  {
    id: 'skillios',
    name: 'SKILLIOS',
    tag: 'vue · team lead · x10',
    blurb: { en: 'A 360° skills evaluation platform for students', fr: "Une plateforme d'évaluation des compétences à 360° pour étudiants" },
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
      description: {
        en: 'A skills management and learning platform built around 360° evaluation from your colleagues, professors, and mentors. <br> We were a team of 10, and I led the 5-person frontend team across architecture, sprint planning, and developer coordination from first commit to delivery.',
        fr: "Une plateforme de gestion des compétences et d'apprentissage construite autour de l'évaluation à 360° par vos camarades, professeurs et mentors. <br> Nous étions une équipe de 10, et j'ai dirigé l'équipe frontend de 5 personnes : architecture, planification des sprints et coordination des développeurs, du premier commit à la livraison.",
      },
      highlights: {
        en: [
          'Team lead on a 10-person engineering team',
          'Vue.js SPA with modular component architecture',
          'Agile sprints: planning, review, retrospectives',
          'REST API integration, role-based access control',
        ],
        fr: [
          "Team lead dans une équipe d'ingénierie de 10 personnes",
          "SPA Vue.js avec une architecture de composants modulaire",
          "Sprints Agile : planification, revue, rétrospectives",
          "Intégration d'API REST, contrôle d'accès basé sur les rôles",
        ],
      },
      tech: ['Vue.js', 'Node.js', 'PostgreSQL', 'REST API', 'Figma'],
    },
  },
  {
    id: 'bi-pipeline',
    name: 'BI Pipeline',
    tag: 'pentaho · powerBI · ETL',
    blurb: { en: 'An ETL pipeline feeding Power BI sales dashboards', fr: "Un pipeline ETL qui alimente des dashboards de ventes Power BI" },
    logo: '/assets/projects/logos/PowerBiLogo.png',
    imgs: ['/assets/projects/etl/PowerBi&ETL Result.png', '/assets/projects/etl/ETL in Pentaho.png'],
    position: { x: 167.6, y: 371 },
    rotation: -3,
    size: { w: 295, h: 205 },
    githubUrl: 'https://github.com/moha-elh/PowerBi-ETL.git',
    siteUrl: null,
    detail: {
      status: 'private',
      year: '2023',
      description: {
        en: 'An end-to-end ETL pipeline built on Pentaho Data Integration, transforming raw operational data related to sales for multiple countries and products into clean datasets that power executive Power BI dashboards.',
        fr: "Un pipeline ETL de bout en bout construit sur Pentaho Data Integration, qui transforme des données brutes de ventes sur plusieurs pays et produits en jeux de données propres alimentant des dashboards Power BI pour la direction.",
      },
      highlights: {
        en: [
          'Pentaho PDI jobs: extract, transform, load across multiple sources',
          'Star schema data warehouse design',
          'Power BI dashboards: KPIs, sales funnels, trend analysis',
        ],
        fr: [
          "Jobs Pentaho PDI : extraction, transformation et chargement depuis plusieurs sources",
          "Conception d'un data warehouse en schéma en étoile",
          "Dashboards Power BI : KPI, tunnels de vente, analyse des tendances",
        ],
      },
      tech: ['Pentaho', 'Power BI', 'SQL', 'ETL', 'Data Warehouse'],
    },
  },
  {
    id: 'dirhamy',
    board: false,
    name: 'DIRHAMY',
    tag: 'finance · RAG · groq',
    blurb: { en: 'An AI finance assistant for Moroccan users', fr: "Un assistant financier IA pour les utilisateurs marocains" },
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
      description: {
        en: "A finance assistant tailored for Moroccan users. <br> You manually log your spending and income, so you keep full control and privacy. <br> The AI features I built let you ask anything about budgeting, spending, or financial concepts, it retrieves context from a curated knowledge base and answers in plain language. <br> Beyond chat, it also recommends personalized goals to help users actually reach their financial targets.",
        fr: "Un assistant financier pensé pour les utilisateurs marocains. <br> Vous saisissez vous-même vos dépenses et revenus, pour garder le contrôle total et la confidentialité. <br> Les fonctionnalités IA que j'ai construites permettent de poser n'importe quelle question sur le budget, les dépenses ou les notions financières : il récupère le contexte depuis une base de connaissances choisie et répond en langage simple. <br> Au-delà du chat, il recommande aussi des objectifs personnalisés pour aider les utilisateurs à vraiment atteindre leurs cibles financières.",
      },
      highlights: {
        en: [
          'Built the RAG pipeline end to end: documents → embeddings → pgvector retrieval → grounded LLM answers',
          'AI goal engine that turns a user\'s finances into personalized, achievable saving targets',
          'Full-stack build: React frontend, Node.js API, PostgreSQL + pgvector, Groq-served LLM',
        ],
        fr: [
          "Pipeline RAG construit de bout en bout : documents → embeddings → recherche pgvector → réponses LLM sourcées",
          "Moteur d'objectifs IA qui transforme les finances d'un utilisateur en objectifs d'épargne personnalisés et atteignables",
          "Build full-stack : frontend React, API Node.js, PostgreSQL + pgvector, LLM servi par Groq",
        ],
      },
      tech: ['React', 'Node.js', 'PostgreSQL', 'PGVector', 'Python', 'Groq', 'RAG'],
    },
  },

  /* ── Work page only (board: false) ── */
  {
    id: 'projexis',
    board: false,
    name: 'PROJEXIS',
    tag: 'node · react · postgres',
    blurb: { en: 'A project management tool built during an internship', fr: "Un outil de gestion de projet construit pendant un stage" },
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
      description: {
        en: 'A project management tool built from scratch for Ceres Blockchain Solutions during a summer internship, it includs: task boards, team collaboration, time tracking, and reporting. Full-stack with a clean React UI and a robust Node/Postgres backend.',
        fr: "Un outil de gestion de projet construit de zéro pour Ceres Blockchain Solutions pendant un stage d'été. Il comprend : tableaux de tâches, collaboration d'équipe, suivi du temps et reporting. Full-stack, avec une UI React propre et un backend Node/Postgres solide.",
      },
      highlights: {
        en: [
          'REST API powering task boards, time tracking, and reporting',
          'Team workspaces with role-based permissions',
          'React frontend for boards, tracking, and reports',
          'PostgreSQL with Prisma ORM; WebSockets for live updates',
        ],
        fr: [
          "API REST pour les tableaux de tâches, le suivi du temps et le reporting",
          "Espaces d'équipe avec permissions par rôle",
          "Frontend React pour les tableaux, le suivi et les rapports",
          "PostgreSQL avec l'ORM Prisma ; WebSockets pour les mises à jour en direct",
        ],
      },
      tech: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'WebSockets'],
    },
  },
  {
    id: 'vc-worldwide',
    board: false,
    name: 'VC Worldwide',
    tag: 'node · react · global', // TODO: update tag
    blurb: { en: 'A global directory of VCs, filtered by funding stage', fr: "Un annuaire mondial de VC, filtrable par stade de financement" },
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
      description: {
        en: 'A global VC registry that includes VC from all around the world for startups looking for funding in different stages, built to show people that there is more than just YC.',
        fr: "Un registre mondial de VC du monde entier pour les startups qui cherchent des financements à différents stades, créé pour montrer qu'il n'y a pas que YC.",
      },
      highlights: {
        en: [
          'Searchable registry of 100+ global VCs, filterable by funding stage',
          'Supabase backend (Postgres + API) feeding a React frontend',
          'Deployed on Vercel',
        ],
        fr: [
          "Registre de 100+ VC dans le monde, filtrable par stade de financement",
          "Backend Supabase (Postgres + API) qui alimente un frontend React",
          "Déployé sur Vercel",
        ],
      },
      tech: ['Node.js', 'React'], // TODO: full tech stack
    },
  },
  {
    id: 'more',
    name: '+ more',
    tag: { en: 'see /work', fr: 'voir /work' },
    blurb: { en: "Everything else I've built", fr: "Tout le reste de ce que j'ai construit" },
    logo: null,
    imgs: [],
    position: { x: 1020, y: 355 },
    rotation: 4,
    size: { w: 295, h: 205 },
    githubUrl: null,
    siteUrl: null,
    detail: null,
  },
];
