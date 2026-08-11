export default function FlowDiagram({ steps, color = 'var(--color-accent)', label, onStepClick }) {
  return (
    <div className="flex flex-col items-center w-full" role="list" aria-label={label}>
      {label && (
        <div className="font-mono text-xs tracking-[0.2em] uppercase text-text-muted mb-6">
          {label}
        </div>
      )}
      {steps.map((step, i) => (
        <div key={step.id} className="flex flex-col items-center w-full" role="listitem">
          {/* Step Node */}
          <button
            onClick={() => onStepClick?.(step)}
            className={`
              group relative w-full max-w-[320px] px-5 py-4
              bg-bg-card border border-border rounded-lg
              transition-all duration-300 ease-out
              hover:bg-bg-card-hover hover:border-border-active
              ${onStepClick ? 'cursor-pointer' : 'cursor-default'}
            `}
            style={{ '--step-color': color }}
            aria-label={step.label}
          >
            <div
              className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-lg transition-all duration-300"
              style={{ backgroundColor: color, opacity: 0.5 }}
            />
            <div
              className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-lg transition-all duration-300 group-hover:opacity-100 opacity-0"
              style={{ backgroundColor: color }}
            />
            <div className="flex items-start gap-3">
              <span
                className="font-mono text-[10px] mt-0.5 shrink-0 tracking-wider"
                style={{ color }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-col gap-1 text-left">
                <span className="font-mono text-sm font-medium text-text-primary tracking-wide">
                  {step.label}
                </span>
                {step.desc && (
                  <span className="text-xs text-text-muted leading-relaxed">
                    {step.desc}
                  </span>
                )}
              </div>
            </div>
          </button>

          {/* Connector */}
          {i < steps.length - 1 && (
            <div className="flex flex-col items-center py-1">
              <div
                className="w-[1px] h-6"
                style={{ backgroundColor: color, opacity: 0.25 }}
              />
              <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                <path d="M4 6L0 0H8L4 6Z" fill={color} opacity="0.4" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
