// SEO-targeted landing content for service pages, area pages, and blog posts.
// All content is visible, helpful, naturally written — no keyword stuffing.

export const SITE_URL = "https://www.mulchngreen.ca";

/* ============================================================
   SERVICE LANDING PAGES (9 SEO-targeted services)
============================================================ */
export const SEO_SERVICES = [
  {
    slug: "landscape-windsor-on",
    name: "Landscape",
    title: "Landscape Services in Windsor, Ontario | Mulch & Green",
    description:
      "Professional landscape services in Windsor, Ontario and across Windsor–Essex County. Design, planting, sod, and full property transformations.",
    h1: "Landscape Services in Windsor, Ontario",
    intro:
      "Mulch & Green Landscape delivers full-service residential landscape across Windsor and the wider Windsor–Essex region. From the first hand-drawn sketch to the last shovel of soil, our team designs and installs outdoor spaces that fit your home, your budget, and the climate of Southwestern Ontario.",
    sections: [
      {
        h2: "What our landscape service includes",
        body: "Every landscape project begins with a free on-site consultation. We measure your lot, study sun exposure and drainage, and talk through how you actually use the space. From there, our designers prepare both manual sketches and software-generated 3D visualizations so you can see the finished result before a single plant goes in the ground.",
        bullets: [
          "Manual and software-generated landscape designs",
          "Plant selection optimized for Windsor's USDA Zone 6b climate",
          "Full installation: grading, soil prep, sod, plants and edging",
          "Mulch beds, decorative stone borders, and pathways",
          "Sprinkler and drip-irrigation integration",
        ],
      },
      {
        h2: "Why homeowners across Windsor choose us",
        body: "Landscape isn't just a curb-appeal upgrade — it's a 10- to 30-year investment in your home. We work with premium materials, certified plant stock, and crews who live and work right here in Essex County, so the result holds up to Windsor's freeze-thaw winters and humid summers.",
        bullets: [
          "Affordable, realistic designs — no inflated quotes",
          "Impeccable execution by experienced, uniformed crews",
          "Transparent pricing with no hidden costs",
          "Customer satisfaction is the measure of every project",
        ],
      },
      {
        h2: "Our four-step landscape process",
        body: "We've refined a simple process so projects stay on schedule and on budget: Consult → Design → Build → Maintain. Every phase has a single point of contact, so you always know what's happening and when.",
      },
    ],
    faq: [
      { q: "How much does landscape cost in Windsor, Ontario?",         a: "Costs vary with scope and materials, but small refresh projects typically start around $2,500 while full-property design-builds run higher. We provide free, itemized estimates so there are no surprises." },
      { q: "What's the best time of year to start a landscape project?", a: "Spring (April–June) and early fall (September–October) are ideal in Windsor. We schedule projects from late March through mid-November depending on weather." },
      { q: "Do you offer landscape design only, without installation?",     a: "Yes. Our designers can produce a stand-alone manual or 3D plan you can take to any contractor — although clients usually prefer to keep the design and build under one roof." },
    ],
    related: ["hardscape-windsor-on", "garden-design-windsor-on", "mulch-installation-windsor-on"],
  },
  {
    slug: "hardscape-windsor-on",
    name: "Hardscape",
    title: "Hardscape Contractor in Windsor, ON | Patios, Walls & Walkways",
    description:
      "Professional hardscape in Windsor, Ontario — interlock patios, concrete driveways, retaining walls, walkways and accent walls across Windsor–Essex.",
    h1: "Hardscape Services in Windsor, Ontario",
    intro:
      "From European-style interlock patios to concrete driveways and stacked-stone accent walls, our hardscape division gives Windsor properties the structure, function, and lasting curb appeal they deserve.",
    sections: [
      {
        h2: "Hardscape services we offer",
        body: "We're a full-service hardscape contractor. Every install starts with a properly compacted aggregate base — the foundation that determines whether a patio looks great for 3 years or 30. We use commercial-grade plate compactors, polymeric jointing sand, and quality pavers from trusted Canadian suppliers.",
        bullets: [
          "European-style interlock patios",
          "Concrete patios and driveways",
          "Front porches and decks",
          "Accent walls and retaining walls",
          "Stone pathways and decorative borders",
          "Vinyl and wooden fences",
        ],
      },
      {
        h2: "Materials and craftsmanship",
        body: "Windsor's freeze-thaw cycles are punishing on poorly built hardscape. Our crews follow Interlocking Concrete Pavement Institute (ICPI) installation guidelines, including a minimum 6-inch compacted base for patios and 8 inches for driveways, geo-textile membranes, edge restraints, and polymeric sand joints to prevent weeds and ant damage.",
      },
      {
        h2: "How we estimate a hardscape project",
        body: "We measure your space, walk through paver and stone options at our showroom partners, and provide a written estimate that breaks out excavation, base, materials, and labour separately. No hidden fees.",
      },
    ],
    faq: [
      { q: "How long does an interlock patio take to install?",         a: "A standard 300–500 sq ft backyard patio typically takes 5–10 working days, weather permitting. Larger or multi-level projects can run 2–3 weeks." },
      { q: "Do you warranty your hardscape work?",                       a: "Yes. We back our workmanship on every installed paver and wall, in addition to the manufacturer's warranty on the material itself." },
      { q: "Can hardscape be installed during Windsor winters?",         a: "We schedule hardscape from April through November. Freezing temperatures interfere with polymeric sand activation and proper base compaction." },
    ],
    related: ["patio-installation-windsor-on", "retaining-walls-windsor-on", "outdoor-living-spaces-windsor-on"],
  },
  {
    slug: "lawn-care-windsor-on",
    name: "Lawn Care",
    title: "Lawn Care Services in Windsor, ON | Mowing, Fertilizing & More",
    description:
      "Reliable lawn care across Windsor–Essex: mowing, edging, fertilizing, weeding, certified pesticide application and seasonal cleanups.",
    h1: "Lawn Care Services in Windsor, Ontario",
    intro:
      "A healthy lawn does more than look good — it cools your property, manages stormwater, and lifts your home's resale value. Our lawn care crews keep Windsor and Essex County properties looking their best from the first spring cleanup through the final fall leaf removal.",
    sections: [
      {
        h2: "Our lawn care services",
        bullets: [
          "Weekly or bi-weekly mowing and edging",
          "Fertilization programs tailored to Windsor's soil",
          "Weeding of plant beds",
          "Certified pesticide and herbicide application",
          "Pruning of shrubs and small trees",
          "Spring and fall property cleanups",
          "Aeration and over-seeding",
        ],
      },
      {
        h2: "Designed for the Windsor climate",
        body: "Cool-season grasses like Kentucky Bluegrass and fine fescues do best in our region. We tune mowing height, watering schedules, and fertilizer timing to keep your turf strong through the hot July humidity and the cold January thaws.",
      },
      {
        h2: "Customer-satisfaction guarantee",
        body: "Reliable service is the most-asked-for thing in lawn care — and the hardest to deliver. We show up when we say we will, finish what we start, and stand behind every visit. If something doesn't look right, we come back and make it right.",
      },
    ],
    faq: [
      { q: "How often should my Windsor lawn be mowed?",                a: "Weekly during peak growth (May–July) and every 10–14 days the rest of the season. We never remove more than one-third of the blade height per cut." },
      { q: "Do you offer one-time clean-ups?",                          a: "Yes. We offer spring and fall clean-ups as one-time services as well as part of seasonal contracts." },
      { q: "Are your pesticide sprays safe around children and pets?",  a: "Our applicators are provincially certified. We use products and dosages approved for residential properties and always communicate any re-entry intervals." },
    ],
    related: ["mulch-installation-windsor-on", "garden-design-windsor-on", "landscape-windsor-on"],
  },
  {
    slug: "mulch-installation-windsor-on",
    name: "Mulch Installation",
    title: "Mulch Installation in Windsor, Ontario | Mulch & Green Landscape",
    description:
      "Professional mulch installation across Windsor–Essex County. Bark, hardwood and decorative stone mulches delivered and installed by experienced crews.",
    h1: "Mulch Installation Service in Windsor, Ontario",
    intro:
      "Fresh mulch is the fastest way to revive a tired-looking landscape. It locks in moisture, suppresses weeds, regulates soil temperature, and gives your plant beds a clean, finished look. Our crews mulch hundreds of Windsor and Essex County properties every year.",
    sections: [
      {
        h2: "Mulch options we install",
        bullets: [
          "Hardwood-bark mulch (natural, brown, black-dyed)",
          "Cedar and pine mulch",
          "Decorative river-rock and stone covers",
          "Coloured stone for modern landscape",
        ],
      },
      {
        h2: "How much mulch does my Windsor property need?",
        body: "A 2- to 3-inch mulch layer is ideal for most beds. We measure your plant-bed square footage on site and recommend the exact yardage you need — no waste, no shortage. Our crews handle delivery, bed-edging, weed-prevention fabric (optional) and a clean wheelbarrow-and-rake install.",
      },
      {
        h2: "Why annual mulching is worth it",
        body: "Beyond aesthetics, fresh mulch reduces irrigation needs by up to 30%, smothers weeds before they germinate, and slowly enriches the soil as it breaks down. Most Windsor homeowners top up beds every 1–2 years for the best look and plant health.",
      },
    ],
    faq: [
      { q: "When is the best time to mulch in Windsor?",   a: "Mid-April through late May is ideal — soil has warmed and weeds haven't yet exploded. We also do fall mulching for winter protection." },
      { q: "Do you remove the old mulch first?",            a: "We assess every property. If existing mulch is decomposed, we top-dress over it. If it's matted or moldy, we remove it first to give plants a healthier base." },
      { q: "Can you match the mulch colour to my home?",    a: "Yes. We carry natural, brown, and black-dyed mulches plus a range of decorative stone, so we can match any home exterior." },
    ],
    related: ["garden-design-windsor-on", "lawn-care-windsor-on", "landscape-windsor-on"],
  },
  {
    slug: "garden-design-windsor-on",
    name: "Garden Design",
    title: "Garden Design in Windsor, ON | Custom Planting & Layouts",
    description:
      "Beautiful garden design in Windsor and Essex County. Ornamental trees, shrubs, perennial beds, TFS-principle planting and decorative edging.",
    h1: "Garden Design Service in Windsor, Ontario",
    intro:
      "Great gardens aren't planted — they're designed. We use the TFS principle (Texture, Form & Structure) to create planting plans that look beautiful in every season, attract pollinators, and thrive in Windsor's specific sun and soil conditions.",
    sections: [
      {
        h2: "Our garden design process",
        body: "Every garden starts with a site audit. We map sun exposure, study existing soil, note drainage patterns, and discuss your maintenance appetite. From there we produce a planting plan with species names, mature sizes, bloom times, and exact placement.",
        bullets: [
          "Ornamental trees and shrubs",
          "Perennial and pollinator beds",
          "TFS principle-based planting plans",
          "Boulders and paved edging for clean lines",
          "Plant placement optimized for sunlight and watering",
        ],
      },
      {
        h2: "Native and adapted plants for Windsor",
        body: "We lean on native and well-adapted plants — coneflowers, black-eyed Susans, ninebark, hydrangea, serviceberry, Japanese maple — that hold up to Windsor's hot summers and cold winters with minimal coddling.",
      },
      {
        h2: "Garden maintenance after install",
        body: "Optional seasonal visits keep beds weed-free and shrubs in shape. Many of our garden-design clients add a simple bi-weekly maintenance plan so the design never loses its edge.",
      },
    ],
    faq: [
      { q: "Do you guarantee the plants you install?",  a: "Yes. We provide a one-season warranty on plant material installed by our team, subject to reasonable care." },
      { q: "Can you design low-maintenance gardens?",   a: "Absolutely. Our 'low-touch' garden plans rely on drought-tolerant perennials, mulched beds and drip irrigation to minimize upkeep." },
      { q: "Do you incorporate vegetable gardens?",     a: "Yes. Many clients ask for a discreet kitchen-garden bed with drip irrigation — we love designing them in." },
    ],
    related: ["mulch-installation-windsor-on", "landscape-windsor-on", "outdoor-living-spaces-windsor-on"],
  },
  {
    slug: "patio-installation-windsor-on",
    name: "Patio Installation",
    title: "Patio Installation in Windsor, ON | Interlock & Concrete",
    description:
      "Custom interlock and concrete patio installation in Windsor, Ontario. Built on properly compacted bases to last decades in our freeze-thaw climate.",
    h1: "Patio Installation in Windsor, Ontario",
    intro:
      "A great patio extends your living space outdoors and lifts your home's value. We install European-style interlock and stamped or broom-finish concrete patios across Windsor, Essex County and surrounding communities.",
    sections: [
      {
        h2: "Patio styles we install",
        bullets: [
          "European-style interlock patios",
          "Stamped and broom-finish concrete patios",
          "Multi-level patios with steps and seat walls",
          "Fire-pit and outdoor-kitchen patio integrations",
          "Patios paired with pergolas, fences and lighting",
        ],
      },
      {
        h2: "How we build a patio that lasts",
        body: "Most patios fail because of base prep — not the pavers. We excavate to a minimum of 8 inches, install a geo-textile membrane to prevent base mixing, lay limestone screenings in compacted 2-inch lifts, and finish with polymeric sand joints. The result is a flat, weed-free, ant-resistant patio that holds up through Windsor's freeze-thaw winters.",
      },
      {
        h2: "Patio design ideas for Windsor backyards",
        body: "We typically size patios around how you actually use them — dinner parties, fire-pit lounging, hot-tub pad, kids' play space. A common Windsor footprint is a 14' × 16' main dining area with a connected 10' × 10' lounge curve, planted on all sides.",
      },
    ],
    faq: [
      { q: "Interlock or concrete — which is better?",            a: "Interlock is easier to repair and adapt; concrete is faster to install and slightly cheaper up front. We'll recommend based on your space and budget." },
      { q: "Will my patio settle or shift over time?",           a: "Not with a proper base. Our 8-inch compacted limestone base + edge restraints + polymeric sand routinely lasts 25+ years without movement." },
      { q: "Can I add a pergola or fire pit later?",              a: "Yes. We plan footings and conduit during installation so you can add structures, lighting, or a gas line down the road." },
    ],
    related: ["retaining-walls-windsor-on", "hardscape-windsor-on", "outdoor-living-spaces-windsor-on"],
  },
  {
    slug: "retaining-walls-windsor-on",
    name: "Retaining Walls",
    title: "Retaining Wall Contractor in Windsor, ON | Mulch & Green Landscape",
    description:
      "Retaining wall design and construction in Windsor, Ontario. Engineered for stability and built to look great for decades.",
    h1: "Retaining Wall Contractor in Windsor, Ontario",
    intro:
      "A retaining wall solves two problems at once: it holds back soil and creates new usable space. We design and build engineered retaining walls across Windsor and Essex County — from small garden walls to multi-tier landscape features.",
    sections: [
      {
        h2: "Retaining wall types we build",
        bullets: [
          "Segmental-block retaining walls (Versa-Lok, Allan Block, Techo-Bloc)",
          "Natural stone and armour-stone walls",
          "Poured-concrete walls with stone veneer",
          "Decorative seat walls and accent walls",
          "Multi-tier terraced walls for sloped lots",
        ],
      },
      {
        h2: "Engineering & drainage matter",
        body: "Walls fail when water builds up behind them. Every retaining wall we install includes a perforated drain at the base, free-draining stone backfill, geogrid reinforcement on taller walls, and proper batter (the slight backward lean that keeps walls stable through freeze-thaw cycles).",
      },
      {
        h2: "Permitting and compliance",
        body: "Walls over 1 metre may require a building permit in some Windsor and Essex County municipalities. We handle the engineering drawings and permit liaison so the project stays compliant from start to finish.",
      },
    ],
    faq: [
      { q: "Do I need a permit for a retaining wall in Windsor?",          a: "Most municipalities require a permit and engineered drawings for walls over 1 m (3.3 ft). We handle the entire process." },
      { q: "How long do segmental-block walls last?",                       a: "A properly engineered block wall with drainage and geogrid will hold up 40+ years with minimal maintenance." },
      { q: "Can a retaining wall double as garden bed edging?",             a: "Yes — short seat walls and tiered planters are popular ways to turn structural walls into beautiful landscape features." },
    ],
    related: ["hardscape-windsor-on", "patio-installation-windsor-on", "backyard-renovation-windsor-on"],
  },
  {
    slug: "backyard-renovation-windsor-on",
    name: "Backyard Renovation",
    title: "Backyard Renovation in Windsor, ON | Complete Outdoor Makeovers",
    description:
      "Full backyard renovations in Windsor and Essex County. Patios, plantings, lighting, fences, and complete design-build outdoor transformations.",
    h1: "Backyard Renovation in Windsor, Ontario",
    intro:
      "If your backyard isn't doing it for you anymore, we'll redesign and rebuild it from the ground up. From tear-out to final mulch, our design-build crews handle the entire renovation under one roof, so you avoid the headache of juggling multiple contractors.",
    sections: [
      {
        h2: "What's included in a full backyard renovation",
        bullets: [
          "Design (manual sketch + 3D render)",
          "Demolition, removal and disposal of old features",
          "Grading and drainage correction",
          "New patios, walkways, retaining walls and steps",
          "Fresh sod, garden beds, trees and shrubs",
          "Outdoor lighting, sprinklers and drip irrigation",
          "Fences, decks, pergolas and seating areas",
        ],
      },
      {
        h2: "Typical Windsor backyard renovation timeline",
        body: "Small renovations (patio + planting) wrap up in 1–2 weeks. Mid-size projects (patio + retaining wall + sod) run 2–4 weeks. Full design-builds with pergolas, lighting and fencing can stretch 4–8 weeks depending on weather and material lead times.",
      },
      {
        h2: "Why a design-build approach pays off",
        body: "When the same team designs and builds, there are no awkward handoffs, no finger-pointing, and no surprise change orders. You have one point of contact and one accountable partner for the entire renovation.",
      },
    ],
    faq: [
      { q: "What's the ROI on a backyard renovation in Windsor?",   a: "Quality outdoor living spaces typically return 60–80% of project cost at resale in our market, plus daily quality-of-life value." },
      { q: "Can you work with an existing pool or deck?",            a: "Yes — we often integrate renovations around existing pools, decks, sheds and mature trees." },
      { q: "Do you offer financing or staged installs?",             a: "We can phase a renovation across two seasons if budget is a concern — patio in year one, planting and lighting in year two." },
    ],
    related: ["patio-installation-windsor-on", "outdoor-living-spaces-windsor-on", "landscape-windsor-on"],
  },
  {
    slug: "outdoor-living-spaces-windsor-on",
    name: "Outdoor Living Spaces",
    title: "Outdoor Living Spaces in Windsor, ON | Custom Backyard Retreats",
    description:
      "Custom outdoor living spaces in Windsor — patios, kitchens, fire pits, pergolas and lighting designed for year-round Essex County enjoyment.",
    h1: "Outdoor Living Spaces in Windsor, Ontario",
    intro:
      "An outdoor living space is more than a patio — it's a second living room, dining room, and lounge. We design and build complete outdoor environments across Windsor and Essex County so you spend more of the year outside.",
    sections: [
      {
        h2: "Outdoor living elements we install",
        bullets: [
          "Patios, lounge and dining zones",
          "Outdoor kitchens and built-in BBQ surrounds",
          "Fire pits and fire tables",
          "Pergolas, gazebos and shade structures",
          "Low-voltage landscape lighting",
          "Privacy fences and feature walls",
          "Hot-tub pads and surround decks",
        ],
      },
      {
        h2: "Designing for Windsor's seasons",
        body: "Our outdoor living designs account for all four seasons — proper grading so spring melt doesn't pool, generous shade for July humidity, fire features for crisp October nights, and durable materials that shrug off January ice.",
      },
      {
        h2: "From concept to finished retreat",
        body: "We produce both a manual sketch and a 3D render so you can walk through the design before the dig. From there, our certified crews handle every trade: hardscape, fencing, electrical (with licensed partners), gas (where applicable), planting, and lighting.",
      },
    ],
    faq: [
      { q: "What's the smallest outdoor living space you'll design?",  a: "We've designed retreats as compact as 200 sq ft for in-town Windsor lots — small doesn't mean less impactful." },
      { q: "Do you handle outdoor kitchen plumbing and gas?",          a: "We coordinate with licensed plumbing, gas and electrical partners to keep everything to code." },
      { q: "Can I add a pool to my outdoor living space later?",       a: "Yes — we routinely design hardscape and grading with future pool installs in mind." },
    ],
    related: ["patio-installation-windsor-on", "backyard-renovation-windsor-on", "hardscape-windsor-on"],
  },
];

