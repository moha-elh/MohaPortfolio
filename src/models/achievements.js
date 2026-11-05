/**
 * Model: certificates
 * Each entry becomes a paper cert card with a wax seal.
 * type       → filter group on /certificates; 'course' also gets the gold treatment
 * domain     → key into `domains`; sets the wax seal's label and colour
 * rot        → base rotation in degrees
 * img        → path to certificate image, e.g. '/assets/certificates/solihack.jpg',
 *              or an array of paths to group same-design certificates into one card
 *              (when set, the card shows the real certificate instead of the drawn one)
 * verifyUrl  → optional link to verify the certificate online
 * video      → optional YouTube embed URL, shown in the modal when there's no image
 * rank/title/org may be { en, fr }; read them through useLang().t().
 */
export const domains = {
  ai:        { label: { en: 'AI', fr: 'IA' }, color: '#cde7ff' },
  hackathon: { label: 'hackathon',            color: '#c8f24a' },
  club:      { label: 'club',                 color: '#fce0d4' },
  cloud:     { label: 'cloud',                color: '#fef4a8' },
  mentor:    { label: { en: 'mentor', fr: 'tuteur' }, color: '#d6efe0' },
};

export const certTypes = {
  course:    { en: 'courses',    fr: 'cours' },
  hackathon: { en: 'hackathons', fr: 'hackathons' },
  club:      { en: 'club & events', fr: 'club & événements' },
  mentor:    { en: 'mentoring',  fr: 'tutorat' },
};

export const certificates = [
  {
    id:        'ibm-python',
    type:      'course',
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
    type:      'course',
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
    type:      'hackathon',
    rank:      { en: '3rd place', fr: '3e place' },
    title:     { en: 'IT-WAVE · SoliHackathon & Web Dev competition', fr: 'IT-WAVE · SoliHackathon & compétition Web Dev' },
    org:       'ITWAVE · 2025',
    domain:    'hackathon',
    rot:       -1.5,
    img:       ['/assets/certificates/solihack.jpg', '/assets/certificates/itwave-webdev.jpg'],
    verifyUrl: null,
  },
  {
    id:        'gemma',
    type:      'hackathon',
    rank:      { en: 'Finalist', fr: 'Finaliste' },
    title:     'Google Gemma 3n Impact',
    org:       'Google · 2025',
    domain:    'ai',
    rot:       1,
    img:       null, // TODO: '/assets/certificates/gemma.jpg'
    video:     'https://www.youtube-nocookie.com/embed/f5UEdRCF6f4',
    verifyUrl: null,
  },
  {
    id:        'blue',
    type:      'hackathon',
    rank:      { en: 'Executive committee', fr: 'Comité exécutif' },
    title:     'Code Blue Hackathon',
    org:       'IT Geeks · FST Tanger · 2025',
    domain:    'hackathon',
    rot:       1.5,
    img:       '/assets/certificates/code-blue.jpg',
    verifyUrl: null,
  },
  {
    id:        'ids',
    type:      'hackathon',
    rank:      'Participant',
    title:     'Hackathon Digital Solidaire',
    org:       'IDS Salé · CTPES · 2025',
    domain:    'hackathon',
    rot:       -1,
    img:       '/assets/certificates/ids-hackathon.jpg',
    verifyUrl: null,
  },
  {
    id:        'ensa',
    type:      'mentor',
    rank:      { en: 'Host & tutor', fr: 'Animateur & tuteur' },
    title:     { en: 'IaC & Monitoring workshop · Integration Project 2026', fr: 'Atelier IaC & Monitoring · Projet d’Intégration 2026' },
    org:       'ENSA Tanger · 2026',
    domain:    'mentor',
    rot:       -1.5,
    img:       ['/assets/certificates/ensa-iac-monitoring.jpg', '/assets/certificates/ensa-integration-tutor.jpg'],
    verifyUrl: null,
  },
  {
    id:        'itdayz-11',
    type:      'club',
    rank:      'Advisor',
    title:     'IT Day’z · 11th edition',
    org:       'CSC ENSAT · 2026',
    domain:    'club',
    rot:       1,
    img:       '/assets/certificates/itdayz-11.jpg',
    verifyUrl: null,
  },
  {
    id:        'itdayz-10',
    type:      'club',
    rank:      { en: 'Organizer', fr: 'Organisateur' },
    title:     'IT Day’z · 10th edition',
    org:       'CSC ENSAT · 2025',
    domain:    'club',
    rot:       -1,
    img:       '/assets/certificates/itdayz-10.jpg',
    verifyUrl: null,
  },
  {
    id:        'srwc',
    type:      'club',
    rank:      { en: 'Contributor', fr: 'Contributeur' },
    title:     'Solve Real World Challenges',
    org:       'CSC ENSAT · 2024',
    domain:    'club',
    rot:       1.5,
    img:       '/assets/certificates/csc-srwc.jpg',
    verifyUrl: null,
  },
  {
    id:        '3d-impact',
    type:      'club',
    rank:      { en: 'Organizer', fr: 'Organisateur' },
    title:     '3D Impact · 2nd edition',
    org:       'Enactus ENSA Tanger',
    domain:    'club',
    rot:       -1,
    img:       '/assets/certificates/enactus-3d-impact.jpg',
    verifyUrl: null,
  },
];
