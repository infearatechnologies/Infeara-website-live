import { createClient } from "@/lib/supabase/server";
import { BlogList } from "@/components/resources/blog/blog-list";

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export const metadata = {
    title: "Blog | Infeara",
    description: "Expert insights to help you navigate the complex world of enterprise IT.",
};

export default async function BlogIndexPage() {
    const supabase = await createClient();
    const { data: posts } = await supabase
        .from("posts")
        .select("*")
        .not("published_at", "is", null)
        .order("published_at", { ascending: false });

    // Transform data if necessary or pass directly if types match
    const formattedPosts = posts?.map(post => ({
        ...post,
        read_time: "5 min read", // Placeholder
    })) || [];

    return <BlogList initialPosts={formattedPosts} />;
}
