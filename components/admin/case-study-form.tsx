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
import { Loader2, Plus, Trash2 } from "lucide-react";
import { ContentBuilder } from "@/components/admin/content-builder";
import { AIAssistantModal } from "@/components/admin/ai-assistant-modal";

interface CaseStudyFormProps {
    caseStudy?: any;
}

export function CaseStudyForm({ caseStudy }: CaseStudyFormProps) {
    const router = useRouter();
    const supabase = createClient();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        title: caseStudy?.title || "",
        slug: caseStudy?.slug || "",
        client: caseStudy?.client || "",
        industry: caseStudy?.industry || "",
        challenge: caseStudy?.challenge || "",
        solution: caseStudy?.solution || "",
        content: caseStudy?.content || null,
        category: caseStudy?.category || "",
        featured_image: caseStudy?.featured_image || "",
        results: caseStudy?.results || [{ label: "", value: "" }],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
        setFormData((prev) => ({ ...prev, slug: value }));
    };

    const handleResultChange = (index: number, field: "label" | "value", value: string) => {
        const newResults = [...formData.results];
        newResults[index][field] = value;
        setFormData((prev) => ({ ...prev, results: newResults }));
    };

    const addResult = () => {
        setFormData((prev) => ({ ...prev, results: [...prev.results, { label: "", value: "" }] }));
    };

    const removeResult = (index: number) => {
        setFormData((prev) => ({ ...prev, results: prev.results.filter((_: any, i: number) => i !== index) }));
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

            const data = {
                title: formData.title,
                slug: formData.slug,
                client: formData.client,
                industry: formData.industry,
                challenge: formData.challenge,
                solution: formData.solution,
                content: contentJson,
                category: formData.category,
                featured_image: formData.featured_image,
                results: formData.results.filter((r: any) => r.label && r.value),
                updated_at: new Date().toISOString(),
            };

            if (caseStudy) {
                const { error } = await supabase
                    .from("case_studies")
                    .update(data)
                    .eq("id", caseStudy.id);
                if (error) throw error;
            } else {
                const { error } = await supabase
                    .from("case_studies")
                    .insert([data]);
                if (error) throw error;
            }

            router.push("/admin/case-studies");
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
                        challenge: data.excerpt, // Map excerpt to challenge as a starting point
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
                        if (!caseStudy) {
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

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="client">Client</Label>
                    <Input
                        id="client"
                        name="client"
                        value={formData.client}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Input
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                    />
                </div>
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
                <Label htmlFor="challenge">Challenge</Label>
                <Textarea
                    id="challenge"
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleChange}
                    rows={3}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="solution">Solution</Label>
                <Textarea
                    id="solution"
                    name="solution"
                    value={formData.solution}
                    onChange={handleChange}
                    rows={3}
                />
            </div>

            <div className="space-y-2">
                <Label>Results (Key Metrics)</Label>
                {formData.results.map((result: any, index: number) => (
                    <div key={index} className="flex gap-2 items-start">
                        <Input
                            placeholder="Label (e.g. Increase in Sales)"
                            value={result.label}
                            onChange={(e) => handleResultChange(index, "label", e.target.value)}
                        />
                        <Input
                            placeholder="Value (e.g. 50%)"
                            value={result.value}
                            onChange={(e) => handleResultChange(index, "value", e.target.value)}
                        />
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeResult(index)}
                            disabled={formData.results.length === 1}
                        >
                            <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                    </div>
                ))}
                <Button type="button" variant="outline" size="sm" onClick={addResult}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Result
                </Button>
            </div>

            <div className="space-y-2">
                <Label>Detailed Content</Label>
                <ContentBuilder
                    initialContent={formData.content}
                    onChange={handleContentChange}
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
                    {caseStudy ? "Update Case Study" : "Create Case Study"}
                </Button>
            </div>
        </form>
    );
}
