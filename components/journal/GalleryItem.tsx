import ImagePlaceholder from '@/components/ImagePlaceholder';

interface GalleryItemProps {
  src?: string;
  alt?: string;
  label?: string;
  caption?: string;
  aspect?: '4/5' | '3/4' | '4/3' | '16/9' | 'square';
}

const aspectMap = {
  '4/5': 'aspect-[4/5]',
  '3/4': 'aspect-[3/4]',
  '4/3': 'aspect-[4/3]',
  '16/9': 'aspect-[16/9]',
  square: 'aspect-square',
};

/**
 * Single gallery item — image (or labelled placeholder) with optional caption.
 * Used as children of Gallery2Up / Gallery3Up. Primitive props only so it
 * crosses the RSC boundary cleanly when used inside MDX.
 */
export default function GalleryItem({
  src,
  alt = '',
  label = 'Gallery image',
  caption,
  aspect = '4/5',
}: GalleryItemProps) {
  return (
    <figure>
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
        <ImagePlaceholder label={label} aspect={aspect} />
      )}
      {caption && (
        <figcaption className="mt-3 text-xs italic font-display text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
