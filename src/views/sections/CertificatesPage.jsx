import { useState } from 'react';
import { certificates } from '../../models/achievements';
import Certificate from '../ui/Certificate';
import CertModal from '../ui/CertModal';
import { useHover } from '../../context/CursorContext';
import { useLang } from '../../context/LangContext';
import styles from './CertificatesPage.module.css';

export default function CertificatesPage({ onBack }) {
  const hover = useHover();
  const { t } = useLang();
  const [selected, setSelected] = useState(null);

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

        <div className={styles.grid}>
          {certificates.map((cert) => (
            <Certificate
              key={cert.id}
              rank={t(cert.rank)}
              title={t(cert.title)}
              org={t(cert.org)}
              sealColor={cert.sealColor}
              rot={cert.rot}
              onClick={() => setSelected(cert)}
            />
          ))}
        </div>
      </div>

      <CertModal cert={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
