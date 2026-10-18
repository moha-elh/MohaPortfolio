import { useCallback, useRef, useState, useEffect } from 'react';
import { projects } from '../../models/projects';
import ProjectCard from '../ui/ProjectCard';
import { useLang } from '../../context/LangContext';
import styles from './Projects.module.css';

export default function Projects({ onOpenProject, onOpenWork }) {
  const { t } = useLang();
  const zCounter = useRef(projects.length);
  const getNextZ = useCallback(() => { zCounter.current += 1; return zCounter.current; }, []);

  const handleOpen = useCallback((projectId) => {
    if (projectId === 'more') {
      onOpenWork?.();
    } else {
      onOpenProject?.(projectId);
    }
  }, [onOpenProject, onOpenWork]);

  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 1023px)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)');
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <section id="projects" className={styles.section} aria-label={t('Projects', 'Projets')}>
      <div className={`${styles.stage} ${isMobile ? styles.stageMobile : ''}`}>
        {isMobile ? (
          <p className={styles.hintMobile} aria-hidden="true">
            {t('stuff I made ↓', 'ce que j’ai fait ↓')}
          </p>
        ) : (
          <p className={styles.hint} aria-hidden="true">
            {t('stuff I made ↓', 'ce que j’ai fait ↓')} <span className={styles.hintSub}>{t('(drag to rearrange)', '(glisse pour réorganiser)')}</span>
          </p>
        )}

        {projects.filter(p => p.board !== false).map((p) => (
          <ProjectCard
            key={p.id}
            project={p}
            getNextZ={getNextZ}
            isMobile={isMobile}
            onOpen={() => handleOpen(p.id)}
          />
        ))}

        {!isMobile && (
          <div className={styles.sticky} aria-hidden="true">
            {t('click any polaroid →', 'clique un polaroid →')}<br />{t('opens case study', 'ouvre l’étude de cas')}<br />{t('(page wipes)', '(la page bascule)')}
          </div>
        )}
      </div>
    </section>
  );
}
