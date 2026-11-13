import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FinalCta } from '../components/product/HomeSections'
import { StoryArt } from '../components/news/StoryArt'
import { Seo } from '../components/seo/Seo'
import { ButtonLink } from '../components/ui/Button'
import { Container, PageHero, SectionHeading } from '../components/ui/Container'
import { FadeIn, Stagger, StaggerItem } from '../components/ui/Motion'
import { stockImages } from '../content/homeContent'
import { newsArticles } from '../content/news'

export default function NewsPage() {
  const [featured, ...rest] = newsArticles

  return (
    <>
      <Seo path="/news" />
      <PageHero
        eyebrow="News and updates"
        title="What we are building next"
        copy="A vendor marketplace for construction buying, a CRM agent that reads the customer file, and an intelligence layer for the Monday brief."
        image={stockImages.banners.news}
        watermark="News"
        overlap={
          featured ? (
            <article className="grid overflow-hidden rounded-[1.75rem] bg-white shadow-[0_40px_100px_-30px_rgb(6_13_24/55%)] ring-1 ring-navy/[0.06] lg:grid-cols-2">
              <StoryArt slug={featured.slug} className="min-h-72 lg:min-h-full" label={featured.title} />
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-teal">
                  <span className="rounded-full bg-teal px-2 py-0.5 text-[10px] text-white">Featured</span>
                  {featured.kicker}
                </p>
                <h2 className="mt-4 font-display text-2xl font-extrabold uppercase leading-tight tracking-tight text-navy sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">{featured.dek}</p>
                <p className="mt-4 text-sm text-navy/45">
                  {featured.date} · {featured.readTime}
                </p>
                <ButtonLink to={`/news/${featured.slug}`} variant="outline" arrow className="mt-8 w-fit">
                  Read article
                </ButtonLink>
              </div>
            </article>
          ) : null
        }
      />

      {rest.length > 0 ? (
        <section className="overflow-hidden py-20 sm:py-24">
          <Container>
            <FadeIn>
              <SectionHeading watermark="Latest" eyebrow="More updates" title="Also in the works" />
            </FadeIn>
            <Stagger className="mt-12 grid gap-8 md:grid-cols-2">
              {rest.map((article) => (
                <StaggerItem key={article.slug}>
                  <Link
                    to={`/news/${article.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-[0_20px_60px_-28px_rgb(10_22_40/35%)] ring-1 ring-navy/[0.06] transition-shadow hover:shadow-[0_30px_70px_-28px_rgb(10_22_40/45%)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
                  >
                    <StoryArt slug={article.slug} className="h-56" label={article.title} />
                    <div className="flex flex-1 flex-col p-7 sm:p-8">
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal">{article.kicker}</p>
                      <h2 className="mt-3 font-display text-xl font-extrabold uppercase leading-snug tracking-tight text-navy">
                        {article.title}
                      </h2>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{article.dek}</p>
                      <div className="mt-6 flex items-center justify-between border-t border-navy/[0.06] pt-5">
                        <p className="text-sm text-navy/45">
                          {article.date} · {article.readTime}
                        </p>
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors group-hover:border-teal group-hover:bg-teal group-hover:text-white">
                          <ArrowRight className="h-4 w-4" aria-hidden />
                        </span>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </Container>
        </section>
      ) : null}

      <FinalCta from="surface" />
    </>
  )
}
