import { useState, useEffect } from 'react';
import { useNavScroll } from '../../controllers/useNavScroll';
import { useHover } from '../../context/CursorContext';
import styles from './Nav.module.css';

const links = [
  { label: 'intro',   section: 'intro'        },
  { label: 'work',    section: 'projects'     },
  { label: 'skills',  section: 'toolbox'      },
  { label: 'wins',    section: 'achievements' },
  { label: 'xp',      section: 'experience'  },
  { label: 'cv',      href: '/cv', page: 'cv' },
  { label: 'hi',      section: 'contact'      },
].map((l) => l.section ? { ...l, href: `/${l.section}` } : l);

function scrollToSection(section) {
  document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  history.pushState(null, '', `/${section}`);
}

export default function Nav({ onLogoClick, onCvClick }) {
  const scrolled     = useNavScroll();
  const hover        = useHover();
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

        {/* Desktop tag chips */}
        <div className={styles.tags}>
          {links.map((link, i) => (
            <a
              key={link.label}
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
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile full-screen drawer */}
      <div
        className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}
        aria-hidden={!open}
      >
        {links.map((link) => (
          <a
            key={link.label}
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
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
