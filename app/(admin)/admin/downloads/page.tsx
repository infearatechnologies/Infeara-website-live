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
import { Plus, Pencil, Lock, Unlock } from "lucide-react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { DeleteDownloadButton } from "@/components/admin/delete-download-button";

export default async function DownloadsPage() {
    const supabase = await createClient();
    const { data: downloads, error } = await supabase
        .from("downloads")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        return <div>Error loading downloads</div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Downloads</h1>
                <Button asChild>
                    <Link href="/admin/downloads/new">
                        <Plus className="mr-2 h-4 w-4" />
                        New Download
                    </Link>
                </Button>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Created At</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {downloads?.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center py-10">
                                    No downloads found. Create one to get started.
                                </TableCell>
                            </TableRow>
                        ) : (
                            downloads?.map((download) => (
                                <TableRow key={download.id}>
                                    <TableCell className="font-medium">{download.title}</TableCell>
                                    <TableCell>
                                        {download.gated ? (
                                            <Badge variant="secondary" className="gap-1">
                                                <Lock className="h-3 w-3" /> Gated
                                            </Badge>
                                        ) : (
                                            <Badge variant="outline" className="gap-1">
                                                <Unlock className="h-3 w-3" /> Public
                                            </Badge>
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {format(new Date(download.created_at), "MMM d, yyyy")}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            <Button variant="ghost" size="icon" asChild>
                                                <Link href={`/admin/downloads/${download.id}`}>
                                                    <Pencil className="h-4 w-4" />
                                                </Link>
                                            </Button>
                                            <DeleteDownloadButton id={download.id} />
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
