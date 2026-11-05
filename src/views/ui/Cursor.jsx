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
      {/* "click" label — appears when hovering an interactive element */}
      <span
        className={`${styles.clickLabel} ${hovered ? styles.clickLabelVisible : ''}`}
      >
        {t('click', 'clic')}
      </span>
    </div>
  );
}
