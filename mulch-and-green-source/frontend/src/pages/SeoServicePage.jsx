import { Link, useLocation, Navigate } from "react-router-dom";
import { ArrowRight, Phone, ChevronRight, Check } from "lucide-react";
import Seo from "@/components/Seo";
import { BRAND } from "@/data/site";
import { SEO_SERVICES, SITE_URL } from "@/data/seoContent";

export default function SeoServicePage() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\//, "").replace(/\/$/, "");
  const page = SEO_SERVICES.find((s) => s.slug === slug);
  if (!page) return <Navigate to="/services" replace />;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.name,
    serviceType: page.name,
    provider: { "@type": "LocalBusiness", name: BRAND.name, telephone: BRAND.phoneRaw, email: BRAND.email },
    areaServed: { "@type": "AdministrativeArea", name: "Windsor–Essex County, Ontario, Canada" },
    description: page.description,
  };

  return (
    <>
      <Seo title={page.title} description={page.description} canonical={`${SITE_URL}/${page.slug}`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* HERO */}
      <section className="py-24 md:py-32 bg-beige/40">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <nav className="text-xs text-[#4A4A4A] mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-forest">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-forest">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-forest font-semibold">{page.name}</span>
          </nav>
          <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#EFECD3] text-forest text-[11px] tracking-[0.22em] uppercase font-bold">Service</span>
          <h1 className="mt-5 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight" data-testid={`seo-service-h1-${page.slug}`}>{page.h1}</h1>
          <p className="mt-5 max-w-2xl mx-auto text-[#4A4A4A] text-lg leading-relaxed">{page.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-forest text-white font-extrabold hover:bg-[#1B5E20] transition-colors">Get Free Estimate <ArrowRight className="w-4 h-4" /></Link>
            <a href={`tel:${BRAND.phoneRaw}`} className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-forest text-forest font-bold hover:bg-forest hover:text-white transition-colors"><Phone className="w-4 h-4" /> {BRAND.phone}</a>
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <article className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          {page.sections.map((sec) => (
            <section key={sec.h2} className="reveal">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1A1A1A]">{sec.h2}</h2>
              {sec.body && <p className="mt-4 text-[#4A4A4A] text-lg leading-relaxed">{sec.body}</p>}
              {sec.bullets && (
                <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {sec.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-[#1A1A1A]">
                      <span className="flex-none w-6 h-6 rounded-full bg-forest text-white inline-flex items-center justify-center mt-0.5"><Check className="w-3.5 h-3.5" /></span>
                      <span className="text-[15px] leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </article>

      {/* SERVICE AREAS REFERENCE */}
      <section className="py-16 bg-beige/40">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center reveal">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1A1A1A]">Available across Windsor–Essex County</h2>
          <p className="mt-3 text-[#4A4A4A]">We provide {page.name.toLowerCase()} services in Windsor, LaSalle, Tecumseh, Essex, Amherstburg, Lakeshore, Kingsville, Leamington, Belle River and surrounding communities.</p>
          <div className="mt-5 flex flex-wrap gap-2 justify-center">
            {["Windsor","LaSalle","Tecumseh","Essex","Amherstburg","Lakeshore","Kingsville","Leamington","Belle River"].map((c) => (
              <Link key={c} to={`/landscape-${c.toLowerCase().replace(/\s+/g,"-")}-on`} className="px-4 py-1.5 rounded-full bg-white border border-[#EFECD3] text-sm font-semibold text-forest hover:bg-forest hover:text-white transition-colors">{c}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      {page.related && page.related.length > 0 && (
        <section className="py-16 bg-beige/40">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="font-display font-extrabold text-2xl text-[#1A1A1A]">Related services</h2>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {page.related.map((r) => {
                const rp = SEO_SERVICES.find((x) => x.slug === r);
                if (!rp) return null;
                return (
                  <Link key={r} to={`/${r}`} className="bg-white rounded-2xl p-5 border border-[#EFECD3] hover:border-forest transition-colors group">
                    <div className="font-display font-bold text-[#1A1A1A] group-hover:text-forest">{rp.name}</div>
                    <div className="mt-1 text-xs text-[#4A4A4A]">In Windsor &amp; Essex County</div>
                    <ChevronRight className="w-4 h-4 mt-3 text-forest" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-6 sm:px-8 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto rounded-[2rem] bg-forest text-white p-10 md:p-14 flex flex-col md:flex-row gap-6 items-center justify-between">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl">Ready to start your {page.name.toLowerCase()} project?</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-forest font-extrabold hover:bg-beige transition-colors">Request Free Estimate <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
}
