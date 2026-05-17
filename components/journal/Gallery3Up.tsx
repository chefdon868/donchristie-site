import ImagePlaceholder from '@/components/ImagePlaceholder';

interface GalleryItem {
  src?: string;
  alt?: string;
  label?: string;
  caption?: string;
}

interface Gallery3UpProps {
  images: [GalleryItem, GalleryItem, GalleryItem];
  /** Optional eyebrow-style heading centred above the gallery. */
  heading?: string;
  /** Aspect ratio for all three images. Defaults to 4/5. */
  aspect?: '4/5' | '3/4' | '4/3' | '16/9' | 'square';
}

/**
 * Three-image grid, full-width break.
 * Used for thematic showcases — e.g. "what you'll find here".
 */
export default function Gallery3Up({
  images,
  heading,
  aspect = '4/5',
}: Gallery3UpProps) {
  return (
    <section
      data-bleed="full"
      className="my-20"
      aria-label={heading ?? 'Three-image gallery'}
    >
      <div className="container-wide">
        {heading && (
          <div className="text-center mb-8">
            <p className="eyebrow text-brassDeep">{heading}</p>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
          {images.map((item, i) => (
            <figure key={i}>
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
                <ImagePlaceholder label={item.label ?? `Image ${i + 1}`} aspect={aspect} />
              )}
              {item.caption && (
                <figcaption className="mt-2 text-xs italic font-display text-muted text-center">
                  {item.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const aspectMap = {
  '4/5': 'aspect-[4/5]',
  '3/4': 'aspect-[3/4]',
  '4/3': 'aspect-[4/3]',
  '16/9': 'aspect-[16/9]',
  square: 'aspect-square',
};
