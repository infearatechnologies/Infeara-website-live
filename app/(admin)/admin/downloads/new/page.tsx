import { DownloadForm } from "@/components/admin/download-form";

export default function NewDownloadPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Create New Download</h1>
            <DownloadForm />
        </div>
    );
}
