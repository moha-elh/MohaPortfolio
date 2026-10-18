import { projects } from '../../models/projects';
import { useLang } from '../../context/LangContext';
import styles from './WorkPage.module.css';

const STATUS_CLASS = {
  live:          styles.live,
  private:       styles.private,
  'in-progress': styles.inProgress,
};

const STATUS_LABEL = {
  live:          { en: 'live',        fr: 'en ligne' },
  private:       { en: 'private',     fr: 'privé' },
  'in-progress': { en: 'in progress', fr: 'en cours' },
};

export default function WorkPage({ onBack, onOpen }) {
  const { t } = useLang();
  const displayProjects = projects.filter(p => p.id !== 'more' && p.detail);

  return (
    <div className={styles.page}>
      {/* ── Top bar ── */}
      <div className={styles.topBar}>
        <button className={styles.back} onClick={onBack} aria-label={t('Back to portfolio', 'Retour au portfolio')}>
          {t('← back', '← retour')}
        </button>
        <span className={styles.topLabel}>{t('/ work · all projects', '/ projets · tous les projets')}</span>
      </div>

      <div className={styles.header}>
        <p className={styles.sectionLabel}>{t('/ section · 02 · work', '/ section · 02 · projets')}</p>
        <h1 className={styles.title}>{t('everything I built.', 'tout ce que j’ai construit.')}</h1>
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
            aria-label={t(`Open ${p.name} project`, `Ouvrir le projet ${p.name}`)}
          >
            <div className={styles.cardImg}>
              {p.logo && <img src={p.logo} alt={p.name} loading="lazy" />}
            </div>
            <div className={styles.cardBody}>
              <p className={styles.cardName}>{p.name}</p>
              {p.blurb && <p className={styles.cardBlurb}>{t(p.blurb)}</p>}
              <div className={styles.cardTags}>
                {p.tag.split(' · ').map(tech => <span key={tech} className={styles.cardTag}>{tech}</span>)}
              </div>
              <span className={`${styles.cardStatus} ${STATUS_CLASS[p.detail.status]}`}>
                {t(STATUS_LABEL[p.detail.status])}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
