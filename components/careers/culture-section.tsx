"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MessageSquare, Target, Zap } from "lucide-react";

const culturePoints = [
    {
        icon: Clock,
        title: "True Flexibility",
        description: "We care about what you achieve, not when you clock in. Work during your most productive hours, whether that's early morning or late night."
    },
    {
        icon: MessageSquare,
        title: "Async-First",
        description: "We minimize meetings and prioritize written communication. Deep work is respected, and you won't be interrupted by constant pings."
    },
    {
        icon: Target,
        title: "Outcome-Based",
        description: "No micromanagement. You own your projects and are judged on the results you deliver, giving you full autonomy over your process."
    },
    {
        icon: Zap,
        title: "Rapid Growth",
        description: "We're a small, high-impact team. You'll wear multiple hats and have the opportunity to shape the company's future directly."
    }
];

export function CultureSection() {
    return (
        <SectionWrapper id="culture" className="bg-secondary/30">
            <div className="container px-4 mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                        Remote is in our DNA
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        We didn't just adapt to remote work; we were built for it.
                        Our culture is designed to support a distributed team that values
                        freedom, trust, and high performance.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {culturePoints.map((point, index) => (
                        <Card key={index} className="border-none shadow-sm bg-background/50 backdrop-blur-sm hover:bg-background transition-colors duration-300">
                            <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-2">
                                <div className="h-12 w-12 rounded-2xl bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center shrink-0">
                                    <point.icon className="h-6 w-6 text-orange-600" />
                                </div>
                                <CardTitle className="text-xl font-bold pt-2">
                                    {point.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pl-[5.5rem]">
                                <p className="text-muted-foreground leading-relaxed">
                                    {point.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
