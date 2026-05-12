import { useEffect, useRef } from 'react';

/**
 * Dither — canvas-based ordered-dithering animation.
 *
 * Uses an offscreen canvas drawn at (width/pixelSize × height/pixelSize)
 * and scaled up with imageSmoothingEnabled:false for a crisp pixel-art look.
 * Multiple overlapping wave sources create organic, flowing patterns.
 */

// Bayer 4×4 ordered-dithering matrix (values 0–15)
const BAYER4 = [
  [ 0,  8,  2, 10],
  [12,  4, 14,  6],
  [ 3, 11,  1,  9],
  [15,  7, 13,  5],
];

function hexToRgb(hex) {
  const n = parseInt(hex.replace('#', ''), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function clamp01(v) {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

export default function Dither({
  waveSpeed     = 0.022,
  waveFrequency = 2.8,
  waveAmplitude = 0.52,
  colorNum      = 4,
  pixelSize     = 4,
  colors        = ['#fafaf7', '#1a1a1a', '#c8f24a', '#9a9a9a'],
  style,
  className,
}) {
  const canvasRef = useRef(null);
  const offRef    = useRef(document.createElement('canvas'));

  useEffect(() => {
    const canvas = canvasRef.current;
    const off    = offRef.current;
    if (!canvas) return;

    const ctx    = canvas.getContext('2d');
    const offCtx = off.getContext('2d');
    const palette = colors.slice(0, colorNum).map(hexToRgb);

    let time  = 0;
    let rafId = null;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(1, Math.round(rect.width));
      const h = Math.max(1, Math.round(rect.height));
      canvas.width  = w;
      canvas.height = h;
      off.width     = Math.ceil(w / pixelSize);
      off.height    = Math.ceil(h / pixelSize);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const TWO_PI = Math.PI * 2;

    const animate = () => {
      time += waveSpeed;
      const sw = off.width;
      const sh = off.height;

      const imageData = offCtx.createImageData(sw, sh);
      const data = imageData.data;

      for (let y = 0; y < sh; y++) {
        for (let x = 0; x < sw; x++) {
          const nx = x / sw;
          const ny = y / sh;

          // Three overlapping wave sources for organic movement
          const wave1 =
            Math.sin(nx * waveFrequency * TWO_PI + time) *
            Math.cos(ny * waveFrequency * Math.PI + time * 0.71);

          const wave2 =
            Math.sin((nx + ny) * waveFrequency * 1.6 + time * 0.55) *
            Math.cos((nx - ny) * waveFrequency * 1.2 + time * 0.38);

          const wave3 =
            Math.sin(
              Math.sqrt((nx - 0.5) ** 2 + (ny - 0.5) ** 2) * waveFrequency * 4 -
                time * 1.2
            );

          // Blend all waves with slight falloff toward edges
          const blend = (wave1 * 0.5 + wave2 * 0.35 + wave3 * 0.15) * waveAmplitude + 0.5;
          const raw = clamp01(blend);

          // Apply Bayer ordered dither threshold
          const bx = x % 4;
          const by = y % 4;
          const threshold = (BAYER4[by][bx] + 0.5) / 16;
          const dithered  = raw + (threshold - 0.5) / colorNum;

          const ci = Math.max(0, Math.min(colorNum - 1, Math.floor(dithered * colorNum)));
          const [r, g, b] = palette[ci];

          const idx = (y * sw + x) * 4;
          data[idx]     = r;
          data[idx + 1] = g;
          data[idx + 2] = b;
          data[idx + 3] = 255;
        }
      }

      offCtx.putImageData(imageData, 0, 0);

      // Scale up with no anti-aliasing → crisp pixel art look
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(off, 0, 0, canvas.width, canvas.height);

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [waveSpeed, waveFrequency, waveAmplitude, colorNum, pixelSize, colors.join(',')]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: 'block', width: '100%', height: '100%', ...style }}
      aria-hidden="true"
    />
  );
}
