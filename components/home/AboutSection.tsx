"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
                        <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 text-orange-600 px-4 py-1.5 text-sm font-medium">
                            <span className="flex h-2 w-2 rounded-full bg-orange-600 mr-2"></span>
                            Premier IT Consulting
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                            Innovating for a <br />
                            <span className="text-orange-600">Secure Digital Future</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            At Infeara, a leading IT Outsourcing and Consulting firm in Chennai, we combine cutting-edge technology with deep industry expertise to build resilient IT infrastructures. From cloud migrations to military-grade cybersecurity, we empower businesses to thrive in the digital age without fear.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our "Security-First" philosophy is embedded in every project we undertake. We don't just deploy solutions; we architect digital fortresses that protect your data and intellectual property. By integrating proactive threat hunting, automated compliance checks, and real-time monitoring into our core services, we ensure that your innovation never comes at the cost of security. Whether you are scaling an ODC or optimizing your local network, our Chennai-based team delivers global standards of excellence.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "24/7 IT Support Services",
                                "Certified Experts",
                                "99.9% Uptime SLA",
                                "Proactive Security"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <CheckCircle2 className="h-5 w-5 text-orange-600" />
                                    <span className="font-medium text-foreground">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <Button size="lg" className="h-14 px-8 text-lg bg-orange-600 text-white hover:bg-orange-700 rounded-full font-bold shadow-lg shadow-orange-900/20 transition-all hover:scale-105" asChild>
                                <Link href="/about">
                                    Read Our Story <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-right-8 duration-1000 delay-200 group">
                        <Image
                            src="/office-culture.png"
                            alt="Infeara IT Support Team in Chennai"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                        {/* Floating Stats Card */}
                        <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20 max-w-xs animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                            <p className="text-4xl font-bold text-orange-600 mb-1">2+</p>
                            <p className="text-sm font-medium text-muted-foreground">Years of delivering excellence in IT solutions and cybersecurity.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
