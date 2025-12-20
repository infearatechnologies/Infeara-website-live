"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Download, CheckCircle } from "lucide-react";

interface GatedDownloadFormProps {
    downloadId: string;
    downloadTitle: string;
    fileUrl: string;
}

export function GatedDownloadForm({ downloadId, downloadTitle, fileUrl }: GatedDownloadFormProps) {
    const supabase = createClient();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { error } = await supabase
                .from("contacts")
                .insert([{
                    name: formData.name,
                    email: formData.email,
                    subject: `Download Request: ${downloadTitle}`,
                    message: `User requested download for ID: ${downloadId}`,
                }]);

            if (error) throw error;
            setSuccess(true);
            // Auto-redirect to file or show link
            window.open(fileUrl, "_blank");
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="text-center p-8 bg-green-50 rounded-xl border border-green-100">
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-800 mb-2">Success!</h3>
                <p className="text-green-700 mb-6">Your download should start automatically.</p>
                <Button asChild className="bg-green-600 hover:bg-green-700">
                    <a href={fileUrl} target="_blank" rel="noopener noreferrer">
                        Download Again <Download className="ml-2 h-4 w-4" />
                    </a>
                </Button>
            </div>
        );
    }

    return (
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Access this Resource</h3>
            <p className="text-muted-foreground mb-6 text-sm">
                Please fill out the form below to access the download link.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                    />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Get Access"}
                </Button>
            </form>
        </div>
    );
}
