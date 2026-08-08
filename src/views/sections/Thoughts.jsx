import styles from './Thoughts.module.css';

// Each entry is a moment: an image + the thought that goes with it.
// Add your photo src when ready: { src: '/assets/your-photo.jpg', ... }
const MOMENTS = [
  {
    src: '/assets/moments/thoughts/portrait.jpg',
    caption: 'Me',
    thought: "Am I destined for something big, or am I just a stupid person with a big ego?",
  },
  {
    src: '/assets/moments/thoughts/tangier.jpg',
    caption: 'tangier',
    thought: "the city where I felt alone even when surrounded by people",
  },
  {
    src: '/assets/moments/thoughts/me-1.jpg',
    caption: 'me, again',
    thought: "Nothing complicated, just thinking about how wonderful I am",
  },
  {
    src: '/assets/moments/thoughts/plage-des-nations.jpg',
    caption: 'plage des nations',
    thought: "why do we want and envision a life, yet make no effort toward achieving it?",
  },
  {
    src: '/assets/moments/thoughts/with-dad.jpg',
    caption: 'me & dad',
    thought: "My family was and still is my biggest support, but their overconfidence is killing me",
  },
  {
    src: '/assets/moments/thoughts/rabat-beach-view.jpg',
    caption: 'the view from here',
    thought: "I love nature, but I hate being surrounded by people",
  },
  {
    src: '/assets/moments/thoughts/with-a-cow.jpg',
    caption: 'me & a cow',
    thought: "Moooooooooooooo",
  },
  {
    src: '/assets/moments/thoughts/petite-vallee-dor-night.jpg',
    caption: 'petite vallée d\'or, night',
    thought: "Can someone enjoy something that was a source of fear for him?",
  },
  {
    src: '/assets/moments/thoughts/me-in-between.jpg',
    caption: 'somewhere in between',
    thought: "still figuring it out, that's the whole point, I guess",
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
        <span className={styles.topLabel}>/ easter egg · unlocked</span>
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
