import { useHover } from '../../context/CursorContext';
import styles from './Footer.module.css';

export default function Footer() {
  const hover = useHover();
  return (
    <footer className={styles.footer}>
      <span>© Mouhssine El Haouary · 2026 · made in Tangier</span>
      <a href="#hero" {...hover} className={styles.top}>↑ back to top</a>
    </footer>
  );
}
