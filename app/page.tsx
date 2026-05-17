import Link from 'next/link';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { getAllPosts, formatPostDate } from '@/lib/journal';

// Locked from the brief — preserve verbatim
const CURRENT_FOCUS = [
  'Running resort F&B operations in Fiji',
  'Building ExeChef',
  'Growing TacklingFish through SEO',
  'Learning AI agents in public — Codex, HyperAgent, Hermes',
  'Planning a freer life with Sharon',
];

const LIFE_THEMES = [
  'Kitchens',
  'Code',
  'Capital',
  'Travel',
  'Food',
  'Freedom',
  'Gratitude',
];

interface ProjectCard {
  name: string;
  tagline: string;
  href?: string;
  status: 'live' | 'building' | 'experiment';
}

const PROJECTS: ProjectCard[] = [
  {
    name: 'ExeChef',
    tagline: 'AI tools for hospitality operators. Recipe systems, allergen panels, and the operating spine for a multi-property kitchen.',
    href: 'https://exechef.com',
    status: 'live',
  },
  {
    name: 'TacklingFish',
    tagline: 'Fishing gear, SEO, and outdoor content experiments — a long-tail SEO play in the saltwater niche.',
    status: 'building',
  },
  {
    name: 'Procurement AI',
    tagline: 'Forecasting, supplier scoring, RFP automation, and operational visibility for hotel groups buying at scale.',
    status: 'experiment',
  },
  {
    name: 'Travel AI',
    tagline: 'Using agents to design better trips and a freer life — itineraries, logistics, and the unglamorous infrastructure of intentional travel.',
    status: 'experiment',
  },
  {
    name: 'donchristie.com',
    tagline: 'The public operating journal. Build logs, hospitality notes, AI experiments — written in the open.',
    href: '/',
    status: 'live',
  },
];

