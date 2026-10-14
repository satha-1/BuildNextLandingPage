import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Building2,
  ChevronLeft,
  ChevronRight,
  HardHat,
  Home,
  Map,
  Pause,
  Play,
} from 'lucide-react'
import { useCallback, useEffect, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {
  explorerAudiences,
  explorerFacts,
  explorerIndustries,
  explorerProducts,
  explorerStories,
  explorerTabs,
  sustainabilityImage,
  type ExplorerTabId,
} from '../../content/explorer'
import { newsArticles } from '../../content/news'
import { cn } from '../../lib/cn'
import { StoryArt } from '../news/StoryArt'
import { Container } from '../ui/Container'

const industryIcons = {
  land: Map,
  developers: Building2,
  'real-estate': Home,
  construction: HardHat,
} as const

function useCarousel(count: number) {
  const [index, setIndex] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [held, setHeld] = useState(false)
  const reduce = useReducedMotion()
  const paused = hovered || held

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % count) + count) % count)
    },
    [count],
  )

  useEffect(() => {
    if (paused || reduce || count < 2) return
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % count)
    }, 6500)
    return () => window.clearInterval(id)
  }, [paused, reduce, count])

  return {
    index,
    held,
    setHovered,
    toggleHeld: () => setHeld((value) => !value),
    goTo,
    reduce: Boolean(reduce),
  }
}

function controlButton(dark: boolean) {
  return cn(
    'inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal',
    dark
      ? 'border-white/15 text-white hover:bg-white/10'
      : 'border-navy/15 bg-white text-navy hover:bg-navy/[0.04]',
  )
}

