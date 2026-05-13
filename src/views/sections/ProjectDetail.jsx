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

        {/* ── Preview ── */}
        <div className={styles.imgBox}>
          <div className={styles.tape} />
          {project.img ? (
            <img src={project.img} alt={project.name} className={styles.img} />
          ) : null}
        </div>

        {/* ── Description ── */}
        <p className={styles.desc}>{detail.description}</p>

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
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            visit live site →
          </a>
        ) : (
          <span className={styles.ctaDisabled}>private / not yet public</span>
        )}
      </div>
    </div>
  );
}
