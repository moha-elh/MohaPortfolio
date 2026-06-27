import { owner } from '../../models/contact';
import { useHover } from '../../context/CursorContext';
import styles from './CvPage.module.css';

export default function CvPage({ onBack }) {
  const hover = useHover();

  return (
    <div className={styles.page}>
      {/* ── Top bar: back · identity · download ── */}
      <div className={styles.topBar}>
        <button className={styles.back} onClick={onBack} aria-label="Back home" {...hover}>
          ← back
        </button>
        <span className={styles.identity}>cv · mouhssine el haouary</span>
        <a href={owner.cvPdf} download className={styles.download} {...hover}>
          download pdf →
        </a>
      </div>

      {/* ── PDF viewer, full-bleed below the bar ── */}
      <iframe
        src={`${owner.cvPdf}#zoom=100`}
        title="CV preview"
        className={styles.viewer}
      />
    </div>
  );
}
