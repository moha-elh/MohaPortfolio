import { useEffect } from 'react';
import { owner } from '../../models/contact';
import { useHover } from '../../context/CursorContext';
import { useLang } from '../../context/LangContext';
import styles from './CvPage.module.css';

export default function CvPage({ onBack }) {
  const hover = useHover();
  const { t } = useLang();
  const pdf = t(owner.cvPdf);

  // Scanned QR lands here with ?dl=1 → fire the download immediately.
  useEffect(() => {
    if (!new URLSearchParams(window.location.search).get('dl')) return;
    const a = document.createElement('a');
    a.href = pdf;
    a.download = '';
    document.body.appendChild(a);
    a.click();
    a.remove();
  }, []);

  return (
    <div className={styles.page}>
      {/* ── Top bar: back · identity · download ── */}
      <div className={styles.topBar}>
        <button className={styles.back} onClick={onBack} aria-label={t('Back home', 'Retour à l’accueil')} {...hover}>
          {t('← back', '← retour')}
        </button>
        <span className={styles.identity}>cv · mouhssine el haouary</span>
        <a href={pdf} download className={styles.download} {...hover}>
          {t('download pdf →', 'télécharger le pdf →')}
        </a>
      </div>

      {/* ── PDF viewer, full-bleed below the bar ── */}
      <iframe
        src={`${pdf}#zoom=100`}
        title={t('CV preview', 'Aperçu du CV')}
        className={styles.viewer}
      />
    </div>
  );
}
