import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found | Mulch & Green Landscape" description="The page you're looking for can't be found." />
      <section className="py-32 min-h-[70vh] flex items-center bg-beige/40">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="font-display font-extrabold text-[110px] leading-none text-forest">404</div>
          <h1 className="mt-3 font-display font-extrabold text-3xl text-[#1A1A1A]">This page took a walk in the garden.</h1>
          <p className="mt-3 text-[#4A4A4A]">Let's get you back on the path.</p>
          <Link to="/" className="mt-6 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-forest text-white font-extrabold hover:bg-[#1B5E20] transition-colors">Back to Home</Link>
        </div>
      </section>
    </>
  );
}
