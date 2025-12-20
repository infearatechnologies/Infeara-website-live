"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface NavItem {
    id: string;
    label: string;
}

const navItems: NavItem[] = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Features" },
    { id: "process", label: "Process" },
    { id: "industries", label: "Industries" },
    { id: "faqs", label: "FAQs" },
];

export default function ServiceNavigation() {
    const [activeSection, setActiveSection] = useState<string>("");
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = window.innerHeight * 0.8; // Approx hero height
            setIsSticky(window.scrollY > heroHeight);

            // Spy on sections
            for (const item of navItems) {
                const section = document.getElementById(item.id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top < 300) {
                        setActiveSection(item.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isSticky) return null;

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border animate-in slide-in-from-top duration-300">
            <div className="container mx-auto px-4 flex items-center justify-between h-16">
                <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
                    {navItems.map((item) => (
                        <Button
                            key={item.id}
                            variant="ghost"
                            size="sm"
                            className={cn(
                                "text-sm font-medium transition-colors whitespace-nowrap",
                                activeSection === item.id
                                    ? "text-primary bg-primary/10"
                                    : "text-muted-foreground hover:text-foreground"
                            )}
                            onClick={() => {
                                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                                setActiveSection(item.id);
                            }}
                        >
                            {item.label}
                        </Button>
                    ))}
                </div>
                <div className="hidden md:block">
                    <Button size="sm" asChild>
                        <Link href="/contact">Get Started</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
