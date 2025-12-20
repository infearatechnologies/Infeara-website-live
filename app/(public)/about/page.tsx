import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
    title: "About Infeara Technologies | IT Experts in Chennai",
    description: "Learn about Infeara Technologies, Chennai's leading IT infrastructure and security provider. Discover our mission, vision, and the team driving digital transformation.",
    openGraph: {
        title: "About Infeara Technologies | IT Experts in Chennai",
        description: "Infeara Technologies is a premier IT solutions provider in Chennai, specializing in Infrastructure, Security, and Cloud services.",
        url: "https://infeara.com/about",
        siteName: "Infeara Technologies",
        images: [
            {
                url: "https://infeara.com/office-culture.png",
                width: 1200,
                height: 630,
                alt: "Infeara Technologies Team",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

export default function AboutPage() {
    return <AboutContent />;
}
