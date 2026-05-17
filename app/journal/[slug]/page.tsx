import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import {
  getAllSlugs,
  getPostBySlug,
  getAllPosts,
  formatPostDate,
} from '@/lib/journal';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import HeroImage from '@/components/journal/HeroImage';
import InlineFigure from '@/components/journal/InlineFigure';
import Gallery2Up from '@/components/journal/Gallery2Up';
import Gallery3Up from '@/components/journal/Gallery3Up';
import AtmosphereBreak from '@/components/journal/AtmosphereBreak';

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.summary,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.summary,
      type: 'article',
      publishedTime: post.frontmatter.date,
      authors: ['Don Christie'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.frontmatter.title,
      description: post.frontmatter.summary,
    },
  };
}

// MDX components — text components sit in the reading column; image components
// opt into full-width via data-bleed="full" via the article-grid CSS.
const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="font-display text-3xl md:text-[2.5rem] text-ink mt-16 mb-5 leading-[1.15] tracking-tight"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-display text-[1.625rem] text-ink mt-10 mb-4" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-[1.1875rem] text-graphite leading-[1.75] mb-6" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-brassDeep border-b border-brass hover:border-brassDeep transition-colors"
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-none my-7 space-y-3.5 text-[1.1875rem] text-graphite leading-[1.65]" {...props} />
  ),
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal pl-6 my-7 space-y-3.5 text-[1.1875rem] text-graphite leading-[1.65]" {...props} />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li
      className="relative pl-7 before:absolute before:left-0 before:top-[0.85em] before:w-2.5 before:h-px before:bg-brass"
      {...props}
    />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="my-14 py-10 border-t border-b border-brass font-display italic text-2xl md:text-3xl lg:text-[2.25rem] text-ink leading-[1.25] text-center"
      {...props}
    />
  ),
  hr: () => <hr className="my-12 border-t border-rule" />,
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="text-ink font-semibold" {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em className="italic" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="text-base bg-rule/60 px-1.5 py-0.5 rounded font-mono text-ink"
      {...props}
    />
  ),
  // Image-break components
  HeroImage,
  Inline: InlineFigure,
  InlineFigure,
  Gallery2Up,
  Gallery3Up,
  AtmosphereBreak,
};

export default function JournalPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  // Article structured data for rich search results
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.frontmatter.title,
    description: post.frontmatter.summary,
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.date,
    url: `https://donchristie.com/journal/${post.slug}`,
    articleSection: post.frontmatter.category,
    keywords: post.frontmatter.tags?.join(', '),
    author: {
      '@type': 'Person',
      name: 'Don Christie',
      url: 'https://donchristie.com',
    },
    publisher: {
      '@type': 'Person',
      name: 'Don Christie',
      url: 'https://donchristie.com',
    },
    image: 'https://donchristie.com/opengraph-image',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://donchristie.com/journal/${post.slug}`,
    },
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {/* 1. FULL-WIDTH HERO IMAGE */}
      <HeroImage
        label={`Hero — ${post.frontmatter.title}`}
        aspect="21/9"
      />

      {/* ARTICLE HEADER (reading column) */}
      <header className="container-wide pt-12 pb-8">
        <div className="max-w-reading mx-auto">
          <Link
            href="/journal"
            className="text-sm text-muted hover:text-brassDeep transition-colors"
          >
            ← Journal
          </Link>
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-brassDeep mt-8 mb-5">
            {post.frontmatter.category}
          </p>
          <h1 className="font-display text-display-lg md:text-display-xl text-ink leading-[1] tracking-tight max-w-[18ch]">
            {post.frontmatter.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-graphite leading-[1.55] max-w-reading">
            {post.frontmatter.summary}
          </p>
          <div className="mt-10 pt-6 border-t border-rule flex flex-wrap items-center gap-4 text-sm text-muted">
            <span className="text-graphite font-medium">Don Christie</span>
            <span aria-hidden className="text-rule">·</span>
            <time dateTime={post.frontmatter.date}>
              {formatPostDate(post.frontmatter.date)}
            </time>
            <span aria-hidden className="text-rule">·</span>
            <span>{post.readingTimeMinutes} min read</span>
          </div>
        </div>
      </header>

      {/* ARTICLE BODY (article-grid: text in reading column, image breaks full-width) */}
      <div className="article-grid pb-16">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>

      {/* TAGS */}
      {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
        <div className="container-wide pb-12">
          <div className="max-w-reading mx-auto">
            <div className="rule mb-5" />
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="eyebrow">Tags</span>
              {post.frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-surface border border-rule px-2.5 py-1 text-graphite font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* RELATED ENTRIES */}
      {related.length > 0 && (
        <section
          aria-labelledby="related-heading"
          className="bg-surface border-t border-b border-rule py-section"
        >
          <div className="container-wide">
            <h2
              id="related-heading"
              className="font-display text-3xl md:text-4xl text-ink leading-tight tracking-tight"
            >
              More from the journal
            </h2>
            <p className="mt-2 mb-10 text-sm text-muted">
              Recent entries across the same themes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/journal/${p.slug}`}
                  className="group bg-cream border border-rule hover:border-brass transition-colors overflow-hidden flex flex-col"
                >
                  <ImagePlaceholder
                    label={`Card — ${p.frontmatter.category}`}
                    aspect="4/3"
                  />
                  <div className="p-5 md:p-6 flex flex-col flex-1">
                    <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-brassDeep mb-2.5">
                      {p.frontmatter.category}
                    </p>
                    <h3 className="font-display text-xl text-ink leading-[1.2] mb-3 group-hover:text-brassDeep transition-colors">
                      {p.frontmatter.title}
                    </h3>
                    <div className="mt-auto pt-3 border-t border-rule flex items-center gap-2.5 text-[11px] text-muted">
                      <time dateTime={p.frontmatter.date}>
                        {formatPostDate(p.frontmatter.date)}
                      </time>
                      <span aria-hidden className="text-rule">·</span>
                      <span>{p.readingTimeMinutes} min</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PREV / NEXT */}
      {(previousPost || nextPost) && (
        <nav
          aria-label="More entries"
          className="container-wide py-section"
        >
          <div className="max-w-reading mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {previousPost ? (
                <Link
                  href={`/journal/${previousPost.slug}`}
                  className="group"
                  aria-label={`Previous: ${previousPost.frontmatter.title}`}
                >
                  <p className="eyebrow text-muted mb-2">← Previous</p>
                  <p className="font-display text-lg text-ink group-hover:text-brassDeep transition-colors">
                    {previousPost.frontmatter.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}
              {nextPost ? (
                <Link
                  href={`/journal/${nextPost.slug}`}
                  className="group md:text-right"
                  aria-label={`Next: ${nextPost.frontmatter.title}`}
                >
                  <p className="eyebrow text-muted mb-2">Next →</p>
                  <p className="font-display text-lg text-ink group-hover:text-brassDeep transition-colors">
                    {nextPost.frontmatter.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </nav>
      )}
    </article>
  );
}
