import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { CheckCircle2, MapPin, Phone, Clock, Shield } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "IT Support Services in Chennai | Infeara Technologies",
    description: "Leading IT Support, AMC, and Infrastructure services in Chennai. 2-hour onsite response for OMR, Guindy, and Ambattur. Get a free audit today.",
};

export default function ChennaiLocationPage() {
    return (
        <>
            {/* Local Hero */}
            <section className="w-full py-20 bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/chennai-skyline-placeholder.jpg')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>

                <div className="container relative z-10 px-4 md:px-6">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-sm font-medium text-teal-400 mb-4">
                            <MapPin className="mr-1 h-3 w-3" /> Serving Chennai & Kanchipuram
                        </div>
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-heading mb-6">
                            Premier IT Support & <br />
                            Infrastructure in <span className="text-teal-500">Chennai</span>
                        </h1>
                        <p className="text-slate-400 md:text-xl/relaxed mb-8">
                            From OMR IT Parks to Guindy Industrial Estates, we provide rapid, enterprise-grade IT solutions tailored for Chennai's businesses.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-teal-600 hover:bg-teal-700" asChild>
                                <Link href="/contact">Get Local Support</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="text-slate-300 border-slate-700 hover:bg-slate-800" asChild>
                                <Link href="#coverage">View Coverage Area</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Locally */}
            <SectionWrapper>
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-heading text-slate-900 mb-6">
                            Why Chennai Businesses Trust Infeara
                        </h2>
                        <div className="space-y-6">
                            <Feature
                                icon={Clock}
                                title="2-Hour Response Time"
                                description="Our field engineers are stationed in OMR, Velachery, and Ambattur to ensure rapid onsite support."
                            />
                            <Feature
                                icon={Shield}
                                title="Flood-Resilient Infrastructure"
                                description="We design server rooms and data centers with Chennai's monsoon challenges in mind, ensuring business continuity."
                            />
                            <Feature
                                icon={Phone}
                                title="Local Tamil & English Support"
                                description="Our helpdesk speaks your language, ensuring clear communication and faster resolution."
                            />
                        </div>
                    </div>
                    <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200">
                        <h3 className="font-bold text-xl mb-4">Service Areas</h3>
                        <ul className="grid grid-cols-2 gap-4">
                            {["OMR / Thoraipakkam", "Guindy / Ekkaduthangal", "Ambattur Industrial Estate", "Velachery", "T. Nagar", "Siruseri SIPCOT", "Mahindra World City", "Sriperumbudur"].map((area) => (
                                <li key={area} className="flex items-center space-x-2 text-slate-600">
                                    <CheckCircle2 className="h-4 w-4 text-teal-500" />
                                    <span>{area}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </SectionWrapper>

            {/* Local Testimonials */}
            <section className="w-full py-20 bg-teal-50">
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 font-heading">What Our Chennai Clients Say</h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        <TestimonialCard
                            quote="Infeara's team helped us migrate our entire office in OMR over a weekend. Zero downtime on Monday."
                            author="Ramesh K."
                            role="CTO, FinTech Startup, Perungudi"
                        />
                        <TestimonialCard
                            quote="Their AMC service is excellent. The engineers reach our factory in Ambattur very quickly whenever we have network issues."
                            author="Senthil Kumar"
                            role="Plant Manager, AutoComp Pvt Ltd"
                        />
                        <TestimonialCard
                            quote="Best VAPT providers in Chennai. They helped us get our ISO certification smoothly."
                            author="Anita R."
                            role="Director, HealthTech Solutions, T. Nagar"
                        />
                    </div>
                </div>
            </section>

            {/* Map Embed Section */}
            <section id="coverage" className="w-full h-[400px] bg-slate-200 relative">
                <div className="absolute inset-0 flex items-center justify-center bg-slate-300">
                    <p className="text-slate-500 font-medium flex items-center">
                        <MapPin className="mr-2 h-5 w-5" /> Interactive Map of Chennai Coverage Zones (Placeholder)
                    </p>
                </div>
            </section>
        </>
    );
}

function Feature({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <div className="flex items-start space-x-4">
            <div className="p-2 bg-teal-100 rounded-lg text-teal-600 mt-1">
                <Icon className="h-6 w-6" />
            </div>
            <div>
                <h3 className="font-bold text-lg text-slate-900">{title}</h3>
                <p className="text-slate-500">{description}</p>
            </div>
        </div>
    );
}

function TestimonialCard({ quote, author, role }: { quote: string, author: string, role: string }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <p className="text-slate-600 italic mb-4">"{quote}"</p>
            <div>
                <p className="font-bold text-slate-900">{author}</p>
                <p className="text-xs text-slate-500">{role}</p>
            </div>
        </div>
    );
}
