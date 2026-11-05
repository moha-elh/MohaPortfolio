import { useEffect, useState } from 'react';
import { cvs, cvDomains, DEFAULT_CV } from '../../models/contact';
import { useHover } from '../../context/CursorContext';
import { useLang } from '../../context/LangContext';
import styles from './CvPage.module.css';

export default function CvPage({ onBack }) {
  const hover = useHover();
  const { t } = useLang();
  const [domain, setDomain] = useState(DEFAULT_CV);
  const pdf = t(cvs[domain]);
  // Every CV stays mounted (just hidden), so switching never rebuilds the PDF
  // viewer. The selected one loads first; once it has loaded, the other domains
  // (same language) load in the background so their tabs open without a blank flash.
  const [opened, setOpened] = useState(() => [pdf]);
  const addAll = (list, urls) => [...list, ...urls.filter((u) => !list.includes(u))];
  useEffect(() => {
    setOpened((list) => addAll(list, [pdf]));
  }, [pdf]);
  const preloadRest = () =>
    setOpened((list) => addAll(list, Object.values(cvs).map((c) => t(c))));

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
      {/* ── Top bar: back · identity · domain switch · download ──
          The switch lives in the bar so the viewer gets the full height. */}
      <div className={styles.topBar}>
        <button className={styles.back} onClick={onBack} aria-label={t('Back home', 'Retour à l’accueil')} {...hover}>
          {t('← back', '← retour')}
        </button>
        <span className={styles.identity}>cv · mouhssine el haouary</span>
        <div className={styles.tabs} role="group" aria-label={t('Choose a CV', 'Choisir un CV')}>
          {Object.entries(cvDomains).map(([key, label]) => (
            <button
              key={key}
              className={styles.tab}
              aria-pressed={domain === key}
              onClick={() => setDomain(key)}
              {...hover}
            >
              {t(label)}
            </button>
          ))}
        </div>
        <a href={pdf} download className={styles.download} {...hover}>
          {t('download pdf →', 'télécharger le pdf →')}
        </a>
      </div>

      {/* ── PDF viewer, full-bleed below the bar ── */}
      <div className={styles.viewer}>
        {opened.map((src) => (
          <iframe
            key={src}
            src={`${src}#zoom=100`}
            title={t('CV preview', 'Aperçu du CV')}
            className={`${styles.frame} ${src === pdf ? styles.frameOn : ''}`}
            aria-hidden={src !== pdf}
            tabIndex={src === pdf ? 0 : -1}
            onLoad={src === pdf ? preloadRest : undefined}
          />
        ))}
      </div>
    </div>
  );
}
