"use client";

import Image from "next/image";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Target, Lightbulb, MapPin, Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const leadershipTeam = [
    {
        name: "Vignesh",
        role: "Founder",
        bio: "Visionary leader driving the company's strategic direction and innovation in IT infrastructure.",
        initials: "V",
        image: "https://media.licdn.com/dms/image/v2/D5603AQG5nxBQ2yPMyQ/profile-displayphoto-scale_100_100/B56Zo2cxyPHYAc-/0/1761850106871?e=1767830400&v=beta&t=92YdYK2ujUXGv0Pa4W-Uq1lQoAF9isfOC43nq9wn4qk"
    },
    {
        name: "Saravanan",
        role: "Co-Founder",
        bio: "Focused on operational excellence and building strong client relationships across industries.",
        initials: "S",
        image: "https://media.licdn.com/dms/image/v2/D5603AQH7uZA10T8MNg/profile-displayphoto-scale_200_200/B56Zs6vw8zIAAY-/0/1766217160283?e=1767830400&v=beta&t=uBDlXF3VKTXHlYypX6wGEZY2mVGVzfztYw_uFz0PikY"
    },
    {
        name: "Praveen Kumar",
        role: "Technical Head",
        bio: "Leading the technical team to deliver cutting-edge, secure, and scalable IT solutions.",
        initials: "PK",
        image: "https://media.licdn.com/dms/image/v2/D5603AQH1Zb9LmFNUGg/profile-displayphoto-shrink_200_200/B56Zs6kCKsHsAY-/0/1766214084196?e=1767830400&v=beta&t=j4RPbZkRtw59D4RzYRQ4tkfD-iKW3aMmz8h_djvHOp4"
    }
];

