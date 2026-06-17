import { Link } from "react-router-dom";
import { Facebook, Instagram, Heart, Mail, Phone, MapPin } from "lucide-react";
import { BRAND, SERVICES } from "../../data/site";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="relative bg-[#0F1B11] text-[#E8E5C8] mt-24 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, #43A047 0, transparent 40%), radial-gradient(circle at 80% 80%, #8D6E63 0, transparent 40%)",
      }} />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <img
                src="/brand/logo-clean-256.png"
                width="56" height="56"
                alt="Mulch & Green Landscapes"
                className="w-14 h-14 rounded-2xl object-cover shadow-[0_8px_20px_rgba(46,125,50,0.5)]"
                loading="lazy" decoding="async"
              />
              <div>
                <div className="font-display font-extrabold text-xl text-white">Mulch &amp; Green</div>
                <div className="text-[11px] tracking-[0.22em] uppercase text-[#A8C9A2] font-semibold">Landscaping · Windsor &amp; Essex</div>
              </div>
            </div>
            <p className="mt-6 text-[15px] text-[#C9D6C4] leading-relaxed max-w-md">
              Creating beautiful communities in and around Windsor &amp; Essex. Affordable and realistic designs, impeccable execution, total fulfillment, and trusted landscaping solutions.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a aria-label="Facebook" href={BRAND.social.facebook} target="_blank" rel="noopener noreferrer" data-testid="social-facebook" className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-white/15 hover:border-grass hover:text-grass transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a aria-label="Instagram" href={BRAND.social.instagram} target="_blank" rel="noopener noreferrer" data-testid="social-instagram" className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-white/15 hover:border-grass hover:text-grass transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-display font-bold text-base mb-5">Quick Links</h4>
            <ul className="space-y-3 text-[14px]">
              <li><Link to="/" className="hover:text-grass transition-colors" data-testid="footer-home">Home</Link></li>
              <li><Link to="/about" className="hover:text-grass transition-colors" data-testid="footer-about">About</Link></li>
              <li><Link to="/projects" className="hover:text-grass transition-colors" data-testid="footer-projects">Projects</Link></li>
              <li><Link to="/gallery" className="hover:text-grass transition-colors" data-testid="footer-gallery">Gallery</Link></li>
              <li><Link to="/testimonials" className="hover:text-grass transition-colors" data-testid="footer-testimonials">Testimonials</Link></li>
              <li><Link to="/service-areas" className="hover:text-grass transition-colors" data-testid="footer-service-areas">Service Areas</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-display font-bold text-base mb-5">Services</h4>
            <ul className="space-y-3 text-[14px]">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="hover:text-grass transition-colors" data-testid={`footer-service-${s.slug}`}>{s.name}</Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-grass font-semibold hover:underline" data-testid="footer-all-services">View all services →</Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-display font-bold text-base mb-5">Contact</h4>
            <ul className="space-y-4 text-[14px]">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-grass flex-none" />
                <a href={`tel:${BRAND.phoneRaw}`} className="hover:text-grass" data-testid="footer-phone">{BRAND.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 text-grass flex-none" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-grass break-all" data-testid="footer-email">{BRAND.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-grass flex-none" />
                <span>Serving Windsor &amp; Essex, Windsor &amp; Essex</span>
              </li>
            </ul>

            <Link to="/contact" data-testid="footer-cta-estimate" className="mt-6 inline-flex items-center px-5 py-3 rounded-full bg-grass text-[#0F1B11] font-bold hover:bg-white transition-colors">
              Request Free Estimate
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-[#A8C9A2]">
          <div>© {new Date().getFullYear()} Mulch &amp; Green Landscape. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-grass" data-testid="footer-privacy">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-grass" data-testid="footer-terms">Terms &amp; Conditions</Link>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/5 text-center text-[13px] text-[#A8C9A2]">
          <span className="inline-flex items-center gap-1.5 flex-wrap justify-center">
            Designed &amp; Developed with
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400 inline-block animate-pulse" />
            by
            <a
              href="https://www.cybertronsoftech.ca/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-cybertron-credit"
              className="font-bold text-white hover:text-grass transition-colors underline underline-offset-4 decoration-grass/40 hover:decoration-grass"
            >
              Cybertron Softech Inc
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
