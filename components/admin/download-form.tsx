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

interface DownloadFormProps {
    download?: any;
}

export function DownloadForm({ download }: DownloadFormProps) {
    const router = useRouter();
    const supabase = createClient();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        title: download?.title || "",
        slug: download?.slug || "",
        description: download?.description || "",
        content: download?.content || null,
        category: download?.category || "",
        file_url: download?.file_url || "",
        cover_image: download?.cover_image || "",
        gated: download?.gated ?? true,
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
            const data = {
                title: formData.title,
                slug: formData.slug,
                description: formData.description,
                content: formData.content || { root: { children: [] } },
                category: formData.category,
                file_url: formData.file_url,
                cover_image: formData.cover_image,
                gated: formData.gated,
                updated_at: new Date().toISOString(),
            };

            if (download) {
                const { error } = await supabase
                    .from("downloads")
                    .update(data)
                    .eq("id", download.id);
                if (error) throw error;
            } else {
                const { error } = await supabase
                    .from("downloads")
                    .insert([data]);
                if (error) throw error;
            }

            router.push("/admin/downloads");
            router.refresh();
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleContentChange = useCallback((newContent: any) => {
        setFormData(prev => ({ ...prev, content: newContent }));
    }, []);

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
            {error && (
                <div className="bg-red-50 text-red-500 p-4 rounded-md">
                    {error}
                </div>
            )}

            <div className="flex justify-end">
                <AIAssistantModal onGenerate={(data) => {
                    setFormData(prev => ({
                        ...prev,
                        title: data.title,
                        slug: data.slug || data.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, ""),
                        description: data.excerpt,
                        content: data.content
                    }));
                }} />
            </div>

            <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={(e) => {
                        handleChange(e);
                        if (!download) {
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
                <Label htmlFor="description">Description</Label>
                <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <select
                    id="category"
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                >
                    <option value="" disabled>Select a category</option>
                    <option value="Cyber Security">Cyber Security</option>
                    <option value="IT Infrastructure">IT Infrastructure</option>
                    <option value="Cloud Infrastructures">Cloud Infrastructures</option>
                    <option value="Artificial Intelligence">Artificial Intelligence</option>
                    <option value="Automation">Automation</option>
                </select>
            </div>

            <div className="space-y-2">
                <Label>Detailed Content</Label>
                <ContentBuilder
                    initialContent={formData.content}
                    onChange={handleContentChange}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="file_url">File URL</Label>
                <Input
                    id="file_url"
                    name="file_url"
                    value={formData.file_url}
                    onChange={handleChange}
                    placeholder="https://..."
                />
                <p className="text-xs text-muted-foreground">
                    Link to the file (PDF, etc.)
                </p>
            </div>

            <div className="space-y-2">
                <Label htmlFor="cover_image">Cover Image URL</Label>
                <Input
                    id="cover_image"
                    name="cover_image"
                    value={formData.cover_image}
                    onChange={handleChange}
                />
            </div>

            <div className="flex items-center space-x-2">
                <Switch
                    id="gated"
                    checked={formData.gated}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, gated: checked }))}
                />
                <Label htmlFor="gated">Gated Content (Require Form Fill)</Label>
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
                    {download ? "Update Download" : "Create Download"}
                </Button>
            </div>
        </form>
    );
}
