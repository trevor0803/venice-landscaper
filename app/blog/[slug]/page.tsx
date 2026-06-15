import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { posts, getPost } from "@/lib/posts";
import { site } from "@/lib/site";
import { CTABand } from "@/components/ui";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: `${post.title} | ${site.name}`,
      description: post.excerpt,
      images: post.image ? [post.image] : undefined,
      publishedTime: post.date,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <>
      <article>
        <header className="relative overflow-hidden bg-forest-950 text-white">
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(55rem 28rem at 80% -10%, #2f7d3a 0%, transparent 60%)",
            }}
          />
          <div className="container-x relative max-w-3xl py-16 sm:py-20">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm text-cream/70 hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4" />
              All posts
            </Link>
            <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              {post.category} · {post.readMins} min read
            </span>
            <h1 className="mt-3 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-cream/60">{formatDate(post.date)}</p>
          </div>
        </header>

        {post.image && (
          <div className="container-x -mt-8 max-w-3xl">
            <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-forest-900/10">
              <Image
                src={post.image}
                alt={post.imageAlt ?? post.title}
                width={1000}
                height={520}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        )}

        <div className="container-x max-w-3xl py-12 sm:py-16">
          <div className="prose-vl">
            {post.body.map((block, i) => {
              if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
              if (block.type === "ul")
                return (
                  <ul key={i}>
                    {block.items.map((it, j) => (
                      <li key={j}>{it}</li>
                    ))}
                  </ul>
                );
              return <p key={i}>{block.text}</p>;
            })}
          </div>

          <div className="mt-12 rounded-2xl border border-forest-600/20 bg-forest-50 p-7 text-center">
            <h2 className="font-display text-2xl text-forest-900">
              Have a project in mind?
            </h2>
            <p className="mt-2 text-forest-900/70">
              Get a free consultation from the {site.name} team.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-block rounded-full bg-forest-600 px-7 py-3 font-semibold text-white transition-colors hover:bg-forest-700"
            >
              Schedule Now
            </Link>
          </div>
        </div>
      </article>

      <CTABand />
    </>
  );
}
