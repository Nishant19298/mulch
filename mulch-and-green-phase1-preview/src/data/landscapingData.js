// Data for the restructured Landscaping section: Hardscape, Softscape (+ Irrigation), Creative Plant Beds & Garden Design.
// Photos referenced here live in /public/process/ — a mix of real client project photos
// (process documentation supplied by the client) and the existing real finished-project
// photos already used elsewhere on the site (/public/projects/).

const PR = (file) => ({
  full: `/process/${file}.webp`,
  sm: `/process/${file}-sm.webp`,
});

/* ============================================================
   LANDSCAPING HUB (parent of Hardscape + Softscape)
============================================================ */
export const LANDSCAPING_HUB = {
  title: "Professional Landscaping Services in Windsor, ON",
  subtitle:
    "From durable hardscape installations to beautiful softscape designs, Mulch & Green Landscape helps transform front yards, backyards, gardens, driveways, and outdoor living spaces across Windsor & Essex County.",
  metaTitle: "Landscaping Services in Windsor ON | Mulch & Green Landscape",
  metaDescription:
    "Explore professional landscaping services in Windsor, ON including hardscape and softscape solutions for front yards, backyards, gardens, pathways, driveways, and outdoor spaces.",
};

/* ============================================================
   HARDSCAPE
============================================================ */
export const HARDSCAPE = {
  slug: "hardscape",
  name: "Hardscape Services",
  title: "Hardscape Services in Windsor, ON",
  subtitle:
    "Strong, clean, and long-lasting outdoor surfaces for driveways, pathways, patios, front yards, backyards, and garden spaces.",
  metaTitle: "Hardscape Services Windsor ON | Pathways, Driveways & Outdoor Spaces",
  metaDescription:
    "Get professional hardscape services in Windsor, ON including pathways, driveways, patios, stone areas, garden edging, excavation, base preparation, installation, and finishing.",
  whatIs:
    "Hardscape includes the non-living parts of landscaping such as stone work, pathways, driveways, patios, edging, retaining borders, walkways, gravel areas, and outdoor surface installations. It gives structure, function, and long-term durability to the outdoor space.",
  heroImage: PR("hs-finished-flagstonepatio-1"),
  examples: [
    "Garden pathways",
    "Stone walkways",
    "Driveway preparation and installation",
    "Backyard hardscape areas",
    "Front yard hardscape layout",
    "Patio base preparation",
    "Decorative stone areas",
    "Garden edging",
    "Gravel or stone surface installation",
    "Outdoor sitting area base preparation",
    "Retaining border areas",
    "Paver installation",
    "Outdoor walkway installation",
  ],
  process: [
    {
      step: "01",
      title: "Site Visit & Requirement Discussion",
      text: "We visit the property, understand the client's requirement, check the outdoor area, and discuss the desired use of the space such as pathway, driveway, patio, backyard, front yard, or garden area.",
      image: PR("hs-sitevisit-1"),
      alt: "Landscaper reviewing a Windsor backyard with the homeowner before starting a hardscape project",
    },
    {
      step: "02",
      title: "Measurement & Area Planning",
      text: "We take accurate measurements, review the ground level, check slope and drainage direction, and plan the correct layout before starting the work.",
      image: PR("hs-excavation-trench-1"),
      alt: "Marking and measuring a trench line for hardscape edging in a Windsor front yard",
    },
    {
      step: "03",
      title: "Design & Material Selection",
      text: "We help decide the shape, layout, stone type, border style, gravel, pavers, or other material according to the project requirement and property style.",
      image: PR("hs-finished-flagstonepatio-1"),
      alt: "Natural flagstone and retaining wall block selected for a Windsor backyard patio design",
    },
    {
      step: "04",
      title: "Excavation / Ground Digging",
      text: "The required area is excavated properly. Old soil, grass, roots, or unwanted material is removed to create a strong base for the hardscape installation.",
      image: PR("hs-excavation-equipment-1"),
      alt: "Mini excavator and skid steer excavating a backyard for hardscape installation in Windsor",
    },
    {
      step: "05",
      title: "Base Preparation & Metaling",
      text: "A proper base is prepared using crushed stone, gravel, or suitable base material. This step is important for strength, drainage, and long-term stability.",
      image: PR("hs-baseprep-gravel-1"),
      alt: "Gravel base preparation spread across a Windsor driveway before paver installation",
    },
    {
      step: "06",
      title: "Leveling & Compaction",
      text: "The base is leveled and compacted properly so that the final surface remains strong, even, and durable over time.",
      image: PR("hs-compaction-2"),
      alt: "Plate compactor compacting the gravel base for a backyard hardscape project in Windsor",
    },
    {
      step: "07",
      title: "Installation",
      text: "Pavers, stones, gravel, edging, or selected hardscape materials are installed according to the approved layout and design.",
      image: PR("hs-installation-flagstone-1"),
      alt: "Flagstone installation over crushed gravel base for a backyard patio walkway in Windsor",
    },
    {
      step: "08",
      title: "Finishing & Cleaning",
      text: "Final adjustments, edge finishing, surface cleaning, and detailing are completed so the area looks clean, professional, and ready to use.",
      image: PR("hs-installation-stonesteps-1"),
      alt: "Finishing details on a stacked stone entrance step installation in Windsor",
    },
    {
      step: "09",
      title: "Final Walkthrough",
      text: "We review the completed work with the client and explain basic maintenance if needed.",
      image: PR("hs-finished-driveway-1"),
      alt: "Completed concrete driveway and front yard hardscape project ready for client walkthrough in Windsor",
    },
  ],
  gallery: [
    PR("hs-excavation-1"),
    PR("hs-excavation-equipment-2"),
    PR("hs-baseprep-gravel-2"),
    PR("hs-compaction-1"),
    PR("hs-compaction-3"),
    PR("hs-installation-pathwall-1"),
    PR("hs-installation-concretepour-1"),
    PR("hs-finished-driveway-2"),
  ],
  beforeAfter: [
    { before: PR("hs-soilprep-frontyard-1"), after: PR("hs-finished-driveway-1"), label: "Front Yard & Driveway" },
  ],
  faq: [
    { q: "What is hardscape?", a: "Hardscape means the non-living outdoor elements such as pathways, driveways, patios, stone areas, edging, and walkways." },
    { q: "Do you help with design and material selection?", a: "Yes, we help plan the layout and select suitable materials according to the property and project requirement." },
    { q: "Why is base preparation important?", a: "A strong base helps prevent sinking, shifting, poor drainage, and uneven surfaces." },
    { q: "What type of hardscape projects do you handle?", a: "We can help with pathways, walkways, driveway preparation, patio areas, garden edging, gravel areas, and outdoor surface improvements." },
  ],
  ctaText: "Ready to build a stronger and cleaner outdoor space?",
  ctaButton: "Get Free Hardscape Estimate",
};

