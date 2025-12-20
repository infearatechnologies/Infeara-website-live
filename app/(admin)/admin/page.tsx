import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText, Briefcase, Users, ArrowUpRight, MessageSquare, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const revalidate = 0;

export default async function AdminDashboard() {
    const supabase = await createClient();

    // Parallel data fetching
    const [
        { count: postsCount },
        { count: jobsCount },
        { count: contactsCount },
        { count: pendingContactsCount },
        { data: recentContacts }
    ] = await Promise.all([
        supabase.from('posts').select('*', { count: 'exact', head: true }),
        supabase.from('jobs').select('*', { count: 'exact', head: true }),
        supabase.from('contacts').select('*', { count: 'exact', head: true }),
        supabase.from('contacts').select('*', { count: 'exact', head: true }).eq('status', 'Pending'),
        supabase.from('contacts').select('*').order('created_at', { ascending: false }).limit(5)
    ]);

    return (
        <div className="space-y-8 p-1">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                    <p className="text-muted-foreground mt-1">Overview of your platform's performance.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button asChild>
                        <Link href="/">View Website</Link>
                    </Button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Inquiries</CardTitle>
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{contactsCount || 0}</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            {pendingContactsCount || 0} pending response
                        </p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
                        <Briefcase className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{jobsCount || 0}</div>
                        <p className="text-xs text-muted-foreground mt-1">Open positions</p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{postsCount || 0}</div>
                        <p className="text-xs text-muted-foreground mt-1">Published articles</p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">System Status</CardTitle>
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-600">Healthy</div>
                        <p className="text-xs text-muted-foreground mt-1">All systems operational</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                {/* Recent Activity */}
                <Card className="col-span-4 shadow-sm">
                    <CardHeader>
                        <CardTitle>Recent Inquiries</CardTitle>
                        <CardDescription>Latest contact form submissions.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {recentContacts && recentContacts.length > 0 ? (
                                recentContacts.map((contact) => (
                                    <div key={contact.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                                        <div className="flex items-center gap-4">
                                            <div className="h-9 w-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-sm">
                                                {contact.name.charAt(0)}
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-sm font-medium leading-none">{contact.name} {contact.last_name}</p>
                                                <p className="text-xs text-muted-foreground">{contact.email}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Badge variant={contact.status === 'Pending' ? 'destructive' : 'secondary'} className="text-xs">
                                                {contact.status || 'Pending'}
                                            </Badge>
                                            <div className="text-xs text-muted-foreground text-right">
                                                {format(new Date(contact.created_at), "MMM d")}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-8 text-muted-foreground">
                                    No recent inquiries found.
                                </div>
                            )}
                        </div>
                        <div className="mt-6">
                            <Button variant="outline" className="w-full" asChild>
                                <Link href="/admin/contacts">View All Inquiries</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="col-span-3 shadow-sm">
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                        <CardDescription>Manage your content efficiently.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-3">
                        <Link href="/admin/posts/new" className="flex items-center justify-between p-4 border rounded-xl hover:bg-secondary/50 hover:border-orange-200 transition-all group">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-100 transition-colors">
                                    <FileText className="h-4 w-4" />
                                </div>
                                <span className="font-medium">Write New Post</span>
                            </div>
                            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-orange-600 transition-colors" />
                        </Link>
                        <Link href="/admin/jobs/new" className="flex items-center justify-between p-4 border rounded-xl hover:bg-secondary/50 hover:border-orange-200 transition-all group">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg group-hover:bg-purple-100 transition-colors">
                                    <Briefcase className="h-4 w-4" />
                                </div>
                                <span className="font-medium">Post New Job</span>
                            </div>
                            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-orange-600 transition-colors" />
                        </Link>
                        <Link href="/admin/contacts" className="flex items-center justify-between p-4 border rounded-xl hover:bg-secondary/50 hover:border-orange-200 transition-all group">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-50 text-green-600 rounded-lg group-hover:bg-green-100 transition-colors">
                                    <Users className="h-4 w-4" />
                                </div>
                                <span className="font-medium">Manage Contacts</span>
                            </div>
                            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-orange-600 transition-colors" />
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
