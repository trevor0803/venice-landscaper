import Link from "next/link";
import Image from "next/image";
import {
  Award,
  ShieldCheck,
  Store,
  MapPin,
  ArrowRight,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { site, trustPoints } from "@/lib/site";
import { services } from "@/lib/services";
import { sortedPosts } from "@/lib/posts";
import { SectionHeading, Eyebrow, CTABand } from "@/components/ui";
import Reveal from "@/components/Reveal";

const trustIcons = [Award, ShieldCheck, Store, MapPin];

const steps = [
  {
    n: "01",
    title: "Free Consultation",
    body: "We visit your property, listen to your goals, and assess the site — drainage, sun, soil and all.",
  },
  {
    n: "02",
    title: "Custom Design & Quote",
    body: "You get a clear plan and an honest, itemized quote. Compare materials in our 3,500 sq ft showroom.",
  },
  {
    n: "03",
    title: "Expert Installation",
    body: "Our crews install with care and clean up like we were never there — backed for life.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-forest-950 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(50rem 28rem at 15% 0%, #2f7d3a 0%, transparent 55%), radial-gradient(40rem 24rem at 100% 100%, #c8a24a 0%, transparent 60%)",
          }}
        />
        <div className="container-x relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <Eyebrow>Luxury Landscaping &amp; Paver Design · Venice, FL</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
              Transform your outdoor space into a Florida oasis
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/80">
              With {site.yearsExperience} years of experience, {site.name}{" "}
              designs and installs beautiful, durable outdoor spaces — from
              paver patios and driveways to lighting, water features and full
              landscape design. {site.tagline}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-forest-950 transition-colors hover:bg-gold-light"
              >
                Schedule Your Consultation
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

          <Reveal className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
              <Image
                src="/images/hero.jpg"
                alt="Luxury paver driveway and landscaping at a Venice, FL home at dusk"
                width={960}
                height={540}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-forest-900/10 bg-cream">
        <div className="container-x grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((t, i) => {
            const Icon = trustIcons[i];
            return (
              <div key={t.label} className="flex items-center gap-4">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-forest-50 text-forest-700">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-semibold text-forest-900">{t.label}</p>
                  <p className="text-sm text-forest-900/60">{t.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-x py-20">
        <SectionHeading
          eyebrow="What we do"
          title="Complete outdoor services, one trusted team"
          intro="From the ground up — hardscape, turf, drainage and design — built to thrive in Southwest Florida's climate."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-forest-900/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-forest-600/30 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-50 text-forest-700 transition-colors group-hover:bg-forest-600 group-hover:text-white">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl text-forest-900">
                  {s.title}
                </h3>
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

      {/* FEATURED WORK / PAVERS */}
      <section className="bg-forest-50/60 py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="order-2 overflow-hidden rounded-2xl shadow-lg lg:order-1">
            <Image
              src="/images/pavers.jpg"
              alt="Before and after of a paver patio installation in Venice, FL"
              width={1000}
              height={500}
              className="h-full w-full object-cover"
            />
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Our specialty"
              title="Paver patios, driveways & pool decks that last"
              intro="Pavers flex with Florida's sandy soil instead of cracking like concrete — and if one ever settles, we simply lift and reset it. No demolition, no ugly patches."
            />
            <ul className="mt-6 space-y-3">
              {[
                "3,500 sq ft showroom to compare colors in person",
                "Sealed & sand-locked against heat, rain and salt air",
                "Lifetime workmanship guarantee on every install",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-forest-600" />
                  <span className="text-forest-900/80">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/services/pavers"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-forest-700"
            >
              Explore Pavers &amp; Patios
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-x py-20">
        <SectionHeading
          eyebrow="How it works"
          title="A simple path to a yard you'll love"
          align="center"
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 80}>
              <div className="relative rounded-2xl border border-forest-900/10 bg-white p-8 shadow-sm">
                <span className="font-display text-5xl text-gold/40">
                  {step.n}
                </span>
                <h3 className="mt-2 font-display text-xl text-forest-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-900/70">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* BLOG TEASER */}
      <section className="bg-forest-50/60 py-20">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="From the blog"
              title="Tips for Southwest Florida yards"
            />
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-semibold text-forest-700 hover:text-forest-900"
            >
              View all posts
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {sortedPosts.slice(0, 3).map((post, i) => (
              <Reveal key={post.slug} delay={i * 60}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-forest-900/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-gold-dark">
                    {post.category}
                  </span>
                  <h3 className="mt-2 font-display text-lg leading-snug text-forest-900 group-hover:text-forest-700">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-forest-900/70">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-forest-700">
                    Read more →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
