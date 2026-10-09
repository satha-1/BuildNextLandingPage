import { ButtonLink } from '../components/ui/Button'
import { PageHero } from '../components/ui/Container'
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
        image={stockImages.constructionProduct}
        imageAlt="Construction project site operations"
      >
        <ButtonLink to="/book-demo">Book a Demo</ButtonLink>
      </PageHero>

      <ProductWorkflowSection
        stages={constructionWorkflowStages}
        title="From planning to handover — explained step by step"
        copy="BuildNext Construction keeps project plans, procurement, site progress, cost control, billing, and close-out connected so delivery teams and finance share one operational view."
      />

      <FinalCta />
    </>
  )
}
