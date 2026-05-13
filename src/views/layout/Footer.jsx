import { useHover } from '../../context/CursorContext';
import { useState, useEffect, useRef } from 'react';
import styles from './Footer.module.css';

const SECRET = "cs student @ ensa tanger · open to pfa internship · built with react, vite & obsession ✦";

export default function Footer() {
  const hover = useHover();
  const [revealed, setRevealed] = useState(false);
  const [typed,    setTyped]    = useState('');
  const [done,     setDone]     = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    if (!revealed) { setTyped(''); setDone(false); return; }
    let i = 0;
    timer.current = setInterval(() => {
      i++;
      setTyped(SECRET.slice(0, i));
      if (i >= SECRET.length) { clearInterval(timer.current); setDone(true); }
    }, 38);
    return () => clearInterval(timer.current);
  }, [revealed]);

  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <span
          className={styles.copy}
          onClick={() => setRevealed(r => !r)}
          role="button"
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && setRevealed(r => !r)}
          aria-label="Toggle secret message"
        >
          © Mouhssine El Haouary · 2026 · made in Tangier
        </span>
        {revealed && (
          <span className={styles.secret}>
            {typed}
            {!done && <span className={styles.caret}>|</span>}
          </span>
        )}
      </div>
      <a href="#hero" {...hover} className={styles.top}>↑ back to top</a>
    </footer>
  );
}
