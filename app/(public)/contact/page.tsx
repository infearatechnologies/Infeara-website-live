import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
    title: "Contact Infeara Technologies | IT Support in Chennai",
    description: "Get in touch with Infeara Technologies for expert IT support, consulting, and outsourcing services in Chennai. We are available 24/7.",
    openGraph: {
        title: "Contact Infeara Technologies | IT Support in Chennai",
        description: "Ready to transform your digital infrastructure? Contact Infeara Technologies today for a free consultation.",
        url: "https://infeara.com/contact",
        siteName: "Infeara Technologies",
        locale: "en_US",
        type: "website",
    },
};

export default function ContactPage() {
    return <ContactContent />;
}
