
'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, MapPin, Clock, Globe, Heart, DollarSign, TrendingUp, Coffee, CheckCircle2, Users, Laptop, MessageSquare, Calendar, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useMemo, useEffect } from "react";
import { Search, X, ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS_PER_PAGE = 10;

interface Job {
    id: string;
    title: string;
    slug: string;
    department: string;
    location: string;
    type: string;
    salary_range: string;
}

interface CareersContentProps {
    jobs: Job[] | null;
}

const benefits = [
    {
        icon: Clock,
        title: "Flexible Hours",
        description: "Work when you're most productive. We focus on outcomes, not clock-watching."
    },
    {
        icon: Laptop,
        title: "Remote Setup",
        description: "Generous stipend for your home office, plus the latest hardware."
    },
    {
        icon: TrendingUp,
        title: "Growth Budget",
        description: "Annual allowance for courses, conferences, and books."
    },
    {
        icon: Heart,
        title: "Health First",
        description: "Comprehensive medical coverage and mental health support."
    },
    {
        icon: Users,
        title: "Inclusive Culture",
        description: "A diverse team where every voice is heard and valued."
    },
    {
        icon: MessageSquare,
        title: "Transparent Comms",
        description: "Open leadership and clear communication channels."
    }
];

const workflowSteps = [
    {
        title: "Async First",
        description: "We document everything. Fewer meetings, more deep work time."
    },
    {
        title: "Collaborative Tools",
        description: "Slack, Notion, and Linear keep us aligned without the noise."
    },
    {
        title: "Weekly Syncs",
        description: "Short, focused team standups to connect and unblock."
    },
    {
        title: "Quarterly Retreats",
        description: "We meet in person to bond, plan, and recharge."
    }
];

const hiringProcess = [
    { step: "01", title: "Apply", desc: "Submit your resume and portfolio." },
    { step: "02", title: "Intro Call", desc: "Casual chat to see if we align." },
    { step: "03", title: "Skill Check", desc: "Practical task or discussion." },
    { step: "04", title: "Offer", desc: "Welcome to the team!" }
];

const reviews = [
    {
        name: "Praveen Kumar",
        role: "Solution Architect",
        quote: "Designing scalable solutions that drive business growth is what I do best here. The autonomy to innovate is refreshing.",
        initials: "PK"
    },
    {
        name: "Divya",
        role: "Cyber Analyst",
        quote: "Protecting our digital assets is a constant challenge that I enjoy. Infeara provides the tools and support to stay ahead of threats.",
        initials: "D"
    },
    {
        name: "Kumaran",
        role: "Desktop Support Engineer - L1",
        quote: "Helping colleagues resolve their technical issues efficiently is rewarding. The team spirit here makes every day better.",
        initials: "K"
    },
    {
        name: "Rosi",
        role: "AWS Security Consultant",
        quote: "Securing cloud infrastructure for diverse clients keeps me on my toes. I love the continuous learning opportunities.",
        initials: "R"
    },
    {
        name: "John",
        role: "Network Administrator - L2",
        quote: "Managing complex networks requires precision. Infeara's focus on excellence pushes me to be my best.",
        initials: "J"
    },
    {
        name: "Kabilan",
        role: "Senior System Administrator - L3",
        quote: "Ensuring system reliability at scale is a huge responsibility. The trust placed in me motivates me to deliver top-notch performance.",
        initials: "K"
    },
    {
        name: "Suriya Kumar",
        role: "IT Manager",
        quote: "Leading such a talented team is a privilege. We foster a culture of growth, collaboration, and work-life balance.",
        initials: "SK"
    }
];

export function CareersContent({ jobs }: CareersContentProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState("all");
    const [selectedLocation, setSelectedLocation] = useState("all");
    const [selectedType, setSelectedType] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const [currentReview, setCurrentReview] = useState(0);

    // Auto-rotate reviews
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentReview((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    // Extract unique values for filters
    const departments = useMemo(() => {
        if (!jobs) return [];
        const depts = new Set(jobs.map(job => job.department));
        return Array.from(depts).sort();
    }, [jobs]);

    const locations = useMemo(() => {
        if (!jobs) return [];
        const locs = new Set(jobs.map(job => job.location));
        return Array.from(locs).sort();
    }, [jobs]);

    const types = useMemo(() => {
        if (!jobs) return [];
        const t = new Set(jobs.map(job => job.type));
        return Array.from(t).sort();
    }, [jobs]);

    // Filter jobs
    const filteredJobs = useMemo(() => {
        if (!jobs) return [];
        return jobs.filter(job => {
            const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                job.department.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesDepartment = selectedDepartment === "all" || job.department === selectedDepartment;
            const matchesLocation = selectedLocation === "all" || job.location === selectedLocation;
            const matchesType = selectedType === "all" || job.type === selectedType;

            return matchesSearch && matchesDepartment && matchesLocation && matchesType;
        });
    }, [jobs, searchQuery, selectedDepartment, selectedLocation, selectedType]);

    // Reset page when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, selectedDepartment, selectedLocation, selectedType]);

    // Pagination logic
    const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);
    const paginatedJobs = filteredJobs.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const clearFilters = () => {
        setSearchQuery("");
        setSelectedDepartment("all");
        setSelectedLocation("all");
        setSelectedType("all");
    };

    return (
        <div className="min-h-screen bg-background font-sans selection:bg-orange-500/20">
            {/* Hero Section */}
            <section className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-3xl"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-secondary rounded-full blur-3xl"
                    />
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center max-w-4xl mx-auto space-y-8"
                        >
                            <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-600 shadow-sm">
                                <span className="flex h-2 w-2 rounded-full bg-orange-500 mr-2 animate-pulse"></span>
                                Remote-First Company
                            </div>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight font-heading text-foreground">
                                Build Your Career—<br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-600 to-orange-500 animate-gradient-x">From Anywhere.</span>
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                                Join a team that trusts you to do your best work, wherever you are. We're building the future of Digital Transformation with autonomy and purpose.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
                        >
                            <Button size="lg" className="h-14 px-8 text-lg bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-bold shadow-xl shadow-primary/20 transition-all hover:scale-105" asChild>
                                <Link href="#open-roles">View Open Roles</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-border text-foreground hover:bg-secondary rounded-full font-semibold transition-all hover:scale-105" asChild>
                                <Link href="#culture">Our Culture</Link>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Remote Culture & Philosophy */}
            <section id="culture" className="py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8 text-center lg:text-left"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-heading">
                                Freedom to work,<br />
                                <span className="text-orange-600">Space to live.</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We don't believe in 9-to-5 or micromanagement. We believe in trust, autonomy, and results. Our philosophy is simple: hire great people and get out of their way.
                            </p>

                            <div className="space-y-6 mx-auto lg:mx-0 max-w-lg lg:max-w-none">
                                {[
                                    { title: "Autonomy First", desc: "You own your projects and your schedule." },
                                    { title: "Async Collaboration", desc: "Write it down. Read it later. Deep work matters." },
                                    { title: "Outcome Based", desc: "We care about what you ship, not when you sit." },
                                    { title: "Work-Life Balance", desc: "Burnout is the enemy. Rest is productive." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 justify-start lg:justify-start text-left">
                                        <div className="mt-1 p-2 rounded-full bg-orange-500/10 text-orange-600">
                                            <CheckCircle2 className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg">{item.title}</h3>
                                            <p className="text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-3xl overflow-hidden bg-background border border-border shadow-2xl relative group">
                                <Image
                                    src="/images/team-culture.jpg"
                                    alt="Infeara Team Culture"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute bottom-8 left-8 right-8 p-6 bg-background/80 backdrop-blur-md rounded-2xl border border-orange-100 shadow-lg">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3, 4].map(i => (
                                                <div key={i} className="w-8 h-8 rounded-full bg-orange-100 border-2 border-background flex items-center justify-center text-xs font-medium text-orange-700">
                                                    {String.fromCharCode(64 + i)}
                                                </div>
                                            ))}
                                        </div>
                                        <span className="text-sm font-medium text-muted-foreground">Teammates online</span>
                                    </div>
                                    <p className="text-sm font-medium italic">"The flexibility allows me to be a better parent and a better engineer."</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Work With Us */}
            <section className="py-24 bg-background relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]"></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-2xl mx-auto mb-16"
                    >
                        <Badge variant="outline" className="mb-4 border-orange-200 text-orange-600 bg-orange-500/10 px-4 py-1">Benefits</Badge>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-heading mb-4">Why Work With Us</h2>
                        <p className="text-lg text-muted-foreground">
                            We take care of the details so you can focus on the big picture.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full bg-card border-border hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1 group">
                                    <CardHeader>
                                        <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                                            <benefit.icon className="h-7 w-7 text-orange-600 group-hover:text-white transition-colors" />
                                        </div>
                                        <CardTitle className="text-xl font-bold text-foreground group-hover:text-orange-600 transition-colors">{benefit.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-muted-foreground text-base leading-relaxed">
                                            {benefit.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How We Work */}
            <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center lg:text-left"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-heading mb-6">How We Work</h2>
                            <p className="text-lg text-primary-foreground/80 mb-8 max-w-md">
                                Our workflow is designed for clarity and speed. We use modern tools to stay aligned and move fast.
                            </p>
                            <Button size="lg" className="h-14 px-8 text-lg bg-white text-primary hover:bg-white/90 rounded-full font-bold shadow-xl transition-transform hover:scale-105 mx-auto lg:mx-0" asChild>
                                <Link href="/handbook">Read our Handbook</Link>
                            </Button>
                        </motion.div>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {workflowSteps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
                                >
                                    <h3 className="font-semibold text-lg mb-2 text-white">{step.title}</h3>
                                    <p className="text-sm text-white/70">{step.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Roles */}
            <section id="open-roles" className="py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6"
                    >
                        <div className="text-center md:text-left w-full">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-heading mb-4">Open Roles</h2>
                            <p className="text-muted-foreground text-lg">Find your next challenge.</p>
                        </div>
                    </motion.div>

                    {/* Search and Filters */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-card border border-border rounded-2xl p-6 mb-12 shadow-sm"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search roles..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-9"
                                />
                            </div>
                            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Department" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Departments</SelectItem>
                                    {departments.map(dept => (
                                        <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Location" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Locations</SelectItem>
                                    {locations.map(loc => (
                                        <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Select value={selectedType} onValueChange={setSelectedType}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Types</SelectItem>
                                    {types.map(type => (
                                        <SelectItem key={type} value={type}>{type}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        {(searchQuery || selectedDepartment !== "all" || selectedLocation !== "all" || selectedType !== "all") && (
                            <div className="mt-4 flex justify-end">
                                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-muted-foreground hover:text-foreground">
                                    <X className="mr-2 h-4 w-4" /> Clear Filters
                                </Button>
                            </div>
                        )}
                    </motion.div>

                    <div className="grid gap-4">
                        {paginatedJobs && paginatedJobs.length > 0 ? (
                            paginatedJobs.map((job, index) => (
                                <motion.div
                                    key={job.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Link href={`/careers/${job.slug}`}>
                                        <div className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl border border-border bg-card hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
                                            <div className="space-y-2 mb-4 md:mb-0">
                                                <h3 className="text-xl font-bold group-hover:text-orange-600 transition-colors">
                                                    {job.title}
                                                </h3>
                                                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                                                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">
                                                        <Briefcase className="h-3.5 w-3.5" />
                                                        {job.department}
                                                    </span>
                                                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">
                                                        <MapPin className="h-3.5 w-3.5" />
                                                        {job.location}
                                                    </span>
                                                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">
                                                        <Clock className="h-3.5 w-3.5" />
                                                        {job.type}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-6">
                                                <span className="text-sm font-medium text-muted-foreground hidden lg:block">
                                                    {job.salary_range}
                                                </span>
                                                <div className="flex items-center text-orange-600 font-bold group-hover:translate-x-1 transition-transform">
                                                    View Role <ArrowRight className="ml-2 h-4 w-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))
                        ) : (
                            <div className="text-center py-16 border-2 border-dashed border-border rounded-2xl bg-secondary/30">
                                <p className="text-muted-foreground text-lg">No open positions right now.</p>
                                <p className="text-sm text-muted-foreground mt-2">Check back soon or email us your resume.</p>
                            </div>
                        )}
                    </div>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-4 mt-8">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <span className="text-sm font-medium text-muted-foreground">
                                Page {currentPage} of {totalPages}
                            </span>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages}
                            >
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    )}
                </div>
            </section>

            {/* Hiring Process */}
            <section className="py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-heading mb-4">Simple Hiring Process</h2>
                        <p className="text-muted-foreground">We respect your time. No 10-stage interviews here.</p>
                    </motion.div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {hiringProcess.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="relative group"
                            >
                                <div className="text-6xl font-bold text-orange-500/10 mb-4 select-none group-hover:text-orange-500/20 transition-colors">{step.step}</div>
                                <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                                <p className="text-muted-foreground">{step.desc}</p>
                                {i < hiringProcess.length - 1 && (
                                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -ml-4 -z-10" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Life at Company */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center lg:text-left"
                        >
                            <Badge variant="outline" className="mb-4 border-orange-200 text-orange-600 bg-orange-500/10 px-4 py-1">Culture</Badge>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-heading mb-6">Life at Infeara</h2>
                            <div className="relative h-[280px]">
                                {reviews.map((review, index) => (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-opacity duration-500 ${index === currentReview ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                                    >
                                        <blockquote className="text-xl font-medium leading-relaxed border-t-4 lg:border-t-0 lg:border-l-4 border-orange-500 pt-6 lg:pt-2 lg:pl-6 py-2 mb-8 text-muted-foreground italic min-h-[120px]">
                                            "{review.quote}"
                                        </blockquote>
                                        <div className="flex items-center gap-4 justify-center lg:justify-start">
                                            <Avatar className="h-12 w-12 border-2 border-orange-100">
                                                <AvatarFallback className="bg-orange-50 text-orange-600 font-bold">{review.initials}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <div className="font-bold text-foreground">{review.name}</div>
                                                <div className="text-sm text-muted-foreground">{review.role}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-2 justify-center lg:justify-start mt-4">
                                {reviews.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentReview(index)}
                                        className={`h-2 rounded-full transition-all duration-300 ${index === currentReview ? "w-8 bg-orange-500" : "w-2 bg-orange-200 hover:bg-orange-300"}`}
                                        aria-label={`Go to review ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </motion.div>
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="rounded-2xl overflow-hidden bg-secondary aspect-[4/3] shadow-lg hover:scale-105 transition-transform duration-500 relative group"
                            >
                                <Image
                                    src="/images/lifestyle-1.png"
                                    alt="Home Office Setup"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <span className="text-white text-sm font-medium">Remote Setup</span>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="rounded-2xl overflow-hidden bg-secondary aspect-[4/3] translate-y-8 shadow-lg hover:scale-105 transition-transform duration-500 relative group"
                            >
                                <Image
                                    src="/images/lifestyle-2.png"
                                    alt="Cafe Work"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <span className="text-white text-sm font-medium">Work from Anywhere</span>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="rounded-2xl overflow-hidden bg-secondary aspect-[4/3] shadow-lg hover:scale-105 transition-transform duration-500 relative group"
                            >
                                <Image
                                    src="/images/lifestyle-3.png"
                                    alt="Team Call"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <span className="text-white text-sm font-medium">Virtual Collaboration</span>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="rounded-2xl overflow-hidden bg-secondary aspect-[4/3] translate-y-8 shadow-lg hover:scale-105 transition-transform duration-500 relative group flex items-center justify-center bg-orange-500/10 border border-orange-200"
                            >
                                <div className="text-center p-4">
                                    <p className="text-orange-600 font-bold text-xl mb-1">Join Us</p>
                                    <p className="text-muted-foreground text-sm">Be part of the story</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
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
                    <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">Ready to do your best work?</h2>
                    <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
                        Check out our open roles or just say hi. We're always looking for talented people.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="h-16 px-10 text-lg bg-white text-primary hover:bg-white/90 rounded-full font-bold shadow-2xl transition-transform hover:scale-105" asChild>
                            <Link href="#open-roles">View Open Roles</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-16 px-10 text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-full font-bold transition-transform hover:scale-105 bg-transparent" asChild>
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </div>
                </div>
            </motion.section>
        </div >
    );
}
