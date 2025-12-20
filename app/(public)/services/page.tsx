import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
    title: "IT Services & Solutions | Infeara Technologies",
    description: "Explore our comprehensive IT services including VAPT, Managed IT, Cloud Solutions, and AI Automation. Tailored for businesses in Chennai and beyond.",
    openGraph: {
        title: "IT Services & Solutions | Infeara Technologies",
        description: "Comprehensive IT services: VAPT, Managed IT, Cloud Solutions, and AI Automation. Tailored for businesses in Chennai and beyond.",
        url: "https://infeara.com/services",
        siteName: "Infeara Technologies",
        locale: "en_US",
        type: "website",
    },
};

export default function ServicesPage() {
    return <ServicesContent />;
}
