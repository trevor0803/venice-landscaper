import {
  Layers,
  Sprout,
  Droplets,
  Pencil,
  Spline,
  Scissors,
  Lightbulb,
  Waves,
  BrickWall,
  Droplet,
  Sparkles,
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
  {
    slug: "landscape-lighting",
    title: "Landscape Lighting",
    short: "Path, accent & architectural lighting that comes alive at night.",
    icon: Lightbulb,
    image: "/images/hero.jpg",
    imageAlt: "Landscape and paver lighting at a Venice, FL home at dusk",
    intro:
      "The right lighting turns a great yard into a showpiece after dark — and makes your home safer and more secure. We design and install low-voltage systems that highlight your home, plantings and hardscape.",
    highlights: [
      "Path, step & deck lighting for safety",
      "Uplighting for palms, trees & architecture",
      "Energy-efficient LED, built for the outdoors",
      "Timers & smart controls available",
    ],
    details: [
      {
        heading: "Designed for drama and safety",
        body: "We layer path lights, uplights and accent fixtures so your landscape looks intentional — never harsh — while keeping walkways, steps and entries safely lit.",
      },
      {
        heading: "Built to last in Florida",
        body: "We use corrosion-resistant, low-voltage LED fixtures and weatherproof connections that hold up to humidity, rain and salt air for years of trouble-free use.",
      },
    ],
  },
  {
    slug: "water-features",
    title: "Water Features",
    short: "Fountains, bubblers & ponds for a calming outdoor retreat.",
    icon: Waves,
    intro:
      "Add the sight and sound of moving water to your landscape. From sleek fountains and bubbling rocks to natural ponds, we design and build water features that become the centerpiece of your outdoor space.",
    highlights: [
      "Fountains, bubblers, ponds & spillways",
      "Quiet, efficient pumps & proper filtration",
      "Integrated with lighting & plantings",
      "Low-maintenance designs",
    ],
    details: [
      {
        heading: "A focal point you'll hear and feel",
        body: "The gentle sound of moving water masks road noise and creates an instantly relaxing atmosphere. We size and place each feature so it anchors the space and draws the eye.",
      },
      {
        heading: "Engineered to run clean",
        body: "We install reliable pumps, filtration and auto-fill where needed so your feature stays clear and healthy with minimal upkeep.",
      },
    ],
  },
  {
    slug: "retaining-walls",
    title: "Retaining Walls",
    short: "Structural & decorative walls that tame slopes and add definition.",
    icon: BrickWall,
    intro:
      "Retaining walls do double duty — they hold back soil and control erosion while adding structure, seating and visual interest to your landscape. We build walls that are as strong as they are good-looking.",
    highlights: [
      "Engineered for proper drainage & load",
      "Segmental block, stone & paver finishes",
      "Terracing, raised beds & seat walls",
      "Erosion & slope control",
    ],
    details: [
      {
        heading: "Strength you can't see",
        body: "A wall is only as good as what's behind it. We build on a compacted base with proper backfill and drainage so your wall stays straight and solid for the long haul.",
      },
      {
        heading: "Function that looks designed",
        body: "Beyond holding back soil, retaining walls create usable terraces, raised planting beds and built-in seating that make sloped or awkward yards far more livable.",
      },
    ],
  },
  {
    slug: "irrigation",
    title: "Irrigation & Sprinklers",
    short: "Efficient sprinkler installation, repair & smart watering.",
    icon: Droplet,
    intro:
      "A healthy Florida landscape needs the right amount of water in the right places. We install new irrigation systems and repair existing ones — tuned to keep your lawn and plantings thriving without waste.",
    highlights: [
      "New sprinkler system installation",
      "Repairs: heads, valves, lines & timers",
      "Smart, weather-based controllers",
      "Zone tuning for lawn, beds & turf",
    ],
    details: [
      {
        heading: "Water where it's needed",
        body: "We design zones around how different areas actually drink — turf, beds and shrubs each get the coverage they need, so nothing is over- or under-watered.",
      },
      {
        heading: "Fix the system you have",
        body: "Dry spots, geysers and stuck valves usually mean a quick fix, not a full replacement. We diagnose and repair existing systems and add smart controllers that adjust to the weather.",
      },
    ],
  },
  {
    slug: "paver-sealing",
    title: "Paver Sealing & Maintenance",
    short: "Protect and refresh your pavers so they look new for years.",
    icon: Sparkles,
    image: "/images/pavers.jpg",
    imageAlt: "Freshly sealed pavers in Venice, FL",
    intro:
      "Sealing protects your investment. It locks in joint sand, resists stains and weeds, and brings back that rich, just-installed color. We clean, re-sand and seal pavers of every kind.",
    highlights: [
      "Deep cleaning & weed removal",
      "Joint re-sanding for stability",
      "Color-enhancing or natural-finish sealers",
      "Protects against stains, weeds & fading",
    ],
    details: [
      {
        heading: "Why sealing matters in Florida",
        body: "Our sun, rain and humidity fade color and invite weeds and ants into the joints. A quality sealer locks the sand in place, blocks stains and keeps your pavers looking new.",
      },
      {
        heading: "Cleaned and restored first",
        body: "We don't just seal over dirt. We deep-clean, pull weeds and re-sand the joints so the finished surface is stable, uniform and protected.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
