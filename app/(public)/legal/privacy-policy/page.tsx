import LegalPageLayout from "@/components/legal/LegalPageLayout";
import Link from "next/link";

export default function PrivacyPolicyPage() {
    const tocItems = [
        { id: "information-collection", label: "1. Information We Collect" },
        { id: "information-usage", label: "2. How We Use Your Information" },
        { id: "data-security", label: "3. Data Security" },
        { id: "third-party-services", label: "4. Third-Party Services" },
        { id: "policy-updates", label: "5. Updates to This Policy" },
        { id: "contact-us", label: "6. Contact Us" },
    ];

    return (
        <LegalPageLayout
            title="Privacy Policy"
            description="Your privacy is important to us. This policy explains how we collect, use, and protect your personal information."
            updatedDate="December 2025"
            tocItems={tocItems}
        >
            <p className="lead">
                At Infeara, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines our practices regarding data collection, usage, and protection.
            </p>

            <h2 id="information-collection">1. Information We Collect</h2>
            <p>
                We may collect personal information such as your name, email address, phone number, and company details when you fill out forms on our website, subscribe to our newsletter, or contact us for services.
            </p>

            <h2 id="information-usage">2. How We Use Your Information</h2>
            <p>
                We use the information we collect to:
            </p>
            <ul>
                <li>Provide and improve our services.</li>
                <li>Communicate with you regarding inquiries and updates.</li>
                <li>Send relevant marketing materials (you can opt-out at any time).</li>
                <li>Comply with legal obligations.</li>
            </ul>

            <h2 id="data-security">3. Data Security</h2>
            <p>
                We implement industry-standard security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2 id="third-party-services">4. Third-Party Services</h2>
            <p>
                We may use third-party services (e.g., analytics, payment processors) that collect and process data. These services have their own privacy policies, which we encourage you to review.
            </p>

            <h2 id="policy-updates">5. Updates to This Policy</h2>
            <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>

            <h2 id="contact-us">6. Contact Us</h2>
            <p>
                If you have any questions about this Privacy Policy, please contact us via our <Link href="/contact" className="text-primary hover:underline">Contact Page</Link>.
            </p>
        </LegalPageLayout>
    );
}