export default function Home() {
  const posts = getAllPosts();
  const latestPosts = posts.slice(0, 3);

  return (
    <>
      {/* ===== HERO ===== */}
      <section
        aria-labelledby="hero-heading"
        className="container-wide pt-section pb-section-lg"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">A curious life in progress</p>
            <h1
              id="hero-heading"
              className="font-display text-display-xl text-ink"
            >
              Don Christie
            </h1>
            <p className="mt-6 font-display italic text-display-sm text-brassDeep">
              Chef. Operator. Builder. Traveller.
            </p>
            <div className="accent-line my-10" />
            <p className="text-lg md:text-xl text-graphite leading-relaxed max-w-xl">
              A curious life in progress — hospitality, AI, travel, wealth,
              food, and the systems that create freedom.
            </p>
            <p className="mt-6 text-base text-muted leading-relaxed max-w-xl">
              I&rsquo;m a Group Executive Chef working across island resorts in
              Fiji, building AI tools, documenting what I&rsquo;m learning, and
              designing a freer life with Sharon.
            </p>
          </div>

          <div className="lg:col-span-5">
            <ImagePlaceholder
              label="Hero portrait — Don in kitchen at Plantation Island, Fiji"
              aspect="4/5"
            />
          </div>
        </div>
      </section>

      <div className="container-wide">
        <div className="rule" />
      </div>

      {/* ===== CURRENT FOCUS ===== */}
      <section
        aria-labelledby="focus-heading"
        className="container-wide py-section"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4">Right now</p>
            <h2
              id="focus-heading"
              className="font-display text-display-md text-ink leading-tight"
            >
              What I&rsquo;m focused on
            </h2>
            <p className="mt-6 text-muted text-sm">
              Updated periodically.{' '}
              <Link
                href="/now"
                className="text-brassDeep border-b border-brass hover:border-brassDeep transition-colors"
              >
                Full /now page
              </Link>
            </p>
          </div>

          <ul className="lg:col-span-8 space-y-5">
            {CURRENT_FOCUS.map((item, i) => (
              <li
                key={item}
                className="flex gap-5 items-baseline pb-5 border-b border-rule last:border-b-0"
              >
                <span className="font-display italic text-brass text-lg w-8 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-lg text-graphite leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="container-wide">
        <div className="rule" />
      </div>

      {/* ===== LATEST WRITING ===== */}
      <section
        aria-labelledby="writing-heading"
        className="container-wide py-section"
      >
        <header className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="eyebrow mb-4">Latest writing</p>
            <h2
              id="writing-heading"
              className="font-display text-display-md text-ink leading-tight"
            >
              From the journal
            </h2>
          </div>
          <Link
            href="/journal"
            className="text-sm text-brassDeep border-b border-brass hover:border-brassDeep transition-colors self-start md:self-auto"
          >
            All entries →
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {latestPosts.map((post) => (
            <article key={post.slug} className="group flex flex-col">
              <Link href={`/journal/${post.slug}`} aria-label={post.frontmatter.title}>
                <ImagePlaceholder
                  label={`Journal — ${post.frontmatter.category}`}
                  aspect="4/5"
                />
              </Link>
              <div className="mt-5">
                <p className="eyebrow text-brassDeep mb-2">
                  {post.frontmatter.category}
                </p>
                <h3 className="font-display text-2xl text-ink leading-tight">
                  <Link
                    href={`/journal/${post.slug}`}
                    className="group-hover:text-brassDeep transition-colors"
                  >
                    {post.frontmatter.title}
                  </Link>
                </h3>
                <p className="mt-3 text-graphite text-sm leading-relaxed">
                  {post.frontmatter.summary}
                </p>
                <p className="mt-4 text-xs text-muted">
                  {formatPostDate(post.frontmatter.date)} · {post.readingTimeMinutes} min
                </p>
              </div>
            </article>
          ))}

          {latestPosts.length === 0 && (
            <p className="text-muted italic md:col-span-3">
              The first entry is on its way.
            </p>
          )}
        </div>
      </section>

      <div className="container-wide">
        <div className="rule" />
      </div>

      {/* ===== PROJECTS ===== */}
      <section
        aria-labelledby="projects-heading"
        className="container-wide py-section"
      >
        <header className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="eyebrow mb-4">Projects</p>
            <h2
              id="projects-heading"
              className="font-display text-display-md text-ink leading-tight"
            >
              What I&rsquo;m building
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-sm text-brassDeep border-b border-brass hover:border-brassDeep transition-colors self-start md:self-auto"
          >
            All projects →
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.map((project) => {
            const card = (
              <div
                className={`group h-full bg-surface border border-rule p-7 md:p-9 transition-colors hover:border-brass flex flex-col`}
              >
                <div className="flex items-center justify-between mb-5">
                  <p className="font-display text-2xl text-ink group-hover:text-brassDeep transition-colors">
                    {project.name}
                  </p>
                  <StatusBadge status={project.status} />
                </div>
                <p className="text-graphite text-sm leading-relaxed flex-1">
                  {project.tagline}
                </p>
                {project.href && (
                  <p className="mt-6 text-xs text-muted">
                    {project.href.startsWith('http') ? project.href.replace(/^https?:\/\//, '') : 'Read more'}
                  </p>
                )}
              </div>
            );

            return project.href ? (
              project.href.startsWith('http') ? (
                <a
                  key={project.name}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {card}
                </a>
              ) : (
                <Link key={project.name} href={project.href} className="block">
                  {card}
                </Link>
              )
            ) : (
              <div key={project.name}>{card}</div>
            );
          })}
        </div>
      </section>

      <div className="container-wide">
        <div className="rule" />
      </div>

      {/* ===== LIFE THEMES — typographic moment ===== */}
      <section
        aria-labelledby="themes-heading"
        className="container-wide py-section-lg"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4">Life themes</p>
            <h2
              id="themes-heading"
              className="font-display text-display-md text-ink leading-tight"
            >
              What this site is about
            </h2>
            <p className="mt-6 text-graphite leading-relaxed">
              Seven words that map most of what I think about, work on, and
              write here. The shape of a life designed with intention.
            </p>
          </div>

          <ul className="lg:col-span-8 space-y-1 md:space-y-2">
            {LIFE_THEMES.map((theme, i) => (
              <li key={theme} className="group">
                <div className="flex items-baseline gap-6 md:gap-10 py-3 md:py-4 border-b border-rule">
                  <span className="font-sans text-xs text-muted w-6 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-none group-hover:text-brassDeep transition-colors">
                    {theme}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="container-wide">
        <div className="rule" />
      </div>

      {/* ===== CONTACT / CONNECT ===== */}
      <section
        aria-labelledby="contact-heading"
        className="container-wide py-section-lg"
      >
        <div className="max-w-content mx-auto text-center">
          <p className="eyebrow mb-4">Connect</p>
          <h2
            id="contact-heading"
            className="font-display text-display-lg text-ink leading-tight"
          >
            Reach out
          </h2>
          <div className="accent-line my-8 mx-auto" />
          <p className="text-lg md:text-xl text-graphite leading-relaxed max-w-xl mx-auto">
            If something here sparks a conversation — hospitality, AI, travel,
            food, podcasting, or creative strategy — reach out.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
            <Link
              href="/contact"
              className="text-brassDeep border-b border-brass hover:border-brassDeep transition-colors pb-0.5"
            >
              Contact page
            </Link>
            <a
              href="#"
              className="text-graphite hover:text-brassDeep transition-colors border-b border-rule hover:border-brass pb-0.5"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-graphite hover:text-brassDeep transition-colors border-b border-rule hover:border-brass pb-0.5"
            >
              X / Twitter
            </a>
            <a
              href="https://exechef.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-graphite hover:text-brassDeep transition-colors border-b border-rule hover:border-brass pb-0.5"
            >
              ExeChef
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function StatusBadge({ status }: { status: ProjectCard['status'] }) {
  const styles = {
    live: 'text-brassDeep',
    building: 'text-ocean',
    experiment: 'text-muted',
  };
  const labels = {
    live: 'Live',
    building: 'Building',
    experiment: 'Experiment',
  };
  return (
    <span className={`eyebrow ${styles[status]}`}>{labels[status]}</span>
  );
}
