import ImagePlaceholder from '@/components/ImagePlaceholder';

interface InlineFigureProps {
  src?: string;
  alt?: string;
  label?: string;
  /** Aspect ratio. Defaults to 4/3 for inline figures. */
  aspect?: '4/3' | '16/9' | '4/5' | 'square';
  /** Optional caption shown under the image. */
  caption?: string;
}

/**
 * Inline figure within the reading column with a slight bleed.
 * Used 1-3 times per article between paragraphs.
 */
export default function InlineFigure({
  src,
  alt = '',
  label = 'Inline figure',
  aspect = '4/3',
  caption,
}: InlineFigureProps) {
  return (
    <figure
      data-bleed="reading"
      className="my-12 -mx-6 md:-mx-10"
      aria-label={caption ?? label}
    >
      {src ? (
        <div className={`w-full ${aspectMap[aspect]} relative overflow-hidden`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
        </div>
      ) : (
        <ImagePlaceholder label={label} aspect={aspect} />
      )}
      {caption && (
        <figcaption className="px-6 py-4 bg-cream border-t border-b border-rule text-xs italic font-display text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

const aspectMap = {
  '4/3': 'aspect-[4/3]',
  '16/9': 'aspect-[16/9]',
  '4/5': 'aspect-[4/5]',
  square: 'aspect-square',
};