/* ============================================================
   SOFTSCAPE
============================================================ */
export const SOFTSCAPE = {
  slug: "softscape",
  name: "Softscape Services",
  title: "Softscape Services in Windsor, ON",
  subtitle:
    "Beautiful living landscape solutions with plants, soil, mulch, sod, garden beds, trees, shrubs, flowers, and lawn improvement.",
  metaTitle: "Softscape Services Windsor ON | Plants, Mulch, Sod & Garden Beds",
  metaDescription:
    "Professional softscape services in Windsor, ON including garden beds, mulch, soil preparation, sod, flowers, shrubs, trees, lawn improvement, and seasonal planting.",
  whatIs:
    "Softscape includes all living and natural parts of landscaping. This includes plants, flowers, trees, shrubs, grass, sod, soil, mulch, garden beds, and seasonal planting. Softscape adds beauty, color, freshness, and natural value to the property.",
  heroImage: PR("ss-finished-patio-lawn-1"),
  examples: [
    "Garden bed creation",
    "Mulch installation",
    "Soil preparation",
    "Sod installation",
    "Flower planting",
    "Shrub planting",
    "Tree planting",
    "Lawn improvement",
    "Plant bed maintenance",
    "Decorative planting",
    "Seasonal garden refresh",
    "Front yard softscape design",
    "Backyard softscape design",
    "Plant replacement",
    "Soil improvement",
  ],
  process: [
    {
      step: "01",
      title: "Site Visit & Garden Area Review",
      text: "We inspect the outdoor space, sunlight, soil condition, water access, existing plants, and the client's design preference.",
      image: PR("hs-sitevisit-1"),
      alt: "Landscaper reviewing a Windsor yard for sunlight, soil, and existing plants before a softscape project",
    },
    {
      step: "02",
      title: "Measurement & Softscape Planning",
      text: "We measure the area and plan the garden bed, lawn area, plant placement, mulch area, and overall softscape layout.",
      image: PR("ss-before-backyard-1"),
      alt: "Planning the layout for a backyard softscape and garden bed project in Windsor",
    },
    {
      step: "03",
      title: "Soil & Ground Preparation",
      text: "Old weeds, unwanted grass, roots, or poor soil are removed. The ground is prepared with suitable soil or amendments where required.",
      image: PR("hs-excavation-3"),
      alt: "Soil preparation and weed removal for a garden bed in Windsor before planting",
    },
    {
      step: "04",
      title: "Garden Bed Shaping",
      text: "Garden beds are shaped properly with clean edges and a layout that matches the property style.",
      image: PR("gd-finished-treebed-1"),
      alt: "Clean curved garden bed edging shaped around a tree in a Windsor front yard",
    },
    {
      step: "05",
      title: "Plant & Material Selection",
      text: "Plants, flowers, shrubs, trees, mulch, soil, and decorative materials are selected based on sunlight, maintenance needs, and the client's preferred look.",
      image: PR("gd-finished-bed-1"),
      alt: "Shrubs, perennials, and mulch selected for a Windsor front yard garden bed",
    },
    {
      step: "06",
      title: "Planting & Installation",
      text: "Plants, shrubs, flowers, sod, or trees are installed carefully with proper spacing, depth, and layout.",
      image: PR("ss-finished-lawn-bed-1"),
      alt: "Freshly installed sod lawn and shrub bed in a Windsor backyard",
    },
    {
      step: "07",
      title: "Mulch / Soil Finishing",
      text: "Mulch or finishing soil is added to improve appearance, protect roots, reduce weeds, and hold moisture.",
      image: PR("gd-finished-treebed-1"),
      alt: "Finished mulch bed around a tree with stone border in a Windsor front yard",
    },
    {
      step: "08",
      title: "Watering & Initial Care",
      text: "The newly installed softscape is watered properly and basic care instructions are provided to the client.",
      image: PR("hs-installation-concretepour-1"),
      alt: "Garden bed watering hose set up after new planting in Windsor",
    },
    {
      step: "09",
      title: "Final Cleanup & Review",
      text: "The area is cleaned, finished, and reviewed with the client.",
      image: PR("ss-finished-patio-lawn-1"),
      alt: "Completed backyard softscape project with full sod lawn and patio area in Windsor",
    },
  ],
  gallery: [
    PR("ss-before-backyard-1"),
    PR("ss-finished-lawn-bed-1"),
    PR("gd-before-frontyard-1"),
    PR("gd-finished-treebed-1"),
    PR("gd-before-overgrown-1"),
    PR("gd-finished-bed-1"),
  ],
  beforeAfter: [
    { before: PR("ss-before-backyard-1"), after: PR("ss-finished-lawn-bed-1"), label: "Backyard Lawn & Garden Bed" },
    { before: PR("gd-before-frontyard-1"), after: PR("gd-finished-treebed-1"), label: "Front Yard Tree Bed" },
  ],
  faq: [
    { q: "What is softscape?", a: "Softscape includes plants, soil, mulch, sod, trees, shrubs, flowers, grass, and garden beds." },
    { q: "Can you create new garden beds?", a: "Yes, we can create new plant beds, prepare soil, install plants, and finish with mulch or edging." },
    { q: "Do you offer low-maintenance plant options?", a: "Yes, plant selection can be planned based on low-maintenance and seasonal requirements." },
    { q: "Can you refresh an old garden bed?", a: "Yes, old beds can be cleaned, reshaped, replanted, and finished with fresh mulch or decorative materials." },
  ],
  ctaText: "Want a fresh and beautiful outdoor look?",
  ctaButton: "Get Free Softscape Estimate",
};

