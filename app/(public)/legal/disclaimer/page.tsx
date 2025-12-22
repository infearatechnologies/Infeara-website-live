import LegalPageLayout from "@/components/legal/LegalPageLayout";
import Link from "next/link";

export default function DisclaimerPage() {
    const tocItems = [
        { id: "professional-advice", label: "1. Professional Advice Disclaimer" },
        { id: "external-links", label: "2. External Links Disclaimer" },
        { id: "testimonials", label: "3. Testimonials Disclaimer" },
        { id: "errors-omissions", label: "4. Errors and Omissions Disclaimer" },
        { id: "contact-us", label: "5. Contact Us" },
    ];

    return (
        <LegalPageLayout
            title="Disclaimer"
            description="Important information regarding the use of our website and services."
            updatedDate="December 2025"
            tocItems={tocItems}
        >
            <p className="lead">
                The information provided by Infeara ("we," "us," or "our") on our website is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
            </p>

            <h2 id="professional-advice">1. Professional Advice Disclaimer</h2>
            <p>
                The Site cannot and does not contain professional advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.
            </p>

            <h2 id="external-links">2. External Links Disclaimer</h2>
            <p>
                The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
            </p>

            <h2 id="testimonials">3. Testimonials Disclaimer</h2>
            <p>
                The Site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume, that all users will have the same experiences.
            </p>

            <h2 id="errors-omissions">4. Errors and Omissions Disclaimer</h2>
            <p>
                While we strive to ensure that the information contained in this site has been obtained from reliable sources, Infeara is not responsible for any errors or omissions, or for the results obtained from the use of this information.
            </p>

            <h2 id="contact-us">5. Contact Us</h2>
            <p>
                If you have any questions about this Disclaimer, please contact us via our <Link href="/contact" className="text-primary hover:underline">Contact Page</Link>.
            </p>
        </LegalPageLayout>
    );
}
