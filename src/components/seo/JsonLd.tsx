import { SITE_URL, siteConfig } from '../../content/siteConfig'
import { faqs } from '../../content/copy'

export function JsonLd({ includeFaq }: { includeFaq?: boolean }) {
  const logoUrl = SITE_URL ? `${SITE_URL}/brand/monogram.png` : undefined

  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.company,
    legalName: siteConfig.legalName,
    url: SITE_URL || undefined,
    logo: logoUrl,
    image: logoUrl,
    email: siteConfig.email || undefined,
    telephone: siteConfig.phone || undefined,
    brand: siteConfig.productName,
    areaServed: 'LK',
    contactPoint: [
      siteConfig.email
        ? {
            '@type': 'ContactPoint',
            contactType: 'sales',
            email: siteConfig.email,
            telephone: siteConfig.phone || undefined,
            availableLanguage: ['English'],
          }
        : null,
      siteConfig.whatsapp
        ? {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            telephone: siteConfig.whatsapp,
            contactOption: 'WhatsApp',
            availableLanguage: ['English'],
          }
        : null,
    ].filter(Boolean),
  }

  const website = SITE_URL
    ? {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteConfig.productName,
        url: SITE_URL,
        description: siteConfig.positioning,
        publisher: {
          '@type': 'Organization',
          name: siteConfig.company,
        },
        inLanguage: 'en',
      }
    : null

  const software = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: siteConfig.productName,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'ERP and CRM',
    operatingSystem: 'Web',
    url: SITE_URL || undefined,
    description:
      'ERP and CRM platform for land selling companies, property developers, real estate businesses, and construction companies. Includes optional chatbot, cloud deployment, and paid integrations.',
    provider: {
      '@type': 'Organization',
      name: siteConfig.company,
    },
    offers: {
      '@type': 'Offer',
      category: 'EnterpriseSoftware',
      availability: 'https://schema.org/InStock',
      url: SITE_URL ? `${SITE_URL}/book-demo` : '/book-demo',
    },
  }

  const faq = includeFaq
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      }
    : null

  const blobs = [org, website, software, faq].filter(Boolean)

  return (
    <>
      {blobs.map((data, i) => (
        <script
          // Static marketing schema; content is authored in source.
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  )
}
