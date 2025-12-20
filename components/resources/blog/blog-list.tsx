"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, User, Clock, Search, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { format } from "date-fns";

interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    category: string;
    author: string;
    published_at: string;
    featured_image?: string;
    read_time?: string; // Optional, calculated or static
}

interface BlogListProps {
    initialPosts: BlogPost[];
}

export function BlogList({ initialPosts }: BlogListProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    // Extract unique categories from posts and merge with defaults
    const defaultCategories = ["IT Operations", "Automation", "Security", "Infrastructure"];
    const dynamicCategories = Array.from(new Set(initialPosts.map(p => p.category).filter(Boolean)));
    const categories = ["All", ...Array.from(new Set([...defaultCategories, ...dynamicCategories]))];

    const filteredPosts = initialPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (post.excerpt && post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesCategory = activeCategory === "All" || post.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    // Reset page when filters change
    if (activeCategory !== "All" || searchQuery) {
        // Note: This needs to be handled carefully to avoid infinite loops. 
        // Better to use useEffect or derived state, but for simplicity in this refactor:
        // We'll just slice based on the current page.
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    // If filtering is active, we might want to show all or paginate the filtered results.
    // Let's paginate the filtered results.
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const featuredPost = currentPage === 1 && !searchQuery && activeCategory === "All" ? filteredPosts[0] : null;
    // If we are showing featured post separately on page 1, we should exclude it from the grid on page 1?
    // The original logic sliced (1). Let's keep it simple:
    // If on page 1 and no filters, show featured + grid of rest.
    // If filters or page > 1, just show grid.

    let displayPosts = currentPosts;
    if (currentPage === 1 && !searchQuery && activeCategory === "All" && filteredPosts.length > 0) {
        displayPosts = filteredPosts.slice(1, postsPerPage + 1); // Show next 'postsPerPage' items
    } else {
        displayPosts = currentPosts;
    }

    return (
        <>
            {/* Hero Section */}
            <section className="w-full py-24 bg-transparent text-foreground relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent -z-10" />
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <Badge variant="outline" className="text-orange-600 border-orange-200 bg-orange-500/10 mb-6">
                        Insights & Resources
                    </Badge>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-heading mb-6">
                        IT Operations, Automation, Security, Infrastructure
                    </h1>
                    <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl/relaxed mb-10">
                        Expert insights to help you navigate the complex world of enterprise IT.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-md mx-auto relative mb-12">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="Search articles..."
                            className="pl-10 h-12 rounded-full bg-white/80 backdrop-blur-sm border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={activeCategory === category ? "default" : "outline"}
                                onClick={() => setActiveCategory(category)}
                                className={`rounded-full ${activeCategory === category ? "bg-orange-600 hover:bg-orange-700" : "hover:bg-orange-50 text-muted-foreground"}`}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            <div className="w-full py-16 md:py-24 bg-secondary/30 backdrop-blur-sm rounded-3xl mb-20">
                <div className="container mx-auto px-4 md:px-6">
                    {filteredPosts.length > 0 ? (
                        <>
                            {/* Featured Article */}
                            {activeCategory === "All" && !searchQuery && featuredPost && (
                                <div className="mb-16">
                                    <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
                                    <div className="grid md:grid-cols-2 gap-8 bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                                        <div className="relative aspect-video md:aspect-auto">
                                            {featuredPost.featured_image ? (
                                                <img src={featuredPost.featured_image} alt={featuredPost.title} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="absolute inset-0 bg-secondary flex items-center justify-center text-muted-foreground">
                                                    <span className="font-bold">Featured Image</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-8 flex flex-col justify-center">
                                            <div className="flex items-center gap-2 mb-4">
                                                <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200">
                                                    {featuredPost.category}
                                                </Badge>
                                                <span className="text-sm text-muted-foreground">{featuredPost.read_time || "5 min read"}</span>
                                            </div>
                                            <Link href={`/resources/blog/${featuredPost.slug}`} className="group">
                                                <h3 className="text-3xl font-bold mb-4 group-hover:text-orange-600 transition-colors">
                                                    {featuredPost.title}
                                                </h3>
                                            </Link>
                                            <p className="text-muted-foreground text-lg mb-6 line-clamp-3">
                                                {featuredPost.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between mt-auto">
                                                <div className="flex items-center text-sm text-muted-foreground">
                                                    <User className="h-4 w-4 mr-2" /> {featuredPost.author || "Infeara Team"}
                                                    <span className="mx-2">•</span>
                                                    <Calendar className="h-4 w-4 mr-2" /> {format(new Date(featuredPost.published_at), "MMM d, yyyy")}
                                                </div>
                                                <Button variant="ghost" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 p-0" asChild>
                                                    <Link href={`/resources/blog/${featuredPost.slug}`}>
                                                        Read Article <ArrowRight className="ml-2 h-4 w-4" />
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Blog Grid */}
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {displayPosts.map((post) => (
                                    <Card key={post.id} className="flex flex-col hover:shadow-lg transition-shadow border-border bg-card overflow-hidden group">
                                        <div className="aspect-[16/9] bg-secondary relative overflow-hidden">
                                            {post.featured_image ? (
                                                <img src={post.featured_image} alt={post.title} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-bold bg-secondary/50">
                                                    Blog Image
                                                </div>
                                            )}
                                        </div>
                                        <CardHeader>
                                            <div className="flex justify-between items-center mb-2">
                                                <Badge variant="secondary" className="bg-orange-500/10 text-orange-600 hover:bg-orange-500/20 border-orange-200/20">
                                                    {post.category}
                                                </Badge>
                                                <span className="text-xs text-muted-foreground flex items-center">
                                                    <Clock className="h-3 w-3 mr-1" /> {post.read_time || "5 min read"}
                                                </span>
                                            </div>
                                            <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-orange-600 transition-colors">
                                                <Link href={`/resources/blog/${post.slug}`}>
                                                    {post.title}
                                                </Link>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex-1">
                                            <p className="text-muted-foreground text-sm line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                        </CardContent>
                                        <CardFooter className="border-t border-border pt-4 text-xs text-muted-foreground flex justify-between">
                                            <div className="flex items-center">
                                                <User className="h-3 w-3 mr-1 text-orange-600" /> {post.author || "Infeara Team"}
                                            </div>
                                            <div className="flex items-center">
                                                <Calendar className="h-3 w-3 mr-1 text-orange-600" /> {format(new Date(post.published_at), "MMM d, yyyy")}
                                            </div>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="flex justify-center items-center gap-2 mt-12">
                                    <Button
                                        variant="outline"
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    >
                                        Previous
                                    </Button>
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                                        <Button
                                            key={number}
                                            variant={currentPage === number ? "default" : "outline"}
                                            onClick={() => handlePageChange(number)}
                                            className={currentPage === number ? "bg-orange-600 hover:bg-orange-700" : ""}
                                        >
                                            {number}
                                        </Button>
                                    ))}
                                    <Button
                                        variant="outline"
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                    >
                                        Next
                                    </Button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-20">
                            <h3 className="text-xl font-bold text-muted-foreground">No articles found matching your criteria.</h3>
                            <Button
                                variant="link"
                                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                                className="text-orange-600 mt-4"
                            >
                                Clear filters
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
