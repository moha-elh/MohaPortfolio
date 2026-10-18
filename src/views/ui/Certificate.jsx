import { useHover } from '../../context/CursorContext';
import { useLang } from '../../context/LangContext';
import styles from './Certificate.module.css';

export default function Certificate({ rank, title, org, img, sealColor, rot, onClick }) {
  const hover = useHover();
  const { t } = useLang();

  return (
    <div
      className={`${styles.cert} ${img ? styles.hasImg : ''}`}
      style={{ '--rot': `${rot}deg`, '--seal': sealColor }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick?.(); }}
      aria-label={img ? title : undefined}
      {...hover}
    >
      {img ? (
        <img src={img} alt={title} loading="lazy" className={styles.photo} />
      ) : (
        <>
        <div className={styles.innerFrame} />

        <div className={styles.content}>
          <p className={styles.eyebrow}>{t('· certificate ·', '· certificat ·')}</p>
          <p className={styles.awarded}>{t('awarded to', 'décerné à')}</p>
          <p className={styles.name}>Mouhssine El Haouary</p>

          <div className={styles.body}>
            <p className={styles.rank}>{rank}</p>
            <p className={styles.title}>{title}</p>
          </div>

          <p className={styles.org}>{org}</p>
        </div>
        </>
      )}

      <div className={styles.seal}>m.<br />2026</div>
    </div>
  );
}
