"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Globe, Laptop, Wifi } from "lucide-react";
import Link from "next/link";

export function CareersHero() {
    return (
        <section className="relative w-full py-24 md:py-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-orange-500/10 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-500/5 rounded-full blur-3xl opacity-30" />
            </div>

            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col items-start text-left space-y-8 relative z-10">
                        <Badge variant="outline" className="px-4 py-1.5 text-sm border-orange-200 text-orange-700 bg-orange-50 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2 mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                            </span>
                            We are hiring remotely
                        </Badge>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground font-heading leading-tight">
                            Build Your Career—
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                                From Anywhere.
                            </span>
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                            Join a distributed team building the future of IT infrastructure.
                            Work where you're happiest, with the autonomy to do your best work.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full pt-4">
                            <Button size="lg" className="h-12 px-8 text-base bg-orange-600 hover:bg-orange-700 text-white rounded-full shadow-lg shadow-orange-500/20 transition-all hover:scale-105" asChild>
                                <Link href="#open-roles">
                                    View Open Roles <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Link
                                href="/handbook"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-12 px-8 text-base rounded-full border-2 hover:bg-secondary/50"
                            >
                                Read Our Handbook
                            </Link>
                        </div>
                    </div>

                    {/* Right Side: Image & Connectivity Visual */}
                    <div className="relative">
                        {/* Main Hero Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 aspect-[4/3] group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                            <img
                                src="/images/careers/remote-team.png"
                                alt="Remote Team Collaboration"
                                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* New Connectivity Visual Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="relative h-12 w-12 flex items-center justify-center">
                                            <div className="absolute inset-0 bg-orange-500/20 rounded-full animate-ping" />
                                            <div className="relative h-10 w-10 bg-orange-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20">
                                                <Globe className="h-5 w-5 text-white" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-white font-bold text-sm">Global Hub</div>
                                            <div className="text-orange-200 text-xs">Active Connections</div>
                                        </div>
                                    </div>

                                    {/* Animated Network Nodes */}
                                    <div className="flex items-center gap-1">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <div key={i} className="h-8 w-1 bg-gradient-to-t from-orange-500/50 to-transparent rounded-full overflow-hidden">
                                                <div className="h-full w-full bg-orange-400 animate-pulse" style={{ animationDelay: `${i * 0.2}s`, opacity: 0.5 + (i * 0.1) }} />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="text-right">
                                        <div className="text-white font-bold text-lg">12+</div>
                                        <div className="text-orange-200 text-xs">Cities</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-6 -right-6 bg-white dark:bg-card p-4 rounded-xl shadow-xl border border-border/50 animate-bounce duration-[3000ms]">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                                    <Laptop className="h-5 w-5 text-green-600" />
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground">Status</div>
                                    <div className="text-sm font-bold text-green-600">Online & Syncing</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