/* ============================================================
   SERVICE AREA LANDING PAGES (9 locations)
============================================================ */
const AREA_FAQ = (city) => [
  { q: `Do you service ${city}?`,                          a: `Yes — ${city} is one of our core service areas. We deliver landscape, hardscape, lawn care, mulch installation and complete backyard renovations to homeowners across ${city} every season.` },
  { q: `How quickly can you start a project in ${city}?`,  a: `Smaller jobs (mulching, lawn care, plantings) can usually start within 1–2 weeks. Larger design-build projects are typically scheduled 4–8 weeks out depending on the season.` },
  { q: `Do you provide free estimates in ${city}?`,        a: `Yes. We provide free, no-obligation on-site estimates for every landscape and hardscape project in ${city} and the surrounding Essex County area.` },
];

export const SEO_AREAS = [
  {
    slug: "landscape-windsor-on",
    city: "Windsor",
    title: "Landscape in Windsor, Ontario | Mulch & Green Landscape",
    description: "Trusted landscape, hardscape and lawn care for Windsor, Ontario homeowners. Free estimates across every Windsor neighbourhood.",
    h1: "Landscape in Windsor, Ontario",
    intro: "From South Walkerville to Riverside, Forest Glade to South Windsor, we design and build landscapes that fit every Windsor neighbourhood and lot size. Mulch & Green Landscape is locally owned, fully insured, and proud to serve homeowners across the City of Windsor.",
    localNote: "Windsor's variety of lot sizes — from compact in-town bungalows to large Riverside estates — means no two projects look alike. We tailor every design to your specific street, soil and sun exposure.",
    faq: AREA_FAQ("Windsor"),
  },
  {
    slug: "landscape-lasalle-on",
    city: "LaSalle",
    title: "Landscape in LaSalle, Ontario | Mulch & Green Landscape",
    description: "Professional landscape and hardscape services for LaSalle, Ontario. Patios, walls, gardens and lawn care built for LaSalle homes.",
    h1: "Landscape in LaSalle, Ontario",
    intro: "LaSalle's larger lots and family-focused neighbourhoods are perfect for outdoor living. We've helped families across Heritage, Sandwich South, and the Front Road corridor design backyards that work for kids, entertaining, and long-term value.",
    localNote: "LaSalle's clay-heavy soils need the right grading and drainage solutions — something our crews handle on every project, large or small.",
    faq: AREA_FAQ("LaSalle"),
  },
  {
    slug: "landscape-tecumseh-on",
    city: "Tecumseh",
    title: "Landscape in Tecumseh, Ontario | Mulch & Green Landscape",
    description: "Landscape, lawn care and hardscape services for Tecumseh, Ontario homeowners. Local crews, transparent pricing, free estimates.",
    h1: "Landscape in Tecumseh, Ontario",
    intro: "From St. Anne's to Manning Road, Tecumseh's mix of established and growing neighbourhoods makes for some of the most rewarding landscape work in the region. We design and build to the specific character of each Tecumseh street.",
    localNote: "Many Tecumseh homes feature mature trees and shaded front yards — we design plant palettes that thrive in low light and complement the tree canopy.",
    faq: AREA_FAQ("Tecumseh"),
  },
  {
    slug: "landscape-essex-on",
    city: "Essex",
    title: "Landscape in Essex, Ontario | Mulch & Green Landscape",
    description: "Custom landscape and full-property design for Essex, Ontario. Built for rural lots, town lots and everything in between.",
    h1: "Landscape in Essex, Ontario",
    intro: "From the Town of Essex centre to Maidstone and Harrow concession roads, our crews handle everything from small front-yard refreshes to acreage-scale landscape plans for Essex residents.",
    localNote: "Essex properties often combine town-lot and rural elements. We design transitions — sweeping driveways, mixed planting beds, natural-stone borders — that bridge both.",
    faq: AREA_FAQ("Essex"),
  },
  {
    slug: "landscape-amherstburg-on",
    city: "Amherstburg",
    title: "Landscape in Amherstburg, Ontario | Mulch & Green Landscape",
    description: "Landscape, patios, retaining walls and complete backyard renovations for Amherstburg, Ontario homes.",
    h1: "Landscape in Amherstburg, Ontario",
    intro: "Amherstburg's historic homes and waterfront properties deserve thoughtful landscape. We design with respect for the architectural character of homes from Sandwich South to Malden Park and the Boblo waterfront.",
    localNote: "Amherstburg's waterfront and historical properties often benefit from heritage-appropriate plantings and natural-stone hardscape — both specialties of our design team.",
    faq: AREA_FAQ("Amherstburg"),
  },
  {
    slug: "landscape-lakeshore-on",
    city: "Lakeshore",
    title: "Landscape in Lakeshore, Ontario | Mulch & Green Landscape",
    description: "Lakeshore landscape experts — patios, plantings, lighting and full design-build outdoor living spaces.",
    h1: "Landscape in Lakeshore, Ontario",
    intro: "Lakeshore's lakefront and rural properties offer some of the best outdoor living opportunities in Essex County. We design landscapes that take advantage of waterfront views, generous lots, and the slightly warmer microclimate.",
    localNote: "Many Lakeshore properties are exposed to lake winds — we choose plants and stake young trees properly so the design holds up year one.",
    faq: AREA_FAQ("Lakeshore"),
  },
  {
    slug: "landscape-kingsville-on",
    city: "Kingsville",
    title: "Landscape in Kingsville, Ontario | Mulch & Green Landscape",
    description: "Custom landscape, garden design and hardscape installation for Kingsville, Ontario homeowners.",
    h1: "Landscape in Kingsville, Ontario",
    intro: "From Cottam to Ruthven and the Kingsville waterfront, our crews bring design-build landscape to one of Ontario's most charming small-town settings.",
    localNote: "Kingsville's microclimate (Canada's southernmost mainland) lets us specify a slightly broader plant palette — including some specimens that struggle further north.",
    faq: AREA_FAQ("Kingsville"),
  },
  {
    slug: "landscape-leamington-on",
    city: "Leamington",
    title: "Landscape in Leamington, Ontario | Mulch & Green Landscape",
    description: "Landscape, hardscape and lawn care services for Leamington, Ontario. Local crews, premium materials, transparent pricing.",
    h1: "Landscape in Leamington, Ontario",
    intro: "Leamington's lakefront, large lots and mild microclimate make it one of the best places in Ontario to invest in outdoor living. We design and build landscapes for both town and rural properties across Leamington.",
    localNote: "Leamington's loamy soils and longer growing season let us push planting design further — a real treat for our design team.",
    faq: AREA_FAQ("Leamington"),
  },
  {
    slug: "landscape-belle-river-on",
    city: "Belle River",
    title: "Landscape in Belle River, Ontario | Mulch & Green Landscape",
    description: "Landscape, garden design and hardscape installation for Belle River and surrounding Lakeshore communities.",
    h1: "Landscape in Belle River, Ontario",
    intro: "Belle River and surrounding Lakeshore communities have a tight-knit, family-oriented vibe — and our outdoor living designs reflect that. Spaces designed for kids, neighbours, summer cookouts and quiet morning coffees.",
    localNote: "Belle River's proximity to Lake St. Clair influences both wind exposure and humidity — both of which we plan for in plant selection.",
    faq: AREA_FAQ("Belle River"),
  },
];

