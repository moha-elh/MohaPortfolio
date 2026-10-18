import styles from './Story.module.css';
import AccordionGallery from '../ui/AccordionGallery';
import { useLang } from '../../context/LangContext';

const designWork = [
  { image: '/assets/moments/design/design-2.jpg', label: 'Design work', alt: 'Old design work' },
  { image: '/assets/moments/design/design-3.jpg', label: 'Design work', alt: 'Old design work' },
  { image: '/assets/moments/design/design-1.jpg', label: 'Design work', alt: 'Old design work' },
  { image: '/assets/moments/design/design-4.jpg', label: 'Design work', alt: 'Old design work' },
];

export default function Story({ onBack }) {
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

      {/* ── Dossier header ── */}
      <div className={styles.dossier}>
        <span className={styles.dossierStamp}>{t('classified', 'confidentiel')}</span>
        <p className={styles.dossierLabel}>{t('case file · subject profile', 'dossier · profil du sujet')}</p>
        <h1 className={styles.dossierTitle}>{t('the full story.', 'toute l’histoire.')}</h1>
        <div className={styles.dossierMeta}>
          <span><strong>{t('Subject:', 'Sujet :')}</strong> Mouhssine El Haouary</span>
          <span><strong>{t('Location:', 'Lieu :')}</strong> {t('Tangier, Morocco', 'Tanger, Maroc')}</span>
          <span><strong>{t('Status:', 'Statut :')}</strong> {t('Engineering student, 3rd year', 'Élève ingénieur, 3e année')}</span>
          <span><strong>{t('Year:', 'Année :')}</strong> 2026</span>
        </div>
      </div>

      {/* ── Chapters ── */}
      <div className={styles.chapters}>

        {/* Chapter 1 */}
        <div className={styles.chapter}>
          <div className={styles.tape} />
          <p className={styles.chapterNum}>{t('chapter 01', 'chapitre 01')}</p>
          <h2 className={styles.chapterTitle}>{t('the kid with a hundred phases.', 'le gamin aux cent phases.')}</h2>
          <div className={styles.chapterBody}>
            <div className={`${styles.photo} ${styles.photoRight} ${styles.photoSmall}`}>
              <img src="/assets/moments/story/silly-me.jpg" alt={t('A hundred phases', 'Cent phases')} loading="lazy" />
              <p className={styles.photoCap}>{t('A silly pic of me', 'Une photo débile de moi')}</p>
            </div>
            {t(
              <>
                <p>
                  Before I even discovered my toxic relationship with coding, and became a
                  gambling addict (waiting for Claude's results), I was just that kid who
                  tried everything.
                </p>
                <p>
                  I tried drawing, and lost my drawing book to sheer carelessness.
                  <br></br>
                  I tried inventing things, mostly just getting electrified.
                  <br></br>
                  I even tried designing, which didn't go so well.
                </p>
              </>,
              <>
                <p>
                  Avant même de découvrir ma relation toxique avec le code, et de devenir
                  accro au jeu (en attendant les résultats de Claude), j'étais juste ce gamin
                  qui essayait tout.
                </p>
                <p>
                  J'ai essayé le dessin, et perdu mon carnet par pure négligence.
                  <br></br>
                  J'ai essayé d'inventer des trucs, surtout en m'électrocutant.
                  <br></br>
                  J'ai même essayé le design, ce qui ne s'est pas très bien passé.
                </p>
              </>
            )}
            <figure className={styles.designGallery}>
              <AccordionGallery
                items={designWork}
                defaultIndex={2}
                trigger="hover"
                height={300}
                gap={14}
                radius={2}
                expandRatio={0.5}
                showLabels={false}
                grayscale={false}
                overlayColor="transparent"
                className="accordion-gallery--polaroid"
              />
            </figure>
            {t(
              <p>
                My biggest phase, I'd say, was <span className={styles.hl}>video editing</span>.
                <br></br>
                I worked inside an agency making compelling videos that racked up millions of views,
                before I ended up quitting to figure out my path in the tech world.
              </p>,
              <p>
                Ma plus grosse phase, je dirais, c'était le <span className={styles.hl}>montage vidéo</span>.
                <br></br>
                J'ai travaillé dans une agence à faire des vidéos percutantes qui ont cumulé des millions de vues,
                avant de finir par arrêter pour trouver ma voie dans la tech.
              </p>
            )}
            <p>
              {t('You can still see it here:', 'Tu peux encore le voir ici :')}{' '}
              <a
                className={styles.storyLink}
                href="https://mouhssineedits.carrd.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('my editing portfolio →', 'mon portfolio de montage →')}
              </a>
            </p>
          </div>
        </div>

        {/* Chapter 2 */}
        <div className={styles.chapter}>
          <div className={`${styles.tape} ${styles.right}`} />
          <p className={styles.chapterNum}>{t('chapter 02', 'chapitre 02')}</p>
          <h2 className={styles.chapterTitle}>{t('my origins.', 'mes origines.')}</h2>
          <div className={styles.chapterBody}>
            <div className={`${styles.photo} ${styles.photoBig}`}>
              <img src="/assets/moments/story/bac-year-crew.jpg" alt={t('Home', 'Chez moi')} loading="lazy" />
              <p className={styles.photoCap}>{t('My best friends back then', 'Mes meilleurs amis à l’époque')}</p>
            </div>
            {t(
              <>
                <p>
                  I grew up in a small village in Morocco called{' '}
                  <span className={styles.hl}>Oued Amlil</span>, known for its ground beef and
                  brutal summer heat.
                </p>
                <p>
                  There I spent the first 18 years of my life as the shy kid who watched movies in
                  his father's room whenever he wasn't around, which led to me learning English
                  without even trying. Best thing that ever happened to me.
                </p>
                <p>
                  I was gifted. I always did well in my studies without really trying, which
                  sometimes led people to call me a liar, because they didn't believe me. And I hated
                  being boxed in as a "study nerd," which led to more than a few fights with my
                  friends, lol.
                </p>
                <p>
                  After getting my baccalauréat (the equivalent of finishing high school), I joined
                  ENSA Tanger, which was my only option.
                </p>
                <p>
                  And you might be wondering: why Tangier and not one of the other twelve ENSAs?
                  The answer is simple. I was thinking about summer and swimming season more than
                  actual studies. Ironically, I never once swam there, even after four years, lol.
                </p>
              </>,
              <>
                <p>
                  J'ai grandi dans un petit village au Maroc qui s'appelle{' '}
                  <span className={styles.hl}>Oued Amlil</span>, connu pour sa viande hachée et
                  sa chaleur estivale brutale.
                </p>
                <p>
                  J'y ai passé les 18 premières années de ma vie, le gamin timide qui regardait des films
                  dans la chambre de son père dès qu'il n'était pas là, ce qui m'a fait apprendre l'anglais
                  sans même essayer. La meilleure chose qui me soit arrivée.
                </p>
                <p>
                  J'étais doué. J'ai toujours bien réussi mes études sans vraiment forcer, ce qui
                  poussait parfois les gens à me traiter de menteur, parce qu'ils ne me croyaient pas. Et je
                  détestais qu'on me range dans la case « intello », ce qui m'a valu pas mal de bagarres avec
                  mes amis, mdr.
                </p>
                <p>
                  Après mon baccalauréat, j'ai intégré l'ENSA Tanger, qui était ma seule option.
                </p>
                <p>
                  Et tu te demandes peut-être : pourquoi Tanger et pas l'une des douze autres ENSA ?
                  La réponse est simple. Je pensais plus à l'été et à la baignade qu'aux études.
                  Ironie du sort, je ne m'y suis jamais baigné une seule fois, même après quatre ans, mdr.
                </p>
              </>
            )}
          </div>
        </div>

        {/* Chapter 3 */}
        <div className={styles.chapter}>
          <div className={styles.tape} />
          <p className={styles.chapterNum}>{t('chapter 03', 'chapitre 03')}</p>
          <h2 className={styles.chapterTitle}>{t('what I want in life.', 'ce que je veux dans la vie.')}</h2>
          <div className={styles.chapterBody}>
            <div className={styles.photo}>
              <img src="/assets/moments/story/good-people.jpg" alt={t('The people', 'Les gens')} loading="lazy" />
              <p className={styles.photoCap}>{t("what's next", 'la suite')}</p>
            </div>
            {t(
              <>
                <p>
                  What actually drives me is still a mystery, even to me. For now, I just want to see
                  my family proud and living a comfortable life.
                </p>
                <p>
                  But I do want to make a change in the world, by being honest, bringing a smile, and
                  creating something useful.
                </p>
                <p>
                  Something that'll make me{' '}
                  <span className={styles.hl}>proud of myself</span>.
                </p>
              </>,
              <>
                <p>
                  Ce qui me motive vraiment reste un mystère, même pour moi. Pour l'instant, je veux juste
                  voir ma famille fière et vivre confortablement.
                </p>
                <p>
                  Mais je veux vraiment changer quelque chose dans le monde, en étant honnête, en donnant
                  le sourire et en créant quelque chose d'utile.
                </p>
                <p>
                  Quelque chose qui me rendra{' '}
                  <span className={styles.hl}>fier de moi</span>.
                </p>
              </>
            )}
          </div>
        </div>

      </div>

      {/* ── Sign-off ── */}
      <div className={styles.signoff}>
        <span className={styles.sigText}>{t("Mouhssine's Story", 'L’histoire de Mouhssine')}</span>
        <span className={styles.sigSub}>{t('filed · tangier, MA · 2026 · you found the easter egg.', 'classé · tanger, MA · 2026 · tu as trouvé l’easter egg.')}</span>
      </div>
    </div>
  );
}
