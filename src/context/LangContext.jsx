import { createContext, useContext, useEffect, useState, useCallback } from 'react';

const LangCtx = createContext(null);

/**
 * Initial language: ?lang= (set by the CV QR code) → saved choice → browser
 * language. Anything that isn't French falls back to English.
 */
function detectLang() {
  const param = new URLSearchParams(window.location.search).get('lang');
  if (param === 'fr' || param === 'en') return param;
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'fr' || saved === 'en') return saved;
  } catch {}
  return (navigator.languages?.[0] || navigator.language || '').toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(detectLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = lang === 'fr' ? 'Portfolio de Moha' : "Moha's Portfolio";
  }, [lang]);

  const setLang = useCallback((next) => {
    setLangState(next);
    try { localStorage.setItem('lang', next); } catch {}
  }, []);

  /**
   * t('back', 'retour')          → picks by language
   * t({ en: '...', fr: '...' })  → picks a model field; plain values pass through
   */
  const t = useCallback(
    (en, fr) => (fr === undefined ? (en?.[lang] ?? en) : lang === 'fr' ? fr : en),
    [lang]
  );

  return (
    <LangCtx.Provider value={{ lang, setLang, t }}>
      {children}
    </LangCtx.Provider>
  );
}

export const useLang = () => useContext(LangCtx);
