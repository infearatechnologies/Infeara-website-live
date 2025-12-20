import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MousePointerClick, FileText, ArrowUpRight } from "lucide-react";

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
                <span className="text-sm text-slate-500">Last updated: Just now</span>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <StatCard title="Total Leads" value="128" change="+12%" icon={Users} />
                <StatCard title="Site Visits" value="12.5k" change="+8%" icon={MousePointerClick} />
                <StatCard title="Active Tickets" value="5" change="-2" icon={FileText} />
                <StatCard title="Conversion Rate" value="2.4%" change="+0.5%" icon={ArrowUpRight} />
            </div>

            {/* Recent Leads Table (Mock) */}
            <Card>
                <CardHeader>
                    <CardTitle>Recent Inquiries</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm text-left">
                            <thead className="[&_tr]:border-b">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Name</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Company</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Service Interest</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Status</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground text-right">Date</th>
                                </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                                <LeadRow name="John Doe" company="TechCorp" interest="Cloud Migration" status="New" date="Today" />
                                <LeadRow name="Sarah Smith" company="EduInstitute" interest="Campus Wi-Fi" status="Contacted" date="Yesterday" />
                                <LeadRow name="Mike Johnson" company="AutoParts Ltd" interest="Cyber Security" status="Qualified" date="Dec 08" />
                                <LeadRow name="Priya R." company="FinServe" interest="Managed IT" status="New" date="Dec 08" />
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

function StatCard({ title, value, change, icon: Icon }: { title: string, value: string, change: string, icon: any }) {
    const isPositive = change.startsWith("+");
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-500">{title}</CardTitle>
                <Icon className="h-4 w-4 text-slate-400" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold text-slate-900">{value}</div>
                <p className={`text-xs ${isPositive ? "text-green-600" : "text-red-600"} font-medium flex items-center mt-1`}>
                    {change} <span className="text-slate-400 ml-1 font-normal">from last month</span>
                </p>
            </CardContent>
        </Card>
    );
}

function LeadRow({ name, company, interest, status, date }: { name: string, company: string, interest: string, status: string, date: string }) {
    return (
        <tr className="border-b transition-colors hover:bg-slate-50">
            <td className="p-4 align-middle font-medium">{name}</td>
            <td className="p-4 align-middle">{company}</td>
            <td className="p-4 align-middle">{interest}</td>
            <td className="p-4 align-middle">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
          ${status === 'New' ? 'bg-blue-100 text-blue-800' :
                        status === 'Contacted' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'}`}>
                    {status}
                </span>
            </td>
            <td className="p-4 align-middle text-right text-slate-500">{date}</td>
        </tr>
    );
}
