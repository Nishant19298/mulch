import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import { GALLERY_IMAGES } from "@/data/site";

const masonryClasses = [
  "row-span-2 h-[520px]",
  "h-[260px]",
  "h-[260px]",
  "h-[260px]",
  "row-span-2 h-[520px]",
  "h-[260px]",
  "h-[260px]",
  "h-[260px]",
];

export default function Gallery() {
  return (
    <>
      <Seo
        title="Gallery | Mulch & Green Landscape"
        description="Real client photos of landscape, hardscape, garden and outdoor living projects in Windsor &amp; Essex, Windsor &amp; Essex."
        canonical="https://mulchngreen.ca/gallery"
      />

      <section className="py-24 md:py-32 bg-beige/40 text-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#EFECD3] text-forest text-[11px] tracking-[0.22em] uppercase font-bold">Gallery</span>
          <h1 className="mt-5 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight">A look at our <span className="brand-gradient">finest work.</span></h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[260px] gap-4">
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={i}
                data-testid={`gallery-image-${i}`}
                className={`img-zoom rounded-3xl overflow-hidden reveal ${masonryClasses[i % masonryClasses.length]}`}
                style={{ transitionDelay: `${i*40}ms` }}
              >
                <img
                  src={img.full || img}
                  srcSet={img.sm ? `${img.sm} 800w, ${img.full} 1600w` : undefined}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  alt={`Mulch & Green real client project ${i+1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto rounded-[2rem] bg-forest text-white p-10 md:p-14 flex flex-col md:flex-row gap-6 items-center justify-between">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl">Inspired? Let's create yours.</h2>
          <Link to="/contact" data-testid="gallery-cta-estimate" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-forest font-extrabold hover:bg-beige transition-colors">Free Estimate <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
}
