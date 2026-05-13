import { useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Hero.module.css';

export default function Hero() {
  const [hint, setHint] = useState(false);
  const close = () => setHint(false);

  return (
    <section id="hero" className={styles.hero} aria-label="Hero">
      <p className="mono-cap" style={{ marginBottom: 12 }}>
        · portfolio / 2026 · ENSA Tanger
      </p>
      <div className={styles.nameWrap}>
        <div className={styles.name} onClick={() => setHint(true)}>Mouhssine</div>
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
      </div>

      {hint && createPortal(
        <div className={styles.backdrop} onClick={close}>
          <div
            className={styles.hint}
            onClick={e => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Easter egg hint"
          >
            <button className={styles.closeBtn} onClick={close} aria-label="Close">×</button>
            psst — this site is full of easter eggs.<br />find them all ✦
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