/* ============================================================
   BLOG ARTICLES (7 SEO-targeted posts)
============================================================ */
export const BLOG_POSTS = [
  {
    slug: "top-landscape-trends-windsor-ontario",
    title: "Top Landscape Trends in Windsor, Ontario (2026 Edition)",
    description: "From low-maintenance native gardens to outdoor kitchens — here are the landscape trends shaping Windsor, Ontario backyards this year.",
    date: "2026-04-12",
    excerpt: "Outdoor kitchens, native-plant beds, dark-sky lighting and natural-stone hardscape — here's what Windsor homeowners are building this year.",
    sections: [
      { h2: "1. Outdoor kitchens are no longer just for cottages", body: "Windsor homeowners are increasingly carving out a built-in BBQ surround, prep counter and bar fridge area on their patios. With our long shoulder seasons, an outdoor kitchen pays back in usable months." },
      { h2: "2. Native plants take centre stage",                  body: "Echinacea, milkweed, switchgrass and serviceberry are showing up in more designs. They're tough, beautiful, and support local pollinators." },
      { h2: "3. Dark-sky landscape lighting",                       body: "Low-glare, downward-facing fixtures are replacing harsh spotlights. The result is a softer, more elegant nighttime landscape that doesn't bother neighbours." },
      { h2: "4. Natural-stone hardscape over modern slabs",         body: "Many Windsor clients are moving away from large slab pavers toward smaller, textured natural stone for a warmer, more timeless look." },
    ],
  },
  {
    slug: "benefits-of-mulch-installation-windsor",
    title: "Benefits of Mulch Installation for Windsor Homes",
    description: "Why fresh mulch is the highest-ROI landscape investment for Windsor properties: moisture retention, weed suppression, soil health and curb appeal.",
    date: "2026-04-02",
    excerpt: "A simple mulch refresh transforms tired beds, cuts watering by 30%, and protects plants through Windsor's freeze-thaw winters.",
    sections: [
      { h2: "Moisture retention", body: "Mulch reduces evaporation, which means less watering — particularly valuable during Windsor's hot, humid July and August." },
      { h2: "Weed suppression",   body: "A 2–3 inch mulch layer smothers most annual weeds before they can germinate. Less weeding means more time enjoying your garden." },
      { h2: "Soil temperature",   body: "Mulch insulates roots — cooler in summer, warmer in fall — which extends the growing season for many perennials." },
      { h2: "Curb appeal",        body: "Fresh mulch is the fastest, cheapest way to make a property look newly landscaped. Real-estate agents recommend it before every sale." },
    ],
  },
  {
    slug: "patio-design-ideas-windsor-backyards",
    title: "Patio Design Ideas for Windsor Backyards",
    description: "Layout tips, materials and design ideas for interlock and concrete patios in Windsor and Essex County backyards.",
    date: "2026-03-20",
    excerpt: "Function-first sizing, multi-level zones and material pairings — here's how Windsor backyards are getting more out of their patios.",
    sections: [
      { h2: "Start with how you'll use it", body: "Dinner parties, fire-pit lounging, hot-tub access, kids' play — listing the activities first dictates the patio shape and size." },
      { h2: "Multi-level patios",            body: "A small step-down from a main dining area to a lounge zone creates visual interest and natural conversation areas." },
      { h2: "Mix paver formats",             body: "Combining a large-format slab with a smaller cobble border gives a tailored, custom look without dramatically increasing cost." },
      { h2: "Plan for shade",                body: "A pergola or strategic tree placement makes a south-facing patio usable through July humidity." },
    ],
  },
  {
    slug: "how-retaining-walls-improve-property-value",
    title: "How Retaining Walls Improve Property Value in Windsor",
    description: "Retaining walls aren't just functional — they create new usable space and lift your home's resale value. Here's how.",
    date: "2026-03-10",
    excerpt: "Engineered retaining walls turn sloped lots into usable terraces, fix drainage problems, and add lasting visual appeal.",
    sections: [
      { h2: "Reclaim sloped lots",       body: "A terraced wall system turns a useless slope into a flat lawn, patio or garden bed — sometimes adding 100s of sq ft of usable space." },
      { h2: "Solve drainage issues",     body: "Properly engineered walls direct water away from your home's foundation, eliminating wet basements and erosion." },
      { h2: "Create visual structure",   body: "Walls add depth, contrast and architectural interest — particularly when paired with thoughtful planting." },
      { h2: "Long-term ROI",             body: "A well-built segmental block wall lasts 40+ years with minimal maintenance, making the per-year cost remarkably low." },
    ],
  },
  {
    slug: "spring-lawn-care-guide-windsor",
    title: "Spring Lawn Care Guide for Windsor Homeowners",
    description: "From the first thaw to the first mow: a week-by-week spring lawn care plan for Windsor and Essex County lawns.",
    date: "2026-02-28",
    excerpt: "Step-by-step spring cleanup, fertilizing, and mowing tips tailored to Windsor's specific climate.",
    sections: [
      { h2: "Week 1 — Clean it up",         body: "Rake debris, edge beds, and remove any winter damage. Skip mowing until the grass is dry and at least 3 inches tall." },
      { h2: "Week 2 — First feed",           body: "A slow-release nitrogen application sets up strong root growth and a deep colour for the season." },
      { h2: "Week 3 — Overseed bare patches", body: "Cool-season turf seed germinates beautifully in mid-April soil temperatures." },
      { h2: "Week 4 — Establish the mowing rhythm", body: "Cut weekly at 3–3.5 inches. Never remove more than 1/3 of the blade height." },
    ],
  },
  {
    slug: "complete-backyard-renovation-guide",
    title: "Complete Backyard Renovation Guide for Windsor Homes",
    description: "Planning a backyard renovation in Windsor? Here's a step-by-step guide from initial design through final mulch.",
    date: "2026-02-14",
    excerpt: "Designing, budgeting, sequencing, and finishing a full backyard renovation — every step explained.",
    sections: [
      { h2: "Step 1 — Define the goal",     body: "List the top three uses (dining, lounge, play, garden) and the must-haves vs. nice-to-haves." },
      { h2: "Step 2 — Design and 3D render", body: "A 2D plan + 3D render lets you walk through the space before committing." },
      { h2: "Step 3 — Sequence the build",   body: "Demolition → grading → hardscape → fencing → planting → mulching → lighting → final cleanup." },
      { h2: "Step 4 — Plan for maintenance", body: "The best renovations are paired with a light seasonal maintenance plan so the design never loses its edge." },
    ],
  },
  {
    slug: "best-plants-for-ontario-landscape",
    title: "Best Plants for Ontario Landscape (Windsor & Essex Edition)",
    description: "Top-performing trees, shrubs and perennials for Windsor and Essex County landscapes — chosen for our specific climate and soils.",
    date: "2026-01-30",
    excerpt: "From serviceberry to coneflower, here are the plants that look great and thrive across Windsor–Essex.",
    sections: [
      { h2: "Trees — Serviceberry, Japanese Maple, River Birch",   body: "Compact, four-season interest, and proven hardiness across Essex County USDA Zone 6b." },
      { h2: "Shrubs — Hydrangea, Ninebark, Boxwood",                body: "Reliable structure, easy maintenance, and stunning blooms or foliage colour." },
      { h2: "Perennials — Echinacea, Black-eyed Susan, Russian Sage", body: "Drought-tolerant pollinator favourites that thrive in Windsor sun." },
      { h2: "Grasses — Switchgrass, Little Bluestem, Karl Foerster",  body: "Year-round structure with winter interest — they look beautiful even under snow." },
    ],
  },
];