/* ============================================================
   IRRIGATION (subsection under Softscape)
============================================================ */
export const IRRIGATION = {
  slug: "irrigation",
  name: "Irrigation Setup & Watering Support",
  title: "Irrigation Setup & Watering Support",
  description:
    "Proper watering is important for healthy lawns, plants, garden beds, and newly installed softscape areas. We help plan and support watering systems according to the garden or landscape requirement.",
  process: [
    {
      step: "01",
      title: "Area Inspection",
      text: "Check garden beds, lawn areas, plant zones, sunlight, and water source.",
      image: PR("ss-before-backyard-1"),
      alt: "Inspecting a Windsor backyard lawn and garden bed for irrigation planning",
    },
    {
      step: "02",
      title: "Watering Requirement Planning",
      text: "Identify which plants, lawn areas, or garden beds need regular watering.",
      image: PR("gd-finished-bed-1"),
      alt: "Reviewing plant bed watering needs in a Windsor garden",
    },
    {
      step: "03",
      title: "Irrigation Layout Planning",
      text: "Plan pipe, hose, drip line, sprinkler, or watering system placement based on the area.",
      image: PR("hs-installation-concretepour-1"),
      alt: "Planning hose and drip line layout for a garden watering system in Windsor",
    },
    {
      step: "04",
      title: "Installation Support",
      text: "Install or support the setup of irrigation lines, watering zones, or simple garden watering systems.",
      image: PR("hs-installation-concretepour-1"),
      alt: "Installing a garden watering hose line along a planted bed in Windsor",
    },
    {
      step: "05",
      title: "Testing",
      text: "Test water flow, coverage, leakage, and pressure.",
      image: PR("ss-finished-lawn-bed-1"),
      alt: "Testing water coverage on a newly installed lawn in Windsor",
    },
    {
      step: "06",
      title: "Adjustment & Guidance",
      text: "Adjust the system and explain basic watering schedule to the client.",
      image: PR("ss-finished-patio-lawn-1"),
      alt: "Final irrigation adjustment and watering guidance for a Windsor homeowner",
    },
  ],
  faq: [
    { q: "Do you help with garden watering setup?", a: "Yes, we can help plan and support simple watering or irrigation setup for garden beds, plants, and lawn areas." },
    { q: "Why is watering planning important?", a: "Proper watering helps new plants, sod, and garden beds stay healthy after installation." },
  ],
  ctaText: "Need watering support for your garden or lawn?",
  ctaButton: "Request Irrigation Support",
};

