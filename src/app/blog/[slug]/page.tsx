import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { getBlogPostBySlug, blogPosts } from "@/lib/blogs";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return {
      title: "Insight Not Found | Delmar Services",
      description: "The requested article could not be found.",
    };
  }
  return {
    title: `${post.title} | Delmar Services`,
    description: post.description,
    keywords: post.tags.join(", "),
  };
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get up to 3 related articles (excluding the current one)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <div className="flex flex-col w-full font-sans">
      {/* ─── HERO HEADER ─── */}
      <section className="relative h-[65vh] min-h-[480px] flex items-end pb-16 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[#071D3D]/80 z-10" />
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${post.coverImage}')` }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-40 z-10 bg-gradient-to-t from-background to-transparent" />

        <div className="container mx-auto px-6 lg:px-16 relative z-20">
          <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground/60 mb-6 font-medium">
            <Link href="/" className="hover:text-cyan transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-cyan transition-colors">Insights</Link>
            <span>/</span>
            <span className="text-gold">Detail</span>
          </div>

          <div className="inline-block bg-gold/90 text-primary text-[0.6rem] font-black uppercase tracking-wider px-3.5 py-1 mb-4 rounded-sm">
            {post.category}
          </div>

          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-black font-heading leading-tight max-w-4xl"
            style={{ letterSpacing: "-0.03em" }}
          >
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-white/10 text-xs text-primary-foreground/75 font-semibold">
            {/* Author */}
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs font-bold font-heading border border-gold/30">
                {post.author.avatar}
              </div>
              <div>
                <p className="font-bold text-primary-foreground">{post.author.name}</p>
                <p className="text-[0.62rem] text-primary-foreground/60">{post.author.role}</p>
              </div>
            </div>

            <span className="hidden sm:inline text-primary-foreground/20">|</span>

            {/* Date */}
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-cyan" />
              {post.publishDate}
            </span>

            <span className="hidden sm:inline text-primary-foreground/20">|</span>

            {/* Reading Time */}
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-cyan" />
              {post.readingTime}
            </span>
          </div>
        </div>
      </section>

      {/* ─── ARTICLE CONTENT ─── */}
      <section className="py-20 bg-background text-secondary relative overflow-hidden">
        {/* Decorative background blurs */}
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-[#0077B6]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#FF9F1C]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Main content column */}
            <div className="lg:col-span-8">
              {/* Back to Blog */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-cyan tracking-wider uppercase mb-10 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 text-cyan" />
                Back to Insights
              </Link>

              {/* Rich text container */}
              <div 
                className="prose max-w-none text-secondary/80 font-light text-base leading-relaxed space-y-6 
                  prose-headings:font-black prose-headings:font-heading prose-headings:text-primary prose-headings:uppercase prose-headings:tracking-wide
                  prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:mb-6
                  prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2 prose-ul:mb-6
                  prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2 prose-ol:mb-6
                  prose-strong:font-bold prose-strong:text-primary"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tag chips */}
              <div className="flex flex-wrap items-center gap-2 mt-12 pt-8 border-t border-secondary/15">
                <span className="text-xs font-bold uppercase tracking-wider text-secondary/50 mr-2">Tags:</span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#0077B6]/5 text-secondary/80 border border-secondary/10 text-[0.68rem] font-semibold uppercase tracking-wider px-3.5 py-1 rounded-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Sidebar column */}
            <div className="lg:col-span-4 space-y-8">
              {/* CTA Panel (Frosted Glass) */}
              <div className="p-8 glass-panel border border-[#00B4D8]/20 rounded-2xl shadow-md">
                <h3 className="text-lg font-black font-heading text-primary mb-4">Partner with Delmar</h3>
                <p className="text-secondary/75 text-xs leading-relaxed mb-6">
                  Leverage our strategic operational footprints in Muscat, Sohar, and regional trade corridors to run your operations smoothly.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 w-full py-4 bg-primary text-primary-foreground hover:bg-[#0077B6] font-black text-[0.72rem] uppercase tracking-[0.18em] transition-all duration-300 glow-cyan-hover rounded-sm"
                >
                  Contact Support
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Author Info (Frosted Glass) */}
              <div className="p-8 glass-panel border border-secondary/10 text-center rounded-2xl shadow-sm">
                <div className="h-16 w-16 mx-auto rounded-full bg-[#0077B6]/15 text-[#0077B6] flex items-center justify-center text-xl font-bold font-heading border border-[#0077B6]/30 mb-4">
                  {post.author.avatar}
                </div>
                <h4 className="text-base font-bold text-primary">{post.author.name}</h4>
                <p className="text-xs text-secondary/50 mb-3">{post.author.role}</p>
                <p className="text-xs text-secondary/70 font-light leading-relaxed">
                  Delmar Services marine analyst providing operational updates and compliance guidance.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── RELATED INSIGHTS ─── */}
      <section className="py-24 bg-primary/5 border-t border-secondary/15">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="section-label">More From Us</div>
              <h2 className="text-2xl md:text-3xl font-black font-heading text-primary uppercase tracking-tight">
                Related <span className="text-gradient-gold">Insights</span>
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-cyan uppercase tracking-wider transition-colors duration-300"
            >
              See All Articles
              <ArrowRight className="h-4 w-4 text-cyan" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((p) => (
              <article
                key={p.slug}
                className="flex flex-col bg-background rounded-xl overflow-hidden border border-secondary/10 group hover:border-[#00B4D8]/30 transition-all duration-300 glow-cyan-hover shadow-sm"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={p.coverImage}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-[0.65rem] text-secondary/60 mb-3 font-semibold">
                    <span className="text-cyan">{p.publishDate}</span>
                    <span>•</span>
                    <span className="text-cyan">{p.readingTime}</span>
                  </div>
                  <h4 className="text-base font-bold font-heading text-primary leading-snug mb-3 group-hover:text-cyan transition-colors line-clamp-2">
                    <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                  </h4>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="inline-flex items-center gap-0.5 text-xs font-bold text-primary hover:text-cyan group-hover:gap-1 transition-all mt-auto pt-4 border-t border-secondary/15"
                  >
                    Read Story
                    <ArrowRight className="h-3.5 w-3.5 text-cyan" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
