"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface TocItem {
    id: string;
    label: string;
}

interface LegalPageLayoutProps {
    title: string;
    description: string;
    updatedDate: string;
    tocItems: TocItem[];
    children: React.ReactNode;
}

export default function LegalPageLayout({
    title,
    description,
    updatedDate,
    tocItems,
    children,
}: LegalPageLayoutProps) {
    return (
        <div className="min-h-screen bg-background pt-20">
            {/* Hero Section */}
            <section className="relative py-20 md:py-24 bg-slate-50 dark:bg-slate-900/50 border-b border-border overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                            <ChevronRight className="h-4 w-4" />
                            <span className="text-foreground">Legal</span>
                            <ChevronRight className="h-4 w-4" />
                            <span className="text-foreground font-medium">{title}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
                            {title}
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Sidebar / Table of Contents */}
                    <aside className="lg:col-span-3 lg:block hidden">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h3 className="font-semibold text-foreground mb-4 uppercase tracking-wider text-sm">
                                    Table of Contents
                                </h3>
                                <nav className="space-y-1">
                                    {tocItems.map((item) => (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className="block py-2 px-3 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors border-l-2 border-transparent hover:border-primary"
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div className="p-6 bg-secondary/50 rounded-xl border border-border">
                                <h4 className="font-semibold mb-2">Need help?</h4>
                                <p className="text-sm text-muted-foreground mb-4">
                                    If you have any questions about our legal policies, please contact us.
                                </p>
                                <Link
                                    href="/contact"
                                    className="text-sm font-medium text-primary hover:underline"
                                >
                                    Contact Support &rarr;
                                </Link>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="lg:col-span-9">
                        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:scroll-mt-32 prose-headings:font-bold prose-h2:text-3xl prose-h3:text-xl prose-p:leading-relaxed prose-li:leading-relaxed">
                            {children}

                            <div className="mt-16 pt-8 border-t border-border">
                                <p className="text-sm text-muted-foreground">
                                    Last Updated: {updatedDate}
                                </p>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
