import Seo from "@/components/Seo";

export default function Terms() {
  return (
    <>
      <Seo
        title="Terms & Conditions | Mulch & Green Landscape"
        description="Terms governing the use of the Mulch & Green Landscape website and services."
        canonical="https://mulchngreen.ca/terms"
      />
      <section className="py-24 bg-beige/40">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#EFECD3] text-forest text-[11px] tracking-[0.22em] uppercase font-bold">Legal</span>
          <h1 className="mt-5 font-display font-extrabold text-4xl sm:text-5xl text-[#1A1A1A] tracking-tight">Terms &amp; Conditions</h1>
          <p className="mt-3 text-sm text-[#4A4A4A]">Last updated: January 2026</p>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8 text-[#4A4A4A]">
          <p>By accessing the website <strong>mulchngreen.ca</strong> or engaging Mulch &amp; Green Landscape for services, you agree to the following terms.</p>

          <div>
            <h2 className="font-display font-extrabold text-2xl text-[#1A1A1A] mt-8">1. Use of Website</h2>
            <p>This website is provided for informational purposes. Content, images, and branding are the property of Mulch &amp; Green Landscape and may not be reproduced without written permission.</p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-2xl text-[#1A1A1A] mt-8">2. Service Terms</h2>
            <p>All landscaping and hardscaping work is performed under a separate written project agreement detailing scope, schedule, materials, and pricing. Estimates provided through the website are non-binding until confirmed in writing.</p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-2xl text-[#1A1A1A] mt-8">3. Payment Terms</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>A deposit may be required to confirm project scheduling</li>
              <li>Final payment is due upon project completion</li>
              <li>Late payments may incur reasonable interest charges</li>
              <li>We accept e-transfer, cheque, and credit card</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-2xl text-[#1A1A1A] mt-8">4. Warranties</h2>
            <p>We provide a multi-year workmanship warranty on installed hardscape and a one-season warranty on plant material installed by our team, subject to proper care. Manufacturer warranties apply to all materials.</p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-2xl text-[#1A1A1A] mt-8">5. Liability Limitations</h2>
            <p>Mulch &amp; Green Landscape is fully insured. Our total liability is limited to the value of the project under contract. We are not liable for damages arising from acts of nature, pre-existing site conditions, or third-party interference.</p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-2xl text-[#1A1A1A] mt-8">6. Cancellations</h2>
            <p>Cancellation terms are specified in your project agreement. Deposits may be non-refundable once materials are ordered.</p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-2xl text-[#1A1A1A] mt-8">7. Governing Law</h2>
            <p>These terms are governed by the laws of the Province of Ontario, Canada.</p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-2xl text-[#1A1A1A] mt-8">8. Contact</h2>
            <p>Questions? Email <a className="text-forest" href="mailto:moudgil1975@yahoo.com">moudgil1975@yahoo.com</a> or call <a className="text-forest" href="tel:+12263485048">+1 (226) 348-5048</a>.</p>
          </div>
        </div>
      </article>
    </>
  );
}
