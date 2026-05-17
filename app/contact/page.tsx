import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Reach out to Don Christie — hospitality, AI, travel, food, podcasting, or creative strategy. Email, LinkedIn, X, and podcast enquiries.',
};

interface ContactChannel {
  label: string;
  value: string;
  href: string;
  note?: string;
  external?: boolean;
}

const PRIMARY_CHANNELS: ContactChannel[] = [
  {
    label: 'Email',
    value: 'don@donchristie.com',
    href: 'mailto:don@donchristie.com',
    note: 'Best for direct conversations, consulting enquiries, podcast invitations.',
  },
];

const SOCIAL_CHANNELS: ContactChannel[] = [
  {
    label: 'LinkedIn',
    value: '/in/chefdonchristie',
    href: 'https://linkedin.com/in/chefdonchristie',
    external: true,
    note: 'Professional updates, industry conversations.',
  },
  {
    label: 'X / Twitter',
    value: '@donchristie',
    href: '#',
    external: true,
    note: 'Build-log notes, shorter thoughts.',
  },
  {
    label: 'ExeChef',
    value: 'exechef.com',
    href: 'https://exechef.com',
    external: true,
    note: 'Working examples of the recipe operating spine.',
  },
];

const TOPICS = [
  'Hospitality operations and resort F&B',
  'AI tooling for kitchens and procurement',
  'Travel, food, and the FIRE journey',
  'Podcasting — guest appearances',
  'Creative strategy for hospitality brands',
  'Direct response marketing influences',
];

export default function ContactPage() {
  return (
    <div className="container-wide pt-section pb-section-lg">
      {/* Page header */}
      <header className="max-w-content text-center mb-section">
        <p className="eyebrow mb-4">Connect</p>
        <h1 className="font-display text-display-lg md:text-display-xl text-ink leading-[1] tracking-tight">
          Reach out
        </h1>
        <div className="accent-line my-8 mx-auto" />
        <p className="text-xl md:text-2xl text-graphite leading-[1.5] max-w-reading mx-auto">
          If something here sparks a conversation — hospitality, AI, travel,
          food, podcasting, or creative strategy — reach out.
        </p>
      </header>

      <div className="rule mb-section" />

      {/* PRIMARY CHANNELS */}
      <section className="mb-section">
        <div className="max-w-content mx-auto">
          <p className="eyebrow text-center mb-8">Direct</p>
          <div className="space-y-8">
            {PRIMARY_CHANNELS.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                className="group block bg-surface border border-rule hover:border-brass transition-colors p-10 md:p-12"
              >
                <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-brassDeep mb-3">
                  {channel.label}
                </p>
                <p className="font-display text-3xl md:text-4xl text-ink group-hover:text-brassDeep transition-colors break-all">
                  {channel.value}
                </p>
                {channel.note && (
                  <p className="mt-4 text-base text-graphite leading-relaxed">
                    {channel.note}
                  </p>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL CHANNELS */}
      <section className="mb-section">
        <div className="max-w-content mx-auto">
          <p className="eyebrow text-center mb-8">Elsewhere</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SOCIAL_CHANNELS.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.external ? '_blank' : undefined}
                rel={channel.external ? 'noopener noreferrer' : undefined}
                className="group block bg-surface border border-rule hover:border-brass transition-colors p-7 md:p-8"
              >
                <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-brassDeep mb-2">
                  {channel.label}
                </p>
                <p className="font-display text-xl md:text-2xl text-ink group-hover:text-brassDeep transition-colors mb-3">
                  {channel.value}
                </p>
                {channel.note && (
                  <p className="text-sm text-muted leading-relaxed">
                    {channel.note}
                  </p>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="rule mb-section" />

      {/* TOPICS */}
      <section className="max-w-content mx-auto mb-section">
        <div className="text-center mb-10">
          <p className="eyebrow mb-4">What I&rsquo;m happy to talk about</p>
          <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight tracking-tight">
            Topics
          </h2>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-3xl mx-auto">
          {TOPICS.map((topic, i) => (
            <li
              key={topic}
              className="flex gap-4 items-baseline pb-4 border-b border-rule"
            >
              <span className="font-display italic text-brass text-base shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-base md:text-lg text-graphite leading-snug">
                {topic}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Closing note */}
      <div className="max-w-content mx-auto text-center pt-section">
        <p className="font-display italic text-xl md:text-2xl text-muted leading-snug max-w-reading mx-auto">
          I read every message. Replies come from me, not a VA. Allow a week if
          I&rsquo;m in service.
        </p>
      </div>
    </div>
  );
}
