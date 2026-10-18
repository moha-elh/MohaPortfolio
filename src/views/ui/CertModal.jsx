import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useHover } from '../../context/CursorContext';
import { useLang } from '../../context/LangContext';
import styles from './CertModal.module.css';

export default function CertModal({ cert, onClose }) {
  const hover = useHover();
  const { t } = useLang();

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!cert) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true" aria-label={t(cert.title)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.header}>
          <div>
            <p className={styles.headerOrg}>{t(cert.org)}</p>
            <h2 className={styles.headerTitle}>{t(cert.title)}</h2>
          </div>
          <button className={styles.close} onClick={onClose} aria-label={t('Close', 'Fermer')} {...hover}>
            ×
          </button>
        </div>

        {/* Certificate image */}
        <div className={styles.imgWrap}>
          {cert.img ? (
            <img src={cert.img} alt={t(cert.title)} className={styles.img} />
          ) : (
            <p className={styles.noImg}>{t('no image added yet', 'pas encore d’image')}</p>
          )}
        </div>

        {/* Verify link */}
        {cert.verifyUrl && (
          <p className={styles.verify}>
            <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" {...hover}>
              {t('verify certificate →', 'vérifier le certificat →')}
            </a>
          </p>
        )}
      </div>
    </div>,
    document.body
  );
}
