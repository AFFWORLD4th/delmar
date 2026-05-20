import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Delmar Services",
  description: "Read our Privacy Policy to understand how Delmar Services handles personal data, operational details, and customer information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col w-full font-sans">
      {/* ─── HERO ─── */}
      <section className="relative h-[40vh] min-h-[300px] flex items-end pb-12 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/services_hero.png')" }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-24 z-10 bg-gradient-to-t from-background to-transparent" />

        <div className="container mx-auto px-6 lg:px-16 relative z-20">
          <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground/40 mb-4 font-medium">
            <Link href="/" className="hover:text-primary-foreground/70 transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: "var(--gold)" }}>Privacy Policy</span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-black font-heading leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Privacy <span style={{ color: "var(--gold)" }}>Policy</span>
          </h1>
          <p className="text-[0.68rem] uppercase tracking-[0.15em] text-primary-foreground/40 mt-3 font-semibold">
            Last Updated: May 20, 2026
          </p>
        </div>
      </section>

      {/* ─── CONTENT ─── */}
      <section className="py-20 bg-background text-secondary">
        <div className="container mx-auto px-6 lg:px-16 max-w-4xl">
          <div className="space-y-12 leading-relaxed text-secondary/80 font-light text-base">
            
            <p className="text-lg text-secondary/90 leading-relaxed border-l-2 border-gold pl-6 py-1">
              At Delmar Services, we prioritize safeguarding the privacy of our website visitors, clients, and partners. This Privacy Policy details how we collect, use, process, and protect your personal and operational information.
            </p>

            <div className="space-y-4">
              <h2 className="text-xl font-black font-heading text-primary uppercase tracking-wide">
                1. Information We Collect
              </h2>
              <p>
                We collect information directly from you when you request quotes, submit inquiry forms, or communicate with our operations team. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-primary font-medium">Contact Details:</strong> Name, job title, email address, phone number, and company name.</li>
                <li><strong className="text-primary font-medium">Operational Specifics:</strong> Vessel names, registration/IMO numbers, voyage schedules, cargo details, and port clearance parameters.</li>
                <li><strong className="text-primary font-medium">Technical & Analytics Data:</strong> IP address, browser type, operating system, and anonymous interaction metrics when navigating our site.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-black font-heading text-primary uppercase tracking-wide">
                2. How We Use Your Information
              </h2>
              <p>
                The information we gather is used to support and optimize your marine and business operations, specifically to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Generate and deliver requested quotes, project estimates, and contracts.</li>
                <li>Coordinate logistics, port clearances, crew change transportation, and ship chandlery orders.</li>
                <li>Communicate critical operational alerts, customs updates, and system changes.</li>
                <li>Improve our website experience, customer service responsiveness, and operational efficiency.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-black font-heading text-primary uppercase tracking-wide">
                3. Information Sharing & Disclosure
              </h2>
              <p>
                Delmar Services does not sell, rent, or lease client data to third parties. We share information only with authorized entities to complete your requests, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-primary font-medium">Port & Customs Authorities:</strong> Necessary documentation for ship entry, crew visas, cargo clearance, and regulatory compliance.</li>
                <li><strong className="text-primary font-medium">Partner Agents & Suppliers:</strong> Local sub-agents, transport providers, and chandlers under strict confidentiality agreements.</li>
                <li><strong className="text-primary font-medium">Legal Compliance:</strong> When required by Omani or international law, court orders, or state investigations.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-black font-heading text-primary uppercase tracking-wide">
                4. Data Security
              </h2>
              <p>
                We implement industry-standard administrative, physical, and electronic security measures to guard your information against unauthorized access, disclosure, alteration, or destruction. We utilize SSL encryption for web transfers, firewalls, and restricted database access profiles.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-black font-heading text-primary uppercase tracking-wide">
                5. Cookies & Tracking Technologies
              </h2>
              <p>
                Our website utilizes cookies and similar local storage elements to collect standard traffic logs. These helper files help us understand user interaction trends, store select preferences, and load static assets more efficiently. You can configure your browser to reject cookies, though this may limit some interactive features.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-black font-heading text-primary uppercase tracking-wide">
                6. Your Rights
              </h2>
              <p>
                Depending on your location, you have rights regarding your personal data under applicable data privacy frameworks, including the right to request access, correction, or deletion of the personal data we hold. If you wish to submit a data request, please contact our support team.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-black font-heading text-primary uppercase tracking-wide">
                7. Third-Party Websites
              </h2>
              <p>
                Our digital properties may feature links to external partner, registry, or regulatory websites. Delmar Services is not responsible for the privacy practices or data policies of these third-party platforms.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-secondary/10">
              <h2 className="text-xl font-black font-heading text-primary uppercase tracking-wide">
                8. Contact Information
              </h2>
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy or our data protection measures, please reach out to us:
              </p>
              <div className="p-6 bg-secondary/5 border border-secondary/10 space-y-2 mt-4 text-sm font-medium">
                <p><strong style={{ color: "var(--primary)" }}>Office Address:</strong> Muscat, Oman</p>
                <p><strong style={{ color: "var(--primary)" }}>Phone Support:</strong> +971 55 420 6643</p>
                <p><strong style={{ color: "var(--primary)" }}>Official Email:</strong> info@delmarservice.com</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
