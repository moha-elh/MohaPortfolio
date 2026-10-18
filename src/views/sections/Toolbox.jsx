import { skillCategories } from '../../models/skills';
import IndexCard from '../ui/IndexCard';
import { useLang } from '../../context/LangContext';
import styles from './Toolbox.module.css';

export default function Toolbox() {
  const { t } = useLang();
  return (
    <section id="toolbox" className={styles.section} aria-label={t('Skills', 'Compétences')}>
      <p className="sec-label">{t('/ section · 03 · toolbox', '/ section · 03 · outils')}</p>
      <h2 className="sec-title">{t('things in my toolbox.', 'ma boîte à outils.')}</h2>
      <div className={styles.grid}>
        {skillCategories.map((cat, i) => (
          <IndexCard
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
    </section>
  );
}
