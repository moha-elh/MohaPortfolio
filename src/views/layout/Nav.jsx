import { useState, useEffect } from 'react';
import { useNavScroll } from '../../controllers/useNavScroll';
import { useHover } from '../../context/CursorContext';
import { useLang } from '../../context/LangContext';
import styles from './Nav.module.css';

const links = [
  { label: { en: 'intro',  fr: 'intro'    }, section: 'intro'        },
  { label: { en: 'work',   fr: 'projets'  }, section: 'projects'     },
  { label: { en: 'skills', fr: 'skills'   }, section: 'toolbox'      },
  { label: { en: 'wins',   fr: 'prix'     }, section: 'achievements' },
  { label: { en: 'xp',     fr: 'xp'       }, section: 'experience'   },
  { label: { en: 'cv',     fr: 'cv'       }, href: '/cv', page: 'cv' },
  { label: { en: 'hi',     fr: 'salut'    }, section: 'contact'      },
].map((l) => l.section ? { ...l, href: `/${l.section}` } : l);

function scrollToSection(section) {
  document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  history.pushState(null, '', `/${section}`);
}

export default function Nav({ onLogoClick, onCvClick }) {
  const scrolled     = useNavScroll();
  const hover        = useHover();
  const { lang, setLang, t } = useLang();
  const [open, setOpen]         = useState(false);
  const [activeHref, setActive] = useState('');

  useEffect(() => {
    const sectionLinks = links.filter((l) => l.section);
    const els = sectionLinks.map((l) => ({
      href: l.href,
      el: document.getElementById(l.section),
    })).filter((s) => s.el);

    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = els.find((s) => s.el === entry.target);
            if (match) setActive(match.href);
          }
        });
      },
      { threshold: 0.25 }
    );

    els.forEach((s) => observer.observe(s.el));
    return () => observer.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <button
          className={styles.logo}
          onClick={onLogoClick}
          aria-label="Open drawing canvas"
        >
          Moha
        </button>

        <div className={styles.right}>
        {/* Desktop tag chips */}
        <div className={styles.tags}>
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.tag} ${link.href === activeHref ? styles.active : ''}`}
              style={{ transform: `rotate(${(['-1deg','1deg','-0.5deg','1.5deg','-1deg','1deg','-0.5deg'])[i]})` }}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener' : undefined}
              onClick={
                link.page === 'cv'  ? (e) => { e.preventDefault(); onCvClick(); }
                : link.section      ? (e) => { e.preventDefault(); scrollToSection(link.section); }
                : undefined
              }
              {...hover}
            >
              {t(link.label)}
            </a>
          ))}
        </div>

        {/* Language toggle — visible on every breakpoint */}
        <button
          className={`${styles.tag} ${styles.lang}`}
          onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
          aria-label={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
          {...hover}
        >
          <img src="/assets/flags/gb.svg" alt="" width={16} height={12} className={lang === 'en' ? styles.langOn : undefined} />
          <img src="/assets/flags/fr.svg" alt="" width={16} height={12} className={lang === 'fr' ? styles.langOn : undefined} />
        </button>

        {/* Mobile hamburger */}
        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t('Close menu', 'Fermer le menu') : t('Open menu', 'Ouvrir le menu')}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
        </div>
      </nav>

      {/* Mobile full-screen drawer */}
      <div
        className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}
        aria-hidden={!open}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`${styles.drawerLink} ${link.href === activeHref ? styles.drawerLinkActive : ''}`}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener' : undefined}
            onClick={
              link.page === 'cv'  ? (e) => { e.preventDefault(); onCvClick(); close(); }
              : link.section      ? (e) => { e.preventDefault(); scrollToSection(link.section); close(); }
              : close
            }
          >
            {t(link.label)}
          </a>
        ))}
      </div>
    </>
  );
}
