import { createClient } from "@/lib/supabase/server";
import { PostForm } from "@/components/admin/post-form";
import { notFound } from "next/navigation";

interface EditPostPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditPostPage({ params }: EditPostPageProps) {
    const { id } = await params;
    const supabase = await createClient();
    const { data: post, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id)
        .single();

    if (error || !post) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Edit Post</h1>
            <PostForm post={post} />
        </div>
    );
}
