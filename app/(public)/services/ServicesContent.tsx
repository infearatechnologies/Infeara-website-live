"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowRight, Shield, Server, Cloud, Headphones, CheckCircle2, Star, Quote, Zap, Globe, Users, Clock, ShieldCheck, Building2, Network, Bot, Briefcase, Lock, Cpu, Activity, Database, Search, GitBranch, MessageSquare, BarChart, BrainCircuit, Sparkles, HelpCircle } from "lucide-react";
import { servicesData } from "@/data/services";
import { motion } from "framer-motion";

const iconMap: Record<string, any> = {
    Shield, Server, Bot, Briefcase, CheckCircle2, Globe, Lock, Cpu, Activity, Network, Database, Search, ShieldCheck, Cloud, GitBranch, MessageSquare, BarChart, BrainCircuit, Sparkles, Zap, Building2, Users
};

const categoryTitles: Record<string, string> = {
    "audit-compliance": "Audit & Compliance",
    "infrastructure": "IT Infrastructure",
    "ai-automation": "AI & Automation",
    "turnkey": "Turnkey Projects"
};

const categoryDescriptions: Record<string, string> = {
    "audit-compliance": "Secure your business with our comprehensive audit and compliance services.",
    "infrastructure": "Build a robust and scalable IT foundation with our infrastructure services.",
    "ai-automation": "Innovate and automate with our cutting-edge AI solutions.",
    "turnkey": "End-to-end project execution for seamless delivery."
};

export default function ServicesContent() {
    return (
        <>
            {/* HERO SECTION */}
            <section className="relative w-full py-24 md:py-32 flex items-center justify-center overflow-hidden bg-background">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-secondary rounded-full blur-3xl"
                    />
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>
                </div>

                <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center max-w-4xl mx-auto space-y-6"
                    >
                        <Badge variant="outline" className="border-orange-200 text-orange-600 bg-orange-500/10 px-4 py-1.5 text-sm font-medium shadow-sm">
                            Our Services
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-heading text-foreground">
                            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-600 to-orange-500">IT Solutions</span>
                        </h1>
                        <p className="max-w-2xl text-muted-foreground text-lg md:text-xl leading-relaxed">
                            From cybersecurity audits to AI-driven automation, we provide end-to-end technology services tailored to your business goals.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* SERVICES LIST */}
            <div className="container mx-auto px-4 md:px-6 pb-24 space-y-24">
                {Object.entries(servicesData).map(([categoryKey, services], categoryIndex) => (
                    <motion.section
                        key={categoryKey}
                        id={categoryKey}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                        className="scroll-mt-24"
                    >
                        <div className="mb-12 border-b border-border pb-6">
                            <h2 className="text-3xl font-bold text-foreground mb-2">{categoryTitles[categoryKey] || categoryKey}</h2>
                            <p className="text-lg text-muted-foreground">{categoryDescriptions[categoryKey]}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {Object.entries(services).map(([slug, service], index) => {
                                const Icon = iconMap[service.icon] || HelpCircle;
                                return (
                                    <motion.div
                                        key={slug}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <ServiceCard
                                            icon={Icon}
                                            title={service.title}
                                            description={service.description}
                                            href={`/services/${categoryKey}/${slug}`}
                                        />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.section>
                ))}
            </div>

            {/* CTA SECTION */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-24 relative overflow-hidden"
            >
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/cta-bg.jpg"
                        alt="CTA Background"
                        fill
                        className="object-cover"
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                </div>
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">Ready to Upgrade Your IT?</h2>
                    <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
                        Schedule a free consultation with our experts and discover how we can optimize your technology stack.
                    </p>
                    <Button size="lg" className="h-16 px-10 text-lg bg-white text-primary hover:bg-white/90 rounded-full font-bold shadow-2xl transition-transform hover:scale-105" asChild>
                        <Link href="/contact">
                            Schedule Consultation
                        </Link>
                    </Button>
                </div>
            </motion.section>
        </>
    );
}

function ServiceCard({ icon: Icon, title, description, href }: { icon: any, title: string, description: string, href: string }) {
    return (
        <Card className="h-full bg-card border-border hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1 group flex flex-col">
            <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    <Icon className="h-7 w-7 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-orange-600 transition-colors">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <CardDescription className="text-muted-foreground text-base leading-relaxed mb-6">
                    {description}
                </CardDescription>
            </CardContent>
            <CardFooter>
                <Link href={href} className="text-orange-600 font-semibold flex items-center hover:underline group-hover:translate-x-1 transition-transform">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </CardFooter>
        </Card>
    );
}
