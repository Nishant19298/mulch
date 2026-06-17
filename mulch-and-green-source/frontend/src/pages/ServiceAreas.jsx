import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import Seo from "@/components/Seo";
import { SERVICE_AREAS, BRAND } from "@/data/site";

export default function ServiceAreas() {
  return (
    <>
      <Seo
        title="Service Areas | Mulch & Green Landscape — Windsor &amp; Essex"
        description="Premium landscaping across Windsor, LaSalle, Tecumseh, Essex, Amherstburg, Lakeshore, Leamington ."
        canonical="https://mulchngreen.ca/service-areas"
      />

      <section className="py-24 md:py-32 bg-beige/40 text-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#EFECD3] text-forest text-[11px] tracking-[0.22em] uppercase font-bold">Service Areas</span>
          <h1 className="mt-5 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight">Serving Windsor &amp; Essex, <span className="brand-gradient">end to end.</span></h1>
          <p className="mt-6 max-w-2xl mx-auto text-[#4A4A4A] text-lg">From Windsor and LaSalle to Leamington and beyond — premium landscaping across Windsor &amp; Essex County.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_AREAS.map((a, i) => (
            <div
              key={a.city}
              data-testid={`area-card-${a.city.toLowerCase()}`}
              className="bg-white rounded-3xl p-7 border border-[#EFECD3] card-lift reveal"
              style={{ transitionDelay: `${i*30}ms` }}
            >
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-beige text-forest">
                <MapPin className="w-5 h-5" />
              </span>
              <h3 className="mt-4 font-display font-bold text-xl text-[#1A1A1A]">{a.city}, ON</h3>
              <p className="mt-2 text-[#4A4A4A] text-[15px] leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-beige/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="rounded-3xl overflow-hidden border border-[#EFECD3] shadow-[0_24px_70px_-30px_rgba(46,125,50,0.3)]">
            <iframe
              title="Service Area Map"
              data-testid="service-areas-map"
              className="w-full h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Windsor%2C%20Ontario%2C%20Canada&output=embed"
            />
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto rounded-[2rem] bg-forest text-white p-10 md:p-14 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl">Not sure if we cover your area?</h2>
            <p className="mt-2 text-[#E8E5C8]">Give us a call — we likely do.</p>
          </div>
          <div className="flex gap-3">
            <a href={`tel:${BRAND.phoneRaw}`} data-testid="areas-cta-call" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-forest font-extrabold hover:bg-beige transition-colors"><Phone className="w-4 h-4" /> {BRAND.phone}</a>
            <Link to="/contact" data-testid="areas-cta-contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-white/70 font-bold hover:bg-white/10 transition-colors">Contact <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
