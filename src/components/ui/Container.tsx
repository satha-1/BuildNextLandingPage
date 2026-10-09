import type { ReactNode } from 'react'
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

export function SectionHeading({
  eyebrow,
  title,
  copy,
  invert,
  className,
  align = 'left',
}: {
  eyebrow?: string
  title: string
  copy?: string
  invert?: boolean
  className?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow ? (
        <span
          className={cn(
            'mb-4 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]',
            invert ? 'bg-white/10 text-teal-light' : 'bg-teal/[0.08] text-teal',
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          'font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]',
          invert ? 'text-white' : 'text-navy',
        )}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed sm:text-lg',
            align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl',
            invert ? 'text-white/75' : 'text-muted',
          )}
        >
          {copy}
        </p>
      ) : null}
    </div>
  )
}

export const sectionY = 'py-16 sm:py-20'
export const sectionGap = 'mt-10 sm:mt-12'

export function PageHero({
  eyebrow,
  title,
  copy,
  children,
  image,
  imageAlt,
}: {
  eyebrow: string
  title: string
  copy: string
  children?: ReactNode
  image: string
  imageAlt: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-navy/[0.06] bg-navy">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_90%_10%,rgb(13_148_136/25%),transparent)]"
        aria-hidden
      />
      <Container className="relative py-16 sm:py-20">
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="min-w-0">
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80">
              {eyebrow}
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[3.25rem]">
              {title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">{copy}</p>
            {children ? <div className="mt-9">{children}</div> : null}
          </div>
          <div className="relative min-w-0">
            <div
              className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-teal/20 blur-3xl"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-lift)] ring-1 ring-white/10">
              <img
                src={image}
                alt={imageAlt}
                className="aspect-[4/3] h-auto w-full object-cover lg:aspect-[5/4]"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
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
