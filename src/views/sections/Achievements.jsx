import { useState } from 'react';
import { certificates } from '../../models/achievements';
import Certificate from '../ui/Certificate';
import CertSkeleton from '../ui/CertSkeleton';
import CertModal from '../ui/CertModal';
import { useLang } from '../../context/LangContext';
import styles from './Achievements.module.css';

export default function Achievements({ onOpenCerts }) {
  const { t } = useLang();
  const [selected, setSelected] = useState(null);
  const visible = certificates.slice(0, 5);

  return (
    <section id="achievements" className={styles.section} aria-label={t('Certificates', 'Certificats')}>
      <p className="sec-label">{t('/ section · 04 · certificates', '/ section · 04 · certificats')}</p>
      <h2 className="sec-title">{t('certificates & wins.', 'certificats & prix.')}</h2>

      <div className={styles.grid}>
        {visible.map((cert) => (
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

        {/* 1 skeleton card — teases more certificates on the full page */}
        <CertSkeleton rot={1.5} onClick={onOpenCerts} />
      </div>

      <CertModal cert={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
