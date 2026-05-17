import { cn } from '@/lib/cn';

type Aspect = 'square' | '4/5' | '3/4' | '4/3' | '16/9' | '21/9' | 'cinema';

interface ImagePlaceholderProps {
  /** Short descriptive label shown inside the placeholder, e.g. "Hero — Don in kitchen at Plantation Island". Don swaps these with real photos post-launch. */
  label: string;
  /** Aspect ratio of the image slot. Defaults to 4/5. */
  aspect?: Aspect;
  /** Visual tone — "warm" (cream tone) or "deep" (navy tone) for dark hero contexts. */
  tone?: 'warm' | 'deep';
  /** Optional className passthrough for layout sizing. */
  className?: string;
  /** Optional caption shown beneath the placeholder (italics, small). */
  caption?: string;
}

const aspectClasses: Record<Aspect, string> = {
  square: 'aspect-square',
  '4/5': 'aspect-[4/5]',
  '3/4': 'aspect-[3/4]',
  '4/3': 'aspect-[4/3]',
  '16/9': 'aspect-[16/9]',
  '21/9': 'aspect-[21/9]',
  cinema: 'aspect-[2.39/1]',
};

export default function ImagePlaceholder({
  label,
  aspect = '4/5',
  tone = 'warm',
  className,
  caption,
}: ImagePlaceholderProps) {
  const isDeep = tone === 'deep';

  return (
    <figure className={cn('w-full', className)}>
      <div
        className={cn(
          'relative w-full overflow-hidden',
          aspectClasses[aspect],
          isDeep ? 'bg-ink' : 'bg-rule',
        )}
        role="img"
        aria-label={label}
      >
        {/* Subtle texture lines suggesting a contact sheet */}
        <div
          className={cn(
            'absolute inset-0',
            'bg-[linear-gradient(135deg,transparent_47%,currentColor_49%,currentColor_51%,transparent_53%)]',
            'bg-[length:24px_24px]',
            isDeep ? 'text-muted/10' : 'text-muted/20',
          )}
          aria-hidden
        />

        {/* Centered label block */}
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className={cn(
            'text-center',
            isDeep ? 'text-cream/80' : 'text-graphite/70',
          )}>
            <p className={cn(
              'eyebrow mb-2',
              isDeep ? 'text-cream/50' : 'text-muted',
            )}>
              Image slot
            </p>
            <p className="font-display italic text-base md:text-lg leading-tight max-w-[26ch] mx-auto">
              {label}
            </p>
          </div>
        </div>

        {/* Corner mark */}
        <div className={cn(
          'absolute top-3 left-3 w-4 h-4',
          'border-t border-l',
          isDeep ? 'border-cream/30' : 'border-graphite/30',
        )} aria-hidden />
        <div className={cn(
          'absolute bottom-3 right-3 w-4 h-4',
          'border-b border-r',
          isDeep ? 'border-cream/30' : 'border-graphite/30',
        )} aria-hidden />
      </div>

      {caption && (
        <figcaption className="mt-3 text-xs italic text-muted font-display">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
