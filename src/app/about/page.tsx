import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us | Delmar Services",
  description: "Learn more about Delmar Services and our commitment to providing reliable support solutions globally.",
};

export default function About() {
  const values = [
    {
      number: "01",
      title: "Efficient Communication",
      desc: "Clear, fast, and reliable communication across every channel and time zone.",
    },
    {
      number: "02",
      title: "Operational Support",
      desc: "Hands-on assistance that keeps your operations running at peak performance.",
    },
    {
      number: "03",
      title: "Customised Solutions",
      desc: "No one-size-fits-all. Every solution is tailored precisely to your needs.",
    },
    {
      number: "04",
      title: "International Expertise",
      desc: "Deep knowledge of global markets, regulations, and maritime standards.",
    },
    {
      number: "05",
      title: "Reliability & Trust",
      desc: "A track record of dependability built on consistent, high-quality delivery.",
    },
    {
      number: "06",
      title: "Flexible Approach",
      desc: "Adaptive strategies that evolve with your business and the global landscape.",
    },
  ];

  const differentiators = [
    {
      number: "01",
      title: "Global Reach",
      desc: "We operate across international markets with established networks in maritime hubs worldwide. Our global presence enables rapid, informed response wherever you need us.",
    },
    {
      number: "02",
      title: "24/7 Operations",
      desc: "Maritime and logistics never sleep — neither do we. Our round-the-clock support team is always ready to handle urgent requests and operational challenges.",
    },
    {
      number: "03",
      title: "Proven Expertise",
      desc: "Our team brings decades of combined experience across maritime, logistics, and international business — delivering solutions that work in the real world.",
    },
    {
      number: "04",
      title: "Client-First Culture",
      desc: "Every decision we make is guided by what delivers the best outcome for our clients. Your success is the only metric that matters to us.",
    },
  ];

  return (
    <div className="flex flex-col w-full">

      {/* ─── HERO ─── */}
      <section className="relative h-[65vh] min-h-[500px] flex items-end pb-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[#071D3D]/80 z-10" />
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about_hero.png')" }}
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 z-10 bg-gradient-to-t from-background to-transparent" />

        <div className="container mx-auto px-6 lg:px-16 relative z-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground/60 mb-6 font-medium">
            <Link href="/" className="hover:text-cyan transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">About Us</span>
          </div>
          <div className="section-label">Who We Are</div>
          <h1
            className="text-5xl md:text-7xl font-black font-heading leading-none"
            style={{ letterSpacing: "-0.03em" }}
          >
            About
            <br />
            <span className="text-gradient-gold">Delmar</span>
          </h1>
        </div>
      </section>

      {/* ─── STORY ─── */}
      <section className="py-28 lg:py-36 bg-background relative overflow-hidden">
        {/* Decorative background blur spheres */}
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-cyan/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Copy */}
            <div>
              <div className="section-label">Our Story</div>
              <h2
                className="text-4xl md:text-5xl font-black font-heading mb-8 leading-tight text-primary"
                style={{ letterSpacing: "-0.02em" }}
              >
                Flexible, Reliable Support
                <br />
                <span className="text-gradient-gold">Built for the World</span>
              </h2>
              <div
                className="w-16 h-[3px] mb-8 bg-gradient-to-r from-gold to-gold-light rounded-full"
              />
              <div className="space-y-5 text-foreground/80 text-base leading-relaxed font-light">
                <p>
                  Delmar Services was founded on a simple conviction: that businesses operating in the maritime and international space deserve a partner who is as committed to their success as they are. From day one, we have built every process, every team, and every system with this in mind.
                </p>
                <p>
                  We provide flexible and reliable support solutions across maritime operations, logistics, sourcing, and business coordination — committed to delivering efficient communication, operational support, and customized solutions across international markets.
                </p>
                <p>
                  Our approach is designed to adapt to the ever-changing global landscape, ensuring our clients receive top-tier assistance regardless of complexity or geography.
                </p>
              </div>
              <Link
                href="/contact"
                id="about-cta-contact"
                className="inline-flex items-center mt-10 text-[0.72rem] font-black uppercase tracking-[0.18em] group transition-all duration-300 text-gold hover:text-cyan"
              >
                Work With Us
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="h-[580px] overflow-hidden rounded-2xl shadow-2xl border border-secondary/10">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105 h-[580px]"
                  style={{ backgroundImage: "url('/images/about_story.png')" }}
                />
              </div>
              {/* Corner accent */}
              <div
                className="absolute pointer-events-none"
                style={{
                  bottom: "-12px",
                  right: "-12px",
                  width: "80px",
                  height: "80px",
                  borderBottom: `2px solid var(--cyan)`,
                  borderRight: `2px solid var(--cyan)`,
                  opacity: 0.6,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY DELMAR — NUMBERED DIFFERENTIATORS ─── */}
      <section className="relative py-28 lg:py-36 bg-ocean-depths text-primary-foreground overflow-hidden">
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Left sticky heading */}
            <div className="lg:col-span-2">
              <div className="section-label">Why Delmar</div>
              <h2
                className="text-4xl md:text-5xl font-black font-heading leading-tight mb-6"
                style={{ letterSpacing: "-0.02em" }}
              >
                What Sets Us
                <br />
                <span className="text-gradient-gold">Apart</span>
              </h2>
              <div
                className="w-16 h-[3px] bg-gradient-to-r from-gold to-gold-light rounded-full"
              />
            </div>

            {/* Right — differentiators */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {differentiators.map((item) => (
                <div
                  key={item.number}
                  className="p-8 rounded-2xl glass-panel-dark border border-white/10 glow-cyan-hover group"
                >
                  <div className="service-number mb-4 text-cyan">{item.number}</div>
                  <div
                    className="w-8 h-[1px] mb-5 bg-gradient-to-r from-gold to-gold-light group-hover:w-16 transition-all duration-500 rounded-full"
                  />
                  <h3 className="text-xl font-black font-heading text-primary-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-primary-foreground/75 text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="relative py-28 lg:py-36 bg-background overflow-hidden">
        {/* Decorative background blur spheres */}
        <div className="absolute top-1/4 -right-32 w-80 h-80 bg-cyan/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="section-label justify-center" style={{ justifyContent: "center" }}>Our Commitment</div>
            <h2
              className="text-4xl md:text-5xl font-black font-heading leading-tight text-primary"
              style={{ letterSpacing: "-0.02em" }}
            >
              Delivering Excellence,
              <br />
              <span className="text-gradient-gold">Globally</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.number}
                id={`value-${value.number}`}
                className="p-8 glass-panel border border-cyan/15 rounded-2xl hover-lift glow-hover group cursor-default shadow-sm"
              >
                <div
                  className="text-[0.65rem] font-bold uppercase tracking-[0.2em] mb-4 text-gold"
                >
                  {value.number}
                </div>
                <div
                  className="w-8 h-[1px] mb-5 bg-gradient-to-r from-gold to-gold-light group-hover:w-16 transition-all duration-500 rounded-full"
                />
                <h3 className="text-lg font-black font-heading text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-foreground/80 text-sm leading-relaxed font-light">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA STRIP ─── */}
      <section
        className="py-20 text-primary-foreground relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)" }}
      >
        <div className="absolute inset-0 bg-[#0A2240]/5 z-0" />
        <div className="container mx-auto px-6 lg:px-16 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2
            className="text-2xl md:text-4xl font-black font-heading text-primary leading-tight max-w-xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            Ready to work with a partner you can trust?
          </h2>
          <Link
            href="/contact"
            id="about-bottom-cta"
            className="shrink-0 inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 font-black text-[0.72rem] uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-px hover:shadow-xl rounded-sm glow-cyan-hover"
          >
            Get in Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
