import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ChevronRight, MapPin } from "lucide-react";
import { getServiceBySlug, serviceCatalog } from "@/lib/services";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return serviceCatalog.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return {
      title: "Service Not Found | Delmar Services",
      description: "The requested service could not be found.",
    };
  }
  return {
    title: `${service.title} | Delmar Services`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const ServiceIcon = service.icon;

  return (
    <div className="flex flex-col w-full">
      {/* ─── HERO ─── */}
      <section className="relative h-[65vh] min-h-[500px] flex items-end pb-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[#071D3D]/80 z-10" />
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${service.image || "/images/services_hero.png"}')` }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-40 z-10 bg-gradient-to-t from-background to-transparent" />

        <div className="container mx-auto px-6 lg:px-16 relative z-20">
          <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground/60 mb-6 font-medium">
            <Link href="/" className="hover:text-cyan transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-cyan transition-colors">Services</Link>
            <span>/</span>
            <span className="text-gold">{service.shortTitle}</span>
          </div>
          <div className="section-label">{service.category}</div>
          <h1
            className="text-4xl md:text-6xl font-black font-heading leading-tight"
            style={{ letterSpacing: "-0.03em" }}
          >
            {service.title}
          </h1>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─── */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Decorative background blur spheres */}
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-cyan/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Left/Middle Column — Service Details */}
            <div className="lg:col-span-2 space-y-16">
              
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-black font-heading mb-6 flex items-center gap-4 text-primary">
                  <span className="p-2.5 bg-gold/10 text-gold rounded-lg">
                    <ServiceIcon size={24} />
                  </span>
                  Service Overview
                </h2>
                <p className="text-foreground/80 text-lg leading-relaxed font-light">
                  {service.overview}
                </p>
              </div>

              {/* Highlights & Deliverables */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-cyan/15">
                <div>
                  <h3 className="text-lg font-black font-heading mb-5 text-primary">Key Focus Areas</h3>
                  <ul className="space-y-4">
                    {service.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check size={16} className="text-cyan mt-1 shrink-0" />
                        <span className="text-foreground/85 text-sm leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-black font-heading mb-5 text-primary">Key Deliverables</h3>
                  <ul className="space-y-4">
                    {service.deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check size={16} className="text-cyan mt-1 shrink-0" />
                        <span className="text-foreground/85 text-sm leading-relaxed">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Our Process */}
              <div className="pt-10 border-t border-cyan/15">
                <h3 className="text-xl font-black font-heading mb-8 text-primary">Our Process</h3>
                <div className="relative border-l border-cyan/30 ml-4 pl-8 space-y-10">
                  {service.process.map((step, index) => (
                    <div key={index} className="relative">
                      {/* Timeline dot */}
                      <span className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-background border-2 border-cyan flex items-center justify-center text-[0.62rem] font-bold text-cyan font-heading shadow-md">
                        {index + 1}
                      </span>
                      <p className="text-foreground/85 text-sm leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div className="pt-10 border-t border-cyan/15">
                <h3 className="text-xl font-black font-heading mb-6 text-primary">Strategic Outcomes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.outcomes.map((outcome, index) => (
                    <div key={index} className="p-6 glass-panel rounded-xl border border-cyan/15 hover-lift">
                      <div className="w-2.5 h-2.5 rounded-full bg-gold mb-3" />
                      <p className="text-primary/90 text-sm font-semibold leading-relaxed">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column — Sidebar Info & Contact CTA */}
            <div className="space-y-8">
              
              {/* Coverage Info */}
              <div className="p-8 bg-gradient-to-br from-[#05142B] to-[#0A2240] text-primary-foreground relative overflow-hidden border border-cyan/15 rounded-2xl shadow-xl">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  <ServiceIcon size={120} />
                </div>
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.2em] mb-6 text-gold flex items-center gap-2">
                  <MapPin size={14} className="text-cyan" /> Service Coverage
                </h3>
                <ul className="space-y-4">
                  {service.coverage.map((region, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm text-primary-foreground/80 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan shrink-0" />
                      {region}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact / Sidebar CTA (Frosted Glass) */}
              <div className="p-8 glass-panel border border-cyan/20 flex flex-col justify-between rounded-2xl shadow-lg">
                <div>
                  <h3 className="text-xl font-black font-heading mb-4 text-primary">Need this service?</h3>
                  <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                    Connect with our support team to get a quote and establish operational coordinates in Muscat or internationally.
                  </p>
                </div>
                <Link
                  href={`/contact?service=${service.slug}`}
                  className="inline-flex items-center justify-center gap-3 w-full py-4 bg-primary text-primary-foreground hover:bg-secondary font-black text-[0.72rem] uppercase tracking-[0.18em] transition-all duration-300 glow-cyan-hover rounded-sm"
                >
                  Request a Quote
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Other Services Menu (Frosted Glass) */}
              <div className="p-8 glass-panel border border-cyan/10 rounded-2xl shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-[0.15em] mb-6 text-primary border-b border-cyan/10 pb-3">
                  Other Services
                </h3>
                <ul className="space-y-3">
                  {serviceCatalog
                    .filter((s) => s.slug !== slug)
                    .map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="flex items-center justify-between text-xs font-semibold text-foreground/60 hover:text-cyan uppercase tracking-wider transition-colors duration-300 py-2 group"
                        >
                          <span>{s.shortTitle}</span>
                          <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0 text-cyan" />
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
