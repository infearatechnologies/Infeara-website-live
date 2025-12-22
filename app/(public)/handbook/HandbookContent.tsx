"use client";

import HandbookLayout from "@/components/handbook/HandbookLayout";
import Link from "next/link";
import { AlertTriangle, ShieldCheck, Heart, BookOpen, Scale } from "lucide-react";
import { motion } from "framer-motion";

export default function HandbookContent() {
    const tocItems = [
        { id: "welcome", label: "1. Welcome & Culture" },
        { id: "remote-philosophy", label: "2. Remote-First Philosophy" },
        { id: "communication", label: "3. Communication & Tools" },
        { id: "work-environment", label: "4. Work Environment" },
        { id: "employment-basics", label: "5. Employment Basics" },
        { id: "leaves-holidays", label: "6. Leaves & Holidays" },
        { id: "benefits", label: "7. Compensation & Benefits" },
        { id: "posh", label: "8. POSH & Code of Conduct" },
        { id: "performance", label: "9. Performance & Growth" },
        { id: "security", label: "10. Security & Privacy" },
        { id: "offboarding", label: "11. Offboarding" },
    ];

    return (
        <HandbookLayout
            title="Employee Handbook"
            description="Your comprehensive guide to life at Infeara. Our culture, policies, and commitment to a fair, compliant, and thriving remote workplace."
            updatedDate="December 2025"
            tocItems={tocItems}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <p className="lead text-xl text-slate-600 dark:text-slate-300 mb-8">
                    Welcome to Infeara! This handbook is more than just a rulebook; it's a blueprint for our shared success. As a remote-first company operating in India, we are committed to adhering to all applicable labor laws while fostering a culture of trust, autonomy, and excellence.
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-xl mb-12">
                    <div className="flex items-start gap-4">
                        <Scale className="h-6 w-6 text-blue-600 mt-1 shrink-0" />
                        <div>
                            <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2">Compliance Commitment</h3>
                            <p className="text-blue-700 dark:text-blue-400 text-sm leading-relaxed">
                                Infeara is fully compliant with the Shops and Establishments Act, The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 (POSH), The Maternity Benefit Act, 1961, and The Employees' Provident Funds and Miscellaneous Provisions Act, 1952.
                            </p>
                        </div>
                    </div>
                </div>

                <h2 id="welcome">1. Welcome & Culture</h2>
                <p>
                    At Infeara, our mission is to empower enterprises with next-generation IT infrastructure and security solutions. We believe in building a future where technology is an enabler, not a bottleneck.
                </p>

                <div className="h-8" />
                <h3>Our Core Values</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Ownership:</strong> We act like owners. We take responsibility for our work and its impact.</li>
                    <li><strong>Transparency:</strong> We share information openly and honestly. No hidden agendas.</li>
                    <li><strong>Customer Obsession:</strong> We start with the customer and work backward.</li>
                    <li><strong>Continuous Learning:</strong> We are always learning, experimenting, and improving.</li>
                    <li><strong>Bias for Action:</strong> Speed matters in business. We value calculated risk-taking.</li>
                </ul>

                <div className="h-12" />
                <h2 id="remote-philosophy">2. Remote-First Philosophy</h2>
                <p>
                    We are a distributed team by design. We believe that talent is everywhere, not just within a 20-mile radius of an office.
                </p>

                <div className="h-8" />
                <h3>What Remote-First Means</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Async by Default:</strong> We document everything. Decisions are made in writing, not in hallway conversations.</li>
                    <li><strong>Flexible Hours:</strong> We care about what you achieve, not when you clock in. Work when you are most productive, as long as you overlap for core collaboration hours.</li>
                    <li><strong>Output over Input:</strong> We measure success by deliverables and impact, not by hours spent in a chair.</li>
                </ul>

                <div className="h-12" />
                <h2 id="communication">3. Communication & Tools</h2>
                <p>
                    Effective communication is the lifeblood of a remote company. We use a specific stack of tools to stay aligned.
                </p>

                <div className="h-8" />
                <h3>Our Tool Stack</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Slack:</strong> For quick questions, social chatter, and urgent updates. Use threads to keep channels clean.</li>
                    <li><strong>Notion:</strong> Our source of truth. All docs, policies, and project specs live here. If it's not in Notion, it didn't happen.</li>
                    <li><strong>Zoom/Google Meet:</strong> For synchronous meetings. We keep meetings to a minimum and always have an agenda.</li>
                    <li><strong>Jira/Linear:</strong> For task management and issue tracking.</li>
                </ul>

                <div className="h-12" />
                <h2 id="work-environment">4. Work Environment</h2>
                <p>
                    Since we don't have a central office, your home (or wherever you choose to work) is your office. We want to ensure it's a great place to work.
                </p>

                <div className="h-8" />
                <h3>Home Office Stipend</h3>
                <p>
                    We provide a one-time stipend of <strong>₹25,000</strong> for you to set up a comfortable and ergonomic workspace. This includes a desk, chair, monitor, and noise-canceling headphones.
                </p>

                <div className="h-8" />
                <h3>Internet Reimbursement</h3>
                <p>
                    A stable, high-speed internet connection is non-negotiable. We reimburse up to <strong>₹1,500 per month</strong> for your internet bill.
                </p>

                <div className="h-12" />
                <h2 id="employment-basics">5. Employment Basics</h2>

                <div className="h-8" />
                <h3>Work Hours</h3>
                <p>
                    While we are flexible, we generally expect availability during core collaboration hours (typically <strong>9:30 AM - 6:30 PM IST</strong>) to facilitate synchronous meetings and pair programming. Sometimes, based on emergencies, availability on 24/7 basis is required. Standard working hours are 9 hours per day (including a 1-hour break), Monday to Friday.
                </p>

                <div className="h-8" />
                <h3>Probation Period</h3>
                <p>
                    New employees undergo a probation period of <strong>3 to 6 months</strong>. Confirmation is subject to performance review.
                </p>

                <div className="h-12" />
                <h2 id="leaves-holidays">6. Leaves & Holidays</h2>
                <p>
                    We believe in a healthy work-life balance. Our leave policy is designed to comply with the Shops and Establishments Act and ensure you have ample time to rest.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="font-bold text-lg mb-2 text-orange-600">Privilege Leave (PL)</h4>
                        <p className="text-sm"><strong>18 days per year.</strong> Accrued monthly (1.5 days/month). Can be carried forward up to 45 days. Used for planned vacations.</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="font-bold text-lg mb-2 text-blue-600">Casual Leave (CL)</h4>
                        <p className="text-sm"><strong>12 days per year.</strong> Credited at the start of the year. Cannot be carried forward. Used for personal matters or short breaks.</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="font-bold text-lg mb-2 text-green-600">Sick Leave (SL)</h4>
                        <p className="text-sm"><strong>12 days per year.</strong> For medical reasons. Medical certificate required for more than 3 consecutive days.</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="font-bold text-lg mb-2 text-purple-600">Maternity & Paternity</h4>
                        <p className="text-sm"><strong>Maternity:</strong> 26 weeks paid leave as per Maternity Benefit Act.<br /><strong>Paternity:</strong> 2 weeks paid leave.</p>
                    </div>
                </div>

                <div className="h-8" />
                <h3>Public Holidays</h3>
                <p>
                    Infeara observes <strong>10 mandatory public holidays</strong> per year (including Republic Day, Independence Day, Gandhi Jayanti, and May Day) plus <strong>2 optional holidays</strong> of your choice for regional festivals.
                </p>

                <div className="h-12" />
                <h2 id="benefits">7. Compensation & Benefits</h2>

                <div className="h-8" />
                <h3>Provident Fund (EPF)</h3>
                <p>
                    Infeara contributes 12% of your Basic + DA towards your Employee Provident Fund (EPF) account, matching your contribution, as per statutory requirements.
                </p>

                <div className="h-8" />
                <h3>Gratuity</h3>
                <p>
                    Employees who complete 5 years of continuous service are eligible for Gratuity as per the Payment of Gratuity Act, 1972.
                </p>

                <div className="h-8" />
                <h3>Health Insurance</h3>
                <p>
                    We provide comprehensive Group Medical Cover (GMC) of <strong>₹5 Lakhs</strong> for you, your spouse, and up to 2 children. Parents can be added with a co-pay.
                </p>

                <div className="h-12" />
                <h2 id="posh">8. POSH & Code of Conduct</h2>
                <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 p-6 rounded-xl mb-8">
                    <h3 className="text-red-800 dark:text-red-400 font-bold flex items-center gap-2 mb-4">
                        <ShieldCheck className="h-5 w-5" />
                        Prevention of Sexual Harassment (POSH)
                    </h3>
                    <p className="text-sm text-red-700 dark:text-red-300 mb-4">
                        Infeara has a <strong>Zero Tolerance Policy</strong> towards sexual harassment. We are committed to providing a safe environment for all employees, regardless of gender.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-red-700 dark:text-red-300">
                        <li><strong>Internal Complaints Committee (ICC):</strong> We have a constituted ICC headed by a senior female employee and an external member.</li>
                        <li><strong>Reporting:</strong> Any incident can be reported directly via our <Link href="/contact" className="text-primary hover:underline">Contact Page</Link>. All reports are treated with strict confidentiality.</li>
                        <li><strong>Redressal:</strong> The ICC will investigate and take appropriate action within 90 days as per the Act.</li>
                    </ul>
                </div>

                <div className="h-8" />
                <h3>General Code of Conduct</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Professionalism:</strong> Treat colleagues, clients, and partners with respect.</li>
                    <li><strong>Inclusivity:</strong> We celebrate diversity. Discrimination based on caste, religion, gender, or orientation is strictly prohibited.</li>
                    <li><strong>Conflict of Interest:</strong> Employees must not engage in any business or activity that competes with Infeara or creates a conflict of interest.</li>
                </ul>

                <div className="h-12" />
                <h2 id="performance">9. Performance & Growth</h2>
                <p>
                    We want you to grow with Infeara.
                </p>

                <div className="h-8" />
                <h3>Reviews</h3>
                <p>
                    We conduct formal performance reviews twice a year (April and October). However, feedback should be continuous. Don't wait for a review to discuss performance.
                </p>

                <div className="h-8" />
                <h3>1:1s</h3>
                <p>
                    You will have a weekly or bi-weekly 1:1 with your manager. This is your time to discuss blockers, career growth, and personal well-being.
                </p>

                <div className="h-12" />
                <h2 id="security">10. Security & Privacy</h2>
                <p>
                    As a security company, we must practice what we preach.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Device Security:</strong> All work devices must be encrypted and have antivirus software installed.</li>
                    <li><strong>Password Management:</strong> Use 1Password or LastPass. Never reuse passwords. Enable 2FA everywhere.</li>
                    <li><strong>Data Privacy:</strong> Do not share customer data on unauthorized channels. Follow our Data Handling Policy.</li>
                </ul>

                <div className="h-12" />
                <h2 id="offboarding">11. Offboarding</h2>
                <p>
                    If you decide to leave Infeara, we want to ensure a smooth transition.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Notice Period:</strong> The standard notice period is <strong>60 days</strong> to ensure proper knowledge transfer.</li>
                    <li><strong>Exit Interview:</strong> We value your feedback and want to learn how we can improve.</li>
                    <li><strong>Full & Final Settlement:</strong> FNF will be processed within 45 days of your last working day.</li>
                </ul>

                <div className="mt-12 p-6 bg-orange-50 dark:bg-orange-900/10 rounded-xl border border-orange-100 dark:border-orange-900/20">
                    <h3 className="text-lg font-bold text-orange-800 dark:text-orange-300 mb-2">Living Document</h3>
                    <p className="text-orange-700 dark:text-orange-400 text-sm">
                        This handbook is a living document. It will evolve as we grow. If you see something that needs updating or clarification, please submit a pull request or let the People Team know.
                    </p>
                </div>
            </motion.div>
        </HandbookLayout>
    );
}
