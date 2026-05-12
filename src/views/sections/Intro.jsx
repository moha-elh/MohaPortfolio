import { owner } from '../../models/contact';
import styles from './Intro.module.css';

export default function Intro() {
  return (
    <section id="intro" className={styles.intro} aria-label="About">
      {/* Portrait polaroid */}
      <div className={styles.polaroid}>
        <div className={styles.tape} />
        <div className={styles.photoBox}>
          <img src={owner.photo} alt={owner.name} className={styles.photo} />
        </div>
        <p className={styles.caption}>— me, 2026 —</p>
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
            <span className="mono-cap">memo · 01 · about</span>
            <span className="mono-cap">from / claude.ai</span>
          </div>
          <p className={styles.greeting}>asked an AI to describe me (he ain't lying)</p>
          <p className={styles.body}>
            Mouhssine is a 2nd-year engineering student at{' '}
            <span className="hl">ENSA Tanger</span>, currently pretending he
            knows what he's doing{' '}
            <span className="hl">(he usually does)</span>.
            <br />
            <br />
            He is the most handsome, funny, and careful human on earth — at
            least in his mind, and honestly, who's going to argue with him.
            <br />
            <br />
            Give him any task and he'll get depressed, spiral a little, open{' '}
            <span className="hl">47 browser tabs</span>, and then somehow ship
            something that actually works. Full-stack, AI, cloud — he touches
            it all and{' '}
            <span className="hl">only breaks things occasionally</span>.
          </p>
          <div className={styles.memoFoot}>
            <span className={styles.sig}>— claude.ai ✦</span>
            <span className="mono-cap">tangier, MA · 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
