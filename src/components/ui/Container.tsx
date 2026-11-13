import { useEffect, useState, type ReactNode } from 'react'
import { cn } from '../../lib/cn'

export function Container({
  children,
  className,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'header' | 'footer' | 'nav'
}) {
  return (
    <Tag className={cn('mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 2xl:max-w-[max(80rem,78vw)]', className)}>{children}</Tag>
  )
}

/** Small uppercase label with a leading rule, used above headings. */
export function Eyebrow({
  children,
  invert,
  align = 'left',
  className,
}: {
  children: ReactNode
  invert?: boolean
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <p
      className={cn(
        'flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] sm:text-xs',
        align === 'center' && 'justify-center',
        invert ? 'text-teal-light' : 'text-teal',
        className,
      )}
    >
      <span className="eyebrow-rule" aria-hidden />
      {children}
      {align === 'center' ? <span className="eyebrow-rule" aria-hidden /> : null}
    </p>
  )
}

/** Oversized faded word that sits behind a heading (Skyline "WHY?" / "FEATURED"). */
export function GhostWord({
  word,
  invert,
  outline,
  className,
}: {
  word: string
  invert?: boolean
  outline?: boolean
  className?: string
}) {
  return (
    <span
      aria-hidden
      className={cn(
        'ghost-word absolute select-none',
        invert && 'ghost-word--dark',
        outline && 'ghost-word--outline',
        className,
      )}
    >
      {word}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  invert,
  className,
  align = 'left',
  watermark,
}: {
  eyebrow?: string
  title: string
  copy?: string
  invert?: boolean
  className?: string
  align?: 'left' | 'center'
  /** Large ghost word rendered behind the heading. */
  watermark?: string
}) {
  return (
    <div
      className={cn(
        'relative max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        watermark && 'pt-10 sm:pt-14',
        className,
      )}
    >
      {watermark ? (
        <GhostWord
          word={watermark}
          invert={invert}
          className={cn(
            '-top-2 sm:-top-4',
            align === 'center' ? 'left-1/2 -translate-x-1/2' : '-left-1 sm:-left-2',
          )}
        />
      ) : null}
      <div className="relative">
        {eyebrow ? (
          <Eyebrow invert={invert} align={align} className="mb-4">
            {eyebrow}
          </Eyebrow>
        ) : null}
        <h2
          className={cn(
            'font-display text-[1.75rem] font-extrabold uppercase leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.75rem]',
            invert ? 'text-white' : 'text-navy',
          )}
        >
          {title}
        </h2>
        {copy ? (
          <p
            className={cn(
              'mt-5 text-base leading-relaxed sm:text-lg',
              align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl',
              invert ? 'text-white/75' : 'text-muted',
            )}
          >
            {copy}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export const sectionY = 'py-20 sm:py-24'
export const sectionGap = 'mt-12 sm:mt-14'

export function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduce(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  return reduce
}

/**
 * Full-bleed photo banner hero used by every inner page.
 * `overlap` renders a card that straddles the banner's bottom edge and the
 * section below — the Skyline "connected sections" motif.
 */
export function PageHero({
  eyebrow,
  title,
  copy,
  children,
  image,
  imageAlt,
  watermark,
  overlap,
}: {
  eyebrow: string
  title: string
  copy: string
  children?: ReactNode
  image?: string
  imageAlt?: string
  watermark?: string
  overlap?: ReactNode
}) {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-midnight">
        {image ? (
          <img
            src={image}
            alt={imageAlt ?? ''}
            className="absolute inset-0 -z-20 h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
        ) : null}
        <div className="banner-shade absolute inset-0 -z-10" aria-hidden />
        <div className="blueprint absolute inset-0 -z-10 opacity-60" aria-hidden />
        {watermark ? (
          <GhostWord
            word={watermark}
            invert
            outline
            className="-bottom-3 left-1/2 -z-10 -translate-x-1/2 sm:-bottom-6"
          />
        ) : null}

        <Container className={cn('relative pt-32 sm:pt-40', overlap ? 'pb-36 sm:pb-44' : 'pb-20 sm:pb-28')}>
          <div className="max-w-3xl">
            <Eyebrow invert>{eyebrow}</Eyebrow>
            <h1 className="mt-5 font-display text-[2.4rem] font-extrabold uppercase leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[4.25rem]">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">{copy}</p>
            {children ? <div className="mt-10">{children}</div> : null}
          </div>
        </Container>
      </section>

      {overlap ? (
        <div className="relative z-10 -mt-24 sm:-mt-32">
          <Container>{overlap}</Container>
        </div>
      ) : null}
    </>
  )
}

/** Stat figures in Skyline's big-number style. */
export function StatRow({
  items,
  invert,
  className,
}: {
  items: readonly { value: string; label: string }[]
  invert?: boolean
  className?: string
}) {
  return (
    <dl className={cn('grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4', className)}>
      {items.map((item) => (
        <div key={item.label} className="min-w-0">
          <dt className="sr-only">{item.label}</dt>
          <dd
            className={cn(
              'font-display text-4xl font-extrabold tracking-tight sm:text-5xl',
              invert ? 'text-white' : 'text-navy',
            )}
          >
            {item.value}
          </dd>
          <dd
            className={cn(
              'mt-2 text-[11px] font-bold uppercase tracking-[0.16em]',
              invert ? 'text-white/60' : 'text-muted',
            )}
          >
            {item.label}
          </dd>
        </div>
      ))}
    </dl>
  )
}

export function SegmentTabs<T extends string>({
  value,
  onChange,
  options,
  ariaLabel,
}: {
  value: T
  onChange: (value: T) => void
  options: { value: T; label: string }[]
  ariaLabel: string
}) {
  return (
    <div
      className="inline-flex flex-wrap gap-1 rounded-xl bg-navy/[0.04] p-1 ring-1 ring-navy/[0.06]"
      role="tablist"
      aria-label={ariaLabel}
    >
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          role="tab"
          aria-selected={value === opt.value}
          onClick={() => onChange(opt.value)}
          className={cn(
            'rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal',
            value === opt.value
              ? 'bg-white text-navy shadow-sm'
              : 'text-muted hover:text-navy',
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
