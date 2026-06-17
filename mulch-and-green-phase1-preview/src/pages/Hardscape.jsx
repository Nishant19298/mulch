import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Check, Phone } from "lucide-react";
import Seo from "@/components/Seo";
import { BRAND } from "@/data/site";
import { HARDSCAPE, SERVICE_BENEFITS } from "@/data/landscapingData";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function Hardscape() {
  const [open, setOpen] = useState(0);
  const s = HARDSCAPE;

  return (
    <>
      <Seo
        title={s.metaTitle}
        description={s.metaDescription}
        canonical="https://mulchngreen.ca/landscaping/hardscape"
      />

      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img
          src={s.heroImage.full}
          srcSet={`${s.heroImage.sm} 800w, ${s.heroImage.full} 1920w`}
          sizes="100vw"
          alt="Hardscape services including stone patios, pathways, and driveways in Windsor, Ontario"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1B11]/85 via-[#0F1B11]/60 to-[#0F1B11]/20" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-white">
          <Link to="/landscaping" data-testid="hardscape-back" className="inline-flex items-center gap-1 text-grass font-bold mb-6 hover:gap-2 transition-all">
            ← Landscaping
          </Link>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-[11px] tracking-[0.22em] uppercase font-bold">
            Hardscape
          </span>
          <h1 className="mt-5 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight max-w-3xl">{s.title}</h1>
          <p className="mt-5 max-w-2xl text-[#E8E5C8] text-lg leading-relaxed">{s.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" data-testid="hardscape-hero-estimate" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-grass text-[#0F1B11] font-extrabold hover:bg-white transition-colors">
              Get Free Estimate <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={`tel:${BRAND.phoneRaw}`} data-testid="hardscape-hero-call" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-white/70 font-bold hover:bg-white/10 transition-colors">
              <Phone className="w-4 h-4" /> {BRAND.phone}
            </a>
          </div>
        </div>
      </section>

      {/* What is Hardscape + Examples */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 reveal">
            <span className="text-forest font-bold uppercase tracking-[0.22em] text-xs">What is Hardscape?</span>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-[#1A1A1A]">The structure behind every great yard.</h2>
            <p className="mt-5 text-[#4A4A4A] text-lg leading-relaxed">{s.whatIs}</p>
            <div className="mt-8 rounded-3xl bg-beige/40 border border-[#EFECD3] p-7">
              <h3 className="font-display font-bold text-xl text-[#1A1A1A]">Hardscape services we provide</h3>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {s.examples.map((it) => (
                  <li key={it} className="flex gap-3 text-[#1A1A1A]">
                    <span className="flex-none w-6 h-6 rounded-full bg-forest text-white inline-flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[15px] leading-relaxed">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-5 reveal">
            <div className="rounded-3xl bg-beige/40 border border-[#EFECD3] p-8">
              <h3 className="font-display font-bold text-xl text-[#1A1A1A]">Benefits of Hardscaping</h3>
              <ul className="mt-5 space-y-3">
                {SERVICE_BENEFITS.map((b) => (
                  <li key={b} className="flex gap-3 text-[#1A1A1A]">
                    <span className="flex-none w-6 h-6 rounded-full bg-forest text-white inline-flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </span>
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
            <span className="text-forest font-bold uppercase tracking-[0.22em] text-xs">Our Hardscape Process</span>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-[#1A1A1A]">From site visit to finished surface.</h2>
            <p className="mt-5 text-[#4A4A4A] text-lg leading-relaxed">
              Real photos from our own job sites — every stage of a hardscape build, shown step by step.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {s.process.map((p, i) => (
              <div
                key={p.step}
                className={`bg-white rounded-3xl border border-[#EFECD3] overflow-hidden reveal grid grid-cols-1 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="relative aspect-[4/3] md:aspect-auto">
                  <img
                    src={p.image.full}
                    srcSet={`${p.image.sm} 800w, ${p.image.full} 1600w`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    alt={p.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="font-display font-extrabold text-4xl text-forest">{p.step}</div>
                  <h3 className="mt-3 font-display font-bold text-2xl text-[#1A1A1A]">{p.title}</h3>
                  <p className="mt-3 text-[#4A4A4A] leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      {s.beforeAfter?.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-2xl mb-12 reveal">
              <span className="text-forest font-bold uppercase tracking-[0.22em] text-xs">Before &amp; After</span>
              <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-[#1A1A1A]">See the transformation.</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {s.beforeAfter.map((ba) => (
                <div key={ba.label} className="reveal">
                  <BeforeAfterSlider
                    before={ba.before.full}
                    beforeSm={ba.before.sm}
                    after={ba.after.full}
                    afterSm={ba.after.sm}
                    alt={`Hardscape project — ${ba.label} — Windsor, ON`}
                  />
                  <p className="mt-4 text-center font-semibold text-[#1A1A1A]">{ba.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {s.gallery?.length > 0 && (
        <section className="py-24 bg-beige/40">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-2xl mb-12 reveal">
              <span className="text-forest font-bold uppercase tracking-[0.22em] text-xs">Hardscape Process Gallery</span>
              <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-[#1A1A1A]">More from our job sites.</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {s.gallery.map((img, i) => (
                <div key={i} className="img-zoom rounded-2xl overflow-hidden aspect-square reveal">
                  <img
                    src={img.full}
                    srcSet={`${img.sm} 800w, ${img.full} 1600w`}
                    sizes="(max-width: 768px) 50vw, 25vw"
                    alt={`Hardscape project photo ${i + 1} — Windsor, ON`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12 reveal">
            <span className="text-forest font-bold uppercase tracking-[0.22em] text-xs">FAQ</span>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-[#1A1A1A]">Hardscape Questions, Answered</h2>
          </div>
          <div className="space-y-3">
            {s.faq.map((f, i) => {
              const isOpen = open === i;
              return (
                <button
                  key={f.q}
                  data-testid={`hardscape-faq-${i}`}
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
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl">{s.ctaText}</h2>
          <Link to="/contact" data-testid="hardscape-bottom-cta" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-forest font-extrabold hover:bg-beige transition-colors">
            {s.ctaButton} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
