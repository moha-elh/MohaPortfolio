import styles from './Filmstrip.module.css';

const FRAMES = [
  { src: '/assets/moments/scroll/it-dayz-team-day-one.jpeg',        label: "IT Day'z · day one",  rot: -2 },
  { src: '/assets/moments/scroll/it-dayz-winning-team.jpeg',        label: 'winning team ✦',      rot:  1 },
  { src: '/assets/moments/scroll/it-dayz-squad.jpg',                label: 'the squad',           rot: -1 },
  { src: '/assets/moments/scroll/it-dayz-media.jpg',                label: 'on media',            rot:  2 },
  { src: '/assets/moments/scroll/it-dayz-team.jpeg',                label: "IT Day'z team",       rot: -2 },
  { src: '/assets/moments/scroll/it-dayz-fun.jpeg',                 label: 'good company',        rot:  1 },
  { src: '/assets/moments/scroll/ids-event.jpg',                    label: 'IDS event',           rot: -1 },
  { src: '/assets/moments/scroll/with-supervisor.jpg',              label: 'with my supervisor',  rot:  2 },
  { src: '/assets/moments/scroll/project-team-mentor.jpg',          label: 'team + mentor',       rot: -2 },
  { src: '/assets/moments/scroll/csc-committee.jpg',                label: 'the committee',       rot:  1 },
  { src: '/assets/moments/scroll/csc-formation.jpg',                label: 'CSC formation',       rot: -1 },
  { src: '/assets/moments/scroll/suited-up.jpg',                    label: 'suited up',           rot:  2 },
  { src: '/assets/moments/scroll/after-the-presentation.jpg',       label: 'after *that* presentation 😅', rot: -2 },
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
              <div className={styles.imgBox}>
                <img src={f.src} alt={f.label} loading="lazy" className={styles.img} />
              </div>
              <div className={styles.meta}>
                <span className={styles.frameLabel}>{f.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
