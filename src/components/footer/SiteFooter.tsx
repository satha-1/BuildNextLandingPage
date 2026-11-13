import { Link } from 'react-router-dom'
import { ArrowUpRight, FileDown, Mail, Phone } from 'lucide-react'
import { footerNav } from '../../content/navigation'
import { siteConfig, targetIndustries } from '../../content/siteConfig'
import { BrandLogo } from '../brand/BrandLogo'
import { Container, GhostWord } from '../ui/Container'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'

const headingClass = 'text-[11px] font-bold uppercase tracking-[0.22em] text-teal-light'
const linkClass = 'text-sm text-white/65 transition-colors hover:text-white'

export function SiteFooter() {
  const { email, phone, phoneDisplay, whatsappUrl, whatsappDisplay } = siteConfig

  return (
    <footer className="relative isolate overflow-hidden bg-midnight text-white">
      <div className="blueprint absolute inset-0 -z-10 opacity-70" aria-hidden />
      <GhostWord
        word="BuildNext360"
        invert
        className="-bottom-4 left-1/2 -z-10 -translate-x-1/2 sm:-bottom-8"
      />

      <Container className="grid gap-12 pb-16 pt-20 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <BrandLogo variant="stacked" className="h-12" imgClassName="h-12" />
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/65">{siteConfig.positioning}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={siteConfig.brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-white/85 transition-colors hover:border-teal-light hover:text-white"
            >
              <FileDown className="h-4 w-4" aria-hidden />
              Lands Brochure
            </a>
            <a
              href={siteConfig.constructionBrochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-white/85 transition-colors hover:border-teal-light hover:text-white"
            >
              <FileDown className="h-4 w-4" aria-hidden />
              Construction Brochure
            </a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <p className={headingClass}>Navigate</p>
          <ul className="mt-5 space-y-3">
            {footerNav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <p className={headingClass}>Industries</p>
          <ul className="mt-5 space-y-3">
            {targetIndustries.map((item) => (
              <li key={item} className="text-sm text-white/65">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className={headingClass}>Get in touch</p>
          <ul className="mt-5 space-y-3.5">
            {email ? (
              <li>
                <a href={`mailto:${email}`} className={`flex items-center gap-3 ${linkClass}`}>
                  <Mail className="h-4 w-4 shrink-0 text-teal-light" aria-hidden />
                  {email}
                </a>
              </li>
            ) : null}
            {phone ? (
              <li>
                <a href={`tel:${phone.replace(/\s+/g, '')}`} className={`flex items-center gap-3 ${linkClass}`}>
                  <Phone className="h-4 w-4 shrink-0 text-teal-light" aria-hidden />
                  {phoneDisplay}
                </a>
              </li>
            ) : null}
            {whatsappUrl ? (
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 ${linkClass}`}
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0 text-[#25D366]" />
                  WhatsApp {whatsappDisplay}
                </a>
              </li>
            ) : null}
          </ul>
          <div className="mt-6 flex gap-2">
            {[
              { href: siteConfig.linkedinUrl, label: 'LinkedIn' },
              { href: siteConfig.facebookUrl, label: 'Facebook' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-white/[0.06] px-3.5 py-2 text-xs font-semibold text-white/80 transition-colors hover:bg-teal hover:text-white"
              >
                {social.label}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </a>
            ))}
          </div>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-white/10 py-6 pb-24 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:pb-28">
        <span>
          © {new Date().getFullYear()} {siteConfig.productName}. All rights reserved.
        </span>
        <span>{siteConfig.domain}</span>
      </Container>
    </footer>
  )
}
