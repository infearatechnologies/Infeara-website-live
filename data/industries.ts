import { Factory, Stethoscope, GraduationCap, Rocket, ShoppingBag, Truck, Briefcase, Code, ShieldCheck, Server, Wifi, Lock, Users, Clock, Zap, Globe, Database, Smartphone } from "lucide-react";

export const industriesData: Record<string, any> = {
    "education": {
        title: "Educational Institutions",
        slug: "education",
        icon: GraduationCap,
        heroImage: "/images/industries/education-hero-v2.png",
        featureImage: "/images/industries/education-feature-v2.png",
        overview: "Educational institutions today rely heavily on stable IT infrastructure to support teaching, administration, and examinations. However, limited IT budgets, legacy systems, and growing cybersecurity risks create significant operational challenges. We help schools and colleges build secure, scalable, and student-ready digital environments.",
        problems: [
            "High density user access causing Wi-Fi bottlenecks",
            "BYOD security risks from students and faculty",
            "Vulnerability of student data and research IP",
            "Downtime during critical online exams",
            "Lack of centralized device management"
        ],
        solutions: [
            "Campus-Wide Wi-Fi 6/7 Implementation",
            "Virtual Computer Labs (VDI) for remote access",
            "Student Information System (SIS) Security Audit",
            "Content Filtering & Firewall Management",
            "Automated Patch Management for Lab PCs"
        ],
        tools: ["Cisco Meraki", "Microsoft 365 Education", "Google Workspace for Education", "Fortinet Firewalls", "Veeam Backup"],
        compliance: [
            "Student Data Privacy (FERPA/Local Regulations)",
            "Content Filtering Compliance",
            "Digital Access Control Policies"
        ],
        engagementModel: "Annual Managed IT Services contract with on-site support during exam periods and 24/7 remote monitoring.",
        useCase: {
            title: "Modernizing a Multi-Campus University",
            description: "A university with 3 campuses faced frequent Wi-Fi dropouts and security breaches. We deployed a unified Wi-Fi 6 network with role-based access control and segmented student/faculty traffic. Result: 99.9% uptime and zero security incidents in the first year."
        },
        benefits: [
            "Seamless digital learning experience",
            "Secure student and faculty data",
            "Reduced IT support tickets",
            "Cost-effective hardware lifecycle management"
        ],
        cta: "Book a free IT audit for your campus"
    },
    "saas": {
        title: "SaaS & Software Companies",
        slug: "saas",
        icon: Code,
        heroImage: "/images/industries/saas-hero.png",
        featureImage: "/images/industries/saas-feature.png",
        overview: "For SaaS companies, uptime and security are not just operational needs—they are your product. We help tech-first companies build compliant, scalable, and resilient infrastructure that gives enterprise customers the confidence to trust you with their data.",
        problems: [
            "Meeting SOC2 / ISO 27001 compliance requirements",
            "Unpredictable cloud costs (AWS/Azure)",
            "Security vulnerabilities in the CI/CD pipeline",
            "24/7 uptime and incident response pressure",
            "Data sovereignty and residency issues"
        ],
        solutions: [
            "SOC2 Type 2 Readiness & Audit Support",
            "Cloud Cost Optimization (FinOps)",
            "DevSecOps Pipeline Integration",
            "24/7 SOC Monitoring & Incident Response",
            "Container Security (Kubernetes/Docker)"
        ],
        tools: ["AWS / Azure / GCP", "Terraform", "Kubernetes", "Datadog", "Cloudflare", "Snyk"],
        compliance: [
            "SOC 2 Type II",
            "ISO 27001",
            "GDPR / CCPA"
        ],
        engagementModel: "Retainer-based DevOps & Security partnership with dedicated Slack channel and SLA-backed response times.",
        useCase: {
            title: "Scaling a Fintech SaaS Securely",
            description: "A growing fintech SaaS needed SOC2 compliance to close enterprise deals. We audited their AWS infrastructure, implemented encryption and access controls, and guided them through the audit. Result: Achieved SOC2 Type 2 in 3 months."
        },
        benefits: [
            "Faster sales cycles with compliance trust",
            "Reduced cloud infrastructure bill",
            "Automated security & compliance",
            "Zero-downtime deployments"
        ],
        cta: "Talk to our SaaS infrastructure specialist"
    },
    "startups": {
        title: "SMEs & Startups",
        slug: "startups",
        icon: Rocket,
        heroImage: "/images/industries/startup-hero.png",
        featureImage: "/images/industries/startup-feature.png",
        overview: "Startups need to move fast, but neglecting IT foundations creates technical debt that slows you down later. We provide agile, cost-effective IT solutions that scale with your growth, allowing you to focus on product and market fit.",
        problems: [
            "Limited IT budget and resources",
            "Chaotic onboarding/offboarding processes",
            "Security risks from remote/hybrid work",
            "Shadow IT and unmanaged SaaS subscriptions",
            "Lack of disaster recovery plan"
        ],
        solutions: [
            "Fractional CTO / Managed IT Services",
            "Zero-Touch Device Provisioning (MDM)",
            "Cloud-Native Office Setup (Google/Microsoft)",
            "Endpoint Security (EDR) for Remote Teams",
            "SaaS Management & Cost Control"
        ],
        tools: ["Google Workspace / Microsoft 365", "Slack / Teams", "JumpCloud / Okta", "SentinelOne", "Notion"],
        compliance: [
            "Basic Cyber Hygiene",
            "Data Protection Policies",
            "Secure Remote Access"
        ],
        engagementModel: "Flexible monthly subscription packages designed for growth stages (Seed to Series B).",
        useCase: {
            title: "Rapid Scaling for a Series A Startup",
            description: "A startup doubled its headcount in 2 months and struggled with device setup. We implemented Zero-Touch Provisioning and a cloud directory. Result: Onboarding time reduced from 2 days to 30 minutes per employee."
        },
        benefits: [
            "Focus on core business, not IT",
            "Predictable monthly IT spend",
            "Enterprise-grade security on a startup budget",
            "Scalable infrastructure ready for growth"
        ],
        cta: "Get a startup-friendly IT consultation"
    },
    "retail": {
        title: "Retail & E-commerce",
        slug: "retail",
        icon: ShoppingBag,
        heroImage: "/images/industries/retail-hero-v2.png",
        featureImage: "/images/industries/retail-feature-v2.png",
        overview: "In retail, downtime means lost revenue. Whether it's a physical POS system or an e-commerce checkout, we ensure your digital and physical storefronts are always open for business, secure, and delivering a seamless customer experience.",
        problems: [
            "POS system downtime and connectivity issues",
            "PCI-DSS compliance headaches",
            "Inventory management sync failures",
            "Cyber attacks during peak seasons (Black Friday)",
            "Slow website performance impacting conversion"
        ],
        solutions: [
            "Secure SD-WAN for Multi-Location Stores",
            "PCI-DSS Compliance Audit & Remediation",
            "E-commerce VAPT & Performance Tuning",
            "DDoS Protection & WAF Implementation",
            "24/7 POS & Network Support"
        ],
        tools: ["Shopify / Magento / WooCommerce", "Fortinet SD-WAN", "Cloudflare", "Square / Stripe", "Meraki"],
        compliance: [
            "PCI-DSS (Payment Card Industry Data Security Standard)",
            "Consumer Data Privacy"
        ],
        engagementModel: "Hybrid support model: Remote monitoring for e-commerce and on-site SLAs for physical store network issues.",
        useCase: {
            title: "Securing a Multi-Brand Retail Chain",
            description: "A retail chain with 20 stores faced frequent credit card processing failures due to internet outages. We deployed SD-WAN with 4G failover. Result: 100% POS uptime during the holiday season."
        },
        benefits: [
            "Uninterrupted sales & transactions",
            "Secure customer payment data",
            "Faster website load times",
            "Centralized management of all store networks"
        ],
        cta: "Secure your retail operations today"
    },
    "healthcare": {
        title: "Healthcare Clinics",
        slug: "healthcare",
        icon: Stethoscope,
        heroImage: "/images/industries/healthcare-hero.png",
        featureImage: "/images/industries/healthcare-feature.png",
        overview: "Patient trust is paramount. In healthcare, IT failures can impact patient care. We provide HIPAA-compliant infrastructure that ensures data security, high availability, and seamless access to EMR/EHR systems for medical professionals.",
        problems: [
            "Strict HIPAA / data privacy regulations",
            "Slow access to patient records (EMR/EHR)",
            "IoT medical device security vulnerabilities",
            "Ransomware targeting patient data",
            "Telemedicine connectivity issues"
        ],
        solutions: [
            "HIPAA Compliance Consulting & Audit",
            "Secure EMR/EHR Cloud Hosting",
            "Medical Grade Network Segmentation",
            "IoT Security Monitoring",
            "Disaster Recovery for Patient Data"
        ],
        tools: ["Epic / Cerner / Athenahealth", "Azure for Healthcare", "Cisco Medical Grade Network", "CrowdStrike", "Veeam"],
        compliance: [
            "HIPAA (Health Insurance Portability and Accountability Act)",
            "HITECH Act",
            "ISO 27799"
        ],
        engagementModel: "Strict SLA-based managed services with priority support for critical clinical systems.",
        useCase: {
            title: "Ransomware Protection for a Hospital",
            description: "A multi-specialty clinic was worried about rising ransomware attacks. We implemented air-gapped backups and endpoint detection. Result: Successfully blocked a phishing attempt that could have encrypted patient data."
        },
        benefits: [
            "100% HIPAA compliance confidence",
            "Instant access to patient records",
            "Protection against medical identity theft",
            "Reliable telemedicine infrastructure"
        ],
        cta: "Ensure your clinic is HIPAA compliant"
    },
    "manufacturing": {
        title: "Manufacturing Units",
        slug: "manufacturing",
        icon: Factory,
        heroImage: "/images/industries/manufacturing-hero.png",
        featureImage: "/images/industries/manufacturing-feature.png",
        overview: "In the era of Industry 4.0, connectivity is the lifeblood of manufacturing. We help you bridge the gap between OT (Operational Technology) and IT, ensuring your factory floor is secure, connected, and efficient without disrupting production.",
        problems: [
            "IT/OT convergence security risks",
            "Legacy equipment running outdated OS",
            "Unplanned downtime costing millions",
            "Intellectual property theft",
            "Lack of visibility into factory data"
        ],
        solutions: [
            "Industrial IoT (IIoT) Security & Segmentation",
            "Ruggedized Factory Wi-Fi Networks",
            "Predictive Maintenance Analytics Setup",
            "OT Network Air-Gapping / Firewalls",
            "Legacy System Virtualization"
        ],
        tools: ["Siemens / Rockwell Automation", "Cisco Industrial Ethernet", "Claroty / Nozomi Networks", "Azure IoT", "VMware"],
        compliance: [
            "IEC 62443 (Industrial Security)",
            "ISO 9001 (Quality Management)",
            "NIST Framework"
        ],
        engagementModel: "Project-based implementation for network upgrades followed by ongoing OT/IT security monitoring.",
        useCase: {
            title: "Connecting a Legacy Factory Floor",
            description: "A manufacturer wanted to collect data from 20-year-old CNC machines. We installed IoT gateways and a secure private network. Result: Real-time production visibility increased efficiency by 15%."
        },
        benefits: [
            "Reduced unplanned downtime",
            "Secure IT/OT integration",
            "Real-time production insights",
            "Extended life of legacy equipment"
        ],
        cta: "Modernize your manufacturing IT"
    },
    "logistics": {
        title: "Logistics & Warehousing",
        slug: "logistics",
        icon: Truck,
        heroImage: "/images/industries/logistics-hero.png",
        featureImage: "/images/industries/logistics-feature.png",
        overview: "Modern logistics relies on real-time data. From the warehouse floor to the delivery truck, we design robust wireless networks and tracking systems that ensure your supply chain never stops moving.",
        problems: [
            "Wi-Fi dead zones in large warehouses",
            "Scanner and handheld connectivity issues",
            "Real-time inventory tracking latency",
            "Data synchronization between depots",
            "Mobile device management for drivers"
        ],
        solutions: [
            "Warehouse Wi-Fi Planning (Heatmaps)",
            "Ruggedized Handheld & Scanner Support",
            "Mobile Device Management (MDM) for Fleets",
            "Cloud-based ERP/WMS Integration",
            "Cellular/5G Failover Solutions"
        ],
        tools: ["Zebra / Honeywell Scanners", "Cisco / Aruba Wi-Fi", "SOTI MobiControl", "SAP / Oracle WMS", "Cradlepoint"],
        compliance: [
            "Supply Chain Security Standards",
            "GDPR (for customer delivery data)"
        ],
        engagementModel: "Site survey and network design projects, plus managed support for handhelds and warehouse infrastructure.",
        useCase: {
            title: "Eliminating Dead Zones in a 50k sqft Warehouse",
            description: "A logistics center faced delays because scanners lost signal in aisles. We conducted a heat map survey and redeployed APs. Result: 100% coverage and 20% faster picking times."
        },
        benefits: [
            "Real-time inventory accuracy",
            "Faster order fulfillment",
            "Reliable scanner connectivity",
            "Secure fleet device management"
        ],
        cta: "Optimize your warehouse connectivity"
    },
    "professional-services": {
        title: "Professional Services Firms",
        slug: "professional-services",
        icon: Briefcase,
        heroImage: "/images/industries/pro-services-hero.png",
        featureImage: "/images/industries/pro-services-feature.png",
        overview: "For law firms, accounting agencies, and consultancies, your reputation is your asset. We protect your sensitive client data with military-grade security while ensuring your consultants can work securely and efficiently from anywhere in the world.",
        problems: [
            "Client data confidentiality breaches",
            "Secure remote access for traveling consultants",
            "Document management and version control",
            "Billable hour loss due to IT issues",
            "Phishing attacks targeting finance teams"
        ],
        solutions: [
            "Secure Remote Access (VPN / ZTNA)",
            "DLP (Data Leak Prevention) Solutions",
            "Encrypted Email & Document Sharing",
            "Disaster Recovery & Business Continuity",
            "Phishing Simulation & Training"
        ],
        tools: ["Microsoft 365 E5", "Citrix / VDI", "Mimecast / Proofpoint", "iManage / NetDocuments", "SentinelOne"],
        compliance: [
            "GDPR / CCPA",
            "Industry Specific Regulations (e.g., ABA for Law)",
            "ISO 27001"
        ],
        engagementModel: "White-glove managed IT support with high-touch service for partners and executives.",
        useCase: {
            title: "Securing a Top-Tier Law Firm",
            description: "A law firm needed to secure sensitive case files while allowing remote work. We implemented a Zero Trust Network Access solution. Result: Attorneys can work securely from client sites without VPN headaches."
        },
        benefits: [
            "Uncompromised client trust",
            "Work-from-anywhere productivity",
            "Protection against wire fraud",
            "Compliance with industry regulations"
        ],
        cta: "Protect your firm's reputation"
    },
};
