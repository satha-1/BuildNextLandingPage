import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'on-light' | 'on-dark' | 'outline'

type Shared = {
  children: ReactNode
  className?: string
  variant?: Variant
  /** Trailing chevron, as on Skyline's "EXPLORE >" pills. */
  arrow?: boolean
}

const styles: Record<Variant, string> = {
  primary:
    'bg-teal text-white shadow-[0_1px_2px_rgb(13_148_136/30%)] hover:bg-teal-light hover:shadow-[0_10px_28px_-10px_rgb(13_148_136/60%)] focus-visible:outline-teal',
  secondary:
    'border border-navy/12 bg-white text-navy shadow-sm hover:border-teal/50 hover:text-teal',
  ghost: 'text-muted hover:bg-navy/[0.04] hover:text-navy',
  'on-light':
    'bg-navy text-white shadow-[0_1px_2px_rgb(10_22_40/20%)] hover:bg-midnight hover:shadow-[0_10px_28px_-10px_rgb(10_22_40/45%)] focus-visible:outline-teal',
  'on-dark':
    'border border-white/30 bg-white/5 text-white backdrop-blur-sm hover:border-white/60 hover:bg-white/10 focus-visible:outline-teal-light',
  outline:
    'border-[1.5px] border-navy/80 bg-transparent text-navy hover:border-teal hover:bg-teal hover:text-white focus-visible:outline-teal',
}

const base =
  'group/btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[13px] font-bold uppercase tracking-[0.08em] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 active:scale-[0.98]'

function Chevron() {
  return (
    <ChevronRight
      className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5"
      aria-hidden
    />
  )
}

export function Button({
  children,
  className,
  variant = 'primary',
  arrow,
  ...props
}: Shared & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, styles[variant], className)} {...props}>
      {children}
      {arrow ? <Chevron /> : null}
    </button>
  )
}

export function ButtonLink({
  to,
  children,
  className,
  variant = 'primary',
  arrow,
  external,
  newTab,
}: Shared & { to: string; external?: boolean; newTab?: boolean }) {
  const classNames = cn(base, styles[variant], className)
  const content = (
    <>
      {children}
      {arrow ? <Chevron /> : null}
    </>
  )
  if (external) {
    return (
      <a href={to} className={classNames} {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {content}
      </a>
    )
  }
  return (
    <Link to={to} className={classNames}>
      {content}
    </Link>
  )
}
