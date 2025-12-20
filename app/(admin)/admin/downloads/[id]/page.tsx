import { createClient } from "@/lib/supabase/server";
import { DownloadForm } from "@/components/admin/download-form";
import { notFound } from "next/navigation";

interface EditDownloadPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditDownloadPage({ params }: EditDownloadPageProps) {
    const { id } = await params;
    const supabase = await createClient();
    const { data: download, error } = await supabase
        .from("downloads")
        .select("*")
        .eq("id", id)
        .single();

    if (error || !download) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Edit Download</h1>
            <DownloadForm download={download} />
        </div>
    );
}
