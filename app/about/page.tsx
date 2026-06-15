import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Store, MapPin, Heart } from "lucide-react";
import { site } from "@/lib/site";
import { PageHero, SectionHeading, CTABand } from "@/components/ui";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Venice Landscape is a locally owned landscaping and paver company serving Venice & Sarasota County, FL — designed for beauty, built for Florida, guaranteed for life.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Guaranteed for life",
    body: "Our lifetime workmanship guarantee means we stand behind every install — for as long as you own your home.",
  },
  {
    icon: Store,
    title: "See before you buy",
    body: "Our 3,500 sq ft paver showroom lets you compare colors, textures and layouts in person before committing.",
  },
  {
    icon: MapPin,
    title: "Local & accountable",
    body: "We live and work here. We know Florida soil, sun and storms — and our reputation is on every job in the county.",
  },
  {
    icon: Heart,
    title: "Honest from day one",
    body: "Clear quotes, realistic timelines and straight answers. No pressure, no surprises.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Locally owned. Built for the way Florida lives outdoors."
        intro={`For over ${site.yearsExperience} years, ${site.name} has designed and installed beautiful outdoor spaces across ${site.address.serviceArea} — from paver patios and driveways to lighting, water features and full landscape design.`}
      />

      <section className="container-x grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2">
        <Reveal className="overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/images/hero.jpg"
            alt="Luxury landscaped home in Venice, FL"
            width={1000}
            height={560}
            className="h-full w-full object-cover"
          />
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="Our story"
            title="Dream outdoor spaces, done right the first time"
          />
          <div className="mt-5 space-y-4 text-[1.05rem] leading-relaxed text-forest-900/80">
            <p>
              Welcome to {site.name}. With over {site.yearsExperience} years of
              experience in landscape construction, we design and install
              beautiful outdoor spaces — from gardens and walkways to patios,
              driveways and pool decks. Whatever your vision, our goal is the
              same: create an outdoor space you&apos;ll actually want to spend
              time in.
            </p>
            <p>
              Everything we build is engineered for the Florida climate. Sandy
              soil, heavy rain, intense sun and salt air all shape how we design
              and install — so your investment looks great and lasts for years.
            </p>
            <p>
              That confidence is why we back our work with a{" "}
              <strong className="text-forest-900">
                lifetime workmanship guarantee
              </strong>
              . When you&apos;re ready, we&apos;d love to help you create your
              dream outdoor oasis.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-forest-50/60 py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why homeowners choose us"
            title="What sets Venice Landscape apart"
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-forest-900/10 bg-white p-7 shadow-sm">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-50 text-forest-700">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg text-forest-900">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest-900/70">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
