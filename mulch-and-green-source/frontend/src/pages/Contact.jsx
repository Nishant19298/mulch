import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Send, AlertCircle } from "lucide-react";
import Seo from "@/components/Seo";
import { BRAND, SERVICES } from "@/data/site";

export default function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", city: "", message: "" });
  const [error, setError] = useState("");

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in your name, email and a short message.");
      return;
    }
    const subject = encodeURIComponent(`New Estimate Request — ${form.service || "General Inquiry"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCity: ${form.city}\nService: ${form.service}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
    setTimeout(() => navigate("/thank-you"), 400);
  };

  return (
    <>
      <Seo
        title="Contact Us | Mulch & Green Landscape Windsor &amp; Essex"
        description="Contact Mulch & Green Landscape for a free landscaping estimate across Windsor &amp; Essex . Call, email or send a message today."
        canonical="https://mulchngreen.ca/contact"
      />

      {/* Hero */}
      <section className="py-24 md:py-28 bg-beige/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#EFECD3] text-forest text-[11px] tracking-[0.22em] uppercase font-bold">Get in touch</span>
          <h1 className="mt-5 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight">Let's design your <span className="brand-gradient">outdoor space.</span></h1>
          <p className="mt-5 max-w-2xl mx-auto text-[#4A4A4A] text-lg">Free, no-obligation estimates across Windsor &amp; Essex. We'll get back to you within one business day.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form */}
          <div className="lg:col-span-7">
            <form onSubmit={onSubmit} data-testid="contact-form" className="bg-white rounded-3xl border border-[#EFECD3] p-7 md:p-10 shadow-[0_20px_60px_-30px_rgba(46,125,50,0.25)]">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1A1A1A]">Request a Free Estimate</h2>
              <p className="mt-2 text-[#4A4A4A]">Tell us a bit about your project and we'll be in touch.</p>

              {error && (
                <div className="mt-5 flex gap-2 items-center bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-2xl text-sm" data-testid="contact-error">
                  <AlertCircle className="w-4 h-4 flex-none" /> {error}
                </div>
              )}

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A4A4A] mb-1.5">Full Name *</label>
                  <input name="name" value={form.name} onChange={onChange} data-testid="contact-input-name" className="w-full px-4 py-3 rounded-xl border border-[#EFECD3] focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/20 transition" placeholder="Jane Smith" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A4A4A] mb-1.5">Email *</label>
                  <input name="email" type="email" value={form.email} onChange={onChange} data-testid="contact-input-email" className="w-full px-4 py-3 rounded-xl border border-[#EFECD3] focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/20 transition" placeholder="jane@email.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A4A4A] mb-1.5">Phone</label>
                  <input name="phone" value={form.phone} onChange={onChange} data-testid="contact-input-phone" className="w-full px-4 py-3 rounded-xl border border-[#EFECD3] focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/20 transition" placeholder="(226) 555-0123" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A4A4A] mb-1.5">City</label>
                  <input name="city" value={form.city} onChange={onChange} data-testid="contact-input-city" className="w-full px-4 py-3 rounded-xl border border-[#EFECD3] focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/20 transition" placeholder="Windsor, ON" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A4A4A] mb-1.5">Service Needed</label>
                  <select name="service" value={form.service} onChange={onChange} data-testid="contact-input-service" className="w-full px-4 py-3 rounded-xl border border-[#EFECD3] focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/20 transition bg-white">
                    <option value="">Select a service</option>
                    {SERVICES.map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A4A4A] mb-1.5">Project Details *</label>
                  <textarea name="message" rows="5" value={form.message} onChange={onChange} data-testid="contact-input-message" className="w-full px-4 py-3 rounded-xl border border-[#EFECD3] focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/20 transition resize-y" placeholder="Tell us about your project, goals, timeline, budget..." />
                </div>
              </div>

              <button type="submit" data-testid="contact-submit" className="mt-7 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-forest text-white font-extrabold hover:bg-[#1B5E20] transition-colors">
                Send Message <Send className="w-4 h-4" />
              </button>
              <p className="mt-3 text-xs text-[#4A4A4A]">By submitting, you agree to our <a href="/privacy" className="underline">Privacy Policy</a>.</p>
            </form>
          </div>

          {/* Info */}
          <aside className="lg:col-span-5 space-y-5">
            <div className="bg-beige/40 rounded-3xl border border-[#EFECD3] p-7">
              <h3 className="font-display font-bold text-xl text-[#1A1A1A]">Contact Details</h3>
              <ul className="mt-5 space-y-5">
                <li className="flex gap-4">
                  <span className="w-11 h-11 rounded-2xl bg-white text-forest inline-flex items-center justify-center flex-none border border-[#EFECD3]"><Phone className="w-5 h-5" /></span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#4A4A4A] font-bold">Phone</div>
                    <a href={`tel:${BRAND.phoneRaw}`} className="text-[#1A1A1A] font-display font-bold text-lg hover:text-forest" data-testid="contact-info-phone">{BRAND.phone}</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-11 h-11 rounded-2xl bg-white text-forest inline-flex items-center justify-center flex-none border border-[#EFECD3]"><Mail className="w-5 h-5" /></span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#4A4A4A] font-bold">Email</div>
                    <a href={`mailto:${BRAND.email}`} className="text-[#1A1A1A] font-display font-bold text-lg hover:text-forest break-all" data-testid="contact-info-email">{BRAND.email}</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-11 h-11 rounded-2xl bg-white text-forest inline-flex items-center justify-center flex-none border border-[#EFECD3]"><MapPin className="w-5 h-5" /></span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#4A4A4A] font-bold">Location</div>
                    <div className="text-[#1A1A1A] font-display font-bold text-lg">Windsor &amp; Essex, ON, Canada</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-11 h-11 rounded-2xl bg-white text-forest inline-flex items-center justify-center flex-none border border-[#EFECD3]"><Clock className="w-5 h-5" /></span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#4A4A4A] font-bold">Business Hours</div>
                    {BRAND.hours.map((h) => (
                      <div key={h.day} className="text-[#1A1A1A] text-sm"><span className="font-bold">{h.day}:</span> {h.hours}</div>
                    ))}
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-[#EFECD3] overflow-hidden">
              <iframe
                title="Google Map"
                data-testid="contact-map"
                className="w-full h-[280px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Windsor%2C%20Ontario%2C%20Canada&output=embed"
              />
            </div>

            <div className="rounded-3xl bg-forest text-white p-7">
              <h3 className="font-display font-extrabold text-xl">Need urgent help?</h3>
              <p className="mt-2 text-[#E8E5C8] text-sm">Snow removal, fallen trees, or storm cleanup — we respond fast.</p>
              <a href={`tel:${BRAND.phoneRaw}`} data-testid="contact-emergency-call" className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-forest font-extrabold hover:bg-beige transition-colors">
                <Phone className="w-4 h-4" /> Call {BRAND.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
