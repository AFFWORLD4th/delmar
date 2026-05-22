import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceCatalog } from "@/lib/services";

export const metadata = {
  title: "Our Services | Delmar Services",
  description: "Explore our comprehensive range of services including Maritime Support, Logistics, and Business Coordination.",
};

export default function Services() {
  return (
    <div className="flex flex-col w-full">

      {/* ─── HERO ─── */}
      <section className="relative h-[65vh] min-h-[500px] flex items-end pb-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[#0A1B2E]/65 z-10" />
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/services_hero.png')" }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-40 z-10 bg-gradient-to-t from-[#0A1B2E]/75 to-transparent" />

        <div className="container mx-auto px-6 lg:px-16 relative z-20">
          <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground/40 mb-6 font-medium">
            <Link href="/" className="hover:text-primary-foreground/70 transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: "var(--gold)" }}>Services</span>
          </div>
          <div className="section-label">What We Offer</div>
          <h1
            className="text-5xl md:text-7xl font-black font-heading leading-none"
            style={{ letterSpacing: "-0.03em" }}
          >
            Our
            <br />
            <span style={{ color: "var(--gold)" }}>Services</span>
          </h1>
        </div>
      </section>

      {/* ─── INTRO STRIP ─── */}
      <section
        className="py-12 border-b border-primary/10"
        style={{ background: "var(--gold)" }}
      >
        <div className="container mx-auto px-6 lg:px-16">
          <p className="text-primary font-medium text-center text-base md:text-lg max-w-3xl mx-auto leading-relaxed" style={{ fontWeight: 600 }}>
            Tailored solutions designed to optimize your global operations — from maritime support to international business coordination.
          </p>
        </div>
      </section>

      {/* ─── SERVICE ITEMS ─── */}
      <section className="bg-background">
        {serviceCatalog.map((service, index) => {
          const numberStr = String(index + 1).padStart(2, "0");
          const isOdd = index % 2 !== 0;
          const ServiceIcon = service.icon;

          return (
            <div
              key={service.slug}
              id={service.slug}
              className={`py-24 lg:py-32 ${isOdd ? "bg-primary text-primary-foreground" : "bg-background"}`}
            >
              <div className="container mx-auto px-6 lg:px-16">
                <div
                  className={`flex flex-col lg:flex-row gap-16 items-center ${
                    isOdd ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className="w-full lg:w-1/2">
                    <div className="service-number mb-4">{numberStr}</div>
                    <div
                      className="w-10 h-[2px] mb-7"
                      style={{ background: "var(--gold)" }}
                    />

                    {/* Icon + Title */}
                    <div className="flex items-start gap-5 mb-6">
                      <div
                        className="p-3 shrink-0"
                        style={{ background: "rgba(201,169,110,0.12)", color: "var(--gold)" }}
                      >
                        <ServiceIcon size={32} strokeWidth={1.5} />
                      </div>
                      <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-black font-heading leading-tight"
                        style={{ letterSpacing: "-0.02em" }}
                      >
                        {service.title}
                      </h2>
                    </div>

                    <p
                      className={`text-lg leading-relaxed mb-10 ${
                        isOdd ? "text-primary-foreground/60" : "text-secondary/65"
                      }`}
                    >
                      {service.summary}
                    </p>

                    {/* Features/Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.highlights.map((highlight, i) => (
                        <div
                          key={i}
                          className={`flex items-center gap-3 text-sm font-medium ${
                            isOdd ? "text-primary-foreground/80" : "text-secondary"
                          }`}
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: "var(--gold)" }}
                          />
                          {highlight}
                        </div>
                      ))}
                    </div>

                    {/* Learn More link */}
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 font-bold text-[0.68rem] uppercase tracking-[0.18em] transition-all duration-350 border hover:bg-gold hover:text-[#0A1B2E]"
                      style={{
                        borderColor: "var(--gold)",
                        color: isOdd ? "#FFF" : "var(--primary)",
                      }}
                    >
                      Learn More Details
                      <ArrowRight size={14} />
                    </Link>
                  </div>

                  {/* Image */}
                  <div className="w-full lg:w-1/2 relative">
                    <div className="h-[480px] overflow-hidden group">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                        style={{ backgroundImage: `url('${service.image}')` }}
                      />
                    </div>
                    {/* Corner accent */}
                    <div
                      className="absolute pointer-events-none"
                      style={{
                        bottom: isOdd ? "auto" : "-12px",
                        top: isOdd ? "-12px" : "auto",
                        right: isOdd ? "auto" : "-12px",
                        left: isOdd ? "-12px" : "auto",
                        width: "80px",
                        height: "80px",
                        borderTop: isOdd ? `2px solid var(--gold)` : "none",
                        borderLeft: isOdd ? `2px solid var(--gold)` : "none",
                        borderBottom: !isOdd ? `2px solid var(--gold)` : "none",
                        borderRight: !isOdd ? `2px solid var(--gold)` : "none",
                        opacity: 0.4,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-28 bg-primary text-primary-foreground overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/images/services_hero.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1B2E]/95 to-[#0A1B2E]/70" />
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-2xl">
            <div className="section-label">Get Started</div>
            <h2
              className="text-4xl md:text-5xl font-black font-heading leading-tight mb-6"
              style={{ letterSpacing: "-0.02em" }}
            >
              Need a Tailored
              <br />
              <span style={{ color: "var(--gold)" }}>Solution?</span>
            </h2>
            <p className="text-primary-foreground/55 text-lg mb-10 max-w-md leading-relaxed">
              Every client is different. Contact us to discuss a service package built specifically for your requirements.
            </p>
            <Link
              href="/contact"
              id="services-bottom-cta"
              className="inline-flex items-center gap-3 px-10 py-4 font-black text-[0.72rem] uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-px"
              style={{ background: "var(--gold)", color: "var(--primary)" }}
            >
              Discuss Your Needs
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
