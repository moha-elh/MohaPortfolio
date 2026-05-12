import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label="Hero">
      <p className="mono-cap" style={{ marginBottom: 12 }}>
        · portfolio / 2026 · ENSA Tanger
      </p>
      <div className={styles.name}>Mouhssine</div>
      <div className={`${styles.name} ${styles.nameLine2}`}>
        El Haouary
        <span className={styles.scribble} aria-hidden="true">
          <svg width="240" height="10" viewBox="0 0 240 10">
            <path
              d="M 2 6 Q 60 2 120 5 T 238 4"
              stroke="#c8f24a"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </div>
    </section>
  );
}
