import { FileDown } from 'lucide-react'
import { ButtonLink } from '../components/ui/Button'
import { siteConfig } from '../content/siteConfig'
import { PageHero } from '../components/ui/Container'
import { ProductHeroCard } from '../components/product/ProductHeroCard'
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
        image={stockImages.banners.lands}
        imageAlt="Property development and land sales operations"
        watermark="Lands"
        overlap={
          <ProductHeroCard
            image={stockImages.landsProduct}
            imageAlt="Property development and land sales operations"
            video="/videos/lands-intelligent-automation.mp4"
            videoLabel="The future belongs to intelligent automation"
            facts={[
              { value: String(landsWorkflowStages.length), label: 'Workflow stages' },
              { value: '1', label: 'Buyer & plot record' },
              { value: '40%', label: 'Less manual follow-up' },
              { value: '3x', label: 'Faster decisions' },
            ]}
            aside={
              <ButtonLink to={siteConfig.brochureUrl} external newTab variant="outline" className="w-full">
                <FileDown className="h-4 w-4" aria-hidden />
                Download Brochure
              </ButtonLink>
            }
          />
        }
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink to="/book-demo" arrow>
            Book a Demo
          </ButtonLink>
          <ButtonLink to={siteConfig.brochureUrl} external newTab variant="on-dark">
            <FileDown className="h-4 w-4" aria-hidden />
            Brochure
          </ButtonLink>
        </div>
      </PageHero>

      <ProductWorkflowSection
        stages={landsWorkflowStages}
        title="From inquiry to deed — explained step by step"
        copy="BuildNext Lands connects sales, inventory, agreements, collections, receipts, and legal progress so every team works from the same buyer and plot record."
        watermark="Journey"
      />

      <FinalCta from="surface" />
    </>
  )
}
