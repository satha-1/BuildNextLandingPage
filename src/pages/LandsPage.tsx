import { FileDown } from 'lucide-react'
import { ButtonLink } from '../components/ui/Button'
import { siteConfig } from '../content/siteConfig'
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
        <div className="flex flex-wrap gap-3">
          <ButtonLink to="/book-demo">Book a Demo</ButtonLink>
          <ButtonLink to={siteConfig.brochureUrl} external newTab variant="on-dark">
            <FileDown className="h-4 w-4" aria-hidden />
            Download Brochure
          </ButtonLink>
        </div>
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
