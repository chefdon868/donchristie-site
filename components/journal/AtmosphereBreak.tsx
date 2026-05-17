import ImagePlaceholder from '@/components/ImagePlaceholder';

interface AtmosphereBreakProps {
  src?: string;
  alt?: string;
  label?: string;
  /** Aspect ratio. Defaults to 21/9 cinema. */
  aspect?: '21/9' | '16/9' | 'cinema';
  /** Tone — defaults to "deep" (ink background) for the atmospheric moment. */
  tone?: 'warm' | 'deep';
  /** Optional caption on the dark band below. */
  caption?: string;
}

/**
 * Full-bleed atmospheric break — sits between major article sections.
 * Defaults to deep tone with a dark caption strip beneath.
 */
export default function AtmosphereBreak({
  src,
  alt = '',
  label = 'Atmospheric break',
  aspect = '21/9',
  tone = 'deep',
  caption,
}: AtmosphereBreakProps) {
  return (
    <figure
      data-bleed="full"
      className="my-20 border-t border-b border-rule"
      aria-label={caption ?? label}
    >
      {src ? (
        <div className={`w-full ${aspectMap[aspect]} relative overflow-hidden`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ) : (
        <ImagePlaceholder label={label} aspect={aspect} tone={tone} />
      )}
      {caption && (
        <figcaption className="px-6 py-4 bg-ink text-xs italic font-display text-cream/60 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

const aspectMap = {
  '21/9': 'aspect-[21/9]',
  '16/9': 'aspect-[16/9]',
  cinema: 'aspect-[2.39/1]',
};
