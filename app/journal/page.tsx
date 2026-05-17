import Link from 'next/link';
import type { Metadata } from 'next';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import {
  getAllPosts,
  formatPostDate,
  JOURNAL_CATEGORIES,
  type JournalPost,
} from '@/lib/journal';

export const metadata: Metadata = {
  title: 'Journal',
  description:
    'A public notebook on hospitality, AI, travel, and the systems that create freedom. Build logs, operator notes, AI experiments, and the occasional reflection.',
};

export default function JournalIndexPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  // Only show category chips that actually have posts.
  const usedCategories = JOURNAL_CATEGORIES.filter((cat) =>
    posts.some((p) => p.frontmatter.category === cat),
  );

  return (
    <div className="container-wide pt-section pb-section">
      {/* Page header */}
      <header className="max-w-reading mb-12 md:mb-14">
        <p className="eyebrow mb-3">Journal</p>
        <h1 className="font-display text-display-lg text-ink leading-none">
          A public notebook
        </h1>
        <p className="mt-6 text-base md:text-lg text-graphite leading-relaxed">
          Build logs, hospitality notes, AI experiments, and the occasional
          reflection. No editorial calendar — just whatever I&rsquo;m thinking
          through this week.
        </p>
      </header>

      {/* Category filter — sharp pill row */}
      <nav
        aria-label="Filter by category"
        className="flex flex-wrap items-center gap-2 py-6 border-t border-b border-rule mb-14"
      >
        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted mr-3">
          Filter
        </span>
        <Link
          href="/journal"
          className="text-[13px] font-medium px-3.5 py-1.5 border border-rule bg-cream text-graphite hover:border-brass hover:text-brassDeep transition-colors"
        >
          All
        </Link>
        {usedCategories.map((cat) => (
          <Link
            key={cat}
            href={`/journal?cat=${encodeURIComponent(cat)}`}
            className="text-[13px] font-medium px-3.5 py-1.5 border border-rule bg-cream text-graphite hover:border-brass hover:text-brassDeep transition-colors"
          >
            {cat}
          </Link>
        ))}
        <span className="ml-auto text-xs text-muted">
          {posts.length} {posts.length === 1 ? 'entry' : 'entries'}
        </span>
      </nav>

      {/* Featured card */}
      {featured && (
        <div className="mb-14">
          <FeaturedCard post={featured} />
        </div>
      )}

      {/* Latest grid */}
      {rest.length > 0 && (
        <>
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="font-display text-2xl text-ink">Latest entries</h2>
            <span className="text-xs text-muted">
              Showing {rest.length} of {posts.length}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-x-7 lg:gap-y-10">
            {rest.map((post) => (
              <JournalCard key={post.slug} post={post} />
            ))}
          </div>
        </>
      )}

      {posts.length === 0 && (
        <p className="text-muted italic">The first entry is on its way.</p>
      )}

      <div className="pt-20 pb-4 text-center">
        <p className="text-xs text-muted">
          You&rsquo;ve reached the end. The next entries are in draft.
        </p>
        <div className="accent-line mt-3 mx-auto" />
      </div>
    </div>
  );
}

function FeaturedCard({ post }: { post: JournalPost }) {
  return (
    <Link
      href={`/journal/${post.slug}`}
      className="group block bg-surface border border-rule hover:border-brass transition-colors overflow-hidden"
      aria-label={`Featured: ${post.frontmatter.title}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-7 p-9 md:p-12 lg:p-14 flex flex-col justify-center order-2 md:order-1">
          <p className="inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.22em] uppercase text-brassDeep mb-6">
            <span className="w-6 h-px bg-brass" />
            Featured
          </p>
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brassDeep mb-4">
            {post.frontmatter.category}
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.05] group-hover:text-brassDeep transition-colors max-w-[18ch]">
            {post.frontmatter.title}
          </h2>
          <p className="mt-5 text-base md:text-lg text-graphite leading-relaxed max-w-[36em]">
            {post.frontmatter.summary}
          </p>
          <div className="mt-8 flex items-center gap-3 text-xs text-muted">
            <time dateTime={post.frontmatter.date}>
              {formatPostDate(post.frontmatter.date)}
            </time>
            <span aria-hidden className="text-rule">·</span>
            <span>{post.readingTimeMinutes} min read</span>
          </div>
        </div>

        <div className="md:col-span-5 order-1 md:order-2 relative">
          <div className="aspect-[16/10] md:aspect-auto md:h-full md:min-h-[420px]">
            <ImagePlaceholder
              label={`Featured hero — ${post.frontmatter.title}`}
              aspect="16/9"
              className="md:h-full"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

function JournalCard({ post }: { post: JournalPost }) {
  return (
    <article className="group bg-surface border border-rule hover:border-brass transition-colors overflow-hidden flex flex-col">
      <Link
        href={`/journal/${post.slug}`}
        aria-label={post.frontmatter.title}
        className="block"
      >
        <ImagePlaceholder
          label={`Card — ${post.frontmatter.category}`}
          aspect="4/3"
        />
      </Link>
      <div className="p-5 md:p-6 flex flex-col flex-1">
        <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-brassDeep mb-2.5">
          {post.frontmatter.category}
        </p>
        <h3 className="font-display text-[1.375rem] leading-[1.2] text-ink mb-2.5 group-hover:text-brassDeep transition-colors">
          <Link href={`/journal/${post.slug}`}>{post.frontmatter.title}</Link>
        </h3>
        <p className="text-sm text-graphite leading-[1.55] mb-4 flex-1">
          {post.frontmatter.summary}
        </p>
        <div className="pt-3.5 border-t border-rule flex items-center gap-2.5 text-[11px] text-muted">
          <time dateTime={post.frontmatter.date}>
            {formatPostDate(post.frontmatter.date)}
          </time>
          <span aria-hidden className="text-rule">·</span>
          <span>{post.readingTimeMinutes} min</span>
        </div>
      </div>
    </article>
  );
}
