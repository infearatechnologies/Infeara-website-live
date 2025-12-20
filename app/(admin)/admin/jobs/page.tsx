import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2, MapPin, Briefcase } from "lucide-react";
import { deleteJob } from "@/app/actions/delete-job";

export const revalidate = 0;

export default async function JobsPage() {
    const supabase = await createClient();
    const { data: jobs } = await supabase
        .from('jobs')
        .select('*')
        .order('created_at', { ascending: false });

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Jobs</h2>
                    <p className="text-muted-foreground mt-2">Manage open roles and job listings.</p>
                </div>
                <Link href="/admin/jobs/new">
                    <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Job
                    </Button>
                </Link>
            </div>

            <div className="grid gap-4">
                {jobs?.map((job) => (
                    <div key={job.id} className="flex items-center justify-between p-4 border rounded-lg bg-card hover:bg-accent/50 transition-colors">
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <h3 className="font-semibold">{job.title}</h3>
                                {!job.is_active && (
                                    <span className="px-2 py-0.5 text-xs bg-yellow-100 text-yellow-800 rounded-full dark:bg-yellow-900 dark:text-yellow-100">
                                        Draft
                                    </span>
                                )}
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <Briefcase className="h-3 w-3" />
                                    {job.department}
                                </div>
                                <div className="flex items-center gap-1">
                                    <MapPin className="h-3 w-3" />
                                    {job.location}
                                </div>
                                <span>•</span>
                                <span>{job.type}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href={`/admin/jobs/${job.id}`}>
                                <Button variant="ghost" size="icon">
                                    <Pencil className="h-4 w-4" />
                                </Button>
                            </Link>
                            <form action={deleteJob.bind(null, job.id)}>
                                <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </form>
                        </div>
                    </div>
                ))}

                {(!jobs || jobs.length === 0) && (
                    <div className="text-center py-12 border rounded-lg bg-muted/10">
                        <p className="text-muted-foreground">No jobs found. Create your first job listing.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
