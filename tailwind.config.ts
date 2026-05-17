import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm editorial palette — Bourdain × Ferriss × Bloom
        cream: '#FAF7F2',        // Page background — warm ivory
        surface: '#FFFFFF',      // Elevated surfaces (cards)
        ink: '#1A1F2E',          // Headlines — deep navy-charcoal
        graphite: '#2B2620',     // Body text — warm charcoal
        muted: '#8B8378',        // Secondary text — warm gray
        rule: '#E8E2D5',         // Borders, dividers — subtle warm
        brass: '#B8924C',        // Single accent — warm brass
        brassDeep: '#8E6F32',    // Brass hover/pressed state
        ocean: '#3A5A78',        // Optional secondary — muted navy
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        // Editorial type scale — large, generous
        'display-xl': ['clamp(3.5rem, 8vw, 6.5rem)', { lineHeight: '0.95', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'display-sm': ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'eyebrow': ['0.75rem', { lineHeight: '1', letterSpacing: '0.18em' }],
      },
      maxWidth: {
        'reading': '38rem',      // ~608px — optimal long-form reading
        'content': '64rem',      // ~1024px — section content
        'wide': '80rem',         // ~1280px — full layout
      },
      spacing: {
        'section': '6rem',
        'section-lg': '9rem',
      },
      letterSpacing: {
        'eyebrow': '0.18em',
      },
    },
  },
  plugins: [],
};

export default config;
