"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/97 backdrop-blur-xl border-b border-secondary/10 py-3 shadow-sm"
          : "bg-gradient-to-b from-black/70 via-black/30 to-transparent py-7"
      }`}
    >
      {/* Gold top accent line — visible when scrolled */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{ background: "var(--gold)" }}
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
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[0.68rem] font-bold uppercase tracking-[0.18em] py-2 transition-colors duration-300 group ${
                  scrolled
                    ? isActive
                      ? "text-primary"
                      : "text-secondary/70 hover:text-primary"
                    : isActive
                    ? "text-primary-foreground"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                {link.label}
                {/* Gold active indicator */}
                <span
                  className={`absolute left-0 bottom-0 h-[1.5px] transition-all duration-400 origin-left ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                  style={{ background: "var(--gold)" }}
                />
              </Link>
            );
          })}

          <Link
            href="/contact"
            className={`hidden lg:flex items-center gap-2 px-7 py-3 font-bold text-[0.65rem] uppercase tracking-[0.18em] transition-all duration-400 group border ${
              scrolled
                ? "bg-primary text-primary-foreground border-primary hover:bg-secondary hover:border-secondary shadow-md hover:shadow-lg hover:-translate-y-px"
                : "bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary hover:border-primary-foreground"
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

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-secondary/10 md:hidden overflow-hidden shadow-2xl origin-top"
          >
            {/* Gold top line on mobile menu */}
            <div className="h-[2px] w-full" style={{ background: "var(--gold)" }} />
            <div className="flex flex-col p-6 gap-1">
              {links.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-4 text-[0.72rem] font-bold uppercase tracking-[0.18em] transition-all duration-300 group ${
                      isActive
                        ? "text-primary border-l-2"
                        : "text-secondary/70 hover:text-primary border-l-2 border-transparent hover:border-secondary/20"
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
                className="mt-4 flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground font-bold text-[0.72rem] uppercase tracking-[0.18em] shadow-lg hover:bg-secondary transition-colors"
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
