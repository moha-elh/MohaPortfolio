import { useDraggable } from '../../controllers/useDraggable';
import { useHover } from '../../context/CursorContext';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project, getNextZ, isMobile, onOpen }) {
  const drag  = useDraggable(project.position, project.rotation, getNextZ, isMobile, onOpen);
  const hover = useHover();

  const cardStyle = isMobile
    ? { transform: `rotate(${project.rotation}deg)`, width: '100%', maxWidth: 280 }
    : { ...drag.style, width: project.size.w };

  return (
    <div
      className={`${styles.card} ${drag.lifted ? styles.lifted : ''}`}
      style={cardStyle}
      {...(isMobile ? {} : drag.handlers)}
      {...(isMobile ? {} : hover)}
      onClick={isMobile ? onOpen : undefined}
      data-draggable={!isMobile ? '' : undefined}
    >
      <div className={styles.imgBox} style={{ height: project.size.h }}>
        {project.img ? (
          <img
            src={project.img}
            alt={project.name}
            className={styles.img}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className={styles.imgPlaceholder}>→</span>
        )}
      </div>
      <div className={styles.name}>{project.name}</div>
      <div className={styles.tag}>{project.tag}</div>
    </div>
  );
}
