import Link from 'next/link';

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/now', label: 'Now' },
  { href: '/journal', label: 'Journal' },
  { href: '/projects', label: 'Projects' },
  { href: '/uses', label: 'Uses' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="border-b border-rule bg-cream/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="container-wide flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          className="font-display text-xl md:text-2xl text-ink hover:text-brassDeep transition-colors"
          aria-label="Don Christie — home"
        >
          Don Christie
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm tracking-wide">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-graphite hover:text-brassDeep transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile: compact nav */}
        <nav aria-label="Primary mobile" className="md:hidden">
          <ul className="flex items-center gap-5 text-xs tracking-wide">
            {navItems.slice(0, 4).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-graphite hover:text-brassDeep transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
