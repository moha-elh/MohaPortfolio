import { projects } from '../../models/projects';
import styles from './WorkPage.module.css';

const STATUS_CLASS = {
  live:          styles.live,
  private:       styles.private,
  'in-progress': styles.inProgress,
};

const STATUS_LABEL = {
  live:          'live',
  private:       'private',
  'in-progress': 'in progress',
};

export default function WorkPage({ onBack, onOpen }) {
  const displayProjects = projects.filter(p => p.id !== 'more' && p.detail);

  return (
    <div className={styles.page}>
      {/* ── Top bar ── */}
      <div className={styles.topBar}>
        <button className={styles.back} onClick={onBack} aria-label="Back to portfolio">
          ← back
        </button>
        <span className={styles.topLabel}>/ work · all projects</span>
      </div>

      <div className={styles.header}>
        <p className={styles.sectionLabel}>/ section · 02 · work</p>
        <h1 className={styles.title}>everything I built.</h1>
      </div>

      <div className={styles.grid}>
        {displayProjects.map(p => (
          <div
            key={p.id}
            className={styles.card}
            onClick={() => onOpen(p.id)}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && onOpen(p.id)}
            aria-label={`Open ${p.name} project`}
          >
            <div className={styles.cardImg}>
              {p.img && <img src={p.img} alt={p.name} loading="lazy" />}
            </div>
            <div className={styles.cardBody}>
              <p className={styles.cardName}>{p.name}</p>
              <p className={styles.cardTag}>{p.tag}</p>
              <span className={`${styles.cardStatus} ${STATUS_CLASS[p.detail.status]}`}>
                {STATUS_LABEL[p.detail.status]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
