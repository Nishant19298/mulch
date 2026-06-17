// Static site data for Mulch & Green Landscaping
// All copy below is derived directly from the client's brief (PPT + Word doc).

export const BRAND = {
  name: "Mulch & Green Landscaping",
  shortName: "Mulch & Green",
  tagline: "Creating beautiful communities in and around Windsor & Essex",
  closingLine: "Let's create a stunning outdoor space together!",
  email: "moudgil1975@yahoo.com",
  phone: "+1 (226) 348-5048",
  phoneRaw: "+12263485048",
  whatsapp: "12263485048",
  country: "Canada",
  region: "Ontario",
  serviceArea: "Windsor & Essex County",
  hours: [
    { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM – 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ],
  social: {
    facebook: "https://www.facebook.com/share/1Kme1q6GLK/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/mulch_and_green_landscape?igsh=MTZuaHVub3kwbnUzZw%3D%3D&utm_source=qr",
  },
};

// Brand Promise — drawn directly from the client's Word brief.
export const BRAND_PROMISE = {
  identity: "To be a unique name in the landscape industry — a pride of the Windsor & Essex region.",
  promise: "Every opportunity that comes our way departs an impeccable, long-lasting impression through our affordable, functional, yet beautiful landscape solutions.",
};

// Vision & Mission — verbatim from client brief.
export const VISION = "Create a beautiful community in and around Windsor and Essex through exceptional landscaping solutions.";
export const MISSION = "Affordable and realistic designs, impeccable execution, total fulfillment, and trusted landscaping solutions.";

// Why Choose Us — from slide 10.
export const WHY_CHOOSE_US = [
  { icon: "ShieldCheck", title: "Reliable Service",          text: "Showing up on time, finishing on time — every project, every visit." },
  { icon: "Award",       title: "High-Quality Craftsmanship", text: "Detail-driven workmanship that lasts season after season." },
  { icon: "Tags",        title: "Affordable Pricing",          text: "Transparent quotes with no hidden costs — fair value, premium results." },
  { icon: "Heart",       title: "Customer-Satisfaction Focused", text: "Your fulfillment is the measure of every project we deliver." },
];

// Real client project photos (local /projects/...). `-sm.jpg` is the lazy thumbnail.
const P = (file) => ({
  full: `/projects/${file}.jpg`,
  sm:   `/projects/${file}-sm.jpg`,
});

/* ============================================================
   SERVICES — exactly the 6 categories from the client brief.
   Each one has rich sub-items (the bullet points the client supplied).
============================================================ */
export const SERVICES = [
  {
    slug: "landscape-design",
    name: "Landscape Design",
    icon: "Sprout",
    short: "Manual and software-generated landscape designs with better project visualization.",
    items: [
      "Manual and software-generated landscape designs",
      "Better project visualization",
      "Customized outdoor concepts",
    ],
    overview:
      "Our experts create both manual and software-generated designs for better visualization of the project. Every design is a customized outdoor concept built around your home, lifestyle, and the realities of the Windsor & Essex climate.",
  },
  {
    slug: "hardscape-services",
    name: "Hardscape Services",
    icon: "Layers",
    short: "European-style patios, concrete driveways, accent walls, stone borders, fences and more.",
    items: [
      "European-style patios (interlock)",
      "Concrete patios & driveways",
      "Front porch & decks",
      "Accent walls",
      "Stone pathways & decorative borders / edging",
      "Vinyl and wooden fences",
    ],
    overview:
      "From European-style interlock patios to concrete driveways, accent walls and custom fences — our hardscape services give your property the structure, function and curb appeal it deserves.",
  },
  {
    slug: "softscape-services",
    name: "Softscape Services",
    icon: "Flower2",
    short: "Kentucky Blue Grass sodding, sprinkler systems, drip irrigation, mulching & stone covers.",
    items: [
      "Kentucky Blue Grass sodding (process-driven for longevity)",
      "Automatic & manual sprinkler systems with zoned plant beds / kitchen garden",
      "Plant beds & kitchen gardens with drip irrigation",
      "Premium mulching and decorative stone covers",
    ],
    overview:
      "Our softscape work is process-driven for longevity — from Kentucky Blue Grass sod and zoned sprinkler systems to drip-irrigated plant beds and finished mulch / stone cover. Lush, healthy, and built to thrive in Windsor & Essex.",
  },
  {
    slug: "drainage-lawn-solutions",
    name: "Drainage & Lawn Solutions",
    icon: "Droplets",
    short: "French drains, lawn grading, water-logging correction and proper drainage design.",
    items: [
      "French drains for problem areas",
      "Lawn grading and re-grading",
      "Water-logging correction",
      "Low-spot creation to direct water away from the home",
    ],
    overview:
      "Bad grading and standing water ruin even the best landscapes. We diagnose drainage issues, install French drains, re-grade your lawn and engineer low spots that move water away from your home — so every other improvement holds up.",
  },
  {
    slug: "planting-garden-design",
    name: "Planting & Garden Design",
    icon: "Trees",
    short: "Ornamental trees, shrubs, TFS-principle planting, boulders and paved edging.",
    items: [
      "Ornamental trees and shrubs",
      "TFS-principle-based planting design",
      "Boulders and paved edging accents",
      "Sunlight- and watering-optimized plant placement",
    ],
    overview:
      "We place every tree, shrub and accent on the TFS principle — Texture, Form & Structure — and optimize for sunlight and watering needs. Boulders and paved edging give the design a clean, intentional finish.",
  },
  {
    slug: "maintenance-services",
    name: "Maintenance Services",
    icon: "Scissors",
    short: "Lawn mowing, plant-bed weeding, certified pesticide sprays, pruning and tree cutting.",
    items: [
      "Regular lawn mowing & edging",
      "Weeding of plant beds",
      "Certified pesticide sprays",
      "Pruning, shaping and tree cutting",
    ],
    overview:
      "Keep what we (or you) built looking immaculate. From weekly lawn mowing and plant-bed weeding to certified pesticide sprays and seasonal pruning — our maintenance crews keep your property looking its best year-round.",
  },
];

export const SERVICE_DETAILS = {
  benefits: [
    "Affordable and realistic designs",
    "Impeccable execution by experienced crews",
    "Total fulfillment — your satisfaction is the goal",
    "Premium materials and trusted brands",
    "Optimized for the Windsor & Essex climate",
    "Transparent pricing with no hidden costs",
  ],
  process: [
    { step: "01", title: "Consult",   text: "On-site visit to understand your space, goals, and budget." },
    { step: "02", title: "Design",    text: "Manual sketches and software-generated 3D renders for clear visualization." },
    { step: "03", title: "Build",     text: "Skilled crews install with premium materials and impeccable craftsmanship." },
    { step: "04", title: "Maintain",  text: "Optional maintenance plans keep your outdoor space looking pristine." },
  ],
  faq: [
    { q: "Do you offer free estimates?", a: "Yes. We provide free, no-obligation estimates for all projects in the Windsor & Essex region." },
    { q: "Are you licensed and insured?", a: "Absolutely. Mulch & Green Landscaping is fully licensed and carries comprehensive liability coverage." },
    { q: "How long does a typical project take?", a: "Small jobs wrap up in 1–3 days. Full design-build projects typically take 2–4 weeks depending on scope and weather." },
    { q: "Do you guarantee your work?", a: "Yes — we stand behind our workmanship and pass through full manufacturer warranties on installed materials." },
    { q: "Do you offer ongoing maintenance?", a: "Yes — lawn mowing, weeding, certified pesticide sprays, pruning and tree cutting are all available on a seasonal plan." },
  ],
};

export const PROJECTS = [
  { id: 1,  title: "Curb-Appeal Frontyard Refresh",       category: "Frontyard", city: "Windsor, ON",     image: P("IMG_4231").full, sm: P("IMG_4231").sm },
  { id: 2,  title: "Modern Stone Entrance & Steps",       category: "Hardscape", city: "Windsor, ON",     image: P("IMG_4242").full, sm: P("IMG_4242").sm },
  { id: 3,  title: "Stacked Stone Pathway & Railing",     category: "Hardscape", city: "LaSalle, ON",     image: P("IMG_4245").full, sm: P("IMG_4245").sm },
  { id: 4,  title: "Backyard Resort Retreat",             category: "Backyard",  city: "Tecumseh, ON",    image: P("IMG_4237").full, sm: P("IMG_4237").sm },
  { id: 5,  title: "Backyard Paver Patio Installation",   category: "Patio",     category2: "Backyard",   city: "Amherstburg, ON", image: P("IMG_4244").full, sm: P("IMG_4244").sm },
  { id: 6,  title: "Backyard Hardscape & Garden Build",   category: "Backyard",  city: "Essex, ON",       image: P("IMG_4241").full, sm: P("IMG_4241").sm },
  { id: 7,  title: "Fresh Sod Installation",              category: "Lawn Care", city: "Windsor, ON",     image: P("IMG_4238").full, sm: P("IMG_4238").sm },
  { id: 8,  title: "Frontyard Lawn Restoration",          category: "Frontyard", city: "Windsor, ON",     image: P("IMG_4240").full, sm: P("IMG_4240").sm },
  { id: 9,  title: "Seasonal Lawn Maintenance",           category: "Lawn Care", city: "Lakeshore, ON",   image: P("IMG_4236").full, sm: P("IMG_4236").sm },
  { id: 10, title: "Garden Bed Cleanup & Mulching",       category: "Garden",    city: "Windsor, ON",     image: P("IMG_4235").full, sm: P("IMG_4235").sm },
  { id: 11, title: "Concrete Driveway & Walkway",         category: "Hardscape", city: "LaSalle, ON",     image: P("IMG_4243").full, sm: P("IMG_4243").sm },
  { id: 12, title: "Lawn Renovation Prep",                category: "Lawn Care", city: "Tecumseh, ON",    image: P("IMG_4239").full, sm: P("IMG_4239").sm },
];

export const PROJECT_CATEGORIES = ["All", "Backyard", "Frontyard", "Hardscape", "Garden", "Patio", "Lawn Care"];

export const TESTIMONIALS = [
  { name: "Sarah Mitchell", city: "Windsor, ON",     rating: 5, text: "Mulch & Green completely transformed our backyard into the retreat we always wanted. Affordable and absolutely impeccable execution." },
  { name: "James O'Connor", city: "LaSalle, ON",     rating: 5, text: "Incredible stone entrance and accent wall! The crew was professional, on-time, and the finish exceeded our expectations." },
  { name: "Priya Sharma",   city: "Tecumseh, ON",    rating: 5, text: "From design to install, communication was outstanding. Our frontyard is now the best on the block. Worth every dollar." },
  { name: "Marc Tremblay",  city: "Amherstburg, ON", rating: 5, text: "Reliable and high-quality — their crew handled our sodding and sprinkler system flawlessly. Highly recommend to anyone in Essex County." },
  { name: "Emily Chen",     city: "Essex, ON",       rating: 5, text: "Beautiful garden design with TFS-principle planting. They truly understand the Windsor & Essex climate and how to make it thrive." },
  { name: "Daniel Foster",  city: "Lakeshore, ON",   rating: 5, text: "The European-style interlock patio they built is stunning — solid, level, and gorgeous. We host every weekend now. 10/10 experience." },
];

export const SERVICE_AREAS = [
  { city: "Windsor",     desc: "Premium landscaping across Windsor's residential neighbourhoods." },
  { city: "LaSalle",     desc: "Hardscape and garden specialists serving LaSalle homes." },
  { city: "Tecumseh",    desc: "Backyard transformations and lawn care across Tecumseh." },
  { city: "Essex",       desc: "Custom design and seasonal maintenance for Essex properties." },
  { city: "Amherstburg", desc: "Interlocking, patios, and curb-appeal projects." },
  { city: "Lakeshore",   desc: "Lakefront-friendly landscaping and outdoor living spaces." },
  { city: "Kingsville",  desc: "Garden design, sod installation, and full-service yard care." },
  { city: "Leamington",  desc: "Driveways, walkways, and premium stone work." },
  { city: "Belle River", desc: "Luxury landscaping and outdoor lighting design." },
  { city: "Harrow",      desc: "Year-round care including seasonal cleanups." },
  { city: "McGregor",    desc: "Lawn maintenance and irrigation systems." },
  { city: "Essex County",desc: "Serving towns and rural properties across Essex County." },
];

// Gallery — ONLY real client photos (top priority per client request).
export const GALLERY_IMAGES = [
  P("IMG_4245"), P("IMG_4242"), P("IMG_4241"), P("IMG_4244"),
  P("IMG_4231"), P("IMG_4237"), P("IMG_4240"), P("IMG_4238"),
  P("IMG_4236"), P("IMG_4235"), P("IMG_4243"), P("IMG_4239"),
];
