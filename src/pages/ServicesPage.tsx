import { Bot, Cloud, Headphones, Link2, Rocket } from 'lucide-react'
import { FinalCta, MethodSection } from '../components/product/HomeSections'
import { Seo } from '../components/seo/Seo'
import { ButtonLink } from '../components/ui/Button'
import { Container, PageHero, sectionGap, sectionY, SectionHeading } from '../components/ui/Container'
import { FaqAccordion } from '../components/ui/FaqAccordion'
import { FadeIn, Stagger, StaggerItem } from '../components/ui/Motion'
import { StockImage } from '../components/ui/StockImage'
import { stockImages } from '../content/homeContent'
import {
  integrationSystems,
  serviceFaqs,
  serviceFeatures,
  serviceImages,
  serviceOfferings,
} from '../content/services'
import { cn } from '../lib/cn'

const offeringIcons = {
  implementation: Rocket,
  'cloud-integration': Cloud,
  support: Headphones,
  chatbot: Bot,
} as const

function StatusPill({ status }: { status: 'available' | 'coming' }) {
  return status === 'available' ? (
    <span className="shrink-0 rounded-full bg-teal/[0.1] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-teal">
      Available
    </span>
  ) : (
    <span className="shrink-0 rounded-full bg-navy/[0.06] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-navy/60">
      Coming soon
    </span>
  )
}

