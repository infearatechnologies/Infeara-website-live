import LegalPageLayout from "@/components/legal/LegalPageLayout";
import Link from "next/link";

export default function TermsOfServicePage() {
    const tocItems = [
        { id: "services", label: "1. Services" },
        { id: "user-responsibilities", label: "2. User Responsibilities" },
        { id: "intellectual-property", label: "3. Intellectual Property" },
        { id: "limitation-liability", label: "4. Limitation of Liability" },
        { id: "governing-law", label: "5. Governing Law" },
        { id: "changes-terms", label: "6. Changes to Terms" },
        { id: "contact-us", label: "7. Contact Us" },
    ];

    return (
        <LegalPageLayout
            title="Terms of Service"
            description="Please read these terms carefully before using our services."
            updatedDate="December 2025"
            tocItems={tocItems}
        >
            <p className="lead">
                By accessing or using the Infeara website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 id="services">1. Services</h2>
            <p>
                Infeara provides IT infrastructure, cybersecurity, and digital transformation services. We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.
            </p>

            <h2 id="user-responsibilities">2. User Responsibilities</h2>
            <p>
                You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
            </p>

            <h2 id="intellectual-property">3. Intellectual Property</h2>
            <p>
                All content, trademarks, and intellectual property on this website are owned by Infeara or its licensors. You may not use, reproduce, or distribute any content without our prior written permission.
            </p>

            <h2 id="limitation-liability">4. Limitation of Liability</h2>
            <p>
                To the fullest extent permitted by law, Infeara shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
            </p>

            <h2 id="governing-law">5. Governing Law</h2>
            <p>
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
            </p>

            <h2 id="changes-terms">6. Changes to Terms</h2>
            <p>
                We reserve the right to modify these Terms at any time. Your continued use of our services after any such changes constitutes your acceptance of the new Terms.
            </p>

            <h2 id="contact-us">7. Contact Us</h2>
            <p>
                If you have any questions about these Terms, please contact us via our <Link href="/contact" className="text-primary hover:underline">Contact Page</Link>.
            </p>
        </LegalPageLayout>
    );
}
