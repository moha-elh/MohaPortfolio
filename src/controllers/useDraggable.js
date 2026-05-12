import { useCallback, useRef, useState } from 'react';

/**
 * Controller: useDraggable
 * Manages position + lifted state for a draggable element.
 *
 * @param {object} initialPos  - { x, y } starting position (px, absolute)
 * @param {number} rotation    - base rotation in degrees (preserved on drop)
 * @param {function} getNextZ  - callback that returns the next z-index value
 *
 * Usage:
 *   const drag = useDraggable({ x: 30, y: 50 }, -4, getNextZ);
 *   <div style={drag.style} {...drag.handlers} />
 */
export function useDraggable(initialPos, rotation, getNextZ, disabled = false) {
  const [pos,    setPos]    = useState(initialPos);
  const [zIndex, setZIndex] = useState(1);
  const [lifted, setLifted] = useState(false);

  const origin = useRef(null);

  const onPointerDown = useCallback((e) => {
    if (disabled) return;
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    origin.current = { sx: e.clientX, sy: e.clientY, sl: pos.x, st: pos.y };
    setZIndex(getNextZ());
    setLifted(true);
  }, [pos, getNextZ, disabled]);

  const onPointerMove = useCallback((e) => {
    if (!origin.current) return;
    const { sx, sy, sl, st } = origin.current;
    setPos({ x: sl + e.clientX - sx, y: st + e.clientY - sy });
  }, []);

  const onPointerUp = useCallback(() => {
    origin.current = null;
    setLifted(false);
  }, []);

  if (disabled) {
    return { pos: initialPos, style: {}, handlers: {}, lifted: false };
  }

  return {
    pos,
    style: {
      position:  'absolute',
      left:      pos.x,
      top:       pos.y,
      zIndex,
      transform: `rotate(${rotation}deg)${lifted ? ' scale(1.04)' : ''}`,
      transition: lifted ? 'box-shadow .2s' : 'box-shadow .2s',
    },
    handlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp,
      onPointerCancel: onPointerUp,
    },
    lifted,
  };
}
