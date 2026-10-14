import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { StoryArt } from '../components/news/StoryArt'
import { Seo } from '../components/seo/Seo'
import { Container } from '../components/ui/Container'
import { getNewsArticle, newsArticles, type NewsBlock } from '../content/news'

function Block({ block }: { block: NewsBlock }) {
  if (block.type === 'h') {
    return (
      <h2 className="mt-10 font-display text-2xl font-semibold text-navy sm:text-3xl">{block.text}</h2>
    )
  }
  if (block.type === 'pull') {
    return (
      <blockquote className="my-8 border-l-4 border-teal pl-5">
        <p className="font-display text-xl font-medium leading-snug text-navy sm:text-2xl">{block.text}</p>
      </blockquote>
    )
  }
  if (block.type === 'points') {
    return (
      <ul className="mt-5 space-y-3">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 text-base leading-relaxed text-muted">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )
  }
  return <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{block.text}</p>
}

export default function NewsArticlePage() {
  const { slug } = useParams()
  const article = getNewsArticle(slug)
  if (!article) return <Navigate to="/news" replace />

  const others = newsArticles.filter((item) => item.slug !== article.slug)

  return (
    <>
      <Seo
        path={`/news/${article.slug}`}
        title={`${article.title} | BuildNext360`}
        description={article.dek}
        keywords={`${article.title}, BuildNext360, ${article.kicker}`}
      />
      <article>
        <header className="relative overflow-hidden border-b border-white/10 bg-navy">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_0%,rgb(13_148_136/30%),transparent)]"
            aria-hidden
          />
          <Container className="relative py-12 sm:py-16">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-light"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              News and updates
            </Link>
            <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-light">
              {article.kicker}
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">{article.dek}</p>
            <p className="mt-6 text-sm text-white/45">
              <time dateTime={article.dateIso}>{article.date}</time>
              <span aria-hidden> · </span>
              {article.readTime}
            </p>
          </Container>
          <Container className="relative pb-12 sm:pb-16">
            <StoryArt
              slug={article.slug}
              label={article.title}
              className="min-h-[22rem] overflow-hidden rounded-[1.75rem] ring-1 ring-white/10 sm:min-h-[26rem]"
            />
          </Container>
        </header>

        <Container className="grid gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_18rem] lg:py-16">
          <div className="min-w-0 max-w-3xl">
            {article.blocks.map((block, index) => (
              <Block key={`${block.type}-${index}`} block={block} />
            ))}
          </div>
          <aside className="lg:pt-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-navy/45">
              More updates
            </p>
            <div className="mt-4 space-y-4">
              {others.map((item) => (
                <Link
                  key={item.slug}
                  to={`/news/${item.slug}`}
                  className="surface-card block overflow-hidden transition-shadow hover:shadow-[var(--shadow-lift)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
                >
                  <StoryArt slug={item.slug} className="h-28" label={item.title} />
                  <div className="p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-teal">
                      {item.kicker}
                    </p>
                    <p className="mt-1 font-display text-sm font-semibold leading-snug text-navy">
                      {item.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              to="/news"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal"
            >
              All updates
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </aside>
        </Container>
      </article>
    </>
  )
}
