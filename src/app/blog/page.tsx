import Link from "next/link";
import { BlogList } from "@/components/BlogList";
import { blogPosts } from "@/lib/blogs";

export const metadata = {
  title: "Maritime Insights & News | Delmar Services",
  description: "Stay informed with professional insights, regulations updates, and logistical updates from Delmar Services.",
};

export default function BlogIndex() {
  return (
    <div className="flex flex-col w-full font-sans">
      {/* ─── HERO ─── */}
      <section className="relative h-[50vh] min-h-[380px] flex items-end pb-16 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[#071D3D]/80 z-10" />
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/blogs/oman-port-transformation.png')" }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-24 z-10 bg-gradient-to-t from-background to-transparent" />

        <div className="container mx-auto px-6 lg:px-16 relative z-20">
          <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground/60 mb-4 font-medium">
            <Link href="/" className="hover:text-cyan transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">Insights</span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-black font-heading leading-none"
            style={{ letterSpacing: "-0.02em" }}
          >
            Maritime <span className="text-gradient-gold">Insights</span>
          </h1>
          <p className="max-w-2xl text-secondary-foreground/80 font-light text-sm md:text-base leading-relaxed mt-4">
            Analysis, regulatory updates, and strategic intelligence from our global port agency and marine operations network.
          </p>
        </div>
      </section>

      {/* ─── CLIENT FILTERING & LISTING ─── */}
      <BlogList posts={blogPosts} />
    </div>
  );
}