/* ============================================================
   HOMEPAGE FAQs
============================================================ */
export const HOMEPAGE_FAQS = [
  { q: "What areas do you serve?",                a: "We serve Windsor, LaSalle, Tecumseh, Essex, Amherstburg, Lakeshore, Kingsville, Leamington, Belle River and the rest of Windsor–Essex County." },
  { q: "What landscape services do you offer?", a: "Landscape design, hardscape, softscape, drainage & lawn solutions, planting & garden design, and ongoing maintenance services. See our services page for the full breakdown." },
  { q: "Do you provide hardscape services?",    a: "Yes — interlock patios, concrete driveways, accent walls, retaining walls, stone pathways, fences, decks and front porches." },
  { q: "Do you install patios and retaining walls?", a: "Yes. Both are core specialties. Every patio is built on a properly compacted base, and every retaining wall is engineered for long-term stability." },
  { q: "Do you offer mulch installation?",        a: "Yes. We supply and install hardwood, cedar and decorative stone mulch across Windsor and Essex County." },
  { q: "Can you redesign my backyard?",           a: "Absolutely. Full backyard renovations are one of our most-requested services. We handle design, demolition, hardscape, planting and lighting under one roof." },
  { q: "Do you provide lawn care services?",      a: "Yes — mowing, edging, fertilization, weeding, certified pesticide application, pruning and seasonal cleanups." },
  { q: "How can I request a landscape quote?",  a: "Use our contact form, call +1 (226) 348-5048, or email moudgil1975@yahoo.com. We respond within one business day with next steps for a free on-site estimate." },
];