function ProductsPanel({ dark }: { dark: boolean }) {
  const { index, held, setHovered, toggleHeld, goTo, reduce } = useCarousel(explorerProducts.length)
  const product = explorerProducts[index]

  if (!product) return null

  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="mx-auto max-w-3xl text-center">
        <h2
          className={cn(
            'font-display text-3xl font-semibold sm:text-4xl lg:text-5xl',
            dark ? 'text-white' : 'text-navy',
          )}
        >
          Software tailored for property, land, and construction
        </h2>
        <p
          className={cn(
            'mx-auto mt-4 max-w-2xl text-base leading-relaxed sm:text-lg',
            dark ? 'text-white/70' : 'text-muted',
          )}
        >
          Every product runs on the same record — built to capture, reserve, collect, and deliver
          the work that matters to your desk.
        </p>
      </div>

      <div
        className={cn(
          'mx-auto mt-10 overflow-hidden rounded-[1.75rem] bg-white shadow-[var(--shadow-lift)] lg:grid lg:grid-cols-2',
          !reduce && 'animate-[feature-fade_420ms_ease-out]',
        )}
        key={product.id}
      >
        <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal">
            {product.eyebrow}
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-navy sm:text-3xl">
            {product.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{product.copy}</p>
          <Link
            to={product.href}
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
          >
            Learn more
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <img
          src={product.image}
          alt={product.imageAlt}
          className="h-64 w-full object-cover sm:h-80 lg:h-full lg:min-h-[22rem]"
        />
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className={controlButton(dark)}
            aria-label={held ? 'Play products' : 'Pause products'}
            aria-pressed={held}
            onClick={toggleHeld}
          >
            {held ? <Play className="h-4 w-4" aria-hidden /> : <Pause className="h-4 w-4" aria-hidden />}
          </button>
          <div className="flex items-center gap-1.5" role="tablist" aria-label="Products">
            {explorerProducts.map((item, i) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={item.title}
                onClick={() => goTo(i)}
                className={cn(
                  'h-2 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-light',
                  i === index ? 'w-6 bg-teal' : dark ? 'w-2 bg-white/30 hover:bg-white/50' : 'w-2 bg-navy/20 hover:bg-navy/35',
                )}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className={controlButton(dark)}
            aria-label="Previous product"
            onClick={() => goTo(index - 1)}
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
          </button>
          <button
            type="button"
            className={controlButton(dark)}
            aria-label="Next product"
            onClick={() => goTo(index + 1)}
          >
            <ChevronRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        {product.title}
      </p>
    </div>
  )
}

function IndustriesPanel({ dark }: { dark: boolean }) {
  const [openId, setOpenId] = useState<string>(explorerIndustries[0]?.id ?? 'land')
  const reduce = useReducedMotion()

  return (
    <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
      <div>
        <h2
          className={cn(
            'font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl',
            dark ? 'text-white' : 'text-navy',
          )}
        >
          <span className={dark ? 'text-teal-light' : 'text-teal'}>Built</span> specifically for your industry
        </h2>
        <Link
          to="/book-demo"
          className={cn(
            'mt-8 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal',
            dark ? 'bg-white text-navy hover:bg-white/90' : 'bg-navy text-white hover:bg-navy/90',
          )}
        >
          Explore industries
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>

      <div>
        {explorerIndustries.map((industry) => {
          const open = openId === industry.id
          const Icon = industryIcons[industry.id]
          return (
            <div key={industry.id} className={cn(!open && (dark ? 'border-b border-white/15' : 'border-b border-navy/10'))}>
              <button
                type="button"
                className={cn(
                  'flex w-full items-center gap-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal',
                  open
                    ? 'rounded-t-2xl bg-white px-5 py-4 text-navy shadow-[var(--shadow-soft)] ring-1 ring-navy/[0.06] sm:px-6'
                    : dark
                      ? 'py-4 text-white/85'
                      : 'py-4 text-navy',
                )}
                aria-expanded={open}
                onClick={() => setOpenId(industry.id)}
              >
                <span
                  className={cn(
                    'flex h-10 w-10 shrink-0 items-center justify-center rounded-full',
                    open || !dark ? 'bg-teal/10 text-teal' : 'bg-teal/15 text-teal-light',
                  )}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="font-display text-lg font-semibold">{industry.title}</span>
              </button>
              <AnimatePresence initial={false}>
                {open ? (
                  <motion.div
                    key="body"
                    initial={reduce ? false : { height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={reduce ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mb-3 rounded-b-2xl bg-white px-5 pb-5 text-navy shadow-[var(--shadow-soft)] ring-1 ring-navy/[0.06] sm:px-6 sm:pb-6">
                      <p className="text-sm leading-relaxed text-muted sm:text-[0.95rem]">{industry.summary}</p>
                      <ul className="mt-4 space-y-2">
                        {industry.points.map((point) => (
                          <li key={point} className="flex gap-2 text-sm text-navy/80">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function FactsPanel({ dark }: { dark: boolean }) {
  return (
    <div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className={cn('font-display text-4xl font-semibold sm:text-5xl', dark ? 'text-white' : 'text-navy')}>
          Captured. Reserved. Collected.
        </h2>
        <p className={cn('mt-4 text-sm sm:text-base', dark ? 'text-white/60' : 'text-muted')}>
          Time given back to the desk, and decisions made from the live record.
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {explorerFacts.map((fact) => (
          <article
            key={fact.id}
            className={cn(
              'rounded-2xl p-6 sm:p-7',
              dark ? 'border border-white/15 bg-white/[0.03]' : 'border border-navy/10 bg-surface',
            )}
          >
            <p className={cn('text-[11px] font-semibold uppercase tracking-[0.16em]', dark ? 'text-white/50' : 'text-muted')}>
              {fact.label}
            </p>
            <p className={cn('mt-4 font-display text-5xl font-semibold tracking-tight', dark ? 'text-white' : 'text-navy')}>
              {fact.value}
            </p>
            <p className={cn('mt-4 text-sm leading-relaxed', dark ? 'text-white/65' : 'text-muted')}>{fact.copy}</p>
          </article>
        ))}
      </div>
      <blockquote className="mx-auto mt-14 max-w-4xl text-center">
        <p className={cn('font-display text-2xl font-medium leading-snug sm:text-3xl lg:text-4xl', dark ? 'text-teal-light' : 'text-teal')}>
          “If sales and finance open the same buyer file, the argument about what was paid ends
          before it starts.”
        </p>
        <footer className={cn('mt-6 text-sm', dark ? 'text-white/70' : 'text-muted')}>
          <span className={cn('font-semibold', dark ? 'text-white' : 'text-navy')}>How BuildNext360 is built</span>
          <span className={cn('mt-1 block', dark ? 'text-white/50' : 'text-navy/45')}>
            One customer file for the people who sell and the people who collect
          </span>
        </footer>
      </blockquote>
    </div>
  )
}

function StoriesPanel({ dark }: { dark: boolean }) {
  const { index, goTo, reduce } = useCarousel(explorerStories.length)
  const story = explorerStories[index]
  if (!story) return null

  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className={cn('font-display text-4xl font-semibold sm:text-5xl', dark ? 'text-white' : 'text-navy')}>
        From the operating desk
      </h2>
      <blockquote
        key={story.id}
        className={cn('mt-10', !reduce && 'animate-[feature-fade_420ms_ease-out]')}
      >
        <p className={cn('font-display text-2xl font-medium leading-snug sm:text-3xl lg:text-[2.4rem]', dark ? 'text-teal-light' : 'text-teal')}>
          “{story.quote}”
        </p>
        <footer className="mt-6 text-sm">
          <p className={cn('font-semibold', dark ? 'text-white' : 'text-navy')}>{story.context}</p>
          <p className={cn('mt-1', dark ? 'text-white/50' : 'text-muted')}>{story.product}</p>
        </footer>
      </blockquote>
      <div className="mt-6 flex justify-center gap-1.5" role="tablist" aria-label="Operating stories">
        {explorerStories.map((item, i) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={item.context}
            onClick={() => goTo(i)}
            className={cn(
              'h-2 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-light',
              i === index ? 'w-6 bg-teal' : dark ? 'w-2 bg-white/30' : 'w-2 bg-navy/20',
            )}
          />
        ))}
      </div>
      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {explorerAudiences.map((name) => (
          <div
            key={name}
            className={cn(
              'flex h-16 items-center justify-center rounded-xl px-3 text-center text-sm font-semibold',
              dark ? 'bg-white text-navy' : 'bg-navy text-white',
            )}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  )
}

function SustainabilityPanel({ dark }: { dark: boolean }) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div>
        <h2
          className={cn(
            'font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl',
            dark ? 'text-white' : 'text-navy',
          )}
        >
          Cut waste, not capability
        </h2>
        <p className={cn('mt-5 max-w-xl text-base leading-relaxed sm:text-lg', dark ? 'text-white/70' : 'text-muted')}>
          Reprints, status chases, and materials bought ahead of real demand are quiet waste.
          BuildNext360 keeps receipts, lot status, and procurement on the same record, so teams
          move less paper and buy closer to what the site needs.
        </p>
        <Link
          to="/book-demo"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Learn more
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
      <div className="relative mx-auto aspect-square w-full max-w-md">
        <div className="absolute inset-6 rounded-full bg-teal/25 blur-2xl" aria-hidden />
        <div className="absolute inset-0 rounded-full p-3 ring-8 ring-teal/80 sm:p-4 sm:ring-[12px]">
          <img
            src={sustainabilityImage}
            alt="Solar field beside green land"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

function NewsPanel({ dark }: { dark: boolean }) {
  return (
    <div>
      <h2 className={cn('text-center font-display text-4xl font-semibold sm:text-5xl', dark ? 'text-white' : 'text-navy')}>
        News and updates
      </h2>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {newsArticles.map((article) => (
          <article
            key={article.slug}
            className={cn(
              'flex flex-col overflow-hidden rounded-2xl',
              dark ? 'border border-white/10 bg-white/[0.03]' : 'border border-navy/[0.08] bg-white shadow-[var(--shadow-soft)]',
            )}
          >
            <StoryArt slug={article.slug} className="h-52 sm:h-56" label={article.title} />
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <p className={cn('text-[11px] font-semibold uppercase tracking-[0.14em]', dark ? 'text-white/45' : 'text-teal')}>
                News
              </p>
              <h3 className={cn('mt-2 font-display text-lg font-semibold leading-snug', dark ? 'text-white' : 'text-navy')}>
                {article.title}
              </h3>
              <Link
                to={`/news/${article.slug}`}
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-teal px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Read article
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          to="/news"
          className={cn(
            'inline-flex items-center gap-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal',
            dark ? 'text-teal-light hover:text-white' : 'text-teal hover:text-navy',
          )}
        >
          All updates
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </div>
  )
}

const panels: Record<ExplorerTabId, (props: { dark: boolean }) => ReactNode> = {
  industries: IndustriesPanel,
  products: ProductsPanel,
  facts: FactsPanel,
  stories: StoriesPanel,
  sustainability: SustainabilityPanel,
  news: NewsPanel,
}

const SUBNAV_OFFSET = 132

function useActiveSection(ids: readonly ExplorerTabId[]) {
  const [active, setActive] = useState<ExplorerTabId>(ids[0])

  useEffect(() => {
    const onScroll = () => {
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(`platform-${id}`)
        if (el && el.getBoundingClientRect().top - SUBNAV_OFFSET <= 1) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids])

  return [active, setActive] as const
}

const sectionIds = explorerTabs.map((tab) => tab.id)

export function PlatformExplorer() {
  const [active, setActive] = useActiveSection(sectionIds)
  const reduce = useReducedMotion()

  const jumpTo = (id: ExplorerTabId) => {
    const el = document.getElementById(`platform-${id}`)
    if (!el) return
    setActive(id)
    const top = el.getBoundingClientRect().top + window.scrollY - SUBNAV_OFFSET + 2
    window.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' })
    window.history.replaceState(null, '', `#platform-${id}`)
  }

  return (
    <section id="platform" className="border-y border-navy/[0.06]">
      <nav
        className="sticky top-[4.25rem] z-40 border-b border-white/10 bg-navy/95 backdrop-blur-md"
        aria-label="Platform sections"
      >
        <Container>
          <ul className="flex gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {explorerTabs.map((item) => {
              const selected = active === item.id
              return (
                <li key={item.id} className="shrink-0">
                  <a
                    href={`#platform-${item.id}`}
                    aria-current={selected ? 'true' : undefined}
                    onClick={(event) => {
                      event.preventDefault()
                      jumpTo(item.id)
                    }}
                    className={cn(
                      'block border-b-2 px-3 py-4 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-light sm:px-4',
                      selected
                        ? 'border-teal-light text-white'
                        : 'border-transparent text-white/55 hover:text-white',
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </Container>
      </nav>

      {explorerTabs.map((item, index) => {
        const Panel = panels[item.id]
        const dark = index % 2 === 0
        return (
          <div
            key={item.id}
            id={`platform-${item.id}`}
            aria-label={item.label}
            role="region"
            className={cn('scroll-mt-[8.25rem] py-16 sm:py-20', dark ? 'bg-navy text-white' : 'bg-surface text-navy')}
          >
            <Container>
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Panel dark={dark} />
              </motion.div>
            </Container>
          </div>
        )
      })}
    </section>
  )
}
