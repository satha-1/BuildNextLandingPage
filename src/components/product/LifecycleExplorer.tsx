import { useState } from 'react'
import { lifecycleStages } from '../../content/lifecycle'
import { cn } from '../../lib/cn'

export function LifecycleExplorer() {
  const [active, setActive] = useState(lifecycleStages[0].id)
  const current = lifecycleStages.find((s) => s.id === active) ?? lifecycleStages[0]

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
      <div
        role="tablist"
        aria-label="Land sales lifecycle"
        className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible"
      >
        {lifecycleStages.map((stage) => {
          const selected = stage.id === active
          return (
            <button
              key={stage.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(stage.id)}
              className={cn(
                'min-w-[11rem] rounded-lg border px-4 py-3 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan lg:min-w-0',
                selected
                  ? 'border-cyan/50 bg-navy text-offwhite'
                  : 'border-navy/10 bg-white text-navy hover:border-teal/40',
              )}
            >
              <span className="block font-mono text-[10px] tracking-[0.18em] text-teal">{stage.number}</span>
              <span className="mt-1 block font-display text-base font-semibold">{stage.title}</span>
            </button>
          )
        })}
      </div>

      <div
        role="tabpanel"
        className="relative overflow-hidden rounded-2xl border border-navy/10 bg-navy p-6 text-offwhite sm:p-8"
      >
        <p className="font-mono text-xs tracking-[0.2em] text-cyan">{current.number}</p>
        <h3 className="mt-3 font-display text-2xl font-semibold">{current.title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-soft">{current.summary}</p>
        <p className="mt-4 text-sm leading-relaxed text-offwhite/80">{current.detail}</p>
        <div className="mt-8 grid grid-cols-6 gap-2" aria-hidden>
          {lifecycleStages.map((stage) => (
            <div
              key={stage.id}
              className={cn(
                'h-1 rounded-full',
                stage.id === current.id ? 'bg-cyan' : 'bg-white/15',
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
