import { notFound } from "next/navigation";
import { createClient as createStaticClient } from "@supabase/supabase-js";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Download, Lock, Unlock } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { GatedDownloadForm } from "@/components/resources/downloads/gated-download-form";
import { RichTextRenderer } from "@/components/rich-text-renderer";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const supabase = createStaticClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const { data: downloads } = await supabase
        .from("downloads")
        .select("slug");

    return downloads?.map((d) => ({
        slug: d.slug,
    })) || [];
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const supabase = await createClient();
    const { data: download } = await supabase
        .from("downloads")
        .select("title, description")
        .eq("slug", slug)
        .single();

    if (!download) return { title: "Resource Not Found" };

    return {
        title: `${download.title} | Infeara Resources`,
        description: download.description,
    };
}

export default async function DownloadPage({ params }: PageProps) {
    const { slug } = await params;
    const supabase = await createClient();
    const { data: download } = await supabase
        .from("downloads")
        .select("*")
        .eq("slug", slug)
        .single();

    if (!download) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-background text-foreground font-sans">
            <header className="w-full pt-32 pb-16 bg-gradient-to-b from-secondary/30 to-background">
                <div className="container max-w-5xl mx-auto px-4">
                    <div className="mb-8">
                        <Link href="/resources/downloads" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-orange-600 transition-colors mb-8 group">
                            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Downloads
                        </Link>
                        <div className="flex justify-start">
                            <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-100 px-3 py-1 text-xs font-bold rounded-full gap-1">
                                {download.gated ? <Lock className="h-3 w-3" /> : <Unlock className="h-3 w-3" />}
                                {download.gated ? "Gated Resource" : "Public Resource"}
                            </Badge>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-[1fr_350px] gap-12 items-start">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
                                {download.title}
                            </h1>
                            <div className="prose prose-lg md:prose-xl max-w-none dark:prose-invert mb-8">
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    {download.description}
                                </p>
                                <RichTextRenderer content={download.content} />
                            </div>

                            <div className="flex items-center gap-4 text-sm text-muted-foreground bg-secondary/20 p-4 rounded-lg border border-border/50 inline-flex">
                                <FileText className="h-5 w-5 text-orange-600" />
                                <span>Digital Resource</span>
                            </div>
                        </div>

                        <div>
                            {download.gated ? (
                                <GatedDownloadForm
                                    downloadId={download.id}
                                    downloadTitle={download.title}
                                    fileUrl={download.file_url}
                                />
                            ) : (
                                <div className="bg-card border border-border rounded-xl p-6 shadow-sm text-center">
                                    <h3 className="text-xl font-bold mb-4">Download Now</h3>
                                    <p className="text-muted-foreground mb-6 text-sm">
                                        Click the button below to access this resource directly.
                                    </p>
                                    <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                                        <a href={download.file_url} target="_blank" rel="noopener noreferrer">
                                            Download File <Download className="ml-2 h-4 w-4" />
                                        </a>
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </article>
    );
}
