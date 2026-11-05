import { useEffect, useId, useRef, useState } from 'react';
import { useHover } from '../../context/CursorContext';
import { useLang } from '../../context/LangContext';
import styles from './TechPicker.module.css';

/**
 * Searchable dropdown (ARIA combobox): type to filter ("dock" → Docker) or
 * open the full list with the arrow. value is a tech name or 'all'.
 * Native <datalist> can't be styled to match the site, hence this small one.
 */
export default function TechPicker({ options, value, onChange, label }) {
  const hover = useHover();
  const { t } = useLang();
  const id = useId();
  const input = useRef(null);
  const list = useRef(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);

  const anyLabel = t('any tech', 'toutes les technos');
  const q = query.trim().toLowerCase();
  const matches = q
    ? options
        .filter((o) => o.toLowerCase().includes(q))
        .sort((a, b) => b.toLowerCase().startsWith(q) - a.toLowerCase().startsWith(q))
    : options;
  // "any tech" is only offered while not searching
  const items = q ? matches : ['all', ...matches];

  const show = (on) => {
    setOpen(on);
    if (on) {
      setQuery('');
      setActive(Math.max(0, ['all', ...options].indexOf(value)));
    }
  };

  const pick = (item) => {
    onChange(item);
    setOpen(false);
    setQuery('');
    input.current.blur(); // next click starts a fresh search (and closes phone keyboards)
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (!open) return show(true);
      const step = e.key === 'ArrowDown' ? 1 : -1;
      setActive((i) => (items.length ? (i + step + items.length) % items.length : 0));
    } else if (e.key === 'Enter' && open) {
      e.preventDefault();
      if (items[active] !== undefined) pick(items[active]);
    } else if (e.key === 'Escape' && open) {
      e.preventDefault();
      setOpen(false);
      setQuery('');
    }
  };

  // keep the highlighted option in view while arrowing through a long list
  useEffect(() => {
    if (open) list.current?.children[active]?.scrollIntoView({ block: 'nearest' });
  }, [active, open]);

  const optionId = (i) => `${id}-opt-${i}`;

  return (
    <div className={styles.picker}>
      <input
        ref={input}
        className={styles.field}
        role="combobox"
        aria-label={label}
        aria-expanded={open}
        aria-controls={`${id}-list`}
        aria-autocomplete="list"
        aria-activedescendant={open && items.length ? optionId(active) : undefined}
        placeholder={anyLabel}
        value={open ? query : value === 'all' ? '' : value}
        onChange={(e) => { setQuery(e.target.value); setActive(0); setOpen(true); }}
        onFocus={() => show(true)}
        onClick={() => { if (!open) show(true); }}
        onBlur={() => { setOpen(false); setQuery(''); }}
        onKeyDown={onKeyDown}
        spellCheck={false}
        autoComplete="off"
        {...hover}
      />
      <button
        type="button"
        className={styles.toggle}
        aria-label={t('Show all technologies', 'Voir toutes les technos')}
        tabIndex={-1}
        // keep focus in the input so blur doesn't close the list we're opening
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => { if (open) { show(false); } else { input.current.focus(); show(true); } }}
        {...hover}
      >
        <span className={`${styles.chevron} ${open ? styles.chevronUp : ''}`} aria-hidden="true" />
      </button>

      {open && (
        <ul ref={list} id={`${id}-list`} role="listbox" className={styles.list} aria-label={label}>
          {items.map((item, i) => (
            <li
              key={item}
              id={optionId(i)}
              role="option"
              aria-selected={item === value}
              className={`${styles.option} ${i === active ? styles.active : ''}`}
              onMouseDown={(e) => e.preventDefault()}
              onMouseEnter={() => setActive(i)}
              onClick={() => pick(item)}
            >
              {item === 'all' ? anyLabel : item}
            </li>
          ))}
          {items.length === 0 && (
            <li className={styles.empty} role="presentation">
              {t(`nothing called “${query.trim()}” here.`, `rien qui s’appelle « ${query.trim()} ».`)}
              <span>{t('try another name, or clear to see them all', 'essaie un autre nom, ou efface pour tout voir')}</span>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
