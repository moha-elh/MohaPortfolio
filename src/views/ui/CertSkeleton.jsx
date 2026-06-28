import { useHover } from '../../context/CursorContext';
import styles from './CertSkeleton.module.css';

export default function CertSkeleton({ rot, onClick }) {
  const hover = useHover();

  return (
    <div
      className={styles.cert}
      style={{ '--rot': `${rot}deg` }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick?.(); }}
      aria-label="View all certificates"
      {...hover}
    >
      <div className={styles.innerFrame} />
      <div className={styles.content}>
        <div className={styles.bar} style={{ width: '60%', marginBottom: 6 }} />
        <div className={styles.bar} style={{ width: '40%', marginBottom: 14 }} />
        <div className={styles.bar} style={{ width: '80%', marginBottom: 8 }} />
        <div className={styles.bar} style={{ width: '55%' }} />
      </div>
      <div className={styles.cta}>see all →</div>
      <div className={styles.seal} />
    </div>
  );
}
