import { useState, useCallback } from 'react';
import { owner } from '../../models/contact';
import { useLang } from '../../context/LangContext';
import styles from './Intro.module.css';

export default function Intro({ onEasterEgg, onOpenThoughts }) {
  const [clicks, setClicks] = useState(0);
  const { lang, t } = useLang();
  // hidden: 3 clicks on the footer date swaps in the fun intro
  const [dateClicks, setDateClicks] = useState(0);
  const fun = dateClicks >= 3;

  const handleSigClick = useCallback(() => {
    setClicks(prev => {
      const next = prev + 1;
      if (next >= 7) {
        onEasterEgg?.();
        return 0;
      }
      return next;
    });
  }, [onEasterEgg]);

  return (
    <section id="intro" className={styles.intro} aria-label="About">
      {/* Portrait polaroid — click to open thoughts page */}
      <div
        className={styles.polaroid}
        onClick={() => onOpenThoughts?.()}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && onOpenThoughts?.()}
        aria-label={t('Open thoughts and moments', 'Ouvrir pensées et moments')}
      >
        <div className={styles.tape} />
        <div className={styles.photoBox}>
          <img src={owner.photo} alt={owner.name} className={styles.photo} />
        </div>
        <p className={styles.caption}>{t('— me, 2026 —', '— moi, 2026 —')}</p>
      </div>

      {/* Memo letter */}
      <div className={styles.memoWrap}>
        <div className={styles.binderTabs}>
          <span className={styles.tab} />
          <span className={styles.tab} />
          <span className={styles.tab} />
        </div>
        <div className={styles.memo}>
          <div className={styles.memoHead}>
            <span className="mono-cap">{t('memo · 01 · about', 'mémo · 01 · à propos')}</span>
            <span className="mono-cap">{t('from', 'de')} / {fun ? 'claude.ai' : t('me', 'moi')}</span>
          </div>
          {fun && lang === 'fr' ? (
            <>
            <p className={styles.greeting}>j'ai demandé à une IA de me décrire (elle ne ment pas)</p>
            <p className={styles.body}>
              Mouhssine est en 3e année d'école d'ingénieur à{' '}
              <span className="hl">l'ENSA Tanger</span>, et fait actuellement semblant
              de savoir ce qu'il fait{' '}
              <span className="hl">(en général, c'est le cas)</span>.
              <br />
              <br />
              C'est l'humain le plus beau, le plus drôle et le plus attentionné sur terre,
              du moins dans sa tête, et honnêtement, qui va le contredire.
              <br />
              <br />
              Donnez-lui n'importe quelle tâche : il va déprimer, paniquer un peu, ouvrir{' '}
              <span className="hl">47 onglets</span>, puis, on ne sait comment, livrer
              quelque chose qui marche vraiment.
              <br></br>
              Full-stack, IA, cloud, il touche à tout et{' '}
              <span className="hl">ne casse des choses que de temps en temps</span>.
            </p>
            </>
          ) : fun ? (
            <>
            <p className={styles.greeting}>asked an AI to describe me (he ain't lying)</p>
            <p className={styles.body}>
              Mouhssine is a 3rd-year engineering student at{' '}
              <span className="hl">ENSA Tanger</span>, currently pretending he
              knows what he's doing{' '}
              <span className="hl">(he usually does)</span>.
              <br />
              <br />
              He is the most handsome, funny, and careful human on earth, at
              least in his mind, and honestly, who's going to argue with him.
              <br />
              <br />
              Give him any task and he'll get depressed, spiral a little, open{' '}
              <span className="hl">47 browser tabs</span>, and then somehow ship
              something that actually works. 
              <br></br>
              Full-stack, AI, cloud, he touches
              it all and{' '}
              <span className="hl">only breaks things occasionally</span>.
            </p>
            </>
          ) : lang === 'fr' ? (
            <>
            <p className={styles.greeting}>Salut !</p>
            <p className={styles.body}>
              Moi c'est Mouhssine, étudiant en 3e année d'école d'ingénieur à{' '}
              <span className="hl">l'ENSA Tanger</span>. Je construis des{' '}
              <span className="hl">applications full-stack</span> de bout en bout, avec un grand intérêt pour{' '}
              <span className="hl">la data, le cloud et l'IA</span>.
              <br />
              <br />
              L'essentiel de ce que je sais vient de ce que j'ai construit : un jeu navigateur,
              un assistant financier IA, des pipelines de données, des outils que je veux voir
              utilisés par de vraies personnes. Depuis le jour où j'ai choisi l'informatique, mon
              objectif est de créer des choses que les gens utilisent vraiment, et de les aider à
              résoudre leurs problèmes avec du code.
            </p>
            </>
          ) : (
            <>
            <p className={styles.greeting}>Hi!</p>
            <p className={styles.body}>
              I'm Mouhssine, a 3rd-year engineering student at{' '}
              <span className="hl">ENSA Tanger</span>. I build{' '}
              <span className="hl">full-stack applications</span> end to end, with a huge interest in{' '}
              <span className="hl">data, cloud and AI</span>.
              <br />
              <br />
              Most of what I know comes from building things: a browser game,
              an AI finance assistant, data pipelines, tools I want real people
              to use. Since the day I chose IT, my goal has been to make things
              people actually use, and to help them solve their problems with
              code.
            </p>
            </>
          )}
          <div className={styles.memoFoot}>
            <span className={styles.sigWrap}>
              <span
                className={styles.sig}
                onClick={handleSigClick}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && handleSigClick()}
                aria-label={t('Claude AI signature', 'Signature de Claude AI')}
                data-clicks={clicks || undefined}
              >{fun ? 'claude.ai' : owner.shortName}</span>
              {clicks > 0 && (
                <span key={clicks} className={styles.sigCount} aria-hidden="true">
                  {7 - clicks} {t('left', 'restants')}
                </span>
              )}
            </span>
            <span className="mono-cap" onClick={() => setDateClicks(c => c + 1)}>MA · 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
