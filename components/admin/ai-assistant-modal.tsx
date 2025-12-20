"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
    SheetClose
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Loader2, Bot } from "lucide-react";
import { generateContent } from "@/app/actions/generate-content";

interface AIAssistantModalProps {
    onGenerate: (data: any) => void;
}

export function AIAssistantModal({ onGenerate }: AIAssistantModalProps) {
    const [open, setOpen] = useState(false);
    const [contentInput, setContentInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerate = async () => {
        if (!contentInput) return;

        setLoading(true);
        setError(null);

        try {
            // We pass the contentInput as both prompt and context since we merged the fields
            const result = await generateContent(contentInput, "User provided raw content/notes for full post generation.");

            if (result.error) {
                setError(result.error);
            } else if (result.data) {
                onGenerate(result.data);
                setOpen(false);
                // Reset form
                setContentInput("");
            }
        } catch (err) {
            setError("An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" className="gap-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 hover:from-purple-500/20 hover:to-blue-500/20 border-purple-500/20 text-purple-700 dark:text-purple-300">
                    <Sparkles className="h-4 w-4" />
                    AI Assistant
                </Button>
            </SheetTrigger>
            <SheetContent className="sm:max-w-[540px] w-full flex flex-col h-full">
                <SheetHeader>
                    <SheetTitle className="flex items-center gap-2 text-xl">
                        <Bot className="h-6 w-6 text-purple-600" />
                        AI Content Generator
                    </SheetTitle>
                    <SheetDescription>
                        Paste your raw content, notes, or rough draft below. The AI will organize it into a structured blog post with:
                        <ul className="list-disc list-inside mt-2 space-y-1 text-xs text-muted-foreground">
                            <li><strong>Title & Slug</strong> (SEO optimized)</li>
                            <li><strong>Excerpt</strong> (Engaging summary)</li>
                            <li><strong>Headings</strong> (H1, H2, H3 structure)</li>
                            <li><strong>Formatted Paragraphs</strong></li>
                        </ul>
                    </SheetDescription>
                </SheetHeader>

                <div className="flex-1 py-6 flex flex-col gap-4 overflow-hidden">
                    {error && (
                        <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm">
                            {error}
                        </div>
                    )}
                    <div className="flex-1 flex flex-col gap-2 overflow-hidden">
                        <Label htmlFor="content-input" className="text-base font-medium">
                            Your Content / Notes
                        </Label>
                        <Textarea
                            id="content-input"
                            placeholder="Paste your article draft, bullet points, or rough ideas here..."
                            value={contentInput}
                            onChange={(e) => setContentInput(e.target.value)}
                            className="flex-1 resize-none p-4 text-base leading-relaxed overflow-y-auto min-h-[200px]"
                        />
                        <p className="text-xs text-muted-foreground text-right">
                            {contentInput.length} characters
                        </p>
                    </div>
                </div>

                <SheetFooter className="flex-col sm:flex-row gap-3 sm:justify-between border-t pt-4 mt-auto">
                    <SheetClose asChild>
                        <Button variant="ghost" disabled={loading}>
                            Cancel
                        </Button>
                    </SheetClose>
                    <Button
                        onClick={handleGenerate}
                        disabled={!contentInput || loading}
                        className="bg-purple-600 hover:bg-purple-700 text-white w-full sm:w-auto"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Generating Structure...
                            </>
                        ) : (
                            <>
                                <Sparkles className="mr-2 h-4 w-4" />
                                Generate Full Post
                            </>
                        )}
                    </Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
