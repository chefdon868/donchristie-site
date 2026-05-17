import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Now',
  description:
    "What Don Christie is focused on right now. Updated periodically. Following Derek Sivers' /now convention.",
};

// Update this string whenever you refresh the page content.
const LAST_UPDATED = '16 May 2026';

interface NowGroup {
  label: string;
  items: string[];
}

const NOW_GROUPS: NowGroup[] = [
  {
    label: 'Building',
    items: [
      'Running resort F&B operations in Fiji — a dozen outlets across three properties',
      'ExeChef — the recipe operating spine for multi-property kitchens',
      'donchristie.com — a public journal, written in the open',
      'TacklingFish — long-tail SEO play in the saltwater niche',
    ],
  },
  {
    label: 'Learning',
    items: [
      'AI agents in public — Codex, HyperAgent, Hermes',
      'Procurement AI — forecasting, supplier scoring, RFP automation',
      'Travel AI — using agents to design better trips and a freer life',
    ],
  },
  {
    label: 'Living',
    items: [
      'Planning a freer life with Sharon',
      'Maggie, the golden retriever',
      'Mornings at small cafés, the slow kind',
      'Charters out of small ports — never own the gear, always rent the boat',
    ],
  },
  {
    label: 'Reading',
    items: [
      'Direct response — Ian Stanley, Matthew Volkwyn, Stefan Georgi, Frank Kern',
      'Anthony Bourdain — anything I haven&rsquo;t re-read in a while',
      'Sahil Bloom — the long-arc essays',
      'Tim Ferriss — the systems posts, not the productivity ones',
    ],
  },
];

export default function NowPage() {
  return (
    <div className="container-wide pt-section pb-section-lg">
      {/* Page header */}
      <header className="max-w-content mb-16">
        <p className="eyebrow mb-4">Now</p>
        <h1 className="font-display text-display-lg md:text-display-xl text-ink leading-[1] tracking-tight">
          What I&rsquo;m focused on
        </h1>
        <div className="accent-line my-8" />
        <p className="text-lg md:text-xl text-graphite leading-[1.55] max-w-reading">
          A snapshot of what&rsquo;s on the bench this week. Following{' '}
          <a
            href="https://nownownow.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brassDeep border-b border-brass hover:border-brassDeep transition-colors"
          >
            Derek Sivers&rsquo; /now convention
          </a>
          . Updated periodically, never in real time.
        </p>
        <p className="mt-6 text-sm text-muted">
          Last updated{' '}
          <time dateTime="2026-05-16" className="text-graphite font-medium">
            {LAST_UPDATED}
          </time>
        </p>
      </header>

      <div className="rule mb-section" />

      {/* GROUPS */}
      <div className="space-y-16 md:space-y-20">
        {NOW_GROUPS.map((group) => (
          <section key={group.label} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-3">
              <p className="eyebrow mb-3">{group.label}</p>
              <div className="accent-line" />
            </div>
            <ul className="lg:col-span-9 space-y-4 max-w-reading">
              {group.items.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-5 items-baseline pb-4 border-b border-rule last:border-b-0"
                >
                  <span className="font-display italic text-brass text-base w-8 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="text-lg text-graphite leading-snug"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="rule mt-section-lg mb-section" />

      {/* Closing */}
      <div className="max-w-content text-center">
        <p className="font-display italic text-2xl md:text-3xl text-ink leading-tight">
          Everyone can change their own destiny.
        </p>
        <p className="mt-4 text-sm text-muted">
          The quiet belief behind the bench.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-section text-center">
        <Link
          href="/journal"
          className="text-base text-brassDeep border-b border-brass hover:border-brassDeep transition-colors pb-1"
        >
          Read what I&rsquo;m thinking through →
        </Link>
      </div>
    </div>
  );
}
