import Link from 'next/link';
import type { Metadata } from 'next';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import HeroImage from '@/components/journal/HeroImage';
import Gallery2Up from '@/components/journal/Gallery2Up';
import GalleryItem from '@/components/journal/GalleryItem';
import AtmosphereBreak from '@/components/journal/AtmosphereBreak';

export const metadata: Metadata = {
  title: 'About',
  description:
    'The human story behind donchristie.com — chef career, expat resort life, Queensland Health during COVID, AI curiosity, FIRE journey, Sharon, Maggie, and the future creative strategist chapter.',
};

interface ChapterProps {
  number: string;
  title: string;
  years?: string;
  children: React.ReactNode;
}

function Chapter({ number, title, years, children }: ChapterProps) {
  return (
    <section className="mb-20 md:mb-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-3">
          <p className="font-display italic text-brass text-2xl mb-2">
            {number}
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight tracking-tight">
            {title}
          </h2>
          {years && (
            <p className="mt-3 text-sm text-muted tracking-wide">{years}</p>
          )}
        </div>
        <div className="lg:col-span-9 space-y-5 text-lg text-graphite leading-[1.75] max-w-reading">
          {children}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Hero image — full bleed */}
      <HeroImage
        label="About hero — Don in Fiji, somewhere between the resort and the back roads"
        aspect="21/9"
      />

      {/* Page intro */}
      <section className="container-wide pt-section pb-section">
        <div className="max-w-content">
          <p className="eyebrow mb-4">About</p>
          <h1 className="font-display text-display-lg md:text-display-xl text-ink leading-[1] tracking-tight">
            The long arc
          </h1>
          <div className="accent-line my-8" />
          <p className="text-xl md:text-2xl text-graphite leading-[1.5] max-w-reading">
            Chef, operator, public servant, builder, traveller, partner.
            A life assembled out of six chapters, still being written.
          </p>
        </div>
      </section>

      <div className="container-wide">
        <div className="rule mb-section" />
      </div>

      {/* CHAPTERS */}
      <section className="container-wide pb-section-lg">

        <Chapter number="I" title="The Craftsman" years="Early career">
          <p>
            I started where every chef worth their salt starts — at the bottom
            of the brigade, learning what discipline looks like when it&rsquo;s
            measured in minutes and millimetres.
          </p>
          <p>
            The years that followed were a long apprenticeship in repetition.
            Stocks, sauces, sections, services. Whatever I became later was
            built on the floor of those kitchens — the muscle memory that still
            shows up when I walk past a pass at 5am and instinctively know how
            far behind it is.
          </p>
        </Chapter>

        <Chapter number="II" title="The Operator" years="Gold Coast, Port Lincoln, the desert">
          <p>
            Somewhere in the years that followed, the job changed shape. I
            stopped being the person on the line and started being the person
            responsible for the line. Then for several lines. Then for several
            properties.
          </p>
          <p>
            The first taste of real scale was Palazzo Versace on the Gold
            Coast — a 6-star pace, a brigade running at full tilt, and the
            kind of standards that don&rsquo;t forgive shortcuts. That&rsquo;s
            where I learned what scale actually costs.
          </p>
          <p>
            Later it was Port Lincoln, then Sails in the Desert in the
            Northern Territory — supply chains running on road trains, an
            Indigenous brigade I had the privilege of training, weather that
            rewrote the schedule weekly. You learn how a single F&amp;B
            operation works in luxury, then you scale that intuition into a
            remote setting where nothing&rsquo;s down the road. Different
            schools, same lesson.
          </p>
        </Chapter>

        <Gallery2Up heading="The kitchens">
          <GalleryItem
            label="Pass at 5am — the first service of the day"
            caption="Plantation Island, Mamanuca Group."
          />
          <GalleryItem
            label="Brigade in motion — service mid-flight"
            caption="A particular kind of choreography."
          />
        </Gallery2Up>

        <Chapter number="III" title="The Public Servant" years="2020–2023 · Wide Bay, Queensland Health">
          <p>
            The COVID years pulled me out of resort hospitality and into
            government food services. I ran an operation that didn&rsquo;t have
            the luxury of a closed door. Meals had to land. People depended on
            them in a way that nothing in the private sector quite mirrors.
          </p>
          <p>
            I learned more about systems, redundancy, and the cost of getting
            it wrong than any restaurant could have taught me. It&rsquo;s the
            chapter most people don&rsquo;t know about — and it&rsquo;s the one
            that shaped how I think about operations more than any other.
          </p>
        </Chapter>

        <Chapter number="IV" title="The Builder" years="ExeChef · AI tooling for hospitality">
          <p>
            A few years ago I started building. Not from a startup playbook —
            from a stack of operational problems I&rsquo;d been carrying
            around for two decades and finally had the tools to solve.
          </p>
          <p>
            ExeChef came first. A recipe system for multi-property kitchens,
            now live across a dozen outlets and three resorts. The QR loop runs.
            The allergen panels stay current. The cards print. None of it
            looks like enterprise software because it isn&rsquo;t — it&rsquo;s
            the operating spine I always wished I had.
          </p>
          <p>
            Other experiments followed. Procurement AI. Travel AI. TacklingFish.
            This site, written in public, is part of the same arc.
          </p>
        </Chapter>

        <AtmosphereBreak
          label="The boat at first light — open water, off the Mamanuca chain"
          aspect="21/9"
          tone="deep"
          caption="The long arc, and the freer life on the other side of it."
        />

        <Chapter number="V" title="The Explorer" years="With Sharon — current chapter">
          <p>
            The most important thing I&rsquo;m building isn&rsquo;t a kitchen
            or a piece of software. It&rsquo;s the life Sharon and I are
            designing — slowly, deliberately, and with the patience that two
            decades of service work taught me.
          </p>
          <p>
            FIRE basics. Cities we&rsquo;ve circled on the map and started to
            visit in order — London, Lisbon, Bangkok, Tokyo, Mexico City, New
            York. Charters out of small ports. Long mornings at cafés.
            Maggie, the golden retriever who frames every chapter at home.
          </p>
          <p>
            The kitchens fund this. The AI tools accelerate it. But the chapter
            is its own thing.
          </p>
        </Chapter>

        <Chapter number="VI" title="The Guide" years="Forthcoming">
          <p>
            Post-FIRE, I want to work selectively as a creative strategist —
            helping brands and operators in hospitality find their place in a
            rapidly changing digital world. Direct response, positioning, AI
            systems, operational excellence, storytelling. The five disciplines
            that have shaped how I see this work.
          </p>
          <p>
            Influences worth naming: Ian Stanley, Matthew Volkwyn, Stefan
            Georgi, Frank Kern. Heritage worth honouring: the chefs who
            taught me what discipline looks like before any of this had a
            keyboard.
          </p>
          <p>
            That&rsquo;s the chapter still being written. This site is where
            some of it gets thought through out loud.
          </p>
        </Chapter>

      </section>

      {/* Closing pull quote */}
      <section className="bg-surface border-t border-b border-rule py-section">
        <div className="container-wide">
          <blockquote className="max-w-content mx-auto text-center font-display italic text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.2]">
            &ldquo;Everyone can change their own destiny.&rdquo;
          </blockquote>
          <p className="mt-6 text-center text-sm text-muted">
            The quiet belief behind every chapter.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="container-wide py-section text-center">
        <p className="eyebrow mb-4">What&rsquo;s next</p>
        <p className="font-display text-2xl md:text-3xl text-ink max-w-content mx-auto leading-tight">
          Read what I&rsquo;m thinking through in{' '}
          <Link
            href="/journal"
            className="text-brassDeep border-b border-brass hover:border-brassDeep transition-colors"
          >
            the journal
          </Link>
          , or see what I&rsquo;m focused on right now in{' '}
          <Link
            href="/now"
            className="text-brassDeep border-b border-brass hover:border-brassDeep transition-colors"
          >
            /now
          </Link>
          .
        </p>
      </section>
    </>
  );
}
