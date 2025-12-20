"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Menu, Server, Shield, Cloud, Headphones, Factory, Stethoscope, Landmark, GraduationCap, Phone, LogIn, ArrowRight, ChevronRight, Sparkles, FileText, CheckCircle2, Download, Bot, Briefcase, LayoutGrid, Lock, Network, Database, Cpu, Globe, Search, ShieldCheck, Activity, Rocket, ShoppingBag, Truck, Code } from "lucide-react";

type ServiceItem = {
    title: string;
    href: string;
    description?: string;
};

type ServiceCategory = {
    title: string;
    href: string;
    description: string;
    icon: any;
    items?: ServiceItem[];
    subCategories?: {
        title: string;
        items: ServiceItem[];
    }[];
};

const services: ServiceCategory[] = [
    {
        title: "Audit and Compliance",
        href: "/services/audit-compliance",
        description: "Comprehensive security audits and compliance consulting.",
        icon: ShieldCheck,
        subCategories: [
            {
                title: "Cyber Security",
                items: [
                    { title: "Vulnerability Assessment (VAPT)", href: "/services/audit-compliance/vapt" },
                    { title: "Network Security Audit", href: "/services/audit-compliance/network-security" },
                    { title: "Application Security Audit", href: "/services/audit-compliance/app-security" },
                    { title: "Cloud Security Audit", href: "/services/audit-compliance/cloud-security" },
                    { title: "Endpoint Security Audit", href: "/services/audit-compliance/endpoint-security" },
                    { title: "Firewall & Perimeter Audit", href: "/services/audit-compliance/firewall-audit" },
                    { title: "IAM Audit", href: "/services/audit-compliance/iam-audit" },
                    { title: "Red Team Assessments", href: "/services/audit-compliance/red-team" },
                    { title: "Wireless Network Security", href: "/services/audit-compliance/wireless-security" },
                    { title: "Cyber Threat Intelligence", href: "/services/audit-compliance/cti" },
                    { title: "Disaster Recovery Audit", href: "/services/audit-compliance/dr-audit" },
                    { title: "SOC & Monitoring", href: "/services/audit-compliance/soc-monitoring" },
                ]
            },
            {
                title: "Cloud & Infrastructure",
                items: [
                    { title: "Cloud/Hybrid/On-prem Audit", href: "/services/audit-compliance/cloud-audit" },
                ]
            },
            {
                title: "Compliance Services",
                items: [
                    { title: "ISO 27001 Readiness", href: "/services/audit-compliance/iso-27001" },
                    { title: "SOC2 Type 2 Consulting", href: "/services/audit-compliance/soc2-consulting" },
                ]
            }
        ]
    },
    {
        title: "IT Infrastructure Services",
        href: "/services/infrastructure",
        description: "End-to-end infrastructure management and consulting.",
        icon: Server,
        items: [
            { title: "Outsourcing", href: "/services/infrastructure/outsourcing" },
            { title: "IT Infrastructure Consulting", href: "/services/infrastructure/consulting" },
            { title: "Cloud Infrastructure Consulting", href: "/services/infrastructure/cloud-consulting" },
            { title: "IT Facility Management (FMS)", href: "/services/infrastructure/fms" },
            { title: "Remote Infrastructure Services", href: "/services/infrastructure/remote-services" },
            { title: "Network Architecture", href: "/services/infrastructure/network-architecture" },
            { title: "Server Implementation", href: "/services/infrastructure/server-implementation" },
            { title: "Data Center Ops", href: "/services/infrastructure/data-center-ops" },
            { title: "Structured Cabling", href: "/services/infrastructure/structured-cabling" },
            { title: "AWS Management", href: "/services/infrastructure/aws-management" },
            { title: "Azure Management", href: "/services/infrastructure/azure-management" },
            { title: "Cloud Migration", href: "/services/infrastructure/cloud-migration" },
            { title: "Hybrid Cloud Setup", href: "/services/infrastructure/hybrid-cloud" },
        ]
    },
    {
        title: "AI & Automation Services",
        href: "/services/ai-automation",
        description: "Leveraging AI to streamline business operations.",
        icon: Bot,
        items: [
            { title: "N8N Automation", href: "/services/ai-automation/n8n" },
            { title: "Custom AI Development", href: "/services/ai-automation/custom-ai" },
            { title: "Chatbot Development", href: "/services/ai-automation/chatbot-development" },
            { title: "AI Application Development", href: "/services/ai-automation/app-development" },
        ]
    },
    {
        title: "Turnkey Projects",
        href: "/services/turnkey",
        description: "End-to-end project execution and delivery.",
        icon: Briefcase,
        items: [
            { title: "Project Consultation", href: "/services/turnkey/consultation" },
            { title: "Implementation Services", href: "/services/turnkey/implementation" },
        ]
    },
];

