import {
  businessBenefits,
  heroMetrics,
  industryChallenges,
  mainFeatures,
  productCards,
} from '../../content/homeContent'
import { screenshots } from '../../content/screenshots'
import { cn } from '../../lib/cn'
import { BrandLogo } from '../brand/BrandLogo'
import { ButtonLink } from '../ui/Button'
import { Container, sectionGap, sectionY, SectionHeading } from '../ui/Container'
import { FeatureCarousel } from '../ui/FeatureCarousel'
import { ScreenshotFrame } from '../ui/ScreenshotFrame'
import { StockImage } from '../ui/StockImage'

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-navy/[0.06] bg-navy">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_90%_10%,rgb(13_148_136/25%),transparent)]"
        aria-hidden
      />
      <Container className="relative py-16 sm:py-20">
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="min-w-0">
            <h1 className="font-display text-[2.125rem] font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[3.5rem]">
              ERP &amp; CRM Software Built for Property, Land &amp; Construction Businesses
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Digitize sales, projects, customer management, operations, finance, and business
              workflows through industry-focused enterprise software.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink to="/book-demo">Book a Demo</ButtonLink>
              <ButtonLink to="/#solutions" variant="on-dark">
                Explore Solutions
              </ButtonLink>
            </div>

            <div className="mt-8 grid min-w-0 gap-3 sm:grid-cols-2">
              {heroMetrics.map((metric) => (
                <div
                  key={metric.id}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <p className="font-display text-3xl font-semibold tracking-tight text-teal-light sm:text-[2.15rem]">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card min-w-0 overflow-hidden p-3 sm:p-4">
            <FeatureCarousel features={mainFeatures} ariaLabel="Main platform features" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export function IndustrySolutionsSection() {
  return (
    <section id="solutions" className={cn('scroll-mt-24 bg-white', sectionY)}>
      <Container>
        <SectionHeading
          eyebrow="Industry Solutions"
          title="Enterprise software for property, land, and construction"
          copy="BuildNext360 brings together two purpose-built products—each designed for the operational reality of its industry."
        />
        <div className={cn(sectionGap, 'grid min-w-0 gap-8 lg:grid-cols-2')}>
          {productCards.map((card) => (
            <article
              key={card.id}
              className="surface-card surface-card-hover group flex min-w-0 flex-col overflow-hidden"
            >
              <div className="overflow-hidden">
                <StockImage
                  src={card.image}
                  alt={card.imageAlt}
                  className="aspect-[16/9] w-full rounded-none shadow-none ring-0 transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-8 sm:p-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-teal">
                  {card.subtitle}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-navy sm:text-3xl">
                  {card.name}
                </h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-muted">{card.description}</p>
                <div className="mt-8">
                  <ButtonLink to={card.href} variant="on-light">
                    {card.cta}
                  </ButtonLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function WhyIndustrySection() {
  return (
    <section className={cn('section-muted', sectionY)}>
      <Container>
        <SectionHeading title="Purpose Built for the Way Your Business Operates" />
        <div className={cn(sectionGap, 'grid min-w-0 gap-8 lg:grid-cols-3')}>
          {industryChallenges.map((item) => (
            <article
              key={item.id}
              className="surface-card surface-card-hover flex min-w-0 flex-col overflow-hidden"
            >
              <StockImage
                src={item.image}
                alt={item.imageAlt}
                className="aspect-[3/2] w-full rounded-none shadow-none ring-0"
              />
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <h3 className="font-display text-xl font-semibold text-navy">{item.title}</h3>
                <ul className="mt-5 space-y-3.5">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

const overviewHighlights = [
  {
    title: 'Command Center',
    copy: 'Cash position, ledgers, forecasts, and sales activity in one operations view.',
  },
  {
    title: 'Sales to collections',
    copy: 'Pipeline, inventory, agreements, and recovery stay connected across teams.',
  },
  {
    title: 'Finance visibility',
    copy: 'Inflow, outflow, and net cash flow tracked against real payment activity.',
  },
] as const

export function ProductOverviewSection() {
  return (
    <section id="overview" className={cn('scroll-mt-24 bg-white', sectionY)}>
      <Container>
        <SectionHeading
          eyebrow="Product overview"
          title="See BuildNext360 in one operations view"
          copy="The Operations Dashboard brings cash position, cash-flow ledgers, collection forecasts, and new sales into a single command center — so leadership can run the business from live data."
        />

        <div className={cn(sectionGap, 'grid min-w-0 gap-4 sm:grid-cols-3')}>
          {overviewHighlights.map((item) => (
            <div key={item.title} className="rounded-2xl border border-navy/[0.06] bg-surface p-5">
              <h3 className="font-display text-base font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.copy}</p>
            </div>
          ))}
        </div>

        <div className={cn(sectionGap, 'rounded-2xl bg-navy/[0.02] p-4 ring-1 ring-navy/[0.06] sm:p-6')}>
          <ScreenshotFrame asset={screenshots.dashboard} priority variant="wide" />
        </div>
      </Container>
    </section>
  )
}

export function BusinessBenefitsSection() {
  return (
    <section className={cn('section-muted', sectionY)}>
      <Container>
        <SectionHeading
          title="Run Your Entire Operation From One Place"
          align="center"
          className="mx-auto"
        />
        <div className={cn(sectionGap, 'grid min-w-0 gap-5 sm:grid-cols-2 lg:grid-cols-3')}>
          {businessBenefits.map((benefit, index) => (
            <article
              key={benefit.id}
              className="surface-card group min-w-0 p-8 transition-shadow duration-200 hover:shadow-[var(--shadow-lift)]"
            >
              <span className="font-mono text-xs font-medium text-teal/80">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-navy">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{benefit.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_120%,rgb(13_148_136/25%),transparent)]"
        aria-hidden
      />
      <Container className="relative text-center">
        <div className="mx-auto mb-8 flex justify-center">
          <BrandLogo variant="horizontal" className="mx-auto h-12 sm:h-14" imgClassName="mx-auto h-12 sm:h-14" />
        </div>
        <h2 className="mx-auto max-w-4xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
          Modern ERP &amp; CRM Software for Growing Property and Construction Businesses
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 sm:text-lg">
          See how BuildNext360 can fit your business operations — including optional chatbot support
          for customers and teams.
        </p>
        <div className="mt-10">
          <ButtonLink to="/book-demo">Book a Personalized Demo</ButtonLink>
        </div>
      </Container>
    </section>
  )
}
