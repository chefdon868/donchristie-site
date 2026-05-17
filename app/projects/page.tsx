import Link from 'next/link';
import type { Metadata } from 'next';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'What Don Christie is building — ExeChef, TacklingFish, Procurement AI, Travel AI, and donchristie.com itself. AI tools and experiments at the intersection of hospitality and intentional living.',
};

interface Project {
  name: string;
  tagline: string;
  description: string[];
  href?: string;
  external?: boolean;
  status: 'live' | 'building' | 'experiment';
  founded: string;
  imageLabel: string;
  stack?: string[];
}

const PROJECTS: Project[] = [
  {
    name: 'ExeChef',
    tagline: 'AI tools for hospitality operators.',
    description: [
      'A recipe operating spine for multi-property kitchens. Built originally for Raffe Hotels & Resorts — a dozen outlets across three Fiji properties — and now live as a static site network with subdomains per outlet.',
      'Allergen panels, training plates, QR-coded dish cards, sub-recipes, and the operational glue that keeps a multi-brand kitchen group in sync. Static HTML, no DB, no auth, no build step. The repo is the tool.',
    ],
    href: 'https://exechef.com',
    external: true,
    status: 'live',
    founded: '2024',
    imageLabel: 'ExeChef — recipe card at the pass',
    stack: ['HTML', 'Cloudflare Pages', 'Vercel', 'QR'],
  },
  {
    name: 'TacklingFish',
    tagline: 'Long-tail SEO in the saltwater niche.',
    description: [
      'Fishing gear, charter content, and the boring-but-valuable end of outdoor SEO. An experiment in whether deep operator knowledge in an unglamorous niche compounds the way Greg Isenberg thinks it does.',
      'Eight months in. Not a content farm — a real notebook on charter fishing, written by someone who hires the gear and reads the spec sheets.',
    ],
    status: 'building',
    founded: '2025',
    imageLabel: 'TacklingFish — first light from the dive boat',
    stack: ['SEO', 'WordPress', 'Content'],
  },
  {
    name: 'Procurement AI',
    tagline: 'Forecasting, supplier scoring, RFP automation.',
    description: [
      'The operational visibility layer that hotel groups buying at scale have always needed and never had. RFPs scored against detailed spec sheets. Supplier substitution analysis. Inventory variance broken down to the SKU.',
      'Currently an internal toolkit for Raffe — supplier scorecards on autopilot. The harder question is whether this productises for other hotel groups or stays bespoke.',
    ],
    status: 'experiment',
    founded: '2025',
    imageLabel: 'Procurement — RFP at the kitchen table',
    stack: ['AI agents', 'Sheets', 'Python'],
  },
  {
    name: 'Travel AI',
    tagline: 'Agents that design better trips and a freer life.',
    description: [
      'Using AI to plan, optimise, and stress-test long-arc travel — six-month sabbaticals, multi-city circuits, low-friction logistics. The agent doesn’t book it. It changes how Sharon and I argue about the order.',
      'A working laboratory for what an &ldquo;agent-native&rdquo; life design tool actually feels like in practice.',
    ],
    status: 'experiment',
    founded: '2026',
    imageLabel: 'Travel — Bangkok morning, sliding into a café',
    stack: ['Agents', 'Maps', 'Notion'],
  },
  {
    name: 'donchristie.com',
    tagline: 'The public operating journal.',
    description: [
      'This site. A digital home, public journal, and creative operating base. Built in Next.js with an MDX-driven journal, deployed on Vercel, written in the open.',
      'Build logs, hospitality notes, AI experiments, and the occasional reflection. The compounding asset for the next chapter.',
    ],
    href: '/journal',
    external: false,
    status: 'live',
    founded: '2026',
    imageLabel: 'donchristie.com — the journal at first light',
    stack: ['Next.js', 'Tailwind', 'MDX', 'Vercel'],
  },
];

const STATUS_LABELS = {
  live: 'Live',
  building: 'Building',
  experiment: 'Experiment',
};

const STATUS_COLOURS = {
  live: 'text-brassDeep',
  building: 'text-ocean',
  experiment: 'text-muted',
};

export default function ProjectsPage() {
  return (
    <div className="container-wide pt-section pb-section-lg">
      {/* Page header */}
      <header className="max-w-reading mb-16">
        <p className="eyebrow mb-4">Projects</p>
        <h1 className="font-display text-display-lg md:text-display-xl text-ink leading-[1] tracking-tight">
          What I&rsquo;m building
        </h1>
        <div className="accent-line my-8" />
        <p className="text-lg md:text-xl text-graphite leading-[1.55]">
          Five working experiments at the intersection of hospitality, AI, and
          an intentional life. Some are live and earning. Some are still
          finding their shape. All of them are written about in{' '}
          <Link
            href="/journal"
            className="text-brassDeep border-b border-brass hover:border-brassDeep transition-colors"
          >
            the journal
          </Link>
          .
        </p>
      </header>

      <div className="rule mb-section" />

      {/* PROJECTS — one per row, alternating layout */}
      <div className="space-y-section">
        {PROJECTS.map((project, idx) => {
          const flip = idx % 2 === 1;
          return (
            <article
              key={project.name}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              {/* Image */}
              <div className={`lg:col-span-6 ${flip ? 'lg:order-2' : ''}`}>
                <ImagePlaceholder
                  label={project.imageLabel}
                  aspect="4/5"
                />
              </div>

              {/* Body */}
              <div className={`lg:col-span-6 ${flip ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-4 mb-4">
                  <p
                    className={`text-[10px] font-bold tracking-[0.22em] uppercase ${
                      STATUS_COLOURS[project.status]
                    }`}
                  >
                    {STATUS_LABELS[project.status]}
                  </p>
                  <span className="text-xs text-muted">since {project.founded}</span>
                </div>
                <h2 className="font-display text-display-md text-ink leading-tight tracking-tight">
                  {project.name}
                </h2>
                <p className="mt-4 font-display italic text-xl text-brassDeep">
                  {project.tagline}
                </p>
                <div className="accent-line my-6" />
                <div className="space-y-4">
                  {project.description.map((para, i) => (
                    <p
                      key={i}
                      className="text-base md:text-lg text-graphite leading-[1.7]"
                      dangerouslySetInnerHTML={{ __html: para }}
                    />
                  ))}
                </div>

                {project.stack && (
                  <div className="mt-8 pt-6 border-t border-rule">
                    <p className="eyebrow mb-3">Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-surface border border-rule px-2.5 py-1 text-graphite font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.href && (
                  <div className="mt-8">
                    {project.external ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base text-brassDeep border-b border-brass hover:border-brassDeep transition-colors pb-1"
                      >
                        Visit {project.name.replace('.com', '')} →
                      </a>
                    ) : (
                      <Link
                        href={project.href}
                        className="text-base text-brassDeep border-b border-brass hover:border-brassDeep transition-colors pb-1"
                      >
                        Read more →
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
