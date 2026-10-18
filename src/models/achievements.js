/**
 * Model: certificates
 * Each entry becomes a paper cert card with a wax seal.
 * domain     → key into `domains`; sets the wax seal's label and colour
 * rot        → base rotation in degrees
 * img        → path to certificate image, e.g. '/assets/certificates/solihack.jpg'
 *              (when set, the card shows the real certificate instead of the drawn one)
 * verifyUrl  → optional link to verify the certificate online
 * rank/title/org may be { en, fr }; read them through useLang().t().
 */
export const domains = {
  ai:        { label: { en: 'AI', fr: 'IA' }, color: '#cde7ff' },
  hackathon: { label: 'hackathon',            color: '#c8f24a' },
  club:      { label: 'club',                 color: '#fce0d4' },
  cloud:     { label: 'cloud',                color: '#fef4a8' },
};

export const certificates = [
  {
    id:        'ibm-python',
    rank:      { en: 'Completed', fr: 'Validé' },
    title:     'Python for Data Science, AI & Development',
    org:       'IBM · Coursera · 2026',
    domain:    'ai',
    rot:       -1,
    img:       '/assets/certificates/ibm-python.jpg',
    verifyUrl: 'https://coursera.org/verify/AUQJUXZOK8DH',
  },
  {
    id:        'aws-cloud-practitioner',
    rank:      { en: 'Completed', fr: 'Validé' },
    title:     'AWS Cloud Practitioner Essentials',
    org:       'AWS Training & Certification · 2026',
    domain:    'cloud',
    rot:       1.5,
    img:       '/assets/certificates/aws-cloud-practitioner.jpg',
    verifyUrl: null,
  },
  {
    id:        'solihack',
    rank:      { en: '3rd place', fr: '3e place' },
    title:     'SoliHackathon ITWAVE',
    org:       'ITWAVE · 2025',
    domain:    'hackathon',
    rot:       -1.5,
    img:       null, // TODO: '/assets/certificates/solihack.jpg'
    verifyUrl: null,
  },
  {
    id:        'gemma',
    rank:      { en: 'Finalist', fr: 'Finaliste' },
    title:     'Google Gemma 3n Impact',
    org:       'Google · 2025',
    domain:    'ai',
    rot:       1,
    img:       null, // TODO: '/assets/certificates/gemma.jpg'
    verifyUrl: null,
  },
  {
    id:        'blue',
    rank:      'Participant',
    title:     'Blue Hackathon',
    org:       '2025',
    domain:    'hackathon',
    rot:       1.5,
    img:       null, // TODO: '/assets/certificates/blue.jpg'
    verifyUrl: null,
  },
  {
    id:        'ids',
    rank:      'Participant',
    title:     'IDS Hackathon',
    org:       '2025',
    domain:    'hackathon',
    rot:       -1,
    img:       null, // TODO: '/assets/certificates/ids.jpg'
    verifyUrl: null,
  },
  {
    id:        'csc',
    rank:      { en: 'President', fr: 'Président' },
    title:     { en: 'CSC ENSAT Computer Club', fr: 'Club informatique CSC ENSAT' },
    org:       { en: '80+ members · 2025', fr: '80+ membres · 2025' },
    domain:    'club',
    rot:       1,
    img:       null, // TODO: '/assets/certificates/csc.jpg'
    verifyUrl: null,
  },
];
