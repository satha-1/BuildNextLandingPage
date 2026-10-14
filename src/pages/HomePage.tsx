import { Seo } from '../components/seo/Seo'
import { PlatformExplorer } from '../components/product/PlatformExplorer'
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
      <HomeHero />
      <IndustrySolutionsSection />
      <WhyIndustrySection />
      <ProductOverviewSection />
      <PlatformExplorer />
      <BusinessBenefitsSection />
      <FinalCta />
    </>
  )
}
