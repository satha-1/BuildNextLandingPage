import { useState } from 'react'
import type { ScreenshotAsset } from '../../content/screenshots'
import { cn } from '../../lib/cn'

export function ScreenshotFrame({
  asset,
  className,
  priority,
  variant = 'default',
}: {
  asset: ScreenshotAsset
  className?: string
  priority?: boolean
  variant?: 'default' | 'wide'
}) {
  const [failed, setFailed] = useState(false)

  return (
    <figure
      className={cn(
        'min-w-0 overflow-hidden rounded-2xl bg-white ring-1 ring-navy/[0.08] shadow-[var(--shadow-lift)]',
        variant === 'wide' && 'lg:ml-auto lg:max-w-[92%]',
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3 border-b border-navy/[0.06] bg-offwhite/80 px-4 py-3 backdrop-blur-sm">
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <figcaption className="truncate font-mono text-[10px] tracking-wide text-muted">
          {asset.filename}
        </figcaption>
      </div>
      {failed ? (
        <div
          className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-offwhite to-soft/40 px-6 text-center"
          role="img"
          aria-label={`Product screenshot placeholder for ${asset.filename}`}
        >
          <p className="font-display text-sm font-semibold text-navy">Screenshot required</p>
          <p className="break-all font-mono text-xs text-muted">/public/screenshots/{asset.filename}</p>
        </div>
      ) : (
        <img
          src={asset.src}
          alt={asset.alt}
          width={asset.width}
          height={asset.height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className="aspect-[16/10] h-auto w-full max-w-full object-contain object-top bg-offwhite"
          onError={() => setFailed(true)}
        />
      )}
    </figure>
  )
}
