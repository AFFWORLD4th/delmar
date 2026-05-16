import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col space-y-4">
          <Link href="/" className="font-heading font-bold text-3xl tracking-tighter">
            DELMAR
          </Link>
          <p className="text-primary-foreground/70 text-sm max-w-sm">
            Global Maritime & Business Support Solutions. Providing flexible and reliable support across international markets.
          </p>
        </div>
        
        <div className="flex flex-col space-y-4">
          <h4 className="font-heading font-bold text-lg">Quick Links</h4>
          <nav className="flex flex-col space-y-2 text-sm text-primary-foreground/70">
            <Link href="/" className="hover:text-primary-foreground transition-colors">Home</Link>
            <Link href="/about" className="hover:text-primary-foreground transition-colors">About Us</Link>
            <Link href="/services" className="hover:text-primary-foreground transition-colors">Services</Link>
            <Link href="/contact" className="hover:text-primary-foreground transition-colors">Contact Us</Link>
          </nav>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="font-heading font-bold text-lg">Contact</h4>
          <div className="flex flex-col space-y-2 text-sm text-primary-foreground/70">
            <p>info@delmarservice.com</p>
            <p>Dubai, UAE</p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between text-xs text-primary-foreground/50">
        <p>&copy; {new Date().getFullYear()} Delmar Services. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
