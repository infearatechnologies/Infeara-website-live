"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Clock, CheckCircle2, ArrowRight, Globe, MessageSquare } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { createClient } from "@/lib/supabase/client";

const formSchema = z.object({
    name: z.string().min(2, { message: "First Name must be at least 2 characters." }),
    last_name: z.string().min(2, { message: "Last Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z.string()
        .min(10, { message: "Phone number must be at least 10 digits." })
        .regex(/^[\d+\-\s()]*$/, { message: "Phone number can only contain digits, spaces, and symbols (+, -, (, ))." }),
    whatsapp: z.string()
        .optional()
        .refine(val => !val || val.length >= 10, { message: "WhatsApp number must be at least 10 digits." })
        .refine(val => !val || /^[\d+\-\s()]*$/.test(val), { message: "WhatsApp number can only contain digits, spaces, and symbols (+, -, (, ))." }),
    company: z.string().min(2, { message: "Company name is required." }),
    requirement_description: z.string().min(10, { message: "Please provide more details about your requirements (min 10 chars)." }),
});

export default function ContactContent() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const supabase = createClient();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            last_name: "",
            email: "",
            phone: "",
            whatsapp: "",
            company: "",
            requirement_description: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);

        try {
            const { error } = await supabase
                .from('contacts')
                .insert([
                    {
                        name: values.name,
                        last_name: values.last_name,
                        email: values.email,
                        phone: values.phone,
                        whatsapp: values.whatsapp,
                        company: values.company,
                        requirement_description: values.requirement_description,
                        subject: 'New Contact Form Submission', // Default subject
                        message: values.requirement_description // Mapping requirement to message for compatibility
                    }
                ]);

            if (error) throw error;

            setIsSuccess(true);
            form.reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            alert("Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="min-h-screen bg-background font-sans selection:bg-orange-500/20 pt-20">
            {/* Hero Section */}
            <section className="py-16 md:py-24 bg-background text-center px-4">
                <div className="container mx-auto max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl md:text-6xl font-bold font-heading tracking-tight mb-6"
                    >
                        Let's Talk
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                    >
                        Ready to transform your digital infrastructure? Based in Chennai, we help businesses globally scale securely and efficiently.
                    </motion.p>
                </div>
            </section>

            {/* Main Content: Form & Options */}
            <section className="pb-24 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
                        {/* Left Column: Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:col-span-7"
                        >
                            <Card className="border-border bg-card shadow-lg p-6 md:p-8">
                                {isSuccess ? (
                                    <div className="text-center py-16">
                                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle2 className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                        <p className="text-muted-foreground mb-8">
                                            Thanks for reaching out. We'll get back to you within 24 hours.
                                        </p>
                                        <Button onClick={() => setIsSuccess(false)} variant="outline">
                                            Send Another Message
                                        </Button>
                                    </div>
                                ) : (
                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <FormField
                                                    control={form.control}
                                                    name="name"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-base">First Name</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="John" className="h-12 text-base" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="last_name"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-base">Last Name</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="Doe" className="h-12 text-base" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-6">
                                                <FormField
                                                    control={form.control}
                                                    name="email"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-base">Email</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="john@company.com" className="h-12 text-base" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="phone"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-base">Phone</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="+1 (555) 000-0000" className="h-12 text-base" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-6">
                                                <FormField
                                                    control={form.control}
                                                    name="whatsapp"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-base">WhatsApp (Optional)</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="+1 (555) 000-0000" className="h-12 text-base" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="company"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-base">Company Name</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="Your Company Ltd." className="h-12 text-base" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <FormField
                                                control={form.control}
                                                name="requirement_description"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-base">Requirement Description</FormLabel>
                                                        <FormControl>
                                                            <Textarea
                                                                placeholder="Tell us about your project requirements..."
                                                                className="min-h-[160px] text-base resize-none"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <div className="pt-2">
                                                <Button type="submit" className="w-full h-14 text-lg font-bold bg-orange-600 hover:bg-orange-700" disabled={isSubmitting}>
                                                    {isSubmitting ? "Sending..." : "Send Message"}
                                                </Button>
                                                <p className="text-xs text-center text-muted-foreground mt-4">
                                                    Your information stays private. We don't spam.
                                                </p>
                                            </div>
                                        </form>
                                    </Form>
                                )}
                            </Card>
                        </motion.div>

                        {/* Right Column: Options & Trust */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="lg:col-span-5 space-y-10"
                        >
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold">Other ways to connect</h3>
                                <div className="grid gap-4">
                                    <ContactOption
                                        icon={Mail}
                                        title="Send a Request"
                                        value="Submit Inquiry"
                                        href="#top"
                                    />
                                    <ContactOption
                                        icon={Phone}
                                        title="Call / WhatsApp"
                                        value="+91 6381173289"
                                        href="https://wa.me/916381173289"
                                    />
                                    <div className="flex items-start gap-4 p-4 rounded-xl border border-border bg-secondary/20">
                                        <div className="p-2 bg-background rounded-lg text-muted-foreground">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="font-medium">Business Hours</div>
                                            <div className="text-sm text-muted-foreground mt-1">Mon - Fri, 9am - 6pm IST</div>
                                            <div className="text-xs text-orange-600 mt-1 font-medium">Remote-First Team</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-xl font-bold">Why Infeara?</h3>
                                <div className="space-y-4">
                                    <TrustSignal text="We respond within 24 hours" />
                                    <TrustSignal text="No sales pressure, just solutions" />
                                    <TrustSignal text="Global remote team, local expertise" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How We Work */}
            <section className="py-24 bg-secondary/30">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-2xl mx-auto mb-16"
                    >
                        <h2 className="text-3xl font-bold font-heading mb-4">What happens next?</h2>
                        <p className="text-muted-foreground">We keep it simple and transparent.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
                        {/* Connector Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-border -z-10"></div>

                        <Step
                            number="01"
                            title="You reach out"
                            desc="Submit the form or send us an email. We'll review your requirements."
                            delay={0}
                        />
                        <Step
                            number="02"
                            title="We connect"
                            desc="We'll schedule a quick call to understand your goals and challenges."
                            delay={0.2}
                        />
                        <Step
                            number="03"
                            title="We propose"
                            desc="You get a tailored plan and quote. No hidden fees, no surprises."
                            delay={0.4}
                        />
                    </div>
                </div>
            </section>

            {/* Remote First & Global */}
            <section className="py-24 bg-background border-t border-border">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center justify-center p-3 bg-orange-100 text-orange-600 rounded-full mb-6">
                            <Globe className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-bold font-heading mb-6">Remote-First. Globally Connected.</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                            We operate without borders. Our team is distributed, but our commitment to your success is centralized.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/careers">Join our Team</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* WhatsApp Floating Widget */}
            <a
                href="https://wa.me/916381173289"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 duration-200"
                title="Chat on WhatsApp"
            >
                <MessageSquare className="h-7 w-7 text-white" />
            </a>
        </div>
    );
}

function ContactOption({ icon: Icon, title, value, href }: { icon: any, title: string, value: string, href: string }) {
    return (
        <a href={href} className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-orange-500/50 hover:shadow-md transition-all group">
            <div className="p-2 bg-secondary rounded-lg text-foreground group-hover:text-orange-600 transition-colors">
                <Icon className="w-5 h-5" />
            </div>
            <div>
                <div className="font-medium text-sm text-muted-foreground">{title}</div>
                <div className="font-semibold text-foreground">{value}</div>
            </div>
            <ArrowRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-orange-600 transition-colors" />
        </a>
    );
}

function TrustSignal({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" />
            <span className="text-foreground font-medium">{text}</span>
        </div>
    );
}

function Step({ number, title, desc, delay = 0 }: { number: string, title: string, desc: string, delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="bg-background p-6 rounded-2xl border border-border text-center relative"
        >
            <div className="w-12 h-12 bg-secondary text-foreground font-bold text-lg rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-background relative z-10">
                {number}
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground">{desc}</p>
        </motion.div>
    );
}
