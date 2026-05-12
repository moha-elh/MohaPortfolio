/**
 * Model: contact
 * Personal details and contact link stickers.
 */
export const owner = {
  name:      'Mouhssine El Haouary',
  shortName: 'm. el haouary',
  location:  'Tangier, MA',
  school:    'ENSA Tanger',
  year:      '2026',
  photo:     '/assets/moha_cv.jpg',
  cvPdf:     '/assets/CV%20-%20Mouhssine%20El%20Haouary.pdf',
};

export const contactLinks = [
  {
    id:       'email',
    key:      'email',
    value:    'mouhssineelhaouary@gmail.com',
    href:     'mailto:mouhssineelhaouary@gmail.com',
    bg:       '#c8f24a',
    rotation: -2,
    iconSlug: null,
  },
  {
    id:       'linkedin',
    key:      'linkedin',
    value:    '/melhaouary',
    href:     'https://www.linkedin.com/in/melhaouary/',
    bg:       '#fef4a8',
    rotation: 0,
    iconSlug: 'linkedin',
  },
  {
    id:       'github',
    key:      'github',
    value:    '/moha-elh',
    href:     'https://github.com/moha-elh',
    bg:       '#fef4a8',
    rotation: 2,
    iconSlug: 'github',
  },
  {
    id:       'medium',
    key:      'medium',
    value:    '@mouhssineelhaouary',
    href:     'https://medium.com/@mouhssineelhaouary',
    bg:       '#e8e8e4',
    rotation: -1,
    iconSlug: 'medium',
  },
];
