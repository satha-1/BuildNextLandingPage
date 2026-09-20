import { ButtonLink } from '../components/ui/Button'
import { PageHero } from '../components/ui/Container'
import { ProductWorkflowSection } from '../components/product/WorkflowShowcase'
import { FinalCta } from '../components/product/HomeSections'
import { Seo } from '../components/seo/Seo'
import { landsWorkflowStages, stockImages } from '../content/homeContent'

export default function LandsPage() {
  return (
    <>
      <Seo path="/lands" />
      <PageHero
        eyebrow="Land Sales ERP & CRM"
        title="BuildNext Lands"
        copy="Purpose-built software for land selling companies, property developers, and real estate businesses. Manage the full journey from inquiry to deed transfer on one connected platform."
        image={stockImages.landsProduct}
        imageAlt="Property development and land sales operations"
      >
        <ButtonLink to="/book-demo" variant="on-light">
          Book a Demo
        </ButtonLink>
      </PageHero>

      <ProductWorkflowSection
        stages={landsWorkflowStages}
        title="From inquiry to deed — explained step by step"
        copy="BuildNext Lands connects sales, inventory, agreements, collections, receipts, and legal progress so every team works from the same buyer and plot record."
      />

      <FinalCta />
    </>
  )
}
