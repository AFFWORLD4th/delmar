import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About Us | Delmar Services",
  description: "Learn more about Delmar Services and our commitment to providing reliable support solutions globally.",
};

export default function About() {
  const values = [
    "Efficient Communication",
    "Operational Support",
    "Customized Service Solutions",
    "International Market Expertise",
    "Reliability & Trust",
    "Flexible Approaches"
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center bg-secondary text-primary-foreground">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }} 
        />
        <div className="container mx-auto px-6 lg:px-12 relative z-20">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">About Us</h1>
          <p className="text-lg md:text-xl max-w-2xl text-primary-foreground/80">
            Dedicated to excellence in global maritime and business support.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">Our Story</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">
                Flexible and Reliable Support Solutions
              </h3>
              <div className="space-y-6 text-secondary/80 text-lg leading-relaxed">
                <p>
                  Delmar Services provides flexible and reliable support solutions across maritime operations, logistics, sourcing, and business coordination. 
                </p>
                <p>
                  We are committed to delivering efficient communication, operational support, and customized service solutions across international markets. Our approach is designed to adapt to the ever-changing global landscape, ensuring our clients receive top-tier assistance regardless of complexity.
                </p>
                <p>
                  With a deep understanding of international business dynamics, we bridge gaps and facilitate seamless operations, enabling your organization to focus on its core competencies while we handle the intricacies of coordination and logistics.
                </p>
              </div>
            </div>
            <div className="relative h-[600px] rounded-sm overflow-hidden shadow-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop')" }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values / Commitments */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest uppercase text-primary-foreground/60 mb-4">Our Commitment</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold">
              Delivering Excellence Globally
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="flex items-center space-x-4 bg-secondary/30 p-6 rounded-sm border border-primary-foreground/10">
                <CheckCircle2 className="text-background shrink-0" size={28} />
                <span className="font-heading font-medium text-lg">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
