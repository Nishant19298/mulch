import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { BRAND } from "../../data/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  {
    label: "Landscaping",
    to: "/landscaping",
    dropdown: [
      { to: "/landscaping/hardscape", label: "Hardscape" },
      { to: "/landscaping/softscape", label: "Softscape" },
    ],
  },
  { to: "/landscaping/creative-plant-beds-garden-design", label: "Garden Design" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileDropOpen, setMobileDropOpen] = useState(false);
  const closeTimer = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropOpen(false);
    setMobileDropOpen(false);
  }, [location.pathname]);

  const openDrop = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropOpen(true);
  };
  const scheduleCloseDrop = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setDropOpen(false), 150);
  };

  const isLandscapingActive = location.pathname.startsWith("/landscaping") && !location.pathname.includes("garden-design");

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-[#E8E5C8] shadow-[0_4px_24px_rgba(46,125,50,0.06)]"
          : "bg-white/40 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" data-testid="logo-link" className="flex items-center gap-3 group xl:mr-8 flex-none">
            <img
              src="/brand/logo-clean-256.png"
              srcSet="/brand/logo-clean-96.png 96w, /brand/logo-clean-256.png 256w"
              sizes="56px"
              width="56" height="56"
              alt="Mulch & Green Landscapes"
              className="w-14 h-14 rounded-2xl object-cover shadow-[0_8px_20px_rgba(46,125,50,0.35)] transition-transform group-hover:rotate-[-6deg]"
              loading="eager"
              decoding="async"
            />
            <span className="flex flex-col leading-tight whitespace-nowrap">
              <span className="font-display font-extrabold text-[17px] sm:text-lg text-[#1A1A1A]">Mulch &amp; Green</span>
              <span className="text-[10px] tracking-[0.22em] uppercase text-earth font-semibold">Landscaping</span>
            </span>
          </Link>

          <nav className="hidden xl:flex items-center gap-1 xl:gap-2 ml-auto mr-6" aria-label="Primary">
            {links.map((l) => {
              if (l.dropdown) {
                return (
                  <div
                    key={l.label}
                    className="relative"
                    onMouseEnter={openDrop}
                    onMouseLeave={scheduleCloseDrop}
                  >
                    <Link
                      to={l.to}
                      data-testid={`nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={() => setDropOpen(false)}
                      aria-expanded={dropOpen}
                      className={`nav-link relative flex items-center gap-1 px-3 py-2 text-[14px] font-semibold whitespace-nowrap transition-colors ${
                        isLandscapingActive ? "text-forest active" : "text-[#1A1A1A] hover:text-forest"
                      }`}
                    >
                      <span className="relative">
                        {l.label}
                        <span className="nav-underline absolute left-0 -bottom-1 h-[2px] bg-forest transition-all duration-300 w-0" />
                      </span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropOpen ? "rotate-180" : ""}`} />
                    </Link>
                    {dropOpen && (
                      <div
                        data-testid="landscaping-dropdown"
                        className="absolute left-0 top-full pt-2 w-64"
                      >
                        <div className="rounded-2xl bg-white border border-[#EFECD3] shadow-[0_18px_50px_-15px_rgba(46,125,50,0.25)] overflow-hidden py-2">
                          {l.dropdown.map((d) => (
                            <NavLink
                              key={d.to}
                              to={d.to}
                              data-testid={`nav-dropdown-${d.label.toLowerCase()}`}
                              className={({ isActive }) =>
                                `block px-5 py-3 text-[14px] font-semibold transition-colors ${
                                  isActive ? "bg-beige/50 text-forest" : "text-[#1A1A1A] hover:bg-beige/40 hover:text-forest"
                                }`
                              }
                            >
                              {d.label}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <NavLink
                  key={l.to}
                  to={l.to}
                  data-testid={`nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `nav-link relative px-3 py-2 text-[14px] font-semibold whitespace-nowrap transition-colors ${
                      isActive ? "text-forest active" : "text-[#1A1A1A] hover:text-forest"
                    }`
                  }
                >
                  <span className="relative">
                    {l.label}
                    <span className="nav-underline absolute left-0 -bottom-1 h-[2px] bg-forest transition-all duration-300 w-0" />
                  </span>
                </NavLink>
              );
            })}
          </nav>

          <div className="hidden xl:flex items-center gap-3 flex-none">
            <a
              href={`tel:${BRAND.phoneRaw}`}
              data-testid="header-call-now"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#1A1A1A] hover:text-forest transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 flex-none" /> {BRAND.phone}
            </a>
            <Link
              to="/contact"
              data-testid="header-cta-estimate"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-forest text-white text-[14px] font-bold whitespace-nowrap shadow-[0_10px_30px_-10px_rgba(46,125,50,0.6)] hover:bg-[#1B5E20] transition-all hover:-translate-y-0.5"
            >
              Get Free Estimate
            </Link>
          </div>

          <button
            data-testid="mobile-menu-toggle"
            className="xl:hidden inline-flex items-center justify-center w-11 h-11 rounded-2xl border border-[#E8E5C8] text-[#1A1A1A] flex-none"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="xl:hidden pb-6 animate-fade-in" data-testid="mobile-menu">
            <nav className="flex flex-col gap-1 pt-2">
              {links.map((l) => {
                if (l.dropdown) {
                  return (
                    <div key={l.label}>
                      <button
                        type="button"
                        data-testid="mobile-nav-landscaping-toggle"
                        onClick={() => setMobileDropOpen((v) => !v)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-[15px] font-semibold ${
                          isLandscapingActive ? "bg-beige text-forest" : "text-[#1A1A1A] hover:bg-beige/60"
                        }`}
                      >
                        {l.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropOpen ? "rotate-180" : ""}`} />
                      </button>
                      {mobileDropOpen && (
                        <div className="pl-4 flex flex-col gap-1 mt-1" data-testid="mobile-landscaping-dropdown">
                          {l.dropdown.map((d) => (
                            <NavLink
                              key={d.to}
                              to={d.to}
                              onClick={() => setOpen(false)}
                              data-testid={`mobile-nav-${d.label.toLowerCase()}`}
                              className={({ isActive }) =>
                                `px-4 py-2.5 rounded-xl text-[14px] font-semibold ${
                                  isActive ? "bg-beige text-forest" : "text-[#4A4A4A] hover:bg-beige/50"
                                }`
                              }
                            >
                              {d.label}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    end={l.to === "/"}
                    onClick={() => setOpen(false)}
                    data-testid={`mobile-nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl text-[15px] font-semibold ${
                        isActive ? "bg-beige text-forest" : "text-[#1A1A1A] hover:bg-beige/60"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                );
              })}
              <div className="flex gap-2 pt-3">
                <a
                  href={`tel:${BRAND.phoneRaw}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-forest text-forest font-bold"
                  data-testid="mobile-call-now"
                >
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="flex-1 inline-flex items-center justify-center px-4 py-3 rounded-full bg-forest text-white font-bold"
                  data-testid="mobile-cta-estimate"
                >
                  Free Estimate
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
