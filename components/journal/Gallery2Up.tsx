import ImagePlaceholder from '@/components/ImagePlaceholder';

interface GalleryItem {
  src?: string;
  alt?: string;
  label?: string;
  caption?: string;
}

interface Gallery2UpProps {
  left: GalleryItem;
  right: GalleryItem;
  /** Optional eyebrow-style heading centred above the gallery. */
  heading?: string;
  /** Aspect ratio for both images. Defaults to 4/5. */
  aspect?: '4/5' | '3/4' | '4/3' | '16/9' | 'square';
}

/**
 * Two-image side-by-side gallery, full-width break.
 * Visually separates major sections of an article.
 */
export default function Gallery2Up({
  left,
  right,
  heading,
  aspect = '4/5',
}: Gallery2UpProps) {
  return (
    <section
      data-bleed="full"
      className="my-20 bg-surface border-t border-b border-rule py-14 md:py-16"
      aria-label={heading ?? 'Two-image gallery'}
    >
      <div className="container-wide">
        {heading && (
          <div className="text-center mb-8">
            <p className="eyebrow text-brassDeep">{heading}</p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <GalleryFigure item={left} aspect={aspect} />
          <GalleryFigure item={right} aspect={aspect} />
        </div>
      </div>
    </section>
  );
}

function GalleryFigure({
  item,
  aspect,
}: {
  item: GalleryItem;
  aspect: NonNullable<Gallery2UpProps['aspect']>;
}) {
  return (
    <figure>
      {item.src ? (
        <div className={`w-full ${aspectMap[aspect]} relative overflow-hidden`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.src}
            alt={item.alt ?? ''}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ) : (
        <ImagePlaceholder label={item.label ?? 'Gallery image'} aspect={aspect} />
      )}
      {item.caption && (
        <figcaption className="mt-3 text-xs italic font-display text-muted">
          {item.caption}
        </figcaption>
      )}
    </figure>
  );
}

const aspectMap = {
  '4/5': 'aspect-[4/5]',
  '3/4': 'aspect-[3/4]',
  '4/3': 'aspect-[4/3]',
  '16/9': 'aspect-[16/9]',
  square: 'aspect-square',
};
