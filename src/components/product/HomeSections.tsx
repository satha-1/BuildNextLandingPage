import {
  ArrowRight,
  Bot,
  Building2,
  ClipboardList,
  Cloud,
  FileCheck,
  Gauge,
  HardHat,
  Headphones,
  Landmark,
  Layers,
  MapPinned,
  Package,
  Receipt,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
  Workflow,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { faqs } from '../../content/copy'
import {
  businessBenefits,
  heroMetrics,
  industryChallenges,
  mainFeatures,
  productCards,
  stockImages,
} from '../../content/homeContent'
import { newsArticles } from '../../content/news'
import { screenshots } from '../../content/screenshots'
import { serviceOfferings, serviceProcess } from '../../content/services'
import { targetIndustries } from '../../content/siteConfig'
import { cn } from '../../lib/cn'
import { ButtonLink } from '../ui/Button'
import {
  Container,
  Eyebrow,
  GhostWord,
  sectionGap,
  sectionY,
  SectionHeading,
  StatRow,
} from '../ui/Container'
import { FaqAccordion } from '../ui/FaqAccordion'
import { FeatureCarousel } from '../ui/FeatureCarousel'
import { FadeIn, Stagger, StaggerItem } from '../ui/Motion'
import { ScreenshotFrame } from '../ui/ScreenshotFrame'
import { StockImage } from '../ui/StockImage'

/* ------------------------------------------------------------------ */
/* 1. Hero — full-bleed photo banner; the product carousel overlaps   */
/*    its bottom edge and drops into the next section.                */
/* ------------------------------------------------------------------ */

const heroTrust = [
  { icon: Sparkles, label: 'Demo built around your workflow' },
  { icon: Headphones, label: 'Up to 2 months free support' },
  { icon: Cloud, label: 'AWS & Azure deployment' },
] as const

export function HomeHero() {
  const latest = newsArticles[0]

  return (
    <>
      <section className="relative isolate overflow-hidden bg-midnight">
        <img
          src={stockImages.hero}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="banner-shade absolute inset-0 -z-10" aria-hidden />
        <div className="blueprint absolute inset-0 -z-10 opacity-50" aria-hidden />
        <GhostWord
          word="360"
          invert
          outline
          className="-right-4 top-28 -z-10 hidden text-[clamp(10rem,24vw,22rem)]! lg:block"
        />

        <Container className="relative pb-52 pt-32 sm:pb-64 sm:pt-40">
          <FadeIn className="max-w-4xl">
            {latest ? (
              <Link
                to={`/news/${latest.slug}`}
                className="group inline-flex max-w-full items-center gap-3 rounded-full border border-white/15 bg-white/[0.07] py-1.5 pl-1.5 pr-4 text-sm text-white/85 backdrop-blur-md transition-colors hover:border-white/35"
              >
                <span className="rounded-full bg-teal px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                  New
                </span>
                <span className="truncate">{latest.title}</span>
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
            ) : null}

            <Eyebrow invert className="mt-8">
              ERP &amp; CRM for property, land &amp; construction
            </Eyebrow>
            <h1 className="mt-5 font-display text-[2.5rem] font-extrabold uppercase leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-[5rem]">
              Sell land.
              <br />
              Build projects.
              <br />
              <span className="text-teal-light">Run it on one platform.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              BuildNext360 is ERP &amp; CRM software built for property, land and construction
              businesses — digitizing sales, projects, customers, operations and finance in one
              connected system.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink to="/book-demo" arrow>
                Book a Demo
              </ButtonLink>
              <ButtonLink to="/#solutions" variant="on-dark">
                Explore Solutions
              </ButtonLink>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {heroTrust.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5 text-sm text-white/75">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-teal-light">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </FadeIn>
        </Container>
      </section>

      {/* Featured capabilities card — straddles the hero edge. */}
      <div className="relative z-10 -mt-36 bg-[linear-gradient(to_bottom,transparent_9rem,#fff_9rem)] sm:-mt-48 sm:bg-[linear-gradient(to_bottom,transparent_12rem,#fff_12rem)]">
        <Container>
          <FadeIn y={40}>
            <div className="rounded-[1.75rem] bg-white p-3 shadow-[0_30px_80px_-30px_rgb(6_13_24/45%)] ring-1 ring-navy/[0.06] sm:p-5">
              <div className="flex items-center justify-between gap-4 px-2 pb-3 pt-1 sm:pb-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-teal">
                  Featured capabilities
                </p>
                <p className="hidden text-xs text-muted sm:block">BuildNext Lands &amp; Construction</p>
              </div>
              <FeatureCarousel features={mainFeatures} layout="split" ariaLabel="Main platform features" />
            </div>
          </FadeIn>
        </Container>
      </div>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* 2. Industries strip — Ceyentra's "Trusted by" row.                 */
/* ------------------------------------------------------------------ */

const industryIcons = [Landmark, Building2, MapPinned, HardHat] as const

export function IndustryStrip() {
  return (
    <section className="bg-white pb-6 pt-14 sm:pt-16">
      <Container>
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-muted">
          Built for the businesses that build
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {targetIndustries.map((item, index) => {
            const Icon = industryIcons[index % industryIcons.length]
            return (
              <li
                key={item}
                className="flex items-center justify-center gap-3 rounded-full border border-navy/[0.08] px-4 py-3.5 text-center text-sm font-semibold text-navy/80"
              >
                <Icon className="h-5 w-5 shrink-0 text-teal" strokeWidth={1.75} aria-hidden />
                {item}
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 3. Products — Skyline "featured apartment" cards.                  */
/* ------------------------------------------------------------------ */

const specIcons = {
  users: Users,
  map: MapPinned,
  wallet: Wallet,
  file: FileCheck,
  plan: ClipboardList,
  package: Package,
  hardhat: HardHat,
  receipt: Receipt,
} as const

export function IndustrySolutionsSection() {
  return (
    <section id="solutions" className={cn('scroll-mt-24 overflow-hidden bg-white', sectionY)}>
      <Container>
        <FadeIn>
          <SectionHeading
            watermark="Products"
            eyebrow="Industry solutions"
            title="Two products. One connected platform."
            copy="BuildNext360 brings together two purpose-built products — each designed for the operational reality of its industry."
            align="center"
          />
        </FadeIn>
        <Stagger className={cn(sectionGap, 'grid min-w-0 gap-8 lg:grid-cols-2')}>
          {productCards.map((card) => (
            <StaggerItem key={card.id}>
              <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-[0_20px_60px_-28px_rgb(10_22_40/35%)] ring-1 ring-navy/[0.06] transition-shadow duration-300 hover:shadow-[0_30px_70px_-28px_rgb(10_22_40/45%)]">
                <div className="relative overflow-hidden">
                  <StockImage
                    src={card.image}
                    alt={card.imageAlt}
                    className="aspect-[16/9] w-full rounded-none shadow-none ring-0 transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-navy shadow-sm">
                    {card.subtitle}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-9">
                  <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-navy sm:text-[1.75rem]">
                    {card.name}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">{card.description}</p>
                  <ul className="mb-8 mt-7 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                    {card.specs.map((spec) => {
                      const Icon = specIcons[spec.icon]
                      return (
                        <li key={spec.label} className="flex items-start gap-3 text-sm text-navy/80">
                          <Icon className="mt-0.5 h-5 w-5 shrink-0 text-navy/60" strokeWidth={1.5} aria-hidden />
                          {spec.label}
                        </li>
                      )
                    })}
                  </ul>
                  <div className="mt-auto flex flex-wrap items-end justify-between gap-4 border-t border-navy/[0.06] pt-6">
                    <div>
                      <p className="text-[11px] text-muted">Built for</p>
                      <p className="font-display text-lg font-extrabold text-navy">{card.builtFor}</p>
                    </div>
                    <ButtonLink to={card.href} variant="outline" arrow>
                      Explore
                    </ButtonLink>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 4. About banner — white card overlapping a photo band (Skyline     */
/*    "Real Estate Powerhouse").                                      */
/* ------------------------------------------------------------------ */

const aboutStats = [
  { value: '2', label: 'Industry products' },
  { value: '1', label: 'Connected platform' },
  ...heroMetrics.map((metric) => ({
    value: metric.value,
    label: metric.id === 'admin-time' ? 'Less manual follow-up' : 'Faster decisions',
  })),
] as const

export function AboutBanner() {
  return (
    <section className="relative bg-white pt-8">
      <div className="relative isolate overflow-hidden bg-midnight lg:overflow-visible">
        <img
          src={stockImages.banners.about}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-l from-midnight/95 via-midnight/75 to-midnight/30" aria-hidden />

        <Container className="grid gap-12 py-16 lg:grid-cols-[minmax(0,26rem)_1fr] lg:items-end lg:gap-16 lg:py-20">
          <FadeIn className="lg:-mt-36">
            <div className="relative rounded-[1.25rem] bg-white p-8 shadow-[0_30px_80px_-30px_rgb(6_13_24/55%)] sm:p-10">
              <span className="absolute -left-px top-10 h-14 w-1 rounded-r-full bg-teal" aria-hidden />
              <Eyebrow>Purpose built</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-navy sm:text-[2.1rem]">
                Built for the way your business operates
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
                Generic ERPs force property and construction teams into someone else&apos;s process.
                BuildNext360 starts from yours — inquiries, plots, agreements, collections,
                procurement, site progress and billing — and keeps sales, finance and operations on
                one record.
              </p>
              <ButtonLink to="/book-demo" variant="outline" arrow className="mt-8">
                Book a walkthrough
              </ButtonLink>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:pb-4">
            <StatRow items={aboutStats} invert />
          </FadeIn>
        </Container>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 5. Why — "WHY?" watermark with three industry columns.              */
/* ------------------------------------------------------------------ */

export function WhyIndustrySection() {
  return (
    <section className={cn('overflow-hidden bg-white', sectionY)}>
      <Container>
        <FadeIn>
          <SectionHeading
            watermark="Why?"
            eyebrow="Why BuildNext360"
            title="The problems we were built to solve"
            copy="Every industry we serve loses time to the same thing: work split across spreadsheets, chats and disconnected systems."
            align="center"
          />
        </FadeIn>
        <Stagger className={cn(sectionGap, 'grid min-w-0 gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-navy/[0.08]')}>
          {industryChallenges.map((item) => (
            <StaggerItem key={item.id} className="md:px-8 lg:px-10">
              <article className="flex h-full flex-col items-center text-center">
                <div className="relative">
                  <StockImage
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-28 w-28 rounded-full! shadow-none! ring-4! ring-white!"
                  />
                  <span className="absolute -inset-2 -z-10 rounded-full border border-dashed border-teal/40" aria-hidden />
                </div>
                <h3 className="mt-6 font-display text-base font-extrabold uppercase tracking-[0.08em] text-navy">
                  {item.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {item.points.map((point) => (
                    <li key={point} className="text-sm leading-relaxed text-muted">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 6. Overview — dashboard breaks out of the white band into navy     */
/*    (Skyline VR-headset motif).                                     */
/* ------------------------------------------------------------------ */

const overviewHighlights = [
  {
    icon: Gauge,
    title: 'Command Center',
    copy: 'Cash position, ledgers, forecasts, and sales activity in one operations view.',
  },
  {
    icon: Workflow,
    title: 'Sales to collections',
    copy: 'Pipeline, inventory, agreements, and recovery stay connected across teams.',
  },
  {
    icon: Wallet,
    title: 'Finance visibility',
    copy: 'Inflow, outflow, and net cash flow tracked against real payment activity.',
  },
] as const

export function ProductOverviewSection() {
  return (
    <section id="overview" className="scroll-mt-24">
      <div className="relative overflow-hidden bg-white pt-20 sm:pt-24">
        <Container>
          <FadeIn>
            <SectionHeading
              watermark="Overview"
              eyebrow="Product overview"
              title="See BuildNext360 in one operations view"
              align="center"
            />
          </FadeIn>
        </Container>
      </div>

      {/* The screenshot sits on the seam: white above, navy below. */}
      <div className="relative isolate bg-white pt-12">
        <div className="absolute inset-x-0 bottom-0 top-1/2 -z-10 bg-navy" aria-hidden>
          <div className="blueprint h-full w-full" />
        </div>
        <Container>
          <FadeIn y={40} className="mx-auto max-w-6xl">
            <ScreenshotFrame
              asset={screenshots.dashboard}
              className="shadow-[0_40px_100px_-30px_rgb(6_13_24/60%)]"
            />
          </FadeIn>
        </Container>
      </div>

      <div className="relative isolate overflow-hidden bg-navy">
        <div className="blueprint absolute inset-0 -z-10" aria-hidden />
        <GhostWord
          word="Command"
          invert
          outline
          className="-bottom-6 -right-6 -z-10 hidden lg:block"
        />
        <Container className="pb-20 pt-16 sm:pb-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <FadeIn>
              <h3 className="font-display text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-4xl">
                Run the business
                <br />
                from live data
              </h3>
              <p className="mt-5 max-w-md text-base leading-relaxed text-white/70">
                The Operations Dashboard brings cash position, cash-flow ledgers, collection
                forecasts, and new sales into a single command center.
              </p>
            </FadeIn>
            <Stagger className="grid gap-6 sm:grid-cols-3">
              {overviewHighlights.map(({ icon: Icon, title, copy }) => (
                <StaggerItem key={title}>
                  <div className="h-full border-t border-white/15 pt-5">
                    <Icon className="h-6 w-6 text-teal-light" strokeWidth={1.5} aria-hidden />
                    <h4 className="mt-4 font-display text-sm font-extrabold uppercase tracking-[0.08em] text-white">
                      {title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">{copy}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 7. Method — Ceyentra "From idea to launch, step by step".          */
/* ------------------------------------------------------------------ */

export function MethodSection() {
  return (
    <section className={cn('overflow-hidden bg-white', sectionY)}>
      <Container>
        <FadeIn>
          <SectionHeading
            watermark="Method"
            eyebrow="How we deliver"
            title="From scoping to go-live, step by step"
            copy="A clear path with free post-go-live support built in."
            align="center"
          />
        </FadeIn>
        <Stagger className={cn(sectionGap, 'relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6')}>
          <span
            className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px border-t-2 border-dashed border-navy/15 lg:block"
            aria-hidden
          />
          {serviceProcess.map((item, index) => (
            <StaggerItem key={item.step}>
              <article className="relative flex h-full flex-col items-center text-center">
                <span
                  className={cn(
                    'relative flex h-16 w-16 items-center justify-center rounded-full font-display text-xl font-extrabold ring-8 ring-white',
                    index === serviceProcess.length - 1 ? 'bg-teal text-white' : 'bg-navy text-white',
                  )}
                >
                  {item.step}
                </span>
                {index === serviceProcess.length - 1 ? (
                  <span className="mt-4 rounded-full bg-teal/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-teal">
                    Free
                  </span>
                ) : (
                  <span className="mt-4 h-[1.375rem]" aria-hidden />
                )}
                <h3 className="mt-3 font-display text-lg font-extrabold uppercase tracking-tight text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-muted">{item.description}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 8. Benefits                                                         */
/* ------------------------------------------------------------------ */

const benefitIcons = [Gauge, Layers, Users, Workflow, ShieldCheck, Sparkles] as const

export function BusinessBenefitsSection() {
  return (
    <section className={cn('relative overflow-hidden bg-surface', sectionY)}>
      <Container>
        <FadeIn>
          <SectionHeading
            watermark="Benefits"
            eyebrow="Business benefits"
            title="Run your entire operation from one place"
          />
        </FadeIn>
        <Stagger className={cn(sectionGap, 'grid min-w-0 gap-px overflow-hidden rounded-[1.5rem] bg-navy/[0.08] sm:grid-cols-2 lg:grid-cols-3')}>
          {businessBenefits.map((benefit, index) => {
            const Icon = benefitIcons[index % benefitIcons.length]
            return (
              <StaggerItem key={benefit.id}>
                <article className="group relative h-full bg-white p-8 transition-colors duration-300 hover:bg-navy sm:p-10">
                  <span className="absolute right-8 top-8 font-display text-4xl font-extrabold text-navy/[0.06] transition-colors group-hover:text-white/10">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <Icon
                    className="h-7 w-7 text-teal transition-colors group-hover:text-teal-light"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <h3 className="mt-6 font-display text-lg font-extrabold uppercase tracking-tight text-navy transition-colors group-hover:text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted transition-colors group-hover:text-white/70">
                    {benefit.description}
                  </p>
                </article>
              </StaggerItem>
            )
          })}
        </Stagger>
      </Container>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 9. Services preview                                                 */
/* ------------------------------------------------------------------ */

const offeringIcons = {
  implementation: Rocket,
  'cloud-integration': Cloud,
  support: Headphones,
  chatbot: Bot,
} as const

export function ServicesPreviewSection() {
  return (
    <section className={cn('overflow-hidden bg-white', sectionY)}>
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <FadeIn>
            <SectionHeading
              watermark="Services"
              eyebrow="Services"
              title="Get live — and keep moving"
              copy="Implementation, cloud deployment, chatbot and free post-go-live support from the team that builds the product."
            />
          </FadeIn>
          <FadeIn delay={0.05} className="shrink-0">
            <ButtonLink to="/services" variant="outline" arrow>
              All services
            </ButtonLink>
          </FadeIn>
        </div>
        <Stagger className={cn(sectionGap, 'grid min-w-0 gap-6 sm:grid-cols-2 lg:grid-cols-4')}>
          {serviceOfferings.map((offering) => {
            const Icon = offeringIcons[offering.id]
            return (
              <StaggerItem key={offering.id}>
                <Link
                  to="/services"
                  className="group relative flex h-full min-h-[22rem] flex-col justify-end overflow-hidden rounded-[1.25rem] bg-midnight p-7 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
                >
                  <img
                    src={offering.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover opacity-55 transition-all duration-700 group-hover:scale-105 group-hover:opacity-35"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/70 to-transparent" aria-hidden />
                  <div className="relative">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-extrabold uppercase leading-tight tracking-tight">
                      {offering.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/70">{offering.summary}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-teal-light">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            )
          })}
        </Stagger>
      </Container>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 10. News highlight — Ceyentra's dark "NEW" band.                    */
/* ------------------------------------------------------------------ */

export function NewsHighlightSection() {
  const [featured, ...rest] = newsArticles
  if (!featured) return null

  return (
    <section className="relative isolate overflow-hidden bg-navy py-20 sm:py-24">
      <img
        src={stockImages.banners.news}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/60" aria-hidden />
      <GhostWord word="Next" invert outline className="-right-4 top-6 -z-10" />

      <Container className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <FadeIn>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] py-1 pl-1 pr-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
            <span className="rounded-full bg-teal px-2 py-0.5 text-[10px] font-bold text-white">New</span>
            {featured.kicker}
          </span>
          <h2 className="mt-6 font-display text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            {featured.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">{featured.dek}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to={`/news/${featured.slug}`} arrow>
              Read the story
            </ButtonLink>
            <ButtonLink to="/news" variant="on-dark">
              All updates
            </ButtonLink>
          </div>
        </FadeIn>

        <Stagger className="grid gap-4">
          {rest.map((article) => (
            <StaggerItem key={article.slug}>
              <Link
                to={`/news/${article.slug}`}
                className="group flex items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm transition-colors hover:border-teal-light/50 hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-light"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-teal-light">{article.kicker}</p>
                  <h3 className="mt-2 font-display text-lg font-bold leading-snug text-white">{article.title}</h3>
                  <p className="mt-2 text-xs text-white/50">
                    {article.date} · {article.readTime}
                  </p>
                </div>
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors group-hover:border-teal-light group-hover:bg-teal-light">
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 11. FAQ                                                              */
/* ------------------------------------------------------------------ */

export function HomeFaqSection() {
  return (
    <section id="faq" className={cn('scroll-mt-24 overflow-hidden bg-white', sectionY)}>
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <FadeIn>
          <SectionHeading
            watermark="FAQ"
            eyebrow="FAQ"
            title="Questions, answered"
            copy="Quick answers about the platform, deployment and demos."
          />
          <ButtonLink to="/contact" variant="outline" arrow className="mt-8">
            Ask us anything
          </ButtonLink>
        </FadeIn>
        <FadeIn delay={0.08} className="lg:pt-14">
          <FaqAccordion items={faqs} />
        </FadeIn>
      </Container>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 12. Final CTA — photo card straddling the page and the dark footer. */
/* ------------------------------------------------------------------ */

export function FinalCta({ from = 'white' }: { from?: 'white' | 'surface' }) {
  return (
    <section
      className={cn(
        'relative pt-8',
        from === 'white'
          ? 'bg-[linear-gradient(to_bottom,#fff_50%,var(--color-midnight)_50%)]'
          : 'bg-[linear-gradient(to_bottom,var(--color-surface)_50%,var(--color-midnight)_50%)]',
      )}
    >
      <Container>
        <FadeIn y={30}>
          <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-navy px-6 py-16 text-center shadow-[0_40px_100px_-30px_rgb(6_13_24/60%)] sm:px-12 sm:py-20">
            <img
              src={stockImages.banners.cta}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 -z-20 h-full w-full object-cover"
            />
            <div className="banner-shade-center absolute inset-0 -z-10" aria-hidden />
            <GhostWord word="Demo" invert outline className="-bottom-6 left-1/2 -z-10 -translate-x-1/2" />

            <Eyebrow invert align="center">
              Ready when you are
            </Eyebrow>
            <h2 className="mx-auto mt-5 max-w-4xl font-display text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
              See BuildNext360 run your operation
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base text-white/75 sm:text-lg">
              A personalised demo mapped to your sales, projects and finance workflows — including
              optional chatbot support for customers and teams.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink to="/book-demo" arrow>
                Book a Personalized Demo
              </ButtonLink>
              <ButtonLink to="/contact" variant="on-dark">
                Talk to the team
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
