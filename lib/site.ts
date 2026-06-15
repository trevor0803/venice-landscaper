// Central brand + contact config for Venice Landscaper.
// Contact details + service area sourced from venicelandscaper.com.
export const site = {
  name: "Venice Landscaper",
  legalName: "Venice Landscaper",
  tagline: "Designed for Beauty. Built for Florida. Guaranteed for Life.",
  description:
    "Luxury landscaping and paver design in Venice, FL with 25+ years of experience. Pavers, landscape design, artificial turf, drainage, curbing, lighting, water features, retaining walls, irrigation and more — serving Venice & Sarasota County.",
  url: "https://venice-landscaper.vercel.app",
  // Real contact details from venicelandscaper.com
  phone: "(941) 500-9492",
  phoneHref: "tel:+19415009492",
  email: "hello@venicelandscaper.com",
  yearsExperience: "25+",
  address: {
    region: "Venice",
    state: "FL",
    street: "Venice Ave",
    zip: "34285",
    serviceArea: "Venice & Sarasota County",
  },
  // Full list of communities served (from the live site).
  serviceAreas: [
    "Venice",
    "Wellen Park",
    "Nokomis",
    "North Port",
    "Englewood",
    "Osprey",
  ],
  showroom: "3,500 Sq Ft Design Center",
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
  { label: site.yearsExperience + " Years of Experience", sub: "Landscape construction since the '90s" },
  { label: site.guarantee, sub: "Every install, guaranteed for life" },
  { label: site.showroom, sub: "Touch & compare in person" },
  { label: "Serving " + site.address.serviceArea, sub: "Locally owned & operated" },
];
