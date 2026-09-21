import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Bot, ChevronDown, Cloud, Headphones, Link2, Rocket } from 'lucide-react'
import { useState } from 'react'
import { FinalCta } from '../components/product/HomeSections'
import { Seo } from '../components/seo/Seo'
import { BrandLogo } from '../components/brand/BrandLogo'
import { ButtonLink } from '../components/ui/Button'
import { Container, sectionGap, sectionY, SectionHeading } from '../components/ui/Container'
import { FadeIn, Stagger, StaggerItem } from '../components/ui/Motion'
import { StockImage } from '../components/ui/StockImage'
import {
  integrationSystems,
  serviceFaqs,
  serviceFeatures,
  serviceImages,
  serviceOfferings,
  serviceProcess,
} from '../content/services'
import { cn } from '../lib/cn'

const offeringIcons = {
  implementation: Rocket,
  'cloud-integration': Cloud,
  support: Headphones,
  chatbot: Bot,
} as const

function ServiceFaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(serviceFaqs[0]?.question ?? null)
  const reduce = useReducedMotion()

  return (
    <div className="space-y-3">
      {serviceFaqs.map((faq) => {
        const open = openId === faq.question
        return (
          <div
            key={faq.question}
            className={cn(
              'overflow-hidden rounded-2xl border transition-colors duration-200',
              open
                ? 'border-teal/25 bg-white shadow-[var(--shadow-soft)]'
                : 'border-navy/[0.06] bg-white/80 hover:border-navy/12',
            )}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
              aria-expanded={open}
              onClick={() => setOpenId(open ? null : faq.question)}
            >
              <span className="font-display text-base font-semibold text-navy sm:text-lg">
                {faq.question}
              </span>
              <span
                className={cn(
                  'flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-navy/10 bg-surface text-navy transition-transform duration-300',
                  open && 'rotate-180 bg-teal/[0.1] text-teal',
                )}
              >
                <ChevronDown className="h-4 w-4" aria-hidden />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  key="content"
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="border-t border-navy/[0.06] px-5 pb-5 pt-4 text-sm leading-relaxed text-muted sm:px-6 sm:pb-6 sm:text-[0.9375rem]">
                    {faq.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

export default function ServicesPage() {
  const reduce = useReducedMotion()

  return (
    <>
      <Seo path="/services" />

      <section className="relative overflow-hidden border-b border-navy/[0.06] bg-navy">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_90%_10%,rgb(13_148_136/25%),transparent)]"
          aria-hidden
        />
        <Container className="relative grid min-w-0 items-start gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-14">
          <motion.div
            className="min-w-0"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80">
              Services
            </span>
            <div className="mt-5">
              <BrandLogo
                variant="stacked"
                className="h-14 sm:h-16"
                imgClassName="h-14 rounded-xl sm:h-16"
              />
            </div>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[3.25rem]">
              Implementation, integrations, chatbot, and support for BuildNext360
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Configure the platform around your operation, stabilize adoption with up to 2 months
              of free technical support, add a chatbot for faster customer and team answers, and
              layer paid integrations like QuickBooks or HRIS only when you need them.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink to="/book-demo">Discuss your rollout</ButtonLink>
              <ButtonLink
                to="/contact"
                variant="secondary"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                Contact the team
              </ButtonLink>
            </div>
          </motion.div>

          <motion.div
            className="relative min-w-0"
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-teal/20 blur-3xl"
              aria-hidden
            />
            <StockImage
              src={serviceImages.hero}
              alt="Property and construction operations supported by BuildNext360 services"
              className="relative aspect-[5/4] w-full shadow-[var(--shadow-lift)]"
              priority
              overlay="dark"
            />
          </motion.div>
        </Container>
      </section>

      <section className={cn('bg-white', sectionY)}>
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="What we offer"
              title="Services that get you live — and keep you moving"
              copy="Implementation, AWS/Azure cloud integration, chatbot, and free post-go-live support are available now. Third-party tool integrations like QuickBooks and HRIS are paid add-ons when needed."
            />
          </FadeIn>

          <Stagger className={cn(sectionGap, 'grid min-w-0 items-stretch gap-6 sm:grid-cols-2')}>
            {serviceOfferings.map((offering) => {
              const Icon = offeringIcons[offering.id]
              return (
                <StaggerItem key={offering.id}>
                  <article className="surface-card surface-card-hover group flex h-full min-w-0 flex-col overflow-hidden">
                    <div className="overflow-hidden">
                      <StockImage
                        src={offering.image}
                        alt={offering.imageAlt}
                        className="aspect-[16/10] w-full rounded-none shadow-none ring-0"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-7 sm:p-8">
                      <div className="flex items-start justify-between gap-3">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/[0.12] text-teal">
                          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                        </span>
                        {offering.status === 'available' ? (
                          <span className="shrink-0 rounded-full bg-teal/[0.1] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-teal">
                            Available
                          </span>
                        ) : (
                          <span className="shrink-0 rounded-full bg-navy/[0.06] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-navy/60">
                            Coming soon
                          </span>
                        )}
                      </div>
                      <h2 className="mt-5 font-display text-xl font-semibold text-navy">
                        {offering.title}
                      </h2>
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

      <section className={cn('section-muted', sectionY)}>
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Included capabilities"
              title="What delivery sets up first"
              copy="These capabilities are configured early so your teams can operate on BuildNext360 with clear ownership and process discipline."
            />
          </FadeIn>

          <FadeIn delay={0.06} className={sectionGap}>
            <StockImage
              src={serviceImages.process}
              alt="Project planning and delivery collaboration"
              className="aspect-[21/9] w-full sm:aspect-[2.4/1]"
            />
          </FadeIn>

          <Stagger className={cn(sectionGap, 'grid min-w-0 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3')}>
            {serviceFeatures.map((feature, index) => (
              <StaggerItem key={feature.id}>
                <article className="flex h-full min-w-0 flex-col rounded-2xl border border-navy/[0.06] bg-white p-6 shadow-[var(--shadow-soft)] sm:p-7">
                  <span className="font-mono text-xs font-medium text-teal/80">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-navy">{feature.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{feature.description}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className={cn('bg-white', sectionY)}>
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Paid integrations"
              title="QuickBooks, HRIS, and more — when you need them"
              copy="Integrations are available as paid services. They are not included in standard implementation delivery and are scoped separately if required."
            />
          </FadeIn>

          <FadeIn delay={0.06} className={sectionGap}>
            <StockImage
              src={serviceImages.integrations}
              alt="Business analytics and system integrations"
              className="aspect-[21/9] w-full sm:aspect-[2.4/1]"
            />
          </FadeIn>

          <Stagger className={cn(sectionGap, 'grid min-w-0 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3')}>
            {integrationSystems.map((system) => (
              <StaggerItem key={system.id}>
                <article className="surface-card surface-card-hover flex h-full min-w-0 flex-col p-7">
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/[0.12] text-teal">
                      <Link2 className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <span className="rounded-full bg-navy/[0.05] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-navy/55">
                      {system.badge}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-navy">{system.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{system.description}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className={cn('section-muted', sectionY)}>
        <Container>
          <FadeIn>
            <SectionHeading
              title="How engagement usually runs"
              copy="A clear path from scoping to supported go-live."
              align="center"
              className="mx-auto"
            />
          </FadeIn>
          <Stagger className={cn(sectionGap, 'grid min-w-0 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4')}>
            {serviceProcess.map((item) => (
              <StaggerItem key={item.step}>
                <article className="surface-card flex h-full min-w-0 flex-col p-6 text-center sm:p-7">
                  <p className="font-mono text-xs font-semibold text-teal">{item.step}</p>
                  <h3 className="mt-3 font-display text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.description}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
          <FadeIn delay={0.1} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink to="/book-demo" variant="on-light">
              Book a service discussion
            </ButtonLink>
            <ButtonLink to="/contact" variant="secondary">
              Ask about integrations
            </ButtonLink>
          </FadeIn>
        </Container>
      </section>

      <section id="faq" className={cn('scroll-mt-24 bg-white', sectionY)}>
        <Container>
          <FadeIn className="mx-auto max-w-3xl text-center">
            <SectionHeading
              eyebrow="FAQs"
              title="Answers before you start"
              copy="Common questions about implementation, free support, paid integrations, and how engagement works."
              align="center"
              className="mx-auto"
            />
          </FadeIn>

          <FadeIn delay={0.08} className={cn(sectionGap, 'mx-auto max-w-3xl')}>
            <ServiceFaqAccordion />
            <div className="mt-10 flex justify-center">
              <ButtonLink to="/contact" variant="on-light">
                Still have a question?
              </ButtonLink>
            </div>
          </FadeIn>
        </Container>
      </section>

      <FinalCta />
    </>
  )
}
