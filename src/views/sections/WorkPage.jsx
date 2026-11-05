import { useState } from 'react';
import { projects, projectCategories } from '../../models/projects';
import { useLang } from '../../context/LangContext';
import FilterBar from '../ui/FilterBar';
import TechPicker from '../ui/TechPicker';
import styles from './WorkPage.module.css';

const STATUS_CLASS = {
  live:          styles.live,
  private:       styles.private,
  'in-progress': styles.inProgress,
  finished:      styles.finished,
};

const STATUS_LABEL = {
  live:          { en: 'live',        fr: 'en ligne' },
  private:       { en: 'private',     fr: 'privé' },
  'in-progress': { en: 'in progress', fr: 'en cours' },
  finished:      { en: 'finished',    fr: 'terminé' },
};

export default function WorkPage({ onBack, onOpen }) {
  const { t } = useLang();
  const [category, setCategory] = useState('all');
  const [tech, setTech] = useState('all');

  const allProjects = projects.filter(p => p.id !== 'more' && p.detail);
  const inCategory = category === 'all' ? allProjects : allProjects.filter(p => p.category?.includes(category));
  // tech list follows the category, so every pick has at least one project
  const techs = [...new Set(inCategory.flatMap(p => p.detail.tech))].sort((a, b) => a.localeCompare(b));
  const activeTech = techs.includes(tech) ? tech : 'all';
  const displayProjects = activeTech === 'all' ? inCategory : inCategory.filter(p => p.detail.tech.includes(activeTech));

  return (
    <div className={styles.page}>
      {/* ── Top bar ── */}
      <div className={styles.topBar}>
        <button className={styles.back} onClick={onBack} aria-label={t('Back to portfolio', 'Retour au portfolio')}>
          {t('← back', '← retour')}
        </button>
        <span className={styles.topLabel}>{t('/ work · all projects', '/ projets · tous les projets')}</span>
      </div>

      <div className={styles.header}>
        <p className={styles.sectionLabel}>{t('/ section · 02 · work', '/ section · 02 · projets')}</p>
        <h1 className={styles.title}>{t('everything I built.', 'tout ce que j’ai construit.')}</h1>
      </div>

      <div className={styles.filters}>
        <FilterBar options={projectCategories} value={category} onChange={setCategory} label={t('Filter projects', 'Filtrer les projets')}>
          <TechPicker
            options={techs}
            value={activeTech}
            onChange={setTech}
            label={t('Filter by tech', 'Filtrer par techno')}
          />
        </FilterBar>
      </div>

      <div className={styles.grid}>
        {displayProjects.map(p => (
          <div
            key={p.id}
            className={styles.card}
            onClick={() => onOpen(p.id)}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && onOpen(p.id)}
            aria-label={t(`Open ${p.name} project`, `Ouvrir le projet ${p.name}`)}
          >
            <div className={styles.cardImg}>
              {p.logo ? <img src={p.logo} alt={p.name} loading="lazy" /> : <span className={styles.cardMono}>{p.name}</span>}
            </div>
            <div className={styles.cardBody}>
              <p className={styles.cardName}>{p.name}</p>
              {p.blurb && <p className={styles.cardBlurb}>{t(p.blurb)}</p>}
              <div className={styles.cardTags}>
                {p.tag.split(' · ').map(tech => <span key={tech} className={styles.cardTag}>{tech}</span>)}
              </div>
              <span className={`${styles.cardStatus} ${STATUS_CLASS[p.detail.status]}`}>
                {t(STATUS_LABEL[p.detail.status])}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
