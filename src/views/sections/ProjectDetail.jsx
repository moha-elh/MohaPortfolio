import { Fragment, useRef, useState } from 'react';
import { useLang } from '../../context/LangContext';
import { useHover } from '../../context/CursorContext';
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
  finished:      { en: 'finished',    fr: 'terminé' },
};

const STATUS_CLASS = {
  live:          styles.live,
  private:       styles.private,
  'in-progress': styles.inProgress,
  finished:      styles.finished,
};

export default function ProjectDetail({ project, onBack }) {
  const { detail } = project;
  const { t } = useLang();
  const hover = useHover();
  const imgs = project.imgs;
  const track = useRef(null);
  const [slide, setSlide] = useState(0);
  const go = (dir) => track.current.scrollBy({ left: dir * track.current.clientWidth, behavior: 'smooth' });

  return (
    <div className={styles.page}>
      {/* ── Top bar ── */}
      <div className={styles.topBar}>
        <button className={styles.back} onClick={onBack} aria-label={t('Back to projects', 'Retour aux projets')} {...hover}>
          {t('← back', '← retour')}
        </button>
        <span className={styles.crumb}>/ {t('work', 'projets')} / {project.id}</span>
      </div>

      {/* ── Header ── */}
      <header className={styles.header}>
        <h1 className={styles.title}>
          {project.name}
          <svg className={styles.scribble} viewBox="0 0 240 10" preserveAspectRatio="none" aria-hidden="true">
            <path d="M 2 6 Q 60 2 120 5 T 238 4" stroke="var(--lime)" strokeWidth="4" fill="none" strokeLinecap="round" />
          </svg>
        </h1>
        {project.blurb && <p className={styles.lede}>{t(project.blurb)}</p>}
      </header>

      <div className={styles.layout}>
        {/* ── Case card (sticky on desktop) ── */}
        <aside className={styles.card}>
          <span className={styles.pin} aria-hidden="true" />
          <dl className={styles.facts}>
            <div className={styles.fact}>
              <dt>{t('status', 'statut')}</dt>
              <dd><span className={`${styles.status} ${STATUS_CLASS[detail.status]}`}>{t(STATUS_LABEL[detail.status])}</span></dd>
            </div>
            <div className={styles.fact}>
              <dt>{t('year', 'année')}</dt>
              <dd>{detail.year}</dd>
            </div>
          </dl>

          <p className={styles.cardLabel}>/ stack</p>
          <ul className={styles.stack}>
            {detail.tech.map(tech => <li key={tech}>{tech}</li>)}
          </ul>

          {project.githubUrl || project.siteUrl ? (
            <div className={styles.ctas}>
              {project.siteUrl && (
                <a href={project.siteUrl} target="_blank" rel="noopener noreferrer" className={styles.cta} {...hover}>
                  {t('visit live site →', 'voir le site →')}
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={`${styles.cta} ${styles.ctaGhost}`} {...hover}>
                  {t('view on github →', 'voir sur github →')}
                </a>
              )}
            </div>
          ) : (
            <p className={styles.locked}>{t('private for now, ask me about it in an interview', 'privé pour l’instant, demande-moi en entretien')}</p>
          )}
        </aside>

        {/* ── Story ── */}
        <main className={styles.main}>
          <figure className={styles.cover}>
            <span className={styles.tape} aria-hidden="true" />
            {imgs.length > 0 ? (
              <>
                <div
                  ref={track}
                  className={styles.track}
                  onScroll={e => setSlide(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}
                >
                  {imgs.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={t(`${project.name} screenshot ${i + 1}`, `capture ${i + 1} de ${project.name}`)}
                      className={styles.coverImg}
                      loading={i ? 'lazy' : undefined}
                    />
                  ))}
                </div>
                {imgs.length > 1 && (
                  <figcaption className={styles.slider}>
                    <button className={styles.arrow} onClick={() => go(-1)} disabled={slide === 0} aria-label={t('Previous screenshot', 'Capture précédente')} {...hover}>←</button>
                    <span className={styles.count}>{slide + 1} / {imgs.length}</span>
                    <button className={styles.arrow} onClick={() => go(1)} disabled={slide === imgs.length - 1} aria-label={t('Next screenshot', 'Capture suivante')} {...hover}>→</button>
                  </figcaption>
                )}
              </>
            ) : (
              <div className={styles.noShot}>
                {project.logo && <img src={project.logo} alt="" className={styles.noShotLogo} />}
                <span>{t('screenshots coming soon', 'captures bientôt')}</span>
              </div>
            )}
          </figure>

          <p className={styles.sectionLabel}>{t('/ the story', '/ l’histoire')}</p>
          <p className={styles.desc}>{withBreaks(t(detail.description))}</p>

          <p className={styles.sectionLabel}>{t('/ what I built', '/ ce que j’ai construit')}</p>
          <ol className={styles.highlights}>
            {t(detail.highlights).map((h, i) => (
              <li key={i} className={styles.highlight}>
                <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                <span>{h}</span>
              </li>
            ))}
          </ol>
        </main>
      </div>
    </div>
  );
}
