'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { ContentBuilder } from "@/components/admin/content-builder";
import { Loader2, Save, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface JobFormProps {
    initialData?: any;
    isEditing?: boolean;
}

export function JobForm({ initialData, isEditing = false }: JobFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        title: initialData?.title || '',
        slug: initialData?.slug || '',
        location: initialData?.location || '',
        type: initialData?.type || 'Full-time',
        department: initialData?.department || '',
        salary_range: initialData?.salary_range || '',
        description: initialData?.description || [],
        is_active: initialData?.is_active ?? true,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Auto-generate slug from title if creating new
        if (name === 'title' && !isEditing) {
            setFormData(prev => ({
                ...prev,
                slug: value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
            }));
        }
    };

    const handleContentChange = useCallback((content: any) => {
        setFormData(prev => ({ ...prev, description: content }));
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const supabase = createClient();

            const dataToSave = {
                ...formData,
                updated_at: new Date().toISOString(),
            };

            let error;

            if (isEditing) {
                const { error: updateError } = await supabase
                    .from('jobs')
                    .update(dataToSave)
                    .eq('id', initialData.id);
                error = updateError;
            } else {
                const { error: insertError } = await supabase
                    .from('jobs')
                    .insert([dataToSave]);
                error = insertError;
            }

            if (error) throw error;

            router.push('/admin/jobs');
            router.refresh();
        } catch (error: any) {
            console.error('Error saving job:', error);
            setError(error.message || 'Failed to save job');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8 max-w-5xl mx-auto">
            {error && (
                <div className="bg-destructive/15 text-destructive px-4 py-3 rounded-md border border-destructive/20">
                    {error}
                </div>
            )}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/admin/jobs">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <h1 className="text-2xl font-bold">{isEditing ? 'Edit Job' : 'New Job'}</h1>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <Switch
                            id="is_active"
                            checked={formData.is_active}
                            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_active: checked }))}
                        />
                        <Label htmlFor="is_active">Active</Label>
                    </div>
                    <Button type="submit" disabled={loading}>
                        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        <Save className="mr-2 h-4 w-4" />
                        Save Job
                    </Button>
                </div>
            </div>

            <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-6">
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="title">Job Title</Label>
                            <Input
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                                placeholder="e.g. Senior Frontend Engineer"
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="slug">Slug</Label>
                            <Input
                                id="slug"
                                name="slug"
                                value={formData.slug}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label>Job Description</Label>
                            <ContentBuilder
                                initialContent={formData.description}
                                onChange={handleContentChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="p-6 border rounded-lg space-y-4 bg-card">
                        <h3 className="font-semibold">Job Details</h3>

                        <div className="grid gap-2">
                            <Label htmlFor="department">Department</Label>
                            <Input
                                id="department"
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                                placeholder="e.g. Engineering"
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="location">Location</Label>
                            <Input
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                placeholder="e.g. Remote, New York"
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="type">Employment Type</Label>
                            <select
                                id="type"
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Contract">Contract</option>
                                <option value="Freelance">Freelance</option>
                                <option value="Internship">Internship</option>
                            </select>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="salary_range">Salary Range</Label>
                            <Input
                                id="salary_range"
                                name="salary_range"
                                value={formData.salary_range}
                                onChange={handleChange}
                                placeholder="e.g. $120k - $150k"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
