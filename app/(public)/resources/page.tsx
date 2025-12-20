import Link from "next/link";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, CheckCircle2, Download, ArrowRight } from "lucide-react";

export const metadata = {
    title: "Resources | Infeara",
    description: "Explore our collection of insights, case studies, and downloadable resources.",
};

export default function ResourcesPage() {
    return (
        <>
            <section className="w-full py-24 bg-transparent text-foreground">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <Badge variant="outline" className="text-orange-600 border-orange-200 bg-orange-500/10 mb-6">
                        Knowledge Hub
                    </Badge>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-heading mb-6">
                        Resources & Insights
                    </h1>
                    <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl/relaxed">
                        Stay ahead with our latest articles, success stories, and practical tools.
                    </p>
                </div>
            </section>

            <SectionWrapper className="bg-secondary/60 backdrop-blur-sm rounded-3xl mb-20">
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Blog Card */}
                    <Card className="flex flex-col hover:shadow-xl transition-all duration-300 border-border bg-card">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4 text-orange-600">
                                <FileText className="h-6 w-6" />
                            </div>
                            <CardTitle className="text-2xl font-bold">Blog</CardTitle>
                            <CardDescription>
                                Expert insights on IT operations, security, and infrastructure trends.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                                <li>Industry News & Trends</li>
                                <li>Technical Deep Dives</li>
                                <li>Best Practices Guides</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full group" asChild>
                                <Link href="/resources/blog">
                                    Read Articles <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Case Studies Card */}
                    <Card className="flex flex-col hover:shadow-xl transition-all duration-300 border-border bg-card">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 text-blue-600">
                                <CheckCircle2 className="h-6 w-6" />
                            </div>
                            <CardTitle className="text-2xl font-bold">Case Studies</CardTitle>
                            <CardDescription>
                                Real-world examples of how we've helped businesses transform.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                                <li>Success Stories</li>
                                <li>Implementation Details</li>
                                <li>Measurable Results</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full group" variant="outline" asChild>
                                <Link href="/resources/case-studies">
                                    View Stories <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Downloads Card */}
                    <Card className="flex flex-col hover:shadow-xl transition-all duration-300 border-border bg-card">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4 text-green-600">
                                <Download className="h-6 w-6" />
                            </div>
                            <CardTitle className="text-2xl font-bold">Downloads</CardTitle>
                            <CardDescription>
                                Free templates, checklists, and guides for your team.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                                <li>PDF Guides</li>
                                <li>Excel Templates</li>
                                <li>Security Checklists</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full group" variant="outline" asChild>
                                <Link href="/resources/downloads">
                                    Browse Downloads <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </SectionWrapper>
        </>
    );
}
