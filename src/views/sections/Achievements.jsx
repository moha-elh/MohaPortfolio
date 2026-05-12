import { certificates } from '../../models/achievements';
import Certificate from '../ui/Certificate';
import styles from './Achievements.module.css';

/**
 * "Certificates & wins" section — replaces the old Rosettes section.
 * Uses paper cert cards with wax seals in a 3-column grid.
 */
export default function Achievements() {
  return (
    <section id="achievements" className={styles.section} aria-label="Certificates">
      <p className="sec-label">/ section · 04 · certificates</p>
      <h2 className="sec-title">certificates &amp; wins.</h2>
      <div className={styles.grid}>
        {certificates.map((cert) => (
          <Certificate
            key={cert.id}
            rank={cert.rank}
            title={cert.title}
            org={cert.org}
            sealColor={cert.sealColor}
            rot={cert.rot}
          />
        ))}
      </div>
    </section>
  );
}
