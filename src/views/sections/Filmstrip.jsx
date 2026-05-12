import styles from './Filmstrip.module.css';

const FRAMES = [
  { label: 'workshop · IaC',       date: '04/2025', rot: -2 },
  { label: 'Ceres standup',        date: '07/2025', rot:  1 },
  { label: 'SoliHackathon · 3rd',  date: '03/2025', rot: -1 },
  { label: "IT Day'z keynote",     date: '11/2025', rot:  2 },
  { label: 'CSC welcome day',      date: '10/2024', rot: -2 },
  { label: 'team @ Skillios',      date: '06/2025', rot:  1 },
  { label: 'late-night demo',      date: '02/2026', rot: -1 },
];

/**
 * Auto-scrolling filmstrip marquee.
 * Frames are duplicated so the loop is seamless.
 * Pauses on hover.
 */
export default function Filmstrip() {
  return (
    <div className={styles.filmstrip}>
      <div className={styles.marqueeOuter}>
        <div className={styles.marqueeTrack} aria-label="Photo filmstrip">
          {/* Duplicate frames for seamless infinite loop */}
          {[...FRAMES, ...FRAMES].map((f, i) => (
            <div
              key={i}
              className={styles.frame}
              style={{ transform: `rotate(${f.rot}deg)` }}
              aria-hidden={i >= FRAMES.length}
            >
              <div className={styles.imgBox}>{f.label}</div>
              <div className={styles.meta}>
                <span className={styles.frameLabel}>{f.label}</span>
                <span className={styles.frameDate}>{f.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
