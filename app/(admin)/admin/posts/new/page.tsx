import { PostForm } from "@/components/admin/post-form";

export default function NewPostPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Create New Post</h1>
            <PostForm />
        </div>
    );
}
