import { useEffect } from 'react';

const SEQ = [
  'ArrowUp','ArrowUp','ArrowDown','ArrowDown',
  'ArrowLeft','ArrowRight','ArrowLeft','ArrowRight',
  'b','a',
];

export function useKonami(onTrigger) {
  useEffect(() => {
    let idx = 0;
    const onKey = (e) => {
      if (e.key === SEQ[idx]) {
        idx++;
        if (idx === SEQ.length) { idx = 0; onTrigger(); }
      } else {
        idx = e.key === SEQ[0] ? 1 : 0;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onTrigger]);
}
