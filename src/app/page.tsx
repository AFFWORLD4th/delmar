import Link from "next/link";
import { ArrowRight, Anchor, Package, Truck, Briefcase, Settings } from "lucide-react";

export default function Home() {
  const services = [
    { title: "Maritime Support", icon: Anchor, desc: "Comprehensive support for global maritime operations." },
    { title: "Supply & Coordination", icon: Package, desc: "Efficient sourcing and seamless coordination." },
    { title: "Logistics Solutions", icon: Truck, desc: "End-to-end logistics tailored to your needs." },
    { title: "Business Support Services", icon: Briefcase, desc: "Administrative and operational backbone." },
    { title: "Operational Assistance", icon: Settings, desc: "Ensuring smooth daily operations worldwide." },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* We can use a generic modern background here if we had an image, for now a clean gradient/pattern or just solid dark */}
        <div 
          className="absolute inset-0 z-0 opacity-50 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/home_hero.png')" }} 
        />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 leading-tight">
              Global Excellence in Maritime & Business Solutions
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl font-light">
              Delivering flexible, reliable, and customized support across international markets for seamless operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center bg-background text-primary px-8 py-4 rounded-sm font-medium hover:bg-secondary hover:text-primary-foreground transition-all duration-300"
              >
                Our Services
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-sm font-medium hover:bg-primary-foreground/10 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">About Delmar</h2>
              <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-primary">
                Your Trusted Partner in Global Operations
              </h3>
              <p className="text-secondary/80 text-lg mb-8 leading-relaxed">
                Delmar Services provides flexible and reliable support solutions across maritime operations, logistics, sourcing, and business coordination. We are committed to delivering efficient communication, operational support, and customized service solutions across international markets.
              </p>
              <Link 
                href="/about" 
                className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors group"
              >
                Discover Our Story
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
            <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/home_about.png')" }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-secondary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold tracking-widest uppercase text-primary-foreground/60 mb-4">Our Expertise</h2>
              <h3 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground">
                Comprehensive Support Solutions
              </h3>
            </div>
            <Link 
              href="/services" 
              className="mt-6 md:mt-0 inline-flex items-center text-primary-foreground font-bold hover:text-primary-foreground/70 transition-colors group"
            >
              View All Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="group bg-primary p-10 rounded-sm border border-primary-foreground/5 hover:border-primary-foreground/20 transition-all duration-300"
              >
                <service.icon className="text-background mb-6" size={40} strokeWidth={1.5} />
                <h4 className="text-xl font-bold font-heading mb-4 text-primary-foreground">{service.title}</h4>
                <p className="text-primary-foreground/60 font-light leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-primary">
            Ready to Streamline Your Operations?
          </h2>
          <p className="text-secondary/80 text-xl mb-10">
            Connect with our team of experts to discuss how Delmar Services can support your international business goals.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-10 py-5 rounded-sm font-bold text-lg hover:bg-secondary transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
