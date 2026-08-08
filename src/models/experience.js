/**
 * Model: experience
 * img    → handwritten caption shown under the hover polaroid.
 * imgSrc → photo shown in the hover polaroid (from /public/assets/moments).
 * accent: true → full lime washi badge, false → 50% opacity lime.
 */
export const experiences = [
    {
    id:     'fnc',
    period: 'Jul – Aug 2026',
    title:  'Full-Stack Intern · Focus Next Computing',
    detail: 'On-Site (Casablanca) · Spring Boot, React, PostgreSQL · FHIR',
    img:    'internship days',
    imgSrc: '/assets/moments/exp/ceres-internship.jpg',
    accent: true,
  },
  {
    id:     'csc',
    period: '2025 → 2026',
    title:  'President · CSC Computer Club, ENSAT',
    detail: '80+ members · 20+ workshops · IaC mentorship',
    img:    'CSC team',
    imgSrc: '/assets/moments/exp/csc-team.jpeg',
    accent: false,
  },
    {
    id:     'ceres',
    period: 'Jul – Sep 2025',
    title:  'Full-Stack Intern · Ceres Blockchain Solutions',
    detail: 'On-Site (Casablanca) · Node, React, PostgreSQL · Agile',
    img:    'best mentor',
    imgSrc: '/assets/moments/exp/lazar-mentor.jpg',
    accent: false,
  },
  {
    id:     'itdayz',
    period: '2025 → 2026',
    title:  "Advisor · IT Day'z — 11th edition",
    detail: 'Strategic framing for organizing team',
    img:    "IT Day'z · round table",
    imgSrc: '/assets/moments/exp/it-dayz-round-table.jpeg',
    accent: false,
  },
  {
    id:     'ensat',
    period: '2022 → now',
    title:  'Engineering Cycle · ENSA Tanger',
    detail: 'Computer engineering (Génie Informatique), 2nd of 3 years',
    img:    'IAC · formation',
    imgSrc: '/assets/moments/exp/iac-formation.jpg',
    accent: false,
  },
];
