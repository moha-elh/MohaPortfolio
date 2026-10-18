import { useLang } from '../../context/LangContext';
import styles from './Thoughts.module.css';

// Each entry is a moment: an image + the thought that goes with it.
// Add your photo src when ready: { src: '/assets/your-photo.jpg', ... }
const MOMENTS = [
  {
    src: '/assets/moments/thoughts/portrait.jpg',
    caption: { en: 'Me', fr: 'Moi' },
    thought: { en: "Am I destined for something big, or am I just a stupid person with a big ego?", fr: "Suis-je destiné à quelque chose de grand, ou suis-je juste un idiot avec un gros ego ?" },
  },
  {
    src: '/assets/moments/thoughts/tangier.jpg',
    caption: { en: 'tangier', fr: 'tanger' },
    thought: { en: "the city where I felt alone even when surrounded by people", fr: "la ville où je me sentais seul même entouré de monde" },
  },
  {
    src: '/assets/moments/thoughts/me-1.jpg',
    caption: { en: 'me, again', fr: 'moi, encore' },
    thought: { en: "Nothing complicated, just thinking about how wonderful I am", fr: "Rien de compliqué, je pense juste à quel point je suis merveilleux" },
  },
  {
    src: '/assets/moments/thoughts/plage-des-nations.jpg',
    caption: 'plage des nations',
    thought: { en: "why do we want and envision a life, yet make no effort toward achieving it?", fr: "pourquoi imaginons-nous une vie que nous désirons, sans faire aucun effort pour l'atteindre ?" },
  },
  {
    src: '/assets/moments/thoughts/with-dad.jpg',
    caption: { en: 'me & dad', fr: 'moi & papa' },
    thought: { en: "My family was and still is my biggest support, but their overconfidence is killing me", fr: "Ma famille a toujours été mon plus grand soutien, mais leur confiance aveugle en moi me tue" },
  },
  {
    src: '/assets/moments/thoughts/rabat-beach-view.jpg',
    caption: { en: 'the view from here', fr: "la vue d'ici" },
    thought: { en: "I love nature, but I hate being surrounded by people", fr: "J'adore la nature, mais je déteste être entouré de monde" },
  },
  {
    src: '/assets/moments/thoughts/with-a-cow.jpg',
    caption: { en: 'me & a cow', fr: 'moi & une vache' },
    thought: "Moooooooooooooo",
  },
  {
    src: '/assets/moments/thoughts/petite-vallee-dor-night.jpg',
    caption: { en: 'petite vallée d\'or, night', fr: "petite vallée d'or, la nuit" },
    thought: { en: "Can someone enjoy something that was a source of fear for him?", fr: "Peut-on aimer quelque chose qui nous faisait peur ?" },
  },
  {
    src: '/assets/moments/thoughts/me-in-between.jpg',
    caption: { en: 'somewhere in between', fr: 'quelque part entre les deux' },
    thought: { en: "still figuring it out, that's the whole point, I guess", fr: "je cherche encore, c'est tout l'intérêt, je suppose" },
  },
];

export default function Thoughts({ onBack }) {
  const { t } = useLang();
  return (
    <div className={styles.page}>
      {/* ── Top bar ── */}
      <div className={styles.topBar}>
        <button className={styles.back} onClick={onBack} aria-label={t('Back to portfolio', 'Retour au portfolio')}>
          {t('← back', '← retour')}
        </button>
        <span className={styles.topLabel}>{t('/ easter egg · unlocked', '/ easter egg · débloqué')}</span>
      </div>

      {/* ── Header ── */}
      <div className={styles.header}>
        <p className={styles.sectionLabel}>{t('/ thoughts & moments', '/ pensées & moments')}</p>
        <h1 className={styles.title}>{t('things I think about.', 'ce à quoi je pense.')}</h1>
      </div>

      {/* ── Moments grid ── */}
      <div className={styles.grid}>
        {MOMENTS.map((m, i) => (
          <div key={i} className={styles.moment}>
            {/* Polaroid image */}
            <div className={styles.polaroid}>
              <div className={styles.imgBox}>
                {m.src
                  ? <img src={m.src} alt={t(m.caption)} loading="lazy" className={styles.img} />
                  : null
                }
              </div>
              <p className={styles.caption}>{t(m.caption)}</p>
            </div>
            {/* Thought sticky */}
            <div className={styles.sticky}>
              "{t(m.thought)}"
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
