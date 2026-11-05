import { useRef, useState } from 'react';
import { skillCategories } from '../../models/skills';
import IndexCard from '../ui/IndexCard';
import CertModal from '../ui/CertModal';
import { certificates } from '../../models/achievements';
import { useLang } from '../../context/LangContext';
import { useHover } from '../../context/CursorContext';
import styles from './Toolbox.module.css';

export default function Toolbox() {
  const { t } = useLang();
  const hover = useHover();
  const track = useRef(null);
  // a certified skill opens its certificate right here, no page change
  const [cert, setCert] = useState(null);
  const openCert = (id) => setCert(certificates.find((c) => c.id === id) ?? null);
  const [edge, setEdge] = useState({ start: true, end: false });
  const [scrolled, setScrolled] = useState(false); // hides the big nudge after the first slide
  // desktop: 4 cards visible, slide one card at a time
  const go = dir => track.current.scrollBy({ left: dir * (track.current.firstChild.offsetWidth + 20), behavior: 'smooth' });
  const onScroll = e => {
    const el = e.currentTarget;
    if (el.scrollLeft >= 10) setScrolled(true);
    setEdge({ start: el.scrollLeft < 10, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 10 });
  };
  return (
    <section id="toolbox" className={styles.section} aria-label={t('Skills', 'Compétences')}>
      <p className="sec-label">{t('/ section · 03 · toolbox', '/ section · 03 · outils')}</p>
      <h2 className="sec-title">{t('things in my toolbox.', 'ma boîte à outils.')}</h2>
      <div className={styles.rowWrap}>
      <div ref={track} className={styles.grid} onScroll={onScroll}>
        {skillCategories.map((cat, i) => (
          <IndexCard
            onOpenCert={openCert}
            key={cat.id}
            number={i + 1}
            title={t(cat.title)}
            items={cat.items.map(it => ({ ...it, desc: t(it.desc) }))}
            rotation={cat.rotation}
            bg={cat.bg}
            topColor={cat.topColor}
          />
        ))}
      </div>
      {!scrolled && (
        <button className={styles.nudge} onClick={() => go(1)} aria-label={t('Scroll for more skills', 'Défiler pour plus de compétences')} {...hover}>
          {t('scroll for more →', 'défile pour plus →')}
        </button>
      )}
      </div>
      <div className={styles.slider}>
        <button className={styles.arrow} onClick={() => go(-1)} disabled={edge.start} aria-label={t('Previous card', 'Carte précédente')} {...hover}>←</button>
        <button className={styles.arrow} onClick={() => go(1)} disabled={edge.end} aria-label={t('Next card', 'Carte suivante')} {...hover}>→</button>
      </div>
      <CertModal cert={cert} onClose={() => setCert(null)} />
    </section>
  );
}
