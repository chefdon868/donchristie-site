import ImagePlaceholder from '@/components/ImagePlaceholder';

interface HeroImageProps {
  /** Real photo path. When provided, renders as <img>. Otherwise renders the placeholder. */
  src?: string;
  /** Accessible alt text — required if src is provided. */
  alt?: string;
  /** Descriptive label shown in the placeholder, e.g. "Hero — Don at the pass, Plantation Island". */
  label?: string;
  /** Aspect ratio for the hero. Defaults to 21/9 (Uncrate-style cinematic). */
  aspect?: '21/9' | '16/9' | '4/3' | '4/5';
  /** Tone — "warm" (cream-on-rule) or "deep" (cream-on-ink). Defaults to warm. */
  tone?: 'warm' | 'deep';
}

const aspectClasses: Record<NonNullable<HeroImageProps['aspect']>, string> = {
  '21/9': 'aspect-[21/9]',
  '16/9': 'aspect-[16/9]',
  '4/3': 'aspect-[4/3]',
  '4/5': 'aspect-[4/5]',
};

/**
 * Full-bleed hero image at the top of a journal post (the Uncrate move).
 * Always renders edge-to-edge — sits OUTSIDE the article grid.
 */
export default function HeroImage({
  src,
  alt = '',
  label = 'Hero image',
  aspect = '21/9',
  tone = 'warm',
}: HeroImageProps) {
  if (src) {
    return (
      <div className={`w-full ${aspectClasses[aspect]} relative overflow-hidden border-b border-rule`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="w-full border-b border-rule">
      <ImagePlaceholder label={label} aspect={aspect} tone={tone} />
    </div>
  );
}
