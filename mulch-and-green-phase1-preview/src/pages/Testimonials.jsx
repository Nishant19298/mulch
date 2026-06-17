import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import { TESTIMONIALS } from "@/data/site";

export default function Testimonials() {
  return (
    <>
      <Seo
        title="Testimonials | Mulch & Green Landscape"
        description="See what Windsor &amp; Essex homeowners say about our landscaping and hardscaping work — Google-style reviews and real client stories."
        canonical="https://mulchngreen.ca/testimonials"
      />

      <section className="py-24 md:py-32 bg-beige/40 text-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#EFECD3] text-forest text-[11px] tracking-[0.22em] uppercase font-bold">Reviews</span>
          <h1 className="mt-5 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight">Loved by clients <span className="brand-gradient">across Windsor &amp; Essex.</span></h1>
          <div className="mt-6 inline-flex items-center gap-2">
            {Array.from({length:5}).map((_,i) => <Star key={i} className="w-5 h-5 fill-grass text-grass" />)}
            <span className="font-display font-bold text-[#1A1A1A]">5.0 average · {TESTIMONIALS.length}+ verified reviews</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              data-testid={`testimonial-card-${i}`}
              className="bg-white rounded-3xl p-7 border border-[#EFECD3] card-lift reveal"
              style={{ transitionDelay: `${i*40}ms` }}
            >
              <div className="flex items-center gap-1 text-grass">
                {Array.from({length: t.rating}).map((_,i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="mt-4 text-[#1A1A1A] leading-relaxed">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="w-11 h-11 rounded-full bg-forest text-white inline-flex items-center justify-center font-display font-bold">
                  {t.name.split(' ').map(x=>x[0]).slice(0,2).join('')}
                </span>
                <div>
                  <div className="font-display font-bold text-[15px] text-[#1A1A1A]">{t.name}</div>
                  <div className="text-xs text-[#4A4A4A]">{t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto rounded-[2rem] bg-forest text-white p-10 md:p-14 flex flex-col md:flex-row gap-6 items-center justify-between">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl">Join hundreds of happy clients.</h2>
          <Link to="/contact" data-testid="testimonials-cta" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-forest font-extrabold hover:bg-beige transition-colors">Get Free Estimate <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
}
