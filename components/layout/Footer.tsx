"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-50 text-slate-600 border-t border-slate-200">
            <div className="container mx-auto px-4 py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="block relative h-10 w-32">
                            <Image
                                src="/infeara-logo-final.png"
                                alt="Infeara"
                                fill
                                className="object-contain object-left"
                            />
                        </Link>
                        <p className="text-sm leading-relaxed">
                            Empowering enterprises with next-generation IT infrastructure, security, and digital transformation solutions.
                        </p>
                        <div className="flex space-x-4">
                            <SocialLink href="https://www.linkedin.com/company/infearasecuretechnologies/?viewAsMember=true" icon={Linkedin} label="LinkedIn" />
                            <SocialLink href="https://x.com/Infearasecure?t=3nbMh8IV1OQtqLmEzy-wKw&s=09" icon={Twitter} label="Twitter" />
                            <SocialLink href="https://www.facebook.com/profile.php?id=61571223952541#" icon={Facebook} label="Facebook" />
                            <SocialLink href="https://www.instagram.com/infeara_technologies/" icon={Instagram} label="Instagram" />
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-6">Services</h3>
                        <ul className="space-y-4 text-sm">
                            <FooterLink href="/services/audit-compliance/vapt">VAPT Services</FooterLink>
                            <FooterLink href="/services/infrastructure/managed-it">Managed IT Services</FooterLink>
                            <FooterLink href="/services/infrastructure/cloud-solutions">Cloud Solutions</FooterLink>
                            <FooterLink href="/services/ai-automation/workflow-automation">AI & Automation</FooterLink>
                            <FooterLink href="/services/turnkey/offshore-development">Offshore Development</FooterLink>
                            <FooterLink href="/services/infrastructure/network-infrastructure">Network Infrastructure</FooterLink>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-6">Legal</h3>
                        <ul className="space-y-4 text-sm">
                            <FooterLink href="/legal/privacy-policy">Privacy Policy</FooterLink>
                            <FooterLink href="/legal/terms-of-service">Terms of Service</FooterLink>
                            <FooterLink href="/legal/cookies">Cookie Policy</FooterLink>
                            <FooterLink href="/legal/disclaimer">Disclaimer</FooterLink>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-6">Contact Us</h3>
                        <ul className="space-y-6 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                                <span>
                                    Chennai, Tamil Nadu<br />
                                    (Remote-First Operations)
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-orange-600 shrink-0" />
                                <span>+91 6381173289</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-orange-600 shrink-0" />
                                <Link href="/contact" className="hover:text-orange-600 transition-colors">
                                    Contact Support
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>



                {/* Bottom Bar */}
                <div className="mt-8 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
                    © {new Date().getFullYear()} Infeara Technologies. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon: Icon, label }: { href: string, icon: any, label: string }) {
    return (
        <Link
            href={href}
            className="h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 hover:text-white transition-all duration-300 shadow-sm"
            aria-label={label}
        >
            <Icon className="h-5 w-5" />
        </Link>
    );
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <li>
            <Link href={href} className="hover:text-orange-600 transition-colors flex items-center group">
                <span className="w-0 group-hover:w-2 h-px bg-orange-600 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                {children}
            </Link>
        </li>
    );
}
