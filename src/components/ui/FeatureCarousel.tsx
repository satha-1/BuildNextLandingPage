import {
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  FolderKanban,
  LayoutGrid,
  MapPinned,
  Receipt,
  Wallet,
} from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { MainFeature } from '../../content/homeContent'
import { cn } from '../../lib/cn'
import { StockImage } from './StockImage'

const AUTO_MS = 4500

const featureIcons = {
  pipeline: ClipboardList,
  inventory: MapPinned,
  reservation: LayoutGrid,
  collections: Wallet,
  receipts: Receipt,
  projects: FolderKanban,
} as const

export function FeatureCarousel({
  features,
  ariaLabel = 'Main features',
}: {
  features: MainFeature[]
  ariaLabel?: string
}) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [animKey, setAnimKey] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const count = features.length
  const feature = features[index] ?? features[0]
  const Icon = featureIcons[feature.icon]

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % count) + count) % count)
      setAnimKey((k) => k + 1)
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
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % count)
      setAnimKey((k) => k + 1)
    }, AUTO_MS)
    return () => window.clearInterval(id)
  }, [paused, reducedMotion, count])

  // Preload neighboring images so slide changes feel instant
  useEffect(() => {
    if (count < 2) return
    const next = features[(index + 1) % count]
    const prev = features[(index - 1 + count) % count]
    for (const slide of [next, prev]) {
      if (!slide?.image) continue
      const img = new Image()
      img.src = slide.image
    }
  }, [features, index, count])

  if (!feature) return null

  const navBtn =
    'inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy/12 bg-white text-navy/70 transition-colors duration-200 hover:border-navy/25 hover:bg-navy/[0.03] hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal'

  return (
    <div
      className="flex min-w-0 flex-col"
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false)
        }
      }}
      onTouchStart={(e) => {
        touchStartX.current = e.changedTouches[0]?.clientX ?? null
      }}
      onTouchEnd={(e) => {
        const start = touchStartX.current
        const end = e.changedTouches[0]?.clientX
        touchStartX.current = null
        if (start == null || end == null) return
        const delta = end - start
        if (Math.abs(delta) < 40) return
        step(delta < 0 ? 1 : -1)
      }}
    >
      <div
        key={animKey}
        className={cn(!reducedMotion && 'animate-[feature-fade_420ms_ease-out]')}
      >
        <StockImage
          src={feature.image}
          alt={feature.imageAlt}
          className="aspect-[16/10] w-full rounded-xl shadow-none ring-0"
          priority={index === 0}
        />

        <div className="mt-3 rounded-xl border border-navy/[0.06] bg-navy/[0.015] p-4 sm:mt-4 sm:p-5">
          <div className="flex items-start gap-3">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/[0.12] text-teal"
              aria-hidden
            >
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <div className="min-w-0 pt-0.5">
              <p className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 text-[11px] leading-snug">
                <span className="font-semibold uppercase tracking-[0.14em] text-teal">
                  {feature.category}
                </span>
                <span className="text-muted/80">{feature.tagline}</span>
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-navy sm:text-[1.35rem]">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
                {feature.description}
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className={navBtn}
                aria-label="Previous feature"
                onClick={() => step(-1)}
              >
                <ChevronLeft className="h-4 w-4" aria-hidden />
              </button>
              <button
                type="button"
                className={navBtn}
                aria-label="Next feature"
                onClick={() => step(1)}
              >
                <ChevronRight className="h-4 w-4" aria-hidden />
              </button>
            </div>

            <div className="flex items-center gap-1.5" role="tablist" aria-label="Feature slides">
              {features.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`${item.title} (${i + 1} of ${count})`}
                  onClick={() => goTo(i)}
                  className={cn(
                    'rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal',
                    i === index ? 'h-2 w-2.5 bg-navy' : 'h-2 w-2 bg-navy/20 hover:bg-navy/35',
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {feature.title}
      </p>
    </div>
  )
}
