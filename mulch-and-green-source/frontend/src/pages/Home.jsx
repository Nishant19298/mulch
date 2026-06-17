import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, Phone, Star, ShieldCheck, Leaf, Award, MapPin, ChevronRight, ChevronDown } from "lucide-react";
import * as Icons from "lucide-react";
import Seo from "@/components/Seo";
import { BRAND, SERVICES, PROJECTS, TESTIMONIALS, SERVICE_AREAS, WHY_CHOOSE_US } from "@/data/site";
import { HOMEPAGE_FAQS, SITE_URL } from "@/data/seoContent";

// Hero slideshow — showcases the full range of services in the first 15 seconds.
const HERO_SLIDES = [
  {
    src: "/projects/IMG_4242.jpg",
    sm: "/projects/IMG_4242-sm.jpg",
    alt: "Interlock paver patio with stone steps and front-yard landscaping — Mulch & Green Landscape Windsor",
  },
  {
    src: "/projects/IMG_4241.jpg",
    sm: "/projects/IMG_4241-sm.jpg",
    alt: "Fresh red-mulched garden bed with stone borders and lush plantings — Mulch & Green Landscape Windsor",
  },
  {
    src: "/projects/IMG_4231.jpg",
    sm: "/projects/IMG_4231-sm.jpg",
    alt: "Manicured lawn with circular Japanese maple feature bed — Mulch & Green Landscape Windsor",
  },
];

