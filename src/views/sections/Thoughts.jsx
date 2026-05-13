import styles from './Thoughts.module.css';

// Each entry is a moment: an image + the thought that goes with it.
// Add your photo src when ready: { src: '/assets/your-photo.jpg', ... }
const MOMENTS = [
  {
    src: null,
    caption: 'tangier, 2024',
    thought: "the best code I ever wrote was the code I deleted.",
  },
  {
    src: null,
    caption: 'building things',
    thought: "shipping something broken is better than shipping nothing. fix it next week.",
  },
  {
    src: null,
    caption: 'the view from here',
    thought: "Tangier is at the edge of the world — perfect place to be when you want to build something new.",
  },
  {
    src: null,
    caption: '01:00 AM, shipping',
    thought: "the 47-tab phase is not procrastination. it's research. mostly.",
  },
  {
    src: null,
    caption: 'somewhere in between',
    thought: "distributed systems taught me that failure is the default state. in code and in life.",
  },
  {
    src: null,
    caption: 'this one matters',
    thought: "every senior dev I admire has a graveyard of side projects. I'm building mine.",
  },
];

export default function Thoughts({ onBack }) {
  return (
    <div className={styles.page}>
      {/* ── Top bar ── */}
      <div className={styles.topBar}>
        <button className={styles.back} onClick={onBack} aria-label="Back to portfolio">
          ← back
        </button>
        <span className={styles.topLabel}>/ easter egg · unlocked ✦</span>
      </div>

      {/* ── Header ── */}
      <div className={styles.header}>
        <p className={styles.sectionLabel}>/ thoughts & moments</p>
        <h1 className={styles.title}>things I think about.</h1>
      </div>

      {/* ── Moments grid ── */}
      <div className={styles.grid}>
        {MOMENTS.map((m, i) => (
          <div key={i} className={styles.moment}>
            {/* Polaroid image */}
            <div className={styles.polaroid}>
              <div className={styles.imgBox}>
                {m.src
                  ? <img src={m.src} alt={m.caption} loading="lazy" className={styles.img} />
                  : null
                }
              </div>
              <p className={styles.caption}>{m.caption}</p>
            </div>
            {/* Thought sticky */}
            <div className={styles.sticky}>
              "{m.thought}"
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
