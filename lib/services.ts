import {
  Layers,
  Sprout,
  Droplets,
  Pencil,
  Spline,
  Scissors,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  image?: string;
  imageAlt?: string;
  intro: string;
  highlights: string[];
  details: { heading: string; body: string }[];
};

export const services: Service[] = [
  {
    slug: "pavers",
    title: "Pavers & Patios",
    short: "Driveways, patios, pool decks & walkways in premium paver.",
    icon: Layers,
    image: "/images/pavers.jpg",
    imageAlt: "Before-and-after of a Venice, FL paver patio installation",
    intro:
      "Transform tired concrete and worn grass into a showpiece. We design and install paver driveways, patios, pool decks and walkways built to handle Florida heat, rain and salt air.",
    highlights: [
      "Driveways, patios, pool decks & walkways",
      "Sealed & sand-locked for Florida weather",
      "3,500 sq ft showroom to compare colors & textures",
      "Lifetime workmanship guarantee",
    ],
    details: [
      {
        heading: "A surface that lasts in Florida",
        body: "Unlike poured concrete, pavers flex with our sandy soil instead of cracking. If a section ever settles, individual pavers can be lifted and reset — no demolition required.",
      },
      {
        heading: "Designed in our showroom",
        body: "Visit our 3,500 sq ft paver showroom to see full-size layouts, colors and edge details before a single stone is laid. We help you match your home, pool cage and existing hardscape.",
      },
    ],
  },
  {
    slug: "artificial-turf",
    title: "Artificial Turf",
    short: "Lush, water-free lawns that stay green year-round.",
    icon: Sprout,
    image: "/images/lawn-care.jpg",
    imageAlt: "A healthy, manicured Venice, FL lawn",
    intro:
      "Get a perfect lawn without the water bill, mowing or brown patches. Our premium artificial turf looks and feels natural and is built for pets, kids and Florida sun.",
    highlights: [
      "No watering, mowing or fertilizing",
      "Pet- and child-friendly, with proper drainage",
      "UV-stabilized to resist fading",
      "Great for lawns, putting greens & pool surrounds",
    ],
    details: [
      {
        heading: "Always green, never muddy",
        body: "Our turf systems are installed over a compacted, free-draining base so water moves through fast — no standing puddles after a Florida downpour.",
      },
      {
        heading: "Lower cost over time",
        body: "Skip the irrigation, mowing, fertilizer and re-sodding. Artificial turf pays for itself over the years while staying picture-perfect.",
      },
    ],
  },
  {
    slug: "drainage",
    title: "Drainage Solutions",
    short: "Stop standing water, erosion and soggy lawns for good.",
    icon: Droplets,
    intro:
      "Florida rain finds every low spot. We diagnose and fix drainage problems with French drains, catch basins, grading and downspout routing so your yard stays usable and your foundation stays protected.",
    highlights: [
      "French drains & catch basins",
      "Re-grading for proper runoff",
      "Downspout & gutter routing",
      "Protect foundations, patios & landscaping",
    ],
    details: [
      {
        heading: "We find the real cause",
        body: "Standing water is usually a grading or runoff problem, not just a wet spot. We map how water moves across your property and design a system that sends it where it belongs.",
      },
      {
        heading: "Invisible once installed",
        body: "Drains and basins disappear beneath turf, mulch or pavers — you get a dry yard with no ugly hardware on the surface.",
      },
    ],
  },
  {
    slug: "landscape-design",
    title: "Landscape Design",
    short: "Custom outdoor spaces, plantings, lighting & water features.",
    icon: Pencil,
    image: "/images/hero.jpg",
    imageAlt: "Luxury landscaped Venice, FL home at dusk",
    intro:
      "From gardens and walkways to lighting and water features, we design and install complete outdoor spaces tailored to your home, your style and the Florida climate.",
    highlights: [
      "Full landscape design & installation",
      "Florida-friendly, low-maintenance plantings",
      "Landscape lighting & water features",
      "Irrigation / sprinkler systems",
    ],
    details: [
      {
        heading: "Built around how you live",
        body: "We start with how you want to use your yard — entertaining, relaxing, low maintenance — then design plantings, hardscape and lighting that work together.",
      },
      {
        heading: "Florida-friendly by default",
        body: "We favor plants and materials that thrive in our heat, sun and rain, so your landscape looks great with less water and upkeep.",
      },
    ],
  },
  {
    slug: "landscape-curbing",
    title: "Landscape Curbing",
    short: "Clean, continuous concrete borders for beds & walkways.",
    icon: Spline,
    image: "/images/curbing-before.jpg",
    imageAlt: "Worn landscape edging in need of replacement",
    intro:
      "Crisp, continuous concrete curbing defines your beds, keeps mulch and rock in place, and gives the whole property a finished, professional look. Choose from square, mower and slant profiles.",
    highlights: [
      "Square, mower & slant profiles",
      "Custom colors & finishes",
      "Keeps mulch, rock & turf in their place",
      "No more rotting plastic or rusted metal edging",
    ],
    details: [
      {
        heading: "Profiles for every yard",
        body: "Our Mower profile lets your mower wheel ride the edge for trim-free maintenance, while Square and Slant profiles give a more formal, defined border.",
      },
      {
        heading: "Don't settle for failing edging",
        body: "Cracked pavers, rotting plastic and rusted metal edging drag down an otherwise great yard. Continuous poured curbing fixes it in a single afternoon.",
      },
    ],
  },
  {
    slug: "lawn-care",
    title: "Lawn Care",
    short: "Mowing, edging & maintenance for a flawless lawn.",
    icon: Scissors,
    image: "/images/lawn-care.jpg",
    imageAlt: "Freshly mowed striped lawn in Venice, FL",
    intro:
      "Keep your lawn crisp and healthy without lifting a finger. Our maintenance programs keep Venice and Sarasota County yards looking their best all year.",
    highlights: [
      "Mowing, edging & trimming",
      "Bed maintenance & mulch refresh",
      "Seasonal cleanups",
      "Reliable, recurring schedules",
    ],
    details: [
      {
        heading: "Consistent, year-round care",
        body: "Florida grass never really stops growing. Our recurring schedules keep your lawn at the perfect height and your edges sharp week after week.",
      },
      {
        heading: "One crew for the whole yard",
        body: "Because we also handle pavers, curbing and drainage, we can maintain everything we install — and spot small issues before they become big ones.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