export default function ServicesPage() {
  return (
    <>
      <Seo path="/services" />

      <PageHero
        eyebrow="Services"
        title="Get live. Stay moving."
        copy="Implementation, AWS/Azure cloud deployment, chatbot, and up to 2 months of free technical support for BuildNext360 — with paid integrations like QuickBooks or HRIS only when you need them."
        image={stockImages.banners.services}
        imageAlt="Team planning a software rollout"
        watermark="Services"
        overlap={
          <nav
            aria-label="Services on this page"
            className="grid overflow-hidden rounded-[1.5rem] bg-white shadow-[0_40px_100px_-30px_rgb(6_13_24/55%)] ring-1 ring-navy/[0.06] sm:grid-cols-2 lg:grid-cols-4"
          >
            {serviceOfferings.map((offering, index) => {
              const Icon = offeringIcons[offering.id]
              return (
                <a
                  key={offering.id}
                  href={`#service-${offering.id}`}
                  className={cn(
                    'group flex items-start gap-4 border-navy/[0.06] p-6 transition-colors hover:bg-surface sm:p-7',
                    index > 0 && 'border-t',
                    index === 1 && 'sm:border-l sm:border-t-0',
                    index === 3 && 'sm:border-l',
                    index > 0 && 'lg:border-l lg:border-t-0',
                  )}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-white transition-colors group-hover:bg-teal">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-sm font-extrabold uppercase leading-snug tracking-tight text-navy">
                      {offering.title}
                    </span>
                    <span className="mt-1.5 block text-xs text-muted">
                      {offering.status === 'available' ? 'Available now' : 'Coming soon'}
                    </span>
                  </span>
                </a>
              )
            })}
          </nav>
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink to="/book-demo" arrow>
            Discuss your rollout
          </ButtonLink>
          <ButtonLink to="/contact" variant="on-dark">
            Contact the team
          </ButtonLink>
        </div>
      </PageHero>

      <section className={cn('overflow-hidden', sectionY)}>
        <Container>
          <FadeIn>
            <SectionHeading
              watermark="Offer"
              eyebrow="What we offer"
              title="Services that get you live — and keep you moving"
              copy="Implementation, AWS/Azure cloud integration, chatbot, and free post-go-live support are available now. Third-party tool integrations like QuickBooks and HRIS are paid add-ons when needed."
            />
          </FadeIn>

          <Stagger className={cn(sectionGap, 'grid min-w-0 items-stretch gap-8 md:grid-cols-2')}>
            {serviceOfferings.map((offering) => {
              const Icon = offeringIcons[offering.id]
              return (
                <StaggerItem key={offering.id}>
                  <article
                    id={`service-${offering.id}`}
                    className="group flex h-full min-w-0 scroll-mt-28 flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-[0_20px_60px_-28px_rgb(10_22_40/35%)] ring-1 ring-navy/[0.06]"
                  >
                    <div className="relative">
                      <div className="overflow-hidden">
                        <StockImage
                          src={offering.image}
                          alt={offering.imageAlt}
                          className="aspect-[16/9] w-full rounded-none shadow-none ring-0 transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                      </div>
                      <span className="absolute -bottom-7 left-7 flex h-14 w-14 items-center justify-center rounded-full bg-teal text-white ring-4 ring-white">
                        <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-7 pt-12 sm:p-9 sm:pt-12">
                      <div className="flex items-start justify-between gap-3">
                        <h2 className="font-display text-xl font-extrabold uppercase tracking-tight text-navy">
                          {offering.title}
                        </h2>
                        <StatusPill status={offering.status} />
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{offering.summary}</p>
                      <ul className="mt-6 flex-1 space-y-3">
                        {offering.points.map((point) => (
                          <li key={point} className="flex gap-3 text-sm leading-relaxed text-navy/80">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </StaggerItem>
              )
            })}
          </Stagger>
        </Container>
      </section>

      {/* Capabilities — photo band with numbered cards overlapping its lower edge. */}
      <section className="relative">
        <div className="relative isolate overflow-hidden bg-midnight pb-40 pt-20 sm:pb-48 sm:pt-24">
          <img
            src={serviceImages.process}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="banner-shade absolute inset-0 -z-10" aria-hidden />
          <Container>
            <FadeIn>
              <SectionHeading
                invert
                watermark="Setup"
                eyebrow="Included capabilities"
                title="What delivery sets up first"
                copy="These capabilities are configured early so your teams can operate on BuildNext360 with clear ownership and process discipline."
              />
            </FadeIn>
          </Container>
        </div>
        <Container className="relative z-10 -mt-28 sm:-mt-32">
          <Stagger className="grid min-w-0 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceFeatures.map((feature, index) => (
              <StaggerItem key={feature.id}>
                <article className="flex h-full min-w-0 flex-col rounded-[1.25rem] bg-white p-7 shadow-[0_24px_60px_-28px_rgb(6_13_24/40%)] ring-1 ring-navy/[0.05]">
                  <span className="font-display text-3xl font-extrabold text-teal/30">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-extrabold uppercase tracking-tight text-navy">
                    {feature.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{feature.description}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className={cn('overflow-hidden', sectionY)}>
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <FadeIn>
            <SectionHeading
              watermark="Connect"
              eyebrow="Paid integrations"
              title="QuickBooks, HRIS, and more — when you need them"
              copy="Integrations are available as paid services. They are not included in standard implementation delivery and are scoped separately if required."
            />
            <StockImage
              src={serviceImages.integrations}
              alt="Business analytics and system integrations"
              className="mt-10 aspect-[16/10] w-full"
            />
          </FadeIn>

          <Stagger className="grid min-w-0 items-stretch gap-4">
            {integrationSystems.map((system) => (
              <StaggerItem key={system.id}>
                <article className="flex h-full min-w-0 items-start gap-5 rounded-[1.25rem] border border-navy/[0.08] bg-white p-6 transition-shadow hover:shadow-[var(--shadow-lift)]">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal/[0.12] text-teal">
                    <Link2 className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display text-base font-extrabold uppercase tracking-tight text-navy">
                        {system.title}
                      </h3>
                      <span className="rounded-full bg-navy/[0.05] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-navy/55">
                        {system.badge}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{system.description}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <MethodSection />

      <section id="faq" className="scroll-mt-24 overflow-hidden bg-white pb-20 sm:pb-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <FadeIn>
            <SectionHeading
              watermark="FAQ"
              eyebrow="FAQs"
              title="Answers before you start"
              copy="Common questions about implementation, free support, paid integrations, and how engagement works."
            />
            <ButtonLink to="/contact" variant="outline" arrow className="mt-8">
              Still have a question?
            </ButtonLink>
          </FadeIn>
          <FadeIn delay={0.08} className="lg:pt-14">
            <FaqAccordion items={serviceFaqs} />
          </FadeIn>
        </Container>
      </section>

      <FinalCta />
    </>
  )
}
