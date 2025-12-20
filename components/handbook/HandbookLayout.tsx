"use client";

import Link from "next/link";
import { ChevronRight, BookOpen } from "lucide-react";

interface TocItem {
    id: string;
    label: string;
}

interface HandbookLayoutProps {
    title: string;
    description: string;
    updatedDate: string;
    tocItems: TocItem[];
    children: React.ReactNode;
}

import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function HandbookLayout({
    title,
    description,
    updatedDate,
    tocItems,
    children,
}: HandbookLayoutProps) {
    const [isOpen, setIsOpen] = useState(false);

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
                            <Link href="/careers" className="hover:text-primary transition-colors">Careers</Link>
                            <ChevronRight className="h-4 w-4" />
                            <span className="text-foreground font-medium">Handbook</span>
                        </div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                                <BookOpen className="h-6 w-6 text-orange-600" />
                            </div>
                            <span className="text-orange-600 font-semibold tracking-wide uppercase text-sm">The Infeara Way</span>
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
                    {/* Mobile TOC Trigger */}
                    <div className="lg:hidden col-span-1 sticky top-24 z-30 bg-background/80 backdrop-blur-md py-2 border-b border-border mb-4">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="outline" className="w-full justify-between">
                                    <span className="flex items-center gap-2">
                                        <Menu className="h-4 w-4" />
                                        Table of Contents
                                    </span>
                                    <ChevronRight className="h-4 w-4 rotate-90" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
                                <SheetTitle className="text-lg font-bold mb-4">Handbook Contents</SheetTitle>
                                <SheetDescription className="sr-only">Navigation for the handbook</SheetDescription>
                                <nav className="space-y-1">
                                    {tocItems.map((item) => (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            onClick={() => setIsOpen(false)}
                                            className="block py-3 px-3 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors border-l-2 border-transparent hover:border-primary"
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* Desktop Sidebar / Table of Contents */}
                    <aside className="lg:col-span-3 lg:block hidden">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h3 className="font-semibold text-foreground mb-4 uppercase tracking-wider text-sm">
                                    Contents
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
                                <h4 className="font-semibold mb-2">Have questions?</h4>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Reach out to the People Team for any clarifications.
                                </p>
                                <Link
                                    href="mailto:people@infeara.com"
                                    className="text-sm font-medium text-primary hover:underline"
                                >
                                    Contact People Team &rarr;
                                </Link>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="lg:col-span-9">
                        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:scroll-mt-32 prose-headings:font-extrabold prose-h2:text-3xl prose-h2:mt-20 prose-h2:mb-10 prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-p:leading-loose prose-p:mb-8 prose-li:leading-loose prose-li:mb-3 prose-ul:my-10">
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
