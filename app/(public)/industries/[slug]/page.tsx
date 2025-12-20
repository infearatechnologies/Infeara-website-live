import { notFound } from "next/navigation";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, ShieldCheck, Server, Zap, Users, Clock, Globe, Lock, Database } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { industriesData } from "@/data/industries";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return Object.keys(industriesData).map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const industry = industriesData[slug];
    if (!industry) return { title: "Industry Not Found" };

    return {
        title: `${industry.title} | Infeara Technologies`,
        description: industry.overview.substring(0, 160),
    };
}

export default async function IndustryPage({ params }: PageProps) {
    const { slug } = await params;
    const industry = industriesData[slug];

    if (!industry) {
        notFound();
    }

    const Icon = industry.icon;

    return (
        <>
            {/* Hero Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-transparent text-foreground relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent -z-10" />
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
                        <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
                            <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-500/10 px-4 py-1.5 text-sm font-semibold text-orange-700 w-fit mx-auto lg:mx-0">
                                <Icon className="mr-2 h-4 w-4" /> Industry Solutions
                            </div>
                            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-4 leading-tight">
                                {industry.title}
                            </h1>
                            <p className="text-lg text-muted-foreground md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
                                {industry.overview}
                            </p>
                        </div>
                        <div className="mx-auto w-full max-w-[600px] lg:max-w-none">
                            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500 border border-white/20">
                                <Image
                                    src={industry.heroImage}
                                    alt={industry.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problems & Solutions Grid */}
            <SectionWrapper className="bg-secondary/30 backdrop-blur-sm rounded-3xl mb-20">
                <div className="grid gap-16 lg:grid-cols-2 items-start">
                    {/* Problems */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 bg-red-100 rounded-lg">
                                <Zap className="h-6 w-6 text-red-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-foreground">Common Challenges</h2>
                        </div>
                        <ul className="space-y-4">
                            {industry.problems.map((problem: string, i: number) => (
                                <li key={i} className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-red-100 shadow-sm hover:shadow-md transition-shadow">
                                    <span className="text-red-500 font-bold mt-0.5">•</span>
                                    <span className="text-foreground font-medium">{problem}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 bg-green-100 rounded-lg">
                                <ShieldCheck className="h-6 w-6 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-foreground">Our Solutions</h2>
                        </div>
                        <ul className="space-y-4">
                            {industry.solutions.map((solution: string, i: number) => (
                                <li key={i} className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-foreground font-medium">{solution}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </SectionWrapper>

            {/* Tools & Compliance */}
            <SectionWrapper className="mb-20">
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Tools */}
                    <div className="bg-white p-8 rounded-3xl border border-border shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <Server className="h-6 w-6 text-orange-600" />
                            <h3 className="text-xl font-bold">Tools & Technologies</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {industry.tools.map((tool: string, i: number) => (
                                <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium border border-border">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Compliance */}
                    <div className="bg-white p-8 rounded-3xl border border-border shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <Lock className="h-6 w-6 text-orange-600" />
                            <h3 className="text-xl font-bold">Compliance & Standards</h3>
                        </div>
                        <ul className="space-y-2">
                            {industry.compliance.map((item: string, i: number) => (
                                <li key={i} className="flex items-center gap-2 text-foreground font-medium">
                                    <CheckCircle2 className="h-4 w-4 text-orange-600" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </SectionWrapper>

            {/* Engagement & Use Case */}
            <SectionWrapper className="bg-orange-900 text-white rounded-3xl mb-20 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="grid gap-12 lg:grid-cols-2 relative z-10 p-8 md:p-12">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <Users className="h-6 w-6 text-orange-400" />
                            <h3 className="text-2xl font-bold">How We Work With You</h3>
                        </div>
                        <p className="text-orange-100 text-lg leading-relaxed mb-8">
                            {industry.engagementModel}
                        </p>

                        <div className="flex items-center gap-3 mb-6">
                            <Clock className="h-6 w-6 text-orange-400" />
                            <h3 className="text-2xl font-bold">Success Story</h3>
                        </div>
                        <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
                            <div className="relative aspect-video w-full mb-6 rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src={industry.featureImage}
                                    alt={industry.useCase.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h4 className="font-bold text-lg mb-2 text-orange-300">{industry.useCase.title}</h4>
                            <p className="text-orange-50 leading-relaxed">
                                "{industry.useCase.description}"
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-8">Key Benefits</h3>
                        <div className="grid gap-4">
                            {industry.benefits.map((benefit: string, i: number) => (
                                <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="h-5 w-5 text-white" />
                                    </div>
                                    <span className="font-medium text-lg">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* CTA Section */}
            <section className="w-full py-24 bg-transparent text-center">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6">Ready to transform your {industry.title}?</h2>
                        <p className="text-xl text-muted-foreground mb-10">
                            {industry.cta}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-orange-600 text-white hover:bg-orange-700 font-bold px-8 h-12 text-lg rounded-full" asChild>
                                <Link href="/contact">
                                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-orange-200 text-orange-700 hover:bg-orange-50 font-bold px-8 h-12 text-lg rounded-full" asChild>
                                <Link href="/services">
                                    Explore Services
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
