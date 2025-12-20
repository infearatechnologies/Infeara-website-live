// Icons are now referenced by string name to support serialization in Client Components

export type LayoutVariant = 'security' | 'technical' | 'innovation' | 'consulting';

export interface ServiceData {
    title: string;
    description: string;
    valueProposition: string; // New: One-line value prop
    features: string[];
    content: string;
    problemsSolved: string[]; // New: Business problems solved
    process: { title: string; description: string }[]; // New: How it works
    benefits: string[]; // New: Outcomes/ROI
    industries: string[]; // New: Target industries
    tools: string[]; // New: Tools & Technologies
    securityFeatures: string[]; // New: Security, Compliance & SLAs
    icon: string;
    image: string;
    chartImage: string; // New: Chart image for overview section
    stats: { label: string; value: string }[]; // New: Key statistics
    keywords: string[];
    layoutVariant: LayoutVariant;
    faqs: { question: string; answer: string }[];
}

export const servicesData: Record<string, Record<string, ServiceData>> = {
    "audit-compliance": {
        "vapt": {
            title: "Vulnerability Assessment & Penetration Testing (VAPT)",
            description: "Identify and remediate security vulnerabilities before attackers exploit them.",
            valueProposition: "Proactive security testing to uncover and fix vulnerabilities before they become breaches.",
            features: ["Automated Vulnerability Scanning", "Manual Penetration Testing", "Detailed Remediation Reports", "Re-testing & Verification"],
            content: "Our VAPT services provide a comprehensive analysis of your IT infrastructure's security posture. We simulate real-world attacks to identify weaknesses in your networks, applications, and systems, ensuring you stay ahead of potential threats.",
            problemsSolved: ["Unidentified security gaps", "Compliance non-conformity", "Risk of data breaches", "Lack of visibility into attack surface"],
            process: [
                { title: "Scoping", description: "Define the assets and boundaries for the assessment." },
                { title: "Scanning", description: "Automated tools identify known vulnerabilities." },
                { title: "Exploitation", description: "Manual testing to verify and exploit vulnerabilities." },
                { title: "Reporting", description: "Detailed report with risk ratings and remediation steps." }
            ],
            benefits: ["Reduced risk of cyberattacks", "Regulatory compliance (GDPR, PCI-DSS)", "Enhanced customer trust", "Actionable security insights"],
            industries: ["BFSI", "Healthcare", "E-commerce", "SaaS"],
            tools: ["Burp Suite", "Nessus", "Metasploit", "Acunetix"],
            securityFeatures: ["NDAs for all testers", "Encrypted report delivery", "ISO 27001 certified process"],
            icon: "ShieldCheck",
            image: "/cyber-security.png",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Vulnerabilities Found", value: "500+" },
                { label: "Success Rate", value: "100%" },
                { label: "Client Satisfaction", value: "5/5" }
            ],
            keywords: ["VAPT Chennai", "Penetration Testing India", "Vulnerability Assessment", "Cyber Security Audit", "Ethical Hacking Services"],
            layoutVariant: "security",
            faqs: [
                { question: "What is the difference between VAPT and a standard security scan?", answer: "A standard scan is automated and identifies known vulnerabilities. VAPT includes manual penetration testing where experts simulate real-world attacks to exploit those vulnerabilities, providing a deeper analysis." },
                { question: "How often should we conduct VAPT?", answer: "It is recommended to conduct VAPT at least once a year or whenever significant changes are made to your IT infrastructure or applications." },
                { question: "Do you provide a remediation report?", answer: "Yes, we provide a detailed report classifying vulnerabilities by risk level, along with specific recommendations for remediation." }
            ]
        },
        "network-security": {
            title: "Network Security Audit",
            description: "Comprehensive review of your network architecture and security controls.",
            valueProposition: "Fortify your network defenses against internal and external threats.",
            features: ["Firewall Configuration Review", "Network Segmentation Analysis", "Wireless Security Assessment", "Traffic Analysis"],
            content: "We evaluate your network infrastructure to ensure it is robust against internal and external threats. Our audit covers architecture, device configurations, and access controls to minimize the attack surface.",
            problemsSolved: ["Weak network perimeter", "Unauthorized access risks", "Inefficient network traffic", "Outdated security configurations"],
            process: [
                { title: "Discovery", description: "Map out the entire network topology." },
                { title: "Assessment", description: "Review configurations of firewalls, routers, and switches." },
                { title: "Analysis", description: "Identify gaps in segmentation and access controls." },
                { title: "Recommendations", description: "Propose architecture improvements and hardening steps." }
            ],
            benefits: ["Robust network defense", "Optimized performance", "Secure remote access", "Prevention of lateral movement"],
            industries: ["Manufacturing", "Education", "Corporate Offices", "Logistics"],
            tools: ["Wireshark", "Nmap", "SolarWinds", "Cisco Packet Tracer"],
            securityFeatures: ["Non-intrusive testing", "Comprehensive log analysis", "Zero-trust principles"],
            icon: "Network",
            image: "/server-room.png",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Devices Audited", value: "1000+" },
                { label: "Security Gaps Closed", value: "99%" },
                { label: "Uptime Improved", value: "20%" }
            ],
            keywords: ["Network Security Audit", "Firewall Audit", "Network Architecture Review", "Secure Network Design"],
            layoutVariant: "security",
            faqs: [
                { question: "What does a network security audit cover?", answer: "It covers firewalls, routers, switches, wireless networks, and other network devices to ensure they are securely configured and patched." },
                { question: "Can you help with network segmentation?", answer: "Yes, we assess your current segmentation and recommend improvements to limit the spread of potential attacks." },
                { question: "Is this audit compliant with ISO 27001?", answer: "Our audits are designed to align with major standards like ISO 27001, NIST, and PCI-DSS." }
            ]
        },
        "app-security": {
            title: "Application Security Audit",
            description: "Securing your applications from code to deployment.",
            valueProposition: "Build secure applications that protect user data and business logic.",
            features: ["Static Application Security Testing (SAST)", "Dynamic Application Security Testing (DAST)", "API Security Testing", "Secure Code Review"],
            content: "Applications are often the primary target for attackers. Our audit assesses your web and mobile applications for vulnerabilities like SQL injection, XSS, and broken authentication, ensuring your software is secure by design.",
            problemsSolved: ["Vulnerable code", "Data leakage risks", "Insecure APIs", "Compliance violations"],
            process: [
                { title: "Code Review", description: "Analyze source code for security flaws (SAST)." },
                { title: "Runtime Testing", description: "Test running application for vulnerabilities (DAST)." },
                { title: "API Testing", description: "Verify API authentication and data handling." },
                { title: "Remediation", description: "Assist developers in fixing identified issues." }
            ],
            benefits: ["Secure software development lifecycle (SDLC)", "Protected customer data", "Reduced remediation costs", "Compliance with OWASP Top 10"],
            industries: ["Fintech", "HealthTech", "SaaS", "E-commerce"],
            tools: ["SonarQube", "OWASP ZAP", "Postman", "Checkmarx"],
            securityFeatures: ["Secure code handling", "Detailed developer guidance", "Integration with CI/CD"],
            icon: "Lock",
            image: "/cyber-security.png",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Apps Secured", value: "50+" },
                { label: "Critical Bugs Found", value: "200+" },
                { label: "Dev Time Saved", value: "30%" }
            ],
            keywords: ["Application Security Audit", "SAST DAST Services", "Secure Code Review", "Web App Security"],
            layoutVariant: "security",
            faqs: [
                { question: "Do you test mobile applications?", answer: "Yes, we perform security audits for both Android and iOS applications." },
                { question: "What is the difference between SAST and DAST?", answer: "SAST analyzes source code for vulnerabilities, while DAST tests the running application from the outside, simulating an attack." },
                { question: "Can you integrate security testing into our CI/CD pipeline?", answer: "Absolutely. We can help automate security testing within your DevOps workflow (DevSecOps)." }
            ]
        },
        "cloud-security": {
            title: "Cloud Security Audit",
            description: "Ensuring your cloud environment is secure and compliant.",
            valueProposition: "Secure your cloud infrastructure with best-practice configurations and compliance checks.",
            features: ["AWS/Azure/GCP Configuration Review", "IAM Policy Analysis", "Data Storage Security", "Compliance Checks (CIS Benchmarks)"],
            content: "As you move to the cloud, security responsibilities change. We audit your cloud infrastructure to ensure proper configuration, access management, and data protection, preventing misconfigurations that lead to breaches.",
            problemsSolved: ["Cloud misconfigurations", "Over-permissive access", "Unsecured data buckets", "Compliance gaps"],
            process: [
                { title: "Config Review", description: "Assess cloud settings against CIS benchmarks." },
                { title: "IAM Analysis", description: "Review user roles and permissions." },
                { title: "Network Analysis", description: "Check security groups and VPC settings." },
                { title: "Reporting", description: "Provide actionable hardening recommendations." }
            ],
            benefits: ["Hardened cloud environment", "Cost optimization opportunities", "Compliance with cloud standards", "Data sovereignty assurance"],
            industries: ["Startups", "Enterprise", "Technology", "Media"],
            tools: ["AWS Inspector", "Azure Security Center", "Prowler", "ScoutSuite"],
            securityFeatures: ["Cloud-native security tools", "Least privilege access", "Encryption verification"],
            icon: "Globe",
            image: "/bg.jpg",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Clouds Audited", value: "30+" },
                { label: "Risks Mitigated", value: "100%" },
                { label: "Compliance Score", value: "95%" }
            ],
            keywords: ["Cloud Security Audit", "AWS Security Review", "Azure Security Compliance", "Cloud Infrastructure Security"],
            layoutVariant: "security",
            faqs: [
                { question: "Which cloud platforms do you support?", answer: "We support major platforms including AWS, Microsoft Azure, and Google Cloud Platform (GCP)." },
                { question: "Do you check for compliance with CIS benchmarks?", answer: "Yes, our audits are based on CIS benchmarks and other industry best practices." },
                { question: "How do you handle IAM security?", answer: "We review user roles, permissions, and policies to ensure the principle of least privilege is enforced." }
            ]
        },
        "endpoint-security": {
            title: "Endpoint Security Audit",
            description: "Securing the devices that connect to your network.",
            valueProposition: "Protect every entry point to your network from malware and unauthorized access.",
            features: ["Antivirus/EDR Efficacy Testing", "Patch Management Review", "Device Encryption Checks", "BYOD Policy Assessment"],
            content: "Endpoints are frequent entry points for cyberattacks. We assess the security posture of laptops, desktops, and mobile devices to ensure they are hardened against malware, ransomware, and unauthorized access.",
            problemsSolved: ["Malware infections", "Unpatched devices", "Data theft via USB", "Insecure remote work devices"],
            process: [
                { title: "Inventory", description: "Catalog all endpoints and their status." },
                { title: "Assessment", description: "Check AV/EDR status and patch levels." },
                { title: "Policy Review", description: "Evaluate USB and application control policies." },
                { title: "Hardening", description: "Recommend settings to lock down devices." }
            ],
            benefits: ["Reduced attack surface", "Protection against ransomware", "Secure remote workforce", "Data loss prevention"],
            industries: ["Corporate", "Healthcare", "Education", "BPO"],
            tools: ["CrowdStrike", "SentinelOne", "Microsoft Defender", "ManageEngine"],
            securityFeatures: ["Ransomware protection checks", "Remote wipe capability review", "Disk encryption verification"],
            icon: "Shield",
            image: "/cyber-security.png",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Endpoints Secured", value: "5000+" },
                { label: "Malware Blocked", value: "100%" },
                { label: "Patch Compliance", value: "99%" }
            ],
            keywords: ["Endpoint Security Audit", "EDR Assessment", "Device Hardening", "BYOD Security"],
            layoutVariant: "security",
            faqs: [
                { question: "What endpoints are covered?", answer: "We cover desktops, laptops, mobile devices, and servers." },
                { question: "Do you assess BYOD policies?", answer: "Yes, we evaluate the security risks and controls associated with Bring Your Own Device (BYOD) policies." },
                { question: "Can you recommend EDR solutions?", answer: "Yes, based on our assessment, we can recommend appropriate Endpoint Detection and Response (EDR) tools." }
            ]
        },
        "firewall-audit": {
            title: "Firewall & Perimeter Security Audit",
            description: "Optimizing your first line of defense.",
            valueProposition: "Ensure your firewall rules are tight, efficient, and secure.",
            features: ["Rule Base Analysis", "Configuration Review", "Firmware Updates Check", "Log Monitoring Assessment"],
            content: "Firewalls are critical for network security. Our audit ensures your firewall rules are optimized, unused rules are removed, and configurations align with best practices to prevent unauthorized access.",
            problemsSolved: ["Redundant firewall rules", "Open ports", "Performance bottlenecks", "Shadow IT traffic"],
            process: [
                { title: "Rule Analysis", description: "Review rule base for redundancy and risk." },
                { title: "Config Check", description: "Verify device hardening and access controls." },
                { title: "Log Review", description: "Analyze traffic logs for anomalies." },
                { title: "Optimization", description: "Clean up rule base and update firmware." }
            ],
            benefits: ["Improved network performance", "Tightened security perimeter", "Simplified management", "Compliance adherence"],
            industries: ["All Industries"],
            tools: ["Tufin", "AlgoSec", "FireMon", "Vendor Native Tools"],
            securityFeatures: ["Change management review", "Backup verification", "Failover testing"],
            icon: "Activity",
            image: "/server-room.png",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Rules Optimized", value: "10k+" },
                { label: "Security Score", value: "98%" },
                { label: "Performance Gain", value: "25%" }
            ],
            keywords: ["Firewall Audit Services", "Perimeter Security", "Firewall Rule Optimization", "Network Defense Audit"],
            layoutVariant: "security",
            faqs: [
                { question: "Why is a firewall audit necessary?", answer: "Over time, firewall rules can become cluttered and insecure. An audit ensures optimal performance and security." },
                { question: "Do you support all firewall brands?", answer: "We have experience with major vendors like Cisco, Palo Alto, Fortinet, Check Point, and Sophos." },
                { question: "Will the audit cause network downtime?", answer: "No, our audit is passive and does not interrupt network traffic." }
            ]
        },
        "iam-audit": {
            title: "Identity and Access Management (IAM) Audit",
            description: "Verifying that only the right people have the right access.",
            valueProposition: "Secure your digital identities and enforce least privilege access.",
            features: ["User Access Review", "Privileged Access Management (PAM) Check", "MFA Implementation Review", "Offboarding Process Audit"],
            content: "Identity is the new perimeter. We audit your IAM policies and procedures to ensure least privilege access, prevent unauthorized escalation, and secure sensitive data from insider threats.",
            problemsSolved: ["Unauthorized access", "Privilege escalation", "Dormant accounts", "Insider threats"],
            process: [
                { title: "User Review", description: "Audit active user accounts and permissions." },
                { title: "Role Analysis", description: "Verify role-based access controls (RBAC)." },
                { title: "Process Check", description: "Review onboarding and offboarding procedures." },
                { title: "MFA Check", description: "Ensure multi-factor authentication coverage." }
            ],
            benefits: ["Reduced insider risk", "Streamlined user management", "Compliance with privacy laws", "Secure privileged accounts"],
            industries: ["BFSI", "Healthcare", "Enterprise", "Government"],
            tools: ["SailPoint", "Okta", "CyberArk", "Active Directory"],
            securityFeatures: ["Zero-trust alignment", "Biometric security review", "Just-in-time access review"],
            icon: "Search",
            image: "/cyber-security.png",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Identities Managed", value: "10k+" },
                { label: "Risk Reduced", value: "80%" },
                { label: "Compliance", value: "100%" }
            ],
            keywords: ["IAM Audit", "Identity Access Management", "Privileged Access Review", "User Access Control"],
            layoutVariant: "security",
            faqs: [
                { question: "What is the focus of an IAM audit?", answer: "It focuses on user lifecycle management, authentication mechanisms (MFA), and authorization controls." },
                { question: "Do you check for dormant accounts?", answer: "Yes, identifying and removing inactive or dormant accounts is a key part of the audit." },
                { question: "Can you help implement MFA?", answer: "We can recommend and guide the implementation of Multi-Factor Authentication (MFA) solutions." }
            ]
        },
        "red-team": {
            title: "Red Team Assessments",
            description: "Full-scope simulated cyberattacks to test your defense capabilities.",
            valueProposition: "Test your defenses against a realistic, multi-vector cyberattack simulation.",
            features: ["Adversary Simulation", "Social Engineering", "Physical Security Testing", "Blue Team Response Evaluation"],
            content: "Go beyond standard testing with a Red Team assessment. We simulate a sophisticated, multi-vector attack to test not just your technology, but your people and processes, providing a realistic view of your organizational resilience.",
            problemsSolved: ["Unknown detection gaps", "Complacent security teams", "Physical security weaknesses", "Social engineering vulnerability"],
            process: [
                { title: "Reconnaissance", description: "Gather intelligence on the target." },
                { title: "Weaponization", description: "Prepare specific exploits and payloads." },
                { title: "Delivery", description: "Launch attacks (phishing, physical, network)." },
                { title: "Exploitation", description: "Gain access and move laterally." },
                { title: "Reporting", description: "Debrief with Blue Team and leadership." }
            ],
            benefits: ["Realistic security validation", "Improved incident response", "Awareness training", "Holistic security view"],
            industries: ["Defense", "Finance", "Critical Infrastructure", "Large Enterprise"],
            tools: ["Cobalt Strike", "Empire", "Social Engineering Toolkit", "Custom Scripts"],
            securityFeatures: ["Controlled rules of engagement", "Real-time coordination", "Detailed attack path mapping"],
            icon: "ShieldCheck",
            image: "/cyber-security.png",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Simulations Run", value: "20+" },
                { label: "Detection Rate", value: "Improved" },
                { label: "Resilience", value: "High" }
            ],
            keywords: ["Red Team Assessment", "Adversary Simulation", "Social Engineering Test", "Advanced Penetration Testing"],
            layoutVariant: "security",
            faqs: [
                { question: "How is Red Teaming different from Penetration Testing?", answer: "Penetration testing finds vulnerabilities. Red Teaming tests your organization's ability to detect and respond to an attack." },
                { question: "Does it include social engineering?", answer: "Yes, we can include phishing, vishing, and physical entry attempts if scoped." },
                { question: "Is it safe?", answer: "Yes, all activities are controlled and conducted within agreed-upon rules of engagement." }
            ]
        },
        "wireless-security": {
            title: "Wireless Network Security Audit",
            description: "Securing your Wi-Fi networks from unauthorized access.",
            valueProposition: "Prevent unauthorized access and eavesdropping on your wireless networks.",
            features: ["Rogue AP Detection", "Encryption Protocol Review", "Guest Network Isolation", "Signal Leakage Assessment"],
            content: "Wireless networks are convenient but risky. We assess your Wi-Fi security to prevent eavesdropping, unauthorized connections, and attacks like Evil Twin or Man-in-the-Middle.",
            problemsSolved: ["Unauthorized Wi-Fi access", "Data interception", "Rogue access points", "Weak encryption"],
            process: [
                { title: "Survey", description: "Map Wi-Fi coverage and signals." },
                { title: "Scanning", description: "Identify all access points and clients." },
                { title: "Attack Simulation", description: "Attempt to crack encryption and bypass auth." },
                { title: "Rogue Detection", description: "Locate unauthorized devices." }
            ],
            benefits: ["Secure mobility", "Protected guest access", "Compliance with wireless standards", "Prevention of drive-by attacks"],
            industries: ["Retail", "Hospitality", "Corporate Campuses", "Warehouses"],
            tools: ["Aircrack-ng", "Kismet", "Ekahau", "Wi-Fi Pineapple"],
            securityFeatures: ["WPA3 transition planning", "Radius server review", "Signal containment analysis"],
            icon: "Activity",
            image: "/server-room.png",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Networks Secured", value: "200+" },
                { label: "Rogue APs Found", value: "50+" },
                { label: "Security", value: "WPA3" }
            ],
            keywords: ["Wireless Security Audit", "WiFi Penetration Testing", "WLAN Security", "Rogue AP Detection"],
            layoutVariant: "security",
            faqs: [
                { question: "Can you detect rogue access points?", answer: "Yes, we scan for unauthorized access points that could compromise your network." },
                { question: "Do you check Guest Wi-Fi security?", answer: "Yes, we ensure guest networks are properly isolated from the corporate network." },
                { question: "What encryption standards do you recommend?", answer: "We generally recommend WPA3 or WPA2-Enterprise for secure corporate environments." }
            ]
        },
        "cti": {
            title: "Cyber Threat Intelligence (CTI) Audit",
            description: "Leveraging intelligence to anticipate and prevent attacks.",
            valueProposition: "Turn data into actionable intelligence to preempt cyber threats.",
            features: ["Dark Web Monitoring", "Threat Feed Integration", "Brand Reputation Monitoring", "Attack Surface Analysis"],
            content: "Stay ahead of threats with actionable intelligence. We audit your CTI capabilities to ensure you are effectively monitoring for compromised credentials, leaked data, and emerging threats targeting your industry.",
            problemsSolved: ["Unknown external threats", "Leaked credentials", "Brand impersonation", "Reactive security posture"],
            process: [
                { title: "Collection", description: "Gather data from open, deep, and dark web." },
                { title: "Processing", description: "Filter and normalize the data." },
                { title: "Analysis", description: "Contextualize threats to your organization." },
                { title: "Dissemination", description: "Deliver alerts and reports." }
            ],
            benefits: ["Proactive threat defense", "Faster incident response", "Brand protection", "Strategic decision support"],
            industries: ["BFSI", "Pharma", "Legal", "Government"],
            tools: ["Recorded Future", "Anomali", "MISP", "OpenCTI"],
            securityFeatures: ["Tailored threat feeds", "Analyst-verified intelligence", "Integration with SIEM"],
            icon: "Search",
            image: "/bg.jpg",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Threats Blocked", value: "1M+" },
                { label: "Response Time", value: "<1m" },
                { label: "Intelligence", value: "Real-time" }
            ],
            keywords: ["Cyber Threat Intelligence", "Dark Web Monitoring", "Threat Intelligence Audit", "Brand Protection"],
            layoutVariant: "security",
            faqs: [
                { question: "What sources do you monitor?", answer: "We monitor the open web, deep web, and dark web for mentions of your brand and assets." },
                { question: "Can you find leaked credentials?", answer: "Yes, we search for compromised credentials associated with your domain." },
                { question: "How does CTI help?", answer: "It allows you to be proactive rather than reactive, addressing threats before they become attacks." }
            ]
        },
        "cloud-audit": {
            title: "Cloud & Infrastructure Audit",
            description: "Comprehensive security and compliance audit for Cloud (AWS/Azure), Hybrid, and On-premise environments.",
            valueProposition: "Ensure your entire infrastructure stack is secure, compliant, and optimized.",
            features: ["Cloud Configuration Review", "Hybrid Connectivity Security", "On-premise Infrastructure Audit", "Compliance Mapping"],
            content: "Whether you are on the cloud, on-premise, or hybrid, we provide a unified audit of your infrastructure. We identify security gaps, misconfigurations, and compliance issues across your entire technology stack.",
            problemsSolved: ["Fragmented security visibility", "Cloud misconfigurations", "Legacy infrastructure risks", "Compliance gaps"],
            process: [
                { title: "Discovery", description: "Map entire infrastructure." },
                { title: "Assessment", description: "Review configs and controls." },
                { title: "Gap Analysis", description: "Identify security weaknesses." },
                { title: "Reporting", description: "Unified audit report." }
            ],
            benefits: ["Holistic security view", "Regulatory compliance", "Risk reduction", "Optimized performance"],
            industries: ["Enterprise", "Fintech", "Healthcare"],
            tools: ["Prowler", "ScoutSuite", "Nessus", "Custom Scripts"],
            securityFeatures: ["Cross-environment analysis", "Zero-trust validation", "Data flow mapping"],
            icon: "Cloud",
            image: "/server-room.png",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Assets Audited", value: "50k+" },
                { label: "Risks Found", value: "1000+" },
                { label: "Coverage", value: "100%" }
            ],
            keywords: ["Cloud Audit Services", "Hybrid Infrastructure Audit", "AWS Security Audit", "Azure Compliance Review"],
            layoutVariant: "technical",
            faqs: [
                { question: "Do you cover hybrid environments?", answer: "Yes, we specialize in auditing complex hybrid environments spanning on-premise and cloud." },
                { question: "Which cloud providers do you support?", answer: "We support AWS, Azure, and GCP." },
                { question: "Is this different from a VAPT?", answer: "Yes, this focuses on configuration, architecture, and compliance, whereas VAPT focuses on exploitation." }
            ]
        },
        "iso-27001": {
            title: "ISO 27001 Readiness",
            description: "End-to-end consulting to prepare your organization for ISO 27001 certification.",
            valueProposition: "Achieve ISO 27001 certification with confidence and ease.",
            features: ["Gap Analysis", "Policy Development", "Risk Assessment", "Internal Audit"],
            content: "ISO 27001 is the gold standard for information security. We guide you through the entire process, from initial gap analysis to final certification, ensuring your ISMS is robust and compliant.",
            problemsSolved: ["Lack of security framework", "Compliance pressure", "Undefined processes", "Risk management gaps"],
            process: [
                { title: "Gap Analysis", description: "Assess current state vs ISO standards." },
                { title: "Implementation", description: "Develop policies and controls." },
                { title: "Internal Audit", description: "Verify compliance before external audit." },
                { title: "Certification", description: "Support during the certification audit." }
            ],
            benefits: ["Global recognition", "Enhanced trust", "Structured security", "Competitive advantage"],
            industries: ["IT Services", "BPO", "SaaS", "Finance"],
            tools: ["Isora", "Vanta", "Drata", "Excel/SharePoint"],
            securityFeatures: ["ISMS framework", "Risk treatment plan", "SOA development"],
            icon: "ShieldCheck",
            image: "/cyber-security.png",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Certifications", value: "50+" },
                { label: "Success Rate", value: "100%" },
                { label: "Time to Certify", value: "3-6mo" }
            ],
            keywords: ["ISO 27001 Consultant Chennai", "ISMS Implementation", "ISO 27001 Audit Readiness", "Information Security Certification"],
            layoutVariant: "consulting",
            faqs: [
                { question: "How long does it take to get certified?", answer: "Typically 3 to 6 months, depending on your organization's size and maturity." },
                { question: "Do you provide the certification?", answer: "No, we prepare you for it. Certification is done by an accredited external registrar." },
                { question: "What is an ISMS?", answer: "Information Security Management System (ISMS) is the framework of policies and controls required by ISO 27001." }
            ]
        },
        "soc2-consulting": {
            title: "SOC2 Type 2 Consulting",
            description: "Expert guidance to achieve and maintain SOC2 Type 2 compliance.",
            valueProposition: "Prove your security commitment to enterprise clients with SOC2.",
            features: ["Scope Definition", "Control Mapping", "Readiness Assessment", "Audit Support"],
            content: "For SaaS companies, SOC2 is a must. We help you define your scope, implement necessary controls, and prepare for the audit, ensuring you pass your Type 1 and Type 2 assessments smoothly.",
            problemsSolved: ["Sales blockers", "Vendor security questionnaires", "Trust issues", "Unverified controls"],
            process: [
                { title: "Scoping", description: "Define Trust Service Criteria (TSC)." },
                { title: "Gap Assessment", description: "Identify missing controls." },
                { title: "Remediation", description: "Implement fixes and policies." },
                { title: "Audit Prep", description: "Gather evidence for the auditor." }
            ],
            benefits: ["Unlock enterprise deals", "Build customer trust", "Verify security controls", "Streamline due diligence"],
            industries: ["SaaS", "Cloud Providers", "Data Centers"],
            tools: ["Vanta", "Drata", "Secureframe", "Sprinto"],
            securityFeatures: ["Continuous monitoring", "Evidence collection", "Policy automation"],
            icon: "FileText",
            image: "/cyber-security.png",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "SOC2 Reports", value: "30+" },
                { label: "Audit Success", value: "100%" },
                { label: "Time Saved", value: "50%" }
            ],
            keywords: ["SOC2 Consultant India", "SOC2 Type 2 Compliance", "SaaS Security Audit", "SOC2 Readiness"],
            layoutVariant: "consulting",
            faqs: [
                { question: "What is the difference between Type 1 and Type 2?", answer: "Type 1 tests design at a point in time. Type 2 tests operating effectiveness over a period (usually 6-12 months)." },
                { question: "Do we need special software?", answer: "We recommend using compliance automation platforms like Vanta or Drata, which we can help manage." },
                { question: "Which Trust Service Criteria should we choose?", answer: "Security is mandatory. Availability, Confidentiality, Processing Integrity, and Privacy are optional based on your business." }
            ]
        },
        "dr-audit": {
            title: "Disaster Recovery Audit",
            description: "Ensuring business continuity in the face of disruption.",
            valueProposition: "Guarantee your business can survive and recover from any disaster.",
            features: ["RTO/RPO Analysis", "Backup Integrity Testing", "Failover Simulation", "Plan Documentation Review"],
            content: "Hope is not a strategy. We audit your Disaster Recovery and Business Continuity plans to ensure you can recover critical systems and data quickly in the event of a cyberattack, natural disaster, or system failure.",
            problemsSolved: ["Data loss", "Extended downtime", "Business interruption", "Compliance failure"],
            process: [
                { title: "Review", description: "Analyze BCP/DR documentation and policies." },
                { title: "Verification", description: "Check backup logs and storage." },
                { title: "Testing", description: "Simulate disaster scenarios and failover." },
                { title: "Reporting", description: "Identify gaps in recovery capabilities." }
            ],
            benefits: ["Business resilience", "Minimized financial loss", "Regulatory compliance", "Stakeholder confidence"],
            industries: ["All Industries"],
            tools: ["Veeam", "Zerto", "Azure Site Recovery", "Custom Scripts"],
            securityFeatures: ["Ransomware-proof backups", "Geographic redundancy check", "Communication plan review"],
            icon: "Activity",
            image: "/server-room.png",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Recovery Time", value: "<4h" },
                { label: "Data Integrity", value: "100%" },
                { label: "Drills Conducted", value: "Quarterly" }
            ],
            keywords: ["Disaster Recovery Audit", "Business Continuity Planning", "Backup Audit", "DR Testing"],
            layoutVariant: "security",
            faqs: [
                { question: "What is RTO and RPO?", answer: "RTO (Recovery Time Objective) is how quickly you need to recover. RPO (Recovery Point Objective) is how much data loss is acceptable." },
                { question: "Do you test the backups?", answer: "Yes, we verify that backups are complete, uncorrupted, and can be successfully restored." },
                { question: "How often should DR plans be tested?", answer: "At least annually, or whenever major infrastructure changes occur." }
            ]
        },
        "soc-monitoring": {
            title: "SOC & Monitoring Services",
            description: "24/7 Security Operations Center for real-time threat detection.",
            valueProposition: "24/7 eyes on glass to detect and stop threats in real-time.",
            features: ["24/7 Real-time Monitoring", "Incident Response", "Log Management (SIEM)", "Threat Hunting"],
            content: "Our SOC provides round-the-clock surveillance of your IT environment. Using advanced SIEM tools and expert analysts, we detect, analyze, and respond to security incidents in real-time.",
            problemsSolved: ["Undetected attacks", "Alert fatigue", "Slow response times", "Compliance logging requirements"],
            process: [
                { title: "Ingestion", description: "Collect logs from all sources." },
                { title: "Detection", description: "Correlate events to identify threats." },
                { title: "Analysis", description: "Human analysts investigate alerts." },
                { title: "Response", description: "Contain and remediate confirmed incidents." }
            ],
            benefits: ["Reduced dwell time", "Continuous protection", "Expert analysis", "Compliance reporting"],
            industries: ["BFSI", "Healthcare", "Retail", "Manufacturing"],
            tools: ["Splunk", "Elastic Security", "Sentinel", "QRadar"],
            securityFeatures: ["Tier 1/2/3 analysts", "Custom playbooks", "Threat intelligence integration"],
            icon: "Shield",
            image: "/cyber-security.png",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Alerts Analyzed", value: "1M+" },
                { label: "Response Time", value: "<15m" },
                { label: "Threats Blocked", value: "99.9%" }
            ],
            keywords: ["SOC Services Chennai", "Security Operations Center India", "SIEM Monitoring", "Managed Security Services Chennai"],
            layoutVariant: "security",
            faqs: [
                { question: "Do you offer 24/7 monitoring?", answer: "Yes, our SOC operates 24/7/365 to ensure your environment is always protected." },
                { question: "What SIEM tools do you use?", answer: "We work with major SIEM platforms like Splunk, Azure Sentinel, and Elastic Security." },
                { question: "How quickly do you respond to alerts?", answer: "Our SLA for critical alerts is typically under 15 minutes." },
                { question: "Can you monitor cloud environments?", answer: "Yes, we monitor on-premise, cloud (AWS, Azure, GCP), and hybrid environments." },
                { question: "Do you provide incident response?", answer: "Yes, our SOC team includes incident responders who can take immediate action to contain threats." }
            ]
        }
    },
    "infrastructure": {
        "managed-it": {
            title: "Managed IT Services",
            description: "Proactive IT management to keep your business running smoothly.",
            valueProposition: "Focus on your business while we handle your entire IT infrastructure.",
            features: ["24/7 Monitoring & Support", "Patch Management", "Asset Management", "Vendor Management"],
            content: "Downtime is expensive. Our Managed IT Services provide comprehensive support for your entire IT environment. From helpdesk support to strategic planning, we act as your dedicated IT department, ensuring high availability and performance.",
            problemsSolved: ["Frequent downtime", "Unpredictable IT costs", "Lack of internal IT expertise", "Security vulnerabilities"],
            process: [
                { title: "Onboarding", description: "Audit and document current infrastructure." },
                { title: "Stabilization", description: "Fix immediate issues and implement monitoring." },
                { title: "Optimization", description: "Streamline processes and improve performance." },
                { title: "Management", description: "Ongoing support and strategic reviews." }
            ],
            benefits: ["Predictable monthly costs", "Reduced downtime", "Access to enterprise tools", "Scalable support"],
            industries: ["Small Business", "Healthcare", "Legal", "Manufacturing"],
            tools: ["ConnectWise", "Kaseya", "TeamViewer", "Microsoft 365"],
            securityFeatures: ["Endpoint protection included", "Regular backups", "Security awareness training"],
            icon: "Server",
            image: "/server-room.png",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Uptime Guaranteed", value: "99.9%" },
                { label: "Tickets Resolved", value: "10k+" },
                { label: "Response Time", value: "<10m" }
            ],
            keywords: ["Managed IT Services Chennai", "IT Support", "AMC Services", "Remote Infrastructure Management"],
            layoutVariant: "technical",
            faqs: [
                { question: "What is included in Managed IT Services?", answer: "It includes 24/7 monitoring, helpdesk support, patch management, antivirus, and backup management." },
                { question: "Do you support remote employees?", answer: "Yes, we provide secure remote support for employees working from anywhere." },
                { question: "How is pricing determined?", answer: "Pricing is typically based on the number of users or devices (endpoints) we manage." },
                { question: "Do you provide on-site support in Chennai?", answer: "Yes, we provide both remote and on-site support for businesses in Chennai and surrounding areas." },
                { question: "What happens if our server goes down?", answer: "Our monitoring system alerts us immediately, and we begin troubleshooting instantly to restore services." }
            ]
        },
        "cloud-solutions": {
            title: "Cloud Solutions & Migration",
            description: "Seamless migration and management of cloud infrastructure.",
            valueProposition: "Modernize your business with scalable, secure cloud solutions.",
            features: ["Cloud Migration Strategy", "Azure/AWS Management", "Cloud Cost Optimization", "Hybrid Cloud Setup"],
            content: "Move to the cloud with confidence. Whether you're migrating legacy applications or building cloud-native solutions, our experts guide you through every step of the journey, ensuring security, scalability, and cost-efficiency.",
            problemsSolved: ["Legacy hardware costs", "Limited scalability", "Remote access challenges", "Data loss risks"],
            process: [
                { title: "Assessment", description: "Evaluate readiness and choose the right platform." },
                { title: "Planning", description: "Design the architecture and migration roadmap." },
                { title: "Migration", description: "Execute the move with minimal downtime." },
                { title: "Optimization", description: "Fine-tune for performance and cost." }
            ],
            benefits: ["Scalability on demand", "Reduced capital expenditure", "Enhanced collaboration", "Business continuity"],
            industries: ["Startups", "E-commerce", "Logistics", "Media"],
            tools: ["AWS", "Microsoft Azure", "Google Cloud", "Terraform"],
            securityFeatures: ["Cloud security posture management", "Identity management", "Data encryption"],
            icon: "Cloud",
            image: "/bg.jpg",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Migrations Completed", value: "50+" },
                { label: "Cost Savings", value: "30%" },
                { label: "Uptime", value: "99.99%" }
            ],
            keywords: ["Cloud Migration Services", "AWS Consulting", "Azure Migration", "Cloud Management"],
            layoutVariant: "technical",
            faqs: [
                { question: "Which cloud provider should we choose?", answer: "We assess your specific needs and recommend the best fit among AWS, Azure, or GCP." },
                { question: "Will there be downtime during migration?", answer: "We plan migrations to minimize or eliminate downtime, often performing cutovers during off-hours." },
                { question: "Can you help reduce our cloud bill?", answer: "Yes, we offer cloud cost optimization services to identify and eliminate waste." }
            ]
        },
        "network-infrastructure": {
            title: "Network Infrastructure Setup",
            description: "Designing and building robust, high-speed networks.",
            valueProposition: "Build a reliable network foundation for your digital business.",
            features: ["LAN/WAN Design", "Structured Cabling", "Wi-Fi Implementation", "VPN Setup"],
            content: "A reliable network is the backbone of any modern business. We design, implement, and maintain high-performance network infrastructures that support your data, voice, and video communications needs.",
            problemsSolved: ["Slow network speeds", "Wi-Fi dead zones", "Unreliable connections", "Complex network management"],
            process: [
                { title: "Survey", description: "Site survey and requirements gathering." },
                { title: "Design", description: "Network topology and capacity planning." },
                { title: "Installation", description: "Hardware deployment and cabling." },
                { title: "Configuration", description: "Setup VLANs, QoS, and security." }
            ],
            benefits: ["High-speed connectivity", "Seamless mobility", "Future-proof design", "Secure data transfer"],
            industries: ["Real Estate", "Education", "Hospitality", "Manufacturing"],
            tools: ["Cisco", "Ubiquiti", "Aruba", "Fortinet"],
            securityFeatures: ["Network segmentation", "NAC implementation", "Guest network isolation"],
            icon: "Network",
            image: "/server-room.png",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Ports Installed", value: "5000+" },
                { label: "Sites Connected", value: "100+" },
                { label: "Speed Increase", value: "10x" }
            ],
            keywords: ["Network Installation", "Structured Cabling", "Office Wi-Fi Setup", "Network Design"],
            layoutVariant: "technical",
            faqs: [
                { question: "Do you do structured cabling?", answer: "Yes, we handle end-to-end structured cabling for copper and fiber optic networks." },
                { question: "Can you improve our office Wi-Fi?", answer: "We conduct heatmaps to identify dead zones and optimize AP placement for full coverage." },
                { question: "Do you support multi-site networks?", answer: "Yes, we design and implement SD-WAN and VPN solutions to connect multiple branch offices." }
            ]
        },
        "outsourcing": {
            title: "IT Outsourcing",
            description: "Strategic outsourcing to optimize costs and focus on core business.",
            valueProposition: "Access global talent and reduce operational costs effectively.",
            features: ["Dedicated Teams", "Project-based Outsourcing", "Staff Augmentation", "BPO Services"],
            content: "Leverage our global talent pool to accelerate your projects and reduce costs. Whether you need a dedicated development team or help with specific IT functions, our outsourcing models are flexible and transparent.",
            problemsSolved: ["High hiring costs", "Talent shortage", "Scaling challenges", "Operational overhead"],
            process: [
                { title: "Requirement", description: "Define skills and team size needed." },
                { title: "Selection", description: "Screen and interview candidates." },
                { title: "Onboarding", description: "Integrate team with your workflows." },
                { title: "Delivery", description: "Manage performance and deliverables." }
            ],
            benefits: ["Cost reduction (up to 40%)", "Access to specialized skills", "Faster time to market", "Scalability"],
            industries: ["Software", "Fintech", "Startups", "Enterprise"],
            tools: ["Jira", "Slack", "Zoom", "GitHub"],
            securityFeatures: ["NDA & IP protection", "Secure remote environments", "Background checks"],
            icon: "Briefcase",
            image: "/office-culture.png",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Developers", value: "100+" },
                { label: "Client Retention", value: "95%" },
                { label: "Cost Saved", value: "40%" }
            ],
            keywords: ["IT Outsourcing India", "Offshore Development", "Staff Augmentation", "Dedicated Developers"],
            layoutVariant: "technical",
            faqs: [
                { question: "How do you ensure quality?", answer: "We have strict hiring processes and dedicated project managers to ensure high-quality deliverables." },
                { question: "Can we interview the developers?", answer: "Yes, you can interview and select the team members who will work on your project." },
                { question: "What about time zone differences?", answer: "We offer flexible working hours to overlap with your time zone for effective collaboration." }
            ]
        },
        "consulting": {
            title: "IT Infrastructure Consulting",
            description: "Strategic advice to optimize your IT infrastructure.",
            valueProposition: "Align your IT strategy with your business goals.",
            features: ["Infrastructure Assessment", "Roadmap Planning", "Technology Selection", "Cost Optimization"],
            content: "Technology is evolving rapidly. Our consulting services help you navigate the complex IT landscape, selecting the right technologies and designing an infrastructure that supports your long-term business objectives.",
            problemsSolved: ["Outdated technology", "High IT costs", "Misaligned IT strategy", "Scalability issues"],
            process: [
                { title: "Assess", description: "Evaluate current state." },
                { title: "Strategize", description: "Define future state and roadmap." },
                { title: "Plan", description: "Detailed implementation plan." },
                { title: "Execute", description: "Oversight and guidance." }
            ],
            benefits: ["Future-proof IT", "Cost efficiency", "Strategic alignment", "Competitive advantage"],
            industries: ["All Industries"],
            tools: ["SWOT Analysis", "TCO Models", "Roadmapping Tools"],
            securityFeatures: ["Security-by-design", "Risk management", "Compliance alignment"],
            icon: "Briefcase",
            image: "/office-culture.png",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Projects", value: "100+" },
                { label: "Savings Identified", value: "$1M+" },
                { label: "ROI", value: "10x" }
            ],
            keywords: ["IT Consulting", "Infrastructure Strategy", "Digital Transformation", "Technology Roadmap"],
            layoutVariant: "consulting",
            faqs: []
        },
        "cloud-consulting": {
            title: "Cloud Infrastructure Consulting",
            description: "Expert guidance for your cloud journey.",
            valueProposition: "Maximize the value of your cloud investment.",
            features: ["Cloud Strategy", "Architecture Design", "Cost Management", "Governance"],
            content: "The cloud offers immense potential, but also complexity. We help you design secure, scalable, and cost-effective cloud architectures that leverage the full power of AWS, Azure, or GCP.",
            problemsSolved: ["Cloud sprawl", "Unexpected costs", "Security gaps", "Vendor lock-in"],
            process: [
                { title: "Analyze", description: "Review business needs and workloads." },
                { title: "Design", description: "Architect cloud solutions." },
                { title: "Optimize", description: "Refine for cost and performance." },
                { title: "Govern", description: "Set up policies and controls." }
            ],
            benefits: ["Optimized cloud spend", "Scalable architecture", "Enhanced security", "Innovation agility"],
            industries: ["Tech", "Enterprise", "Startups"],
            tools: ["AWS Well-Architected", "Azure Advisor", "CloudHealth"],
            securityFeatures: ["Cloud security posture", "Identity management", "Compliance"],
            icon: "Cloud",
            image: "/bg.jpg",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Cloud Projects", value: "50+" },
                { label: "Cost Saved", value: "30%" },
                { label: "Architects", value: "Certified" }
            ],
            keywords: ["Cloud Consulting", "AWS Architect", "Azure Consultant", "Cloud Strategy"],
            layoutVariant: "consulting",
            faqs: []
        },
        "fms": {
            title: "IT Facility Management (FMS)",
            description: "On-site IT support and asset management.",
            valueProposition: "Reliable on-site support for your physical IT assets.",
            features: ["Desktop Support", "Asset Tracking", "Vendor Management", "Preventive Maintenance"],
            content: "Keep your office IT running smoothly with our Facility Management Services. We provide on-site engineers to handle day-to-day IT support, asset management, and vendor coordination.",
            problemsSolved: ["Hardware failures", "User support delays", "Asset loss", "Vendor coordination issues"],
            process: [
                { title: "Deploy", description: "Station on-site engineers." },
                { title: "Manage", description: "Handle daily tickets and assets." },
                { title: "Maintain", description: "Regular preventive checks." },
                { title: "Report", description: "Monthly SLA and asset reports." }
            ],
            benefits: ["Immediate support", "Extended asset life", "User satisfaction", "Operational efficiency"],
            industries: ["Corporate Offices", "Manufacturing", "Education"],
            tools: ["ServiceDesk Plus", "AssetExplorer", "Jira"],
            securityFeatures: ["Physical security checks", "Data wipe services", "Access control"],
            icon: "Building2",
            image: "/office-culture.png",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Sites Managed", value: "20+" },
                { label: "Assets Managed", value: "5000+" },
                { label: "SLA Met", value: "99%" }
            ],
            keywords: ["FMS Services", "Facility Management", "Desktop Support", "IT Asset Management"],
            layoutVariant: "technical",
            faqs: []
        },
        "remote-services": {
            title: "Remote Infrastructure Services",
            description: "Remote management of your global IT infrastructure.",
            valueProposition: "24/7 remote support for your distributed infrastructure.",
            features: ["Remote Monitoring", "Server Management", "Database Administration", "Patching"],
            content: "Manage your global infrastructure from a central hub. Our Remote Infrastructure Management (RIM) services provide 24/7 monitoring and support for your servers, databases, and networks, no matter where they are located.",
            problemsSolved: ["Geographic dispersion", "24/7 coverage gaps", "High on-site costs", "Skill shortages"],
            process: [
                { title: "Connect", description: "Establish secure remote access." },
                { title: "Monitor", description: "24/7 health checks." },
                { title: "Resolve", description: "Remote troubleshooting and fixing." },
                { title: "Optimize", description: "Performance tuning." }
            ],
            benefits: ["24/7 coverage", "Cost reduction", "Expert access", "Proactive management"],
            industries: ["Global Enterprise", "Logistics", "Retail"],
            tools: ["SolarWinds", "Nagios", "TeamViewer"],
            securityFeatures: ["Encrypted connections", "MFA access", "Audit trails"],
            icon: "Server",
            image: "/server-room.png",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Servers Managed", value: "1000+" },
                { label: "Uptime", value: "99.9%" },
                { label: "Tickets/Mo", value: "500+" }
            ],
            keywords: ["RIM Services", "Remote Infrastructure Management", "NOC Services", "Remote Support"],
            layoutVariant: "technical",
            faqs: []
        },
        "network-architecture": {
            title: "Network Architecture Design",
            description: "Designing scalable and secure network topologies.",
            valueProposition: "Build a network that grows with your business.",
            features: ["Topology Design", "Capacity Planning", "Redundancy Planning", "Security Architecture"],
            content: "A well-designed network is the foundation of a digital business. We design robust, scalable, and secure network architectures that support your current needs and future growth.",
            problemsSolved: ["Network bottlenecks", "Single points of failure", "Scalability limits", "Security vulnerabilities"],
            process: [
                { title: "Requirements", description: "Understand business needs." },
                { title: "Design", description: "Create high-level and low-level designs." },
                { title: "Validate", description: "Simulate and test design." },
                { title: "Handover", description: "Documentation and implementation guide." }
            ],
            benefits: ["High availability", "Scalability", "Performance", "Security"],
            industries: ["Telecom", "Enterprise", "Data Centers"],
            tools: ["Visio", "GNS3", "Cisco VIRL"],
            securityFeatures: ["Segmentation", "Zero Trust", "Encryption"],
            icon: "Network",
            image: "/server-room.png",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Designs Delivered", value: "50+" },
                { label: "Nodes Supported", value: "10k+" },
                { label: "Performance", value: "Optimized" }
            ],
            keywords: ["Network Design", "Network Architecture", "LAN/WAN Design", "SD-WAN"],
            layoutVariant: "technical",
            faqs: []
        },
        "server-implementation": {
            title: "Server Implementation",
            description: "Deployment and configuration of physical and virtual servers.",
            valueProposition: "Expert deployment of your server infrastructure.",
            features: ["OS Installation", "Virtualization Setup", "Cluster Configuration", "Hardening"],
            content: "From bare metal to virtual clusters, we handle the end-to-end implementation of your server infrastructure. We ensure your servers are configured for performance, security, and reliability.",
            problemsSolved: ["Deployment delays", "Configuration errors", "Security risks", "Performance issues"],
            process: [
                { title: "Plan", description: "Hardware/Software specs." },
                { title: "Install", description: "Rack, stack, and OS install." },
                { title: "Configure", description: "Roles, services, and security." },
                { title: "Test", description: "Load testing and validation." }
            ],
            benefits: ["Rapid deployment", "Best-practice config", "Stable environment", "Secure baseline"],
            industries: ["All Industries"],
            tools: ["VMware", "Hyper-V", "Ansible"],
            securityFeatures: ["OS Hardening", "Patching", "Access Control"],
            icon: "Server",
            image: "/server-room.png",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Servers Deployed", value: "500+" },
                { label: "Virtualization", value: "Expert" },
                { label: "Success", value: "100%" }
            ],
            keywords: ["Server Installation", "Windows Server", "Linux Administration", "Virtualization"],
            layoutVariant: "technical",
            faqs: []
        },
        "data-center-ops": {
            title: "Data Center Operations",
            description: "Management and maintenance of data center facilities.",
            valueProposition: "Ensure your data center runs at peak efficiency.",
            features: ["Rack & Stack", "Power & Cooling Mgmt", "Cable Management", "Physical Security"],
            content: "We manage the physical aspects of your data center, ensuring optimal environmental conditions, power availability, and physical security for your critical hardware.",
            problemsSolved: ["Overheating", "Power failures", "Cable mess", "Physical breaches"],
            process: [
                { title: "Monitor", description: "Environmental and power monitoring." },
                { title: "Maintain", description: "Regular facility maintenance." },
                { title: "Manage", description: "Capacity and asset planning." },
                { title: "Secure", description: "Physical access control." }
            ],
            benefits: ["Uptime", "Efficiency", "Longevity of hardware", "Security"],
            industries: ["Colocation", "Enterprise", "Telecom"],
            tools: ["DCIM", "BMS", "Environmental Sensors"],
            securityFeatures: ["Biometrics", "CCTV", "Access Logs"],
            icon: "Database",
            image: "/server-room.png",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Uptime", value: "99.999%" },
                { label: "PUE", value: "<1.5" },
                { label: "Incidents", value: "0" }
            ],
            keywords: ["DC Ops", "Data Center Management", "Smart Hands", "Facility Management"],
            layoutVariant: "technical",
            faqs: []
        },
        "structured-cabling": {
            title: "Structured Cabling",
            description: "Professional cabling solutions for data and voice.",
            valueProposition: "The physical foundation of your network connectivity.",
            features: ["Cat6/6A/Fiber Install", "Rack Organization", "Patch Panel Termination", "Certification"],
            content: "Messy cables lead to network problems. We provide professional structured cabling services, ensuring your physical network layer is organized, labeled, and certified for high-speed data transmission.",
            problemsSolved: ["Connectivity issues", "Troubleshooting difficulty", "Airflow blockage", "Unprofessional look"],
            process: [
                { title: "Design", description: "Cable path and drop planning." },
                { title: "Pull", description: "Running cables." },
                { title: "Terminate", description: "Jacks and patch panels." },
                { title: "Test", description: "Fluke certification." }
            ],
            benefits: ["Reliable connectivity", "Easy troubleshooting", "Future-proof", "Clean aesthetics"],
            industries: ["Construction", "Real Estate", "Office Fitouts"],
            tools: ["Fluke Testers", "Crimping Tools", "Labelers"],
            securityFeatures: ["Fire-rated cables", "Secure conduits", "Physical protection"],
            icon: "Network",
            image: "/server-room.png",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Drops Installed", value: "10k+" },
                { label: "Miles of Cable", value: "100+" },
                { label: "Certified", value: "100%" }
            ],
            keywords: ["Structured Cabling", "Fiber Optic Splicing", "Network Cabling", "Office Wiring"],
            layoutVariant: "technical",
            faqs: []
        },
        "aws-management": {
            title: "AWS Management Services",
            description: "Expert management of your AWS environment.",
            valueProposition: "Optimize and secure your AWS cloud infrastructure.",
            features: ["EC2/S3/RDS Management", "Cost Optimization", "Security Hub Mgmt", "Auto-scaling"],
            content: "Get the most out of AWS without the management headache. We handle provisioning, monitoring, security, and cost optimization for your AWS workloads.",
            problemsSolved: ["Complexity", "Cost overruns", "Security misconfigurations", "Performance issues"],
            process: [
                { title: "Audit", description: "Review current AWS setup." },
                { title: "Optimize", description: "Right-sizing and RI planning." },
                { title: "Secure", description: "IAM and Security Group hardening." },
                { title: "Manage", description: "24/7 monitoring and support." }
            ],
            benefits: ["Lower bills", "Better performance", "Enhanced security", "Expert support"],
            industries: ["SaaS", "Startups", "Enterprise"],
            tools: ["AWS Console", "CloudWatch", "Trusted Advisor"],
            securityFeatures: ["GuardDuty", "WAF", "Shield"],
            icon: "Cloud",
            image: "/bg.jpg",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Instances Managed", value: "500+" },
                { label: "Savings", value: "25%" },
                { label: "Certified", value: "Yes" }
            ],
            keywords: ["AWS Managed Services", "AWS Support", "Cloud Management", "DevOps"],
            layoutVariant: "technical",
            faqs: []
        },
        "azure-management": {
            title: "Azure Management Services",
            description: "Comprehensive management for Microsoft Azure.",
            valueProposition: "Maximize your Microsoft Azure investment.",
            features: ["VM/Blob/SQL Management", "Azure AD Mgmt", "Cost Management", "Hybrid Setup"],
            content: "We provide end-to-end management for your Azure environment. From identity management with Entra ID to managing VMs and SQL databases, we ensure your Azure cloud is secure and efficient.",
            problemsSolved: ["Identity sprawl", "Unmanaged resources", "Compliance gaps", "Integration issues"],
            process: [
                { title: "Assess", description: "Azure readiness and health check." },
                { title: "Configure", description: "Policy and blueprint application." },
                { title: "Monitor", description: "Azure Monitor and Sentinel." },
                { title: "Support", description: "Ongoing management." }
            ],
            benefits: ["Seamless Microsoft integration", "Security", "Compliance", "Cost control"],
            industries: ["Enterprise", "Corporate", "Govt"],
            tools: ["Azure Portal", "Lighthouse", "Arc"],
            securityFeatures: ["Sentinel", "Defender for Cloud", "Key Vault"],
            icon: "Cloud",
            image: "/bg.jpg",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Tenants Managed", value: "50+" },
                { label: "Security Score", value: "90%+" },
                { label: "Uptime", value: "99.9%" }
            ],
            keywords: ["Azure Managed Services", "Microsoft Cloud", "Azure Support", "Cloud Ops"],
            layoutVariant: "technical",
            faqs: []
        },
        "cloud-migration": {
            title: "Cloud Migration Services",
            description: "Safe and efficient migration to the cloud.",
            valueProposition: "Move to the cloud with zero data loss and minimal downtime.",
            features: ["Lift & Shift", "Re-platforming", "Database Migration", "Validation"],
            content: "Migrating to the cloud is a complex process. We handle the entire lifecycle, from planning and assessment to execution and validation, ensuring a smooth transition for your applications and data.",
            problemsSolved: ["Migration risks", "Downtime fears", "Data integrity issues", "Legacy compatibility"],
            process: [
                { title: "Discover", description: "Application dependency mapping." },
                { title: "Plan", description: "Migration strategy (6Rs)." },
                { title: "Migrate", description: "Execute migration waves." },
                { title: "Cutover", description: "Final sync and go-live." }
            ],
            benefits: ["Modernization", "Scalability", "Agility", "Cost savings"],
            industries: ["All Industries"],
            tools: ["AWS MGN", "Azure Migrate", "Carbonite"],
            securityFeatures: ["Encrypted transit", "Access controls", "Validation checks"],
            icon: "Cloud",
            image: "/bg.jpg",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Migrations", value: "100+" },
                { label: "Data Moved", value: "1PB+" },
                { label: "Success", value: "100%" }
            ],
            keywords: ["Cloud Migration", "Server Migration", "Database Migration", "Cloud Adoption"],
            layoutVariant: "technical",
            faqs: []
        },
        "hybrid-cloud": {
            title: "Hybrid Cloud Setup",
            description: "Integrating on-premise and cloud environments.",
            valueProposition: "The best of both worlds: Security of on-prem, scalability of cloud.",
            features: ["VPN/Direct Connect", "Identity Federation", "Workload Mobility", "Unified Mgmt"],
            content: "Don't choose between on-prem and cloud. We design and implement hybrid cloud solutions that allow you to keep sensitive data on-premise while bursting to the cloud for scalability.",
            problemsSolved: ["Data sovereignty", "Latency sensitivity", "Legacy apps", "Scalability needs"],
            process: [
                { title: "Design", description: "Network and identity architecture." },
                { title: "Connect", description: "Establish secure connectivity." },
                { title: "Integrate", description: "Unified management plane." },
                { title: "Deploy", description: "Workload placement." }
            ],
            benefits: ["Flexibility", "Compliance", "Performance", "Resilience"],
            industries: ["Finance", "Healthcare", "Manufacturing"],
            tools: ["Azure Arc", "AWS Outposts", "VMware Cloud"],
            securityFeatures: ["Unified policy", "Encryption", "Segmentation"],
            icon: "Cloud",
            image: "/bg.jpg",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Hybrid Setups", value: "20+" },
                { label: "Connectivity", value: "10Gbps" },
                { label: "Satisfaction", value: "5/5" }
            ],
            keywords: ["Hybrid Cloud", "Azure Stack", "AWS Outposts", "Cloud Integration"],
            layoutVariant: "technical",
            faqs: []
        }
    },
    "ai-automation": {
        "workflow-automation": {
            title: "Workflow Automation",
            description: "Streamline repetitive tasks and boost productivity.",
            valueProposition: "Automate manual processes to save time and reduce errors.",
            features: ["Process Mapping", "RPA Implementation", "Integration Services", "Custom Workflows"],
            content: "Stop wasting time on repetitive manual tasks. We design and implement automated workflows that connect your apps and services, allowing data to flow seamlessly and your team to focus on high-value work.",
            problemsSolved: ["Manual data entry errors", "Slow process turnaround", "High operational costs", "Disconnected systems"],
            process: [
                { title: "Discovery", description: "Identify bottleneck processes." },
                { title: "Design", description: "Map out automated workflows." },
                { title: "Build", description: "Develop scripts and integrations." },
                { title: "Deploy", description: "Test and launch automation." }
            ],
            benefits: ["Increased efficiency", "Reduced error rates", "Cost savings", "Employee satisfaction"],
            industries: ["Finance", "HR", "Logistics", "Customer Service"],
            tools: ["UiPath", "Zapier", "Power Automate", "Python"],
            securityFeatures: ["Secure credential management", "Audit logs", "Role-based access"],
            icon: "Zap",
            image: "/bg.jpg",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Hours Saved", value: "50k+" },
                { label: "Processes Automated", value: "200+" },
                { label: "ROI", value: "300%" }
            ],
            keywords: ["Business Process Automation Chennai", "RPA Services India", "Workflow Optimization", "Zapier Integration Chennai"],
            layoutVariant: "innovation",
            faqs: [
                { question: "What processes can be automated?", answer: "Almost any rule-based, repetitive task involving digital data can be automated." },
                { question: "Is it expensive to implement?", answer: "ROI is usually achieved within months due to time savings and error reduction." },
                { question: "Do we need to change our existing software?", answer: "Not necessarily. We often use tools that integrate with your existing stack." },
                { question: "Can you automate Excel tasks?", answer: "Yes, we can automate complex Excel reporting and data manipulation tasks." },
                { question: "Do you provide support after automation?", answer: "Yes, we provide ongoing support and maintenance for all automated workflows." }
            ]
        },
        "chatbots": {
            title: "AI Chatbots & Virtual Assistants",
            description: "Enhance customer support with intelligent conversational AI.",
            valueProposition: "Provide 24/7 instant support with AI-powered chatbots.",
            features: ["NLP Integration", "Multi-channel Support", "Live Agent Handoff", "Sentiment Analysis"],
            content: "Transform your customer experience with intelligent chatbots. Our AI assistants can handle inquiries, book appointments, and troubleshoot issues 24/7, ensuring your customers always get an instant response.",
            problemsSolved: ["High support volume", "Slow response times", "24/7 support costs", "Inconsistent answers"],
            process: [
                { title: "Training", description: "Feed AI with knowledge base." },
                { title: "Design", description: "Create conversational flows." },
                { title: "Integration", description: "Connect to website/WhatsApp." },
                { title: "Refinement", description: "Continuous learning from interactions." }
            ],
            benefits: ["24/7 availability", "Instant response", "Scalable support", "Reduced support costs"],
            industries: ["E-commerce", "Healthcare", "Real Estate", "Education"],
            tools: ["Dialogflow", "OpenAI API", "Intercom", "Botpress"],
            securityFeatures: ["PII redaction", "Secure data transmission", "GDPR compliance"],
            icon: "Bot",
            image: "/cyber-security.png",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Conversations", value: "1M+" },
                { label: "Resolution Rate", value: "80%" },
                { label: "CSAT Score", value: "4.8/5" }
            ],
            keywords: ["AI Chatbot Development Chennai", "Customer Support Automation India", "WhatsApp Bot Chennai", "Conversational AI"],
            layoutVariant: "innovation",
            faqs: [
                { question: "Can the bot handle complex queries?", answer: "It handles routine queries and seamlessly hands off complex issues to human agents." },
                { question: "Does it work on WhatsApp?", answer: "Yes, we can deploy chatbots on Website, WhatsApp, Facebook Messenger, and Slack." },
                { question: "How long does it take to train?", answer: "A basic bot can be up in weeks, but it improves continuously with more data." },
                { question: "Is the data secure?", answer: "Yes, we ensure all customer data is encrypted and handled according to privacy regulations." },
                { question: "Can it integrate with our CRM?", answer: "Yes, we can integrate the chatbot with Salesforce, HubSpot, Zoho, and other CRMs." }
            ]
        },
        "chatbot-development": {
            title: "Custom Chatbot Development",
            description: "AI-powered chatbots to automate customer support and internal workflows.",
            valueProposition: "Build intelligent, conversational agents that understand your business.",
            features: ["Custom NLP Models", "Omnichannel Deployment", "Backend Integration", "Analytics Dashboard"],
            content: "We build custom chatbots tailored to your specific needs. Whether it's for customer support, lead generation, or internal HR queries, our bots use advanced NLP to understand intent and deliver accurate responses.",
            problemsSolved: ["High support costs", "Missed leads", "Repetitive queries", "Limited availability"],
            process: [
                { title: "Strategy", description: "Define bot persona and goals." },
                { title: "Development", description: "Build conversation flows and NLP." },
                { title: "Integration", description: "Connect to CRM and APIs." },
                { title: "Launch", description: "Deploy and monitor performance." }
            ],
            benefits: ["24/7 engagement", "Instant scalability", "Data-driven insights", "Cost reduction"],
            industries: ["Retail", "Banking", "Travel", "Healthcare"],
            tools: ["Rasa", "Microsoft Bot Framework", "Dialogflow", "Python"],
            securityFeatures: ["End-to-end encryption", "PII masking", "Secure authentication"],
            icon: "MessageSquare",
            image: "/cyber-security.png",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Bots Deployed", value: "100+" },
                { label: "Messages/Mo", value: "500k+" },
                { label: "Accuracy", value: "90%+" }
            ],
            keywords: ["Custom Chatbot Development", "Enterprise Chatbot Solutions", "AI Conversational Agents", "Chatbot Agency India"],
            layoutVariant: "innovation",
            faqs: [
                { question: "How is this different from your other chatbot service?", answer: "This service focuses on fully custom, code-first development for complex requirements, whereas our other service focuses on rapid deployment." },
                { question: "Can it integrate with our custom ERP?", answer: "Yes, we can build custom integrations for any system with an API." },
                { question: "Do you support voice bots?", answer: "Yes, we can develop voice-enabled bots for call centers and smart speakers." }
            ]
        },
        "predictive-analytics": {
            title: "Predictive Analytics",
            description: "Data-driven insights to forecast trends and make better decisions.",
            valueProposition: "Unlock the power of your data to predict future trends.",
            features: ["Data Modeling", "Trend Forecasting", "Customer Churn Prediction", "Sales Forecasting"],
            content: "Don't just look at the past; predict the future. We use advanced machine learning algorithms to analyze your historical data and forecast future trends, helping you make proactive, data-driven decisions.",
            problemsSolved: ["Uncertainty in planning", "Customer churn", "Inventory mismanagement", "Ineffective marketing"],
            process: [
                { title: "Data Prep", description: "Clean and structure data." },
                { title: "Modeling", description: "Build and train ML models." },
                { title: "Validation", description: "Test model accuracy." },
                { title: "Visualization", description: "Create dashboards for insights." }
            ],
            benefits: ["Better decision making", "Risk mitigation", "Revenue growth", "Operational efficiency"],
            industries: ["Retail", "Finance", "Manufacturing", "Marketing"],
            tools: ["Python", "Tableau", "PowerBI", "TensorFlow"],
            securityFeatures: ["Data anonymization", "Secure data storage", "Access controls"],
            icon: "BrainCircuit",
            image: "/bg.jpg",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Data Points", value: "1B+" },
                { label: "Prediction Accuracy", value: "90%+" },
                { label: "ROI", value: "5x" }
            ],
            keywords: ["Data Analytics Services Chennai", "Machine Learning Consulting India", "Business Intelligence Chennai", "Predictive Modeling"],
            layoutVariant: "innovation",
            faqs: [
                { question: "What data do we need?", answer: "We need historical data relevant to the problem you want to solve (e.g., sales records, customer logs)." },
                { question: "How accurate are the predictions?", answer: "Accuracy depends on data quality, but we typically achieve 85-95% accuracy." },
                { question: "Do we need a data science team?", answer: "No, we act as your data science partner, delivering actionable insights." },
                { question: "Can you help with data cleaning?", answer: "Yes, data preparation and cleaning is a key part of our process." },
                { question: "What industries do you serve?", answer: "We serve retail, finance, healthcare, manufacturing, and more." }
            ]
        },
        "n8n": {
            title: "N8N Automation Services",
            description: "Workflow automation with N8N.",
            valueProposition: "Powerful, flexible, and cost-effective workflow automation.",
            features: ["Workflow Design", "Custom Nodes", "API Integration", "Self-hosted Setup"],
            content: "N8N is a powerful workflow automation tool. We help you design, build, and host N8N workflows to automate complex business processes without the high cost of proprietary platforms.",
            problemsSolved: ["High licensing costs", "Data privacy concerns", "Complex logic needs", "Integration gaps"],
            process: [
                { title: "Consult", description: "Understand workflow needs." },
                { title: "Setup", description: "Deploy N8N instance." },
                { title: "Build", description: "Create workflows." },
                { title: "Train", description: "Handover and training." }
            ],
            benefits: ["Low cost", "Data ownership", "Infinite flexibility", "Visual builder"],
            industries: ["Startups", "Agencies", "Tech"],
            tools: ["N8N", "Docker", "Node.js"],
            securityFeatures: ["Self-hosted data", "Secure webhooks", "Access control"],
            icon: "Zap",
            image: "/bg.jpg",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Workflows", value: "500+" },
                { label: "Nodes Used", value: "100+" },
                { label: "Time Saved", value: "1000h+" }
            ],
            keywords: ["N8N Consultant Chennai", "Workflow Automation India", "Self-hosted Automation", "API Integration Chennai"],
            layoutVariant: "innovation",
            faqs: [
                { question: "What is N8N?", answer: "N8N is a workflow automation tool that allows you to connect different apps and services together." },
                { question: "Why choose N8N over Zapier?", answer: "N8N is often more cost-effective for high-volume workflows and offers more flexibility with self-hosting." },
                { question: "Can you host N8N for us?", answer: "Yes, we can set up and manage a self-hosted N8N instance for your organization." },
                { question: "Is N8N secure?", answer: "Yes, especially when self-hosted, you keep full control over your data." },
                { question: "Do you provide N8N training?", answer: "Yes, we offer training sessions to help your team build and manage workflows." }
            ]
        },
        "custom-ai": {
            title: "Custom AI Development",
            description: "Tailored AI solutions for unique business challenges.",
            valueProposition: "Solve complex problems with bespoke AI models.",
            features: ["Model Training", "NLP Solutions", "Computer Vision", "AI Integration"],
            content: "Off-the-shelf AI doesn't always fit. We develop custom AI models tailored to your specific data and business problems, from natural language processing to computer vision applications.",
            problemsSolved: ["Unique business logic", "Specific data formats", "Competitive differentiation", "Complex patterns"],
            process: [
                { title: "Data", description: "Data collection and labeling." },
                { title: "Train", description: "Model selection and training." },
                { title: "Test", description: "Validation and tuning." },
                { title: "Deploy", description: "API deployment and integration." }
            ],
            benefits: ["Competitive edge", "IP ownership", "High accuracy", "Scalability"],
            industries: ["Healthcare", "Finance", "Manufacturing"],
            tools: ["PyTorch", "TensorFlow", "HuggingFace"],
            securityFeatures: ["Data privacy", "Model security", "Ethical AI"],
            icon: "BrainCircuit",
            image: "/bg.jpg",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Models Built", value: "20+" },
                { label: "Accuracy", value: "95%+" },
                { label: "Impact", value: "High" }
            ],
            keywords: ["Custom AI Development Chennai", "Machine Learning Engineer India", "AI Development Chennai", "NLP Solutions"],
            layoutVariant: "innovation",
            faqs: [
                { question: "What is custom AI development?", answer: "It involves building AI models specifically tailored to your unique business data and requirements." },
                { question: "How long does a project take?", answer: "Timelines vary based on complexity, but a Proof of Concept (PoC) can often be delivered in 4-6 weeks." },
                { question: "Do I own the IP?", answer: "Yes, for custom development, you retain full ownership of the intellectual property." },
                { question: "What technologies do you use?", answer: "We use Python, TensorFlow, PyTorch, OpenAI, and other leading AI frameworks." },
                { question: "Can you integrate AI into our app?", answer: "Yes, we specialize in integrating AI models into existing web and mobile applications." }
            ]
        },
        "app-development": {
            title: "AI Application Development",
            description: "Building intelligent applications powered by AI.",
            valueProposition: "Infuse your applications with the power of AI.",
            features: ["GenAI Apps", "RAG Implementation", "AI Agents", "Smart Dashboards"],
            content: "We build full-stack applications with AI at the core. Whether it's a RAG-based knowledge base, an AI agent, or a generative AI tool, we bring your AI ideas to life.",
            problemsSolved: ["Static applications", "User engagement", "Information retrieval", "Automation"],
            process: [
                { title: "Design", description: "UX/UI and architecture." },
                { title: "Develop", description: "Frontend and backend with AI." },
                { title: "Integrate", description: "LLM and vector DB setup." },
                { title: "Launch", description: "Deployment and monitoring." }
            ],
            benefits: ["Innovation", "User experience", "Efficiency", "Modern stack"],
            industries: ["SaaS", "Internal Tools", "Customer Facing"],
            tools: ["Next.js", "LangChain", "OpenAI", "Pinecone"],
            securityFeatures: ["Prompt injection protection", "Data sanitization", "Secure API keys"],
            icon: "Bot",
            image: "/bg.jpg",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Apps Launched", value: "15+" },
                { label: "Users", value: "10k+" },
                { label: "Latency", value: "Low" }
            ],
            keywords: ["AI Apps Chennai", "GenAI Development India", "LangChain Developer", "RAG Applications Chennai"],
            layoutVariant: "innovation",
            faqs: [
                { question: "What is a GenAI app?", answer: "It's an application that uses Generative AI (like GPT-4) to create content, answer questions, or perform tasks." },
                { question: "What is RAG?", answer: "RAG (Retrieval-Augmented Generation) allows AI to answer questions based on your specific company data." },
                { question: "Can you build an internal AI tool?", answer: "Yes, we build secure internal tools for knowledge management, search, and automation." },
                { question: "Is my data shared with OpenAI?", answer: "We can architect solutions where your data is not used to train public models." },
                { question: "Do you provide maintenance?", answer: "Yes, we offer ongoing maintenance and updates for AI applications." }
            ]
        }
    },
    "turnkey": {
        "offshore-development": {
            title: "Offshore Development Center (ODC)",
            description: "Your extended software development team in India.",
            valueProposition: "Scale your engineering capacity with a dedicated offshore team.",
            features: ["Dedicated Office Space", "HR & Admin Management", "IT Infrastructure", "Legal Compliance"],
            content: "Establish your own software development center in India without the administrative hassle. We handle the infrastructure, recruitment, and legalities, while you retain full control over the team and culture.",
            problemsSolved: ["High operational costs", "Office space constraints", "Legal complexities", "Recruitment overhead"],
            process: [
                { title: "Setup", description: "Secure office space and infrastructure." },
                { title: "Hiring", description: "Recruit team according to your specs." },
                { title: "Operations", description: "Manage HR, payroll, and admin." },
                { title: "Scale", description: "Grow the team as needed." }
            ],
            benefits: ["Cost savings (up to 60%)", "Full control", "Scalability", "Access to talent"],
            industries: ["SaaS", "Enterprise", "Startups"],
            tools: ["Jira", "Slack", "GitLab", "Zoom"],
            securityFeatures: ["Physical security", "Network security", "IP protection"],
            icon: "Building2",
            image: "/office-culture.png",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "ODCs Setup", value: "10+" },
                { label: "Engineers Hired", value: "200+" },
                { label: "Avg Tenure", value: "3 Years" }
            ],
            keywords: ["ODC Services India", "Offshore Development Center Chennai", "Build Operate Transfer India", "India Development Team"],
            layoutVariant: "consulting",
            faqs: [
                { question: "How is this different from outsourcing?", answer: "An ODC is an extension of your company. The team works exclusively for you and adopts your culture." },
                { question: "Can we transfer the team later?", answer: "Yes, we offer a Build-Operate-Transfer (BOT) model where you can take over the entity later." },
                { question: "How long does it take to set up?", answer: "Typically 4-8 weeks depending on the team size and requirements." },
                { question: "Do you handle legal compliance?", answer: "Yes, we handle all local labor laws, taxes, and compliance requirements in India." },
                { question: "Can we visit the office?", answer: "Absolutely! We encourage you to visit and spend time with your extended team." }
            ]
        },
        "dedicated-teams": {
            title: "Dedicated Development Teams",
            description: "Hire a team of pre-vetted developers for your project.",
            valueProposition: "Instant access to a cohesive team of developers, designers, and QA.",
            features: ["Pre-vetted Talent", "Agile Methodology", "Direct Communication", "Flexible Scaling"],
            content: "Need a team that hits the ground running? Our dedicated teams are pre-vetted and experienced in working together. They integrate with your processes and tools to deliver high-quality software faster.",
            problemsSolved: ["Slow hiring process", "Team cohesion issues", "Project delays", "Skill gaps"],
            process: [
                { title: "Match", description: "Select team based on tech stack." },
                { title: "Onboard", description: "Kickoff and knowledge transfer." },
                { title: "Sprint", description: "Agile development cycles." },
                { title: "Review", description: "Regular demos and retrospectives." }
            ],
            benefits: ["Faster time to market", "No recruitment fees", "Flexibility", "Cohesive team dynamics"],
            industries: ["Fintech", "Healthtech", "E-commerce"],
            tools: ["Jira", "Trello", "Slack", "GitHub"],
            securityFeatures: ["Secure dev environment", "NDA", "Code ownership"],
            icon: "Users",
            image: "/office-culture.png",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Teams Deployed", value: "20+" },
                { label: "Projects Delivered", value: "100+" },
                { label: "Client Satisfaction", value: "4.9/5" }
            ],
            keywords: ["Hire Dedicated Developers India", "Agile Teams Chennai", "Software Development Team India", "Team Augmentation"],
            layoutVariant: "consulting",
            faqs: [
                { question: "Can we manage the team directly?", answer: "Yes, you have direct access and control over the team's priorities." },
                { question: "What if a developer leaves?", answer: "We provide an immediate replacement to ensure project continuity." },
                { question: "What tech stacks do you cover?", answer: "We cover MERN, Python, Java, .NET, Flutter, React Native, and more." },
                { question: "Is there a trial period?", answer: "Yes, we can offer a trial period to ensure the team is a good fit." },
                { question: "How do we communicate?", answer: "We use Slack, Teams, Zoom, and Jira to ensure seamless communication." }
            ]
        },
        "consultation": {
            title: "Project Consultation",
            description: "Expert advice for your turnkey projects.",
            valueProposition: "Start your project on the right track with expert consultation.",
            features: ["Feasibility Study", "Tech Stack Selection", "Budget Planning", "Risk Assessment"],
            content: "Before you build, plan. Our project consultation services help you validate your ideas, choose the right technology, and plan your budget and timeline for successful project execution.",
            problemsSolved: ["Unclear requirements", "Technology confusion", "Budget overruns", "Feasibility risks"],
            process: [
                { title: "Discovery", description: "Workshop to understand goals." },
                { title: "Analysis", description: "Market and tech analysis." },
                { title: "Plan", description: "Roadmap and budget." },
                { title: "Report", description: "Detailed consultation report." }
            ],
            benefits: ["Clarity", "Risk reduction", "Cost estimation", "Solid foundation"],
            industries: ["Startups", "Enterprise", "Govt"],
            tools: ["Workshops", "Prototyping", "Excel"],
            securityFeatures: ["NDA", "IP Protection", "Confidentiality"],
            icon: "Briefcase",
            image: "/office-culture.png",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Consultations", value: "100+" },
                { label: "Projects Started", value: "80%" },
                { label: "Savings", value: "20%" }
            ],
            keywords: ["Project Consultant Chennai", "Technical Consultation India", "Startup Advisor Chennai", "Feasibility Study"],
            layoutVariant: "consulting",
            faqs: [
                { question: "What is a feasibility study?", answer: "It assesses whether your project idea is technically and financially viable." },
                { question: "Can you help choose a tech stack?", answer: "Yes, we analyze your requirements and recommend the best technologies for scalability and performance." },
                { question: "Do you help with budgeting?", answer: "Yes, we provide detailed cost estimations for development and operations." },
                { question: "Is the consultation confidential?", answer: "Yes, we sign an NDA before starting any discussions." },
                { question: "What do we get at the end?", answer: "You receive a comprehensive report with a roadmap, architecture, and budget plan." }
            ]
        },
        "implementation": {
            title: "Implementation Services",
            description: "End-to-end execution of turnkey projects.",
            valueProposition: "We build, deploy, and hand over your project.",
            features: ["Full-stack Development", "Project Management", "QA & Testing", "Deployment"],
            content: "We take full responsibility for the delivery of your project. From design to deployment, our turnkey implementation services ensure your project is delivered on time, within budget, and to the highest quality standards.",
            problemsSolved: ["Execution gaps", "Vendor management", "Quality issues", "Missed deadlines"],
            process: [
                { title: "Kickoff", description: "Team assembly and planning." },
                { title: "Build", description: "Agile development sprints." },
                { title: "Verify", description: "Rigorous testing." },
                { title: "Handover", description: "Training and documentation." }
            ],
            benefits: ["Peace of mind", "Single point of contact", "Guaranteed delivery", "Quality assurance"],
            industries: ["All Industries"],
            tools: ["Jira", "GitHub", "CI/CD"],
            securityFeatures: ["Secure SDLC", "VAPT", "Code review"],
            icon: "Briefcase",
            image: "/office-culture.png",
            chartImage: "/service_growth_chart.png",
            stats: [
                { label: "Projects Delivered", value: "50+" },
                { label: "On Time", value: "95%" },
                { label: "Satisfaction", value: "5/5" }
            ],
            keywords: ["Turnkey Projects Chennai", "Software Implementation India", "Project Delivery Chennai", "End-to-End Development"],
            layoutVariant: "consulting",
            faqs: [
                { question: "What is a turnkey project?", answer: "A project where we handle everything from start to finish, delivering a ready-to-use solution." },
                { question: "Do you provide a warranty?", answer: "Yes, we provide a warranty period for bug fixes and support after delivery." },
                { question: "How do you ensure quality?", answer: "We have a dedicated QA team and follow rigorous testing protocols." },
                { question: "Can we make changes during development?", answer: "Yes, we follow Agile methodologies to accommodate changes, though it may impact timeline/budget." },
                { question: "Do you provide training?", answer: "Yes, we provide comprehensive training and documentation for your team." }
            ]
        }
    }
};
