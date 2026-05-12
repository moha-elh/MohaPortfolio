import styles from './Rosette.module.css';

/**
 * Award rosette with two ribbon tails.
 * rotation and fill are per-instance, passed as inline styles.
 */
export default function Rosette({ rank, label, fill, rotation }) {
  return (
    <div className={styles.rosette} style={{ transform: `rotate(${rotation}deg)` }}>
      <div className={`${styles.ribbon} ${styles.ribbonL}`} style={{ background: fill }} />
      <div className={`${styles.ribbon} ${styles.ribbonR}`} style={{ background: fill }} />
      <div className={styles.medal} style={{ background: fill }}>
        <span className={styles.rank}>{rank}</span>
        <span className={styles.label}>{label}</span>
      </div>
    </div>
  );
}
