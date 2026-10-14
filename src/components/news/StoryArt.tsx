import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type StorySlug =
  | 'ai-construction-vendor-marketplace'
  | 'crm-ai-agent'
  | 'bn360-intelligence'

const vendors = [
  { name: 'Cement', meta: '42 t', className: 'col-start-1 row-start-1' },
  { name: 'Steel', meta: '18 t', className: 'col-start-3 row-start-1 justify-self-end' },
  { name: 'Formwork', meta: '120 m²', className: 'col-start-1 row-start-3' },
  { name: 'Electrical', meta: '1 lot', className: 'col-start-3 row-start-3 justify-self-end' },
]

function MarketplaceArt() {
  return (
    <div className="relative grid h-full w-full grid-cols-3 grid-rows-3 gap-2 overflow-hidden bg-[#07111f] p-4 sm:p-5">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgb(13_148_136/28%),transparent_58%)]"
        aria-hidden
      />
      {vendors.map((vendor) => (
        <div
          key={vendor.name}
          className={cn(
            'relative z-10 self-center rounded-xl border border-white/15 bg-white/10 px-2.5 py-2 backdrop-blur-md',
            vendor.className,
          )}
        >
          <p className="text-[11px] font-semibold text-white">{vendor.name}</p>
          <p className="text-[10px] text-teal-light">{vendor.meta}</p>
        </div>
      ))}
      <div className="relative z-10 col-start-2 row-start-2 flex items-center justify-center">
        <div className="w-full max-w-[7.5rem] rounded-2xl bg-white px-3 py-2.5 text-center shadow-[var(--shadow-lift)]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-teal">BOQ</p>
          <p className="mt-0.5 font-display text-sm font-semibold text-navy">Match</p>
        </div>
      </div>
    </div>
  )
}

function AgentArt() {
  return (
    <div className="relative flex h-full w-full flex-col justify-end overflow-hidden bg-[#07111f] p-4 sm:p-6">
      <div
        className="pointer-events-none absolute -right-8 -top-10 h-40 w-40 rounded-full bg-teal/30 blur-3xl"
        aria-hidden
      />
      <div className="relative space-y-3">
        <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-white/10 px-3 py-2 text-xs text-white/80">
          What is due on Block A / Lot 12?
        </div>
        <div className="max-w-[92%] rounded-2xl rounded-bl-md bg-white px-3 py-3 text-navy shadow-[var(--shadow-lift)]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-teal">CRM agent</p>
          <p className="mt-1.5 text-xs leading-relaxed sm:text-sm">
            Installment 08 of 24 · LKR 185,000 · reserved to N. Fernando. Call back today, 4:00 PM.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {['Schedule callback', 'Open the file'].map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-teal-light/40 bg-teal/15 px-2.5 py-1 text-[10px] font-semibold text-teal-light"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

const brief = [
  { label: 'Pipeline', value: 'LKR 12.4M' },
  { label: 'Open plots', value: '148' },
  { label: 'On-time', value: '92%' },
  { label: 'Budget used', value: '68%' },
]

function IntelligenceArt() {
  return (
    <div className="relative flex h-full w-full flex-col justify-center overflow-hidden bg-[#07111f] p-4 sm:p-6">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgb(20_184_166/25%),transparent_50%)]"
        aria-hidden
      />
      <div className="relative rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm sm:p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-teal-light">
          Morning brief
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {brief.map((item) => (
            <div key={item.label} className="rounded-xl bg-white px-3 py-2.5">
              <p className="text-[10px] text-muted">{item.label}</p>
              <p className="font-display text-sm font-semibold text-navy sm:text-base">{item.value}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[11px] leading-relaxed text-white/70">
          Next: three site visits unassigned, one installment due tomorrow.
        </p>
      </div>
    </div>
  )
}

const art: Record<StorySlug, () => ReactNode> = {
  'ai-construction-vendor-marketplace': MarketplaceArt,
  'crm-ai-agent': AgentArt,
  'bn360-intelligence': IntelligenceArt,
}

export function StoryArt({
  slug,
  className,
  label = 'Product illustration',
}: {
  slug: string
  className?: string
  label?: string
}) {
  const Art = art[slug as StorySlug] ?? IntelligenceArt
  return (
    <div className={cn('relative min-h-48 overflow-hidden', className)} role="img" aria-label={label}>
      <Art />
    </div>
  )
}
