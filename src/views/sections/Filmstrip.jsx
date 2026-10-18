import { useLang } from '../../context/LangContext';
import styles from './Filmstrip.module.css';

const FRAMES = [
  { src: '/assets/moments/scroll/it-dayz-team-day-one.jpeg',        label: { en: "IT Day'z · day one", fr: "IT Day'z · jour un" },  rot: -2 },
  { src: '/assets/moments/scroll/it-dayz-winning-team.jpeg',        label: { en: 'winning team', fr: 'équipe gagnante' },      rot:  1 },
  { src: '/assets/moments/scroll/it-dayz-squad.jpg',                label: { en: 'the squad', fr: 'la team' },      rot: -1 },
  { src: '/assets/moments/scroll/it-dayz-media.jpg',                label: { en: 'on media', fr: 'dans les médias' },      rot:  2 },
  { src: '/assets/moments/scroll/it-dayz-team.jpeg',                label: { en: "IT Day'z team", fr: "équipe IT Day'z" },      rot: -2 },
  { src: '/assets/moments/scroll/it-dayz-fun.jpeg',                 label: { en: 'good company', fr: 'bonne compagnie' },      rot:  1 },
  { src: '/assets/moments/scroll/ids-event.jpg',                    label: { en: 'IDS event', fr: 'événement IDS' },      rot: -1 },
  { src: '/assets/moments/scroll/project-team-mentor.jpg',          label: { en: 'team & mentor', fr: 'équipe & mentor' },      rot: -2 },
  { src: '/assets/moments/scroll/csc-committee.jpg',                label: { en: 'the committee', fr: 'le bureau' },      rot:  1 },
  { src: '/assets/moments/scroll/csc-formation.jpg',                label: { en: 'CSC formation', fr: 'formation CSC' },      rot: -1 },
  { src: '/assets/moments/scroll/learning-to-swim.jpg',             label: { en: 'swimming lesson', fr: 'cours de natation' },     rot: -1 },
  { src: '/assets/moments/scroll/tangier-coach.jpg',                label: { en: "with tangier's coach", fr: 'avec le coach de Tanger' },       rot: -1 },
  { src: '/assets/moments/scroll/padel.jpg',                        label: { en: 'playing padel', fr: 'au padel' },      rot: -2 },
];

/**
 * Auto-scrolling filmstrip marquee.
 * Frames are duplicated so the loop is seamless.
 * Pauses on hover.
 */
export default function Filmstrip() {
  const { t } = useLang();
  return (
    <div className={styles.filmstrip}>
      <div className={styles.marqueeOuter}>
        <div className={styles.marqueeTrack} aria-label={t('Photo filmstrip', 'Pellicule photo')}>
          {/* Duplicate frames for seamless infinite loop */}
          {[...FRAMES, ...FRAMES].map((f, i) => (
            <div
              key={i}
              className={styles.frame}
              style={{ transform: `rotate(${f.rot}deg)` }}
              aria-hidden={i >= FRAMES.length}
            >
              <div className={styles.imgBox}>
                <img src={f.src} alt={t(f.label)} loading="lazy" className={styles.img} />
              </div>
              <div className={styles.meta}>
                <span className={styles.frameLabel}>{t(f.label)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
