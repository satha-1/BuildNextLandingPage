import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { ScreenshotKey } from '../../content/screenshots'
import { screenshots } from '../../content/screenshots'
import { cn } from '../../lib/cn'
import { ScreenshotFrame } from './ScreenshotFrame'

export function ScreenshotCarousel({
  keys,
  ariaLabel,
  resetKey,
}: {
  keys: ScreenshotKey[]
  ariaLabel: string
  resetKey?: string
}) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(keys.length > 1)
  const [activeIndex, setActiveIndex] = useState(0)

  const updateScrollState = useCallback(() => {
    const el = trackRef.current
    if (!el) return

    const maxScroll = el.scrollWidth - el.clientWidth
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft < maxScroll - 4)

    const slides = el.querySelectorAll<HTMLElement>('[data-slide]')
    if (slides.length === 0) return

    const center = el.scrollLeft + el.clientWidth / 2
    let closest = 0
    let closestDistance = Number.POSITIVE_INFINITY

    slides.forEach((slide, index) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2
      const distance = Math.abs(center - slideCenter)
      if (distance < closestDistance) {
        closestDistance = distance
        closest = index
      }
    })

    setActiveIndex(closest)
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    el.scrollTo({ left: 0, behavior: 'auto' })
    setActiveIndex(0)
    updateScrollState()
  }, [resetKey, keys, updateScrollState])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    updateScrollState()
    el.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)
    return () => {
      el.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [updateScrollState])

  const scrollToIndex = (index: number) => {
    const el = trackRef.current
    if (!el) return
    const slide = el.querySelectorAll<HTMLElement>('[data-slide]')[index]
    if (!slide) return
    el.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' })
  }

  const scrollStep = (direction: 'prev' | 'next') => {
    const next =
      direction === 'next'
        ? Math.min(activeIndex + 1, keys.length - 1)
        : Math.max(activeIndex - 1, 0)
    scrollToIndex(next)
  }

  if (keys.length === 0) return null

  const navBtn =
    'inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-navy shadow-[var(--shadow-soft)] ring-1 ring-navy/[0.08] transition-all duration-200 hover:shadow-[var(--shadow-lift)] disabled:cursor-not-allowed disabled:opacity-35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal'

  return (
    <div className="relative min-w-0">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-muted ring-1 ring-navy/[0.06]">
          {activeIndex + 1} <span className="text-navy/30">/</span> {keys.length}
        </p>
        {keys.length > 1 ? (
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => scrollStep('prev')} disabled={!canPrev} aria-label="Previous screenshot" className={navBtn}>
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button type="button" onClick={() => scrollStep('next')} disabled={!canNext} aria-label="Next screenshot" className={navBtn}>
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        ) : null}
      </div>

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="region"
        aria-label={ariaLabel}
        aria-roledescription="carousel"
      >
        {keys.map((key, index) => (
          <div
            key={key}
            data-slide
            className={cn(
              'w-[88%] shrink-0 snap-center transition-opacity duration-300 sm:w-[78%] lg:w-[calc(100%-5rem)]',
              index !== activeIndex && 'opacity-90',
            )}
            aria-hidden={index !== activeIndex}
          >
            <ScreenshotFrame asset={screenshots[key]} priority={index === 0} />
          </div>
        ))}
      </div>

      {keys.length > 1 ? (
        <div className="mt-6 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Screenshot navigation">
          {keys.map((key, index) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Screenshot ${index + 1}`}
              onClick={() => scrollToIndex(index)}
              className={cn(
                'h-2 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal',
                index === activeIndex ? 'w-8 bg-teal' : 'w-2 bg-navy/15 hover:bg-navy/25',
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}