const industries = [
    {
        title: "Educational Institutions",
        href: "/industries/education",
        description: "Schools & Colleges",
        icon: GraduationCap,
    },
    {
        title: "SaaS & Software",
        href: "/industries/saas",
        description: "Tech Companies",
        icon: Code,
    },
    {
        title: "SMEs & Startups",
        href: "/industries/startups",
        description: "Growth-focused IT",
        icon: Rocket,
    },
    {
        title: "Retail & E-commerce",
        href: "/industries/retail",
        description: "Online & Offline Stores",
        icon: ShoppingBag,
    },
    {
        title: "Healthcare Clinics",
        href: "/industries/healthcare",
        description: "Hospitals & Clinics",
        icon: Stethoscope,
    },
    {
        title: "Manufacturing Units",
        href: "/industries/manufacturing",
        description: "Factories & Plants",
        icon: Factory,
    },
    {
        title: "Logistics",
        href: "/industries/logistics",
        description: "Warehousing & Supply Chain",
        icon: Truck,
    },
    {
        title: "Professional Services",
        href: "/industries/professional-services",
        description: "Law, Finance & Consulting",
        icon: Briefcase,
    },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [activeServiceCategory, setActiveServiceCategory] = React.useState(services[0].title);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center mr-8">
                    <div className="relative h-10 w-36">
                        <Image
                            src="/infeara-logo-final.png"
                            alt="Infeara Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden xl:flex items-center gap-8">
                    <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-orange-600 transition-colors">
                        Home
                    </Link>
                    <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-orange-600 transition-colors">
                        About
                    </Link>

                    {/* Services Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 py-6 text-sm font-medium text-muted-foreground hover:text-orange-600 transition-colors focus:outline-none">
                            Services <ChevronRight className="h-4 w-4 rotate-90" />
                        </button>
                        <div className="absolute top-full left-0 hidden group-hover:block pt-2">
                            <div className="w-[1100px] grid grid-cols-[280px_1fr] bg-white border border-border shadow-sm rounded-xl overflow-hidden">
                                <div className="bg-secondary/10 flex flex-col justify-between border-r border-border">
                                    <div className="flex flex-col py-2">
                                        {services.map((component) => (
                                            <Link
                                                key={component.title}
                                                href={component.href}
                                                onMouseEnter={() => setActiveServiceCategory(component.title)}
                                                className={cn(
                                                    "w-full flex items-center justify-between px-4 py-3 text-sm font-medium transition-all cursor-pointer border-l-4",
                                                    activeServiceCategory === component.title
                                                        ? "bg-secondary/30 text-orange-600 border-orange-600"
                                                        : "border-transparent text-muted-foreground hover:bg-secondary/20 hover:text-foreground"
                                                )}
                                            >
                                                <span className="flex items-center gap-2">
                                                    <component.icon className="h-4 w-4" />
                                                    {component.title}
                                                </span>
                                                {activeServiceCategory === component.title && (
                                                    <ChevronRight className="h-4 w-4" />
                                                )}
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="p-4">
                                        {(() => {
                                            const activeCategory = services.find((s) => s.title === activeServiceCategory) || services[0];
                                            return (
                                                <Link
                                                    href={activeCategory.href}
                                                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded text-center block transition-colors text-sm"
                                                >
                                                    View all {activeCategory.title} &rarr;
                                                </Link>
                                            );
                                        })()}
                                    </div>
                                </div>
                                <div className="p-8 bg-white flex flex-col h-full overflow-y-auto max-h-[600px]">
                                    {(() => {
                                        const activeCategory = services.find((s) => s.title === activeServiceCategory) || services[0];

                                        if (activeCategory.subCategories) {
                                            return (
                                                <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                                                    {activeCategory.subCategories.map((sub, idx) => (
                                                        <div key={idx} className={sub.title === "Cyber Security" ? "col-span-2" : "col-span-1"}>
                                                            <h4 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">
                                                                {sub.title}
                                                            </h4>
                                                            <div className={`grid ${sub.title === "Cyber Security" ? "grid-cols-2" : "grid-cols-1"} gap-x-8 gap-y-3`}>
                                                                {sub.items.map((item) => (
                                                                    <Link
                                                                        key={item.title}
                                                                        href={item.href}
                                                                        className="group/item flex items-start gap-2"
                                                                    >
                                                                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-200 group-hover/item:bg-orange-600 transition-colors shrink-0" />
                                                                        <span className="text-sm text-muted-foreground group-hover/item:text-orange-600 transition-colors">
                                                                            {item.title}
                                                                        </span>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            );
                                        }

                                        return (
                                            <>
                                                <h4 className="text-2xl font-bold text-foreground mb-6">
                                                    {activeCategory.title}
                                                </h4>
                                                <div className="grid grid-cols-2 gap-x-12 gap-y-4 content-start">
                                                    {activeCategory.items?.map((item) => (
                                                        <Link
                                                            key={item.title}
                                                            href={item.href}
                                                            className="group/item flex items-start gap-2"
                                                        >
                                                            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-200 group-hover/item:bg-orange-600 transition-colors shrink-0" />
                                                            <span className="text-sm text-muted-foreground group-hover/item:text-orange-600 transition-colors">
                                                                {item.title}
                                                            </span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </>
                                        );
                                    })()}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Industries Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 py-6 text-sm font-medium text-muted-foreground hover:text-orange-600 transition-colors focus:outline-none">
                            Industries <ChevronRight className="h-4 w-4 rotate-90" />
                        </button>
                        <div className="absolute top-full left-0 hidden group-hover:block pt-2">
                            <ul className="w-[300px] bg-white border border-border shadow-sm rounded-xl p-2">
                                {industries.map((component) => (
                                    <li key={component.title}>
                                        <Link
                                            href={component.href}
                                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-orange-50 transition-colors select-none leading-none no-underline outline-none"
                                        >
                                            <component.icon className="h-5 w-5 text-orange-600 mt-0.5 shrink-0" />
                                            <div className="space-y-1">
                                                <div className="text-sm font-medium leading-none hover:text-orange-600 transition-colors">{component.title}</div>
                                                <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                                    {component.description}
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Resources Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 py-6 text-sm font-medium text-muted-foreground hover:text-orange-600 transition-colors focus:outline-none">
                            Resources <ChevronRight className="h-4 w-4 rotate-90" />
                        </button>
                        <div className="absolute top-full left-0 hidden group-hover:block pt-2">
                            <ul className="w-[300px] bg-white border border-border shadow-sm rounded-xl p-2">
                                <li className="mb-2 px-2 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                    Knowledge Hub
                                </li>
                                <li>
                                    <Link href="/resources/blog" className="flex items-center gap-2 p-2 rounded-md hover:bg-orange-50 transition-colors">
                                        <FileText className="h-4 w-4 text-orange-600" />
                                        <span className="text-sm font-medium">Blog</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/resources/case-studies" className="flex items-center gap-2 p-2 rounded-md hover:bg-orange-50 transition-colors">
                                        <CheckCircle2 className="h-4 w-4 text-orange-600" />
                                        <span className="text-sm font-medium">Case Studies</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/resources/downloads" className="flex items-center gap-2 p-2 rounded-md hover:bg-orange-50 transition-colors">
                                        <Download className="h-4 w-4 text-orange-600" />
                                        <span className="text-sm font-medium">Downloads</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Link href="/careers" className="text-sm font-medium text-muted-foreground hover:text-orange-600 transition-colors">
                        Careers
                    </Link>
                    <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-orange-600 transition-colors">
                        Contact
                    </Link>
                </nav>

                <div className="hidden xl:flex items-center space-x-4">
                    <Button className="bg-orange-600 text-white hover:bg-orange-700 rounded-full px-6 font-bold transition-transform hover:scale-105 shadow-lg shadow-orange-900/20" asChild>
                        <Link href="/contact">Get Started</Link>
                    </Button>
                </div>

                {/* Mobile Navigation */}
                <div className="xl:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-foreground hover:bg-accent rounded-full">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto bg-background border-border text-foreground p-0">
                            <SheetHeader className="text-left border-b border-border p-6 bg-secondary/50">
                                <SheetTitle className="flex items-center space-x-2 font-bold text-xl text-foreground">
                                    <div className="relative h-8 w-32">
                                        <Image
                                            src="/infeara-logo-final.png"
                                            alt="Infeara Logo"
                                            fill
                                            className="object-contain object-left"
                                        />
                                    </div>
                                </SheetTitle>
                            </SheetHeader>

                            <div className="flex flex-col p-6 space-y-6">
                                <div className="flex flex-col space-y-2">
                                    <Link
                                        href="/"
                                        className="text-lg font-medium text-muted-foreground hover:text-orange-600 hover:bg-orange-50 px-4 py-2 rounded-lg transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        href="/about"
                                        className="text-lg font-medium text-muted-foreground hover:text-orange-600 hover:bg-orange-50 px-4 py-2 rounded-lg transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        About Us
                                    </Link>
                                </div>

                                <Accordion type="single" collapsible className="w-full border-none">
                                    <AccordionItem value="services" className="border-none">
                                        <AccordionTrigger className="text-lg font-medium text-muted-foreground hover:no-underline hover:text-orange-600 hover:bg-orange-50 px-4 py-2 rounded-lg">Services</AccordionTrigger>
                                        <AccordionContent>
                                            <div className="flex flex-col space-y-4 pl-4 mt-2 border-l-2 border-border ml-4">
                                                {services.map((category) => (
                                                    <div key={category.title} className="flex flex-col space-y-1">
                                                        <Link
                                                            href={category.href}
                                                            className="flex items-center py-2 px-2 text-sm font-bold text-foreground hover:text-orange-600 rounded-md"
                                                            onClick={() => setIsOpen(false)}
                                                        >
                                                            <category.icon className="h-4 w-4 mr-2 text-orange-600" />
                                                            {category.title}
                                                        </Link>

                                                        {/* Sub-categories Logic for Mobile */}
                                                        {category.subCategories ? (
                                                            <div className="flex flex-col pl-4 space-y-3 mt-1">
                                                                {category.subCategories.map((sub) => (
                                                                    <div key={sub.title} className="flex flex-col space-y-1">
                                                                        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 pt-2">
                                                                            {sub.title}
                                                                        </div>
                                                                        <div className="flex flex-col pl-2 space-y-1 border-l border-border/50 ml-1">
                                                                            {sub.items.map((item) => (
                                                                                <Link
                                                                                    key={item.title}
                                                                                    href={item.href}
                                                                                    className="py-1.5 px-2 text-sm text-muted-foreground hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
                                                                                    onClick={() => setIsOpen(false)}
                                                                                >
                                                                                    {item.title}
                                                                                </Link>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        ) : (
                                                            <div className="flex flex-col pl-6 space-y-1 border-l border-border/50 ml-2">
                                                                {category.items?.map((item) => (
                                                                    <Link
                                                                        key={item.title}
                                                                        href={item.href}
                                                                        className="py-1.5 px-2 text-sm text-muted-foreground hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
                                                                        onClick={() => setIsOpen(false)}
                                                                    >
                                                                        {item.title}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                                <Link
                                                    href="/services"
                                                    className="py-2 px-2 text-sm font-bold text-orange-600 hover:text-orange-700 mt-2 block"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    View All Services →
                                                </Link>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="industries" className="border-none">
                                        <AccordionTrigger className="text-lg font-medium text-muted-foreground hover:no-underline hover:text-orange-600 hover:bg-orange-50 px-4 py-2 rounded-lg">Industries</AccordionTrigger>
                                        <AccordionContent>
                                            <div className="flex flex-col space-y-1 pl-4 mt-2 border-l-2 border-border ml-4">
                                                {industries.map((item) => (
                                                    <Link
                                                        key={item.title}
                                                        href={item.href}
                                                        className="flex items-center py-2 px-3 text-sm text-muted-foreground hover:text-orange-600 hover:bg-orange-50 rounded-md"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        <item.icon className="h-4 w-4 mr-3 text-orange-600" />
                                                        {item.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="resources" className="border-none">
                                        <AccordionTrigger className="text-lg font-medium text-muted-foreground hover:no-underline hover:text-orange-600 hover:bg-orange-50 px-4 py-2 rounded-lg">Resources</AccordionTrigger>
                                        <AccordionContent>
                                            <div className="flex flex-col space-y-1 pl-4 mt-2 border-l-2 border-border ml-4">
                                                <Link
                                                    href="/resources/blog"
                                                    className="flex items-center py-2 px-3 text-sm text-muted-foreground hover:text-orange-600 hover:bg-orange-50 rounded-md"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    <FileText className="h-4 w-4 mr-3 text-orange-600" />
                                                    Blog
                                                </Link>
                                                <Link
                                                    href="/resources/case-studies"
                                                    className="flex items-center py-2 px-3 text-sm text-muted-foreground hover:text-orange-600 hover:bg-orange-50 rounded-md"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    <CheckCircle2 className="h-4 w-4 mr-3 text-orange-600" />
                                                    Case Studies
                                                </Link>
                                                <Link
                                                    href="/resources/downloads"
                                                    className="flex items-center py-2 px-3 text-sm text-muted-foreground hover:text-orange-600 hover:bg-orange-50 rounded-md"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    <Download className="h-4 w-4 mr-3 text-orange-600" />
                                                    Downloads
                                                </Link>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>

                                <div className="flex flex-col space-y-2">
                                    <Link
                                        href="/careers"
                                        className="text-lg font-medium text-muted-foreground hover:text-orange-600 hover:bg-orange-50 px-4 py-2 rounded-lg transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Careers
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="text-lg font-medium text-muted-foreground hover:text-orange-600 hover:bg-orange-50 px-4 py-2 rounded-lg transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Contact
                                    </Link>
                                </div>
                            </div>

                            <div className="mt-auto p-6 border-t border-border space-y-4 bg-secondary/50">
                                <Button className="w-full bg-orange-600 text-white hover:bg-orange-700 h-12 rounded-xl font-bold" asChild>
                                    <Link href="/contact">
                                        <Phone className="mr-3 h-5 w-5" /> Get Started
                                    </Link>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
