"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
    CheckCircle2, ArrowRight, Phone, Shield, Cpu, Briefcase, Hash, HelpCircle, AlertTriangle, Zap, Layers, Lock, Wrench, Building2, Star, MessageSquare, MapPin, Clock, ShieldCheck,
    Server, Bot, Globe, Activity, Network, Database, Search, Cloud, GitBranch, BarChart, BrainCircuit, Sparkles, Users
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ServiceData } from "@/data/services";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

interface ServicePageTemplateProps {
    service: ServiceData;
}

const iconMap: Record<string, any> = {
    Shield, Server, Bot, Briefcase, CheckCircle2, Globe, Lock, Cpu, Activity, Network, Database, Search, ShieldCheck, Cloud, GitBranch, MessageSquare, BarChart, BrainCircuit, Sparkles, Zap, Building2, Users
};

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
    const Icon = iconMap[service.icon] || HelpCircle;

    // Variant-specific styles
    const getVariantStyles = () => {
        switch (service.layoutVariant) {
            case 'security':
                return {
                    heroGradient: "from-slate-950 via-blue-950/50 to-slate-950",
                    accentColor: "text-blue-500",
                    bgAccent: "bg-blue-500/10",
                    borderAccent: "border-blue-500/20",
                    buttonColor: "bg-blue-600 shadow-blue-900/20",
                    secondaryIcon: Shield
                };
            case 'innovation':
                return {
                    heroGradient: "from-slate-950 via-purple-950/50 to-slate-950",
                    accentColor: "text-purple-500",
                    bgAccent: "bg-purple-500/10",
                    borderAccent: "border-purple-500/20",
                    buttonColor: "bg-purple-600 shadow-purple-900/20",
                    secondaryIcon: Cpu
                };
            case 'technical':
            default:
                return {
                    heroGradient: "from-slate-950 via-orange-950/50 to-slate-950",
                    accentColor: "text-orange-500",
                    bgAccent: "bg-orange-500/10",
                    borderAccent: "border-orange-500/20",
                    buttonColor: "bg-orange-600 shadow-orange-900/20",
                    secondaryIcon: Briefcase
                };
        }
    };

    const styles = getVariantStyles();
    const SecondaryIcon = styles.secondaryIcon;

    return (
        <div className="min-h-screen bg-background">
            {/* 1. HERO SECTION (Matches About Page) */}
            <section className="relative w-full py-32 lg:py-48 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className={`absolute inset-0 bg-gradient-to-r ${styles.heroGradient} opacity-90 z-10`}></div>
                    <motion.div
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                        className="relative w-full h-full"
                    >
                        <Image
                            src="/images/service-hero-bg.png"
                            alt={service.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </div>

                <div className="container relative z-20 px-4 md:px-6 mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
                        >
                            {service.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8"
                        >
                            {service.description}
                        </motion.p>
                        {service.valueProposition && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <Badge variant="secondary" className="px-4 py-2 text-sm md:text-base font-medium bg-white/10 text-white border-white/20 backdrop-blur-md">
                                    {service.valueProposition}
                                </Badge>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>

            {/* 2. STATS SECTION (Matches About Page) */}
            {service.stats && service.stats.length > 0 && (
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="py-12 border-y border-border bg-secondary/30"
                >
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
                            {service.stats.map((stat, index) => (
                                <div key={index} className="space-y-2">
                                    <div className={`text-4xl md:text-5xl font-bold ${styles.accentColor}`}>{stat.value}</div>
                                    <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>
            )}

            {/* 3. OVERVIEW SECTION */}
            <SectionWrapper id="overview" className="bg-background">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <p className="text-muted-foreground leading-loose text-lg whitespace-pre-line">
                        {service.content}
                    </p>

                    {service.problemsSolved && service.problemsSolved.length > 0 && (
                        <div className="mt-12 text-left">
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 justify-center">
                                <AlertTriangle className={`h-5 w-5 ${styles.accentColor}`} />
                                Business Challenges We Solve
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {service.problemsSolved.map((problem, i) => (
                                    <Card key={i} className="bg-secondary/20 border-border shadow-sm">
                                        <CardContent className="p-4 flex items-start gap-3">
                                            <div className={`mt-1 h-2 w-2 rounded-full ${styles.accentColor.replace('text-', 'bg-')}`} />
                                            <span className="text-foreground/90">{problem}</span>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    )}
                </motion.div>
            </SectionWrapper>

            {/* 4. WHY CHOOSE US (Matches About Page Design) */}
            <SectionWrapper className="bg-secondary/30 rounded-3xl my-12 mx-4 md:mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-heading text-foreground mb-4">
                        Why Choose Infeara?
                    </h2>
                    <p className="text-muted-foreground max-w-[600px] mx-auto">
                        Enterprise-grade solutions tailored for your business growth.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: ShieldCheck, title: "Enterprise Security", description: "We bring Fortune 500 level cybersecurity standards to every project we deliver." },
                        { icon: Clock, title: "24/7 Expert Support", description: "Our distributed team ensures round-the-clock monitoring and instant response." },
                        { icon: CheckCircle2, title: "Proven Track Record", description: "Over 50+ successful projects delivered with 100% client satisfaction." }
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <FeatureCard
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                accentColor={styles.accentColor}
                            />
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>

            {/* 5. PROCESS SECTION (Animated Service Path) */}
            {service.process && service.process.length > 0 && (
                <SectionWrapper id="process" className="relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
                                <Layers className={`h-8 w-8 ${styles.accentColor}`} />
                                How We Work
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Our proven methodology ensures successful delivery and consistent results.
                            </p>
                        </motion.div>

                        <div className="relative max-w-5xl mx-auto">
                            {/* Connecting Line */}
                            <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-border to-transparent md:left-1/2 md:-ml-px" />

                            {service.process.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 last:mb-0 group ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                >
                                    {/* Number Circle */}
                                    <div className={`absolute left-0 w-10 h-10 rounded-full bg-background border-2 ${styles.borderAccent} flex items-center justify-center z-10 md:left-1/2 md:-ml-5 shadow-[0_0_15px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-transform duration-300`}>
                                        <span className={`font-bold ${styles.accentColor}`}>{index + 1}</span>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                                        } w-full`}>
                                        <Card className="bg-secondary/10 border-border hover:border-primary/50 transition-colors duration-300 overflow-hidden relative">
                                            <div className={`absolute top-0 left-0 w-1 h-full ${styles.bgAccent.replace('/10', '')}`} />
                                            <CardHeader>
                                                <CardTitle className="text-xl font-bold">{step.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-muted-foreground">{step.description}</p>
                                            </CardContent>
                                        </Card>
                                    </div>

                                    {/* Spacer for the other side on desktop */}
                                    <div className="hidden md:block md:w-1/2" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </SectionWrapper>
            )}

            {/* 6. FEATURES & BENEFITS */}
            <SectionWrapper id="features" className="bg-secondary/10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                        <Zap className={`h-8 w-8 ${styles.accentColor}`} />
                        Features & Benefits
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <Card className="bg-background border-border">
                            <CardHeader>
                                <CardTitle>Key Features</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-4">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className={`h-5 w-5 ${styles.accentColor} mt-0.5 shrink-0`} />
                                            <span className="text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                        {service.benefits && service.benefits.length > 0 && (
                            <Card className="bg-background border-border">
                                <CardHeader>
                                    <CardTitle>Business Benefits</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4">
                                        {service.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className={`h-1.5 w-1.5 rounded-full ${styles.accentColor.replace('text-', 'bg-')} mt-2 shrink-0`} />
                                                <span className="text-muted-foreground">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </motion.div>
            </SectionWrapper>

            {/* 7. INDUSTRIES & TOOLS */}
            <SectionWrapper id="industries">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid md:grid-cols-2 gap-12"
                >
                    {service.industries && service.industries.length > 0 && (
                        <div>
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                <Building2 className={`h-5 w-5 ${styles.accentColor}`} />
                                Industries We Serve
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {service.industries.map((industry, i) => (
                                    <Badge key={i} variant="outline" className="px-3 py-1 text-sm font-normal">
                                        {industry}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    )}

                    {service.tools && service.tools.length > 0 && (
                        <div>
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                <Wrench className={`h-5 w-5 ${styles.accentColor}`} />
                                Tools & Technologies
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {service.tools.map((tool, i) => (
                                    <Badge key={i} variant="secondary" className="px-3 py-1 text-sm font-normal">
                                        {tool}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    )}
                </motion.div>
            </SectionWrapper>

            {/* 8. SECURITY & COMPLIANCE */}
            {service.securityFeatures && service.securityFeatures.length > 0 && (
                <SectionWrapper className="bg-secondary/10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-background rounded-2xl p-8 border border-border shadow-sm"
                    >
                        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                            <Lock className={`h-6 w-6 ${styles.accentColor}`} />
                            Security & Compliance
                        </h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {service.securityFeatures.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <Shield className="h-4 w-4 text-green-500" />
                                    <span className="text-sm font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </SectionWrapper>
            )}

            {/* 9. TESTIMONIALS */}
            <SectionWrapper>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                        <MessageSquare className={`h-8 w-8 ${styles.accentColor}`} />
                        Client Success Stories
                    </h2>
                    <Card className="bg-secondary/20 border-border">
                        <CardContent className="p-8">
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                                    ))}
                                </div>
                                <p className="text-lg text-muted-foreground italic">
                                    "Infeara transformed our infrastructure. Their team was professional, knowledgeable, and delivered exactly what we needed on time and within budget."
                                </p>
                                <div>
                                    <p className="font-semibold text-foreground">CTO</p>
                                    <p className="text-sm text-muted-foreground">Leading FinTech Company</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </SectionWrapper>

            {/* 10. FAQs */}
            {service.faqs && service.faqs.length > 0 && (
                <SectionWrapper id="faqs" className="bg-secondary/10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center justify-center gap-3">
                            <HelpCircle className={`h-8 w-8 ${styles.accentColor}`} />
                            Frequently Asked Questions
                        </h2>
                        <Accordion type="single" collapsible className="w-full">
                            {service.faqs.map((faq, i) => (
                                <AccordionItem key={i} value={`item-${i}`}>
                                    <AccordionTrigger className="text-lg font-medium text-left">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>
                </SectionWrapper>
            )}

            {/* 11. CTA SECTION */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-20 bg-slate-950 text-white text-center relative overflow-hidden"
            >
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/cta-bg.jpg"
                        alt="CTA Background"
                        fill
                        className="object-cover opacity-40"
                        quality={90}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${styles.heroGradient} opacity-80 mix-blend-multiply`}></div>
                </div>
                <div className="container relative z-10 px-4 mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Get started with Infeara today. Our experts are ready to help you achieve your goals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className={`h-14 px-8 text-lg font-bold ${styles.buttonColor}`} asChild>
                            <Link href="/contact">
                                Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button variant="outline" className="h-14 px-8 text-lg border-white/20 text-white" asChild>
                            <Link href="tel:+916381173289">
                                <Phone className="mr-2 h-5 w-5" /> Speak to Expert
                            </Link>
                        </Button>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}

function FeatureCard({ icon: Icon, title, description, accentColor }: { icon: any, title: string, description: string, accentColor: string }) {
    return (
        <Card className="bg-background/50 backdrop-blur-sm border-border hover:border-orange-500/50 transition-all hover:shadow-lg">
            <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 ${accentColor}`}>
                    <Icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-bold">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                    {description}
                </p>
            </CardContent>
        </Card>
    );
}
