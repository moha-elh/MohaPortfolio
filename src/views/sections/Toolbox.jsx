import { skillCategories } from '../../models/skills';
import IndexCard from '../ui/IndexCard';
import styles from './Toolbox.module.css';

export default function Toolbox() {
  return (
    <section id="toolbox" className={styles.section} aria-label="Skills">
      <p className="sec-label">/ section · 03 · toolbox</p>
      <h2 className="sec-title">things in my toolbox.</h2>
      <div className={styles.grid}>
        {skillCategories.map((cat, i) => (
          <IndexCard
            key={cat.id}
            number={i + 1}
            title={cat.title}
            items={cat.items}
            rotation={cat.rotation}
            bg={cat.bg}
            topColor={cat.topColor}
          />
        ))}
      </div>
    </section>
  );
}
