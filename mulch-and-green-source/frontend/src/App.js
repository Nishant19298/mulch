import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";
import Reveal from "@/components/Reveal";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import ThankYou from "@/pages/ThankYou";
import NotFound from "@/pages/NotFound";
import { BlogIndex, BlogPost } from "@/pages/Blog";

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
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
      </BrowserRouter>
    </div>
  );
}
