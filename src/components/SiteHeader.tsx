"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Compass, ChevronRight } from "lucide-react";
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
          ? "bg-background/95 backdrop-blur-lg border-b border-secondary/10 py-3 shadow-md" 
          : "bg-gradient-to-b from-black/60 to-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <div className={`p-2 rounded-sm transition-all duration-500 ${scrolled ? 'bg-primary text-primary-foreground shadow-md' : 'bg-primary-foreground text-primary'}`}>
            <Compass size={28} className="group-hover:rotate-90 transition-transform duration-700 ease-in-out" />
          </div>
          <span className={`font-heading font-extrabold text-2xl tracking-tighter transition-colors duration-500 ${scrolled ? 'text-primary' : 'text-primary-foreground'}`}>
            DELMAR
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-xs font-bold uppercase tracking-[0.15em] py-2 transition-colors duration-300 group ${
                  scrolled 
                    ? isActive ? 'text-primary' : 'text-secondary hover:text-primary' 
                    : isActive ? 'text-primary-foreground' : 'text-primary-foreground/80 hover:text-primary-foreground'
                }`}
              >
                {link.label}
                <span 
                  className={`absolute left-0 bottom-0 w-full h-[2px] transition-all duration-300 origin-left ${
                    scrolled ? 'bg-primary' : 'bg-primary-foreground'
                  } ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} 
                />
              </Link>
            )
          })}
          
          <Link 
            href="/contact"
            className={`hidden lg:flex items-center gap-2 px-8 py-3 rounded-sm font-bold text-xs uppercase tracking-widest transition-all duration-500 border group ${
              scrolled 
                ? 'bg-primary text-primary-foreground border-primary hover:bg-secondary hover:border-secondary shadow-lg hover:shadow-xl hover:-translate-y-0.5' 
                : 'bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary hover:border-primary-foreground'
            }`}
          >
            Get a Quote
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 focus:outline-none transition-colors duration-300 ${
            scrolled ? 'text-primary' : 'text-primary-foreground'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-secondary/10 md:hidden overflow-hidden shadow-2xl origin-top"
          >
            <div className="flex flex-col p-6 gap-3">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between p-4 rounded-sm text-sm font-bold uppercase tracking-[0.15em] transition-all duration-300 group ${
                      isActive 
                        ? 'bg-primary/5 text-primary border-l-4 border-primary' 
                        : 'text-secondary hover:bg-secondary/5 hover:text-primary border-l-4 border-transparent hover:border-primary/30'
                    }`}
                  >
                    {link.label}
                    <ChevronRight size={20} className={`transition-all duration-300 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"}`} />
                  </Link>
                )
              })}
              
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-6 flex items-center justify-center gap-2 p-5 bg-primary text-primary-foreground rounded-sm font-bold text-sm uppercase tracking-widest shadow-lg hover:bg-secondary transition-colors"
              >
                Get a Quote
                <ChevronRight size={18} />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
