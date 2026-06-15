// Central brand + contact config for Venice Landscape.
// NOTE: phone/email are PLACEHOLDERS — replace with the real values before launch.
export const site = {
  name: "Venice Landscape",
  legalName: "Venice Landscape",
  tagline: "Designed for Beauty. Built for Florida. Guaranteed for Life.",
  description:
    "Luxury landscaping and paver design in Venice, FL. Pavers & patios, artificial turf, drainage, landscape curbing, lawn care and custom design — serving Venice & Sarasota County.",
  url: "https://venice-landscaper.vercel.app",
  // Real contact details from venicelandscaper.com
  phone: "(941) 500-9492",
  phoneHref: "tel:+19415009492",
  email: "hello@venicelandscaper.com",
  address: {
    region: "Venice",
    state: "FL",
    serviceArea: "Venice & Sarasota County",
  },
  showroom: "3,500 Sq Ft Paver Showroom",
  guarantee: "Lifetime Workmanship Guarantee",
  hours: "Mon–Fri 8:00am–5:00pm · Sat by appointment",
  social: {
    facebook: "#",
    instagram: "#",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const trustPoints = [
  { label: site.guarantee, sub: "Every install, guaranteed for life" },
  { label: site.showroom, sub: "Touch & compare in person" },
  { label: "Serving " + site.address.serviceArea, sub: "Locally owned & operated" },
];
