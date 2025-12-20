import { notFound } from "next/navigation";
import { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

const category = "audit-compliance";

export async function generateStaticParams() {
    const services = servicesData[category];
    return Object.keys(services).map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = servicesData[category][slug];
    if (!service) return { title: "Service Not Found" };

    return {
        title: `${service.title} | Infeara Technologies`,
        description: service.description,
        keywords: service.keywords,
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData[category][slug];

    if (!service) {
        notFound();
    }

    return <ServicePageTemplate service={service} />;
}
