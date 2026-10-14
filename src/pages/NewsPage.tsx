import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { StoryArt } from '../components/news/StoryArt'
import { Seo } from '../components/seo/Seo'
import { Container } from '../components/ui/Container'
import { newsArticles } from '../content/news'

export default function NewsPage() {
  const [featured, ...rest] = newsArticles

  return (
    <>
      <Seo path="/news" />
      <section className="relative overflow-hidden border-b border-white/10 bg-navy">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_0%,rgb(13_148_136/28%),transparent)]"
          aria-hidden
        />
        <Container className="relative py-16 sm:py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-light">
            News and updates
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            What we are building next
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            A vendor marketplace for construction buying, a CRM agent that reads the customer
            file, and an intelligence layer for the Monday brief.
          </p>
        </Container>
      </section>

      <section className="bg-surface py-14 sm:py-16">
        <Container>
          {featured ? (
            <article className="surface-card overflow-hidden lg:grid lg:grid-cols-2">
              <StoryArt slug={featured.slug} className="min-h-72 lg:min-h-full" label={featured.title} />
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal">
                  {featured.kicker}
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-navy sm:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">{featured.dek}</p>
                <p className="mt-4 text-sm text-navy/45">
                  {featured.date} · {featured.readTime}
                </p>
                <Link
                  to={`/news/${featured.slug}`}
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
                >
                  Read article
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </article>
          ) : null}

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {rest.map((article) => (
              <article key={article.slug} className="surface-card flex flex-col overflow-hidden">
                <StoryArt slug={article.slug} className="h-56" label={article.title} />
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal">
                    {article.kicker}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-semibold leading-snug text-navy">
                    {article.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{article.dek}</p>
                  <p className="mt-4 text-sm text-navy/45">
                    {article.date} · {article.readTime}
                  </p>
                  <Link
                    to={`/news/${article.slug}`}
                    className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-teal transition-colors hover:text-teal-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
                  >
                    Read article
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
