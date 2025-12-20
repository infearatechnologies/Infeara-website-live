export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    category: string;
    author: string;
    publishDate: string;
    readTime: string;
    excerpt: string;
    featuredImage: string;
    content: string; // HTML or Markdown content
    tags: string[];
    relatedPosts: string[]; // IDs of related posts
}

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "The Future of Enterprise Wi-Fi: Wi-Fi 7 Explained",
        slug: "future-of-enterprise-wifi-7",
        category: "IT Infrastructure",
        author: "Arjun Reddy",
        publishDate: "Dec 10, 2024",
        readTime: "5 min read",
        excerpt: "Wi-Fi 7 is set to revolutionize high-density environments. Here's what Chennai businesses need to know before upgrading.",
        featuredImage: "/images/blog/wifi-7.jpg",
        tags: ["Networking", "Wi-Fi 7", "Enterprise"],
        relatedPosts: ["3"],
        content: `
            <p class="lead text-xl leading-relaxed mb-12">Wi-Fi 7 is set to revolutionize high-density environments. Here's what Chennai businesses need to know before upgrading their infrastructure.</p>

            <h2>What is Wi-Fi 7?</h2>
            <p>
                Wi-Fi 7 (IEEE 802.11be) is the next generation of Wi-Fi standard, designed to provide extremely high throughput (EHT). It builds upon the foundation of Wi-Fi 6E but introduces wider channels (320 MHz) and higher modulation (4K-QAM).
            </p>

            <blockquote>
                "Wi-Fi 7 isn't just a speed upgrade; it's a capacity revolution that will enable the next generation of immersive applications in the enterprise."
            </blockquote>

            <h2>Key Benefits for Enterprises</h2>
            <p class="mb-8">For businesses in IT parks like DLF Cyber City or Tidel Park, the benefits are tangible:</p>
            
            <div class="grid md:grid-cols-3 gap-6 not-prose mb-12">
                <div class="bg-card p-6 rounded-2xl border border-border shadow-sm">
                    <div class="text-orange-600 font-bold text-lg mb-2">Higher Speeds</div>
                    <p class="text-sm text-muted-foreground">Up to 46 Gbps theoretical max speed, enabling seamless 8K video streaming.</p>
                </div>
                <div class="bg-card p-6 rounded-2xl border border-border shadow-sm">
                    <div class="text-orange-600 font-bold text-lg mb-2">Lower Latency</div>
                    <p class="text-sm text-muted-foreground">Crucial for AR/VR applications and real-time collaboration tools.</p>
                </div>
                <div class="bg-card p-6 rounded-2xl border border-border shadow-sm">
                    <div class="text-orange-600 font-bold text-lg mb-2">Better Capacity</div>
                    <p class="text-sm text-muted-foreground">Multi-Link Operation (MLO) reduces congestion in dense environments.</p>
                </div>
            </div>

            <h2>Wi-Fi 6 vs. Wi-Fi 7 Comparison</h2>
            <p class="mb-8">See how the new standard stacks up against the current generation:</p>

            <div class="grid md:grid-cols-2 gap-6 not-prose mb-16">
                <!-- Card 1: Wi-Fi 6 -->
                <div class="bg-secondary/30 p-8 rounded-3xl border border-border">
                    <div class="text-xl font-bold mb-6 text-muted-foreground">Wi-Fi 6/6E</div>
                    <div class="space-y-4">
                        <div class="flex justify-between items-center border-b border-border/50 pb-2">
                            <span class="text-sm text-muted-foreground">Max Speed</span>
                            <span class="font-bold">9.6 Gbps</span>
                        </div>
                        <div class="flex justify-between items-center border-b border-border/50 pb-2">
                            <span class="text-sm text-muted-foreground">Channel Width</span>
                            <span class="font-bold">160 MHz</span>
                        </div>
                        <div class="flex justify-between items-center border-b border-border/50 pb-2">
                            <span class="text-sm text-muted-foreground">Modulation</span>
                            <span class="font-bold">1024-QAM</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-muted-foreground">Key Tech</span>
                            <span class="font-bold">OFDMA</span>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Wi-Fi 7 -->
                <div class="bg-orange-50 dark:bg-orange-950/20 p-8 rounded-3xl border border-orange-100 dark:border-orange-900 relative overflow-hidden">
                    <div class="absolute top-0 right-0 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">NEW</div>
                    <div class="text-xl font-bold mb-6 text-orange-700 dark:text-orange-400">Wi-Fi 7</div>
                    <div class="space-y-4">
                        <div class="flex justify-between items-center border-b border-orange-200/50 pb-2">
                            <span class="text-sm text-muted-foreground">Max Speed</span>
                            <span class="font-bold text-foreground">46 Gbps</span>
                        </div>
                        <div class="flex justify-between items-center border-b border-orange-200/50 pb-2">
                            <span class="text-sm text-muted-foreground">Channel Width</span>
                            <span class="font-bold text-foreground">320 MHz</span>
                        </div>
                        <div class="flex justify-between items-center border-b border-orange-200/50 pb-2">
                            <span class="text-sm text-muted-foreground">Modulation</span>
                            <span class="font-bold text-foreground">4096-QAM</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-muted-foreground">Key Tech</span>
                            <span class="font-bold text-foreground">Multi-Link (MLO)</span>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Implementation Roadmap</h2>
            <p class="mb-8">If you're planning an upgrade, follow these steps to ensure a smooth transition:</p>
            
            <div class="space-y-4 not-prose mb-12">
                <div class="flex gap-4 p-4 bg-card rounded-xl border border-border items-start">
                    <div class="h-8 w-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold shrink-0">1</div>
                    <div>
                        <h4 class="font-bold text-foreground mb-1">Audit Current Infrastructure</h4>
                        <p class="text-sm text-muted-foreground">Assess your current cabling (Cat6a is recommended for Wi-Fi 7 backhaul) and switch capacity.</p>
                    </div>
                </div>
                <div class="flex gap-4 p-4 bg-card rounded-xl border border-border items-start">
                    <div class="h-8 w-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold shrink-0">2</div>
                    <div>
                        <h4 class="font-bold text-foreground mb-1">Identify High-Density Zones</h4>
                        <p class="text-sm text-muted-foreground">Map out areas with the highest user density, such as conference rooms and cafeterias.</p>
                    </div>
                </div>
                <div class="flex gap-4 p-4 bg-card rounded-xl border border-border items-start">
                    <div class="h-8 w-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold shrink-0">3</div>
                    <div>
                        <h4 class="font-bold text-foreground mb-1">Pilot Testing</h4>
                        <p class="text-sm text-muted-foreground">Start with a small deployment in a non-critical area to test device compatibility.</p>
                    </div>
                </div>
            </div>

            <h3>Should You Upgrade Now?</h3>
            <p>
                For most businesses in Chennai currently on Wi-Fi 6, an immediate upgrade might not be necessary unless you have specific high-bandwidth requirements. However, for new office setups in OMR/Guindy, planning for Wi-Fi 7 compatible hardware is a smart future-proofing strategy.
            </p>
        `,
    },
    {
        id: "2",
        title: "Top 5 Cyber Security Threats for Manufacturing in 2025",
        slug: "cyber-security-threats-manufacturing-2025",
        category: "Cybersecurity",
        author: "Priya Sundaram",
        publishDate: "Dec 05, 2024",
        readTime: "7 min read",
        excerpt: "IoT vulnerabilities and ransomware are on the rise. Learn how to secure your factory floor against modern threats.",
        featuredImage: "/images/blog/manufacturing-security.jpg",
        tags: ["Security", "Manufacturing", "IoT"],
        relatedPosts: ["1"],
        content: `
            <h2>The Rising Threat Landscape</h2>
            <p>Manufacturing units are increasingly becoming targets for cyberattacks due to the convergence of IT and OT (Operational Technology).</p>

            <h2>1. Ransomware Targeting OT</h2>
            <p>Attackers are now encrypting machines on the factory floor, halting production lines and demanding hefty ransoms.</p>

            <h2>2. IoT Vulnerabilities</h2>
            <p>Unsecured sensors and smart devices provide easy entry points for hackers.</p>

            <div class="callout-warning">
                <strong>Warning:</strong> Default passwords on IoT devices are the #1 cause of breaches in smart factories.
            </div>

            <h2>3. Supply Chain Attacks</h2>
            <p>Compromising a vendor to gain access to the main target is a growing trend.</p>
        `
    },
    {
        id: "3",
        title: "Cloud Migration: AWS vs Azure for Indian Enterprises",
        slug: "aws-vs-azure-cloud-migration",
        category: "Cloud & Servers",
        author: "Karthik N",
        publishDate: "Nov 28, 2024",
        readTime: "6 min read",
        excerpt: "A detailed comparison of the two giants, focusing on local data center availability and pricing for Indian markets.",
        featuredImage: "/images/blog/cloud-migration.jpg",
        tags: ["Cloud", "AWS", "Azure"],
        relatedPosts: ["1"],
        content: `
            <h2>Choosing the Right Cloud Provider</h2>
            <p>For Indian enterprises, data residency and latency are key factors when choosing between AWS and Azure.</p>

            <h2>AWS in India</h2>
            <p>AWS has a strong presence with multiple availability zones in Mumbai and Hyderabad, offering robust services for startups and enterprises alike.</p>

            <h2>Azure in India</h2>
            <p>Microsoft Azure is often the preferred choice for organizations already heavily invested in the Microsoft ecosystem (Office 365, Active Directory).</p>

            <h2>Cost Comparison</h2>
            <p>While base compute costs are similar, data transfer rates and reserved instance pricing can vary significantly.</p>
        `
    }
];

export const blogCategories = [
    "All",
    "IT Infrastructure",
    "Remote Support",
    "Automation & AI",
    "Cybersecurity",
    "Cloud & Servers",
    "Business Continuity",
    "Founder / Ops Insights"
];
