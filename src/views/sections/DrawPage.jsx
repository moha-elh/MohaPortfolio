import { useRef, useEffect, useCallback, useState } from 'react';
import { useCursor, useSmoothCursor } from '../../context/CursorContext';
import { useLang } from '../../context/LangContext';
import styles from './DrawPage.module.css';

const COLORS = [
  '#1a1a1a',
  '#c8f24a',
  '#fef4a8',
  '#ffffff',
  '#ff6b6b',
  '#74b9ff',
  '#a29bfe',
  '#fd79a8',
];

const SIZES = [2, 5, 10, 20];
const PAPER = '#fafaf7';

export default function DrawPage({ onBack }) {
  const { pos, subscribe } = useCursor(); // lerped cursor position — same as pencil tip
  useSmoothCursor();                    // the draw page keeps the slow pen
  const canvasRef  = useRef(null);
  const { t } = useLang();
  const drawing    = useRef(false);
  const lastPos    = useRef(null);
  const [color, setColor] = useState('#1a1a1a');
  const [size,  setSize]  = useState(5);

  // Keep refs so the draw effect always reads the latest values
  const colorRef = useRef(color);
  const sizeRef  = useRef(size);
  useEffect(() => { colorRef.current = color; }, [color]);
  useEffect(() => { sizeRef.current  = size;  }, [size]);

  // Canvas bitmap follows its on-screen size × devicePixelRatio (sharp on phones),
  // and re-fits whenever the layout changes (toolbar wrapping, phone address bar,
  // rotation) — keeping what was drawn instead of stretching it under the finger.
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const fit = () => {
      const dpr  = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(1, Math.round(rect.width * dpr));
      const h = Math.max(1, Math.round(rect.height * dpr));
      if (canvas.width === w && canvas.height === h) return;
      const old = canvas.width > 1 ? canvas.cloneNode() : null;
      if (old) old.getContext('2d').drawImage(canvas, 0, 0);
      canvas.width = w;
      canvas.height = h;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.fillStyle = PAPER;
      ctx.fillRect(0, 0, w, h);
      if (old) ctx.drawImage(old, 0, 0); // same device pixels → strokes stay put
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // draw in CSS pixels from here on
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(canvas);
    return () => ro.disconnect();
  }, []);

  // canvas-relative CSS pixels
  const toCanvas = (x, y) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return { x: x - rect.left, y: y - rect.top };
  };

  const segment = (from, to) => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.strokeStyle = colorRef.current;
    ctx.lineWidth   = sizeRef.current;
    ctx.lineCap     = 'round';
    ctx.lineJoin    = 'round';
    ctx.stroke();
  };

  // stroke() drops zero-length lines, so a tap is drawn as a filled circle
  const dot = (p) => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
    ctx.arc(p.x, p.y, sizeRef.current / 2, 0, Math.PI * 2);
    ctx.fillStyle = colorRef.current;
    ctx.fill();
  };

  // Mouse: draw to the lerped (slow) pencil position every frame, as before.
  const mode = useRef(null); // 'mouse' | 'direct' (touch / stylus) while drawing
  useEffect(() => subscribe((p) => {
    if (mode.current !== 'mouse' || !lastPos.current) return;
    const cur = toCanvas(p.x, p.y);
    segment(lastPos.current, cur);
    lastPos.current = cur;
  }), [subscribe]);

  // One input path for mouse, touch and stylus (Pointer Events). Pointer capture
  // keeps the stroke alive when the finger slides off the canvas edge.
  const onPointerDown = useCallback((e) => {
    if (!e.isPrimary || e.button > 0) return; // ignore 2nd fingers and right-clicks
    e.currentTarget.setPointerCapture(e.pointerId);
    drawing.current = true;
    mode.current = e.pointerType === 'mouse' ? 'mouse' : 'direct';
    const start = mode.current === 'mouse' ? toCanvas(pos.current.x, pos.current.y) : toCanvas(e.clientX, e.clientY);
    dot(start); // a tap leaves a dot
    lastPos.current = start;
  }, [pos]);

  const onPointerMove = useCallback((e) => {
    if (mode.current !== 'direct' || !e.isPrimary || !lastPos.current) return;
    // coalesced events = every point the finger passed since the last frame → smooth lines
    const points = e.nativeEvent.getCoalescedEvents?.() ?? [];
    for (const ev of points.length ? points : [e]) {
      const cur = toCanvas(ev.clientX, ev.clientY);
      segment(lastPos.current, cur);
      lastPos.current = cur;
    }
  }, []);

  const stopDraw = useCallback(() => {
    drawing.current = false;
    mode.current = null;
    lastPos.current = null;
  }, []);

  const clear = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = PAPER;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <button className={styles.back} onClick={onBack}>{t('← back', '← retour')}</button>

        <div className={styles.tools}>
          <div className={styles.palette}>
            {COLORS.map(c => (
              <button
                key={c}
                className={`${styles.swatch} ${color === c ? styles.swatchActive : ''}`}
                style={{ background: c, outline: c === '#ffffff' ? '1.5px solid #ccc' : undefined }}
                onClick={() => setColor(c)}
                aria-label={t(`Pick colour ${c}`, `Choisir la couleur ${c}`)}
              />
            ))}
          </div>

          <div className={styles.sizes}>
            {SIZES.map(s => (
              <button
                key={s}
                className={`${styles.sizeBtn} ${size === s ? styles.sizeBtnActive : ''}`}
                onClick={() => setSize(s)}
                aria-label={t(`Brush size ${s}`, `Taille du pinceau ${s}`)}
              >
                <div style={{
                  width:        Math.min(s * 1.8, 20),
                  height:       Math.min(s * 1.8, 20),
                  borderRadius: '50%',
                  background:   'currentColor',
                }} />
              </button>
            ))}
          </div>

          <button className={styles.clearBtn} onClick={clear}>{t('clear canvas', 'effacer')}</button>
        </div>

        <span className={styles.topLabel}>{t('draw something.', 'dessine quelque chose.')}</span>
      </div>

      <canvas
        ref={canvasRef}
        className={styles.canvas}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stopDraw}
        onPointerCancel={stopDraw}
      />
    </div>
  );
}
