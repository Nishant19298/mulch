import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import Seo from "@/components/Seo";
import { BRAND } from "@/data/site";

export default function ThankYou() {
  return (
    <>
      <Seo
        title="Thank You | Mulch & Green Landscape"
        description="Thanks for contacting Mulch & Green Landscape. We'll get back to you shortly."
        canonical="https://mulchngreen.ca/thank-you"
      />
      <section className="py-32 bg-beige/40 min-h-[70vh] flex items-center">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-forest text-white shadow-[0_18px_40px_-12px_rgba(46,125,50,0.6)] animate-float">
            <CheckCircle2 className="w-9 h-9" />
          </span>
          <h1 className="mt-7 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight" data-testid="thankyou-heading">Thank you!</h1>
          <p className="mt-5 text-[#4A4A4A] text-lg leading-relaxed">We've received your message and will get back to you within one business day. For urgent requests, please call us directly.</p>
          <div className="mt-9 flex flex-wrap gap-3 justify-center">
            <a href={`tel:${BRAND.phoneRaw}`} data-testid="thankyou-call" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-forest text-white font-extrabold hover:bg-[#1B5E20] transition-colors"><Phone className="w-4 h-4" /> {BRAND.phone}</a>
            <Link to="/" data-testid="thankyou-home" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-forest text-forest font-bold hover:bg-forest hover:text-white transition-colors">Back to Home <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
