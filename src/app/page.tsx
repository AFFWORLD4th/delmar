import Link from "next/link";
import { ArrowRight, Anchor, Package, Truck, Briefcase, Settings } from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Maritime Support",
      icon: Anchor,
      image: "/images/service_maritime.png",
      desc: "Comprehensive support for global maritime operations, ensuring safety, compliance, and unmatched efficiency across all vessel types and international routes.",
    },
    {
      title: "Supply & Coordination",
      icon: Package,
      image: "/images/service_supply.png",
      desc: "Efficient sourcing and seamless coordination of provisions and spare parts, designed to keep your operations running without interruption.",
    },
    {
      title: "Logistics Solutions",
      icon: Truck,
      image: "/images/service_logistics.png",
      desc: "End-to-end logistics tailored to your needs. We manage complex supply chains to ensure your assets reach their destination safely.",
    },
    {
      title: "Business Support",
      icon: Briefcase,
      image: "/images/service_business.png",
      desc: "The administrative and operational backbone for your international ventures, providing the infrastructure you need to succeed globally.",
    },
    {
      title: "Operational Assistance",
      icon: Settings,
      image: "/images/service_ops.png",
      desc: "24/7 global operations command dedicated to resolving issues, optimizing daily performance, and providing continuous on-site support.",
    },
  ];

  const stats = [
    { number: "5+", label: "Years of Excellence" },
    { number: "30+", label: "Countries Served" },
    { number: "500+", label: "Operations Delivered" },
    { number: "24/7", label: "Global Support" },
  ];

  return (
    <div className="flex flex-col w-full">

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center bg-primary text-primary-foreground overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/home_hero.png')" }}
        />
        {/* Dark gradient overlays */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

        {/* Content */}
        <div className="container mx-auto px-6 lg:px-16 relative z-20 pt-32 pb-24">
          <div className="max-w-3xl">
            {/* Section label */}
            <div className="section-label animate-fade-in" style={{ color: "var(--gold)" }}>
              Global Maritime & Business Solutions
            </div>

            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black font-heading mb-8 leading-[1.0] tracking-tight animate-fade-in-up delay-100"
              style={{ letterSpacing: "-0.025em" }}
            >
              Where
              <br />
              <span style={{ color: "var(--gold)" }}>Excellence</span>
              <br />
              Meets the Sea.
            </h1>

            <p className="text-base md:text-lg text-primary-foreground/65 mb-12 max-w-xl font-light leading-relaxed animate-fade-in-up delay-200">
              Delivering flexible, reliable, and customized support across international markets — from maritime operations to global business coordination.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <Link
                href="/services"
                id="hero-services-cta"
                className="inline-flex items-center justify-center px-10 py-4 font-bold text-[0.72rem] uppercase tracking-[0.18em] transition-all duration-300 group hover:-translate-y-px"
                style={{ background: "var(--gold)", color: "#111" }}
              >
                Our Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
              <Link
                href="/contact"
                id="hero-contact-cta"
                className="inline-flex items-center justify-center border border-primary-foreground/25 text-primary-foreground px-10 py-4 font-bold text-[0.72rem] uppercase tracking-[0.18em] hover:bg-primary-foreground/10 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 z-20 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="bg-primary text-primary-foreground py-0">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-b border-primary-foreground/10">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`py-10 px-8 text-center ${
                  i < stats.length - 1 ? "border-r border-primary-foreground/10" : ""
                } ${i >= 2 ? "border-t border-primary-foreground/10 lg:border-t-0" : ""}`}
              >
                <div
                  className="text-4xl md:text-5xl font-black font-heading mb-2"
                  style={{ color: "var(--gold)" }}
                >
                  {stat.number}
                </div>
                <div className="text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground/50 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT INTRO ─── */}
      <section className="py-28 lg:py-36 bg-background overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left copy */}
            <div>
              <div className="section-label">About Delmar</div>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-black font-heading mb-8 leading-tight"
                style={{ letterSpacing: "-0.02em" }}
              >
                Your Trusted Partner in
                <br />
                <span style={{ color: "var(--gold)" }}>Global Operations</span>
              </h2>
              <div
                className="w-12 h-[2px] mb-8"
                style={{ background: "var(--gold)" }}
              />
              <p className="text-secondary/70 text-lg mb-6 leading-relaxed">
                Delmar Services provides flexible and reliable support solutions across maritime operations, logistics, sourcing, and business coordination.
              </p>
              <p className="text-secondary/60 text-base mb-10 leading-relaxed">
                We are committed to delivering efficient communication, operational support, and customized service solutions across international markets — built for complexity, designed for precision.
              </p>
              <Link
                href="/about"
                id="home-about-link"
                className="inline-flex items-center text-[0.72rem] font-black uppercase tracking-[0.18em] group transition-colors"
                style={{ color: "var(--gold)" }}
              >
                Discover Our Story
                <ArrowRight
                  className="ml-3 group-hover:translate-x-1.5 transition-transform"
                  size={16}
                />
              </Link>
            </div>

            {/* Right image */}
            <div className="relative">
              <div className="relative h-[560px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
                  style={{ backgroundImage: "url('/images/home_about.png')" }}
                />
                {/* Decorative border */}
                <div
                  className="absolute -bottom-4 -right-4 w-full h-full border-2 pointer-events-none"
                  style={{ borderColor: "var(--gold)", opacity: 0.25 }}
                />
              </div>
              {/* Floating accent badge */}
              <div
                className="absolute -left-6 bottom-16 bg-primary text-primary-foreground px-6 py-4 shadow-2xl"
              >
                <div
                  className="text-2xl font-black font-heading"
                  style={{ color: "var(--gold)" }}
                >
                  Dubai, UAE
                </div>
                <div className="text-[0.6rem] uppercase tracking-[0.2em] text-primary-foreground/50 mt-1">
                  Globally Connected
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-28 lg:py-36 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16">
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="section-label">Our Expertise</div>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-black font-heading leading-tight"
                style={{ letterSpacing: "-0.02em" }}
              >
                Comprehensive
                <br />
                Support Solutions
              </h2>
            </div>
            <Link
              href="/services"
              id="home-all-services-link"
              className="inline-flex items-center text-[0.72rem] font-black uppercase tracking-[0.18em] group transition-opacity hover:opacity-70 shrink-0"
              style={{ color: "var(--gold)" }}
            >
              View All Services
              <ArrowRight
                className="ml-3 group-hover:translate-x-1 transition-transform"
                size={16}
              />
            </Link>
          </div>

          {/* Featured + grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {/* Featured large card */}
            <Link
              href="/services"
              id={`service-featured-${services[0].title.toLowerCase().replace(/\s+/g, '-')}`}
              className="group relative lg:col-span-3 h-[480px] overflow-hidden block"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url('${services[0].image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
                <div className="service-number mb-3">01</div>
                <div
                  className="w-8 h-[1px] mb-4"
                  style={{ background: "var(--gold)" }}
                />
                <h3 className="text-3xl md:text-4xl font-black font-heading text-primary-foreground mb-3">
                  {services[0].title}
                </h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6 max-w-md">
                  {services[0].desc}
                </p>
                <div
                  className="inline-flex items-center text-[0.68rem] font-bold uppercase tracking-[0.18em] opacity-0 group-hover:opacity-100 transition-all duration-400 -translate-y-2 group-hover:translate-y-0"
                  style={{ color: "var(--gold)" }}
                >
                  Explore <ArrowRight size={14} className="ml-2" />
                </div>
              </div>
            </Link>

            {/* Small cards column */}
            <div className="lg:col-span-2 grid grid-rows-2 gap-4">
              {services.slice(1, 3).map((service, idx) => (
                <Link
                  href="/services"
                  key={idx}
                  id={`service-card-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group relative h-[232px] overflow-hidden block"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                    <div className="service-number mb-2">0{idx + 2}</div>
                    <h3 className="text-xl font-black font-heading text-primary-foreground">
                      {service.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom two cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {services.slice(3).map((service, idx) => (
              <Link
                href="/services"
                key={idx}
                id={`service-bottom-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="group relative h-[280px] overflow-hidden block"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                  <div className="service-number mb-2">0{idx + 4}</div>
                  <div
                    className="w-6 h-[1px] mb-3"
                    style={{ background: "var(--gold)", opacity: 0.6 }}
                  />
                  <h3 className="text-2xl font-black font-heading text-primary-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-primary-foreground/55 text-sm leading-relaxed max-w-sm hidden md:block">
                    {service.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUOTE / DIFFERENTIATOR STRIP ─── */}
      <section className="py-20 bg-background border-y border-secondary/10">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2">
              <p
                className="text-3xl md:text-4xl font-black font-heading leading-tight"
                style={{ letterSpacing: "-0.02em" }}
              >
                "Operational precision, delivered across every{" "}
                <span style={{ color: "var(--gold)" }}>ocean and market</span>."
              </p>
            </div>
            <div className="flex flex-col gap-6 text-sm text-secondary/70">
              <div className="flex items-center gap-4">
                <div
                  className="w-8 h-[1px] shrink-0"
                  style={{ background: "var(--gold)" }}
                />
                <span>International Reach</span>
              </div>
              <div className="flex items-center gap-4">
                <div
                  className="w-8 h-[1px] shrink-0"
                  style={{ background: "var(--gold)" }}
                />
                <span>Operational Excellence</span>
              </div>
              <div className="flex items-center gap-4">
                <div
                  className="w-8 h-[1px] shrink-0"
                  style={{ background: "var(--gold)" }}
                />
                <span>Customised for Every Client</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-28 lg:py-36 bg-primary text-primary-foreground overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('/images/home_hero.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/50" />

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-2xl">
            <div className="section-label">Start Today</div>
            <h2
              className="text-4xl md:text-6xl font-black font-heading leading-tight mb-8"
              style={{ letterSpacing: "-0.02em" }}
            >
              Ready to Streamline
              <br />
              Your Operations?
            </h2>
            <p className="text-primary-foreground/60 text-lg mb-12 leading-relaxed max-w-lg">
              Connect with our team of experts to discuss how Delmar Services can support your international business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                id="cta-get-in-touch"
                className="inline-flex items-center justify-center px-10 py-4 font-black text-[0.72rem] uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-px"
                style={{ background: "var(--gold)", color: "#111" }}
              >
                Get in Touch
                <ArrowRight className="ml-2" size={16} />
              </Link>
              <Link
                href="/services"
                id="cta-our-services"
                className="inline-flex items-center justify-center border border-primary-foreground/20 text-primary-foreground px-10 py-4 font-bold text-[0.72rem] uppercase tracking-[0.18em] hover:bg-primary-foreground/10 transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
