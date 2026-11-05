import { useHover } from '../../context/CursorContext';
import { useLang } from '../../context/LangContext';
import styles from './FilterBar.module.css';

/* Row of toggle chips. options: { key: label }, value: active key or 'all'. */
export default function FilterBar({ options, value, onChange, label, children }) {
  const hover = useHover();
  const { t } = useLang();
  const entries = [['all', { en: 'all', fr: 'tout' }], ...Object.entries(options)];

  return (
    <div className={styles.bar} role="group" aria-label={label}>
      {entries.map(([key, text]) => (
        <button
          key={key}
          className={styles.chip}
          aria-pressed={value === key}
          onClick={() => onChange(key)}
          {...hover}
        >
          {t(text)}
        </button>
      ))}
      {children}
    </div>
  );
}