/* ============================================================
   CREATIVE PLANT BEDS & GARDEN DESIGN
============================================================ */
export const GARDEN_DESIGN = {
  slug: "creative-plant-beds-garden-design",
  name: "Creative Plant Beds & Garden Design",
  title: "Creative Plant Beds & Garden Design in Windsor, ON",
  subtitle:
    "Custom garden bed layouts and plant designs that improve curb appeal and make your outdoor space look clean, colorful, and professionally planned.",
  metaTitle: "Creative Plant Beds & Garden Design Windsor ON | Mulch & Green Landscape",
  metaDescription:
    "Custom creative plant beds and garden design services in Windsor, ON. Improve curb appeal with flower beds, mulch beds, shrubs, plants, edging, and professional garden layouts.",
  whatIs:
    "Creative plant beds and garden design focus on planning, shaping, and installing attractive garden spaces using plants, flowers, shrubs, mulch, soil, edging, and decorative elements. This service is ideal for front yards, backyards, entrance areas, side yards, and property borders.",
  heroImage: PR("gd-finished-treebed-1"),
  examples: [
    "Custom plant bed layout",
    "Front yard garden design",
    "Backyard garden design",
    "Flower bed design",
    "Mulch bed installation",
    "Shrub and plant placement",
    "Decorative edging",
    "Soil preparation",
    "Seasonal color planning",
    "Low-maintenance garden design",
    "Curb appeal improvement",
    "Garden refresh",
    "Plant replacement",
    "Decorative border design",
  ],
  process: [
    {
      step: "01",
      title: "Design Consultation",
      text: "We discuss the client's vision, preferred style, maintenance expectations, color choices, and outdoor space needs.",
      image: PR("hs-sitevisit-1"),
      alt: "Garden design consultation with a homeowner in Windsor",
    },
    {
      step: "02",
      title: "Area Measurement & Layout Planning",
      text: "We measure the space and plan the size, shape, border, and design flow of the plant bed or garden area.",
      image: PR("gd-before-bedline-1"),
      alt: "Marking and planning a garden bed layout along a Windsor walkway",
    },
    {
      step: "03",
      title: "Plant Selection",
      text: "We recommend plants, flowers, shrubs, and greenery based on sunlight, soil, space, season, and maintenance level.",
      image: PR("gd-finished-bed-1"),
      alt: "Shrubs and seasonal flowers selected for a Windsor front yard garden bed",
    },
    {
      step: "04",
      title: "Bed Preparation",
      text: "The area is cleaned, weeds are removed, soil is prepared, and the bed shape is created.",
      image: PR("gd-before-overgrown-1"),
      alt: "Clearing weeds and overgrown shrubs before creating a new garden bed in Windsor",
    },
    {
      step: "05",
      title: "Edging & Border Setup",
      text: "Clean borders or edging are installed where required to give the garden bed a professional finished look.",
      image: PR("gd-finished-treebed-1"),
      alt: "Stone border edging installed around a circular tree garden bed in Windsor",
    },
    {
      step: "06",
      title: "Planting & Arrangement",
      text: "Plants, shrubs, and flowers are installed according to the approved layout with proper spacing and visual balance.",
      image: PR("ss-finished-lawn-bed-1"),
      alt: "Shrubs and plants arranged in a newly installed Windsor garden bed",
    },
    {
      step: "07",
      title: "Mulch & Decorative Finish",
      text: "Mulch, soil finish, or decorative stone is added to improve appearance, protect plants, and reduce weeds.",
      image: PR("gd-finished-bed-1"),
      alt: "Fresh mulch finish applied to a completed Windsor garden bed",
    },
    {
      step: "08",
      title: "Final Styling & Cleanup",
      text: "The garden is styled, cleaned, watered, and reviewed with the client.",
      image: PR("gd-finished-treebed-1"),
      alt: "Completed creative front yard garden bed design ready for client review in Windsor",
    },
  ],
  gallery: [
    PR("gd-before-frontyard-1"),
    PR("gd-finished-treebed-1"),
    PR("gd-before-overgrown-1"),
    PR("gd-before-bedline-1"),
    PR("gd-finished-bed-1"),
  ],
  beforeAfter: [
    { before: PR("gd-before-frontyard-1"), after: PR("gd-finished-treebed-1"), label: "Front Yard Tree Bed" },
  ],
  faq: [
    { q: "Can you design plant beds for front yards?", a: "Yes, front yard plant bed design is ideal for improving curb appeal." },
    { q: "Do you help choose plants?", a: "Yes, plants can be selected based on sunlight, soil, color preference, and maintenance level." },
    { q: "Can you create low-maintenance garden designs?", a: "Yes, we can suggest plant beds and garden layouts based on low-maintenance needs." },
    { q: "Do you add mulch and edging?", a: "Yes, mulch, edging, decorative stone, and soil finishing can be included based on the project." },
  ],
  ctaText: "Ready to upgrade your garden look?",
  ctaButton: "Get Free Garden Design Estimate",
};

export const SERVICE_BENEFITS = [
  "Improves curb appeal",
  "Makes outdoor space more useful",
  "Increases property value",
  "Creates clean and professional outdoor look",
  "Reduces maintenance issues",
  "Improves drainage and structure for hardscape",
  "Adds color and freshness for softscape",
  "Custom design based on property needs",
  "Helps homeowners understand the full process before booking",
];
