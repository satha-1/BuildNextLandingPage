import { useMemo, useState } from 'react'
import { ButtonLink } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { ScreenshotFrame } from '../components/ui/ScreenshotFrame'
import { Seo } from '../components/seo/Seo'
import { demoScenarios } from '../content/demoScenarios'
import { screenshots, type ScreenshotKey } from '../content/screenshots'
import { DEMO_APP_URL, siteConfig } from '../content/siteConfig'
import { cn } from '../lib/cn'

function shotFromPath(path: string) {
  const key = path.replace('/screenshots/', '').replace('.webp', '') as ScreenshotKey
  return screenshots[key]
}

export default function DemoPage() {
  const [id, setId] = useState(demoScenarios[0].id)
  const scenario = useMemo(
    () => demoScenarios.find((item) => item.id === id) ?? demoScenarios[0],
    [id],
  )
  const shot = shotFromPath(scenario.screenshot)
  const demoReady = siteConfig.demoAppConfigured

  return (
    <>
      <Seo path="/demo" />
      <section className="border-b border-navy/10 bg-navy py-16 text-offwhite sm:py-20">
        <Container className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal">Product demo</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Walk through BuildNext360 workflows
            </h1>
            <p className="mt-4 text-soft/90">
              A guided tour of product behavior across BuildNext Lands and BuildNext Construction—not
              a generic feature slideshow.
            </p>
          </div>
          <ButtonLink to="/book-demo">Book a Demo</ButtonLink>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <nav aria-label="Demo chapters" className="min-w-0 space-y-2">
            {demoScenarios.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setId(item.id)}
                className={cn(
                  'w-full border px-4 py-3 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal',
                  item.id === id ? 'border-navy bg-navy text-offwhite' : 'border-navy/10 bg-offwhite text-navy',
                )}
              >
                <span className="block font-mono text-[10px] tracking-[0.16em] text-teal">{item.chapter}</span>
                <span className="mt-1 block font-display text-base font-semibold">{item.title}</span>
              </button>
            ))}
          </nav>

          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.18em] text-teal">{scenario.role}</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-navy">{scenario.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-navy/70">{scenario.context}</p>
            <ol className="mt-5 list-decimal space-y-2 pl-5 text-sm text-navy">
              {scenario.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <div className="mt-8">
              <ScreenshotFrame asset={shot} />
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              {demoReady ? (
                <ButtonLink to={DEMO_APP_URL} external variant="on-light">
                  Open live demo environment
                </ButtonLink>
              ) : (
                <p className="border border-navy/10 bg-offwhite px-4 py-3 text-sm text-navy/70">
                  Demo environment link coming soon
                </p>
              )}
              <ButtonLink to="/book-demo" variant="secondary" className="border-navy/20 text-navy">
                Book a Demo
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
