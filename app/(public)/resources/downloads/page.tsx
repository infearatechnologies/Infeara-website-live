import { createClient } from "@/lib/supabase/server";
import { DownloadList, DownloadResource } from "@/components/resources/downloads/download-list";

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export const metadata = {
    title: "Downloads | Infeara",
    description: "Free templates, checklists, and guides for IT management.",
};

export default async function DownloadsPage() {
    const supabase = await createClient();
    const { data: downloads } = await supabase
        .from("downloads")
        .select("*")
        .order("created_at", { ascending: false });

    // Cast data if needed, or if the DB schema matches the interface directly
    const formattedDownloads = (downloads as unknown as DownloadResource[]) || [];

    return <DownloadList initialDownloads={formattedDownloads} />;
}
