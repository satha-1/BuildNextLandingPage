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

export function Seo({ path }: { path: string }) {
  const seo = routeSeo[path] ?? {
    path,
    title: `${siteConfig.productName} | ${siteConfig.category}`,
    description: defaultDescription,
  }
  const url = SITE_URL ? `${SITE_URL}${seo.path}` : seo.path
  const image = SITE_URL ? `${SITE_URL}/og-cover.svg` : '/og-cover.svg'

  useEffect(() => {
    document.title = seo.title
    upsertMeta('meta[name="description"]', 'name', 'description', seo.description)
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', seo.title)
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', seo.description)
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', 'website')
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', url)
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', image)
    upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', siteConfig.productName)
    upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', seo.title)
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', seo.description)
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', image)
    upsertMeta(
      'meta[name="robots"]',
      'name',
      'robots',
      'index,follow,max-image-preview:large',
    )
    upsertLink('canonical', url)
  }, [seo.title, seo.description, url, image])

  return null
}
