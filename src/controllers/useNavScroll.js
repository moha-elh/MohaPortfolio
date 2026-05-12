import { useEffect, useState } from 'react';

/**
 * Controller: useNavScroll
 * Returns true once the page has scrolled past the threshold (default 40px).
 * Used by Nav to show/hide the bottom border.
 */
export function useNavScroll(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [threshold]);

  return scrolled;
}
