interface Gallery3UpProps {
  /** Optional eyebrow-style heading centred above the gallery. */
  heading?: string;
  /** Should be exactly three <GalleryItem> children. */
  children: React.ReactNode;
}

/**
 * Three-image grid, full-width break.
 * Takes children (typically three <GalleryItem>) — primitive props only at the
 * MDX boundary keeps next-mdx-remote v6 compileMDX happy at prerender time.
 */
export default function Gallery3Up({ heading, children }: Gallery3UpProps) {
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
          {children}
        </div>
      </div>
    </section>
  );
}
