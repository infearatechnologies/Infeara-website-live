"use client";

import { useState } from "react";
import Link from "next/link";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Building2, Search } from "lucide-react";

// Matches supabase_schema.sql 'case_studies' table
export interface CaseStudy {
    id: string;
    title: string;
    slug: string; // DB schema says this is unique and exists
    client: string | null;
    challenge: string | null; // Flat text in DB
    solution: string | null; // Flat text in DB
    results: string | any; // Can be string or JSON object/array depending on DB data
    featured_image: string | null;
    published?: boolean;
    created_at?: string;

    // UI specific Optional mappings
    industry?: string;
    businessSize?: string;
}

interface CaseStudyListProps {
    initialCaseStudies: CaseStudy[];
}

export function CaseStudyList({ initialCaseStudies }: CaseStudyListProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeIndustry, setActiveIndustry] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Default industries + unique ones found in DB (if any)
    const defaultIndustries = ["Banking & Finance", "Manufacturing", "Healthcare", "Education"];
    const dbIndustries = Array.from(new Set(initialCaseStudies.map(p => p.industry).filter((i): i is string => !!i)));
    const industries = ["All", ...Array.from(new Set([...defaultIndustries, ...dbIndustries]))];

    const filteredProjects = initialCaseStudies.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (project.client && project.client.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (project.challenge && project.challenge.toLowerCase().includes(searchQuery.toLowerCase()));

        // If exact industry is missing in DB, we treat it as 'All' or just skip filtering by industry strictly
        const matchesIndustry = activeIndustry === "All" || project.industry === activeIndustry;
        return matchesSearch && matchesIndustry;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <section className="w-full py-24 bg-transparent text-foreground">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <Badge variant="outline" className="text-orange-600 border-orange-200 bg-orange-500/10 mb-6">
                        Success Stories
                    </Badge>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-heading mb-6">
                        Case Studies
                    </h1>
                    <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl/relaxed">
                        Real-world outcomes from our enterprise engagements.
                    </p>
                </div>
            </section>

            <div className="bg-secondary/60 backdrop-blur-sm rounded-3xl mb-20 py-16 md:py-24 w-full">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Search & Filters */}
                    <div className="flex flex-col gap-8 mb-12 items-center justify-center">
                        <div className="w-full max-w-md relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Search case studies..."
                                className="pl-10 h-12 rounded-full bg-white/80 backdrop-blur-sm border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                                value={searchQuery}
                                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                            />
                        </div>

                        <div className="flex flex-wrap justify-center gap-2">
                            {industries.map((industry) => (
                                <Button
                                    key={industry}
                                    variant={activeIndustry === industry ? "default" : "outline"}
                                    onClick={() => { setActiveIndustry(industry); setCurrentPage(1); }}
                                    className={`rounded-full ${activeIndustry === industry ? "bg-orange-600 hover:bg-orange-700" : "hover:bg-orange-50 text-muted-foreground"}`}
                                >
                                    {industry}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {currentProjects.map((project) => (
                            <Card key={project.id} className="flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-300 border-border bg-card">
                                <div className="aspect-video bg-secondary relative overflow-hidden">
                                    {project.featured_image ? (
                                        <img src={project.featured_image} alt={project.title} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-bold bg-secondary/50">
                                            Case Study
                                        </div>
                                    )}
                                    <div className="absolute top-4 left-4">
                                        <Badge className="bg-white/90 text-foreground hover:bg-white">
                                            {project.industry || "Enterprise"}
                                        </Badge>
                                    </div>
                                </div>
                                <CardHeader>
                                    {project.client && (
                                        <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
                                            <Building2 className="h-3 w-3" /> {project.client}
                                        </div>
                                    )}
                                    <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-orange-600 transition-colors">
                                        {project.title}
                                    </CardTitle>
                                    {project.results && (
                                        <CardDescription className="font-medium text-orange-600 mt-2 line-clamp-2">
                                            Result: {(() => {
                                                if (typeof project.results === 'string') {
                                                    return project.results;
                                                }
                                                // Handle case where results is an array or object (legacy/mismatched data)
                                                try {
                                                    const res = project.results as any;
                                                    if (Array.isArray(res) && res.length > 0) {
                                                        return res[0]?.value || res[0]?.label || JSON.stringify(res[0]);
                                                    }
                                                    if (typeof res === 'object' && res !== null) {
                                                        return res.value || res.label || JSON.stringify(res);
                                                    }
                                                    return String(res);
                                                } catch (e) {
                                                    return "See details";
                                                }
                                            })()}
                                        </CardDescription>
                                    )}
                                </CardHeader>
                                <CardContent className="flex-1">
                                    {project.challenge && (
                                        <p className="text-muted-foreground text-sm line-clamp-3">
                                            {project.challenge}
                                        </p>
                                    )}
                                </CardContent>
                                <CardFooter className="border-t border-border pt-4">
                                    <Button variant="ghost" className="w-full justify-between group-hover:text-orange-600" asChild>
                                        <Link href={`/resources/case-studies/${project.slug}`}>
                                            View Case Study <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-2 mt-12">
                            <Button variant="outline" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</Button>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                                <Button key={number} variant={currentPage === number ? "default" : "outline"} onClick={() => handlePageChange(number)} className={currentPage === number ? "bg-orange-600 hover:bg-orange-700" : ""}>{number}</Button>
                            ))}
                            <Button variant="outline" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</Button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

