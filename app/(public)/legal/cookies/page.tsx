import LegalPageLayout from "@/components/legal/LegalPageLayout";

export default function CookiePolicyPage() {
    const tocItems = [
        { id: "what-are-cookies", label: "1. What are cookies?" },
        { id: "why-use-cookies", label: "2. Why do we use cookies?" },
        { id: "types-of-cookies", label: "3. Types of Cookies We Use" },
        { id: "control-cookies", label: "4. How can I control cookies?" },
        { id: "policy-updates", label: "5. Updates to This Policy" },
        { id: "contact-us", label: "6. Contact Us" },
    ];

    return (
        <LegalPageLayout
            title="Cookie Policy"
            description="Understanding how we use cookies to improve your experience."
            updatedDate="December 2025"
            tocItems={tocItems}
        >
            <p className="lead">
                This Cookie Policy explains how Infeara uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>

            <h2 id="what-are-cookies">1. What are cookies?</h2>
            <p>
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>

            <h2 id="why-use-cookies">2. Why do we use cookies?</h2>
            <p>
                We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties.
            </p>

            <h2 id="types-of-cookies">3. Types of Cookies We Use</h2>
            <ul>
                <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website.</li>
                <li><strong>Functionality Cookies:</strong> Allow the website to remember choices you make.</li>
                <li><strong>Targeting Cookies:</strong> Used to deliver advertisements relevant to you.</li>
            </ul>

            <h2 id="control-cookies">4. How can I control cookies?</h2>
            <p>
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. In addition, most web browsers allow you to control cookies through their settings preferences.
            </p>

            <h2 id="policy-updates">5. Updates to This Policy</h2>
            <p>
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons.
            </p>

            <h2 id="contact-us">6. Contact Us</h2>
            <p>
                If you have any questions about our use of cookies or other technologies, please email us at <a href="mailto:contact@infeara.com">contact@infeara.com</a>.
            </p>
        </LegalPageLayout>
    );
}
