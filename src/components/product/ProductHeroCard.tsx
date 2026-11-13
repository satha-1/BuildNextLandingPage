import type { ReactNode } from 'react'
import { usePrefersReducedMotion } from '../ui/Container'

/**
 * Card rendered in PageHero's `overlap` slot on product pages: media on the
 * left, quick facts on the right. It straddles the banner edge.
 */
export function ProductHeroCard({
  image,
  imageAlt,
  video,
  videoLabel,
  facts,
  aside,
}: {
  image: string
  imageAlt: string
  video?: string
  videoLabel?: string
  facts: readonly { value: string; label: string }[]
  aside?: ReactNode
}) {
  const reduceMotion = usePrefersReducedMotion()

  return (
    <div className="grid overflow-hidden rounded-[1.75rem] bg-white shadow-[0_40px_100px_-30px_rgb(6_13_24/55%)] ring-1 ring-navy/[0.06] lg:grid-cols-[1.6fr_1fr]">
      <div className="relative bg-midnight">
        {video ? (
          <video
            className="aspect-video h-full w-full bg-midnight object-cover"
            src={video}
            poster={image}
            controls
            autoPlay={!reduceMotion}
            muted
            loop
            playsInline
            preload={reduceMotion ? 'metadata' : 'auto'}
            aria-label={videoLabel ?? imageAlt}
          />
        ) : (
          <img
            src={image}
            alt={imageAlt}
            className="aspect-video h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
        )}
      </div>
      <div className="flex flex-col justify-between gap-8 p-7 sm:p-9">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-7">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="sr-only">{fact.label}</dt>
              <dd className="font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">{fact.value}</dd>
              <dd className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-muted">{fact.label}</dd>
            </div>
          ))}
        </dl>
        {aside}
      </div>
    </div>
  )
}
