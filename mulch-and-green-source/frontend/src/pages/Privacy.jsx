import Seo from "@/components/Seo";

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy | Mulch & Green Landscape"
        description="How Mulch & Green Landscape collects, uses, and protects your information."
        canonical="https://mulchngreen.ca/privacy"
      />
      <section className="py-24 bg-beige/40">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#EFECD3] text-forest text-[11px] tracking-[0.22em] uppercase font-bold">Legal</span>
          <h1 className="mt-5 font-display font-extrabold text-4xl sm:text-5xl text-[#1A1A1A] tracking-tight">Privacy Policy</h1>
          <p className="mt-3 text-sm text-[#4A4A4A]">Last updated: January 2026</p>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 prose prose-lg prose-headings:font-display prose-headings:text-[#1A1A1A] prose-p:text-[#4A4A4A] prose-li:text-[#4A4A4A] prose-a:text-forest space-y-8">
          <p>This Privacy Policy describes how Mulch &amp; Green Landscape ("we", "us", "our") collects, uses, and shares your personal information when you visit <strong>mulchngreen.ca</strong> or use our services.</p>

          <div>
            <h2 className="font-display font-extrabold text-2xl mt-8">1. Information We Collect</h2>
            <p>We collect information you provide directly to us — such as your name, email, phone number, address, and project details — when you submit a contact or estimate request.</p>
            <p>We also automatically collect basic technical information (IP address, browser type, pages visited) through standard analytics tools.</p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-2xl mt-8">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To respond to your inquiries and provide estimates</li>
              <li>To schedule and deliver our landscaping services</li>
              <li>To send service updates and occasional marketing communications</li>
              <li>To improve our website and customer experience</li>
              <li>To comply with legal and regulatory requirements</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-2xl mt-8">3. Cookies Policy</h2>
            <p>Our website uses cookies and similar technologies to remember your preferences, analyze traffic, and improve performance. You can disable cookies through your browser settings — though some site features may not function properly.</p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-2xl mt-8">4. How We Share Your Information</h2>
            <p>We do not sell your personal information. We may share data with trusted service providers (e.g., hosting, email, analytics) strictly for the purposes described above, or when required by law.</p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-2xl mt-8">5. Data Security</h2>
            <p>We implement reasonable safeguards to protect your information. However, no online transmission is 100% secure — please use discretion when sharing sensitive data.</p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-2xl mt-8">6. Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal data at any time by contacting us at <a href="mailto:moudgil1975@yahoo.com">moudgil1975@yahoo.com</a>. This policy is compliant with Canadian PIPEDA legislation.</p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-2xl mt-8">7. Contact Us</h2>
            <p>Questions about this Privacy Policy? Reach us at <a href="mailto:moudgil1975@yahoo.com">moudgil1975@yahoo.com</a> or <a href="tel:+12263485048">+1 (226) 348-5048</a>.</p>
          </div>
        </div>
      </article>
    </>
  );
}
