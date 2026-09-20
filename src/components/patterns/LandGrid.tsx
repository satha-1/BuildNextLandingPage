import { cn } from '../../lib/cn'

export function LandGrid({
  className,
  tone = 'dark',
}: {
  className?: string
  tone?: 'dark' | 'light'
}) {
  const stroke = tone === 'dark' ? 'rgba(65,217,208,0.22)' : 'rgba(7,26,43,0.12)'
  const fill = tone === 'dark' ? 'rgba(10,157,145,0.06)' : 'rgba(10,157,145,0.05)'

  return (
    <svg
      className={cn('pointer-events-none absolute inset-0 h-full w-full', className)}
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id={`parcels-${tone}`} width="80" height="56" patternUnits="userSpaceOnUse">
          <path d="M0 56V0h80" fill="none" stroke={stroke} strokeWidth="0.6" />
          <path d="M20 0v56M40 0v56M60 0v56" stroke={stroke} strokeWidth="0.35" />
          <rect x="4" y="6" width="28" height="18" fill={fill} />
          <rect x="44" y="28" width="22" height="14" fill={fill} />
        </pattern>
      </defs>
      <rect width="1200" height="800" fill={`url(#parcels-${tone})`} />
      <path
        className="land-path"
        d="M80 720 C 180 520, 260 480, 380 430 S 560 280, 720 250 S 980 180, 1120 90"
        fill="none"
        stroke="#41D9D0"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        className="land-path-delayed"
        d="M40 120 C 220 180, 300 340, 480 360 S 760 500, 900 620 S 1040 700, 1160 740"
        fill="none"
        stroke="#0A9D91"
        strokeWidth="1"
        opacity="0.7"
      />
    </svg>
  )
}
