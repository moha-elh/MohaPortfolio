import { useState } from 'react';
import { contactLinks, owner } from '../../models/contact';
import { useHover } from '../../context/CursorContext';
import styles from './Contact.module.css';

function ServiceIcon({ slug }) {
  const [failed, setFailed] = useState(false);
  if (!slug || failed) return null;
  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/1a1a1a`}
      alt=""
      width={16}
      height={16}
      className={styles.stickerIcon}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default function Contact() {
  const hover = useHover();

  return (
    <section id="contact" className={styles.section} aria-label="Contact">
      <p className="mono-cap">/ section · 06 · say hi</p>
      <div className={styles.grid}>
        {/* Left — CTA + sticker links */}
        <div>
          <p className={styles.cta}>
            let's build<br />
            <span className="hl">something good.</span>
          </p>
          <div className={styles.stickers}>
            {contactLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={styles.sticker}
                style={{ background: link.bg, transform: `rotate(${link.rotation}deg)` }}
                target={link.id !== 'email' ? '_blank' : undefined}
                rel={link.id !== 'email' ? 'noopener' : undefined}
                {...hover}
              >
                <span className={styles.stickerTop}>
                  <ServiceIcon slug={link.iconSlug} />
                  <span className={styles.stickerKey}>{link.key}</span>
                </span>
                <span className={styles.stickerVal}>{link.value}</span>
              </a>
            ))}
          </div>

          {/* CV download button — shown on mobile instead of phone mock */}
          {owner.cvPdf && (
            <a
              href={owner.cvPdf}
              className={styles.cvBtn}
              download
              {...hover}
            >
              Download CV →
            </a>
          )}
        </div>

        {/* Right — phone mock with QR (desktop only) */}
        <div className={styles.phoneWrap}>
          <div className={styles.phone} aria-label="Scan to download CV">
            <div className={styles.screen}>
              <span className="mono-cap">scan / download</span>
              <div className={styles.qr} />
              <a
                href={owner.cvPdf}
                className={styles.phoneLabel}
                download
                {...hover}
              >
                CV.pdf →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
