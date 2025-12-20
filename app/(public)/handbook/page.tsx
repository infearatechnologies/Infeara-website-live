import type { Metadata } from "next";
import HandbookContent from "./HandbookContent";

export const metadata: Metadata = {
    title: "Employee Handbook | Infeara Technologies",
    description: "Read the Infeara Technologies Employee Handbook. Understand our remote-first culture, policies, benefits, and commitment to compliance.",
    openGraph: {
        title: "Employee Handbook | Infeara Technologies",
        description: "Our comprehensive guide to life at Infeara. Culture, policies, and commitment to a fair, compliant, and thriving remote workplace.",
        url: "https://infeara.com/handbook",
        siteName: "Infeara Technologies",
        locale: "en_US",
        type: "website",
    },
};

export default function HandbookPage() {
    return <HandbookContent />;
}
