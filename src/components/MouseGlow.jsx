import { useEffect, useRef } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function MouseGlow() {
  const glowRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const glow = glowRef.current;
    if (!glow) return;

    let frame;
    const handleMouseMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        glow.style.setProperty('--x', `${e.clientX}px`);
        glow.style.setProperty('--y', `${e.clientY}px`);
        glow.style.opacity = '1';
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frame);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none opacity-0 transition-opacity duration-700"
      style={{
        background:
          'radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(0, 229, 255, 0.08), transparent 80%)',
      }}
    />
  );
}
