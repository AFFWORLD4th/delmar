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
      <div className="bg-secondary/5 border-y border-secondary/10 py-6 mb-12">
        <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-secondary/70 border-secondary/20 hover:border-secondary/40 hover:text-secondary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-secondary/40">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search insights..."
              className="w-full pl-10 pr-4 py-2.5 bg-background border border-secondary/20 rounded-full text-xs font-medium text-secondary focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 pb-24">
        {/* ─── FEATURED POST ─── */}
        {featuredPost && (
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-secondary/5 rounded-2xl overflow-hidden border border-secondary/10 group hover:border-secondary/20 transition-all duration-500">
              <div className="lg:col-span-7 relative min-h-[350px] lg:min-h-[480px] overflow-hidden">
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-102"
                  priority
                />
                <div className="absolute top-6 left-6 z-10 bg-primary/95 text-primary-foreground px-4 py-1.5 rounded-full text-[0.65rem] font-bold uppercase tracking-wider">
                  Featured Article
                </div>
              </div>
              <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-xs text-secondary/50 mb-6 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {featuredPost.publishDate}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {featuredPost.readingTime}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-black font-heading text-primary leading-tight mb-4 group-hover:text-primary/80 transition-colors">
                  <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                </h2>
                <p className="text-secondary/70 font-light text-sm leading-relaxed mb-6">
                  {featuredPost.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-secondary/10">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold font-heading border border-primary/20">
                      {featuredPost.author.avatar}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-secondary">{featuredPost.author.name}</p>
                      <p className="text-[0.65rem] text-secondary/50">{featuredPost.author.role}</p>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="flex items-center gap-1 text-xs font-bold text-primary group-hover:gap-2 transition-all"
                  >
                    Read Story
                    <ArrowRight className="h-4 w-4" />
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
                  className="flex flex-col bg-background rounded-2xl overflow-hidden border border-secondary/10 group hover:border-secondary/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-103"
                    />
                    <div className="absolute top-4 left-4 z-10 bg-background/90 text-secondary px-3 py-1 rounded-full text-[0.6rem] font-bold uppercase tracking-wider border border-secondary/10">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-[0.7rem] text-secondary/50 mb-4 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.publishDate}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readingTime}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold font-heading text-primary leading-snug mb-3 group-hover:text-primary/80 transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h4>

                    <p className="text-secondary/70 font-light text-xs leading-relaxed mb-6 line-clamp-3">
                      {post.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-secondary/10">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[0.65rem] font-bold font-heading border border-primary/20">
                          {post.author.avatar}
                        </div>
                        <div>
                          <p className="text-[0.7rem] font-bold text-secondary">{post.author.name}</p>
                          <p className="text-[0.6rem] text-secondary/50">{post.author.role}</p>
                        </div>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-center gap-0.5 text-xs font-bold text-primary group-hover:gap-1 transition-all"
                      >
                        Read
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-20 bg-secondary/5 rounded-2xl border border-secondary/10">
            <BookOpen className="h-12 w-12 mx-auto text-secondary/30 mb-4" />
            <h3 className="text-lg font-bold font-heading text-primary mb-2">No insights found</h3>
            <p className="text-secondary/60 text-sm max-w-md mx-auto">
              We couldn't find any articles matching your search criteria. Try using different keywords or categories.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
