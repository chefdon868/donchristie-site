import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-section-lg border-t border-rule bg-cream">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Wordmark + line */}
          <div className="md:col-span-5">
            <p className="font-display text-2xl text-ink mb-3">Don Christie</p>
            <p className="text-sm text-muted leading-relaxed max-w-sm">
              Chef. Operator. Builder. Traveller. A curious life in progress —
              hospitality, AI, travel, wealth, food, and the systems that create
              freedom.
            </p>
          </div>

          {/* Site map */}
          <nav aria-label="Footer" className="md:col-span-4">
            <p className="eyebrow mb-4">Explore</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-graphite hover:text-brassDeep transition-colors">About</Link></li>
              <li><Link href="/now" className="text-graphite hover:text-brassDeep transition-colors">Now</Link></li>
              <li><Link href="/journal" className="text-graphite hover:text-brassDeep transition-colors">Journal</Link></li>
              <li><Link href="/projects" className="text-graphite hover:text-brassDeep transition-colors">Projects</Link></li>
              <li><Link href="/uses" className="text-graphite hover:text-brassDeep transition-colors">Uses</Link></li>
              <li><Link href="/contact" className="text-graphite hover:text-brassDeep transition-colors">Contact</Link></li>
            </ul>
          </nav>

          {/* Elsewhere */}
          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Elsewhere</p>
            <ul className="space-y-2 text-sm">
              <li><a href="https://exechef.com" className="text-graphite hover:text-brassDeep transition-colors">ExeChef</a></li>
              <li><a href="https://linkedin.com/in/chefdonchristie" target="_blank" rel="noopener noreferrer" className="text-graphite hover:text-brassDeep transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-graphite hover:text-brassDeep transition-colors">X / Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="rule mt-12 mb-6" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-xs text-muted">
          <p>© {year} Don Christie</p>
          <p className="italic font-display text-sm">A grateful life in progress.</p>
        </div>
      </div>
    </footer>
  );
}
