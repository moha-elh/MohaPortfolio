import { useRef, useEffect, useCallback, useState } from 'react';
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

export default function DrawPage({ onBack }) {
  const canvasRef = useRef(null);
  const drawing   = useRef(false);
  const lastPos   = useRef(null);
  const [color, setColor] = useState('#1a1a1a');
  const [size,  setSize]  = useState(5);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#fafaf7';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const getPos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  // Use mouse events (not pointer events) so the document-level
  // mousemove that drives the custom cursor keeps firing while drawing.
  const onMouseDown = useCallback((e) => {
    drawing.current = true;
    lastPos.current = getPos(e);
  }, []);

  const onMouseMove = useCallback((e) => {
    if (!drawing.current) return;
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');
    const pos    = getPos(e);
    ctx.beginPath();
    ctx.moveTo(lastPos.current.x, lastPos.current.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.strokeStyle = color;
    ctx.lineWidth   = size;
    ctx.lineCap     = 'round';
    ctx.lineJoin    = 'round';
    ctx.stroke();
    lastPos.current = pos;
  }, [color, size]);

  const stopDraw = useCallback(() => {
    drawing.current = false;
    lastPos.current = null;
  }, []);

  const clear = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');
    ctx.fillStyle = '#fafaf7';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <button className={styles.back} onClick={onBack}>← back</button>

        <div className={styles.tools}>
          {/* Colour palette */}
          <div className={styles.palette}>
            {COLORS.map(c => (
              <button
                key={c}
                className={`${styles.swatch} ${color === c ? styles.swatchActive : ''}`}
                style={{ background: c, outline: c === '#ffffff' ? '1.5px solid #ccc' : undefined }}
                onClick={() => setColor(c)}
                aria-label={`Pick colour ${c}`}
              />
            ))}
          </div>

          {/* Brush sizes */}
          <div className={styles.sizes}>
            {SIZES.map(s => (
              <button
                key={s}
                className={`${styles.sizeBtn} ${size === s ? styles.sizeBtnActive : ''}`}
                onClick={() => setSize(s)}
                aria-label={`Brush size ${s}`}
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

          <button className={styles.clearBtn} onClick={clear}>clear canvas</button>
        </div>

        <span className={styles.topLabel}>draw something. ✦</span>
      </div>

      <canvas
        ref={canvasRef}
        className={styles.canvas}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDraw}
        onMouseLeave={stopDraw}
      />
    </div>
  );
}
