import { useHover } from '../../context/CursorContext';
import { useState, useEffect, useRef } from 'react';
import { useLang } from '../../context/LangContext';
import styles from './Footer.module.css';

const SECRET = {
  en: "cs student @ ensa tanger · open to pfa internship · built with react, vite & obsession",
  fr: "étudiant en info @ ensa tanger · ouvert à un stage pfa · fait avec react, vite & obsession",
};

export default function Footer() {
  const hover = useHover();
  const { t } = useLang();
  const secret = t(SECRET);
  const [revealed, setRevealed] = useState(false);
  const [typed,    setTyped]    = useState('');
  const [done,     setDone]     = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    if (!revealed) { setTyped(''); setDone(false); return; }
    let i = 0;
    timer.current = setInterval(() => {
      i++;
      setTyped(secret.slice(0, i));
      if (i >= secret.length) { clearInterval(timer.current); setDone(true); }
    }, 38);
    return () => clearInterval(timer.current);
  }, [revealed, secret]);

  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <span
          className={styles.copy}
          onClick={() => setRevealed(r => !r)}
          role="button"
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && setRevealed(r => !r)}
          aria-label={t('Toggle secret message', 'Afficher le message secret')}
        >
          © Mouhssine El Haouary · 2026 · {t('made in Tangier', 'fait à Tanger')}
        </span>
        {revealed && (
          <span className={styles.secret}>
            {typed}
            {!done && <span className={styles.caret}>|</span>}
          </span>
        )}
      </div>
      <a href="#hero" {...hover} className={styles.top}>{t('↑ back to top', '↑ retour en haut')}</a>
    </footer>
  );
}
