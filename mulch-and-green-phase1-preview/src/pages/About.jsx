import { Link } from "react-router-dom";
import { ShieldCheck, Award, Heart, Leaf, Users, Sparkles, ArrowRight, Phone, Quote } from "lucide-react";
import Seo from "@/components/Seo";
import { BRAND, VISION, MISSION, BRAND_PROMISE } from "@/data/site";

export default function About() {
  return (
    <>
      <Seo
        title="About Us | Mulch & Green Landscape"
        description="Learn about Mulch & Green Landscape — a Windsor &amp; Essex landscaping company built on craftsmanship, design excellence, and customer satisfaction."
        canonical="https://mulchngreen.ca/about"
      />

      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img src="/projects/IMG_4241.jpg" srcSet="/projects/IMG_4241-sm.jpg 800w, /projects/IMG_4241.jpg 1600w" sizes="100vw" alt="Backyard hardscape and garden" className="absolute inset-0 w-full h-full object-cover" loading="eager" decoding="async" fetchPriority="high" />
        <div className="absolute inset-0 bg-[#0F1B11]/75" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center text-white">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-[11px] tracking-[0.22em] uppercase font-bold">About Us</span>
          <h1 className="mt-5 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight">Built on craftsmanship.<br/><span className="text-grass">Grounded in Windsor &amp; Essex.</span></h1>
          <p className="mt-6 max-w-2xl mx-auto text-[#E8E5C8] text-lg leading-relaxed">Creating beautiful communities in and around Windsor &amp; Essex — through affordable, realistic designs and impeccable execution.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="img-zoom rounded-3xl overflow-hidden reveal shadow-[0_24px_70px_-30px_rgba(46,125,50,0.4)]">
            <img src="/projects/IMG_4244.jpg" srcSet="/projects/IMG_4244-sm.jpg 800w, /projects/IMG_4244.jpg 1600w" sizes="(max-width: 1024px) 100vw, 600px" alt="Backyard paver patio with new lawn" className="w-full h-[560px] object-cover" loading="lazy" decoding="async" />
          </div>
          <div className="reveal">
            <span className="text-forest font-bold uppercase tracking-[0.22em] text-xs">Our Story</span>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A]">A passion for the outdoors — grown into a craft.</h2>
            <p className="mt-5 text-[#4A4A4A] text-lg leading-relaxed">Mulch &amp; Green Landscaping was founded with a simple idea: every Windsor &amp; Essex home deserves an outdoor space as beautiful as the interior. From our first frontyard refresh to large-scale resort-style backyards, we've built a reputation on affordable, realistic designs and impeccable execution.</p>
            <p className="mt-4 text-[#4A4A4A] text-lg leading-relaxed">Today, our team serves clients across Windsor &amp; Essex County — bringing the same attention to detail to every patio paver, plant placement, and stone retaining wall we install.</p>
          </div>
        </div>
      </section>

      {/* Mission/Vision — verbatim from client documentation */}
      <section className="py-24 bg-beige/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: Sparkles, title: "Our Vision",  text: VISION },
            { icon: Leaf,     title: "Our Mission", text: MISSION },
          ].map((v) => (
            <div key={v.title} className="bg-white rounded-3xl p-10 border border-[#EFECD3] card-lift reveal">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-beige text-forest"><v.icon className="w-6 h-6" /></span>
              <h3 className="mt-5 font-display font-extrabold text-2xl text-[#1A1A1A]">{v.title}</h3>
              <p className="mt-3 text-[#4A4A4A] leading-relaxed text-lg">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Promise — pulled verbatim from the client's Word brief */}
      <section className="py-24 bg-forest text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle at 80% 20%, #43A047 0, transparent 45%), radial-gradient(circle at 10% 90%, #8D6E63 0, transparent 45%)" }} />
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center reveal">
          <Quote className="w-12 h-12 mx-auto text-grass" strokeWidth={1.5} />
          <h2 className="mt-6 font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-snug">{BRAND_PROMISE.identity}</h2>
          <p className="mt-6 text-[#E8E5C8] text-lg leading-relaxed">{BRAND_PROMISE.promise}</p>
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-[11px] tracking-[0.22em] uppercase font-bold">
            Our Brand Promise
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-beige/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <span className="text-forest font-bold uppercase tracking-[0.22em] text-xs">Our Values</span>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A]">What guides every project we touch.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, t: "Customer-first", d: "We listen, we respect your home, and we leave it better than we found it." },
              { icon: ShieldCheck, t: "Quality craftsmanship", d: "Every detail matters — from grading to the final paver." },
              { icon: Users, t: "Expert team", d: "Skilled designers, horticulturists, and installers — all in-house." },
              { icon: Award, t: "Canadian expertise", d: "Climate-tested designs and material choices for our seasons." },
            ].map((v) => (
              <div key={v.t} className="bg-white rounded-3xl p-7 border border-[#EFECD3] card-lift reveal">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-beige text-forest"><v.icon className="w-5 h-5" /></span>
                <h3 className="mt-4 font-display font-bold text-lg text-[#1A1A1A]">{v.t}</h3>
                <p className="mt-2 text-sm text-[#4A4A4A] leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto rounded-[2rem] bg-forest text-white p-10 md:p-14 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl">Let's design your dream landscape.</h2>
            <p className="mt-2 text-[#E8E5C8]">Free, no-obligation estimates across Windsor &amp; Essex.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/contact" data-testid="about-cta-estimate" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-forest font-extrabold hover:bg-beige transition-colors">Get Free Estimate <ArrowRight className="w-4 h-4" /></Link>
            <a href={`tel:${BRAND.phoneRaw}`} data-testid="about-cta-call" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-white/70 font-bold hover:bg-white/10 transition-colors"><Phone className="w-4 h-4" /> Call</a>
          </div>
        </div>
      </section>
    </>
  );
}

