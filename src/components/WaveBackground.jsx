import { useReducedMotion } from '../hooks/useReducedMotion';

const WAVE_PATH =
  'M0,64 C240,120 480,0 720,32 C960,64 1200,140 1440,80 L1440,200 L0,200 Z';

const LAYERS = [
  { bottom: '0px', height: 160, opacity: 0.16, duration: '18s', delay: '0s' },
  { bottom: '30px', height: 180, opacity: 0.1, duration: '26s', delay: '-8s' },
  { bottom: '70px', height: 200, opacity: 0.06, duration: '36s', delay: '-16s' },
];

function WaveLayer({ bottom, height, opacity, duration, delay, animate }) {
  return (
    <div
      className="absolute left-0 right-0 overflow-hidden"
      style={{ bottom, height }}
    >
      <div
        className={`flex w-[200%] ${animate ? 'animate-wave-scroll' : ''}`}
        style={{ animationDuration: duration, animationDelay: delay }}
      >
        {[0, 1].map((i) => (
          <svg
            key={i}
            className="w-1/2 h-full shrink-0"
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
          >
            <path d={WAVE_PATH} fill="var(--color-primary)" fillOpacity={opacity} />
          </svg>
        ))}
      </div>
    </div>
  );
}

export default function WaveBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 bottom-0 h-[260px] z-0 pointer-events-none overflow-hidden"
    >
      {LAYERS.map((layer) => (
        <WaveLayer key={layer.bottom} {...layer} animate={!prefersReducedMotion} />
      ))}
    </div>
  );
}
