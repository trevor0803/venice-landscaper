import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { sortedPosts } from "@/lib/posts";
import { PageHero, CTABand } from "@/components/ui";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Landscaping, paver and drainage tips for homeowners in Venice & Sarasota County, Florida.",
};

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const [featured, ...rest] = sortedPosts;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Tips for Southwest Florida outdoor living"
        intro="Practical advice on pavers, drainage, turf and curbing — written for the way yards really behave in Venice & Sarasota County."
      />

      <section className="container-x py-16 sm:py-20">
        {/* Featured */}
        <Reveal>
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-2xl border border-forest-900/10 bg-white shadow-sm transition-all hover:shadow-lg lg:grid-cols-2"
          >
            <div className="relative min-h-[240px] bg-forest-100">
              {featured.image && (
                <Image
                  src={featured.image}
                  alt={featured.imageAlt ?? featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <span className="text-xs font-semibold uppercase tracking-wide text-gold-dark">
                {featured.category} · {featured.readMins} min read
              </span>
              <h2 className="mt-3 font-display text-2xl leading-snug text-forest-900 group-hover:text-forest-700 sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-forest-900/70">{featured.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-forest-700">
                Read article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>

        {/* Rest */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 60}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-forest-900/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-gold-dark">
                  {post.category} · {post.readMins} min
                </span>
                <h3 className="mt-2 font-display text-lg leading-snug text-forest-900 group-hover:text-forest-700">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-forest-900/70">
                  {post.excerpt}
                </p>
                <span className="mt-4 text-xs text-forest-900/50">
                  {formatDate(post.date)}
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
