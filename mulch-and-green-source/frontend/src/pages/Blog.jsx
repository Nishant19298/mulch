import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import Seo from "@/components/Seo";
import { BLOG_POSTS, SITE_URL } from "@/data/seoContent";

export function BlogIndex() {
  return (
    <>
      <Seo
        title="Landscape Blog — Windsor & Essex Tips | Mulch & Green"
        description="Landscape, hardscape, mulch and lawn-care articles written for Windsor and Essex County homeowners."
        canonical={`${SITE_URL}/blog`}
      />
      <section className="py-24 md:py-32 bg-beige/40 text-center">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#EFECD3] text-forest text-[11px] tracking-[0.22em] uppercase font-bold">Blog</span>
          <h1 className="mt-5 font-display font-extrabold text-4xl sm:text-5xl text-[#1A1A1A] tracking-tight">Landscape ideas for Windsor &amp; Essex homes.</h1>
          <p className="mt-5 text-[#4A4A4A] text-lg">Tips, trends and how-to guides from our crew — written for local homeowners.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {BLOG_POSTS.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="block bg-beige/30 hover:bg-beige/70 rounded-3xl border border-[#EFECD3] p-7 transition-colors reveal" data-testid={`blog-card-${p.slug}`}>
              <div className="text-xs text-[#4A4A4A] uppercase tracking-widest font-semibold">{new Date(p.date).toLocaleDateString("en-CA", { year:"numeric", month:"long", day:"numeric" })}</div>
              <h2 className="mt-2 font-display font-extrabold text-xl text-[#1A1A1A]">{p.title}</h2>
              <p className="mt-3 text-[#4A4A4A] text-[15px] leading-relaxed">{p.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-forest font-bold text-sm">Read article <ChevronRight className="w-4 h-4" /></span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: { "@type": "Organization", name: "Mulch & Green Landscape" },
    publisher: { "@type": "Organization", name: "Mulch & Green Landscape" },
    datePublished: post.date,
  };

  return (
    <>
      <Seo title={post.title} description={post.description} canonical={`${SITE_URL}/blog/${post.slug}`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <nav className="text-xs text-[#4A4A4A] mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-forest">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-forest">Blog</Link>
          </nav>
          <div className="text-xs text-[#4A4A4A] uppercase tracking-widest font-semibold">{new Date(post.date).toLocaleDateString("en-CA", { year:"numeric", month:"long", day:"numeric" })}</div>
          <h1 className="mt-2 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] tracking-tight">{post.title}</h1>
          <p className="mt-5 text-[#4A4A4A] text-lg leading-relaxed">{post.excerpt}</p>

          <div className="mt-10 space-y-8">
            {post.sections.map((s) => (
              <section key={s.h2}>
                <h2 className="font-display font-extrabold text-2xl text-[#1A1A1A]">{s.h2}</h2>
                <p className="mt-3 text-[#4A4A4A] text-lg leading-relaxed">{s.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-12 p-7 rounded-3xl bg-beige/40 border border-[#EFECD3] text-center">
            <h3 className="font-display font-bold text-xl text-[#1A1A1A]">Planning a project?</h3>
            <p className="mt-2 text-[#4A4A4A]">Let our team design and build it for you across Windsor &amp; Essex.</p>
            <Link to="/contact" className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest text-white font-extrabold hover:bg-[#1B5E20]">Get Free Estimate <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </article>
    </>
  );
}
