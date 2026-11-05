import { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react';

const CursorCtx = createContext(null);

const hasFinePointer =
  typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;

/**
 * Provides the mouse position and hover state to the whole app.
 *
 * The pencil itself is the native cursor image (globals.css), drawn by the OS
 * with zero lag. Only the "click" label follows the mouse: position lives in a
 * ref and is pushed to subscribers straight from mousemove — no React re-render.
 * Nothing runs on touch-only devices.
 */
export function CursorProvider({ children }) {
  const [visible, setVisible] = useState(false);
  // Count of currently-hovered interactive elements. A counter (not a bool) so
  // overlapping enters/leaves stay balanced and one stuck element can't pin it.
  const [hoverCount, setHoverCount] = useState(0);

  const pos       = useRef({ x: 0, y: 0 });
  const listeners = useRef(new Set());

  useEffect(() => {
    if (!hasFinePointer) return;
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      setVisible(true); // no-op re-render when already visible
      listeners.current.forEach((fn) => fn(pos.current));
    };
    // Leaving the document (window edge, or into an iframe like the CV viewer):
    // hide the label instead of leaving it frozen at the edge.
    const onOut = (e) => { if (!e.relatedTarget) setVisible(false); };

    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseout', onOut);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseout', onOut);
    };
  }, []);

  const subscribe = useCallback((fn) => {
    listeners.current.add(fn);
    fn(pos.current);
    return () => listeners.current.delete(fn);
  }, []);

  const inc = useCallback(() => setHoverCount(c => c + 1), []);
  const dec = useCallback(() => setHoverCount(c => Math.max(0, c - 1)), []);

  return (
    <CursorCtx.Provider value={{ visible, hovered: hoverCount > 0, inc, dec, subscribe }}>
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
