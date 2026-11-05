import { useEffect, useRef } from 'react';
import { useCursor } from '../../context/CursorContext';
import { useLang } from '../../context/LangContext';
import styles from './Cursor.module.css';

const hasFinePointer =
  typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;

export default function Cursor() {
  const { visible, hovered, subscribe } = useCursor();
  const { t } = useLang();
  const el = useRef(null);

  // Position is written straight to the DOM each frame — no React re-render.
  useEffect(() => {
    if (!hasFinePointer) return;
    return subscribe(({ x, y }) => {
      if (el.current) el.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
  }, [subscribe]);

  if (!hasFinePointer) return null;

  return (
    <div
      ref={el}
      className={styles.cursor}
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    >
      {/* Pencil SVG — offset so the writing tip aligns with the cursor hotspot */}
      <div className={styles.pencilWrap}>
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Pencil body */}
          <path
            d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"
            fill="#1a1a1a"
          />
          {/* Eraser cap — lime accent */}
          <path
            d="M20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
            fill="#c8f24a"
          />
        </svg>
      </div>

      {/* "click" label — appears when hovering an interactive element */}
      <span
        className={`${styles.clickLabel} ${hovered ? styles.clickLabelVisible : ''}`}
      >
        {t('click', 'clic')}
      </span>
    </div>
  );
}
