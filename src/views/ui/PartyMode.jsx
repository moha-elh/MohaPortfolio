import { useEffect, useState } from 'react';
import styles from './PartyMode.module.css';

const COLORS = ['#c8f24a','#ff6b6b','#74b9ff','#a29bfe','#fd79a8','#fef4a8','#1a1a1a','#55efc4'];
const COUNT = 72;

export default function PartyMode({ active, onDone }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (!active) { setParticles([]); return; }

    setParticles(
      Array.from({ length: COUNT }, (_, i) => ({
        id: i,
        color: COLORS[i % COLORS.length],
        left:     Math.random() * 100,
        delay:    Math.random() * 0.5,
        duration: 1.4 + Math.random() * 0.9,
        spin:     (Math.random() > 0.5 ? 1 : -1) * (240 + Math.random() * 480),
        rect:     Math.random() > 0.45,
        size:     6 + Math.random() * 9,
      }))
    );

    const t = setTimeout(() => { setParticles([]); onDone?.(); }, 2800);
    return () => clearTimeout(t);
  }, [active, onDone]);

  if (!particles.length) return null;

  return (
    <div className={styles.overlay} aria-hidden="true">
      {particles.map(p => (
        <div
          key={p.id}
          className={styles.particle}
          style={{
            left:             `${p.left}%`,
            width:            p.rect ? `${p.size * 2.2}px` : `${p.size}px`,
            height:           `${p.size}px`,
            background:       p.color,
            borderRadius:     p.rect ? '2px' : '50%',
            animationDelay:   `${p.delay}s`,
            animationDuration:`${p.duration}s`,
            '--spin':         `${p.spin}deg`,
          }}
        />
      ))}
    </div>
  );
}
