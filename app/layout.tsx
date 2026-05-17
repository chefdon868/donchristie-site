import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://donchristie.com'),
  title: {
    default: 'Don Christie — Chef. Operator. Builder. Traveller.',
    template: '%s — Don Christie',
  },
  description:
    'A curious life in progress — hospitality, AI, travel, wealth, food, and the systems that create freedom. Group Executive Chef working across island resorts in Fiji, building AI tools, and designing a freer life.',
  keywords: [
    'Don Christie',
    'hospitality AI',
    'resort chef',
    'hospitality operations',
    'AI for kitchens',
    'creative strategist',
    'FIRE travel',
    'expat chef',
    'ExeChef',
    'Fiji resort chef',
  ],
  authors: [{ name: 'Don Christie' }],
  creator: 'Don Christie',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://donchristie.com',
    siteName: 'Don Christie',
    title: 'Don Christie — Chef. Operator. Builder. Traveller.',
    description:
      'A curious life in progress — hospitality, AI, travel, wealth, food, and the systems that create freedom.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Don Christie — Chef. Operator. Builder. Traveller.',
    description:
      'A curious life in progress — hospitality, AI, travel, wealth, food, and the systems that create freedom.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Site-wide structured data — Person + WebSite for rich search results.
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Don Christie',
  url: 'https://donchristie.com',
  email: 'don@donchristie.com',
  jobTitle: 'Group Executive Chef',
  description:
    'Group Executive Chef at Raffe Hotels and Resorts (Fiji). Building AI tools for hospitality, writing in public.',
  sameAs: [
    'https://linkedin.com/in/chefdonchristie',
    'https://exechef.com',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Raffe Hotels and Resorts',
  },
  knowsAbout: [
    'Hospitality Operations',
    'F&B Management',
    'Multi-property kitchens',
    'AI for Hospitality',
    'Procurement',
    'Resort Operations',
    'Food Safety',
    'FIRE',
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Don Christie',
  url: 'https://donchristie.com',
  description:
    'A curious life in progress — hospitality, AI, travel, wealth, food, and the systems that create freedom.',
  author: {
    '@type': 'Person',
    name: 'Don Christie',
    url: 'https://donchristie.com',
  },
  inLanguage: 'en',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* JSON-LD structured data for search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personJsonLd, websiteJsonLd]),
          }}
        />
      </body>
    </html>
  );
}
