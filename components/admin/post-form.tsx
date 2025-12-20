"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { ContentBuilder } from "@/components/admin/content-builder";
import { AIAssistantModal } from "@/components/admin/ai-assistant-modal";

interface PostFormProps {
    post?: any; // Replace with proper type
}

export function PostForm({ post }: PostFormProps) {
    const router = useRouter();
    const supabase = createClient();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        title: post?.title || "",
        slug: post?.slug || "",
        excerpt: post?.excerpt || "",
        content: post?.content || null,
        featured_image: post?.featured_image || "",
        category: post?.category || "",
        published: !!post?.published_at,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
        setFormData((prev) => ({ ...prev, slug: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // Content is already in JSON format from ContentBuilder
            let contentJson = formData.content;

            // Fallback if empty
            if (!contentJson) {
                contentJson = {
                    root: {
                        children: []
                    }
                };
            }

            const postData = {
                title: formData.title,
                slug: formData.slug,
                excerpt: formData.excerpt,
                content: contentJson,
                featured_image: formData.featured_image,
                category: formData.category,
                published_at: formData.published ? new Date().toISOString() : null,
                updated_at: new Date().toISOString(),
            };

            if (post) {
                const { error } = await supabase
                    .from("posts")
                    .update(postData)
                    .eq("id", post.id);
                if (error) throw error;
            } else {
                const { error } = await supabase
                    .from("posts")
                    .insert([postData]);
                if (error) throw error;
            }

            router.push("/admin/posts");
            router.refresh();
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
            {error && (
                <div className="bg-red-50 text-red-500 p-4 rounded-md">
                    {error}
                </div>
            )}

            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Post Details</h2>
                <AIAssistantModal
                    onGenerate={(data) => {
                        setFormData(prev => ({
                            ...prev,
                            title: data.title,
                            slug: data.slug || data.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, ""),
                            excerpt: data.excerpt,
                            content: data.content
                        }));
                    }}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={(e) => {
                        handleChange(e);
                        if (!post) {
                            // Auto-generate slug from title if creating new
                            const slug = e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
                            setFormData(prev => ({ ...prev, slug }));
                        }
                    }}
                    required
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="slug">Slug</Label>
                <Input
                    id="slug"
                    name="slug"
                    value={formData.slug}
                    onChange={handleSlugChange}
                    required
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                    id="excerpt"
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                    rows={3}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Cyber Security">Cyber Security</SelectItem>
                        <SelectItem value="IT Infrastructure">IT Infrastructure</SelectItem>
                        <SelectItem value="Cloud Infrastructures">Cloud Infrastructures</SelectItem>
                        <SelectItem value="Artificial Intelligence">Artificial Intelligence</SelectItem>
                        <SelectItem value="Automation">Automation</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2">
                <Label>Content</Label>
                <ContentBuilder
                    initialContent={formData.content}
                    onChange={useCallback((newContent: any) => {
                        setFormData(prev => ({ ...prev, content: newContent }));
                    }, [])}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="featured_image">Featured Image URL</Label>
                <Input
                    id="featured_image"
                    name="featured_image"
                    value={formData.featured_image}
                    onChange={handleChange}
                />
            </div>

            <div className="flex items-center space-x-2">
                <Switch
                    id="published"
                    checked={formData.published}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, published: checked }))}
                />
                <Label htmlFor="published">Published</Label>
            </div>

            <div className="flex justify-end gap-4">
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.back()}
                    disabled={loading}
                >
                    Cancel
                </Button>
                <Button type="submit" disabled={loading}>
                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {post ? "Update Post" : "Create Post"}
                </Button>
            </div>
        </form>
    );
}
