import styles from './ProjectDetail.module.css';

const STATUS_LABEL = {
  live:        'live',
  private:     'private',
  'in-progress': 'in progress',
};

const STATUS_CLASS = {
  live:        styles.live,
  private:     styles.private,
  'in-progress': styles.inProgress,
};

export default function ProjectDetail({ project, onBack }) {
  const { detail } = project;

  return (
    <div className={styles.page}>
      {/* ── Top bar ── */}
      <div className={styles.topBar}>
        <button className={styles.back} onClick={onBack} aria-label="Back to projects">
          ← back
        </button>
        <span className={styles.topLabel}>/ work · {project.id}</span>
      </div>

      <div className={styles.inner}>
        {/* ── Meta ── */}
        <div className={styles.meta}>
          <span className={`${styles.status} ${STATUS_CLASS[detail.status]}`}>
            {STATUS_LABEL[detail.status]}
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
          <p className={styles.desc}>{detail.description}</p>
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
        <p className={styles.highlightsLabel}>/ what I built</p>
        <ul className={styles.highlights}>
          {detail.highlights.map((h, i) => (
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
                view on github →
              </a>
            )}
            {project.siteUrl && (
              <a href={project.siteUrl} target="_blank" rel="noopener noreferrer" className={styles.cta}>
                visit live site →
              </a>
            )}
          </div>
        ) : (
          <span className={styles.ctaDisabled}>private / not yet public</span>
        )}
      </div>
    </div>
  );
}
