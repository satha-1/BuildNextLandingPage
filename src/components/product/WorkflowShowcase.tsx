import {
  ArrowRight,
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
import { StockImage } from '../ui/StockImage'

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

function WorkflowIcon({ type }: { type: WorkflowStage['icon'] }) {
  const Icon = workflowIcons[type]
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal/[0.08] text-teal ring-1 ring-teal/15">
      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
    </span>
  )
}

function WorkflowShowcaseBlock({ stages }: { stages: WorkflowStage[] }) {
  return (
    <div className="min-w-0 space-y-6">
      {stages.map((stage, index) => {
        const reversed = index % 2 === 1
        return (
          <article
            key={stage.id}
            className="surface-card grid min-w-0 items-center gap-8 overflow-hidden p-6 sm:gap-10 sm:p-8 lg:grid-cols-2 lg:p-10"
          >
            <div className={cn('min-w-0', reversed && 'lg:order-2')}>
              <div className="flex items-center gap-4">
                <WorkflowIcon type={stage.icon} />
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                    Step {index + 1} of {stages.length}
                  </p>
                  <h3 className="font-display text-xl font-semibold text-navy sm:text-2xl">
                    {stage.label}
                  </h3>
                </div>
              </div>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                {stage.description}
              </p>
              <ul className="mt-6 space-y-3">
                {stage.details.map((detail) => (
                  <li key={detail} className="flex gap-3 text-sm leading-relaxed text-navy/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              {index < stages.length - 1 ? (
                <p className="mt-6 hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-teal sm:flex">
                  Next <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  {stages[index + 1]?.label}
                </p>
              ) : null}
            </div>
            <StockImage
              src={stage.image}
              alt={stage.imageAlt}
              className={cn('aspect-[4/3] w-full', reversed && 'lg:order-1')}
            />
          </article>
        )
      })}
    </div>
  )
}

export function ProductWorkflowSection({
  stages,
  title = 'Business workflows your teams run every day',
  copy = 'A deeper look at how work moves across sales, operations, finance, and delivery on this product.',
}: {
  stages: WorkflowStage[]
  title?: string
  copy?: string
}) {
  return (
    <section className={cn('section-muted', sectionY)}>
      <Container>
        <SectionHeading title={title} copy={copy} />
        <div className={sectionGap}>
          <WorkflowShowcaseBlock stages={stages} />
        </div>
      </Container>
    </section>
  )
}
