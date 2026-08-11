import { useEffect } from 'react';

export function useKeyboard({ onEscape, onNumber }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === 'Escape' && onEscape) {
        e.preventDefault();
        onEscape();
      }

      if (onNumber && e.key >= '1' && e.key <= '9') {
        e.preventDefault();
        onNumber(parseInt(e.key, 10));
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onEscape, onNumber]);
}
