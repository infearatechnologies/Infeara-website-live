"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { servicesData } from "@/data/services";
import { ArrowRight, FileText, Map } from "lucide-react";
import Link from "next/link";

export default function SitemapPage() {
    return (
        <>
            <section className="w-full py-20 bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-heading mb-6">
                            Sitemap
                        </h1>
                        <p className="text-slate-400 text-lg">
                            A complete overview of our website structure and available pages.
                        </p>
                    </div>
                </div>
            </section>

            <SectionWrapper>
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {/* Main Pages */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-xl font-bold text-foreground">
                            <Map className="w-5 h-5 text-orange-500" />
                            <h3>Main Navigation</h3>
                        </div>
                        <ul className="space-y-3 pl-2 border-l-2 border-border">
                            <li><Link href="/" className="block text-muted-foreground hover:text-orange-600 hover:translate-x-1 transition-all">Home</Link></li>
                            <li><Link href="/about" className="block text-muted-foreground hover:text-orange-600 hover:translate-x-1 transition-all">About Us</Link></li>
                            <li><Link href="/careers" className="block text-muted-foreground hover:text-orange-600 hover:translate-x-1 transition-all">Careers</Link></li>
                            <li><Link href="/contact" className="block text-muted-foreground hover:text-orange-600 hover:translate-x-1 transition-all">Contact Us</Link></li>

                        </ul>
                    </div>

                    {/* Services (Dynamic) */}
                    <div className="space-y-6 md:col-span-2 lg:col-span-2">
                        <div className="flex items-center gap-2 text-xl font-bold text-foreground">
                            <ArrowRight className="w-5 h-5 text-orange-500" />
                            <h3>Our Services</h3>
                        </div>
                        <div className="grid gap-8 md:grid-cols-2">
                            {Object.entries(servicesData).map(([categorySlug, services]) => (
                                <div key={categorySlug} className="space-y-3">
                                    <h4 className="font-semibold text-foreground capitalize border-b border-border pb-2">
                                        {categorySlug.replace('-', ' ')}
                                    </h4>
                                    <ul className="space-y-2 pl-2">
                                        {Object.entries(services).map(([serviceSlug, service]) => (
                                            <li key={serviceSlug}>
                                                <Link
                                                    href={`/services/${categorySlug}/${serviceSlug}`}
                                                    className="block text-sm text-muted-foreground hover:text-orange-600 hover:translate-x-1 transition-all"
                                                >
                                                    {service.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Resources & Legal */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-xl font-bold text-foreground">
                            <FileText className="w-5 h-5 text-orange-500" />
                            <h3>Resources & Legal</h3>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-semibold text-foreground mb-3">Resources</h4>
                                <ul className="space-y-2 pl-2 border-l-2 border-border">
                                    <li><Link href="/resources/blog" className="block text-muted-foreground hover:text-orange-600 hover:translate-x-1 transition-all">Blog</Link></li>
                                    <li><Link href="/resources/case-studies" className="block text-muted-foreground hover:text-orange-600 hover:translate-x-1 transition-all">Case Studies</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-foreground mb-3">Legal</h4>
                                <ul className="space-y-2 pl-2 border-l-2 border-border">
                                    <li><Link href="/legal/privacy-policy" className="block text-muted-foreground hover:text-orange-600 hover:translate-x-1 transition-all">Privacy Policy</Link></li>
                                    <li><Link href="/legal/terms-of-service" className="block text-muted-foreground hover:text-orange-600 hover:translate-x-1 transition-all">Terms of Service</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Client Portal */}

                </div>
            </SectionWrapper>
        </>
    );
}
