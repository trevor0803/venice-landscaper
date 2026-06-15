import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { services, getService } from "@/lib/services";
import { site } from "@/lib/site";
import { Eyebrow, CTABand } from "@/components/ui";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.short,
    openGraph: {
      title: `${service.title} | ${site.name}`,
      description: service.short,
      images: service.image ? [service.image] : undefined,
    },
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getService(params.slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-forest-950 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(55rem 28rem at 85% -10%, #2f7d3a 0%, transparent 60%)",
          }}
        />
        <div className="container-x relative grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <Eyebrow>Service</Eyebrow>
            <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/80">
              {service.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-forest-950 transition-colors hover:bg-gold-light"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                {site.phone}
              </a>
            </div>
          </div>
          {service.image && (
            <Reveal className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
              <Image
                src={service.image}
                alt={service.imageAlt ?? service.title}
                width={960}
                height={540}
                className="h-full w-full object-cover"
              />
            </Reveal>
          )}
        </div>
      </section>

      {/* Body */}
      <section className="container-x grid gap-12 py-16 sm:py-20 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {service.details.map((d) => (
            <div key={d.heading} className="mb-10 last:mb-0">
              <h2 className="font-display text-2xl text-forest-900 sm:text-3xl">
                {d.heading}
              </h2>
              <p className="mt-3 text-[1.05rem] leading-relaxed text-forest-900/80">
                {d.body}
              </p>
            </div>
          ))}
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 rounded-2xl border border-forest-900/10 bg-white p-7 shadow-sm">
            <h3 className="font-display text-xl text-forest-900">
              What&apos;s included
            </h3>
            <ul className="mt-4 space-y-3">
              {service.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-forest-600" />
                  <span className="text-sm text-forest-900/80">{h}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-forest-700"
            >
              Schedule a Consultation
            </Link>
          </div>
        </aside>
      </section>

      {/* Other services */}
      <section className="bg-forest-50/60 py-16">
        <div className="container-x">
          <h2 className="font-display text-2xl text-forest-900">
            Explore more services
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex items-center gap-4 rounded-2xl border border-forest-900/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-forest-50 text-forest-700 group-hover:bg-forest-600 group-hover:text-white">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="font-medium text-forest-900">{s.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
