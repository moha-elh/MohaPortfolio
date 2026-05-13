import styles from './Story.module.css';

export default function Story({ onBack }) {
  return (
    <div className={styles.page}>
      {/* ── Top bar ── */}
      <div className={styles.topBar}>
        <button className={styles.back} onClick={onBack} aria-label="Back to portfolio">
          ← back
        </button>
        <span className={styles.topLabel}>/ easter egg · unlocked ✦</span>
      </div>

      {/* ── Dossier header ── */}
      <div className={styles.dossier}>
        <span className={styles.dossierStamp}>classified</span>
        <p className={styles.dossierLabel}>case file · subject profile · compiled by claude.ai</p>
        <h1 className={styles.dossierTitle}>the full story.</h1>
        <div className={styles.dossierMeta}>
          <span><strong>Subject:</strong> Mouhssine El Haouary</span>
          <span><strong>Location:</strong> Tangier, Morocco</span>
          <span><strong>Status:</strong> Engineering student, 2nd year</span>
          <span><strong>Filed:</strong> 2026</span>
        </div>
      </div>

      {/* ── Chapters ── */}
      <div className={styles.chapters}>

        {/* Chapter 1 */}
        <div className={styles.chapter}>
          <div className={styles.tape} />
          <p className={styles.chapterNum}>chapter 01</p>
          <h2 className={styles.chapterTitle}>the city at the edge of the world.</h2>
          <div className={styles.chapterBody}>
            <p>
              Tangier. The city where Africa and Europe nearly touch across a narrow strip of sea,
              where the Atlantic meets the Mediterranean, where{' '}
              <span className={styles.hl}>everything feels like it's on the edge of something</span>.
              That's where this story starts.
            </p>
            <p>
              Growing up here means growing up curious. You're surrounded by two continents, two seas,
              a dozen languages, and a port that's been trading ideas for centuries. It also means
              the internet was the window to a much bigger world — and Mouhssine pressed his face
              against it early.
            </p>
            <p>
              The first computer. The first "how does this work?" The first time he opened DevTools
              and the whole illusion came apart. That was it. Game over. He was hooked.
            </p>
          </div>
        </div>

        {/* Chapter 2 */}
        <div className={styles.chapter}>
          <div className={`${styles.tape} ${styles.right}`} />
          <p className={styles.chapterNum}>chapter 02</p>
          <h2 className={styles.chapterTitle}>ENSA Tanger: controlled chaos.</h2>
          <div className={styles.chapterBody}>
            <div className={styles.aside}>
              "I used to think sleep was optional. Then I took distributed systems." — him, probably
            </div>
            <p>
              He enrolled at{' '}
              <span className={styles.hl}>École Nationale des Sciences Appliquées de Tanger</span>{' '}
              — one of Morocco's top engineering schools. Engineering. The real kind. Where they
              make you prove theorems before breakfast and build concurrent systems before lunch.
            </p>
            <p>
              Second year in, the pattern is clear: give him a hard problem, a deadline, and a
              Wi-Fi connection, and something will ship. It might not be pretty on day one.
              There will be at least 47 browser tabs open. But it will work.
            </p>
            <p>
              ENSA gave him the fundamentals. The rest — the real stuff — he built himself.
            </p>
          </div>
        </div>

        {/* Chapter 3 */}
        <div className={styles.chapter}>
          <div className={styles.tape} />
          <p className={styles.chapterNum}>chapter 03</p>
          <h2 className={styles.chapterTitle}>the stack keeps growing.</h2>
          <div className={styles.chapterBody}>
            <p>
              It started with HTML and a dream. Then CSS because things needed to look good.
              Then JavaScript because things needed to <em>do</em> things. Then React because
              "what if it was a component?" Then Node because "what if there was a backend?"
              Then Docker because "what if it ran anywhere?" Then{' '}
              <span className={styles.hl}>he stopped asking what if and just built it</span>.
            </p>
            <p>
              Today the stack is wide. TypeScript, React, Vue, Angular, Node, ASP.NET, gRPC,
              Kafka, Python, LangChain, RAG pipelines, Terraform, Ansible, AWS — it's all in
              there. Not because he collected them, but because each project demanded them.
            </p>
            <div className={styles.stackList}>
              {['TypeScript','React','Vue','Node','ASP.NET','gRPC','Kafka','Python','LangChain',
                'Terraform','Docker','AWS','PostgreSQL','Prisma','Grafana'].map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Chapter 4 */}
        <div className={styles.chapter}>
          <div className={`${styles.tape} ${styles.right}`} />
          <p className={styles.chapterNum}>chapter 04</p>
          <h2 className={styles.chapterTitle}>the things he actually shipped.</h2>
          <div className={styles.chapterBody}>
            <p>
              <span className={styles.hl}>DIRHAMY</span> — a finance assistant for Moroccan
              users powered by RAG and Groq. Real-time retrieval, context-aware answers, actual
              deployed product. Not a side project that dies in a GitHub repo — a live thing
              people use.
            </p>
            <p>
              <span className={styles.hl}>SKILLIOS</span> — he didn't just build it, he led
              a team of 10 on it. Vue.js frontend, full product lifecycle, stakeholder management,
              sprint planning. At year 2 of engineering school. That's not nothing.
            </p>
            <p>
              <span className={styles.hl}>BI Pipeline</span> — an enterprise ETL pipeline
              on Pentaho with Power BI dashboards on top. The kind of thing that turns raw
              messy data into a board meeting slide deck.
            </p>
            <p>
              <span className={styles.hl}>CV Agents</span> — an AI system that reads CVs with
              LangChain, routes them through Kafka, and communicates via gRPC. A distributed,
              event-driven, AI-augmented recruitment pipeline. Because why not.
            </p>
          </div>
        </div>

        {/* Chapter 5 */}
        <div className={styles.chapter}>
          <div className={styles.tape} />
          <p className={styles.chapterNum}>chapter 05</p>
          <h2 className={styles.chapterTitle}>what actually drives him.</h2>
          <div className={styles.chapterBody}>
            <div className={styles.aside}>
              ships something that works ✦ only breaks things occasionally ✦ certified 47-tabs-open engineer
            </div>
            <p>
              It's not the stack. It's not the titles. It's the moment when something that
              didn't exist becomes something that does — and it <em>works</em>. That moment
              when the build passes, the API responds, the user gets what they needed.
            </p>
            <p>
              He gets depressed at the start of every hard problem. He spirals a little.
              He opens 47 tabs. Then he closes 46 of them and gets to work. That's the process.
              <span className={styles.hl}> That's always the process.</span>
            </p>
            <p>
              Full-stack. AI. Cloud. He touches it all because each layer matters. The user
              experience matters. The backend that powers it matters. The infrastructure that
              keeps it running matters. You can't care about one and ignore the others.
            </p>
          </div>
        </div>

        {/* Chapter 6 */}
        <div className={styles.chapter}>
          <div className={`${styles.tape} ${styles.right}`} />
          <p className={styles.chapterNum}>chapter 06</p>
          <h2 className={styles.chapterTitle}>what comes next.</h2>
          <div className={styles.chapterBody}>
            <p>
              He's looking for a <span className={styles.hl}>PFA internship</span> — the kind
              where the work is real, the problem is hard, and the team actually cares about
              what they're building. Not a "shadow someone for 3 months" situation. A
              "here's a real problem, go figure it out" situation.
            </p>
            <p>
              Full-stack, AI/ML pipelines, cloud architecture, distributed systems — he can
              contribute on all of these. Preferably on something that matters to actual people.
            </p>
            <p>
              The city at the edge of the world produced someone who isn't afraid of edges.
              He'll ship. He'll figure it out. He always does.
            </p>
          </div>
        </div>

      </div>

      {/* ── Sign-off ── */}
      <div className={styles.signoff}>
        <span className={styles.sigText}>— claude.ai ✦</span>
        <span className={styles.sigSub}>filed · tangier, MA · 2026 · you found the easter egg.</span>
      </div>
    </div>
  );
}
