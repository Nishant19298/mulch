import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Leaf } from "lucide-react";
import * as Icons from "lucide-react";
import Seo from "@/components/Seo";
import { SERVICES } from "@/data/site";

export default function Services() {
  return (
    <>
      <Seo
        title="Our Services | Mulch & Green Landscaping"
        description="Six core landscape services: Landscape Design, Hardscape, Softscape, Drainage & Lawn Solutions, Planting & Garden Design, and Maintenance — across Windsor & Essex County."
        canonical="https://mulchngreen.ca/services"
      />

      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-beige/40">
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: "radial-gradient(circle at 80% 20%, #43A047 0, transparent 35%), radial-gradient(circle at 10% 90%, #8D6E63 0, transparent 35%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#EFECD3] text-forest text-[11px] tracking-[0.22em] uppercase font-bold">Our Services</span>
          <h1 className="mt-5 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight">Six core service areas —<br/><span className="brand-gradient">one full-service team.</span></h1>
          <p className="mt-6 max-w-2xl mx-auto text-[#4A4A4A] text-lg leading-relaxed">From design and hardscape to drainage, planting, and ongoing maintenance — explore our complete suite of services for Windsor &amp; Essex.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => {
              const Icon = Icons[s.icon] || Leaf;
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  data-testid={`services-grid-${s.slug}`}
                  className="card-lift group bg-white rounded-3xl p-7 border border-[#EFECD3] reveal"
                  style={{ transitionDelay: `${i * 30}ms` }}
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

      {/* CTA */}
      <section className="px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto rounded-[2rem] bg-forest text-white p-10 md:p-14 flex flex-col md:flex-row gap-6 items-center justify-between">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl">Not sure which service you need?</h2>
          <Link to="/contact" data-testid="services-cta-estimate" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-forest font-extrabold hover:bg-beige transition-colors">Talk to an expert <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
}
