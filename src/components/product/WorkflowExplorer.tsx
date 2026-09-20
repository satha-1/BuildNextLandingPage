import { useState } from 'react'
import type { WorkflowStep } from '../../content/workflows'
import { cn } from '../../lib/cn'
import { ScreenshotFrame } from '../ui/ScreenshotFrame'
import { screenshots } from '../../content/screenshots'

export function WorkflowExplorer({
  steps,
  ariaLabel,
}: {
  steps: WorkflowStep[]
  ariaLabel: string
}) {
  const [active, setActive] = useState(0)
  const current = steps[active] ?? steps[0]

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16 lg:items-start">
      <div className="min-w-0">
        <div
          className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label={ariaLabel}
        >
          {steps.map((step, index) => (
            <button
              key={step.id}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-controls={`workflow-panel-${step.id}`}
              id={`workflow-tab-${step.id}`}
              onClick={() => setActive(index)}
              className={cn(
                'shrink-0 border px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal',
                index === active
                  ? 'border-navy bg-navy text-offwhite'
                  : 'border-navy/15 bg-white text-navy hover:border-navy/30',
              )}
            >
              {step.label}
            </button>
          ))}
        </div>

        <div className="mt-6 hidden sm:flex flex-wrap items-center gap-1 text-xs font-medium uppercase tracking-[0.14em] text-navy/45">
          {steps.map((step, index) => (
            <span key={step.id} className="inline-flex items-center gap-1">
              {index > 0 ? <span aria-hidden className="text-teal">→</span> : null}
              <span className={cn(index === active && 'text-teal')}>{step.label}</span>
            </span>
          ))}
        </div>

        <div
          id={`workflow-panel-${current.id}`}
          role="tabpanel"
          aria-labelledby={`workflow-tab-${current.id}`}
          className="mt-8 min-w-0"
        >
          <h3 className="font-display text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
            {current.title}
          </h3>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-navy/70">{current.copy}</p>
        </div>
      </div>

      <div className="min-w-0">
        <ScreenshotFrame asset={screenshots[current.screenshot]} priority={active === 0} />
      </div>
    </div>
  )
}
