/**
 * Model: experience
 * img → label shown in the hover polaroid placeholder.
 *       Swap for an actual image path (e.g. '/assets/csc-workshop.jpg') when ready.
 * accent: true → full lime washi badge, false → 50% opacity lime.
 */
export const experiences = [
  {
    id:     'csc',
    period: '2025 → now',
    title:  'President · CSC Computer Club, ENSAT',
    detail: '80+ members · 20+ workshops · IaC mentorship',
    img:    'CSC workshop · 2025',
    accent: true,
  },
  {
    id:     'ceres',
    period: 'Jul – Sep 2025',
    title:  'Full-Stack Intern · Ceres Blockchain Solutions',
    detail: 'Remote (Belgrade) · Node, React, PostgreSQL · agile',
    img:    'Ceres office · Belgrade',
    accent: false,
  },
  {
    id:     'itdayz',
    period: '2025 → 2026',
    title:  "Advisor · IT Day'z — 11th edition",
    detail: 'Strategic framing for organizing team',
    img:    "IT Day'z keynote · 2025",
    accent: false,
  },
  {
    id:     'ensat',
    period: '2022 → now',
    title:  'Engineering Cycle · ENSA Tanger',
    detail: 'Computer engineering (Génie Informatique), 2nd of 3 years',
    img:    'ENSAT campus · Tangier',
    accent: false,
  },
];
