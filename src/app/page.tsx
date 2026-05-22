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
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-65"
          src="/videos/hero-bg.mp4"
        />

        {/* Midnight navy gradient overlays for superior text legibility */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#071D3D]/90 via-[#0B2545]/65 to-[#0077B6]/20" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0A2240]/80 via-transparent to-[#071D3D]/40" />

        {/* Content */}
        <div className="container mx-auto px-6 lg:px-16 relative z-20 pt-32 pb-24">
          <div className="max-w-3xl">
            {/* Section label */}
            <div className="section-label animate-fade-in text-gold">
              Global Maritime & Business Solutions
            </div>

            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black font-heading mb-8 leading-[1.0] tracking-tight animate-fade-in-up delay-100"
              style={{ letterSpacing: "-0.025em" }}
            >
              Where
              <br />
              <span className="text-gradient-gold">Excellence</span>
              <br />
              Meets the Sea.
            </h1>

            <p className="text-base md:text-lg text-primary-foreground/75 mb-12 max-w-xl font-light leading-relaxed animate-fade-in-up delay-200">
              Delivering flexible, reliable, and customized support solutions across international markets — from maritime operations to global business coordination.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <Link
                href="/services"
                id="hero-services-cta"
                className="inline-flex items-center justify-center px-10 py-4 font-bold text-[0.72rem] uppercase tracking-[0.18em] transition-all duration-300 group hover:-translate-y-px glow-hover rounded-sm"
                style={{ background: "var(--gold)", color: "var(--primary)" }}
              >
                Our Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
              <Link
                href="/contact"
                id="hero-contact-cta"
                className="inline-flex items-center justify-center border border-white/30 text-primary-foreground px-10 py-4 font-bold text-[0.72rem] uppercase tracking-[0.18em] transition-all duration-300 glow-cyan-hover rounded-sm hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 z-20 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ─── STATS BAR (Floating Glassmorphic Panel) ─── */}
      <section className="relative z-30 -mt-16 bg-transparent py-0">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="glass-panel-dark grid grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden border border-cyan/20 shadow-2xl">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`py-12 px-8 text-center transition-all duration-300 hover:bg-secondary/15 hover:border-cyan/30 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] group ${
                  i < stats.length - 1 ? "border-r border-white/5" : ""
                } ${i >= 2 ? "border-t border-white/5 lg:border-t-0" : ""}`}
              >
                <div
                  className="text-4xl md:text-5xl font-black font-heading mb-2 text-gradient-gold"
                >
                  {stat.number}
                </div>
                <div className="text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground/75 font-medium group-hover:text-cyan transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT INTRO ─── */}
      <section className="relative py-28 lg:py-36 bg-background overflow-hidden">
        {/* Floating gradient blur blobs for premium depth */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left copy */}
            <div>
              <div className="section-label">About Delmar</div>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-black font-heading mb-8 leading-tight text-primary"
                style={{ letterSpacing: "-0.02em" }}
              >
                Your Trusted Partner in
                <br />
                <span className="text-gradient-gold">Global Operations</span>
              </h2>
              <div className="w-16 h-[3px] mb-8 bg-gradient-to-r from-gold to-gold-light rounded-full" />
              
              <p className="text-foreground/80 text-lg mb-6 leading-relaxed">
                Delmar Services provides flexible and reliable support solutions across maritime operations, logistics, sourcing, and business coordination.
              </p>
              <p className="text-foreground/70 text-base mb-10 leading-relaxed">
                We are committed to delivering efficient communication, operational support, and customized service solutions across international markets — built for complexity, designed for precision.
              </p>
              <Link
                href="/about"
                id="home-about-link"
                className="inline-flex items-center text-[0.72rem] font-black uppercase tracking-[0.18em] group transition-colors duration-300 hover:text-gold-light"
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
              <div className="relative h-[560px] overflow-hidden rounded-lg shadow-2xl border border-secondary/10">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
                  style={{ backgroundImage: "url('/images/home_about.png')" }}
                />
                {/* Decorative glowing border */}
                <div
                  className="absolute -bottom-4 -right-4 w-full h-full border-2 pointer-events-none rounded-lg transition-colors duration-500 group-hover:border-cyan"
                  style={{ borderColor: "var(--gold)", opacity: 0.3 }}
                />
              </div>
              {/* Floating accent badge in Glassmorphic Dark */}
              <div
                className="absolute -left-6 bottom-16 glass-panel-dark px-8 py-5 border border-gold/30 shadow-2xl rounded-xl"
              >
                <div
                  className="text-2xl font-black font-heading text-gradient-gold"
                >
                  Muscat, Oman
                </div>
                <div className="text-[0.6rem] uppercase tracking-[0.2em] text-primary-foreground/80 mt-1">
                  Globally Connected
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="relative py-28 lg:py-36 bg-ocean-depths text-primary-foreground overflow-hidden">
        {/* Floating gradient blur blobs behind cards */}
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -left-40 w-[500px] h-[500px] bg-cyan/15 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
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
              className="inline-flex items-center text-[0.72rem] font-black uppercase tracking-[0.18em] group transition-colors duration-300 hover:text-gold-light shrink-0"
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
              className="group relative lg:col-span-3 h-[480px] overflow-hidden block rounded-2xl border border-white/5 transition-all duration-300 glow-cyan-hover"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url('${services[0].image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2240]/95 via-[#0A2240]/50 to-transparent transition-all duration-500 group-hover:via-cyan/20" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
                <div className="service-number mb-3 text-cyan group-hover:text-gold transition-colors duration-300">01</div>
                <div className="w-12 h-[2px] mb-4 bg-gradient-to-r from-gold to-gold-light" />
                <h3 className="text-3xl md:text-4xl font-black font-heading text-primary-foreground mb-3">
                  {services[0].title}
                </h3>
                <p className="text-primary-foreground/75 text-sm leading-relaxed mb-6 max-w-md">
                  {services[0].desc}
                </p>
                <div
                  className="inline-flex items-center text-[0.68rem] font-bold uppercase tracking-[0.18em] opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0"
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
                  className="group relative h-[232px] overflow-hidden block rounded-2xl border border-white/5 transition-all duration-300 glow-cyan-hover"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2240]/95 via-[#0A2240]/50 to-transparent transition-all duration-500 group-hover:via-cyan/20" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                    <div className="service-number mb-2 text-cyan">0{idx + 2}</div>
                    <h3 className="text-xl font-black font-heading text-primary-foreground group-hover:text-gold transition-colors duration-300">
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
                className="group relative h-[280px] overflow-hidden block rounded-2xl border border-white/5 transition-all duration-300 glow-cyan-hover"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2240]/95 via-[#0A2240]/50 to-transparent transition-all duration-500 group-hover:via-cyan/20" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                  <div className="service-number mb-2 text-cyan">0{idx + 4}</div>
                  <div className="w-8 h-[1px] mb-3 bg-gradient-to-r from-gold to-gold-light" />
                  <h3 className="text-2xl font-black font-heading text-primary-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-primary-foreground/75 text-sm leading-relaxed max-w-sm hidden md:block">
                    {service.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUOTE / DIFFERENTIATOR STRIP ─── */}
      <section className="relative py-20 bg-gradient-to-r from-[#071932] via-[#0B2545] to-[#071932] overflow-hidden border-y border-cyan/20">
        <div className="absolute -top-24 left-1/3 w-72 h-72 bg-cyan/5 rounded-full blur-2xl pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2">
              <p
                className="text-3xl md:text-4xl font-black font-heading leading-tight text-white"
                style={{ letterSpacing: "-0.02em" }}
              >
                "Operational precision, delivered across every{" "}
                <span className="text-gradient-gold">ocean and market</span>."
              </p>
            </div>
            <div className="flex flex-col gap-6 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-8 h-[2px] bg-gradient-to-r from-gold to-gold-light transition-all duration-300 group-hover:w-12" />
                <span className="font-semibold group-hover:text-cyan transition-colors duration-300">International Reach</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-8 h-[2px] bg-gradient-to-r from-gold to-gold-light transition-all duration-300 group-hover:w-12" />
                <span className="font-semibold group-hover:text-cyan transition-colors duration-300">Operational Excellence</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-8 h-[2px] bg-gradient-to-r from-gold to-gold-light transition-all duration-300 group-hover:w-12" />
                <span className="font-semibold group-hover:text-cyan transition-colors duration-300">Customised for Every Client</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-28 lg:py-36 bg-ocean-depths text-primary-foreground overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/images/home_hero.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#05142B]/95 via-[#092248]/85 to-transparent" />

        {/* Floating gradient blur blob */}
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-cyan/15 rounded-full blur-3xl pointer-events-none" />

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
            <p className="text-primary-foreground/75 text-lg mb-12 leading-relaxed max-w-lg">
              Connect with our team of experts to discuss how Delmar Services can support your international business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                id="cta-get-in-touch"
                className="inline-flex items-center justify-center px-10 py-4 font-black text-[0.72rem] uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-px glow-hover rounded-sm"
                style={{ background: "var(--gold)", color: "var(--primary)" }}
              >
                Get in Touch
                <ArrowRight className="ml-2" size={16} />
              </Link>
              <Link
                href="/services"
                id="cta-our-services"
                className="inline-flex items-center justify-center border border-white/20 text-primary-foreground px-10 py-4 font-bold text-[0.72rem] uppercase tracking-[0.18em] transition-all duration-300 glow-cyan-hover rounded-sm hover:bg-white/10 hover:border-cyan"
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
