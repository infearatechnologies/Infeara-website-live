import { notFound } from "next/navigation";
import { createClient as createStaticClient } from "@supabase/supabase-js";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building2, CheckCircle2, ArrowRight } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
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
    const { data: caseStudies } = await supabase
        .from("case_studies")
        .select("slug");

    return caseStudies?.map((study) => ({
        slug: study.slug,
    })) || [];
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const supabase = await createClient();
    const { data: study } = await supabase
        .from("case_studies")
        .select("title, challenge")
        .eq("slug", slug)
        .single();

    if (!study) return { title: "Case Study Not Found" };

    return {
        title: `${study.title} | Infeara Case Studies`,
        description: study.challenge,
    };
}

export default async function CaseStudyPage({ params }: PageProps) {
    const { slug } = await params;
    const supabase = await createClient();
    const { data: study } = await supabase
        .from("case_studies")
        .select("*")
        .eq("slug", slug)
        .single();

    if (!study) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-background text-foreground font-sans">
            {/* Hero Section */}
            <header className="w-full pt-32 pb-12 bg-gradient-to-b from-secondary/30 to-background">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="mb-8">
                        <Link href="/resources/case-studies" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-orange-600 transition-colors mb-6 group">
                            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Case Studies
                        </Link>
                        <div className="flex flex-wrap gap-3 mb-4">
                            <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-100">
                                {study.industry || "Enterprise"}
                            </Badge>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight max-w-4xl">
                            {study.title}
                        </h1>
                        <div className="flex items-center gap-2 text-muted-foreground text-lg">
                            <Building2 className="h-5 w-5" />
                            <span className="font-medium">Client: {study.client || "Confidential"}</span>
                        </div>
                    </div>

                    {study.featured_image && (
                        <div className="rounded-2xl overflow-hidden shadow-xl border border-border aspect-[21/9] relative mb-12">
                            <img
                                src={study.featured_image}
                                alt={study.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}
                </div>
            </header>

            {/* Main Content */}
            <main className="container max-w-6xl mx-auto px-4 pb-24">
                <div className="grid lg:grid-cols-[1fr_350px] gap-12">
                    <div className="space-y-12">
                        {/* Key Results Mobile/Tablet (if needed) or distinct section */}
                        {/* Challenge */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <div className="h-8 w-1 bg-orange-600 rounded-full" />
                                The Challenge
                            </h2>
                            <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none text-muted-foreground">
                                <p>{study.challenge}</p>
                            </div>
                        </section>

                        {/* Solution */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <div className="h-8 w-1 bg-blue-600 rounded-full" />
                                The Solution
                            </h2>
                            <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none text-muted-foreground">
                                <p>{study.solution}</p>
                            </div>
                        </section>

                        {/* Detailed Content */}
                        {study.content && (
                            <section>
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <div className="h-8 w-1 bg-green-600 rounded-full" />
                                    Implementation Details
                                </h2>
                                <RichTextRenderer content={study.content} className="text-muted-foreground prose-lg md:prose-xl" />
                            </section>
                        )}
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        {/* Key Results moved to sidebar for vertical layout balance */}
                        <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-orange-600" /> Key Results
                            </h3>
                            <div className="space-y-6">
                                {(() => {
                                    const res = study.results;
                                    if (typeof res === 'string') {
                                        return <div className="text-xl md:text-2xl font-bold text-orange-600">{res}</div>;
                                    }
                                    if (Array.isArray(res) && res.length > 0) {
                                        return res.map((result: any, index: number) => (
                                            <div key={index}>
                                                <div className="text-3xl font-bold text-orange-600 mb-1">{result.value}</div>
                                                <div className="text-sm text-muted-foreground">{result.label}</div>
                                            </div>
                                        ));
                                    }
                                    if (typeof res === 'object' && res !== null) {
                                        return (
                                            <div>
                                                <div className="text-3xl font-bold text-orange-600 mb-1">{res.value}</div>
                                                <div className="text-sm text-muted-foreground">{res.label}</div>
                                            </div>
                                        );
                                    }
                                    return <p className="text-muted-foreground text-sm italic">Detailed results available in full case study.</p>;
                                })()}
                            </div>
                        </div>

                        <div className="bg-secondary/30 rounded-2xl p-6 border border-border">
                            <h3 className="font-bold mb-4">Services Used</h3>
                            <ul className="space-y-2">
                                {/* Placeholder services as they are not in schema yet */}
                                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <CheckCircle2 className="h-4 w-4 text-orange-600 mt-0.5" />
                                    IT Infrastructure
                                </li>
                                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <CheckCircle2 className="h-4 w-4 text-orange-600 mt-0.5" />
                                    Security Audit
                                </li>
                            </ul>
                        </div>

                        <div className="bg-orange-600 text-white rounded-2xl p-6 shadow-xl">
                            <h3 className="font-bold text-xl mb-2">Ready for similar results?</h3>
                            <p className="text-orange-100 text-sm mb-6">
                                Contact us today to discuss how we can help transform your business.
                            </p>
                            <Button variant="secondary" className="w-full font-bold text-orange-700" asChild>
                                <Link href="/contact">
                                    Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </aside>
                </div>
            </main>
        </article>
    );
}
