import { Anchor, Package, Truck, Briefcase, Settings } from "lucide-react";

export const metadata = {
  title: "Our Services | Delmar Services",
  description: "Explore our comprehensive range of services including Maritime Support, Logistics, and Business Coordination.",
};

export default function Services() {
  const services = [
    { 
      id: "maritime-support",
      title: "Maritime Support", 
      icon: Anchor, 
      desc: "Comprehensive support for global maritime operations, ensuring safety, compliance, and efficiency across all vessel types and routes.",
      features: ["Vessel Management", "Crew Coordination", "Technical Support", "Port Agency Services"]
    },
    { 
      id: "supply-coordination",
      title: "Supply & Coordination", 
      icon: Package, 
      desc: "Efficient sourcing and seamless coordination of provisions, spare parts, and essential supplies for uninterrupted operations.",
      features: ["Global Sourcing", "Inventory Management", "Quality Assurance", "Timely Delivery"]
    },
    { 
      id: "logistics-solutions",
      title: "Logistics Solutions", 
      icon: Truck, 
      desc: "End-to-end logistics tailored to your needs. We manage complex supply chains to ensure your assets reach their destination safely and on time.",
      features: ["Freight Forwarding", "Customs Clearance", "Warehousing", "Last-mile Delivery"]
    },
    { 
      id: "business-support",
      title: "Business Support Services", 
      icon: Briefcase, 
      desc: "Administrative and operational backbone for your international ventures. We provide the infrastructure you need to succeed globally.",
      features: ["Administrative Assistance", "Market Research", "Local Representation", "Compliance Management"]
    },
    { 
      id: "operational-assistance",
      title: "Operational Assistance", 
      icon: Settings, 
      desc: "Ensuring smooth daily operations worldwide. Our team is available 24/7 to resolve issues and optimize your operational efficiency.",
      features: ["24/7 Monitoring", "Crisis Management", "Process Optimization", "On-site Support"]
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8ed7c15908?q=80&w=2070&auto=format&fit=crop')" }} 
        />
        <div className="container mx-auto px-6 lg:px-12 relative z-20 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">Our Services</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80">
            Tailored solutions designed to optimize your global operations and drive business growth.
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-20">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="bg-secondary/5 inline-flex p-4 rounded-sm mb-6">
                    <service.icon className="text-primary" size={48} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">
                    {service.title}
                  </h2>
                  <p className="text-secondary/80 text-lg leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-primary font-medium">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 h-[400px] bg-secondary/10 rounded-sm relative overflow-hidden group">
                   {/* Placeholder for specific service image, using abstract premium textures/colors for now */}
                   <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                     <service.icon className="text-background/20" size={150} strokeWidth={1} />
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
