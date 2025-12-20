export interface CaseStudy {
    id: string;
    title: string;
    slug: string;
    industry: string;
    service: string;
    businessSize: string;
    region: string;
    headlineResult: string;
    excerpt: string;
    featuredImage: string;
    overview: {
        challenge: string;
        solution: string;
        result: string;
    };
    details: {
        challenge: string;
        painPoints: string[];
        solution: string;
        toolsUsed: string[];
        implementationSteps: string[];
        results: {
            metric: string;
            label: string;
        }[];
        keyTakeaways: string[];
    };
}

export const caseStudies: CaseStudy[] = [
    {
        id: "1",
        title: "Global Bank HQ Network Overhaul",
        slug: "global-bank-hq-network",
        industry: "Banking & Finance",
        service: "Infrastructure",
        businessSize: "Enterprise",
        region: "Chennai",
        headlineResult: "99.99% Network Uptime Achieved",
        excerpt: "Complete structured cabling and Cisco Meraki Wi-Fi deployment for a 10-story headquarters.",
        featuredImage: "/images/case-studies/bank-hq.jpg",
        overview: {
            challenge: "Frequent network outages and slow Wi-Fi in a high-density office.",
            solution: "Unified Wi-Fi 6 deployment with redundant core switching.",
            result: "Seamless connectivity for 2000+ employees."
        },
        details: {
            challenge: "The bank's existing network infrastructure was aging, leading to slow transaction times and poor video conferencing quality. Wi-Fi dead zones were common in meeting rooms.",
            painPoints: [
                "Wi-Fi dropouts during client calls",
                "Slow access to core banking applications",
                "Lack of visibility into network traffic"
            ],
            solution: "We designed a redundant network architecture using Cisco Catalyst switches and Meraki Wi-Fi 6 access points. We also implemented a new structured cabling system.",
            toolsUsed: ["Cisco Catalyst 9000", "Cisco Meraki MR46", "Fortinet NG-Firewall"],
            implementationSteps: [
                "Site survey and heat mapping",
                "Structured cabling overhaul (Cat6A)",
                "Core and distribution switch installation",
                "Wi-Fi 6 AP deployment and tuning",
                "User acceptance testing"
            ],
            results: [
                { metric: "99.99%", label: "Network Uptime" },
                { metric: "40%", label: "Faster App Access" },
                { metric: "0", label: "Dead Zones" }
            ],
            keyTakeaways: [
                "Redundancy is critical for financial institutions.",
                "Wi-Fi 6 handles high density significantly better than Wi-Fi 5.",
                "Proper heat mapping prevents coverage gaps."
            ]
        }
    },
    {
        id: "2",
        title: "Manufacturing Plant IoT Security",
        slug: "manufacturing-iot-security",
        industry: "Manufacturing",
        service: "Cybersecurity",
        businessSize: "Mid-Market",
        region: "Oragadam",
        headlineResult: "Zero Ransomware Incidents",
        excerpt: "Implemented OT security protocols and firewalls to secure factory floor machinery.",
        featuredImage: "/images/case-studies/manufacturing.jpg",
        overview: {
            challenge: "Unsecured legacy machines connected to the internet.",
            solution: "Network segmentation and industrial firewall deployment.",
            result: "Secured OT network without disrupting production."
        },
        details: {
            challenge: "The factory had connected legacy CNC machines to the corporate network for data collection, exposing them to potential ransomware attacks from the internet.",
            painPoints: [
                "Vulnerable legacy OS (Windows XP)",
                "Flat network architecture",
                "No visibility into OT traffic"
            ],
            solution: "We implemented a Purdue Model network architecture, segmenting the OT network from the IT network using industrial firewalls.",
            toolsUsed: ["Palo Alto Networks Firewalls", "Nozomi Networks", "VLAN Segmentation"],
            implementationSteps: [
                "Asset discovery and inventory",
                "Network traffic analysis",
                "Firewall policy definition",
                "Segmentation implementation",
                "Continuous monitoring setup"
            ],
            results: [
                { metric: "100%", label: "OT/IT Separation" },
                { metric: "0", label: "Security Incidents" },
                { metric: "24/7", label: "Threat Monitoring" }
            ],
            keyTakeaways: [
                "Air-gapping is not always possible; segmentation is key.",
                "Visibility into OT traffic is the first step to security.",
                "Legacy systems require specific protection strategies."
            ]
        }
    }
];

export const caseStudyFilters = {
    industry: ["All", "Banking & Finance", "Manufacturing", "Healthcare", "Education"],
    service: ["All", "Infrastructure", "Cybersecurity", "Cloud Solutions", "Automation"],
    businessSize: ["All", "Startup", "Mid-Market", "Enterprise"]
};
