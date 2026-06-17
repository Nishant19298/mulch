import { useEffect, useState } from "react";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { BRAND } from "../../data/site";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed z-40 bottom-6 left-4 sm:left-6 flex flex-col items-start gap-3">
      <a
        href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Hi Mulch & Green, I'd like a free landscape estimate.")}`}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="floating-whatsapp"
        aria-label="Chat on WhatsApp"
        className="group relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_14px_40px_-10px_rgba(37,211,102,0.6)] hover:scale-105 transition-transform animate-pulse-ring"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute left-16 whitespace-nowrap text-[12px] font-bold bg-[#0F1B11] text-white px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">WhatsApp</span>
      </a>
      <a
        href={`tel:${BRAND.phoneRaw}`}
        data-testid="floating-call"
        aria-label="Call now"
        className="group relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-forest text-white shadow-[0_14px_40px_-10px_rgba(46,125,50,0.6)] hover:scale-105 transition-transform"
      >
        <Phone className="w-5 h-5" />
        <span className="absolute left-16 whitespace-nowrap text-[12px] font-bold bg-[#0F1B11] text-white px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">Call Now</span>
      </a>
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          data-testid="scroll-to-top"
          aria-label="Scroll to top"
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-forest border border-[#E8E5C8] shadow-lg hover:bg-beige transition-colors"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
