"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2, Loader2 } from "lucide-react";
import { deletePost } from "@/app/actions/delete-post";
import { useRouter } from "next/navigation";

interface DeletePostButtonProps {
    id: string;
}

export function DeletePostButton({ id }: DeletePostButtonProps) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this post? This action cannot be undone.")) {
            return;
        }

        setLoading(true);
        const result = await deletePost(id);

        if (result.error) {
            alert("Failed to delete post: " + result.error);
        } else {
            // Optional: Show success toast
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
