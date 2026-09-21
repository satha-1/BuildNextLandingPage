import monogramPng from '../../assets/BuildNextLand (3).png'
import monogramJpg from '../../assets/monogram_logo.jpg'
import horizontalDark from '../../assets/DarkMode.jpg'
import stackedDark from '../../assets/stacked_dark_png.png'
import { cn } from '../../lib/cn'
import { siteConfig } from '../../content/siteConfig'

export const brandAssets = {
  /** Circular BN mark — primary icon for light UI, favicon-style uses. */
  monogram: monogramPng,
  /** Alternate monogram on navy square. */
  monogramNavy: monogramJpg,
  /** Horizontal BuildNext360 wordmark for dark backgrounds. */
  horizontalDark,
  /** Stacked BuildNext360 lockup for dark backgrounds / compact dark areas. */
  stackedDark,
} as const

type BrandLogoProps = {
  variant?: 'mark' | 'horizontal' | 'stacked'
  className?: string
  imgClassName?: string
  priority?: boolean
  /** Hide product name text next to the mark (mark variant only). */
  markOnly?: boolean
}

/**
 * Brand lockups:
 * - mark: monogram for light headers/footers
 * - horizontal / stacked: dark-background logos for navy sections
 */
export function BrandLogo({
  variant = 'mark',
  className,
  imgClassName,
  priority,
  markOnly = false,
}: BrandLogoProps) {
  if (variant === 'horizontal') {
    return (
      <img
        src={brandAssets.horizontalDark}
        alt={siteConfig.productName}
        width={320}
        height={80}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={cn('h-10 w-auto object-contain object-left sm:h-12', imgClassName, className)}
      />
    )
  }

  if (variant === 'stacked') {
    return (
      <img
        src={brandAssets.stackedDark}
        alt={siteConfig.productName}
        width={200}
        height={200}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={cn('h-16 w-auto object-contain sm:h-20', imgClassName, className)}
      />
    )
  }

  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <img
        src={brandAssets.monogram}
        alt=""
        width={40}
        height={40}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={cn(
          'h-9 w-9 rounded-lg object-cover shadow-sm ring-1 ring-navy/10 sm:h-10 sm:w-10',
          imgClassName,
        )}
        aria-hidden={markOnly ? undefined : true}
      />
      {markOnly ? (
        <span className="sr-only">{siteConfig.productName}</span>
      ) : (
        <span className="font-display text-[15px] font-semibold text-navy">
          {siteConfig.productName}
        </span>
      )}
    </span>
  )
}
