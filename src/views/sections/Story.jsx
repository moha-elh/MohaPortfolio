import styles from './Story.module.css';
import AccordionGallery from '../ui/AccordionGallery';

const designWork = [
  { image: '/assets/moments/design/design-2.jpg', label: 'Design work', alt: 'Old design work' },
  { image: '/assets/moments/design/design-3.jpg', label: 'Design work', alt: 'Old design work' },
  { image: '/assets/moments/design/design-1.jpg', label: 'Design work', alt: 'Old design work' },
  { image: '/assets/moments/design/design-4.jpg', label: 'Design work', alt: 'Old design work' },
];

export default function Story({ onBack }) {
  return (
    <div className={styles.page}>
      {/* ── Top bar ── */}
      <div className={styles.topBar}>
        <button className={styles.back} onClick={onBack} aria-label="Back to portfolio">
          ← back
        </button>
        <span className={styles.topLabel}>/ easter egg · unlocked</span>
      </div>

      {/* ── Dossier header ── */}
      <div className={styles.dossier}>
        <span className={styles.dossierStamp}>classified</span>
        <p className={styles.dossierLabel}>case file · subject profile</p>
        <h1 className={styles.dossierTitle}>the full story.</h1>
        <div className={styles.dossierMeta}>
          <span><strong>Subject:</strong> Mouhssine El Haouary</span>
          <span><strong>Location:</strong> Tangier, Morocco</span>
          <span><strong>Status:</strong> Engineering student, 2nd year</span>
          <span><strong>Year:</strong> 2026</span>
        </div>
      </div>

      {/* ── Chapters ── */}
      <div className={styles.chapters}>

        {/* Chapter 1 */}
        <div className={styles.chapter}>
          <div className={styles.tape} />
          <p className={styles.chapterNum}>chapter 01</p>
          <h2 className={styles.chapterTitle}>the kid with a hundred phases.</h2>
          <div className={styles.chapterBody}>
            <div className={`${styles.photo} ${styles.photoRight} ${styles.photoSmall}`}>
              <img src="/assets/moments/story/silly-me.jpg" alt="A hundred phases" loading="lazy" />
              <p className={styles.photoCap}>A silly pic of me</p>
            </div>
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
            <p>
              My biggest phase, I'd say, was <span className={styles.hl}>video editing</span>.
              <br></br>
              I worked inside an agency making compelling videos that racked up millions of views,
              before I ended up quitting to figure out my path in the tech world.
            </p>
            <p>
              You can still see it here:{' '}
              <a
                className={styles.storyLink}
                href="https://mouhssineedits.carrd.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                my editing portfolio →
              </a>
            </p>
          </div>
        </div>

        {/* Chapter 2 */}
        <div className={styles.chapter}>
          <div className={`${styles.tape} ${styles.right}`} />
          <p className={styles.chapterNum}>chapter 02</p>
          <h2 className={styles.chapterTitle}>my origins.</h2>
          <div className={styles.chapterBody}>
            <div className={`${styles.photo} ${styles.photoBig}`}>
              <img src="/assets/moments/story/bac-year-crew.jpg" alt="Home" loading="lazy" />
              <p className={styles.photoCap}>My best friends back then</p>
            </div>
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
          </div>
        </div>

        {/* Chapter 3 */}
        <div className={styles.chapter}>
          <div className={styles.tape} />
          <p className={styles.chapterNum}>chapter 03</p>
          <h2 className={styles.chapterTitle}>what I want in life.</h2>
          <div className={styles.chapterBody}>
            <div className={styles.photo}>
              <img src="/assets/moments/story/good-people.jpg" alt="The people" loading="lazy" />
              <p className={styles.photoCap}>what's next</p>
            </div>
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
          </div>
        </div>

      </div>

      {/* ── Sign-off ── */}
      <div className={styles.signoff}>
        <span className={styles.sigText}>Mouhssine's Story</span>
        <span className={styles.sigSub}>filed · tangier, MA · 2026 · you found the easter egg.</span>
      </div>
    </div>
  );
}
