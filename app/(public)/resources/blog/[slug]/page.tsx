import { notFound } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { ReadingProgress } from "@/components/ui/reading-progress";
import { RichTextRenderer } from "@/components/rich-text-renderer";
import { format } from "date-fns";

// Create a single static client instance for this file
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const { data: posts } = await supabase
        .from("posts")
        .select("slug")
        .eq("published", true);

    return posts?.map((post) => ({
        slug: post.slug,
    })) || [];
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;

    // Use limit(1) instead of single() to handle duplicate slugs gracefully
    const { data: posts } = await supabase
        .from("posts")
        .select("title, excerpt")
        .eq("slug", slug)
        .limit(1);

    const post = posts?.[0];

    if (!post) return { title: "Post Not Found" };

    return {
        title: `${post.title || "Blog Post"} | Infeara`,
        description: post.excerpt || "Read our latest insights.",
    };
}

// Helper for safe date parsing
const getSafeDate = (dateStr: string | null | undefined, fallbackDate: string | null | undefined): Date | null => {
    const d1 = dateStr ? new Date(dateStr) : null;
    if (d1 && !isNaN(d1.getTime())) return d1;

    const d2 = fallbackDate ? new Date(fallbackDate) : null;
    if (d2 && !isNaN(d2.getTime())) return d2;

    return null;
};


export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;

    // Use limit(1) instead of single() to handle duplicate slugs gracefully
    const { data: posts } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug)
        .limit(1);

    const post = posts?.[0];

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-background text-foreground font-sans selection:bg-orange-100 selection:text-orange-900">
            <ReadingProgress />

            {/* Title Block (Hero) */}
            <header className="w-full pt-32 pb-16 md:pb-24 bg-gradient-to-b from-secondary/30 to-background">
                <div className="container max-w-5xl mx-auto px-4 text-center">
                    <div className="mb-8">
                        <Link href="/resources/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-orange-600 transition-colors mb-8 group">
                            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Blog
                        </Link>
                        <div className="flex justify-center">
                            <Badge variant="secondary" className="bg-orange-50 text-orange-700 hover:bg-orange-100 border-orange-100 px-4 py-1.5 text-xs uppercase tracking-wider font-bold rounded-full">
                                {post.category || "Uncategorized"}
                            </Badge>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-8 leading-[1.15]">
                        {post.title}
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-4xl mx-auto">
                        {post.excerpt}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground border-t border-border/40 pt-8 inline-flex">
                        <div className="flex items-center font-medium text-foreground">
                            <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 font-bold mr-3 text-sm ring-2 ring-background">
                                {(post.author || "I").charAt(0)}
                            </div>
                            {post.author || "Infeara Team"}
                        </div>
                        <div className="flex items-center">
                            {(() => {
                                const date = getSafeDate(post.published_at, post.created_at);
                                return date ? (
                                    <>
                                        <Calendar className="mr-2 h-4 w-4 text-orange-600" /> {format(date, "MMM d, yyyy")}
                                    </>
                                ) : null;
                            })()}
                        </div>
                        <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4 text-orange-600" /> 5 min read
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="container max-w-5xl mx-auto px-4 pb-32">

                {/* Featured Image */}
                <div className="relative aspect-video w-full rounded-3xl overflow-hidden mb-20 shadow-2xl ring-1 ring-black/5 bg-secondary">
                    {post.featured_image ? (
                        <img src={post.featured_image} alt={post.title} className="w-full h-full object-cover" />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-medium bg-secondary/50">
                            Featured Image: {post.title}
                        </div>
                    )}
                </div>

                {/* Content */}
                <RichTextRenderer content={post.content} />



                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-3 pt-10 border-t border-border/60">
                        {post.tags.map((tag: string) => (
                            <Badge key={tag} variant="outline" className="text-muted-foreground hover:text-foreground hover:border-foreground/50 cursor-pointer px-4 py-1.5 text-sm font-medium rounded-full transition-colors">
                                #{tag}
                            </Badge>
                        ))}
                    </div>
                )}
            </main>


        </article>
    );
}
