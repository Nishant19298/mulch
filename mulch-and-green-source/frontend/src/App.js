import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";
import Reveal from "@/components/Reveal";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import Projects from "@/pages/Projects";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import ThankYou from "@/pages/ThankYou";
import NotFound from "@/pages/NotFound";
import SeoServicePage from "@/pages/SeoServicePage";
import SeoAreaPage from "@/pages/SeoAreaPage";
import { BlogIndex, BlogPost } from "@/pages/Blog";

const SEO_SERVICE_SLUGS = [
  "landscape-windsor-on","hardscape-windsor-on","lawn-care-windsor-on",
  "mulch-installation-windsor-on","garden-design-windsor-on","patio-installation-windsor-on",
  "retaining-walls-windsor-on","backyard-renovation-windsor-on","outdoor-living-spaces-windsor-on",
];
const SEO_AREA_SLUGS = [
  "landscape-lasalle-on","landscape-tecumseh-on","landscape-essex-on",
  "landscape-amherstburg-on","landscape-lakeshore-on","landscape-kingsville-on",
  "landscape-leamington-on","landscape-belle-river-on",
];

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Reveal />
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            {SEO_SERVICE_SLUGS.map((s) => (
              <Route key={s} path={`/${s}`} element={<SeoServicePage />} />
            ))}
            {SEO_AREA_SLUGS.map((s) => (
              <Route key={s} path={`/${s}`} element={<SeoAreaPage />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
      </BrowserRouter>
    </div>
  );
}
