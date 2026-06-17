import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, ChevronDown, Check, Phone, Leaf } from "lucide-react";
import * as Icons from "lucide-react";
import Seo from "@/components/Seo";
import { SERVICES, SERVICE_DETAILS, BRAND } from "@/data/site";

const detailImages = [
  "/projects/IMG_4245.jpg",
  "/projects/IMG_4242.jpg",
  "/projects/IMG_4241.jpg",
  "/projects/IMG_4244.jpg",
  "/projects/IMG_4231.jpg",
  "/projects/IMG_4237.jpg",
];
const detailImagesSm = [
  "/projects/IMG_4245-sm.jpg",
  "/projects/IMG_4242-sm.jpg",
  "/projects/IMG_4241-sm.jpg",
  "/projects/IMG_4244-sm.jpg",
  "/projects/IMG_4231-sm.jpg",
  "/projects/IMG_4237-sm.jpg",
];

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  const [open, setOpen] = useState(0);

  if (!service) return <Navigate to="/services" replace />;
  const Icon = Icons[service.icon] || Leaf;
  const idx = (SERVICES.findIndex((s) => s.slug === slug) || 0) % detailImages.length;
  const heroImg = detailImages[idx];
  const heroImgSm = detailImagesSm[idx];

  return (
    <>
      <Seo
        title={`${service.name} | Mulch & Green Landscape Windsor &amp; Essex`}
        description={`${service.short} Premium ${service.name.toLowerCase()} services across Windsor &amp; Essex and Windsor &amp; Essex.`}
        canonical={`https://mulchngreen.ca/services/${service.slug}`}
      />

      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img src={heroImg} srcSet={`${heroImgSm} 800w, ${heroImg} 1600w`} sizes="100vw" alt={service.name} className="absolute inset-0 w-full h-full object-cover" loading="eager" decoding="async" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1B11]/85 via-[#0F1B11]/60 to-[#0F1B11]/20" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-white">
          <Link to="/services" data-testid="service-detail-back" className="inline-flex items-center gap-1 text-grass font-bold mb-6 hover:gap-2 transition-all">← All services</Link>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-[11px] tracking-[0.22em] uppercase font-bold"><Icon className="w-3.5 h-3.5 text-grass" /> Service</span>
          <h1 className="mt-5 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight max-w-3xl">{service.name}</h1>
          <p className="mt-5 max-w-2xl text-[#E8E5C8] text-lg leading-relaxed">{service.short}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" data-testid="service-detail-cta-estimate" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-grass text-[#0F1B11] font-extrabold hover:bg-white transition-colors">Get Free Estimate <ArrowRight className="w-4 h-4" /></Link>
            <a href={`tel:${BRAND.phoneRaw}`} data-testid="service-detail-cta-call" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-white/70 font-bold hover:bg-white/10 transition-colors"><Phone className="w-4 h-4" /> {BRAND.phone}</a>
          </div>
        </div>
      </section>

      {/* Overview & Items */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 reveal">
            <span className="text-forest font-bold uppercase tracking-[0.22em] text-xs">Service Overview</span>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-[#1A1A1A]">{service.name} — built for Windsor &amp; Essex.</h2>
            <p className="mt-5 text-[#4A4A4A] text-lg leading-relaxed">{service.overview || service.short}</p>
            {service.items && service.items.length > 0 && (
              <div className="mt-8 rounded-3xl bg-beige/40 border border-[#EFECD3] p-7">
                <h3 className="font-display font-bold text-xl text-[#1A1A1A]">What's included</h3>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.items.map((it) => (
                    <li key={it} className="flex gap-3 text-[#1A1A1A]">
                      <span className="flex-none w-6 h-6 rounded-full bg-forest text-white inline-flex items-center justify-center mt-0.5"><Check className="w-3.5 h-3.5" /></span>
                      <span className="text-[15px] leading-relaxed">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="lg:col-span-5 reveal">
            <div className="rounded-3xl bg-beige/40 border border-[#EFECD3] p-8">
              <h3 className="font-display font-bold text-xl text-[#1A1A1A]">Why Mulch &amp; Green</h3>
              <ul className="mt-5 space-y-3">
                {SERVICE_DETAILS.benefits.map((b) => (
                  <li key={b} className="flex gap-3 text-[#1A1A1A]">
                    <span className="flex-none w-6 h-6 rounded-full bg-forest text-white inline-flex items-center justify-center mt-0.5"><Check className="w-3.5 h-3.5" /></span>
                    <span className="text-[15px] leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-beige/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl reveal">
            <span className="text-forest font-bold uppercase tracking-[0.22em] text-xs">Our Process</span>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-[#1A1A1A]">From idea to finished {service.name.toLowerCase()}.</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_DETAILS.process.map((p) => (
              <div key={p.step} className="bg-white rounded-3xl p-7 border border-[#EFECD3] card-lift reveal">
                <div className="font-display font-extrabold text-4xl text-forest">{p.step}</div>
                <div className="mt-3 font-display font-bold text-xl text-[#1A1A1A]">{p.title}</div>
                <div className="mt-2 text-sm text-[#4A4A4A] leading-relaxed">{p.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12 reveal">
            <span className="text-forest font-bold uppercase tracking-[0.22em] text-xs">FAQ</span>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-[#1A1A1A]">Questions about {service.name}</h2>
          </div>
          <div className="space-y-3">
            {SERVICE_DETAILS.faq.map((f, i) => {
              const isOpen = open === i;
              return (
                <button
                  key={f.q}
                  data-testid={`faq-item-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full text-left bg-beige/30 hover:bg-beige/60 transition-colors rounded-2xl border border-[#EFECD3] p-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-display font-bold text-[#1A1A1A] text-[16px]">{f.q}</span>
                    <ChevronDown className={`w-5 h-5 text-forest flex-none transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 mt-3" : "max-h-0"}`}>
                    <p className="text-[#4A4A4A] leading-relaxed">{f.a}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto rounded-[2rem] bg-forest text-white p-10 md:p-14 flex flex-col md:flex-row gap-6 items-center justify-between">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl">Ready to get started on {service.name.toLowerCase()}?</h2>
          <Link to="/contact" data-testid="service-detail-bottom-cta" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-forest font-extrabold hover:bg-beige transition-colors">Get Free Estimate <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
}
