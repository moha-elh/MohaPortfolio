import { useHover } from '../../context/CursorContext';
import styles from './Certificate.module.css';

export default function Certificate({ rank, title, org, sealColor, rot, onClick }) {
  const hover = useHover();

  return (
    <div
      className={styles.cert}
      style={{ '--rot': `${rot}deg`, '--seal': sealColor }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick?.(); }}
      {...hover}
    >
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
