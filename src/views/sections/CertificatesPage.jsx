import { useState } from 'react';
import { certificates, certTypes } from '../../models/achievements';
import Certificate from '../ui/Certificate';
import CertModal from '../ui/CertModal';
import FilterBar from '../ui/FilterBar';
import { useHover } from '../../context/CursorContext';
import { useLang } from '../../context/LangContext';
import styles from './CertificatesPage.module.css';

export default function CertificatesPage({ onBack }) {
  const hover = useHover();
  const { t } = useLang();
  // /certificates?cert=<id> (e.g. from a certified skill) opens that certificate
  const [selected, setSelected] = useState(() => {
    const id = new URLSearchParams(window.location.search).get('cert');
    return certificates.find((c) => c.id === id) ?? null;
  });
  const close = () => {
    setSelected(null);
    if (window.location.search) history.replaceState(null, '', window.location.pathname);
  };
  const [type, setType] = useState('all');
  const shown = type === 'all' ? certificates : certificates.filter((c) => c.type === type);

  return (
    <div className={styles.page}>
      {/* ── Top bar ── */}
      <div className={styles.topBar}>
        <button className={styles.back} onClick={onBack} aria-label={t('Back home', 'Retour à l’accueil')} {...hover}>
          {t('← back', '← retour')}
        </button>
        <span className={styles.topLabel}>{t('/ certificates & wins', '/ certificats & prix')}</span>
      </div>

      <div className={styles.inner}>
        <p className={styles.sectionLabel}>{t('/ section · 04 · certificates', '/ section · 04 · certificats')}</p>
        <h1 className={styles.title}>{t('certificates & wins.', 'certificats & prix.')}</h1>

        <FilterBar options={certTypes} value={type} onChange={setType} label={t('Filter certificates', 'Filtrer les certificats')} />

        <div className={styles.grid}>
          {shown.map((cert) => (
            <Certificate
              key={cert.id}
              rank={t(cert.rank)}
              title={t(cert.title)}
              org={t(cert.org)}
              img={cert.img}
              domain={cert.domain}
              rot={cert.rot}
            gold={cert.type === 'course'}
              onClick={() => setSelected(cert)}
            />
          ))}
        </div>
      </div>

      <CertModal cert={selected} onClose={close} />
    </div>
  );
}
