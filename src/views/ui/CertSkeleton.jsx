import { useHover } from '../../context/CursorContext';
import { useLang } from '../../context/LangContext';
import styles from './CertSkeleton.module.css';

export default function CertSkeleton({ rot, onClick }) {
  const hover = useHover();
  const { t } = useLang();

  return (
    <div
      className={styles.cert}
      style={{ '--rot': `${rot}deg` }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick?.(); }}
      aria-label={t('View all certificates', 'Voir tous les certificats')}
      {...hover}
    >
      <div className={styles.innerFrame} />
      <div className={styles.content}>
        <div className={styles.bar} style={{ width: '60%', marginBottom: 6 }} />
        <div className={styles.bar} style={{ width: '40%', marginBottom: 14 }} />
        <div className={styles.bar} style={{ width: '80%', marginBottom: 8 }} />
        <div className={styles.bar} style={{ width: '55%' }} />
      </div>
      <div className={styles.cta}>{t('see all →', 'tout voir →')}</div>
      <div className={styles.seal} />
    </div>
  );
}
