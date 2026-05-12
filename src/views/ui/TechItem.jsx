import { useState } from 'react';
import styles from './TechItem.module.css';

/**
 * Single tech row inside an index card.
 * Shows the simple-icons logo if slug is provided, falls back to a monogram circle.
 * On hover: lime background tint + `desc` fades in from the right.
 */
export default function TechItem({ name, slug, desc }) {
  const [imgFailed, setImgFailed] = useState(false);
  const monogram = name.replace(/[^A-Za-z0-9]/g, '').slice(0, 2).toUpperCase();
  const showLogo  = slug && !imgFailed;

  return (
    <div className={styles.row} title={desc}>
      <div className={styles.iconWrap}>
        {showLogo ? (
          <img
            src={`https://cdn.simpleicons.org/${slug}/1a1a1a`}
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
    </div>
  );
}
