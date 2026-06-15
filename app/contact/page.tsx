import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";
import { PageHero } from "@/components/ui";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Schedule a free landscaping or paver consultation with Venice Landscape, serving Venice & Sarasota County, FL.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Schedule your free consultation"
        intro="Tell us about your project and we'll reach out to set up a no-pressure consultation. Prefer to talk now? Give us a call."
      />

      <section className="container-x grid gap-12 py-16 sm:py-20 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h2 className="font-display text-2xl text-forest-900">Get in touch</h2>
          <p className="mt-3 text-forest-900/70">
            We serve homeowners across {site.address.serviceArea}.
          </p>

          <ul className="mt-8 space-y-5">
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-forest-50 text-forest-700">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-forest-900/60">Call us</p>
                <a href={site.phoneHref} className="font-semibold text-forest-900 hover:text-forest-700">
                  {site.phone}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-forest-50 text-forest-700">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-forest-900/60">Email</p>
                <a href={`mailto:${site.email}`} className="font-semibold text-forest-900 hover:text-forest-700">
                  {site.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-forest-50 text-forest-700">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-forest-900/60">Service area</p>
                <p className="font-semibold text-forest-900">{site.address.serviceArea}</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-forest-50 text-forest-700">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-forest-900/60">Hours</p>
                <p className="font-semibold text-forest-900">{site.hours}</p>
              </div>
            </li>
          </ul>

          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-forest-600/20 bg-forest-50 p-5">
            <ShieldCheck className="h-8 w-8 flex-none text-forest-600" />
            <p className="text-sm text-forest-900/80">
              Every install is backed by our{" "}
              <strong>lifetime workmanship guarantee</strong>.
            </p>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-forest-900/10 bg-white p-7 shadow-sm sm:p-9">
            <h2 className="font-display text-2xl text-forest-900">
              Request a consultation
            </h2>
            <p className="mt-2 text-sm text-forest-900/60">
              Fill out the form and we&apos;ll be in touch shortly.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
