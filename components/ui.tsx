import Link from "next/link";
import { site } from "@/lib/site";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
      <span className="h-px w-6 bg-gold" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-3 font-display text-3xl leading-tight sm:text-4xl ${
          light ? "text-white" : "text-forest-900"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-cream/80" : "text-forest-900/70"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-forest-950 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(60rem 30rem at 80% -10%, #2f7d3a 0%, transparent 60%)",
        }}
      />
      <div className="container-x relative py-16 sm:py-20">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream/80">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}

export function CTABand() {
  return (
    <section className="bg-forest-900">
      <div className="container-x flex flex-col items-center gap-6 py-14 text-center sm:py-16">
        <h2 className="max-w-2xl font-display text-3xl text-white sm:text-4xl">
          Ready to transform your outdoor space?
        </h2>
        <p className="max-w-xl text-cream/80">
          Schedule a free consultation. We&apos;ll walk your property, talk
          through ideas, and give you an honest plan — no pressure.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-gold px-7 py-3 font-semibold text-forest-950 transition-colors hover:bg-gold-light"
          >
            Schedule Your Consultation
          </Link>
          <a
            href={site.phoneHref}
            className="rounded-full border border-white/30 px-7 py-3 font-semibold text-white transition-colors hover:bg-white/10"
          >
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
