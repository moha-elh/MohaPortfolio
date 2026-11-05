import { useState } from 'react';
import { useHover } from '../../context/CursorContext';
import { useLang } from '../../context/LangContext';
import styles from './TechItem.module.css';

/**
 * Single tech row inside an index card.
 * Shows the simple-icons logo if slug is provided, falls back to a monogram circle.
 * On hover: lime background tint + `desc` fades in from the right.
 * certificate: id of a certificate (achievements.js) → gold row + tag, same gold as
 * the course certificates; the row links to /certificates with that one opened.
 */
export default function TechItem({ name, slug, localImg, desc, certificate, onOpenCert }) {
  const { t } = useLang();
  const hover = useHover();
  const Row = certificate ? 'a' : 'div';
  const link = certificate ? {
    href: `/certificates?cert=${encodeURIComponent(certificate)}`,
    onClick: (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button > 0) return; // new tab: let the link work
      e.preventDefault();
      onOpenCert?.(certificate);
    },
    'aria-label': t(`${name}: see the certificate`, `${name} : voir le certificat`),
    ...hover,
  } : {};
  const [imgFailed, setImgFailed] = useState(false);
  const monogram = name.replace(/[^A-Za-z0-9]/g, '').slice(0, 2).toUpperCase();
  const src = localImg || (slug ? `https://cdn.simpleicons.org/${slug}/1a1a1a` : null);
  const showLogo = src && !imgFailed;

  return (
    <Row className={`${styles.row} ${certificate ? styles.certified : ''}`} title={desc} {...link}>
      <div className={styles.iconWrap}>
        {showLogo ? (
          <img
            src={src}
            alt=""
            loading="lazy"
            width={18}
            height={18}
            className={styles.logo}
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className={styles.monogram}>{monogram}</div>
        )}
      </div>
      <span className={styles.name}>{name}</span>
      {desc && <span className={styles.desc}>— {desc}</span>}
      {certificate && <span className={styles.badge}>{t('certified →', 'certifié →')}</span>}
    </Row>
  );
}
