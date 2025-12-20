"use client";

import Link from "next/link";
import Image from "next/image";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, Shield, Server, Cloud, Headphones, CheckCircle2, Star, Quote, Zap, Globe, Users, Clock, ShieldCheck, Building2, Network } from "lucide-react";
import { motion } from "framer-motion";

import AboutSection from "@/components/home/AboutSection";

export default function HomePage() {
    return (
        <>
            {/* 1. HERO SECTION */}
            <section className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero-bg.jpg"
                        alt="Digital Infrastructure"
                        fill
                        className="object-cover opacity-20"
                        priority
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background"></div>
                </div>

                {/* Animated Background Elements */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-3xl animate-pulse duration-10000"></div>
                    <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-secondary rounded-full blur-3xl animate-pulse duration-10000 delay-1000"></div>
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>
                </div>

                <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-center max-w-5xl mx-auto space-y-8"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center rounded-full border border-orange-200 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-600 shadow-sm"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-orange-500 mr-2 animate-pulse"></span>
                            Next-Gen IT Solutions
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl font-heading text-foreground"
                        >
                            Powering the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-600 to-orange-500 animate-gradient-x">
                                Digital Enterprise
                            </span>
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="max-w-[800px] text-muted-foreground text-lg md:text-xl/relaxed lg:text-2xl/relaxed leading-relaxed"
                        >
                            Premier IT Support Services Outsourcing and Consulting in Chennai. From robust infrastructure to military-grade cybersecurity, we build the technology backbone that drives your business forward.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 w-full justify-center"
                        >
                            <Button size="lg" className="h-14 px-8 text-lg bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-bold shadow-xl shadow-primary/20 transition-all hover:scale-105" asChild>
                                <Link href="/contact">
                                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-border text-foreground hover:bg-secondary rounded-full font-semibold transition-all hover:scale-105" asChild>
                                <Link href="/services">
                                    Explore Services
                                </Link>
                            </Button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 w-full max-w-4xl"
                        >
                            {[
                                { label: "Years Experience", value: "2+", icon: Clock },
                                { label: "Projects Delivered", value: "50+", icon: CheckCircle2 },
                                { label: "Client Satisfaction", value: "100%", icon: Star },
                                { label: "Active Clients", value: "25+", icon: Users },
                            ].map((stat, index) => (
                                <div key={index} className="flex flex-col items-center space-y-2 p-4 rounded-2xl hover:bg-secondary/50 transition-colors">
                                    <div className="p-3 bg-orange-500/10 rounded-full text-orange-600 mb-2">
                                        <stat.icon className="h-6 w-6" />
                                    </div>
                                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 2. ABOUT SECTION */}
            <AboutSection />

            {/* 3. TRUSTED BY SECTION */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-12 border-y border-border bg-secondary/60 backdrop-blur-sm overflow-hidden"
            >
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">Trusted by Technologies Partner</p>
                    <div className="relative w-full overflow-hidden">
                        <div className="flex w-max animate-scroll gap-16">
                            {[
                                { name: "Microsoft", logo: "https://uhf.microsoft.com/images/microsoft/RE1Mu3b.png" },
                                { name: "AWS", logo: "https://img.icons8.com/?size=100&id=33039&format=png&color=000000" },
                                { name: "Google Cloud", logo: "https://www.gstatic.com/cgc/google-cloud-logo.svg" },
                                { name: "VMware", logo: "https://www.vmware.com/media/blt8c9a8aaca0ffd4ac/blt5a3e185aed7848a3/65fac63dd3267616e27e7051/vmware-logo-grey.svg" },
                                { name: "Red Hat", logo: "https://www.redhat.com/rhdc/managed-files/rhb-logos-red_hat_logo-hero_image_2.svg" },
                                { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/250px-Cisco_logo_blue_2016.svg.png?20180716213716" },
                                { name: "Fortinet", logo: "https://www.fortinet.com/content/dam/fortinet/images/general/fortinet-logo.svg" },
                                { name: "Palo Alto Networks", logo: "https://www.paloaltonetworks.com/content/dam/pan/en_US/images/logos/brand/primary-company-logo/Parent-logo.png?imbypass=on&imwidth=1920" },
                                { name: "Sophos", logo: "https://images.contentstack.io/v3/assets/blt38f1f401b66100ad/blt0899b1ab2bd40d8d/68d381f4faf818d3f61fb755/sophos-logo_1_(1).svg?width=185&quality=80&auto=webp&format=auto&cache=true&immutable=true&cache-control=max-age%3D31536000" },
                                { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/330px-Dell_Logo.svg.png?20160807135325" },
                                { name: "HPE", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Hewlett_Packard_Enterprise_logo.svg/960px-Hewlett_Packard_Enterprise_logo.svg.png?20210501045011" },
                                { name: "Lenovo", logo: "https://p3-ofp.static.pub/fes/cms/2023/03/22/8hjmcte754uauw07ypikjkjtx0m5ib450914.svg" },
                                { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HP_logo_2025.svg/960px-HP_logo_2025.svg.png?20250601014346" }
                            ].concat([
                                { name: "Microsoft", logo: "https://uhf.microsoft.com/images/microsoft/RE1Mu3b.png" },
                                { name: "AWS", logo: "https://img.icons8.com/?size=100&id=33039&format=png&color=000000" },
                                { name: "Google Cloud", logo: "https://www.gstatic.com/cgc/google-cloud-logo.svg" },
                                { name: "VMware", logo: "https://www.vmware.com/media/blt8c9a8aaca0ffd4ac/blt5a3e185aed7848a3/65fac63dd3267616e27e7051/vmware-logo-grey.svg" },
                                { name: "Red Hat", logo: "https://www.redhat.com/rhdc/managed-files/rhb-logos-red_hat_logo-hero_image_2.svg" },
                                { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/250px-Cisco_logo_blue_2016.svg.png?20180716213716" },
                                { name: "Fortinet", logo: "https://www.fortinet.com/content/dam/fortinet/images/general/fortinet-logo.svg" },
                                { name: "Palo Alto Networks", logo: "https://www.paloaltonetworks.com/content/dam/pan/en_US/images/logos/brand/primary-company-logo/Parent-logo.png?imbypass=on&imwidth=1920" },
                                { name: "Sophos", logo: "https://images.contentstack.io/v3/assets/blt38f1f401b66100ad/blt0899b1ab2bd40d8d/68d381f4faf818d3f61fb755/sophos-logo_1_(1).svg?width=185&quality=80&auto=webp&format=auto&cache=true&immutable=true&cache-control=max-age%3D31536000" },
                                { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/330px-Dell_Logo.svg.png?20160807135325" },
                                { name: "HPE", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Hewlett_Packard_Enterprise_logo.svg/960px-Hewlett_Packard_Enterprise_logo.svg.png?20210501045011" },
                                { name: "Lenovo", logo: "https://p3-ofp.static.pub/fes/cms/2023/03/22/8hjmcte754uauw07ypikjkjtx0m5ib450914.svg" },
                                { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HP_logo_2025.svg/960px-HP_logo_2025.svg.png?20250601014346" }
                            ]).map((partner, index) => (
                                <div key={`${partner.name}-${index}`} className="relative h-12 w-32 md:h-16 md:w-40 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 flex items-center justify-center mx-8">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* 3. SERVICES SECTION */}
            <section className="py-24 bg-background/60 backdrop-blur-sm relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="mb-4 border-orange-200 text-orange-600 bg-orange-500/10 px-4 py-1">Our Expertise</Badge>
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Comprehensive IT Solutions</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            End-to-end technology services tailored to your business needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceCard
                            icon={ShieldCheck}
                            title="VAPT Services"
                            description="Comprehensive vulnerability assessment and penetration testing to secure your assets."
                            href="/services/audit-compliance/vapt"
                        />
                        <ServiceCard
                            icon={Server}
                            title="Managed IT Services"
                            description="Proactive 24/7 IT management and support to keep your business running smoothly."
                            href="/services/infrastructure/managed-it"
                        />
                        <ServiceCard
                            icon={Cloud}
                            title="Cloud Solutions"
                            description="Seamless cloud migration, management, and optimization for AWS and Azure."
                            href="/services/infrastructure/cloud-solutions"
                        />
                        <ServiceCard
                            icon={Zap}
                            title="AI & Automation"
                            description="Streamline workflows and boost productivity with custom AI and automation solutions."
                            href="/services/ai-automation/workflow-automation"
                        />
                        <ServiceCard
                            icon={Building2}
                            title="Offshore Development"
                            description="Scale your engineering capacity with a dedicated offshore development center in India."
                            href="/services/turnkey/offshore-development"
                        />
                        <ServiceCard
                            icon={Network}
                            title="Network Infrastructure"
                            description="Design and implementation of robust, secure, and high-speed network architectures."
                            href="/services/infrastructure/network-infrastructure"
                        />
                    </div>
                </div>
            </section>

            {/* 4. TESTIMONIALS SECTION */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-24 bg-secondary/30 overflow-hidden"
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">What Our Clients Say</h2>
                        <p className="text-lg text-muted-foreground">Trusted by over 500+ businesses across the globe.</p>
                    </div>
                    <div className="relative w-full overflow-hidden">
                        <div className="flex w-max animate-scroll gap-8">
                            {[
                                {
                                    quote: "Infeara transformed our campus connectivity. Their proactive support ensures our digital classrooms run without interruption.",
                                    author: "A Chennai-based CBSE School",
                                    role: "IT Infrastructure Support",
                                    avatar: "/placeholder-school.jpg",
                                    initials: "CS"
                                },
                                {
                                    quote: "Setting up our ODC in India was seamless. Infeara handled everything from recruitment to infrastructure, allowing us to focus on product.",
                                    author: "A Dubai-based SaaS Startup",
                                    role: "Remote IT Operations",
                                    avatar: "/placeholder-startup.jpg",
                                    initials: "DS"
                                },
                                {
                                    quote: "The audit revealed critical vulnerabilities we weren't aware of. Their remediation plan secured our factory operations against cyber threats.",
                                    author: "A 50+ Employee Manufacturing Firm",
                                    role: "Server & Network Audit",
                                    avatar: "/placeholder-factory.jpg",
                                    initials: "MF"
                                },
                                {
                                    quote: "Achieving ISO 27001 readiness was a breeze with their guidance. Their VAPT team is thorough and highly professional.",
                                    author: "A Leading FinTech Company",
                                    role: "VAPT & Compliance",
                                    avatar: "/placeholder-fintech.jpg",
                                    initials: "FC"
                                },
                                {
                                    quote: "Healthcare requires 100% uptime. Infeara's 24/7 monitoring keeps our patient data secure and our systems always online.",
                                    author: "A Multi-Specialty Hospital",
                                    role: "Managed IT Services",
                                    avatar: "/placeholder-hospital.jpg",
                                    initials: "MH"
                                },
                                {
                                    quote: "Migrating our legacy systems to AWS reduced our costs by 30%. The transition was smooth with zero data loss.",
                                    author: "An E-commerce Logistics Provider",
                                    role: "Cloud Migration",
                                    avatar: "/placeholder-logistics.jpg",
                                    initials: "EL"
                                }
                            ].map((testimonial, index) => (
                                <div key={index} className="w-[400px]">
                                    <TestimonialCard
                                        quote={testimonial.quote}
                                        author={testimonial.author}
                                        role={testimonial.role}
                                        avatar={testimonial.avatar}
                                        initials={testimonial.initials}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* 5. CTA SECTION */}
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
        <Card className="h-full bg-card border-border hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1 group">
            <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    <Icon className="h-7 w-7 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-orange-600 transition-colors">{title}</CardTitle>
            </CardHeader>
            <CardContent>
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

function TestimonialCard({ quote, author, role, avatar, initials }: { quote: string, author: string, role: string, avatar: string, initials: string }) {
    return (
        <Card className="bg-card border-border p-6 hover:shadow-lg transition-shadow">
            <div className="mb-6 text-orange-500/20">
                <Quote className="h-10 w-10" />
            </div>
            <p className="text-lg text-muted-foreground mb-6 italic">"{quote}"</p>
            <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12 border-2 border-orange-100">
                    <AvatarImage src={avatar} alt={author} />
                    <AvatarFallback className="bg-orange-50 text-orange-600 font-bold">{initials}</AvatarFallback>
                </Avatar>
                <div>
                    <div className="font-bold text-foreground">{author}</div>
                    <div className="text-sm text-muted-foreground">{role}</div>
                </div>
            </div>
        </Card>
    );
}
