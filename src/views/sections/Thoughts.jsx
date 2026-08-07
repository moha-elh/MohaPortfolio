import styles from './Thoughts.module.css';

// Each entry is a moment: an image + the thought that goes with it.
// Add your photo src when ready: { src: '/assets/your-photo.jpg', ... }
const MOMENTS = [
  {
    src: '/assets/moments/thoughts/rabat-beach.jpg',
    caption: 'rabat, by the sea',
    thought: "the best code I ever wrote was the code I deleted.",
  },
  {
    src: '/assets/moments/thoughts/rabat-morning.jpg',
    caption: 'rabat, morning',
    thought: "shipping something broken is better than shipping nothing. fix it next week.",
  },
  {
    src: '/assets/moments/thoughts/rabat-beach-view.jpg',
    caption: 'the view from here',
    thought: "Tangier is at the edge of the world — perfect place to be when you want to build something new.",
  },
  {
    src: '/assets/moments/thoughts/petite-vallee-dor-night.jpg',
    caption: 'petite vallée d\'or, night',
    thought: "the 47-tab phase is not procrastination. it's research. mostly.",
  },
  {
    src: '/assets/moments/thoughts/plage-des-nations.jpg',
    caption: 'plage des nations',
    thought: "distributed systems taught me that failure is the default state. in code and in life.",
  },
  {
    src: '/assets/moments/thoughts/rabat-morning-2.jpg',
    caption: 'early, rabat',
    thought: "every senior dev I admire has a graveyard of side projects. I'm building mine.",
  },
  {
    src: '/assets/moments/thoughts/portrait.jpg',
    caption: '— me',
    thought: "the demos people remember are the ones the whole team believed in.",
  },
  {
    src: '/assets/moments/thoughts/rabat.jpg',
    caption: 'rabat',
    thought: "step away from the screen and the bug usually solves itself on the walk back.",
  },
  {
    src: '/assets/moments/thoughts/me-in-between.jpg',
    caption: 'somewhere in between',
    thought: "still figuring it out. that's the whole point.",
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
