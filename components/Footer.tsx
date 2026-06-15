import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { nav, site } from "@/lib/site";
import { services } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="mt-24 bg-forest-950 text-cream/80">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={200}
            height={52}
            className="h-11 w-auto rounded bg-cream/95 p-1.5"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            {site.tagline}
          </p>
          <p className="mt-4 text-sm text-cream/60">
            {site.guarantee} · {site.showroom}
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg text-white">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-white">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-gold">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-white">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-gold" />
              <a href={site.phoneHref} className="hover:text-gold">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-gold" />
              <a href={`mailto:${site.email}`} className="hover:text-gold">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-gold" />
              <span>Serving {site.address.serviceArea}</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 text-gold" />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-cream/50 sm:flex-row">
          <p>
            © {2026} {site.legalName}. All rights reserved.
          </p>
          <p>Designed for Beauty. Built for Florida. Guaranteed for Life.</p>
        </div>
      </div>
    </footer>
  );
}
