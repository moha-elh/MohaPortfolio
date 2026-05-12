import styles from './Certificate.module.css';

/**
 * Paper certificate card with double-rule border + wax seal.
 * rot and sealColor are per-instance, applied via inline styles.
 */
export default function Certificate({ rank, title, org, sealColor, rot }) {
  return (
    <div className={styles.cert} style={{ '--rot': `${rot}deg`, '--seal': sealColor }}>
      <div className={styles.innerFrame} />

      <div className={styles.content}>
        <p className={styles.eyebrow}>· certificate ·</p>
        <p className={styles.awarded}>awarded to</p>
        <p className={styles.name}>Mouhssine El Haouary</p>

        <div className={styles.body}>
          <p className={styles.rank}>{rank}</p>
          <p className={styles.title}>{title}</p>
        </div>

        <p className={styles.org}>{org}</p>
      </div>

      <div className={styles.seal}>m.<br />2026</div>
    </div>
  );
}
