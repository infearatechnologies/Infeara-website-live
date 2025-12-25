"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error("Blog Post Error:", error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 text-center space-y-6">
            <div className="bg-red-50 p-4 rounded-full">
                <AlertTriangle className="h-10 w-10 text-red-500" />
            </div>

            <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tight">Something went wrong!</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                    We encountered an error while loading this blog post. This might be due to a temporary issue or missing data.
                </p>
                {error.digest && (
                    <p className="text-xs text-muted-foreground font-mono bg-muted p-2 rounded inline-block mt-2">
                        Error ID: {error.digest}
                    </p>
                )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => reset()} variant="default" className="gap-2">
                    <RefreshCw className="h-4 w-4" /> Try Again
                </Button>
                <Button asChild variant="outline" className="gap-2">
                    <Link href="/resources/blog">
                        <Home className="h-4 w-4" /> Back to Blog
                    </Link>
                </Button>
            </div>
        </div>
    );
}
