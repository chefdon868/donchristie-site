import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uses',
  description:
    "Tools, services, and frameworks Don Christie actually uses — for kitchens, AI experiments, travel planning, and direct response work. A working /uses page.",
};

interface UseGroup {
  label: string;
  description?: string;
  items: { name: string; note?: string; href?: string }[];
}

const USE_GROUPS: UseGroup[] = [
  {
    label: 'AI & agents',
    description: 'What I use to build, run, and supervise agents.',
    items: [
      {
        name: 'Codex',
        note: 'For codegen and repo work — the workhorse for ExeChef and donchristie.com builds.',
      },
      {
        name: 'HyperAgent',
        note: 'Multi-agent orchestration. Where most of this site was scaffolded.',
        href: 'https://hyperagent.com',
      },
      {
        name: 'ChatGPT',
        note: 'Daily driver for one-shot writing and reasoning passes.',
      },
      {
        name: 'Hermes',
        note: 'Experimenting with agent-native workflows for procurement and travel.',
      },
    ],
  },
  {
    label: 'Hosting & infrastructure',
    description: 'The boring layer that keeps everything live.',
    items: [
      {
        name: 'Vercel',
        note: 'Hosts every ExeChef outlet, the property hubs, and this site. The Next.js + GitHub auto-deploy loop is hard to beat.',
        href: 'https://vercel.com',
      },
      {
        name: 'Cloudflare',
        note: 'DNS for exechef.com and donchristie.com. Apex flattening, DNS-only CNAMEs, sensible TTLs.',
        href: 'https://cloudflare.com',
      },
      {
        name: 'GitHub',
        note: 'Source of truth for every site I run. chefdon868/raffe-recipes is the live ExeChef repo.',
        href: 'https://github.com/chefdon868',
      },
    ],
  },
  {
    label: 'Writing & thinking',
    description: 'The slower tools where most of the actual work happens.',
    items: [
      {
        name: 'Obsidian',
        note: 'Plain-text notebook. Every operational pattern eventually ends up here first.',
        href: 'https://obsidian.md',
      },
      {
        name: 'MDX',
        note: 'How journal entries get written and rendered on this site. Frontmatter + markdown + custom components.',
      },
      {
        name: 'Google Sheets',
        note: 'Still the universal language for hotel groups. Cost reports, supplier scorecards, RFPs.',
      },
    ],
  },
  {
    label: 'Frameworks & influences',
    description: 'Not tools — but the operating principles behind the work.',
    items: [
      {
        name: 'Direct response — Ian Stanley',
        note: 'On positioning and the architecture of a useful offer.',
      },
      {
        name: 'Direct response — Matthew Volkwyn',
        note: 'On the discipline of clarity in commercial writing.',
      },
      {
        name: 'Copy — Stefan Georgi',
        note: 'On rhythm, voice, and earned authority in long-form sales writing.',
      },
      {
        name: 'Marketing — Frank Kern',
        note: 'On magnetic positioning and "useful content as authority."',
      },
    ],
  },
  {
    label: 'Travel planning',
    description: 'For the long arc.',
    items: [
      {
        name: 'Skyscanner / Google Flights',
        note: 'Routing across the global circuit. Comparing flight + city combinations weekly.',
      },
      {
        name: 'Numbeo',
        note: 'Sanity-check on cost-of-living for the FIRE math.',
      },
      {
        name: 'Custom travel agents',
        note: 'AI agents I’ve built for itinerary stress-testing — written about in the journal.',
      },
    ],
  },
];

export default function UsesPage() {
  return (
    <div className="container-wide pt-section pb-section-lg">
      {/* Page header */}
      <header className="max-w-reading mb-16">
        <p className="eyebrow mb-4">Uses</p>
        <h1 className="font-display text-display-lg md:text-display-xl text-ink leading-[1] tracking-tight">
          The toolkit
        </h1>
        <div className="accent-line my-8" />
        <p className="text-lg md:text-xl text-graphite leading-[1.55]">
          What I actually reach for — for kitchens, AI experiments, writing,
          and the long arc. Not affiliate links, not sponsored. Just what&rsquo;s
          on the bench this season.
        </p>
      </header>

      <div className="rule mb-section" />

      {/* GROUPS */}
      <div className="space-y-16 md:space-y-20">
        {USE_GROUPS.map((group) => (
          <section
            key={group.label}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
          >
            <div className="lg:col-span-4">
              <p className="eyebrow mb-3">{group.label}</p>
              <div className="accent-line mb-4" />
              {group.description && (
                <p className="text-sm text-muted leading-relaxed max-w-xs">
                  {group.description}
                </p>
              )}
            </div>

            <ul className="lg:col-span-8 space-y-6 max-w-reading">
              {group.items.map((item, i) => (
                <li
                  key={i}
                  className="pb-6 border-b border-rule last:border-b-0 last:pb-0"
                >
                  <div className="flex items-baseline gap-4 flex-wrap">
                    <h2 className="font-display text-xl md:text-2xl text-ink">
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="hover:text-brassDeep transition-colors"
                        >
                          {item.name}
                        </a>
                      ) : (
                        item.name
                      )}
                    </h2>
                  </div>
                  {item.note && (
                    <p className="mt-2 text-base text-graphite leading-relaxed">
                      {item.note}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* Closing note */}
      <div className="mt-section-lg max-w-reading">
        <div className="rule mb-8" />
        <p className="font-display italic text-lg text-muted">
          This page changes as the toolkit changes. Last refresh: May 2026.
        </p>
      </div>
    </div>
  );
}
