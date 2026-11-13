import {
  Building2,
  ClipboardList,
  CreditCard,
  FileCheck,
  FileText,
  HardHat,
  MapPin,
  Package,
  Receipt,
  UserPlus,
  Wallet,
} from 'lucide-react'
import type { WorkflowStage } from '../../content/homeContent'
import { cn } from '../../lib/cn'
import { Container, sectionGap, sectionY, SectionHeading } from '../ui/Container'
import { FadeIn } from '../ui/Motion'

const workflowIcons = {
  lead: UserPlus,
  visit: MapPin,
  reserve: ClipboardList,
  agreement: FileText,
  payment: CreditCard,
  deed: FileCheck,
  plan: Building2,
  procure: Package,
  execute: HardHat,
  cost: Wallet,
  bill: Receipt,
  handover: FileCheck,
} as const

/**
 * Each stage: a wide photo with a white card overlapping its edge,
 * alternating sides — the Skyline "card over banner" motif.
 */
function WorkflowStageRow({
  stage,
  index,
  total,
}: {
  stage: WorkflowStage
  index: number
  total: number
}) {
  const reversed = index % 2 === 1
  const Icon = workflowIcons[stage.icon]
  const number = String(index + 1).padStart(2, '0')

  return (
    <FadeIn>
      <article className="relative grid items-center lg:grid-cols-12">
        <div
          className={cn(
            'relative overflow-hidden rounded-[1.5rem] lg:col-span-7 lg:row-start-1',
            reversed ? 'lg:col-start-6' : 'lg:col-start-1',
          )}
        >
          <img
            src={stage.image}
            alt={stage.imageAlt}
            loading="lazy"
            decoding="async"
            className="aspect-[16/10] w-full object-cover lg:aspect-[16/11]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent" aria-hidden />
          <span
            className={cn(
              'absolute bottom-4 font-display text-7xl font-extrabold leading-none text-white/85 sm:text-8xl',
              reversed ? 'right-6' : 'left-6',
            )}
            aria-hidden
          >
            {number}
          </span>
        </div>

        <div
          className={cn(
            'relative z-10 -mt-12 mx-4 rounded-[1.25rem] bg-white p-7 shadow-[0_30px_80px_-30px_rgb(6_13_24/40%)] ring-1 ring-navy/[0.05] sm:mx-8 sm:p-9 lg:row-start-1 lg:mx-0 lg:mt-0 lg:col-span-6',
            reversed ? 'lg:col-start-1' : 'lg:col-start-7',
          )}
        >
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal text-white">
              <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
            </span>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal">
                Step {index + 1} of {total}
              </p>
              <h3 className="font-display text-xl font-extrabold uppercase tracking-tight text-navy sm:text-2xl">
                {stage.label}
              </h3>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">{stage.description}</p>
          <ul className="mt-6 grid gap-3">
            {stage.details.map((detail) => (
              <li key={detail} className="flex gap-3 text-sm leading-relaxed text-navy/80">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </FadeIn>
  )
}

export function ProductWorkflowSection({
  stages,
  title = 'Business workflows your teams run every day',
  copy = 'A deeper look at how work moves across sales, operations, finance, and delivery on this product.',
  watermark = 'Workflow',
}: {
  stages: WorkflowStage[]
  title?: string
  copy?: string
  watermark?: string
}) {
  return (
    <section className={cn('overflow-hidden bg-surface', sectionY)}>
      <Container>
        <FadeIn>
          <SectionHeading watermark={watermark} eyebrow="Step by step" title={title} copy={copy} align="center" />
        </FadeIn>
        <div className={cn(sectionGap, 'space-y-16 sm:space-y-20')}>
          {stages.map((stage, index) => (
            <WorkflowStageRow key={stage.id} stage={stage} index={index} total={stages.length} />
          ))}
        </div>
      </Container>
    </section>
  )
}
