"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import { Search, Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { BlogPost } from "@/lib/blogs";

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Get all unique categories
  const categories = useMemo(() => {
    const list = new Set(posts.map((post) => post.category));
    return ["All", ...Array.from(list)];
  }, [posts]);

  // Featured post is always the first one in the list, unless filtered
  const featuredPost = useMemo(() => {
    if (selectedCategory !== "All" || searchQuery !== "") return null;
    return posts[0];
  }, [posts, selectedCategory, searchQuery]);

  // Filtered posts (excluding featured post if it is shown)
  const filteredPosts = useMemo(() => {
    let list = posts;

    if (selectedCategory !== "All") {
      list = list.filter((post) => post.category === selectedCategory);
    }

    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      list = list.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.description.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Exclude featured post if displayed
    if (featuredPost) {
      list = list.filter((post) => post.slug !== featuredPost.slug);
    }

    return list;
  }, [posts, selectedCategory, searchQuery, featuredPost]);

  return (
    <div className="w-full">
      {/* ─── SEARCH & FILTER BAR ─── */}
      <div className="container mx-auto px-6 lg:px-16 mt-8 mb-12">
        <div className="glass-panel py-6 px-8 rounded-2xl border border-secondary/15 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground border-primary glow-cyan-hover"
                    : "bg-background text-secondary/80 border-secondary/20 hover:border-cyan hover:text-cyan"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-secondary/50">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search insights..."
              className="w-full pl-10 pr-4 py-2.5 bg-background border border-secondary/20 rounded-full text-xs font-medium text-secondary focus:outline-none focus:border-cyan transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 pb-24">
        {/* ─── FEATURED POST ─── */}
        {featuredPost && (
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 glass-panel rounded-2xl overflow-hidden border border-secondary/15 group hover:border-[#00B4D8]/30 transition-all duration-500 glow-cyan-hover shadow-lg">
              <div className="lg:col-span-7 relative min-h-[350px] lg:min-h-[480px] overflow-hidden">
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-103"
                  priority
                />
                <div className="absolute top-6 left-6 z-10 bg-primary/95 text-primary-foreground px-4 py-1.5 rounded-full text-[0.65rem] font-bold uppercase tracking-wider border border-white/10">
                  Featured Article
                </div>
              </div>
              <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-xs text-secondary/60 mb-6 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-cyan" />
                    {featuredPost.publishDate}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-cyan" />
                    {featuredPost.readingTime}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-black font-heading text-primary leading-tight mb-4 group-hover:text-cyan transition-colors">
                  <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                </h2>
                <p className="text-secondary/80 font-light text-sm leading-relaxed mb-6">
                  {featuredPost.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-secondary/15">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-[#0077B6]/15 text-[#0077B6] flex items-center justify-center text-xs font-bold font-heading border border-[#0077B6]/30">
                      {featuredPost.author.avatar}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-primary">{featuredPost.author.name}</p>
                      <p className="text-[0.65rem] text-secondary/60">{featuredPost.author.role}</p>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="flex items-center gap-1 text-xs font-bold text-primary hover:text-cyan group-hover:gap-2 transition-all"
                  >
                    Read Story
                    <ArrowRight className="h-4 w-4 text-cyan" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── GRID LIST ─── */}
        {filteredPosts.length > 0 ? (
          <div>
            {featuredPost && (
              <h3 className="text-lg font-black font-heading text-primary uppercase tracking-wider mb-8">
                Latest Insights & Operations
              </h3>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="flex flex-col bg-background rounded-2xl overflow-hidden border border-secondary/10 group hover:border-[#00B4D8]/30 hover:-translate-y-1 transition-all duration-300 glow-cyan-hover shadow-sm"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-103"
                    />
                    <div className="absolute top-4 left-4 z-10 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-[0.6rem] font-bold uppercase tracking-wider border border-white/10">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-[0.7rem] text-secondary/60 mb-4 font-semibold">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-cyan" />
                        {post.publishDate}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-cyan" />
                        {post.readingTime}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold font-heading text-primary leading-snug mb-3 group-hover:text-cyan transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h4>

                    <p className="text-secondary/80 font-light text-xs leading-relaxed mb-6 line-clamp-3">
                      {post.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-secondary/10">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-full bg-[#0077B6]/15 text-[#0077B6] flex items-center justify-center text-[0.65rem] font-bold font-heading border border-[#0077B6]/30">
                          {post.author.avatar}
                        </div>
                        <div>
                          <p className="text-[0.7rem] font-bold text-primary">{post.author.name}</p>
                          <p className="text-[0.6rem] text-secondary/60">{post.author.role}</p>
                        </div>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-center gap-0.5 text-xs font-bold text-primary hover:text-cyan group-hover:gap-1 transition-all"
                      >
                        Read
                        <ArrowRight className="h-3.5 w-3.5 text-cyan" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-20 glass-panel rounded-2xl border border-secondary/15 shadow-sm">
            <BookOpen className="h-12 w-12 mx-auto text-secondary mb-4 opacity-70" />
            <h3 className="text-lg font-bold font-heading text-primary mb-2">No insights found</h3>
            <p className="text-secondary/70 text-sm max-w-md mx-auto">
              We couldn't find any articles matching your search criteria. Try using different keywords or categories.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
