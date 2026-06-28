import { useState } from 'react';
import { certificates } from '../../models/achievements';
import Certificate from '../ui/Certificate';
import CertModal from '../ui/CertModal';
import { useHover } from '../../context/CursorContext';
import styles from './CertificatesPage.module.css';

export default function CertificatesPage({ onBack }) {
  const hover = useHover();
  const [selected, setSelected] = useState(null);

  return (
    <div className={styles.page}>
      {/* ── Top bar ── */}
      <div className={styles.topBar}>
        <button className={styles.back} onClick={onBack} aria-label="Back home" {...hover}>
          ← back
        </button>
        <span className={styles.topLabel}>/ certificates &amp; wins</span>
      </div>

      <div className={styles.inner}>
        <p className={styles.sectionLabel}>/ section · 04 · certificates</p>
        <h1 className={styles.title}>certificates &amp; wins.</h1>

        <div className={styles.grid}>
          {certificates.map((cert) => (
            <Certificate
              key={cert.id}
              rank={cert.rank}
              title={cert.title}
              org={cert.org}
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
