/**
 * Model: experience
 * img    → handwritten caption shown under the hover polaroid.
 * imgSrc → photo shown in the hover polaroid (from /public/assets/moments).
 * accent: true → full lime washi badge, false → 50% opacity lime.
 * Text fields are { en, fr }; read them through useLang().t().
 */
export const experiences = [
    {
    id:     'fnc',
    period: { en: 'Jul – Aug 2026', fr: 'juil. – août 2026' },
    title:  { en: 'Full-Stack Intern · Focus Next Computing', fr: 'Stagiaire Full-Stack · Focus Next Computing' },
    detail: { en: 'On-Site (Casablanca) · Spring Boot, React, PostgreSQL, FHIR', fr: 'Sur site (Casablanca) · Spring Boot, React, PostgreSQL, FHIR' },
    img:    { en: 'internship days', fr: 'jours de stage' },
    imgSrc: '/assets/moments/exp/ceres-internship.jpg',
    accent: true,
  },
  {
    id:     'csc',
    period: '2025 → 2026',
    title:  { en: 'President · CSC Computer Club, ENSAT', fr: 'Président · Club informatique CSC, ENSAT' },
    detail: { en: '80+ members · 20+ workshops', fr: '80+ membres · 20+ ateliers' },
    img:    { en: 'CSC team', fr: "l'équipe CSC" },
    imgSrc: '/assets/moments/exp/csc-team.jpeg',
    accent: false,
  },
    {
    id:     'ceres',
    period: { en: 'Jul – Sep 2025', fr: 'juil. – sept. 2025' },
    title:  { en: 'Full-Stack Intern · Ceres Blockchain Solutions', fr: 'Stagiaire Full-Stack · Ceres Blockchain Solutions' },
    detail: { en: 'Remote (Serbia) · Node, React, PostgreSQL, Agile', fr: 'À distance (Serbie) · Node, React, PostgreSQL, Agile' },
    img:    { en: 'best mentor', fr: 'le meilleur mentor' },
    imgSrc: '/assets/moments/exp/lazar-mentor.jpg',
    accent: false,
  },
  {
    id:     'itdayz',
    period: '2025 → 2026',
    title:  { en: "Advisor · IT Day'z (11th edition)", fr: "Conseiller · IT Day'z (11e édition)" },
    detail: { en: 'An event that become the reference for all the other clubs', fr: 'Un événement devenu la référence pour tous les autres clubs' },
    img:    { en: "IT Day'z · round table", fr: "IT Day'z · table ronde" },
    imgSrc: '/assets/moments/exp/it-dayz-round-table.jpeg',
    accent: false,
  },
  {
    id:     'ensat',
    period: { en: '2022 → now', fr: "2022 → aujourd'hui" },
    title:  { en: 'Engineering Cycle · ENSA Tanger', fr: "Cycle d'ingénieur · ENSA Tanger" },
    detail: { en: 'Learning CS while figuring things out ( 1year left )', fr: "J'apprends l'informatique en cherchant ma voie (encore 1 an)" },
    img:    { en: 'IAC · formation', fr: 'IAC · formation' },
    imgSrc: '/assets/moments/exp/iac-formation.jpg',
    accent: false,
  },
];
