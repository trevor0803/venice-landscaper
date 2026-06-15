import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import { PageHero, CTABand } from "@/components/ui";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Pavers & patios, artificial turf, drainage, landscape design, curbing and lawn care in Venice & Sarasota County, FL.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Everything your outdoor space needs"
        intro="One trusted, locally owned team for hardscape, turf, drainage, curbing, design and maintenance — all built for the Florida climate and backed by our lifetime workmanship guarantee."
      />

      <section className="container-x py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-forest-900/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-forest-600/30 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-50 text-forest-700 transition-colors group-hover:bg-forest-600 group-hover:text-white">
                  <s.icon className="h-6 w-6" />
                </span>
                <h2 className="mt-5 font-display text-xl text-forest-900">
                  {s.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-forest-900/70">
                  {s.short}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-forest-700">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
