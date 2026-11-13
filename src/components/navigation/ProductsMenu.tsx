import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { productLinks } from '../../content/navigation'
import { cn } from '../../lib/cn'

const isProductPath = (pathname: string) =>
  productLinks.some((link) => pathname === link.to || pathname.startsWith(`${link.to}/`))

/** Desktop: "Products" trigger with a popover listing each product page. */
export function ProductsMenu({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()
  const active = isProductPath(pathname)

  useEffect(() => {
    if (!open) return
    const onPointerDown = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls="products-menu"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'relative inline-flex items-center gap-1 px-2.5 py-2 text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal lg:px-3.5',
          'after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-teal after:transition-transform after:duration-300',
          active ? 'after:scale-x-100' : 'after:scale-x-0',
          tone === 'light'
            ? active || open
              ? 'text-navy'
              : 'text-navy/65 hover:text-navy'
            : active || open
              ? 'text-white'
              : 'text-white/75 hover:text-white',
        )}
      >
        Products
        <ChevronDown
          className={cn('h-4 w-4 transition-transform duration-200', open && 'rotate-180')}
          aria-hidden
        />
      </button>

      {open ? (
        <div id="products-menu" className="absolute left-0 top-full z-50 w-72 pt-2">
          <div className="rounded-2xl border border-navy/[0.06] border-t-2 border-t-teal bg-white p-2 shadow-[var(--shadow-lift)]">
            {productLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'block rounded-xl px-3 py-3 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal',
                    isActive ? 'bg-navy/[0.06]' : 'hover:bg-navy/[0.04]',
                  )
                }
              >
                <span className="block text-sm font-semibold text-navy">{link.label}</span>
                <span className="mt-0.5 block text-xs text-muted">{link.description}</span>
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}

/** Mobile: expandable "Products" group inside the slide-down menu. */
export function MobileProductsMenu({ onNavigate }: { onNavigate: () => void }) {
  const { pathname } = useLocation()
  const active = isProductPath(pathname)
  const [expanded, setExpanded] = useState(active)

  return (
    <div>
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls="mobile-products-menu"
        onClick={() => setExpanded((v) => !v)}
        className={cn(
          'flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-base font-medium transition-colors',
          active ? 'bg-navy/[0.06] text-navy' : 'text-navy hover:bg-navy/[0.04]',
        )}
      >
        Products
        <ChevronDown
          className={cn('h-5 w-5 transition-transform duration-200', expanded && 'rotate-180')}
          aria-hidden
        />
      </button>

      {expanded ? (
        <div id="mobile-products-menu" className="mt-1 flex flex-col gap-1 pl-3">
          {productLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={onNavigate}
              className={({ isActive }) =>
                cn(
                  'rounded-xl px-3 py-3 text-base font-medium transition-colors',
                  isActive ? 'bg-navy/[0.06] text-navy' : 'text-navy hover:bg-navy/[0.04]',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      ) : null}
    </div>
  )
}
