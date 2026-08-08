import { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react';

const CursorCtx = createContext(null);

/**
 * Provides cursor position (with lerp lag) and hover state to the whole app.
 * Wrap <App> in this provider so any component can read/set cursor state.
 */
export function CursorProvider({ children }) {
  const [pos,     setPos]     = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  // Count of currently-hovered interactive elements. A counter (not a bool) so
  // overlapping enters/leaves stay balanced and one stuck element can't pin it.
  const [hoverCount, setHoverCount] = useState(0);

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

  const inc = useCallback(() => setHoverCount(c => c + 1), []);
  const dec = useCallback(() => setHoverCount(c => Math.max(0, c - 1)), []);

  return (
    <CursorCtx.Provider value={{ pos, visible, hovered: hoverCount > 0, inc, dec }}>
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
 *
 * Tracks its own enter/leave with a ref so an unmount mid-hover (navigation,
 * modal close, list re-render) still releases the count — otherwise the "click"
 * label stays pinned forever.
 */
export function useHover() {
  const { inc, dec } = useCursor();
  const active = useRef(false);

  const onMouseEnter = useCallback(() => {
    if (!active.current) { active.current = true; inc(); }
  }, [inc]);
  const onMouseLeave = useCallback(() => {
    if (active.current) { active.current = false; dec(); }
  }, [dec]);

  useEffect(() => () => { if (active.current) dec(); }, [dec]);

  return { onMouseEnter, onMouseLeave };
}
