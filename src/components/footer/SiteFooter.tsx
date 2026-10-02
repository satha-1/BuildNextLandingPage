import { Link } from 'react-router-dom'
import { FileDown, Mail, Phone } from 'lucide-react'
import { footerNav } from '../../content/navigation'
import { siteConfig, targetIndustries } from '../../content/siteConfig'
import { BrandLogo } from '../brand/BrandLogo'
import { Container } from '../ui/Container'
import { ButtonLink } from '../ui/Button'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'

export function SiteFooter() {
  const email = siteConfig.email
  const phone = siteConfig.phone
  const phoneDisplay = siteConfig.phoneDisplay
  const whatsappUrl = siteConfig.whatsappUrl
  const whatsappDisplay = siteConfig.whatsappDisplay

  return (
    <footer className="border-t border-navy/[0.06] bg-white text-navy">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <BrandLogo variant="mark" />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            {siteConfig.positioning}
          </p>
          <div className="mt-6 space-y-2.5">
            {email ? (
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-teal"
              >
                <Mail className="h-4 w-4 shrink-0 text-teal" aria-hidden />
                <span>{email}</span>
              </a>
            ) : null}
            {phone ? (
              <a
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-teal"
              >
                <Phone className="h-4 w-4 shrink-0 text-teal" aria-hidden />
                <span>Phone: {phoneDisplay}</span>
              </a>
            ) : null}
            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-teal"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0 text-[#25D366]" />
                <span>WhatsApp: {whatsappDisplay}</span>
              </a>
            ) : null}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink to="/book-demo" variant="on-light">
              Book a Demo
            </ButtonLink>
            <ButtonLink to={siteConfig.brochureUrl} external newTab variant="secondary">
              <FileDown className="h-4 w-4" aria-hidden />
              Brochure
            </ButtonLink>
          </div>
          <div className="mt-5 flex items-center gap-4 text-sm">
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-muted transition-colors hover:text-teal"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-muted transition-colors hover:text-teal"
            >
              Facebook
            </a>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy/45">Navigate</p>
          <ul className="mt-5 space-y-2.5">
            {footerNav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-muted transition-colors hover:text-teal"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy/45">Industries</p>
          <ul className="mt-5 space-y-2">
            {targetIndustries.map((item) => (
              <li key={item} className="text-sm text-muted">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-navy/45">
            Contact
          </p>
          <p className="mt-3 text-sm text-muted">
            Sales &amp; support inquiries for {siteConfig.domain}
          </p>
        </div>
      </Container>
      <Container className="flex flex-col gap-2 border-t border-navy/[0.06] py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {new Date().getFullYear()} {siteConfig.productName}. All rights reserved.
        </span>
        <span>{siteConfig.domain}</span>
      </Container>
    </footer>
  )
}
