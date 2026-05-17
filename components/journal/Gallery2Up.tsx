interface Gallery2UpProps {
  /** Optional eyebrow-style heading centred above the gallery. */
  heading?: string;
  /** Should be exactly two <GalleryItem> children. */
  children: React.ReactNode;
}

/**
 * Two-image side-by-side gallery, full-width break.
 * Takes children (typically two <GalleryItem>) — keeps RSC-safe primitive
 * props at the boundary so MDX usage doesn't break compileMDX serialization.
 */
export default function Gallery2Up({ heading, children }: Gallery2UpProps) {
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
          {children}
        </div>
      </div>
    </section>
  );
}
