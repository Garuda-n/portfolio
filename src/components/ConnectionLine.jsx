export default function ConnectionLine({ x1, y1, x2, y2, animated = true, color = 'var(--color-border)' }) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={color}
      strokeWidth="1"
      strokeDasharray={animated ? '4 4' : 'none'}
      style={animated ? {
        animation: 'dash-flow 1.5s linear infinite',
      } : {}}
      opacity="0.3"
    />
  );
}
