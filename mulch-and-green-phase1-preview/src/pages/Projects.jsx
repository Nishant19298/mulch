import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import { PROJECTS, PROJECT_CATEGORIES } from "@/data/site";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter || p.category2 === filter);

  return (
    <>
      <Seo
        title="Projects & Portfolio | Mulch & Green Landscape"
        description="Browse our portfolio of real landscaping, hardscaping, garden and patio projects across Windsor &amp; Essex ."
        canonical="https://mulchngreen.ca/projects"
      />

      <section className="relative py-24 md:py-32 bg-beige/40 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#EFECD3] text-forest text-[11px] tracking-[0.22em] uppercase font-bold">Portfolio</span>
          <h1 className="mt-5 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight">Our latest <span className="brand-gradient">landscape projects.</span></h1>
          <p className="mt-6 max-w-2xl mx-auto text-[#4A4A4A] text-lg">Real Windsor &amp; Essex homes, transformed by our team.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {PROJECT_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                data-testid={`project-filter-${c.toLowerCase().replace(/\s+/g,'-')}`}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  filter === c ? "bg-forest text-white shadow-[0_10px_24px_-10px_rgba(46,125,50,0.5)]" : "bg-beige/60 text-[#1A1A1A] hover:bg-beige"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <div
                key={p.id}
                data-testid={`project-card-${p.id}`}
                className="group img-zoom relative rounded-3xl overflow-hidden h-[360px] reveal"
                style={{ transitionDelay: `${i*40}ms` }}
              >
                <img src={p.image} srcSet={p.sm ? `${p.sm} 800w, ${p.image} 1600w` : undefined} sizes="(max-width: 768px) 100vw, 33vw" alt={p.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <span className="inline-block text-[10px] tracking-[0.22em] uppercase font-bold text-grass">{p.category}</span>
                  <h3 className="mt-1 font-display font-bold text-white text-xl">{p.title}</h3>
                  <div className="text-white/80 text-xs flex items-center gap-1.5 mt-1"><MapPin className="w-3 h-3" /> {p.city}</div>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-16 text-[#4A4A4A]">No projects in this category yet.</div>
          )}
        </div>
      </section>

      <section className="px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto rounded-[2rem] bg-forest text-white p-10 md:p-14 flex flex-col md:flex-row gap-6 items-center justify-between">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl">Your home could be next.</h2>
          <Link to="/contact" data-testid="projects-cta-estimate" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-forest font-extrabold hover:bg-beige transition-colors">Start Your Project <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
}
