"use client";

import { useState } from "react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Clock, Briefcase, Search, ArrowRight } from "lucide-react";

// Static data fallback
const jobs = [
    {
        id: 1,
        title: "Senior Network Engineer",
        department: "Engineering",
        location: "Chennai (OMR)",
        type: "Full-time",
        experience: "Senior",
        description: "We are looking for a CCIE certified engineer to lead our data center projects.",
    },
    {
        id: 2,
        title: "Cyber Security Analyst",
        department: "Security",
        location: "Chennai (Guindy)",
        type: "Full-time",
        experience: "Mid-Level",
        description: "Monitor and respond to security incidents in our 24/7 SOC.",
    },
    {
        id: 3,
        title: "Enterprise Sales Manager",
        department: "Sales",
        location: "Hybrid / Chennai",
        type: "Full-time",
        experience: "Senior",
        description: "Drive growth by acquiring new enterprise clients in the manufacturing sector.",
    },
    {
        id: 4,
        title: "IT Support Specialist",
        department: "Operations",
        location: "On-site (Various)",
        type: "Full-time",
        experience: "Entry-Level",
        description: "Provide L2 support for our managed service clients.",
    },
    {
        id: 5,
        title: "Frontend Developer",
        department: "Engineering",
        location: "Remote",
        type: "Contract",
        experience: "Mid-Level",
        description: "Build modern, responsive web applications using React and Next.js.",
    },
    {
        id: 6,
        title: "DevOps Engineer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
        experience: "Senior",
        description: "Automate our infrastructure and deployment pipelines.",
    }
];

export function JobList() {
    const [searchQuery, setSearchQuery] = useState("");
    const [departmentFilter, setDepartmentFilter] = useState("All");
    const [locationFilter, setLocationFilter] = useState("All");

    const departments = ["All", ...Array.from(new Set(jobs.map(j => j.department)))];
    const locations = ["All", ...Array.from(new Set(jobs.map(j => j.location)))];

    const filteredJobs = jobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDept = departmentFilter === "All" || job.department === departmentFilter;
        const matchesLoc = locationFilter === "All" || job.location === locationFilter;

        return matchesSearch && matchesDept && matchesLoc;
    });

    return (
        <SectionWrapper id="open-roles" className="bg-background">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-12">
                    <Badge variant="outline" className="text-orange-600 border-orange-200 bg-orange-500/10 mb-4">
                        We're Hiring
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Open Roles
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Ready to make an impact? Browse our open positions and find the perfect fit for your skills.
                    </p>
                </div>

                {/* Filters */}
                <div className="bg-secondary/30 p-6 rounded-2xl mb-12 backdrop-blur-sm border border-border/50">
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search roles..."
                                className="pl-10 bg-background"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <select
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            value={departmentFilter}
                            onChange={(e) => setDepartmentFilter(e.target.value)}
                        >
                            {departments.map(dept => (
                                <option key={dept} value={dept}>{dept === "All" ? "All Departments" : dept}</option>
                            ))}
                        </select>
                        <select
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            value={locationFilter}
                            onChange={(e) => setLocationFilter(e.target.value)}
                        >
                            {locations.map(loc => (
                                <option key={loc} value={loc}>{loc === "All" ? "All Locations" : loc}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Job Cards */}
                <div className="space-y-4">
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map((job) => (
                            <Card key={job.id} className="group hover:border-orange-500/50 transition-all duration-300 hover:shadow-md">
                                <CardContent className="p-6">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-3 flex-wrap">
                                                <h3 className="text-xl font-bold group-hover:text-orange-600 transition-colors">
                                                    {job.title}
                                                </h3>
                                                <Badge variant="secondary" className="text-xs font-normal">
                                                    {job.experience}
                                                </Badge>
                                            </div>
                                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                                <span className="flex items-center gap-1">
                                                    <Briefcase className="h-3.5 w-3.5" /> {job.department}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <MapPin className="h-3.5 w-3.5" /> {job.location}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="h-3.5 w-3.5" /> {job.type}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 shrink-0">
                                            <Button className="w-full md:w-auto bg-orange-600 hover:bg-orange-700 text-white group-hover:translate-x-1 transition-all duration-300">
                                                View Role <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <div className="text-center py-12 text-muted-foreground">
                            <p>No roles found matching your criteria.</p>
                            <Button variant="link" onClick={() => { setSearchQuery(""); setDepartmentFilter("All"); setLocationFilter("All"); }}>
                                Clear filters
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </SectionWrapper>
    );
}
