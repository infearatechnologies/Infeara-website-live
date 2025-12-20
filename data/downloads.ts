export interface DownloadResource {
    id: string;
    title: string;
    slug: string;
    type: "Checklist" | "Guide" | "Template" | "Whitepaper";
    description: string;
    fileSize: string;
    pageCount: number;
    fileType: string; // PDF, DOCX, XLS
    featuredImage: string;
    valueProps: string[];
    targetAudience: string;
    downloadUrl: string; // In a real app, this might be protected
}

export const downloadResources: DownloadResource[] = [
    {
        id: "1",
        title: "2025 Cyber Security Checklist",
        slug: "2025-cyber-security-checklist",
        type: "Checklist",
        description: "A comprehensive 50-point checklist to audit your organization's security posture.",
        fileSize: "1.2 MB",
        pageCount: 5,
        fileType: "PDF",
        featuredImage: "/images/downloads/security-checklist.jpg",
        valueProps: [
            "Identify common vulnerabilities",
            "Prioritize security upgrades",
            "Ensure basic compliance"
        ],
        targetAudience: "IT Managers, CTOs",
        downloadUrl: "/downloads/2025-cyber-security-checklist.pdf"
    },
    {
        id: "2",
        title: "Remote Work Policy Template",
        slug: "remote-work-policy-template",
        type: "Template",
        description: "Ready-to-use policy document for managing distributed teams securely.",
        fileSize: "0.5 MB",
        pageCount: 12,
        fileType: "DOCX",
        featuredImage: "/images/downloads/remote-policy.jpg",
        valueProps: [
            "Standardize remote work expectations",
            "Address security and device usage",
            "Legal and HR compliance clauses"
        ],
        targetAudience: "HR Heads, Founders",
        downloadUrl: "/downloads/remote-work-policy-template.docx"
    },
    {
        id: "3",
        title: "Server Monitoring Setup Guide",
        slug: "server-monitoring-guide",
        type: "Guide",
        description: "Step-by-step guide to setting up robust monitoring for your on-prem and cloud servers.",
        fileSize: "2.5 MB",
        pageCount: 20,
        fileType: "PDF",
        featuredImage: "/images/downloads/monitoring-guide.jpg",
        valueProps: [
            "Choose the right monitoring tools",
            "Configure critical alerts",
            "Reduce downtime with proactive monitoring"
        ],
        targetAudience: "SysAdmins, DevOps Engineers",
        downloadUrl: "/downloads/server-monitoring-guide.pdf"
    }
];

export const downloadFilters = {
    type: ["All", "Checklist", "Guide", "Template", "Whitepaper"],
    industry: ["All", "General", "Healthcare", "Finance", "Manufacturing"]
};
