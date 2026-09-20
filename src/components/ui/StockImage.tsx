import { cn } from '../../lib/cn'

export function StockImage({
  src,
  alt,
  className,
  priority,
  overlay,
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
  overlay?: 'dark' | 'light' | 'none'
}) {
  return (
    <div
      className={cn(
        'relative min-w-0 overflow-hidden rounded-2xl bg-navy/[0.04] ring-1 ring-navy/[0.06] shadow-[var(--shadow-soft)]',
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className="h-full w-full max-w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
      />
      {overlay === 'dark' ? (
        <div className="absolute inset-0 bg-navy/30" aria-hidden />
      ) : overlay === 'light' ? (
        <div className="absolute inset-0 bg-white/10" aria-hidden />
      ) : null}
    </div>
  )
}
