import { useState } from 'react';
import { experiences } from '../../models/experience';
import Filmstrip from './Filmstrip';
import Dither from '../ui/Dither';
import { useLang } from '../../context/LangContext';
import styles from './Experience.module.css';

/**
 * Experience section — two-column layout:
 *   left  → washi-tape timeline rows (hover to reveal polaroid)
 *   right → sticky polaroid preview column
 *             • hovering a row  → shows that row's polaroid
 *             • nothing hovered → Dither animation + hint text
 *
 * Below the grid: drag-scrollable Filmstrip contact sheet.
 */
export default function Experience() {
  const { t } = useLang();
  const [hovered, setHovered] = useState(null);

  return (
    <section id="experience" className={styles.section} aria-label={t('Experience', 'Expérience')}>
      <p className="sec-label">{t('/ section · 05 · experience', '/ section · 05 · expérience')}</p>
      <h2 className="sec-title">{t("where I've been.", 'mon parcours.')}</h2>

      <div className={styles.grid}>
        {/* ── Left: timeline rows ── */}
        <div className={styles.rows}>
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className={styles.row}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className={styles.badge}
                style={{
                  background: exp.accent ? '#c8f24a' : 'rgba(200,242,74,.5)',
                  transform:  `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)`,
                }}
              >
                {t(exp.period)}
              </div>
              <div>
                <p className={styles.title}>{t(exp.title)}</p>
                <p className={styles.detail}>{t(exp.detail)}</p>
              </div>
            </div>
          ))}
          <p className={styles.hint}>{t('↳ hover a row to see the moment', '↳ survole une ligne pour voir le moment')}</p>
        </div>

        {/* ── Right: sticky polaroid preview ── */}
        <div className={styles.preview}>
          {/* Polaroid cards — one per row, only the hovered one is visible */}
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className={styles.polaroidWrap}
              style={{
                transform: `rotate(${i % 2 === 0 ? 3 : -3}deg) translateY(${hovered === i ? 0 : 10}px)`,
                opacity:   hovered === i ? 1 : 0,
                pointerEvents: 'none',
              }}
              aria-hidden={hovered !== i}
            >
              <div className={styles.polaroidInner}>
                <div className={styles.washi} />
                <div className={styles.imgPlaceholder}>
                  <img src={exp.imgSrc} alt={t(exp.title)} loading="lazy" className={styles.img} />
                </div>
                <p className={styles.polaroidCaption}>{t(exp.img)}</p>
              </div>
            </div>
          ))}

          {/* Idle state — Dither animation + hint */}
          <div
            className={styles.idleState}
            style={{ opacity: hovered === null ? 1 : 0, pointerEvents: 'none' }}
            aria-hidden={hovered !== null}
          >
            <Dither
              waveSpeed={0.025}
              waveFrequency={2.5}
              waveAmplitude={0.42}
              colorNum={4}
              pixelSize={4}
              colors={['#fafaf7', '#e8e8e4', '#c8f24a', '#1a1a1a']}
            />
            <p className={styles.idleText}>
              {t('← hover any row', '← survole une ligne')}<br />{t('and a moment will appear here', 'et un moment apparaîtra ici')}
            </p>
          </div>
        </div>
      </div>

      {/* ── Filmstrip contact sheet ── */}
      <div className={styles.filmstripWrap}>
        <div className={styles.filmstripHeader}>
          <p className="sec-label">{t('/ contact sheet · scroll →', '/ planche contact · défile →')}</p>
          <h3 className={styles.filmstripTitle}>{t('a few moments from the way.', 'quelques moments du chemin.')}</h3>
        </div>
        <Filmstrip />
      </div>
    </section>
  );
}
