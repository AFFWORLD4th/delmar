import Link from "next/link";

export const metadata = {
  title: "Terms of Use | Delmar Services",
  description: "Review the Terms of Use and rules of engagement for Delmar Services global maritime and operational support solutions.",
};

export default function TermsOfUse() {
  return (
    <div className="flex flex-col w-full font-sans">
      {/* ─── HERO ─── */}
      <section className="relative h-[40vh] min-h-[300px] flex items-end pb-12 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[#0A1B2E]/60 z-10" />
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/services_hero.png')" }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-24 z-10 bg-gradient-to-t from-background to-transparent" />

        <div className="container mx-auto px-6 lg:px-16 relative z-20">
          <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground/40 mb-4 font-medium">
            <Link href="/" className="hover:text-primary-foreground/70 transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: "var(--gold)" }}>Terms of Use</span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-black font-heading leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Terms of <span style={{ color: "var(--gold)" }}>Use</span>
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
              Please read these Terms of Use ("Terms") carefully before using the services provided by Delmar Services ("we," "us," or "our") or accessing our digital assets. By using our services, you agree to be bound by these Terms and our Privacy Policy.
            </p>

            <div className="space-y-4">
              <h2 className="text-xl font-black font-heading text-primary uppercase tracking-wide">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing our platform or utilizing our maritime support, coordination, logistics, procurement, and crew logistics services, you agree to adhere to these Terms of Use. If you do not agree to these terms, you are not authorized to access or use our services.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-black font-heading text-primary uppercase tracking-wide">
                2. Scope of Services
              </h2>
              <p>
                Delmar Services provides a suite of international maritime assistance, agency management, ship chandlery, crew transport coordination, and consulting services. All service agreements, quotes, and specific operational deliverables are subject to individual written contracts, service order confirmations, and relevant local or international maritime regulations.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-black font-heading text-primary uppercase tracking-wide">
                3. User & Client Responsibilities
              </h2>
              <p>
                As a client or platform visitor, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate, current, and complete information when requesting quotes or initiating service orders.</li>
                <li>Ensure compliance with all local laws, import/export regulations, customs protocols, and port rules applicable to your vessels, cargo, or crew.</li>
                <li>Refrain from using our services for any unauthorized, fraudulent, or illegal maritime activities.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-black font-heading text-primary uppercase tracking-wide">
                4. Intellectual Property
              </h2>
              <p>
                All content, graphics, logos, branding elements, software, design systems, and text displayed on this website and in our service materials are the exclusive property of Delmar Services or our licensors and are protected under international copyright, trademark, and intellectual property laws. Unauthorized duplication, distribution, or modifications are strictly prohibited.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-black font-heading text-primary uppercase tracking-wide">
                5. Disclaimer of Warranties
              </h2>
              <p>
                Our services are provided on an "as-is" and "as-available" basis. While we strive to maintain 24/7 service capability and exceptional precision in logistics and port operations, we make no representations or warranties of any kind, express or implied, regarding the timeliness, completeness, or absolute error-free execution of global port and transport logistics.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-black font-heading text-primary uppercase tracking-wide">
                6. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by applicable law, Delmar Services shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages—including but not limited to loss of profits, vessel delays, operational downtime, or cargo disruptions—arising out of or related to the use or inability to use our services.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-black font-heading text-primary uppercase tracking-wide">
                7. Governing Law & Jurisdiction
              </h2>
              <p>
                These Terms of Use and any disputes arising from them shall be governed by and construed in accordance with the laws of the **Sultanate of Oman**, without regard to its conflict of law principles. Any legal action or proceeding arising under these Terms shall be brought exclusively in the courts of Muscat, Oman.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-black font-heading text-primary uppercase tracking-wide">
                8. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time without prior notice. Any changes will become effective immediately upon posting. Your continued use of our services following any updates signifies your acceptance of the revised Terms.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-secondary/10">
              <h2 className="text-xl font-black font-heading text-primary uppercase tracking-wide">
                9. Contact Information
              </h2>
              <p>
                For questions or clarifications regarding these Terms of Use, please reach out to us:
              </p>
              <div className="p-6 bg-secondary/5 border border-secondary/10 space-y-2 mt-4 text-sm font-medium">
                <p><strong style={{ color: "var(--primary)" }}>Office Address:</strong> Muscat, Oman</p>
                <p><strong style={{ color: "var(--primary)" }}>Phone Support:</strong> +968 7738 8021</p>
                <p><strong style={{ color: "var(--primary)" }}>Official Email:</strong> info@delmarservice.com</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
