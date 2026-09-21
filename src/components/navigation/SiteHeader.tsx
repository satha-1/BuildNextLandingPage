import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../../content/navigation'
import { cn } from '../../lib/cn'
import { BrandLogo } from '../brand/BrandLogo'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'

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
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-all duration-300',
        scrolled || open
          ? 'border-navy/[0.06] bg-white/90 shadow-[var(--shadow-nav)] backdrop-blur-xl'
          : 'border-transparent bg-white/70 backdrop-blur-md',
      )}
    >
      <Container className="flex h-[4.25rem] items-center justify-between gap-6">
        <Link
          to="/"
          className="group shrink-0 transition-opacity duration-200 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
        >
          <BrandLogo variant="mark" priority />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={'end' in link ? link.end : false}
              className={({ isActive }) =>
                cn(
                  'rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal',
                  isActive
                    ? 'bg-navy/[0.06] text-navy'
                    : 'text-muted hover:bg-navy/[0.04] hover:text-navy',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink to="/book-demo" variant="on-light">
            Book a Demo
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy transition-colors hover:bg-navy/[0.05] md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-navy/[0.06] bg-white md:hidden">
          <Container as="nav" className="flex flex-col gap-1 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={'end' in link ? link.end : false}
                onClick={() => setOpen(false)}
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
            <ButtonLink to="/book-demo" className="mt-3 w-full" variant="on-light">
              Book a Demo
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
