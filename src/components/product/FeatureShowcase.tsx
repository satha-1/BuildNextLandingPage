import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { platformFeatures, type PlatformFeature } from '../../content/platformFeatures'
import { cn } from '../../lib/cn'
import { Container, sectionY } from '../ui/Container'

const AUTO_MS = 5500

function FeaturePreview({
  rows,
  invert,
}: {
  rows: Array<{ label: string; value: string; tone?: 'ok' | 'warn' | 'muted' }>
  invert?: boolean
}) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl shadow-[var(--shadow-lift)] ring-1',
        invert ? 'bg-white/95 ring-white/20' : 'bg-white ring-navy/[0.08]',
      )}
    >
      <div
        className={cn(
          'flex items-center gap-2 border-b px-4 py-3',
          invert ? 'border-navy/10' : 'border-navy/[0.06]',
        )}
      >
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden />
        <span className="ml-2 text-[11px] font-medium text-muted">BuildNext360</span>
      </div>
      <div className="space-y-3 p-5 sm:p-6">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between gap-4 rounded-xl bg-surface px-4 py-3"
          >
            <span className="text-sm text-muted">{row.label}</span>
            <span
              className={cn(
                'text-sm font-semibold',
                row.tone === 'ok' && 'text-teal',
                row.tone === 'warn' && 'text-amber-700',
                row.tone === 'muted' && 'text-navy/55',
                !row.tone && 'text-navy',
              )}
            >
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function MainFeatureBlock({ feature, invert }: { feature: PlatformFeature; invert: boolean }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  const details = feature.details
  const count = details.length
  const detail = details[index] ?? details[0]

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % count) + count) % count)
    },
    [count],
  )

  const step = useCallback(
    (direction: -1 | 1) => {
      goTo(index + direction)
    },
    [goTo, index],
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReducedMotion(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (paused || reducedMotion || count < 2) return
    const id = window.setInterval(() => goTo(index + 1), AUTO_MS)
    return () => window.clearInterval(id)
  }, [paused, reducedMotion, count, goTo, index])

  if (!detail) return null

  const navBtn = invert
    ? 'inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-light'
    : 'inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/12 bg-white text-navy/70 transition-colors hover:border-navy/25 hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal'

  return (
    <section
      className={cn(invert ? 'bg-navy' : 'bg-surface', sectionY)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPaused(false)
      }}
    >
      <Container>
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="min-w-0">
            <p
              className={cn(
                'text-[11px] font-semibold uppercase tracking-[0.16em]',
                invert ? 'text-teal-light' : 'text-teal',
              )}
            >
              {feature.eyebrow}
            </p>
            <h2
              className={cn(
                'mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem]',
                invert ? 'text-white' : 'text-navy',
              )}
            >
              {feature.title}
            </h2>
            <p
              className={cn(
                'mt-5 max-w-xl text-base leading-relaxed sm:text-lg',
                invert ? 'text-white/70' : 'text-muted',
              )}
            >
              {feature.description}
            </p>

            <div
              key={detail.id}
              className={cn(
                'mt-8 max-w-md rounded-2xl p-5',
                invert ? 'bg-teal/15 ring-1 ring-teal/25' : 'bg-teal/[0.08] ring-1 ring-teal/15',
                !reducedMotion && 'animate-[feature-fade_420ms_ease-out]',
              )}
            >
              <p className={cn('font-display text-lg font-semibold', invert ? 'text-white' : 'text-navy')}>
                {detail.title}
              </p>
              <p className={cn('mt-2 text-sm leading-relaxed', invert ? 'text-white/70' : 'text-muted')}>
                {detail.copy}
              </p>
            </div>

            <div
              className="mt-8 flex items-center gap-4"
              role="region"
              aria-roledescription="carousel"
              aria-label={`${feature.title} details`}
            >
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className={navBtn}
                  aria-label={`Previous ${feature.title} detail`}
                  onClick={() => step(-1)}
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden />
                </button>
                <button
                  type="button"
                  className={navBtn}
                  aria-label={`Next ${feature.title} detail`}
                  onClick={() => step(1)}
                >
                  <ChevronRight className="h-4 w-4" aria-hidden />
                </button>
              </div>
              <div className="flex items-center gap-1.5" role="tablist" aria-label={`${feature.title} sub-features`}>
                {details.map((item, i) => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={item.title}
                    onClick={() => goTo(i)}
                    className={cn(
                      'rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal',
                      i === index
                        ? invert
                          ? 'h-2 w-6 bg-white'
                          : 'h-2 w-6 bg-navy'
                        : invert
                          ? 'h-2 w-2 bg-white/30 hover:bg-white/50'
                          : 'h-2 w-2 bg-navy/20 hover:bg-navy/35',
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          <div
            key={detail.id}
            className={cn('min-w-0', !reducedMotion && 'animate-[feature-fade_420ms_ease-out]')}
          >
            <FeaturePreview rows={detail.previewRows} invert={invert} />
            <p className="sr-only" aria-live="polite">
              {detail.title}
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export function FeatureShowcaseSection() {
  return (
    <div id="features" className="scroll-mt-24 border-y border-navy/[0.06]">
      {platformFeatures.map((feature, index) => (
        <MainFeatureBlock key={feature.id} feature={feature} invert={index % 2 === 1} />
      ))}
    </div>
  )
}
