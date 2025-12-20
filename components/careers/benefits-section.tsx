"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Laptop, Heart, GraduationCap, Users, Calendar, Coffee } from "lucide-react";

const benefits = [
    {
        icon: Laptop,
        title: "Top-Tier Equipment",
        description: "We provide the latest MacBook Pros, noise-canceling headphones, and a generous stipend for your home office setup."
    },
    {
        icon: Heart,
        title: "Comprehensive Health",
        description: "Full medical, dental, and vision coverage for you and your dependents, plus mental health support resources."
    },
    {
        icon: GraduationCap,
        title: "Continuous Learning",
        description: "Annual budget for conferences, courses, and books. We actively support your professional development goals."
    },
    {
        icon: Calendar,
        title: "Flexible Time Off",
        description: "Take the time you need to recharge. We offer unlimited PTO with a mandatory minimum to ensure you actually use it."
    },
    {
        icon: Users,
        title: "Inclusive Culture",
        description: "We celebrate diversity and foster an environment where everyone feels welcome, heard, and valued."
    },
    {
        icon: Coffee,
        title: "Co-working Stipend",
        description: "Prefer working from a cafe or co-working space? We've got you covered with a monthly allowance."
    }
];

export function BenefitsSection() {
    return (
        <SectionWrapper id="benefits" className="bg-background">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Why Work With Us?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We believe that happy, healthy people do the best work.
                        That's why we offer benefits that support your life, not just your job.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-orange-200 dark:hover:border-orange-900">
                            <CardHeader>
                                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-orange-100 dark:group-hover:bg-orange-900/20 transition-colors">
                                    <benefit.icon className="h-5 w-5 text-foreground group-hover:text-orange-600 transition-colors" />
                                </div>
                                <CardTitle className="text-lg font-bold">
                                    {benefit.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {benefit.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
