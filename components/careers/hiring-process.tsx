"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
    {
        number: "01",
        title: "Apply",
        description: "Submit your application. We review every resume manually—no bots here."
    },
    {
        number: "02",
        title: "Intro Call",
        description: "A 30-minute chat to align on values, expectations, and culture fit."
    },
    {
        number: "03",
        title: "Skill Discussion",
        description: "A deep dive into your expertise. We might do a small take-home task or a live pairing session."
    },
    {
        number: "04",
        title: "Offer",
        description: "If it's a match, we'll make an offer quickly. We value your time and transparency."
    }
];

export function HiringProcess() {
    return (
        <SectionWrapper id="hiring-process" className="bg-secondary/30">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Our Hiring Process
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We keep it simple, human, and respectful of your time.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-6 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-200 to-transparent dark:via-orange-800 -z-10"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="h-16 w-16 rounded-full bg-background border-4 border-secondary flex items-center justify-center text-xl font-bold text-orange-600 shadow-sm group-hover:border-orange-500 transition-colors duration-300 z-10">
                                    {step.number}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
