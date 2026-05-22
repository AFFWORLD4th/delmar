"use client";

import Link from "next/link";
import { MapPin, Mail, Clock, ArrowRight, Phone } from "lucide-react";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { serviceCatalog } from "@/lib/services";

function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      setSelectedService(serviceParam);
    }
  }, [searchParams]);

  const contactItems = [
    {
      icon: MapPin,
      title: "Office Location",
      lines: ["Muscat", "Oman"],
    },
    {
      icon: Phone,
      title: "Call / WhatsApp",
      lines: ["+968 7738 8021"],
    },
    {
      icon: Mail,
      title: "Email Us",
      lines: ["info@delmarservice.com", "support@delmarservice.com"],
    },
    {
      icon: Clock,
      title: "Availability",
      lines: ["Mon – Fri: 9:00 AM – 6:00 PM GST", "24/7 Support for Active Operations"],
    },
  ];

  return (
    <div className="flex flex-col w-full">

      {/* ─── HERO ─── */}
      <section className="relative h-[65vh] min-h-[480px] flex items-end pb-20 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[#071D3D]/80 z-10" />
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/contact_hero.png')" }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-40 z-10 bg-gradient-to-t from-[#05142B] to-transparent" />

        <div className="container mx-auto px-6 lg:px-16 relative z-20">
          <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground/60 mb-6 font-medium">
            <Link href="/" className="hover:text-cyan transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">Contact Us</span>
          </div>
          <div className="section-label">Reach Us</div>
          <h1
            className="text-5xl md:text-7xl font-black font-heading leading-none"
            style={{ letterSpacing: "-0.03em" }}
          >
            Get in
            <br />
            <span className="text-gradient-gold">Touch</span>
          </h1>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─── */}
      <section className="bg-ocean-depths text-primary-foreground relative overflow-hidden">
        {/* Floating background blur spheres */}
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-cyan/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/3 -translate-x-1/2 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[700px]">

            {/* ─── LEFT — Contact Info ─── */}
            <div className="lg:col-span-2 py-20 pr-0 lg:pr-16 border-b lg:border-b-0 lg:border-r border-primary-foreground/10 relative z-10">
              <h2 className="text-2xl font-black font-heading mb-3" style={{ letterSpacing: "-0.02em" }}>
                Delmar Services
              </h2>
              <p className="text-primary-foreground/50 text-sm leading-relaxed mb-12 max-w-sm font-light">
                Whether you have a question about our services, pricing, or need urgent operational assistance — our team is ready.
              </p>

              <div className="space-y-10">
                {contactItems.map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div
                      className="w-10 h-10 flex items-center justify-center shrink-0 rounded-lg bg-cyan/10 text-cyan border border-cyan/20"
                    >
                      <item.icon size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-[0.65rem] font-black uppercase tracking-[0.2em] mb-2 text-gold">
                        {item.title}
                      </h4>
                      {item.lines.map((line, j) => {
                        const isPhone = line.includes("+968");
                        const isEmail = line.includes("@");
                        return (
                          <p key={j} className="text-primary-foreground/75 text-sm leading-relaxed font-light">
                            {isPhone ? (
                              <a href="tel:+96877388021" className="hover:text-cyan transition-colors font-medium">{line}</a>
                            ) : isEmail ? (
                              <a href={`mailto:${line}`} className="hover:text-cyan transition-colors font-medium">{line}</a>
                            ) : (
                              line
                            )}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="my-12 h-[1px] w-full" style={{ background: "rgba(255,255,255,0.08)" }} />

              {/* WhatsApp direct CTA */}
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground/35 mb-5 font-medium">
                  Or reach us instantly
                </p>
                <a
                  href="https://wa.me/96877388021"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-whatsapp-cta"
                  className="whatsapp-pulse relative inline-flex items-center gap-3 px-8 py-4 font-black text-[0.72rem] uppercase tracking-[0.18em] rounded-sm transition-all duration-300 hover:scale-[1.02] shadow-lg bg-[#25D366] text-white"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* ─── RIGHT — Form ─── */}
            <div className="lg:col-span-3 py-20 pl-0 lg:pl-16">
              {submitted ? (
                <div className="h-full flex flex-col items-start justify-center">
                  <div
                    className="w-12 h-[2px] mb-8"
                    style={{ background: "var(--gold)" }}
                  />
                  <h3 className="text-4xl font-black font-heading mb-4" style={{ letterSpacing: "-0.02em" }}>
                    Message Sent.
                  </h3>
                  <p className="text-primary-foreground/50 text-lg mb-8">
                    Thank you for reaching out. Our team will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[0.72rem] font-bold uppercase tracking-[0.18em] transition-opacity hover:opacity-60"
                    style={{ color: "var(--gold)" }}
                  >
                    Send another message →
                  </button>
                </div>
              ) : (
                <>
                  <div className="section-label mb-2">Send a Message</div>
                  <h3
                    className="text-3xl font-black font-heading mb-12"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    We&apos;d love to hear from you
                  </h3>

                  <form
                    className="space-y-10"
                    action="/api/contact"
                    method="POST"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setIsSubmitting(true);
                      setError(null);
                      
                      const formData = new FormData(e.currentTarget);
                      const firstName = formData.get("firstName") as string;
                      const lastName = formData.get("lastName") as string;
                      const email = formData.get("email") as string;
                      const phone = formData.get("phone") as string;
                      const service = formData.get("service") as string;
                      const message = formData.get("message") as string;

                      try {
                        const res = await fetch("/api/contact", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            name: `${firstName} ${lastName}`,
                            email,
                            phone,
                            subject: service ? `Quote Request: ${service}` : "General Inquiry",
                            message,
                          }),
                        });

                        if (res.ok) {
                          setSubmitted(true);
                        } else {
                          const data = await res.json();
                          setError(data.message || "Failed to send message. Please try again.");
                        }
                      } catch (err) {
                        setError("An unexpected error occurred. Please check your connection and try again.");
                      } finally {
                        setIsSubmitting(false);
                      }
                    }}
                  >
                    {error && (
                      <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-200 text-xs font-semibold rounded-sm">
                        {error}
                      </div>
                    )}

                    {/* Name row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-[0.62rem] font-bold uppercase tracking-[0.2em] mb-3 text-primary-foreground/40"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          placeholder="John"
                          className="input-premium"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-[0.62rem] font-bold uppercase tracking-[0.2em] mb-3 text-primary-foreground/40"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          placeholder="Doe"
                          className="input-premium"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-[0.62rem] font-bold uppercase tracking-[0.2em] mb-3 text-primary-foreground/40"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="john@company.com"
                          className="input-premium"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-[0.62rem] font-bold uppercase tracking-[0.2em] mb-3 text-primary-foreground/40"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          placeholder="+968 7738 8021"
                          className="input-premium"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-[0.62rem] font-bold uppercase tracking-[0.2em] mb-3 text-primary-foreground/40"
                      >
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="input-premium"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                      >
                        <option value="" disabled>Select a service</option>
                        {serviceCatalog.map((service) => (
                          <option key={service.slug} value={service.slug}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-[0.62rem] font-bold uppercase tracking-[0.2em] mb-3 text-primary-foreground/40"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        placeholder="How can we help you?"
                        className="input-premium resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="contact-submit-btn"
                      className="inline-flex items-center gap-3 px-10 py-4 font-black text-[0.72rem] uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-px hover:shadow-xl disabled:opacity-50 disabled:pointer-events-none rounded-sm glow-hover"
                      style={{ background: "var(--gold)", color: "var(--primary)" }}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <ArrowRight size={16} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── MAP PLACEHOLDER ─── */}
      <section className="h-[320px] bg-cyan/5 relative overflow-hidden border-t border-cyan/10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116972.3361543314!2d58.28610531542969!3d23.584344078516086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91f114c0000001%3A0x6a086a60e0a5ea0!2sMuscat%2C%20Oman!5e0!3m2!1sen!2s!4v1716200000000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(70%) contrast(1.1) brightness(0.95) opacity(0.85)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Delmar Services Office Location"
        />
      </section>
    </div>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-ocean-depths flex items-center justify-center text-primary-foreground font-sans">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-gold border-t-transparent rounded-full animate-spin" />
          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gold">Loading contact form...</p>
        </div>
      </div>
    }>
      <ContactContent />
    </Suspense>
  );
}
