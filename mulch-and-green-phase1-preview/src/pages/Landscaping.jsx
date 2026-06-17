import { Link } from "react-router-dom";
import { ArrowRight, Phone, Layers, Flower2, Check } from "lucide-react";
import Seo from "@/components/Seo";
import { BRAND } from "@/data/site";
import { LANDSCAPING_HUB, HARDSCAPE, SOFTSCAPE } from "@/data/landscapingData";

export default function Landscaping() {
  return (
    <>
      <Seo
        title={LANDSCAPING_HUB.metaTitle}
        description={LANDSCAPING_HUB.metaDescription}
        canonical="https://mulchngreen.ca/landscaping"
      />

      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img
          src={HARDSCAPE.heroImage.full}
          srcSet={`${HARDSCAPE.heroImage.sm} 800w, ${HARDSCAPE.heroImage.full} 1920w`}
          sizes="100vw"
          alt="Professional landscaping services in Windsor, Ontario"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1B11]/85 via-[#0F1B11]/60 to-[#0F1B11]/20" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-white">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-[11px] tracking-[0.22em] uppercase font-bold">
            Landscaping
          </span>
          <h1 className="mt-5 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight max-w-3xl">
            {LANDSCAPING_HUB.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[#E8E5C8] text-lg leading-relaxed">
            {LANDSCAPING_HUB.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/landscaping/hardscape"
              data-testid="hero-explore-hardscape"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-grass text-[#0F1B11] font-extrabold hover:bg-white transition-colors"
            >
              Explore Hardscape <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/landscaping/softscape"
              data-testid="hero-explore-softscape"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-white/70 font-bold hover:bg-white/10 transition-colors"
            >
              Explore Softscape
            </Link>
            <Link
              to="/contact"
              data-testid="hero-get-estimate"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-white/70 font-bold hover:bg-white/10 transition-colors"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Explanation: Hardscape vs Softscape */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl reveal">
            <span className="text-forest font-bold uppercase tracking-[0.22em] text-xs">Two Halves of a Great Yard</span>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-[#1A1A1A]">
              Landscaping is divided into two major parts.
            </h2>
            <p className="mt-5 text-[#4A4A4A] text-lg leading-relaxed">
              Every outdoor project at Mulch &amp; Green Landscape combines structure and life — the durable surfaces
              that hold a space together, and the living plants and lawn that make it feel like home.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Hardscape Card */}
            <div className="rounded-3xl border border-[#EFECD3] overflow-hidden card-lift reveal">
              <div className="img-zoom relative aspect-[16/10]">
                <img
                  src={HARDSCAPE.heroImage.full}
                  srcSet={`${HARDSCAPE.heroImage.sm} 800w, ${HARDSCAPE.heroImage.full} 1600w`}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  alt="Hardscape services including stone patios, pathways, and driveways in Windsor"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-4 left-4 w-11 h-11 rounded-full bg-forest text-white inline-flex items-center justify-center shadow-lg">
                  <Layers className="w-5 h-5" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-display font-bold text-2xl text-[#1A1A1A]">Hardscape Services</h3>
                <p className="mt-3 text-[#4A4A4A] leading-relaxed">
                  Stone, pathways, driveways, patios, edging, retaining areas, outdoor structure, and surface work
                  that gives your property lasting form and function.
                </p>
                <Link
                  to="/landscaping/hardscape"
                  data-testid="card-hardscape-link"
                  className="mt-6 inline-flex items-center gap-2 font-bold text-forest hover:gap-3 transition-all"
                >
                  View Hardscape Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Softscape Card */}
            <div className="rounded-3xl border border-[#EFECD3] overflow-hidden card-lift reveal">
              <div className="img-zoom relative aspect-[16/10]">
                <img
                  src={SOFTSCAPE.heroImage.full}
                  srcSet={`${SOFTSCAPE.heroImage.sm} 800w, ${SOFTSCAPE.heroImage.full} 1600w`}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  alt="Softscape services including plants, mulch, sod, and garden beds in Windsor"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-4 left-4 w-11 h-11 rounded-full bg-grass text-[#0F1B11] inline-flex items-center justify-center shadow-lg">
                  <Flower2 className="w-5 h-5" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-display font-bold text-2xl text-[#1A1A1A]">Softscape Services</h3>
                <p className="mt-3 text-[#4A4A4A] leading-relaxed">
                  Plants, soil, mulch, sod, garden beds, trees, shrubs, flowers, lawn, and every living element
                  that brings color and life to your landscape.
                </p>
                <Link
                  to="/landscaping/softscape"
                  data-testid="card-softscape-link"
                  className="mt-6 inline-flex items-center gap-2 font-bold text-forest hover:gap-3 transition-all"
                >
                  View Softscape Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's included quick reference */}
      <section className="py-24 bg-beige/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="reveal">
            <span className="text-forest font-bold uppercase tracking-[0.22em] text-xs">Hardscape Includes</span>
            <h3 className="mt-3 font-display font-bold text-2xl text-[#1A1A1A]">Non-living structure &amp; surfaces</h3>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {HARDSCAPE.examples.slice(0, 8).map((it) => (
                <li key={it} className="flex gap-3 text-[#1A1A1A]">
                  <span className="flex-none w-6 h-6 rounded-full bg-forest text-white inline-flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[15px] leading-relaxed">{it}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal">
            <span className="text-forest font-bold uppercase tracking-[0.22em] text-xs">Softscape Includes</span>
            <h3 className="mt-3 font-display font-bold text-2xl text-[#1A1A1A]">Living plants &amp; lawn</h3>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SOFTSCAPE.examples.slice(0, 8).map((it) => (
                <li key={it} className="flex gap-3 text-[#1A1A1A]">
                  <span className="flex-none w-6 h-6 rounded-full bg-grass text-[#0F1B11] inline-flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[15px] leading-relaxed">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto rounded-[2rem] bg-forest text-white p-10 md:p-14 flex flex-col md:flex-row gap-6 items-center justify-between">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl">
            Ready to start your landscaping project?
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              data-testid="bottom-cta-estimate"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-forest font-extrabold hover:bg-beige transition-colors"
            >
              Get Free Estimate <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${BRAND.phoneRaw}`}
              data-testid="bottom-cta-call"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-white/70 font-bold hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4" /> {BRAND.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
