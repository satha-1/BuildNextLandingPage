import { Outlet, useLocation } from 'react-router-dom'
import { useRouteFocus } from '../../hooks/useRouteFocus'
import { SiteFooter } from '../footer/SiteFooter'
import { SiteHeader } from '../navigation/SiteHeader'
import { JsonLd } from '../seo/JsonLd'

export function SiteLayout() {
  useRouteFocus()
  const { pathname } = useLocation()

  return (
    <div className="min-h-svh overflow-x-hidden bg-surface text-navy">
      <JsonLd includeFaq={pathname === '/'} />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-offwhite"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