function HomeFaqSection() {
  const [open, setOpen] = useState(0);
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOMEPAGE_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section className="py-24 bg-beige/40">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12 reveal">
          <span className="text-forest font-bold uppercase tracking-[0.22em] text-xs">FAQ</span>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A]">Frequently asked questions</h2>
        </div>
        <div className="space-y-3">
          {HOMEPAGE_FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <button key={f.q} onClick={() => setOpen(isOpen ? -1 : i)} data-testid={`home-faq-${i}`} className="w-full text-left bg-white hover:bg-white rounded-2xl border border-[#EFECD3] p-5 transition-colors">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display font-bold text-[#1A1A1A] text-[16px]">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 text-forest flex-none transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60 mt-3" : "max-h-0"}`}>
                  <p className="text-[#4A4A4A] leading-relaxed">{f.a}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 5500);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      <Seo
        title="Mulch & Green Landscape | Landscaping & Hardscaping Windsor ON"
        description="Mulch & Green Landscape provides professional landscaping, hardscaping, lawn care, mulch installation, garden design, patios, retaining walls, and backyard renovation services throughout Windsor–Essex County, Ontario."
        keywords="landscaping windsor on, hardscaping windsor ontario, lawn care windsor, mulch installation windsor, garden design windsor, patio installation windsor, retaining walls windsor, backyard renovation windsor essex"
        canonical="https://www.mulchngreen.ca/"
      />

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden" data-testid="hero-section">
        {HERO_SLIDES.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            srcSet={`${s.sm} 800w, ${s.src} 1600w`}
            sizes="100vw"
            alt={s.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              i === slide ? "opacity-100" : "opacity-0"
            }`}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            decoding="async"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1B11]/85 via-[#0F1B11]/55 to-[#0F1B11]/10" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-28 md:py-36 w-full">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-[11px] tracking-[0.22em] uppercase font-bold animate-fade-in">
              <Leaf className="w-3.5 h-3.5 text-grass" /> Mulch &amp; Green Landscaping
            </span>
            <h1 className="mt-6 font-display font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] animate-fade-in-up" data-testid="hero-headline">
              Landscaping &amp; Hardscaping<br/>Services in <span className="text-grass">Windsor–Essex County</span>
            </h1>
            <p className="mt-4 text-grass text-sm sm:text-base font-display font-bold italic tracking-wide animate-fade-in-up" style={{ animationDelay: "60ms" }}>
              Creating beautiful communities in and around Windsor &amp; Essex.
            </p>
            <p className="mt-5 text-[#E8E5C8] text-base sm:text-lg max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "120ms" }}>
              Mulch &amp; Green Landscape provides professional landscaping, hardscaping, lawn care, mulch installation, garden design, patios, retaining walls, and backyard renovation services throughout Windsor–Essex County, Ontario.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3 animate-fade-in-up" style={{ animationDelay: "240ms" }}>
              <Link to="/contact" data-testid="hero-cta-estimate" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-grass text-[#0F1B11] font-extrabold shadow-[0_18px_40px_-12px_rgba(67,160,71,0.7)] hover:bg-white transition-all hover:-translate-y-0.5">
                Get Free Estimate <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href={`tel:${BRAND.phoneRaw}`} data-testid="hero-cta-call" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-white/70 text-white font-bold hover:bg-white hover:text-forest transition-colors">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <Link to="/projects" data-testid="hero-cta-projects" className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-white font-bold hover:text-grass transition-colors">
                View Projects <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-6 text-white/85 text-sm animate-fade-in-up" style={{ animationDelay: "360ms" }}>
              <div className="flex items-center gap-2"><Star className="w-4 h-4 fill-grass text-grass" /> 5.0 average rating</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-grass" /> Licensed & insured</div>
              <div className="flex items-center gap-2"><Award className="w-4 h-4 text-grass" /> 12+ years experience</div>
            </div>
          </div>
        </div>

        {/* Slide indicator dots */}
        <div className="absolute bottom-8 right-8 z-10 flex items-center gap-2" data-testid="hero-slide-dots">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              aria-label={`Show hero slide ${i + 1}`}
              data-testid={`hero-slide-dot-${i}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === slide ? "bg-grass w-8" : "bg-white/40 hover:bg-white/70 w-2"
              }`}
            />
          ))}
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-24 md:py-32 bg-beige/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 reveal">
            <div>
              <span className="text-forest font-bold uppercase tracking-[0.22em] text-xs">What We Do</span>
              <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] tracking-tight">Six core service areas —<br/><span className="brand-gradient">one full-service team.</span></h2>
            </div>
            <Link to="/services" data-testid="services-view-all" className="inline-flex items-center gap-2 text-forest font-bold hover:gap-3 transition-all">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => {
              const Icon = Icons[s.icon] || Leaf;
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  data-testid={`service-card-${s.slug}`}
                  className="card-lift group bg-white rounded-3xl p-7 border border-[#EFECD3] reveal"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-beige text-forest group-hover:bg-forest group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </span>
                  <h3 className="mt-5 font-display font-bold text-xl text-[#1A1A1A]">{s.name}</h3>
                  <p className="mt-2 text-[15px] text-[#4A4A4A] leading-relaxed">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-forest font-bold text-sm">Learn more <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="img-zoom rounded-3xl overflow-hidden shadow-[0_24px_70px_-30px_rgba(46,125,50,0.4)] reveal">
            <img src="/projects/IMG_4242.jpg" srcSet="/projects/IMG_4242-sm.jpg 800w, /projects/IMG_4242.jpg 1600w" sizes="(max-width: 1024px) 100vw, 600px" alt="Custom stone steps and stacked-stone pillars by Mulch & Green" className="w-full h-[520px] object-cover" loading="lazy" decoding="async" />
          </div>
          <div className="reveal">
            <span className="text-forest font-bold uppercase tracking-[0.22em] text-xs">Why Mulch &amp; Green</span>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] tracking-tight">Trusted craftsmanship.<br/>Beautiful, lasting results.</h2>
            <p className="mt-5 text-[#4A4A4A] text-lg leading-relaxed">We pair award-worthy design with meticulous installation — built specifically for Canadian seasons. Every project gets premium materials, expert crews, and a multi-year workmanship guarantee.</p>
            <ul className="mt-8 space-y-4 text-[#1A1A1A]">
              {WHY_CHOOSE_US.map((f) => {
                const Icon = Icons[f.icon] || Award;
                return (
                  <li key={f.title} className="flex gap-4">
                    <span className="flex-none w-11 h-11 rounded-xl bg-beige text-forest inline-flex items-center justify-center"><Icon className="w-5 h-5" /></span>
                    <div>
                      <div className="font-display font-bold text-[17px]">{f.title}</div>
                      <div className="text-[15px] text-[#4A4A4A]">{f.text}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-28 bg-beige/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 reveal">
            <div>
              <span className="text-forest font-bold uppercase tracking-[0.22em] text-xs">Featured Projects</span>
              <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A]">Outdoor spaces, transformed.</h2>
            </div>
            <Link to="/projects" data-testid="featured-projects-view-all" className="inline-flex items-center gap-2 text-forest font-bold hover:gap-3 transition-all">View all <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid grid-cols-12 gap-5">
            {PROJECTS.slice(0, 5).map((p, idx) => (
              <Link
                key={p.id}
                to="/projects"
                data-testid={`featured-project-${p.id}`}
                className={`img-zoom relative rounded-3xl overflow-hidden group reveal ${
                  idx === 0 ? "col-span-12 md:col-span-7 row-span-2 h-[420px] md:h-[600px]" :
                  idx === 1 ? "col-span-6 md:col-span-5 h-[200px] md:h-[290px]" :
                  idx === 2 ? "col-span-6 md:col-span-5 h-[200px] md:h-[290px]" :
                  "col-span-6 md:col-span-6 h-[220px] md:h-[300px]"
                }`}
              >
                <img src={p.image} srcSet={p.sm ? `${p.sm} 800w, ${p.image} 1600w` : undefined} sizes={idx === 0 ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 50vw, 40vw"} alt={p.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <span className="inline-block text-[10px] tracking-[0.22em] uppercase font-bold text-grass">{p.category}</span>
                  <h3 className="mt-1 font-display font-bold text-white text-xl md:text-2xl">{p.title}</h3>
                  <div className="text-white/75 text-xs flex items-center gap-1.5 mt-1"><MapPin className="w-3 h-3" /> {p.city}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MEET OUR TEAM (Worker showcase) */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 reveal order-2 lg:order-1">
            <span className="text-forest font-bold uppercase tracking-[0.22em] text-xs">Meet The Crew</span>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] tracking-tight">Real people. Real craftsmanship.<br/><span className="brand-gradient">Real results.</span></h2>
            <p className="mt-5 text-[#4A4A4A] text-lg leading-relaxed">Our crew lives and works in Windsor &amp; Essex. Every member is fully trained, certified, and proud to wear the Mulch &amp; Green Landscapes uniform — because the quality on your property is a reflection of who we are.</p>
            <ul className="mt-7 space-y-3">
              {[
                "Uniformed, courteous, and on-time crews",
                "Certified in safe equipment handling and turf care",
                "Local, year-round employees — not subcontractors",
                "Trained in modern hardscape and softscape techniques",
              ].map((b) => (
                <li key={b} className="flex gap-3 items-start text-[#1A1A1A]">
                  <span className="flex-none mt-1 w-2 h-2 rounded-full bg-forest" />
                  <span className="text-[15px] leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" data-testid="team-cta-estimate" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-forest text-white font-extrabold hover:bg-[#1B5E20] transition-colors">Hire Our Team <ArrowRight className="w-4 h-4" /></Link>
              <Link to="/about" data-testid="team-cta-about" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-forest text-forest font-bold hover:bg-forest hover:text-white transition-colors">About Us</Link>
            </div>
          </div>
          <div className="lg:col-span-6 reveal order-1 lg:order-2 relative">
            <div className="img-zoom rounded-[2rem] overflow-hidden shadow-[0_30px_80px_-25px_rgba(46,125,50,0.45)] relative">
              <img
                src="/brand/worker.jpg"
                srcSet="/brand/worker-sm.jpg 800w, /brand/worker.jpg 1600w"
                sizes="(max-width: 1024px) 100vw, 600px"
                alt="Mulch & Green Landscapes worker in branded green t-shirt holding landscaping tools in a manicured backyard"
                className="w-full h-[560px] md:h-[640px] object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur text-[11px] font-bold uppercase tracking-[0.22em] text-forest">
                <span className="w-2 h-2 rounded-full bg-grass animate-pulse" /> On the job
              </div>
            </div>
            <div className="hidden md:block absolute -bottom-6 -left-6 bg-forest text-white rounded-2xl px-6 py-4 shadow-2xl">
              <div className="font-display font-extrabold text-2xl">100%</div>
              <div className="text-[11px] tracking-[0.18em] uppercase font-bold text-[#A8C9A2]">In-house crew</div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL SEO HIGHLIGHTS — H2 sections required by SEO brief */}
      <section className="py-24 bg-beige/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <span className="text-forest font-bold uppercase tracking-[0.22em] text-xs">What we do</span>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A]">Professional landscaping services<br/><span className="brand-gradient">for every Windsor–Essex home.</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { h: "Hardscaping & Outdoor Living Spaces", t: "Interlock patios, fire pits, pergolas, accent walls — designed for our climate, built to last.", l: "/hardscaping-windsor-on" },
              { h: "Patios, Walkways & Retaining Walls", t: "Engineered hardscape on properly compacted bases. Decades of trouble-free use.", l: "/patio-installation-windsor-on" },
              { h: "Mulch Installation & Garden Bed Enhancement", t: "Hardwood, cedar, and decorative-stone mulches installed quickly and cleanly.", l: "/mulch-installation-windsor-on" },
              { h: "Lawn Care & Property Maintenance", t: "Mowing, fertilization, weeding, pruning and seasonal cleanups by reliable local crews.", l: "/lawn-care-windsor-on" },
              { h: "Backyard Renovation Specialists", t: "Full design-build outdoor transformations under one roof — from sketch to final mulch.", l: "/backyard-renovation-windsor-on" },
              { h: "Garden Design & Planting", t: "TFS-principle planting plans, ornamental trees, perennials, and decorative edging.", l: "/garden-design-windsor-on" },
            ].map((s) => (
              <Link key={s.h} to={s.l} className="card-lift bg-white rounded-3xl p-6 border border-[#EFECD3] reveal group">
                <h3 className="font-display font-extrabold text-lg text-[#1A1A1A] group-hover:text-forest transition-colors">{s.h}</h3>
                <p className="mt-2 text-[15px] text-[#4A4A4A] leading-relaxed">{s.t}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-forest font-bold text-sm">Learn more <ChevronRight className="w-4 h-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL AREAS SECTION — required by brief */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal">
            <span className="text-forest font-bold uppercase tracking-[0.22em] text-xs">Service Area</span>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A]">Areas we serve across Windsor–Essex County</h2>
            <p className="mt-5 text-[#4A4A4A] text-lg leading-relaxed">
              Mulch &amp; Green Landscape proudly serves homeowners throughout Windsor–Essex County, including Windsor, LaSalle, Tecumseh, Essex, Amherstburg, Lakeshore, Kingsville, Leamington, and Belle River. Our services include landscaping, hardscaping, lawn care, mulch installation, patio construction, retaining walls, garden design, and complete backyard renovations.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-4xl mx-auto">
            {[
              {c:"Windsor",     slug:"landscaping-windsor-on"},
              {c:"LaSalle",     slug:"landscaping-lasalle-on"},
              {c:"Tecumseh",    slug:"landscaping-tecumseh-on"},
              {c:"Essex",       slug:"landscaping-essex-on"},
              {c:"Amherstburg", slug:"landscaping-amherstburg-on"},
              {c:"Lakeshore",   slug:"landscaping-lakeshore-on"},
              {c:"Kingsville",  slug:"landscaping-kingsville-on"},
              {c:"Leamington",  slug:"landscaping-leamington-on"},
              {c:"Belle River", slug:"landscaping-belle-river-on"},
              {c:"Essex County",slug:"service-areas"},
            ].map((a) => (
              <Link key={a.c} to={a.slug.startsWith("service-areas") ? "/service-areas" : `/${a.slug}`} data-testid={`home-area-${a.c.toLowerCase().replace(/\s+/g,'-')}`}
                className="bg-beige/40 hover:bg-forest hover:text-white border border-[#EFECD3] rounded-2xl px-3 py-3 text-center text-[14px] font-bold text-[#1A1A1A] transition-colors">
                {a.c}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — required by brief, with schema */}
      <HomeFaqSection />

      {/* PROCESS */}
      <section className="py-28 bg-[#0F1B11] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle at 70% 20%, #43A047 0, transparent 45%), radial-gradient(circle at 10% 90%, #8D6E63 0, transparent 45%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl reveal">
            <span className="text-grass font-bold uppercase tracking-[0.22em] text-xs">Our Process</span>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl">From concept to completion —<br/>a simple four-step process.</h2>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Consult", d: "On-site visit to understand your space, goals, and budget." },
              { n: "02", t: "Design", d: "Custom designs tailored to your home and lifestyle." },
              { n: "03", t: "Build", d: "Expert crews install with premium materials chosen for the Windsor &amp; Essex climate." },
              { n: "04", t: "Enjoy", d: "Optional maintenance plans keep your space looking pristine." },
            ].map((p, i) => (
              <div key={p.n} className="reveal p-7 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-grass/50 hover:bg-white/[0.07] transition-colors" style={{ transitionDelay: `${i*60}ms` }}>
                <div className="font-display font-extrabold text-5xl text-grass">{p.n}</div>
                <div className="mt-3 font-display font-bold text-xl">{p.t}</div>
                <div className="mt-2 text-sm text-[#C9D6C4] leading-relaxed">{p.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 bg-beige/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <span className="text-forest font-bold uppercase tracking-[0.22em] text-xs">Reviews</span>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A]">Loved by homeowners<br/>across Windsor &amp; Essex.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 6).map((t) => (
              <div key={t.name} className="bg-white rounded-3xl p-7 border border-[#EFECD3] card-lift reveal">
                <div className="flex items-center gap-1 text-grass">{Array.from({length: t.rating}).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}</div>
                <p className="mt-4 text-[#1A1A1A] leading-relaxed">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="w-11 h-11 rounded-full bg-forest text-white inline-flex items-center justify-center font-display font-bold">{t.name.split(' ').map(x=>x[0]).slice(0,2).join('')}</span>
                  <div>
                    <div className="font-display font-bold text-[15px] text-[#1A1A1A]">{t.name}</div>
                    <div className="text-xs text-[#4A4A4A]">{t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 reveal">
            <span className="text-forest font-bold uppercase tracking-[0.22em] text-xs">Service Areas</span>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A]">Serving Windsor &amp; Essex &amp; Windsor &amp; Essex.</h2>
            <p className="mt-5 text-[#4A4A4A] leading-relaxed">From Windsor to Leamington — we bring premium landscaping to homes across Windsor &amp; Essex County.</p>
            <Link to="/service-areas" data-testid="home-view-service-areas" className="mt-6 inline-flex items-center gap-2 text-forest font-bold hover:gap-3 transition-all">All service areas <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3 reveal">
            {SERVICE_AREAS.slice(0, 12).map((a) => (
              <div key={a.city} className="rounded-2xl bg-beige/50 border border-[#EFECD3] px-4 py-4 flex items-center gap-2 hover:bg-beige hover:border-forest/40 transition-colors">
                <MapPin className="w-4 h-4 text-forest" />
                <span className="font-display font-bold text-[15px] text-[#1A1A1A]">{a.city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 sm:px-8 lg:px-12 -mb-8">
        <div className="max-w-7xl mx-auto rounded-[2rem] bg-forest text-white p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-grass/30 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-earth/30 blur-3xl" />
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">Let's create a stunning outdoor space together!</h2>
              <p className="mt-4 text-[#E8E5C8] text-lg">Book your free on-site estimate today. No obligations, just expert advice.</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link to="/contact" data-testid="home-cta-bottom-estimate" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-forest font-extrabold hover:bg-beige transition-colors">Get Free Estimate <ArrowRight className="w-4 h-4" /></Link>
              <a href={`tel:${BRAND.phoneRaw}`} data-testid="home-cta-bottom-call" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-white/70 font-bold hover:bg-white/10 transition-colors"><Phone className="w-4 h-4" /> {BRAND.phone}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
