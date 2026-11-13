import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { navLinks } from '../../content/navigation'
import { siteConfig } from '../../content/siteConfig'
import { cn } from '../../lib/cn'
import { BrandLogo } from '../brand/BrandLogo'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { MobileProductsMenu, ProductsMenu } from './ProductsMenu'

/**
 * Fixed header that floats transparently over each page's dark banner hero,
 * then turns solid white once the page scrolls.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open
  const tone = solid ? 'light' : 'dark'

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-all duration-300',
        solid
          ? 'border-navy/[0.06] bg-white/95 shadow-[var(--shadow-nav)] backdrop-blur-xl'
          : 'border-white/10 bg-gradient-to-b from-midnight/70 to-transparent',
      )}
    >
      <Container className="flex h-[4.25rem] items-center justify-between gap-6">
        <Link
          to="/"
          className="group shrink-0 transition-opacity duration-200 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
        >
          {solid ? (
            <BrandLogo variant="mark" priority />
          ) : (
            <BrandLogo variant="stacked" priority className="h-11 sm:h-12" imgClassName="h-11 sm:h-12" />
          )}
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) =>
            'children' in link ? (
              <ProductsMenu key={link.label} tone={tone} />
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                end={'end' in link ? link.end : false}
                className={({ isActive }) =>
                  cn(
                    'relative px-2.5 py-2 text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal lg:px-3.5',
                    'after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-teal after:transition-transform after:duration-300',
                    isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100',
                    tone === 'light'
                      ? isActive
                        ? 'text-navy'
                        : 'text-navy/65 hover:text-navy'
                      : isActive
                        ? 'text-white'
                        : 'text-white/75 hover:text-white',
                  )
                }
              >
                {link.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {siteConfig.phone ? (
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className={cn(
                'hidden h-10 w-10 items-center justify-center rounded-full border transition-colors lg:inline-flex',
                tone === 'light'
                  ? 'border-navy/15 text-navy hover:border-teal hover:text-teal'
                  : 'border-white/30 text-white hover:border-white',
              )}
            >
              <Phone className="h-4 w-4" aria-hidden />
              <span className="sr-only">Call {siteConfig.phoneDisplay}</span>
            </a>
          ) : null}
          <ButtonLink to="/book-demo" className="px-5 py-2.5">
            Book a Demo
          </ButtonLink>
        </div>

        <button
          type="button"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal',
            tone === 'light' ? 'text-navy hover:bg-navy/[0.05]' : 'text-white hover:bg-white/10',
          )}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </Container>

      {open ? (
        <div
          id="mobile-nav"
          className="max-h-[calc(100svh-4.25rem)] overflow-y-auto border-t border-navy/[0.06] bg-white md:hidden"
        >
          <Container as="nav" className="flex flex-col gap-1 py-4" aria-label="Mobile">
            {navLinks.map((link) =>
              'children' in link ? (
                <MobileProductsMenu key={link.label} onNavigate={() => setOpen(false)} />
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={'end' in link ? link.end : false}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'rounded-xl px-3 py-3 text-base font-semibold transition-colors',
                      isActive ? 'bg-teal/[0.08] text-teal' : 'text-navy hover:bg-navy/[0.04]',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ),
            )}
            <ButtonLink to="/book-demo" className="mt-3 w-full" arrow>
              Book a Demo
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
