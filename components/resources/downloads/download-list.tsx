"use client";

import Link from "next/link";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, ArrowRight, Lock, Unlock, Search, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export interface DownloadResource {
    id: string;
    title: string;
    slug: string;
    description: string;
    file_url: string;
    gated: boolean;
    cover_image?: string;
    category: string;
    file_type?: string;
    file_size?: string;
    value_props?: string[]; // Assuming this might be stored as a JSON array or text array in DB
}

interface DownloadListProps {
    initialDownloads: DownloadResource[];
}

export function DownloadList({ initialDownloads }: DownloadListProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Extract unique categories and merge with defaults
    const defaultCategories = ["Cyber Security", "IT Infrastructure", "Cloud Infrastructures", "Artificial Intelligence", "Automation", "Templates", "Checklists", "Guides"];
    const dynamicCategories = Array.from(new Set(initialDownloads.map(p => p.category).filter(Boolean)));
    const categories = ["All", ...Array.from(new Set([...defaultCategories, ...dynamicCategories]))];

    const filteredDownloads = initialDownloads.filter(resource => {
        const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (resource.description && resource.description.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesCategory = activeCategory === "All" || resource.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentDownloads = filteredDownloads.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredDownloads.length / itemsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <section className="w-full py-24 bg-transparent text-foreground">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <Badge variant="outline" className="text-orange-600 border-orange-200 bg-orange-500/10 mb-6">
                        Free Resources
                    </Badge>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-heading mb-6">
                        Templates, Checklists & Guides
                    </h1>
                    <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl/relaxed">
                        Practical tools to help you manage your IT infrastructure and security.
                    </p>
                </div>
            </section>

            <div className="bg-secondary/60 backdrop-blur-sm rounded-3xl mb-20 py-16 md:py-24 w-full">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Search & Filters */}
                    <div className="flex flex-col gap-8 mb-12 items-center justify-center">
                        {/* Search */}
                        <div className="w-full max-w-md relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Search downloads..."
                                className="pl-10 h-12 rounded-full bg-white/80 backdrop-blur-sm border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                                value={searchQuery}
                                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                            />
                        </div>

                        {/* Category Filters */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {categories.map((category) => (
                                <Button
                                    key={category}
                                    variant={activeCategory === category ? "default" : "outline"}
                                    onClick={() => { setActiveCategory(category); setCurrentPage(1); }}
                                    className={`rounded-full ${activeCategory === category ? "bg-orange-600 hover:bg-orange-700" : "hover:bg-orange-50 text-muted-foreground"}`}
                                >
                                    {category}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {currentDownloads.map((resource) => (
                            <Card key={resource.id} className="flex flex-col border-border bg-card hover:shadow-lg transition-shadow overflow-hidden">
                                <div className="aspect-[2/1] bg-secondary relative overflow-hidden">
                                    {resource.cover_image && (
                                        <img src={resource.cover_image} alt={resource.title} className="w-full h-full object-cover" />
                                    )}
                                    {(resource.file_type || resource.file_size) && (
                                        <div className="absolute top-2 right-2">
                                            <Badge variant="secondary" className="bg-white/90 text-foreground backdrop-blur-sm">
                                                {resource.file_type} {resource.file_size && `• ${resource.file_size}`}
                                            </Badge>
                                        </div>
                                    )}
                                </div>

                                <CardHeader>
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="p-2 rounded-lg bg-orange-100 text-orange-600">
                                            <FileText className="h-5 w-5" />
                                        </div>
                                        <Badge variant="secondary" className="bg-secondary text-foreground gap-1">
                                            {resource.gated ? <Lock className="h-3 w-3" /> : <Unlock className="h-3 w-3" />}
                                            {resource.gated ? "Gated" : "Public"}
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-lg font-bold line-clamp-2">{resource.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1 space-y-4">
                                    <p className="text-muted-foreground text-sm line-clamp-3">
                                        {resource.description}
                                    </p>
                                    {resource.value_props && resource.value_props.length > 0 && (
                                        <div className="space-y-1">
                                            {resource.value_props.slice(0, 2).map((prop, i) => (
                                                <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                                                    <CheckCircle2 className="h-3 w-3 text-orange-500 mt-0.5" />
                                                    <span>{prop}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full group" variant="outline" asChild>
                                        {resource.gated ? (
                                            <Link href={`/resources/downloads/${resource.slug}`}>
                                                Request Access <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        ) : (
                                            <a href={resource.file_url} target="_blank" rel="noopener noreferrer">
                                                Download Now <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                                            </a>
                                        )}
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-2 mt-12">
                            <Button
                                variant="outline"
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </Button>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                                <Button
                                    key={number}
                                    variant={currentPage === number ? "default" : "outline"}
                                    onClick={() => handlePageChange(number)}
                                    className={currentPage === number ? "bg-orange-600 hover:bg-orange-700" : ""}
                                >
                                    {number}
                                </Button>
                            ))}
                            <Button
                                variant="outline"
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
