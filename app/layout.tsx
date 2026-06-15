import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Luxury Landscaping & Pavers in Venice, FL`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Venice FL landscaping",
    "pavers Venice FL",
    "paver patio Venice",
    "artificial turf Sarasota",
    "drainage Venice FL",
    "landscape curbing",
    "landscape design Venice Florida",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Luxury Landscaping & Pavers in Venice, FL`,
    description: site.description,
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/images/hero.jpg"],
  },
  alternates: { canonical: site.url },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: `${site.url}/images/hero.jpg`,
    areaServed: site.address.serviceArea,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.region,
      addressRegion: site.address.state,
      addressCountry: "US",
    },
    slogan: site.tagline,
  };

  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
