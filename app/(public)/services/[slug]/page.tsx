import { notFound } from "next/navigation";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

// Mock Data - In a real app, this would come from Sanity/Strapi
const servicesData: Record<string, any> = {
    "infrastructure": {
        title: "IT Infrastructure Setup",
        description: "Robust physical and digital foundations for your enterprise.",
        features: ["Structured Cabling (Cat6/Fiber)", "Server Room Design", "Cooling & Power Management", "Access Control Systems"],
        content: "A solid IT infrastructure is the backbone of any modern business. We provide end-to-end services from planning to execution, ensuring your physical layer is future-proof and scalable."
    },
    "managed-it-amc": {
        title: "Managed IT Services (AMC)",
        description: "Proactive maintenance and support to keep your business running.",
        features: ["24/7 Helpdesk Support", "Remote Monitoring", "Patch Management", "Asset Tracking"],
        content: "Focus on your core business while we handle your IT operations. Our Annual Maintenance Contracts (AMC) are flexible and designed to minimize downtime."
    },
    "cyber-security": {
        title: "Cyber Security Solutions",
        description: "Protecting your digital assets from evolving threats.",
        features: ["Vulnerability Assessment (VAPT)", "Next-Gen Firewalls", "Endpoint Protection", "ISO 27001 Consulting"],
        content: "Security is not an option; it's a necessity. We deploy multi-layered security strategies to safeguard your data and ensure compliance with global standards."
    },
    "cloud-solutions": {
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure for the modern enterprise.",
        features: ["Cloud Migration Strategy", "AWS/Azure Management", "Hybrid Cloud Setup", "Cost Optimization"],
        content: "Leverage the power of the cloud to scale your business. Whether you need a public, private, or hybrid cloud setup, we have the expertise to guide you."
    },
    "remote-support": {
        title: "Remote IT Support",
        description: "Instant troubleshooting for your distributed workforce.",
        features: ["Screen Sharing Support", "Software Installation", "Email Configuration", "Virus Removal"],
        content: "Get instant help when you need it. Our remote support team can resolve 90% of software issues without an onsite visit, saving you time and money."
    },
};

interface PageProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const service = servicesData[params.slug];
    if (!service) return { title: "Service Not Found" };

    return {
        title: `${service.title} | Infeara Technologies`,
        description: service.description,
    };
}

export default function ServicePage({ params }: PageProps) {
    const service = servicesData[params.slug];

    if (!service) {
        notFound();
    }

    return (
        <>
            <section className="w-full py-20 bg-slate-950 text-white">
                <div className="container px-4 md:px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-heading mb-6">
                            {service.title}
                        </h1>
                        <p className="text-slate-400 md:text-xl/relaxed">
                            {service.description}
                        </p>
                    </div>
                </div>
            </section>

            <SectionWrapper>
                <div className="grid gap-12 lg:grid-cols-3">
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                {service.content}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Features</h2>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {service.features.map((feature: string, i: number) => (
                                    <div key={i} className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                                        <CheckCircle2 className="h-5 w-5 text-teal-500 flex-shrink-0" />
                                        <span className="text-slate-700 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <h3 className="font-bold text-xl mb-4">Interested in this service?</h3>
                            <p className="text-slate-500 mb-6 text-sm">
                                Get a customized quote based on your specific requirements.
                            </p>
                            <Button className="w-full bg-teal-600 hover:bg-teal-700" asChild>
                                <Link href="/contact">Request Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </div>

                        <div className="bg-slate-900 text-white p-6 rounded-xl">
                            <h3 className="font-bold text-xl mb-4">Related Services</h3>
                            <ul className="space-y-3">
                                {Object.entries(servicesData)
                                    .filter(([slug]) => slug !== params.slug)
                                    .slice(0, 3)
                                    .map(([slug, s]: [string, any]) => (
                                        <li key={slug}>
                                            <Link href={`/services/${slug}`} className="text-slate-400 hover:text-teal-400 text-sm flex items-center">
                                                <ArrowRight className="h-3 w-3 mr-2" />
                                                {s.title}
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
}
