import styles from './Divider.module.css';

export default function Divider({ label }) {
  return (
    <div className={styles.divider} aria-hidden="true">
      <span className="mono-cap">{label}</span>
      <svg
        width="100%"
        height="14"
        viewBox="0 0 1200 14"
        preserveAspectRatio="none"
        className={styles.line}
      >
        <path
          d="M 0 7 Q 100 2 200 7 T 400 7 T 600 7 T 800 7 T 1000 7 T 1200 7"
          stroke="#1a1a1a"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </div>
  );
}
