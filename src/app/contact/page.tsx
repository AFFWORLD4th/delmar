import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | Delmar Services",
  description: "Get in touch with Delmar Services for reliable maritime and business support solutions.",
};

export default function Contact() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80">
            Reach out to our team of experts to discuss how we can support your global operations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-heading font-bold mb-8 text-primary">
                Get in Touch
              </h2>
              <p className="text-secondary/80 mb-12 text-lg">
                Whether you have a question about our services, pricing, or need operational assistance, our team is ready to answer all your questions.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-secondary/10 p-4 rounded-sm mr-6">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Office Location</h4>
                    <p className="text-secondary/70">
                      Business Bay, Dubai<br />
                      United Arab Emirates
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary/10 p-4 rounded-sm mr-6">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Email Address</h4>
                    <p className="text-secondary/70">
                      info@delmarservice.com<br />
                      support@delmarservice.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-secondary/10 p-4 rounded-sm mr-6">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Phone Number</h4>
                    <p className="text-secondary/70">
                      +971 50 123 4567<br />
                      Available 24/7 for urgent inquiries
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-secondary/10 p-4 rounded-sm mr-6">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Working Hours</h4>
                    <p className="text-secondary/70">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      24/7 Support for Active Operations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 rounded-sm shadow-xl border border-secondary/5">
              <h3 className="text-2xl font-heading font-bold mb-6 text-primary">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-secondary">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full bg-background border border-secondary/20 p-3 focus:outline-none focus:border-primary transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-secondary">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full bg-background border border-secondary/20 p-3 focus:outline-none focus:border-primary transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-secondary">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-background border border-secondary/20 p-3 focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-secondary">Service of Interest</label>
                  <select 
                    id="service" 
                    className="w-full bg-background border border-secondary/20 p-3 focus:outline-none focus:border-primary transition-colors text-secondary"
                  >
                    <option value="">Select a service</option>
                    <option value="maritime">Maritime Support</option>
                    <option value="supply">Supply & Coordination</option>
                    <option value="logistics">Logistics Solutions</option>
                    <option value="business">Business Support Services</option>
                    <option value="operations">Operational Assistance</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-secondary">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full bg-background border border-secondary/20 p-3 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="button" 
                  className="w-full bg-primary text-primary-foreground font-bold py-4 hover:bg-secondary transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
