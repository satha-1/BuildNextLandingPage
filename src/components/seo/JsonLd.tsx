import { SITE_URL, siteConfig } from '../../content/siteConfig'
import { faqs } from '../../content/copy'

export function JsonLd({ includeFaq }: { includeFaq?: boolean }) {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.company,
    legalName: siteConfig.legalName,
    url: SITE_URL || undefined,
    email: siteConfig.email || undefined,
    telephone: siteConfig.phone || undefined,
    brand: siteConfig.productName,
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

  const software = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: siteConfig.productName,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description:
      'ERP and CRM platform for land selling companies, property developers, real estate businesses, and construction companies.',
    provider: {
      '@type': 'Organization',
      name: siteConfig.company,
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

  const blobs = [org, software, faq].filter(Boolean)

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
