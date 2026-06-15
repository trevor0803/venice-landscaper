import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="font-display text-6xl text-gold">404</span>
      <h1 className="mt-4 font-display text-3xl text-forest-900">
        This page wandered off the path
      </h1>
      <p className="mt-3 max-w-md text-forest-900/70">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s
        get you back to solid ground.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-full bg-forest-600 px-7 py-3 font-semibold text-white transition-colors hover:bg-forest-700"
        >
          Back home
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-forest-600/30 px-7 py-3 font-semibold text-forest-700 transition-colors hover:bg-forest-50"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
}
