import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'on-light' | 'on-dark'

type Shared = {
  children: ReactNode
  className?: string
  variant?: Variant
}

const styles: Record<Variant, string> = {
  primary:
    'bg-teal text-white shadow-[0_1px_2px_rgb(13_148_136/30%)] hover:bg-teal-light hover:shadow-[0_8px_24px_-8px_rgb(13_148_136/45%)] focus-visible:outline-teal',
  secondary:
    'border border-navy/10 bg-white text-navy shadow-sm hover:border-teal/40 hover:bg-teal/[0.04] hover:text-teal',
  ghost: 'text-muted hover:bg-navy/[0.04] hover:text-navy',
  'on-light':
    'bg-navy text-white shadow-[0_1px_2px_rgb(10_22_40/20%)] hover:bg-navy/90 hover:shadow-[0_8px_24px_-8px_rgb(10_22_40/35%)] focus-visible:outline-teal',
  'on-dark':
    'border border-white/20 bg-white/5 text-white hover:bg-white/10 focus-visible:outline-teal',
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 active:scale-[0.98]'

export function Button({
  children,
  className,
  variant = 'primary',
  ...props
}: Shared & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, styles[variant], className)} {...props}>
      {children}
    </button>
  )
}

export function ButtonLink({
  to,
  children,
  className,
  variant = 'primary',
  external,
  newTab,
}: Shared & { to: string; external?: boolean; newTab?: boolean }) {
  const classNames = cn(base, styles[variant], className)
  if (external) {
    return (
      <a href={to} className={classNames} {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={classNames}>
      {children}
    </Link>
  )
}
