import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const services = [
  "Maritime Support",
  "Supply & Coordination",
  "Logistics Solutions",
  "Business Support Services",
  "Operational Assistance",
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
];

export function SiteFooter() {
  return (
    <footer className="relative bg-gradient-to-b from-[#05142B] via-[#081F3A] to-[#05142B] text-primary-foreground overflow-hidden border-t border-cyan/15">
      {/* Decorative gradient blur blobs for premium styling */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      {/* Gold top bar */}
      <div
        className="h-[2.5px] w-full"
        style={{ background: "linear-gradient(90deg, var(--gold) 0%, var(--gold-light) 50%, var(--gold-dark) 100%)" }}
      />

      {/* Main footer content */}
      <div className="container mx-auto px-6 lg:px-16 py-20 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="group inline-flex items-center mb-6">
              <Image
                src="/logo_invert.png"
                alt="Delmar Services"
                width={120}
                height={92}
                className="h-10 w-auto object-contain transition-all duration-500"
              />
            </Link>

            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-8 max-w-xs">
              Global maritime & business support solutions engineered for reliability, efficiency, and international standards.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4
              className="text-[0.68rem] font-bold uppercase tracking-[0.2em] mb-7 relative pb-2 inline-block"
            >
              Navigation
              <span
                className="absolute left-0 bottom-0 h-[1.5px] w-8 bg-gradient-to-r from-gold to-gold-light"
              />
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.72rem] uppercase tracking-wider text-primary-foreground/60 hover:text-cyan flex items-center gap-1.5 transition-all duration-300 hover:translate-x-1"
                  >
                    <ArrowRight size={12} className="text-gold" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h4
              className="text-[0.68rem] font-bold uppercase tracking-[0.2em] mb-7 relative pb-2 inline-block"
            >
              Services
              <span
                className="absolute left-0 bottom-0 h-[1.5px] w-8 bg-gradient-to-r from-gold to-gold-light"
              />
            </h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-[0.72rem] uppercase tracking-wider text-primary-foreground/60 hover:text-cyan flex items-center gap-1.5 transition-all duration-300 hover:translate-x-1"
                  >
                    <ArrowRight size={12} className="text-gold" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact Info */}
          <div>
            <h4
              className="text-[0.68rem] font-bold uppercase tracking-[0.2em] mb-7 relative pb-2 inline-block"
            >
              Global Office
              <span
                className="absolute left-0 bottom-0 h-[1.5px] w-8 bg-gradient-to-r from-gold to-gold-light"
              />
            </h4>
            <ul className="space-y-4 text-[0.72rem] tracking-wider text-primary-foreground/60">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-0.5 shrink-0 text-gold" />
                <span className="leading-relaxed">Muscat, Oman</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="shrink-0 text-gold" />
                <a href="tel:+96877388021" className="hover:text-cyan transition-colors">
                  +968 7738 8021
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="shrink-0 text-gold" />
                <a href="mailto:info@delmarservice.com" className="hover:text-cyan transition-colors">
                  info@delmarservice.com
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 font-bold text-[0.65rem] uppercase tracking-[0.18em] transition-all duration-400 border border-white/20 bg-transparent hover:bg-white/10 hover:border-cyan hover:text-primary-foreground glow-cyan-hover rounded-sm"
              >
                Get a Quote
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.65rem] uppercase tracking-widest text-primary-foreground/40"
        >
          <p>&copy; {new Date().getFullYear()} Delmar Services. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-cyan transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-cyan transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
