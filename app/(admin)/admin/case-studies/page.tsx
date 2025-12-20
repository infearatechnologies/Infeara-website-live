import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Plus, Pencil } from "lucide-react";
import { format } from "date-fns";
import { DeleteCaseStudyButton } from "@/components/admin/delete-case-study-button";

export default async function CaseStudiesPage() {
    const supabase = await createClient();
    const { data: caseStudies, error } = await supabase
        .from("case_studies")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        return <div>Error loading case studies</div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Case Studies</h1>
                <Button asChild>
                    <Link href="/admin/case-studies/new">
                        <Plus className="mr-2 h-4 w-4" />
                        New Case Study
                    </Link>
                </Button>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Client</TableHead>
                            <TableHead>Industry</TableHead>
                            <TableHead>Created At</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {caseStudies?.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center py-10">
                                    No case studies found. Create one to get started.
                                </TableCell>
                            </TableRow>
                        ) : (
                            caseStudies?.map((study) => (
                                <TableRow key={study.id}>
                                    <TableCell className="font-medium">{study.title}</TableCell>
                                    <TableCell>{study.client}</TableCell>
                                    <TableCell>{study.industry}</TableCell>
                                    <TableCell>
                                        {format(new Date(study.created_at), "MMM d, yyyy")}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            <Button variant="ghost" size="icon" asChild>
                                                <Link href={`/admin/case-studies/${study.id}`}>
                                                    <Pencil className="h-4 w-4" />
                                                </Link>
                                            </Button>
                                            <DeleteCaseStudyButton id={study.id} />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
