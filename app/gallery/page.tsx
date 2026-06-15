import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, CTABand } from "@/components/ui";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See real paver, curbing and landscaping projects completed by Venice Landscape across Venice & Sarasota County, FL.",
};

const items = [
  {
    src: "/images/pavers.jpg",
    alt: "Before and after of a paver patio installation in Venice, FL",
    caption: "Paver patio — before & after",
    wide: true,
  },
  {
    src: "/images/hero.jpg",
    alt: "Luxury paver driveway and landscaping at dusk",
    caption: "Luxury paver driveway & lighting",
  },
  {
    src: "/images/lawn-care.jpg",
    alt: "Healthy, manicured lawn in Venice, FL",
    caption: "Lush, maintained lawn",
  },
  {
    src: "/images/pavers-walkways.jpg",
    alt: "Paver walkway transformation",
    caption: "Walkway transformation",
    wide: true,
  },
  {
    src: "/images/curbing-before.jpg",
    alt: "Worn landscape edging before curbing replacement",
    caption: "Curbing — the before",
  },
  {
    src: "/images/curbing.png",
    alt: "Square, mower and slant landscape curbing profiles",
    caption: "Curbing profiles: square, mower, slant",
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Real projects across Venice & Sarasota County"
        intro="A look at the pavers, curbing and landscaping we've installed for local homeowners. Designed for beauty, built for Florida."
      />

      <section className="container-x py-16 sm:py-20">
        <div className="grid auto-rows-[220px] grid-cols-2 gap-4 sm:auto-rows-[260px] lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal
              key={item.src}
              delay={i * 50}
              className={`group relative overflow-hidden rounded-2xl shadow-sm ${
                item.wide ? "col-span-2" : ""
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 right-4 font-display text-lg text-white drop-shadow">
                {item.caption}
              </span>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-forest-900/60">
          Want to see more? Visit our 3,500 sq ft paver showroom or ask for
          recent project references during your consultation.
        </p>
      </section>

      <CTABand />
    </>
  );
}