export default function AboutContent() {
    return (
        <>
            {/* 1. HERO SECTION */}
            <section className="relative w-full py-32 flex items-center justify-center overflow-hidden bg-background">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/chennai-skyline.png"
                        alt="Chennai Skyline"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
                </div>

                <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Badge variant="outline" className="text-orange-600 border-orange-200 mb-6 bg-orange-500/10 px-4 py-1.5 text-sm">
                            Since 2024
                        </Badge>
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-heading mb-6 text-foreground">
                            Building the Future of IT <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
                                in Chennai & Beyond
                            </span>
                        </h1>
                        <p className="mx-auto max-w-[800px] text-lg text-muted-foreground md:text-xl/relaxed leading-relaxed">
                            Founded in 2024, Infeara Technologies is Chennai's fastest-growing IT solutions provider. We bridge the gap between complex technology and business growth with locally-rooted expertise and global standards.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. STATS SECTION */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="py-12 border-y border-border bg-secondary/30"
            >
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { label: "Years Experience", value: "2+" },
                            { label: "Projects Delivered", value: "50+" },
                            { label: "Client Satisfaction", value: "100%" },
                            { label: "Active Clients", value: "25+" },
                        ].map((stat, index) => (
                            <div key={index} className="space-y-2">
                                <div className="text-4xl md:text-5xl font-bold text-orange-600">{stat.value}</div>
                                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* 3. MISSION & VISION */}
            <SectionWrapper className="bg-background">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid md:grid-cols-2 gap-12 items-stretch"
                >
                    <Card className="bg-secondary/20 border-border relative overflow-hidden group hover:border-orange-500/50 transition-colors">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Target className="w-32 h-32 text-orange-600" />
                        </div>
                        <CardHeader>
                            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4 text-orange-600">
                                <Target className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-2xl font-bold">Our Mission</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                To empower businesses in South India with resilient, secure, and scalable IT infrastructure. We aim to eliminate technology downtime so our clients can focus entirely on their core business growth.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-secondary/20 border-border relative overflow-hidden group hover:border-orange-500/50 transition-colors">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Lightbulb className="w-32 h-32 text-orange-600" />
                        </div>
                        <CardHeader>
                            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4 text-orange-600">
                                <Lightbulb className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-2xl font-bold">Our Vision</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                To become Chennai's most trusted IT partner, recognized for bringing enterprise-grade security and cloud solutions to the SMB and Mid-market sectors across Tamil Nadu.
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
            </SectionWrapper>

            {/* 4. WHY CHOOSE US (Local SEO) */}
            <SectionWrapper className="bg-secondary/30 rounded-3xl my-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-heading text-foreground mb-4">
                        Why Chennai Businesses Trust Us
                    </h2>
                    <p className="text-muted-foreground max-w-[600px] mx-auto">
                        Local presence, rapid response, and global technology standards.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    <FeatureCard
                        icon={MapPin}
                        title="Chennai Roots, Global Reach"
                        description="Founded in Chennai, we operate as a fully remote team, allowing us to attract top talent from across the region."
                    />
                    <FeatureCard
                        icon={Clock}
                        title="24/7 Virtual Support"
                        description="Our distributed team ensures round-the-clock monitoring and instant response to critical issues."
                    />
                    <FeatureCard
                        icon={ShieldCheck}
                        title="Enterprise Security"
                        description="We bring Fortune 500 level cybersecurity standards to local businesses at competitive rates."
                    />
                </motion.div>
            </SectionWrapper>

            {/* 5. OUR STORY */}
            <SectionWrapper>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid lg:grid-cols-2 gap-12 items-center"
                >
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/office-culture.png"
                            alt="Infeara Office"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold font-heading">The Infeara Story</h2>
                        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                <strong className="text-foreground">Established in 2024</strong>, Infeara Technologies emerged from a simple observation: businesses in Chennai were rapidly digitizing but lacked reliable partners to secure and manage their new infrastructure.
                            </p>
                            <p>
                                What started as a small team of passionate network engineers has quickly grown into a full-service IT solutions provider. In just over two years (including our pre-incorporation consulting phase), we have helped over 50 businesses modernize their tech stack.
                            </p>
                            <p>
                                Today, we stand as a beacon of reliability, helping companies navigate the complexities of Cloud, Cyber Security, and Managed IT with confidence.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </SectionWrapper>

            {/* 6. LEADERSHIP (Simplified) */}
            <SectionWrapper className="bg-background">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-heading text-foreground mb-4">
                        Leadership Team
                    </h2>
                    <p className="text-muted-foreground max-w-[600px] mx-auto">
                        Guided by industry veterans committed to your success.
                    </p>
                </div>
                {/* Scrolling Marquee Container */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative w-full overflow-hidden py-4"
                >
                    <div className="flex w-max animate-scroll gap-8 hover:[animation-play-state:paused]">
                        {[...leadershipTeam, ...leadershipTeam, ...leadershipTeam, ...leadershipTeam].map((leader, index) => (
                            <div key={index} className="w-[300px] flex-shrink-0">
                                <LeadershipCard
                                    name={leader.name}
                                    role={leader.role}
                                    bio={leader.bio}
                                    initials={leader.initials}
                                    image={leader.image}
                                />
                            </div>
                        ))}
                    </div>
                    {/* Gradient Masks for smooth fade effect at edges */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent"></div>
                </motion.div>
            </SectionWrapper>
        </>
    );
}

function FeatureCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <Card className="bg-background border-border hover:border-orange-500/50 transition-all hover:shadow-lg">
            <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 text-orange-600">
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

function LeadershipCard({ name, role, bio, initials, image }: { name: string, role: string, bio: string, initials: string, image?: string }) {
    return (
        <Card className="text-center border-border bg-secondary/10 hover:bg-secondary/30 transition-colors">
            <CardHeader className="flex flex-col items-center pt-8">
                <Avatar className="w-24 h-24 mb-4 border-4 border-background shadow-md">
                    <AvatarImage src={image || `/placeholder-user.jpg`} alt={name} />
                    <AvatarFallback className="bg-orange-100 text-orange-600 text-xl font-bold">{initials}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl font-bold text-foreground">{name}</CardTitle>
                <p className="text-sm font-medium text-orange-600">{role}</p>
            </CardHeader>
            <CardContent className="pb-8">
                <p className="text-muted-foreground text-sm">{bio}</p>
            </CardContent>
        </Card>
    );
}
