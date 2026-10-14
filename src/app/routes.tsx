import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from '../components/layout/SiteLayout'

const HomePage = lazy(() => import('../pages/HomePage'))
const LandsPage = lazy(() => import('../pages/LandsPage'))
const ConstructionPage = lazy(() => import('../pages/ConstructionPage'))
const BookDemoPage = lazy(() => import('../pages/BookDemoPage'))
const ContactPage = lazy(() => import('../pages/ContactPage'))
const ServicesPage = lazy(() => import('../pages/ServicesPage'))
const NewsPage = lazy(() => import('../pages/NewsPage'))
const NewsArticlePage = lazy(() => import('../pages/NewsArticlePage'))

function Fallback() {
  return (
    <div className="px-6 py-24 text-sm text-navy/60" role="status">
      Loading…
    </div>
  )
}

export function AppRoutes() {
  return (
    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="lands" element={<LandsPage />} />
          <Route path="construction" element={<ConstructionPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="news/:slug" element={<NewsArticlePage />} />
          <Route path="book-demo" element={<BookDemoPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="platform" element={<Navigate to="/" replace />} />
          <Route path="demo" element={<Navigate to="/lands" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
