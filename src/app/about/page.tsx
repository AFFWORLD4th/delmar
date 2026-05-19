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
        <div className="absolute inset-0 bg-black/55 z-10" />
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about_hero.png')" }}
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 z-10 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="container mx-auto px-6 lg:px-16 relative z-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground/40 mb-6 font-medium">
            <Link href="/" className="hover:text-primary-foreground/70 transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: "var(--gold)" }}>About Us</span>
          </div>
          <div className="section-label">Who We Are</div>
          <h1
            className="text-5xl md:text-7xl font-black font-heading leading-none"
            style={{ letterSpacing: "-0.03em" }}
          >
            About
            <br />
            <span style={{ color: "var(--gold)" }}>Delmar</span>
          </h1>
        </div>
      </section>

      {/* ─── STORY ─── */}
      <section className="py-28 lg:py-36 bg-background">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Copy */}
            <div>
              <div className="section-label">Our Story</div>
              <h2
                className="text-4xl md:text-5xl font-black font-heading mb-8 leading-tight"
                style={{ letterSpacing: "-0.02em" }}
              >
                Flexible, Reliable Support
                <br />
                <span style={{ color: "var(--gold)" }}>Built for the World</span>
              </h2>
              <div
                className="w-12 h-[2px] mb-8"
                style={{ background: "var(--gold)" }}
              />
              <div className="space-y-5 text-secondary/70 text-base leading-relaxed">
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
                className="inline-flex items-center mt-10 text-[0.72rem] font-black uppercase tracking-[0.18em] group transition-opacity hover:opacity-70"
                style={{ color: "var(--gold)" }}
              >
                Work With Us
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="h-[580px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105 h-[580px]"
                  style={{ backgroundImage: "url('/images/about_story.png')" }}
                />
              </div>
              {/* Gold border accent */}
              <div
                className="absolute -bottom-4 -left-4 w-full h-full border pointer-events-none"
                style={{ borderColor: "var(--gold)", opacity: 0.2 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY DELMAR — NUMBERED DIFFERENTIATORS ─── */}
      <section className="py-28 lg:py-36 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-16">
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
                <span style={{ color: "var(--gold)" }}>Apart</span>
              </h2>
              <div
                className="w-12 h-[2px]"
                style={{ background: "var(--gold)" }}
              />
            </div>

            {/* Right — differentiators */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {differentiators.map((item) => (
                <div
                  key={item.number}
                  className="border border-primary-foreground/10 p-8 hover-lift group"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <div className="service-number mb-4">{item.number}</div>
                  <div
                    className="w-6 h-[1px] mb-5 group-hover:w-12 transition-all duration-500"
                    style={{ background: "var(--gold)" }}
                  />
                  <h3 className="text-xl font-black font-heading text-primary-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-primary-foreground/50 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-28 lg:py-36 bg-background">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="section-label justify-center" style={{ justifyContent: "center" }}>Our Commitment</div>
            <h2
              className="text-4xl md:text-5xl font-black font-heading leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Delivering Excellence,
              <br />
              <span style={{ color: "var(--gold)" }}>Globally</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.number}
                id={`value-${value.number}`}
                className="border border-secondary/10 p-8 hover-lift group cursor-default"
              >
                <div
                  className="text-[0.65rem] font-bold uppercase tracking-[0.2em] mb-4"
                  style={{ color: "var(--gold)" }}
                >
                  {value.number}
                </div>
                <div
                  className="w-8 h-[1px] mb-5 group-hover:w-14 transition-all duration-500"
                  style={{ background: "var(--gold)" }}
                />
                <h3 className="text-lg font-black font-heading text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-secondary/60 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA STRIP ─── */}
      <section
        className="py-16 text-primary-foreground"
        style={{ background: "var(--gold)" }}
      >
        <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2
            className="text-2xl md:text-3xl font-black font-heading text-primary"
            style={{ letterSpacing: "-0.02em" }}
          >
            Ready to work with a partner you can trust?
          </h2>
          <Link
            href="/contact"
            id="about-bottom-cta"
            className="shrink-0 inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 font-black text-[0.72rem] uppercase tracking-[0.18em] hover:bg-secondary transition-colors"
          >
            Get in Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
