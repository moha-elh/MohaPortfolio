import { useState } from 'react';
import { certificates } from '../../models/achievements';
import Certificate from '../ui/Certificate';
import CertSkeleton from '../ui/CertSkeleton';
import CertModal from '../ui/CertModal';
import styles from './Achievements.module.css';

export default function Achievements({ onOpenCerts }) {
  const [selected, setSelected] = useState(null);
  const visible = certificates.slice(0, 5);

  return (
    <section id="achievements" className={styles.section} aria-label="Certificates">
      <p className="sec-label">/ section · 04 · certificates</p>
      <h2 className="sec-title">certificates &amp; wins.</h2>

      <div className={styles.grid}>
        {visible.map((cert) => (
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

        {/* 1 skeleton card — teases more certificates on the full page */}
        <CertSkeleton rot={1.5} onClick={onOpenCerts} />
      </div>

      <CertModal cert={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
