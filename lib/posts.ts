export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readMins: number;
  category: string;
  image?: string;
  imageAlt?: string;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "pavers-vs-concrete-florida",
    title: "Pavers vs. Concrete in Florida: Which Lasts Longer?",
    excerpt:
      "Poured concrete cracks, pavers flex. Here's why pavers tend to win in Southwest Florida's sandy soil and brutal sun.",
    date: "2026-05-28",
    readMins: 5,
    category: "Pavers",
    image: "/images/pavers.jpg",
    imageAlt: "Paver patio installation in progress in Venice, FL",
    body: [
      {
        type: "p",
        text: "It's the question we hear most in our showroom: should I pour concrete or install pavers? Both have their place, but in Venice and Sarasota County the answer leans heavily toward pavers — and it comes down to how our soil and weather behave.",
      },
      { type: "h2", text: "Sandy soil moves — concrete doesn't" },
      {
        type: "p",
        text: "Southwest Florida sits on sandy, shifting soil. A solid concrete slab is rigid, so when the ground settles unevenly the slab cracks. Pavers are individual units laid over a flexible, compacted base. They move with the ground instead of fighting it, which is why you rarely see the long spider-web cracks that plague concrete driveways here.",
      },
      { type: "h2", text: "Repairs are night and day" },
      {
        type: "p",
        text: "If a paver ever settles or stains, we lift that single paver and reset or replace it — the repair is invisible. Fixing cracked concrete means cutting out a section (or the whole slab) and re-pouring, leaving an obvious patch.",
      },
      { type: "h2", text: "Heat, rain and salt air" },
      {
        type: "ul",
        items: [
          "Pavers have built-in joints that let water drain instead of pooling.",
          "Their textured surface stays cooler and less slippery around pools.",
          "Quality pavers are color-fast and hold up to salt air far better than stamped concrete coatings.",
        ],
      },
      { type: "h2", text: "When concrete still makes sense" },
      {
        type: "p",
        text: "Concrete can be the budget-friendly choice for a purely functional slab out of sight. But for any surface you'll see and use every day — driveways, patios, pool decks, walkways — pavers deliver better looks, easier repairs and a longer life in our climate.",
      },
      {
        type: "p",
        text: "Want to compare options in person? Our 3,500 sq ft showroom lets you see full-size layouts before you commit. Schedule a free consultation and we'll help you choose.",
      },
    ],
  },
  {
    slug: "fix-standing-water-venice-fl-yard",
    title: "How to Fix Standing Water in Your Venice, FL Yard",
    excerpt:
      "Puddles that linger for days after a storm are a drainage problem, not bad luck. Here's how we diagnose and fix them.",
    date: "2026-05-12",
    readMins: 6,
    category: "Drainage",
    body: [
      {
        type: "p",
        text: "If part of your yard turns into a pond every time it rains, you're not alone — it's one of the most common calls we get. The good news: standing water is almost always fixable once you understand why it's happening.",
      },
      { type: "h2", text: "Why water pools in Florida yards" },
      {
        type: "ul",
        items: [
          "Low spots and improper grading that trap runoff.",
          "Compacted or clay-heavy fill that won't absorb water.",
          "Downspouts dumping roof water right next to the house.",
          "Hardscape that blocks the yard's natural drainage path.",
        ],
      },
      { type: "h2", text: "The fixes we use" },
      {
        type: "p",
        text: "There's no single magic product — good drainage combines a few techniques tailored to how water actually moves across your property.",
      },
      {
        type: "ul",
        items: [
          "French drains: gravel-filled trenches with perforated pipe that collect and carry water away.",
          "Catch basins: surface drains that capture pooling water and pipe it to a safe outlet.",
          "Re-grading: reshaping the soil so water flows away from the home and low spots.",
          "Downspout routing: piping roof water well away from the foundation.",
        ],
      },
      { type: "h2", text: "Why DIY often fails" },
      {
        type: "p",
        text: "A drain in the wrong spot just moves the puddle. We map elevations and runoff before installing anything, so water has somewhere to go. Done right, the whole system hides beneath turf, mulch or pavers — you'd never know it's there.",
      },
      {
        type: "p",
        text: "Tired of soggy grass and mosquitoes? Book a consultation and we'll walk your property and recommend a fix.",
      },
    ],
  },
  {
    slug: "artificial-turf-worth-it-southwest-florida",
    title: "Is Artificial Turf Worth It in Southwest Florida?",
    excerpt:
      "Between water restrictions, heat and constant mowing, more Venice homeowners are switching to turf. Here's the honest math.",
    date: "2026-04-30",
    readMins: 5,
    category: "Artificial Turf",
    image: "/images/lawn-care.jpg",
    imageAlt: "Lush green lawn in Venice, FL",
    body: [
      {
        type: "p",
        text: "Artificial turf has come a long way from the plastic carpet of decades past. Today's turf looks and feels remarkably natural — and in Southwest Florida, it solves several headaches at once.",
      },
      { type: "h2", text: "The case for turf" },
      {
        type: "ul",
        items: [
          "No watering — a big deal during dry-season restrictions.",
          "No mowing, edging or fertilizing.",
          "Always green, even in heavy shade or high-traffic spots where grass struggles.",
          "Pet- and kid-friendly, with fast drainage built into the base.",
        ],
      },
      { type: "h2", text: "What about the heat?" },
      {
        type: "p",
        text: "Quality turf is UV-stabilized so it won't fade, and proper infill plus a free-draining base keep it stable. For areas in direct sun, we can recommend cooler-running products and shading strategies.",
      },
      { type: "h2", text: "The honest math" },
      {
        type: "p",
        text: "Turf costs more up front than sod. But when you add up years of irrigation, mowing, fertilizer and periodic re-sodding, most homeowners come out ahead — while enjoying a perfect lawn the entire time. It's not right for every yard, but for the right space it's one of the best long-term investments you can make.",
      },
      {
        type: "p",
        text: "Curious whether your yard is a good candidate? We'll give you a straight answer during a free consultation.",
      },
    ],
  },
  {
    slug: "landscape-curbing-profiles-explained",
    title: "Landscape Curbing 101: Square, Mower & Slant Profiles",
    excerpt:
      "Continuous concrete curbing is the fastest way to make a yard look finished. Here's how to choose the right profile.",
    date: "2026-04-15",
    readMins: 4,
    category: "Curbing",
    image: "/images/curbing-before.jpg",
    imageAlt: "Old, failing landscape edging before replacement",
    body: [
      {
        type: "p",
        text: "If your beds are edged with cracked pavers, rotting plastic or rusty metal strips, continuous concrete curbing is a dramatic, affordable upgrade. It's poured in one continuous line that flows with the curves of your landscape — and you can install it in a single afternoon.",
      },
      { type: "h2", text: "The three profiles" },
      {
        type: "ul",
        items: [
          "Square: a clean, formal edge with crisp 90-degree corners — great for modern homes.",
          "Mower: a gently sloped lip your mower wheel can ride, so you can cut right to the edge with no trimming.",
          "Slant: an angled face that reads softer than square while still defining the bed.",
        ],
      },
      { type: "h2", text: "Why it's worth it" },
      {
        type: "ul",
        items: [
          "Keeps mulch, rock and turf exactly where they belong.",
          "Eliminates the constant re-edging of bare beds.",
          "Adds a continuous, custom-colored line that ties the whole yard together.",
        ],
      },
      {
        type: "p",
        text: "We can match nearly any color and finish to complement your home and existing hardscape. Ready to ditch the failing edging? Reach out for a quote.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export const sortedPosts = [...posts].sort((a, b) =>
  a.date < b.date ? 1 : -1
);
