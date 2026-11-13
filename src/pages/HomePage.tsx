import { Seo } from '../components/seo/Seo'
import { PlatformExplorer } from '../components/product/PlatformExplorer'
import {
  AboutBanner,
  BusinessBenefitsSection,
  FinalCta,
  HomeFaqSection,
  HomeHero,
  IndustrySolutionsSection,
  IndustryStrip,
  MethodSection,
  NewsHighlightSection,
  ProductOverviewSection,
  ServicesPreviewSection,
  WhyIndustrySection,
} from '../components/product/HomeSections'

export default function HomePage() {
  return (
    <>
      <Seo path="/" />
      <HomeHero />
      <IndustryStrip />
      <IndustrySolutionsSection />
      <AboutBanner />
      <WhyIndustrySection />
      <ProductOverviewSection />
      <PlatformExplorer />
      <MethodSection />
      <BusinessBenefitsSection />
      <ServicesPreviewSection />
      <NewsHighlightSection />
      <HomeFaqSection />
      <FinalCta />
    </>
  )
}
