"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-cream/95 shadow-md backdrop-blur supports-[backdrop-filter]:bg-cream/80"
          : "bg-cream"
      }`}
    >
      <div className="container-x flex items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center" aria-label={`${site.name} home`}>
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={180}
            height={46}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  active
                    ? "text-forest-700"
                    : "text-forest-900/70 hover:text-forest-700"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-full border border-forest-600/30 px-4 py-2 text-sm font-semibold text-forest-700 transition-colors hover:border-forest-600 hover:bg-forest-50 sm:flex"
          >
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="hidden rounded-full bg-forest-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-forest-700 md:inline-block"
          >
            Free Consultation
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-forest-900 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-forest-900/10 bg-cream lg:hidden">
          <nav className="container-x flex flex-col py-3" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-forest-900/5 py-3 text-base font-medium text-forest-900/80"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={site.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full border border-forest-600/40 px-4 py-3 font-semibold text-forest-700"
              >
                <Phone className="h-4 w-4" />
                {site.phone}
              </a>
              <Link
                href="/contact"
                className="rounded-full bg-forest-600 px-4 py-3 text-center font-semibold text-white"
              >
                Free Consultation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
