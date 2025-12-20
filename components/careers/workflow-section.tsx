"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { CheckCircle2 } from "lucide-react";

const steps = [
    {
        title: "Communication",
        description: "We use Slack for quick syncs, Notion for documentation, and Zoom for face-to-face time. We default to public channels to keep information accessible."
    },
    {
        title: "Onboarding",
        description: "Our structured 30-day onboarding plan ensures you have the context, tools, and introductions you need to succeed from day one."
    },
    {
        title: "Performance",
        description: "We set clear OKRs and have regular 1:1s. Feedback is continuous and two-way, focusing on growth and removing blockers."
    },
    {
        title: "Collaboration",
        description: "We use agile methodologies but adapt them to our remote context. We value documented decisions over lengthy meetings."
    }
];

export function WorkflowSection() {
    return (
        <SectionWrapper id="workflow" className="bg-secondary/20">
            <div className="container px-4 mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                            How We Work
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            Remote work requires intention. We've built a workflow that
                            minimizes friction and maximizes flow state, so you can focus
                            on what matters.
                        </p>
                        <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-blue-100 dark:from-orange-950/30 dark:to-blue-950/30 border border-white/20 shadow-xl">
                            {/* Abstract Workflow Visual */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="grid grid-cols-2 gap-4 p-8 w-full max-w-sm">
                                    <div className="bg-white dark:bg-card p-4 rounded-lg shadow-md transform rotate-3 opacity-90">
                                        <div className="h-2 w-12 bg-orange-200 rounded mb-2"></div>
                                        <div className="h-2 w-full bg-secondary rounded mb-1"></div>
                                        <div className="h-2 w-2/3 bg-secondary rounded"></div>
                                    </div>
                                    <div className="bg-white dark:bg-card p-4 rounded-lg shadow-md transform -rotate-2 mt-8 opacity-90">
                                        <div className="h-2 w-12 bg-blue-200 rounded mb-2"></div>
                                        <div className="h-2 w-full bg-secondary rounded mb-1"></div>
                                        <div className="h-2 w-2/3 bg-secondary rounded"></div>
                                    </div>
                                    <div className="bg-white dark:bg-card p-4 rounded-lg shadow-md transform -rotate-3 opacity-90">
                                        <div className="h-2 w-12 bg-green-200 rounded mb-2"></div>
                                        <div className="h-2 w-full bg-secondary rounded mb-1"></div>
                                        <div className="h-2 w-2/3 bg-secondary rounded"></div>
                                    </div>
                                    <div className="bg-white dark:bg-card p-4 rounded-lg shadow-md transform rotate-2 mt-8 opacity-90">
                                        <div className="h-2 w-12 bg-purple-200 rounded mb-2"></div>
                                        <div className="h-2 w-full bg-secondary rounded mb-1"></div>
                                        <div className="h-2 w-2/3 bg-secondary rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {steps.map((step, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="h-8 w-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0 border border-orange-200 dark:border-orange-800">
                                        <span className="text-sm font-bold text-orange-700 dark:text-orange-400">{index + 1}</span>
                                    </div>
                                    {index !== steps.length - 1 && (
                                        <div className="w-px h-full bg-border my-2"></div>
                                    )}
                                </div>
                                <div className="pb-8">
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
