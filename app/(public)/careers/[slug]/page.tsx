import React from "react";
import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Briefcase, Clock, DollarSign } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const supabase = await createClient();
    const { data: job } = await supabase
        .from('jobs')
        .select('title')
        .eq('slug', slug)
        .single();

    if (!job) {
        return {
            title: 'Job Not Found',
        };
    }

    return {
        title: `${job.title} - Careers at Infeara`,
    };
}

export default async function JobPage({ params }: PageProps) {
    const { slug } = await params;
    const supabase = await createClient();
    const { data: job } = await supabase
        .from('jobs')
        .select('*')
        .eq('slug', slug)
        .eq('is_active', true)
        .single();

    if (!job) {
        notFound();
    }

    // Helper to render block content (simplified for now, assuming standard structure)
    const renderContent = (content: any) => {
        if (!content || !content.root || !content.root.children) return null;

        return content.root.children.map((block: any, index: number) => {
            if (block.type === 'paragraph') {
                return (
                    <p key={index} className="mb-6 text-muted-foreground leading-relaxed text-lg whitespace-pre-wrap">
                        {block.children?.map((child: any) => child.text).join('')}
                    </p>
                );
            }
            if (block.type === 'heading') {
                const level = block.level || 2;
                const Tag = `h${level}` as React.ElementType;
                const sizes = {
                    1: "text-3xl md:text-4xl",
                    2: "text-2xl md:text-3xl",
                    3: "text-xl md:text-2xl"
                };
                return (
                    <Tag key={index} className={`font-bold mt-12 mb-6 text-foreground ${sizes[level as 1 | 2 | 3] || "text-xl"}`}>
                        {block.children?.map((child: any) => child.text).join('')}
                    </Tag>
                );
            }
            if (block.type === 'image') {
                return (
                    <figure key={index} className="my-10">
                        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-secondary/20">
                            <img
                                src={block.src}
                                alt={block.alt || ''}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        {block.caption && (
                            <figcaption className="mt-3 text-center text-sm text-muted-foreground italic">
                                {block.caption}
                            </figcaption>
                        )}
                    </figure>
                );
            }
            if (block.type === 'list') {
                const Tag = (block.listType === 'ordered' ? 'ol' : 'ul') as React.ElementType;
                return (
                    <Tag key={index} className={`mb-6 pl-6 space-y-2 ${block.listType === 'ordered' ? 'list-decimal' : 'list-disc'}`}>
                        {block.children?.map((item: any, i: number) => (
                            <li key={i} className="text-muted-foreground text-lg pl-2">
                                {item.children?.map((child: any) => child.text).join('')}
                            </li>
                        ))}
                    </Tag>
                );
            }
            return null;
        });
    };

    return (
        <div className="min-h-screen bg-background py-24">
            <div className="container mx-auto max-w-4xl px-4 md:px-6">
                <Link href="/careers" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Careers
                </Link>

                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{job.title}</h1>
                        <div className="flex flex-wrap gap-4 text-muted-foreground">
                            <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1">
                                <Briefcase className="h-3 w-3" />
                                {job.department}
                            </Badge>
                            <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1">
                                <MapPin className="h-3 w-3" />
                                {job.location}
                            </Badge>
                            <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1">
                                <Clock className="h-3 w-3" />
                                {job.type}
                            </Badge>
                            {job.salary_range && (
                                <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1">
                                    <DollarSign className="h-3 w-3" />
                                    {job.salary_range}
                                </Badge>
                            )}
                        </div>
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        {renderContent(job.description)}
                    </div>

                    <div className="border-t pt-8 mt-12">
                        <div className="bg-muted/30 rounded-2xl p-8 text-center space-y-6">
                            <h3 className="text-2xl font-bold">Interested in this role?</h3>
                            <p className="text-muted-foreground max-w-xl mx-auto">
                                We'd love to hear from you. Send us your resume and a brief introduction telling us why you'd be a great fit.
                            </p>
                            <Button size="lg" className="text-lg px-8" asChild>
                                <Link href="/contact">
                                    Apply for this Position
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
