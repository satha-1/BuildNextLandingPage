import { heroPathStages } from '../../content/lifecycle'

export function OperationalPath() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-midnight/70 p-5 sm:p-7">
      <svg
        viewBox="0 0 560 420"
        className="h-auto w-full"
        role="img"
        aria-label="Abstract land project plan with an operational path from inquiry to deed"
      >
        <title>Land operations path</title>
        <g opacity="0.35" stroke="#DCE5E4" strokeWidth="0.6" fill="none">
          {Array.from({ length: 8 }).map((_, r) =>
            Array.from({ length: 6 }).map((_, c) => (
              <rect
                key={`${r}-${c}`}
                x={24 + c * 88}
                y={36 + r * 46}
                width="78"
                height="40"
                rx="2"
              />
            )),
          )}
        </g>
        <path
          className="land-path"
          d="M60 360 L 130 300 L 210 250 L 310 210 L 400 150 L 490 80"
          fill="none"
          stroke="#41D9D0"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {[
          [60, 360],
          [130, 300],
          [210, 250],
          [310, 210],
          [400, 150],
          [490, 80],
        ].map(([x, y], i) => (
          <g key={heroPathStages[i]}>
            <circle cx={x} cy={y} r="6" fill="#0A9D91" />
            <circle cx={x} cy={y} r="10" fill="none" stroke="#41D9D0" strokeOpacity="0.45" />
            <text
              x={x + 14}
              y={y - 10}
              fill="#F5F7F5"
              fontSize="11"
              fontFamily="Plus Jakarta Sans, Inter, sans-serif"
              letterSpacing="0.04em"
            >
              {heroPathStages[i]}
            </text>
          </g>
        ))}
      </svg>

      <p className="pointer-events-none absolute bottom-4 right-4 max-w-[220px] rounded-md border border-cyan/30 bg-navy/90 px-3 py-2 text-left text-xs leading-snug text-offwhite shadow-lg">
        <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan">
          Product behavior
        </span>
        Plot reserved after verified advance
      </p>
    </div>
  )
}
