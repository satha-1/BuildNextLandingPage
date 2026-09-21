import { useEffect } from 'react'
import { SITE_URL, defaultDescription, siteConfig } from '../../content/siteConfig'
import { routeSeo } from '../../content/copy'

function upsertMeta(selector: string, attr: string, key: string, content: string) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

function upsertHreflang(hreflang: string, href: string) {
  const selector = `link[rel="alternate"][hreflang="${hreflang}"]`
  let el = document.head.querySelector(selector) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.rel = 'alternate'
    el.setAttribute('hreflang', hreflang)
    document.head.appendChild(el)
  }
  el.href = href
}

export function Seo({ path }: { path: string }) {
  const seo = routeSeo[path] ?? {
    path,
    title: `${siteConfig.productName} | ${siteConfig.category}`,
    description: defaultDescription,
    keywords: siteConfig.seoKeywords,
  }
  const url = SITE_URL ? `${SITE_URL}${seo.path === '/' ? '' : seo.path}` : seo.path
  const image = SITE_URL ? `${SITE_URL}/og-cover.svg` : '/og-cover.svg'
  const keywords = seo.keywords ?? siteConfig.seoKeywords

  useEffect(() => {
    document.title = seo.title
    document.documentElement.lang = 'en'

    upsertMeta('meta[name="description"]', 'name', 'description', seo.description)
    upsertMeta('meta[name="keywords"]', 'name', 'keywords', keywords)
    upsertMeta('meta[name="author"]', 'name', 'author', siteConfig.company)
    upsertMeta(
      'meta[name="robots"]',
      'name',
      'robots',
      'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
    )
    upsertMeta('meta[name="googlebot"]', 'name', 'googlebot', 'index,follow')
    upsertMeta('meta[name="theme-color"]', 'name', 'theme-color', '#0B1F33')
    upsertMeta('meta[name="application-name"]', 'name', 'application-name', siteConfig.productName)

    upsertMeta('meta[property="og:title"]', 'property', 'og:title', seo.title)
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', seo.description)
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', 'website')
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', url)
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', image)
    upsertMeta('meta[property="og:image:alt"]', 'property', 'og:image:alt', seo.title)
    upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', siteConfig.productName)
    upsertMeta('meta[property="og:locale"]', 'property', 'og:locale', 'en_US')

    upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', seo.title)
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', seo.description)
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', image)
    upsertMeta('meta[name="twitter:image:alt"]', 'name', 'twitter:image:alt', seo.title)

    upsertLink('canonical', url)
    if (SITE_URL) {
      upsertHreflang('en', url)
      upsertHreflang('x-default', url)
    }
  }, [seo.title, seo.description, keywords, url, image])

  return null
}
