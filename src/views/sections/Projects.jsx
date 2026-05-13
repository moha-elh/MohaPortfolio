import { useCallback, useRef, useState, useEffect } from 'react';
import { projects } from '../../models/projects';
import ProjectCard from '../ui/ProjectCard';
import styles from './Projects.module.css';

export default function Projects({ onOpenProject, onOpenWork }) {
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
    <section id="projects" className={styles.section} aria-label="Projects">
      <div className={`${styles.stage} ${isMobile ? styles.stageMobile : ''}`}>
        {isMobile ? (
          <p className={styles.hintMobile} aria-hidden="true">
            stuff I made ↓
          </p>
        ) : (
          <p className={styles.hint} aria-hidden="true">
            stuff I made ↓ <span className={styles.hintSub}>(drag to rearrange)</span>
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
            click any polaroid →<br />opens case study<br />(page wipes)
          </div>
        )}
      </div>
    </section>
  );
}
