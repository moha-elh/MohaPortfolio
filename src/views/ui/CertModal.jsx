import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useHover } from '../../context/CursorContext';
import styles from './CertModal.module.css';

export default function CertModal({ cert, onClose }) {
  const hover = useHover();

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!cert) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true" aria-label={cert.title}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.header}>
          <div>
            <p className={styles.headerOrg}>{cert.org}</p>
            <h2 className={styles.headerTitle}>{cert.title}</h2>
          </div>
          <button className={styles.close} onClick={onClose} aria-label="Close" {...hover}>
            ×
          </button>
        </div>

        {/* Certificate image */}
        <div className={styles.imgWrap}>
          {cert.img ? (
            <img src={cert.img} alt={cert.title} className={styles.img} />
          ) : (
            <p className={styles.noImg}>no image added yet</p>
          )}
        </div>

        {/* Verify link */}
        {cert.verifyUrl && (
          <p className={styles.verify}>
            <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" {...hover}>
              verify certificate →
            </a>
          </p>
        )}
      </div>
    </div>,
    document.body
  );
}
