import { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react';

const CursorCtx = createContext(null);

const hasFinePointer =
  typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;

/**
 * Provides the pencil cursor's position and hover state to the whole app.
 *
 * Position never goes through React state: it lives in a ref and is pushed to
 * subscribers (the pencil element, the draw canvas) once per animation frame.
 * Re-rendering the app 60×/s just to move a cursor is what made pages stutter.
 *
 * The pencil tracks the mouse 1:1; a page can opt into the slow, trailing
 * "drawing" feel with useSmoothCursor() (the draw page does). The rAF loop only
 * runs while the pencil is catching up, and never on touch-only devices.
 */
export function CursorProvider({ children }) {
  const [visible, setVisible] = useState(false);
  // Count of currently-hovered interactive elements. A counter (not a bool) so
  // overlapping enters/leaves stay balanced and one stuck element can't pin it.
  const [hoverCount, setHoverCount] = useState(0);

  const pos       = useRef({ x: 0, y: 0 });   // rendered (possibly lagging) position
  const target    = useRef({ x: 0, y: 0 });   // real mouse position
  const smooth    = useRef(false);
  const listeners = useRef(new Set());
  const rafId     = useRef(0);

  useEffect(() => {
    if (!hasFinePointer) return;

    const emit = () => listeners.current.forEach((fn) => fn(pos.current));

    const tick = () => {
      const p = pos.current;
      const t = target.current;
      const k = smooth.current ? 0.14 : 1; // 0.14 = slow trailing pen
      p.x += (t.x - p.x) * k;
      p.y += (t.y - p.y) * k;
      if (Math.abs(t.x - p.x) < 0.1 && Math.abs(t.y - p.y) < 0.1) { p.x = t.x; p.y = t.y; }
      emit();
      rafId.current = p.x === t.x && p.y === t.y ? 0 : requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
      setVisible(true); // no-op re-render when already visible
      if (!rafId.current) rafId.current = requestAnimationFrame(tick);
    };
    // Leaving the document (window edge, or into an iframe like the CV viewer):
    // hide the pencil instead of leaving it frozen at the edge.
    const onOut = (e) => { if (!e.relatedTarget) setVisible(false); };

    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseout', onOut);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseout', onOut);
      cancelAnimationFrame(rafId.current);
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
    <CursorCtx.Provider value={{ visible, hovered: hoverCount > 0, inc, dec, smooth, subscribe, pos }}>
      {children}
    </CursorCtx.Provider>
  );
}

export const useCursor = () => useContext(CursorCtx);

/** Slow, trailing pencil while the calling component is mounted. */
export function useSmoothCursor() {
  const { smooth } = useCursor();
  useEffect(() => {
    smooth.current = true;
    return () => { smooth.current = false; };
  }, [smooth]);
}

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
