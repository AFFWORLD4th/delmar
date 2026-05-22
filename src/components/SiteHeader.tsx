"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { serviceCatalog } from "@/lib/services";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Insights" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-cyan/20 py-3 shadow-md"
          : "bg-gradient-to-b from-[#071932]/90 via-[#071932]/40 to-transparent py-7"
      }`}
    >
      {/* Gold top accent line — visible when scrolled */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2.5px] transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{ background: "linear-gradient(90deg, var(--gold) 0%, var(--gold-light) 50%, var(--gold-dark) 100%)" }}
      />

      <div className="container mx-auto px-6 lg:px-16 flex items-center justify-between">
        {/* Logo / Wordmark */}
        <Link href="/" className="group flex items-center py-1">
          <Image
            src={scrolled ? "/logo.png" : "/logo_invert.png"}
            alt="Delmar Services"
            width={120}
            height={92}
            className="h-10 w-auto object-contain transition-all duration-500"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => {
            const isServices = link.href === "/services";
            const isServicesActive = pathname.startsWith("/services");
            const isActive = isServices ? isServicesActive : pathname === link.href;

            if (isServices) {
              return (
                <div
                  key={link.href}
                  className="relative py-2"
                  onMouseEnter={() => setIsServicesHovered(true)}
                  onMouseLeave={() => setIsServicesHovered(false)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] py-1 transition-colors duration-300 group ${
                      scrolled
                        ? isActive
                          ? "text-primary"
                          : "text-secondary/80 hover:text-cyan"
                        : isActive
                        ? "text-gold-light"
                        : "text-primary-foreground/80 hover:text-gold"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={11}
                      className={`transition-transform duration-300 mt-[-1px] ${
                        isServicesHovered ? "rotate-180" : ""
                      }`}
                    />
                    {/* Gold active indicator */}
                    <span
                      className={`absolute left-0 bottom-0 h-[1.5px] transition-all duration-400 origin-left ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                      style={{ background: "linear-gradient(90deg, var(--gold) 0%, var(--gold-light) 100%)" }}
                    />
                  </Link>

                  {/* Dropdown Menu (Glassmorphic Dark) */}
                  <AnimatePresence>
                    {isServicesHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 glass-panel-dark border border-cyan/20 py-4 shadow-2xl z-50 text-left font-sans rounded-xl overflow-hidden"
                      >
                        <div className="flex flex-col gap-1">
                          <Link
                            href="/services"
                            onClick={() => setIsServicesHovered(false)}
                            className="px-5 py-2 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-gold hover:bg-secondary/20 transition-colors duration-300 border-b border-white/10 pb-2 mb-1 block"
                          >
                            All Services Overview
                          </Link>
                          {serviceCatalog.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              onClick={() => setIsServicesHovered(false)}
                              className="px-5 py-2.5 text-xs text-primary-foreground/80 hover:text-gold hover:bg-secondary/15 transition-colors duration-300 font-medium flex items-center justify-between group/item"
                            >
                              <span>{service.shortTitle}</span>
                              <ChevronRight
                                size={12}
                                className="opacity-0 group-hover/item:opacity-100 transition-all duration-300 translate-x-[-4px] group-hover/item:translate-x-0 text-gold"
                              />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[0.68rem] font-bold uppercase tracking-[0.18em] py-2 transition-colors duration-300 group ${
                  scrolled
                    ? isActive
                      ? "text-primary"
                      : "text-secondary/80 hover:text-cyan"
                    : isActive
                    ? "text-gold-light"
                    : "text-primary-foreground/80 hover:text-gold"
                }`}
              >
                {link.label}
                {/* Gold active indicator */}
                <span
                  className={`absolute left-0 bottom-0 h-[1.5px] transition-all duration-400 origin-left ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                  style={{ background: "linear-gradient(90deg, var(--gold) 0%, var(--gold-light) 100%)" }}
                />
              </Link>
            );
          })}

          <Link
            href="/contact"
            className={`hidden lg:flex items-center gap-2 px-7 py-3 font-bold text-[0.65rem] uppercase tracking-[0.18em] transition-all duration-400 group border rounded-sm ${
              scrolled
                ? "bg-primary text-primary-foreground border-primary hover:bg-secondary hover:border-secondary shadow-md hover:shadow-lg hover:-translate-y-px glow-cyan-hover"
                : "bg-transparent text-primary-foreground border-white/30 hover:bg-white/10 hover:border-cyan hover:text-primary-foreground glow-cyan-hover"
            }`}
          >
            Get a Quote
            <ChevronRight
              size={14}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 focus:outline-none transition-colors duration-300 ${
            scrolled ? "text-primary" : "text-primary-foreground"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav (Frosted Glass Panel) */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-cyan/20 md:hidden overflow-hidden shadow-2xl origin-top"
          >
            {/* Gold top line on mobile menu */}
            <div className="h-[2px] w-full bg-gradient-to-r from-gold to-gold-light" />
            <div className="flex flex-col p-6 gap-1">
              {links.map((link) => {
                const isServices = link.href === "/services";
                const isServicesActive = pathname.startsWith("/services");

                if (isServices) {
                  return (
                    <div key={link.href} className="flex flex-col">
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className={`flex items-center justify-between px-4 py-4 text-[0.72rem] font-bold uppercase tracking-[0.18em] transition-all duration-300 text-left border-l-2 ${
                          isServicesActive
                            ? "text-primary"
                            : "text-secondary/70 hover:text-cyan border-transparent hover:border-secondary/20"
                        }`}
                        style={isServicesActive ? { borderLeftColor: "var(--gold)" } : {}}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            isMobileServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown Items on Mobile */}
                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-6 flex flex-col bg-secondary/5 border-l border-gold/40 overflow-hidden"
                          >
                            <Link
                              href="/services"
                              onClick={() => {
                                setIsOpen(false);
                                setIsMobileServicesOpen(false);
                              }}
                              className="px-4 py-3 text-[0.68rem] font-bold uppercase tracking-[0.15em] text-gold hover:text-primary transition-colors flex items-center justify-between"
                            >
                              <span>All Services Overview</span>
                              <ChevronRight size={14} />
                            </Link>
                            {serviceCatalog.map((service) => {
                              const isSubActive = pathname === `/services/${service.slug}`;
                              return (
                                <Link
                                  key={service.slug}
                                  href={`/services/${service.slug}`}
                                  onClick={() => {
                                    setIsOpen(false);
                                    setIsMobileServicesOpen(false);
                                  }}
                                  className={`px-4 py-3 text-[0.72rem] font-semibold uppercase tracking-wider transition-colors flex items-center justify-between ${
                                    isSubActive ? "text-primary font-bold" : "text-secondary/70 hover:text-cyan"
                                  }`}
                                >
                                  <span>{service.shortTitle}</span>
                                  <ChevronRight size={14} className={isSubActive ? "opacity-100" : "opacity-40"} />
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-4 text-[0.72rem] font-bold uppercase tracking-[0.18em] transition-all duration-300 group ${
                      isActive
                        ? "text-primary border-l-2"
                        : "text-secondary/70 hover:text-cyan border-l-2 border-transparent hover:border-secondary/20"
                    }`}
                    style={isActive ? { borderLeftColor: "var(--gold)" } : {}}
                  >
                    <span>{link.label}</span>
                    <ChevronRight
                      size={16}
                      className={`transition-all duration-300 ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 -translate-x-3 group-hover:opacity-60 group-hover:translate-x-0"
                      }`}
                    />
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground font-bold text-[0.72rem] uppercase tracking-[0.18em] shadow-lg hover:bg-secondary transition-colors glow-cyan-hover"
              >
                Get a Quote
                <ChevronRight size={16} />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
