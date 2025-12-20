"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2, Loader2 } from "lucide-react";
import { deleteDownload } from "@/app/actions/delete-download";
import { useRouter } from "next/navigation";

interface DeleteDownloadButtonProps {
    id: string;
}

export function DeleteDownloadButton({ id }: DeleteDownloadButtonProps) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this download? This action cannot be undone.")) {
            return;
        }

        setLoading(true);
        const result = await deleteDownload(id);

        if (result.error) {
            alert("Failed to delete download: " + result.error);
        } else {
            router.refresh();
        }
        setLoading(false);
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={handleDelete}
            disabled={loading}
            className="text-red-500 hover:text-red-600 hover:bg-red-50"
        >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
        </Button>
    );
}
