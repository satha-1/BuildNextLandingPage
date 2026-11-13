import { FileDown } from 'lucide-react'
import { ButtonLink } from '../components/ui/Button'
import { siteConfig } from '../content/siteConfig'
import { PageHero } from '../components/ui/Container'
import { ProductHeroCard } from '../components/product/ProductHeroCard'
import { ProductWorkflowSection } from '../components/product/WorkflowShowcase'
import { FinalCta } from '../components/product/HomeSections'
import { Seo } from '../components/seo/Seo'
import { constructionWorkflowStages, stockImages } from '../content/homeContent'

export default function ConstructionPage() {
  return (
    <>
      <Seo path="/construction" />
      <PageHero
        eyebrow="Construction ERP & CRM"
        title="BuildNext Construction"
        copy="Enterprise software for construction companies and developers running complex projects. Manage planning, procurement, execution, cost control, billing, and handover in one system."
        image={stockImages.banners.construction}
        imageAlt="Construction project site operations"
        watermark="Build"
        overlap={
          <ProductHeroCard
            image={stockImages.constructionProduct}
            imageAlt="Construction project site operations"
            facts={[
              { value: String(constructionWorkflowStages.length), label: 'Workflow stages' },
              { value: '1', label: 'Shared project record' },
              { value: '2 mo', label: 'Free support' },
              { value: 'Cloud', label: 'AWS & Azure ready' },
            ]}
            aside={
              <ButtonLink to={siteConfig.constructionBrochureUrl} external newTab variant="outline" className="w-full">
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
          <ButtonLink to={siteConfig.constructionBrochureUrl} external newTab variant="on-dark">
            <FileDown className="h-4 w-4" aria-hidden />
            Brochure
          </ButtonLink>
        </div>
      </PageHero>

      <ProductWorkflowSection
        stages={constructionWorkflowStages}
        title="From planning to handover — explained step by step"
        copy="BuildNext Construction keeps project plans, procurement, site progress, cost control, billing, and close-out connected so delivery teams and finance share one operational view."
        watermark="Process"
      />

      <FinalCta from="surface" />
    </>
  )
}
