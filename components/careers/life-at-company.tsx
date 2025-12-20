"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "The autonomy I have here is unmatched. I'm trusted to make decisions and own my work, which has accelerated my growth faster than any other role.",
        author: "Sarah J.",
        role: "Senior Product Designer"
    },
    {
        quote: "Working remotely allowed me to travel while building a career I love. The async culture means I can focus on deep work without constant interruptions.",
        author: "David M.",
        role: "Backend Engineer"
    },
    {
        quote: "It's rare to find a company that truly walks the walk on work-life balance. I feel supported as a whole person, not just an employee.",
        author: "Elena R.",
        role: "Customer Success Manager"
    }
];

export function LifeAtCompany() {
    return (
        <SectionWrapper id="life-at-company" className="bg-background">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Life at Infeara
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our team has to say about building the future with us.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-secondary/10 border-none shadow-sm relative overflow-visible mt-8 md:mt-0">
                            <div className="absolute -top-6 left-6 h-12 w-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600">
                                <Quote className="h-5 w-5 fill-current" />
                            </div>
                            <CardContent className="pt-10 pb-8 px-8">
                                <p className="text-lg italic text-muted-foreground mb-6 leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                                <div>
                                    <div className="font-bold text-foreground">{testimonial.author}</div>
                                    <div className="text-sm text-orange-600 font-medium">{testimonial.role}</div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
