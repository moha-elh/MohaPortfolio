import { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react';

const CursorCtx = createContext(null);

/**
 * Provides cursor position (with lerp lag) and hover state to the whole app.
 * Wrap <App> in this provider so any component can read/set cursor state.
 */
export function CursorProvider({ children }) {
  const [pos,     setPos]     = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  const current = useRef({ x: 0, y: 0 });
  const target  = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
      setVisible(true);
    };
    document.addEventListener('mousemove', onMove, { passive: true });

    let rafId;
    const tick = () => {
      const c = current.current;
      const t = target.current;
      c.x += (t.x - c.x) * 0.14;
      c.y += (t.y - c.y) * 0.14;
      setPos({ x: c.x, y: c.y });
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const onEnter = useCallback(() => setHovered(true),  []);
  const onLeave = useCallback(() => setHovered(false), []);

  return (
    <CursorCtx.Provider value={{ pos, visible, hovered, onEnter, onLeave }}>
      {children}
    </CursorCtx.Provider>
  );
}

export const useCursor = () => useContext(CursorCtx);

/**
 * Convenience: returns onMouseEnter / onMouseLeave handlers that flip
 * the cursor into hover state. Spread onto any interactive element.
 *
 * const hover = useHover();
 * <a {...hover} href="...">
 */
export function useHover() {
  const { onEnter, onLeave } = useCursor();
  return { onMouseEnter: onEnter, onMouseLeave: onLeave };
}
