import { useRef, useEffect, useCallback, useState } from 'react';
import { useCursor } from '../../context/CursorContext';
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
  const { pos } = useCursor();          // lerped cursor position — same as pencil tip
  const canvasRef  = useRef(null);
  const drawing    = useRef(false);
  const lastPos    = useRef(null);
  const [color, setColor] = useState('#1a1a1a');
  const [size,  setSize]  = useState(5);

  // Keep refs so the draw effect always reads the latest values
  const colorRef = useRef(color);
  const sizeRef  = useRef(size);
  useEffect(() => { colorRef.current = color; }, [color]);
  useEffect(() => { sizeRef.current  = size;  }, [size]);

  // Init canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#fafaf7';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  // This runs every rAF frame via CursorContext — if mouse is held, draw to current lerped pos
  useEffect(() => {
    if (!drawing.current || !lastPos.current) return;
    const canvas = canvasRef.current;
    const rect   = canvas.getBoundingClientRect();
    const cur    = { x: pos.x - rect.left, y: pos.y - rect.top };
    const ctx    = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(lastPos.current.x, lastPos.current.y);
    ctx.lineTo(cur.x, cur.y);
    ctx.strokeStyle = colorRef.current;
    ctx.lineWidth   = sizeRef.current;
    ctx.lineCap     = 'round';
    ctx.lineJoin    = 'round';
    ctx.stroke();
    lastPos.current = cur;
  }, [pos]);

  const onMouseDown = useCallback(() => {
    const canvas = canvasRef.current;
    const rect   = canvas.getBoundingClientRect();
    drawing.current = true;
    lastPos.current = { x: pos.x - rect.left, y: pos.y - rect.top };
  }, [pos]);

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
        onMouseUp={stopDraw}
        onMouseLeave={stopDraw}
      />
    </div>
  );
}
