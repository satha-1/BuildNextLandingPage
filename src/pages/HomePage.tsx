import { JsonLd } from '../components/seo/JsonLd'
import { Seo } from '../components/seo/Seo'
import { FeatureShowcaseSection } from '../components/product/FeatureShowcase'
import {
  BusinessBenefitsSection,
  FinalCta,
  HomeHero,
  IndustrySolutionsSection,
  ProductOverviewSection,
  WhyIndustrySection,
} from '../components/product/HomeSections'

export default function HomePage() {
  return (
    <>
      <Seo path="/" />
      <JsonLd includeFaq />
      <HomeHero />
      <IndustrySolutionsSection />
      <WhyIndustrySection />
      <ProductOverviewSection />
      <FeatureShowcaseSection />
      <BusinessBenefitsSection />
      <FinalCta />
    </>
  )
}
