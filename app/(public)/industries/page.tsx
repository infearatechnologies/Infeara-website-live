import Link from "next/link";
import { industriesData } from "@/data/industries";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";

export const metadata = {
    title: "Industries We Serve | Infeara Technologies",
    description: "Specialized IT, security, and infrastructure solutions tailored for Education, SaaS, Healthcare, Retail, and more.",
};

export default function IndustriesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="w-full py-24 bg-transparent text-foreground relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent -z-10" />
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-600 mb-6">
                            Industry Expertise
                        </div>
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-heading mb-6">
                            Tailored IT Solutions for Your Sector
                        </h1>
                        <p className="text-muted-foreground md:text-xl/relaxed max-w-2xl mx-auto">
                            We understand the unique challenges of your industry. From compliance-heavy healthcare to fast-moving startups, we have the expertise to help you succeed.
                        </p>
                    </div>
                </div>
            </section>

            {/* Industries Grid */}
            <SectionWrapper className="mb-20">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {Object.values(industriesData).map((industry) => {
                        const Icon = industry.icon;
                        return (
                            <Link
                                key={industry.slug}
                                href={`/industries/${industry.slug}`}
                                className="group relative overflow-hidden rounded-3xl bg-white border border-border p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Icon className="h-24 w-24 text-orange-600" />
                                </div>
                                <div className="relative z-10">
                                    <div className="h-12 w-12 rounded-xl bg-orange-100 flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                                        <Icon className="h-6 w-6 text-orange-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">{industry.title}</h3>
                                    <p className="text-muted-foreground mb-6 line-clamp-3">
                                        {industry.overview}
                                    </p>
                                    <div className="flex items-center text-orange-600 font-bold text-sm group-hover:translate-x-1 transition-transform">
                                        View Solutions <ArrowRight className="ml-2 h-4 w-4" />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </SectionWrapper>

            {/* CTA Section */}
            <section className="w-full py-24 bg-orange-900 text-white text-center">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6">Don't see your industry?</h2>
                        <p className="text-xl text-orange-100 mb-10">
                            Our core expertise in Security, Cloud, and Infrastructure applies to almost every sector. Let's discuss your specific challenges.
                        </p>
                        <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 h-12 text-lg rounded-full" asChild>
                            <Link href="/contact">
                                Talk to an Expert <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
