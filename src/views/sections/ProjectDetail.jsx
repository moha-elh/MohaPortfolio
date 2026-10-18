import { Fragment } from 'react';
import { useLang } from '../../context/LangContext';
import styles from './ProjectDetail.module.css';

/* Render <br> tags in description text as real line breaks. */
function withBreaks(text) {
  return text.split(/<br\s*\/?>/i).map((part, i, arr) => (
    <Fragment key={i}>
      {part}
      {i < arr.length - 1 && <br />}
    </Fragment>
  ));
}

const STATUS_LABEL = {
  live:          { en: 'live',        fr: 'en ligne' },
  private:       { en: 'private',     fr: 'privé' },
  'in-progress': { en: 'in progress', fr: 'en cours' },
};

const STATUS_CLASS = {
  live:        styles.live,
  private:     styles.private,
  'in-progress': styles.inProgress,
};

export default function ProjectDetail({ project, onBack }) {
  const { detail } = project;
  const { t } = useLang();

  return (
    <div className={styles.page}>
      {/* ── Top bar ── */}
      <div className={styles.topBar}>
        <button className={styles.back} onClick={onBack} aria-label={t('Back to projects', 'Retour aux projets')}>
          {t('← back', '← retour')}
        </button>
        <span className={styles.topLabel}>/ {t('work', 'projets')} · {project.id}</span>
      </div>

      <div className={styles.inner}>
        {/* ── Meta ── */}
        <div className={styles.meta}>
          <span className={`${styles.status} ${STATUS_CLASS[detail.status]}`}>
            {t(STATUS_LABEL[detail.status])}
          </span>
          <span className={styles.year}>{detail.year}</span>
        </div>

        <h1 className={styles.title}>{project.name}</h1>
        <p className={styles.tag}>{project.tag}</p>

        {/* ── Hero preview ── */}
        {project.imgs.length > 0 ? (
          <div className={styles.imgBox}>
            <div className={styles.tape} />
            <img src={project.imgs[0]} alt={`${project.name} screenshot 1`} className={styles.img} />
          </div>
        ) : (
          <div className={styles.imgPlaceholder}>
            <div className={styles.tape} />
          </div>
        )}

        {/* ── Description + secondary preview beside it ── */}
        <div className={styles.descRow}>
          <p className={styles.desc}>{withBreaks(t(detail.description))}</p>
          {project.imgs.length > 1 && (
            <div className={styles.descAside}>
              {project.imgs.slice(1).map((src, i) => (
                <div key={i} className={styles.imgBoxSmall}>
                  <img src={src} alt={`${project.name} screenshot ${i + 2}`} className={styles.imgSmall} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── Highlights ── */}
        <p className={styles.highlightsLabel}>{t('/ what I built', '/ ce que j’ai construit')}</p>
        <ul className={styles.highlights}>
          {t(detail.highlights).map((h, i) => (
            <li key={i} className={styles.highlight}>{h}</li>
          ))}
        </ul>

        {/* ── Tech ── */}
        <p className={styles.techLabel}>/ stack</p>
        <div className={styles.techList}>
          {detail.tech.map(t => (
            <span key={t} className={styles.techTag}>{t}</span>
          ))}
        </div>

        {/* ── CTA ── */}
        {(project.githubUrl || project.siteUrl) ? (
          <div className={styles.ctaRow}>
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.cta}>
                {t('view on github →', 'voir sur github →')}
              </a>
            )}
            {project.siteUrl && (
              <a href={project.siteUrl} target="_blank" rel="noopener noreferrer" className={styles.cta}>
                {t('visit live site →', 'voir le site →')}
              </a>
            )}
          </div>
        ) : (
          <span className={styles.ctaDisabled}>{t('private / not yet public', 'privé / pas encore public')}</span>
        )}
      </div>
    </div>
  );
}
