"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export default function FAQSection() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 border-orange-200 text-orange-600 bg-orange-500/10 px-4 py-1">Common Questions</Badge>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-muted-foreground">
                        Detailed answers about our IT Support, Consulting, and Security services.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    <AccordionItem value="item-1" className="border border-border px-6 py-2 rounded-xl bg-card">
                        <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-orange-600 hover:no-underline">
                            Why is Infeara the best choice for IT Support in Chennai?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2 pb-4">
                            Infeara Technologies stands out as the premier choice for IT Support in Chennai due to our unwavering commitment to reliability, speed, and technical excellence. Unlike other providers, we combine proactive 24/7 monitoring with a dedicated team of certified professionals who understand the local and global business landscape. We don't just fix problems; we optimize your entire IT infrastructure for peak performance. Our deep expertise in "Business Network Infrastructure" and "Chennai based IT Outsourcing" ensures that your operations experience 99.9% uptime. Furthermore, our client-centric approach means we act as a true technology partner, aligning our digital strategies with your specific business goals to drive growth and efficiency.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border border-border px-6 py-2 rounded-xl bg-card">
                        <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-orange-600 hover:no-underline">
                            How does your Security Audit & VAPT process work?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2 pb-4">
                            Our Security Audit and Vulnerability Assessment & Penetration Testing (VAPT) process is a comprehensive, multi-stage engagement designed to identify and neutralize threats before they can be exploited. We begin with a thorough reconnaissance of your digital assets, including networks, applications, and cloud environments. Our certified ethical hackers then simulate real-world cyberattacks using advanced tools and methodologies to uncover vulnerabilities. Following the testing phase, we provide a detailed, jargon-free report categorizing risks by severity, along with a prioritized remediation plan. We don't stop there; we offer post-remediation re-testing to ensure that all identified gaps effectively closed, ensuring your business meets strict compliance standards like ISO 27001, GDPR, and HIPAA.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border border-border px-6 py-2 rounded-xl bg-card">
                        <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-orange-600 hover:no-underline">
                            Can you handle Cloud Migrations for large enterprises?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2 pb-4">
                            Absolutely. Infeara specializes in seamless, zero-downtime Cloud Solutions and migrations for enterprises of all sizes. Whether you are moving from on-premise servers to the cloud or migrating between providers like AWS, Azure, or Google Cloud, our expert architects design a custom migration strategy tailored to your specific workloads. We handle the entire lifecycle: assessment, planning, migration, and post-migration optimization. Our focus is not just on "lifting and shifting" but on modernizing your applications to leverage cloud-native features for scalability, security, and significant cost savings. We also provide ongoing cloud management to ensure your environment remains secure and cost-efficient.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="border border-border px-6 py-2 rounded-xl bg-card">
                        <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-orange-600 hover:no-underline">
                            What is included in your Managed IT Services?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2 pb-4">
                            Our Managed IT Services provide a holistic, end-to-end solution for your technology needs, acting as your extended IT department. This comprehensive package includes proactive 24/7 network and server monitoring to catch issues before they disrupt business, automated patch management to keep systems secure, and unlimited helpdesk support for your employees. We also manage your backups and disaster recovery plans, ensuring business continuity. Beyond day-to-day operations, our service includes strategic vCIO (Virtual CIO) consulting, where we meet regularly to review IT performance, plan for future upgrades, and ensure your technology budget is delivering maximum ROI.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="border border-border px-6 py-2 rounded-xl bg-card">
                        <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-orange-600 hover:no-underline">
                            Do you offer remote support for businesses outside Chennai?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2 pb-4">
                            Yes, Infeara provides robust Remote IT Operations and support for businesses across the globe, including clients in the USA, UK, UAE, and Singapore. Leveraging secure, industry-leading remote access tools, our technicians can diagnose and resolve over 90% of IT issues without a physical site visit. For our international clients, we also offer dedicated Offshore Development Centers (ODC) and remote infrastructure management teams. This allows you to tap into India's top tech talent and our 24/7 support capabilities, ensuring your business operates smoothly around the clock, regardless of your physical location.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}
