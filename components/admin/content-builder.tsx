"use client";

import React, { useState, useEffect, useRef } from "react";
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
    useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GripVertical, X, Plus, Image as ImageIcon, Type, AlignLeft } from "lucide-react";
import { Label } from "@/components/ui/label";

// Define block types
export type BlockType = "paragraph" | "heading" | "image";

export interface ContentBlock {
    id: string;
    type: BlockType;
    content?: string; // For paragraph text or image URL
    level?: 1 | 2 | 3 | 4 | 5; // For headings
    alt?: string; // For images
    caption?: string; // For images
    children?: ContentBlock[]; // Recursive structure if needed (kept simple for now)
}

interface ContentBuilderProps {
    initialContent?: any;
    onChange: (content: any) => void;
}

// Sortable Item Component
function SortableBlock({
    block,
    index,
    onRemove,
    onUpdate,
}: {
    block: ContentBlock;
    index: number;
    onRemove: (id: string) => void;
    onUpdate: (id: string, updates: Partial<ContentBlock>) => void;
}) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: block.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} className="mb-4 group relative">
            <Card className="border-l-4 border-l-transparent hover:border-l-orange-500 transition-colors">
                <CardHeader className="p-3 flex flex-row items-center gap-3 bg-secondary/10 rounded-t-lg">
                    <div
                        {...attributes}
                        {...listeners}
                        className="cursor-grab hover:text-orange-600 active:cursor-grabbing"
                    >
                        <GripVertical className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        {block.type === "paragraph" && <AlignLeft className="h-4 w-4" />}
                        {block.type === "heading" && <Type className="h-4 w-4" />}
                        {block.type === "image" && <ImageIcon className="h-4 w-4" />}
                        {block.type}
                    </div>
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="ml-auto h-8 w-8 text-muted-foreground hover:text-red-500"
                        onClick={() => onRemove(block.id)}
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </CardHeader>
                <CardContent className="p-4 space-y-4">
                    {block.type === "heading" && (
                        <div className="flex gap-4">
                            <div className="w-32 shrink-0">
                                <Select
                                    value={String(block.level || 2)}
                                    onValueChange={(val) => onUpdate(block.id, { level: parseInt(val) as 1 | 2 | 3 | 4 | 5 })}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Level" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">H1</SelectItem>
                                        <SelectItem value="2">H2</SelectItem>
                                        <SelectItem value="3">H3</SelectItem>
                                        <SelectItem value="4">H4</SelectItem>
                                        <SelectItem value="5">H5</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <Input
                                placeholder="Heading Text"
                                value={block.content || ""}
                                onChange={(e) => onUpdate(block.id, { content: e.target.value })}
                                className="font-bold text-lg"
                            />
                        </div>
                    )}

                    {block.type === "paragraph" && (
                        <Textarea
                            placeholder="Paragraph text..."
                            value={block.content || ""}
                            onChange={(e) => onUpdate(block.id, { content: e.target.value })}
                            rows={4}
                            className="resize-y"
                        />
                    )}

                    {block.type === "image" && (
                        <div className="space-y-3">
                            <div className="flex gap-4">
                                <div className="flex-1 space-y-1">
                                    <Label className="text-xs">Image URL</Label>
                                    <Input
                                        placeholder="https://..."
                                        value={block.content || ""}
                                        onChange={(e) => onUpdate(block.id, { content: e.target.value })}
                                    />
                                </div>
                                <div className="flex-1 space-y-1">
                                    <Label className="text-xs">Alt Text</Label>
                                    <Input
                                        placeholder="Description for accessibility"
                                        value={block.alt || ""}
                                        onChange={(e) => onUpdate(block.id, { alt: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <Label className="text-xs">Caption (Optional)</Label>
                                <Input
                                    placeholder="Image caption"
                                    value={block.caption || ""}
                                    onChange={(e) => onUpdate(block.id, { caption: e.target.value })}
                                />
                            </div>
                            {block.content && (
                                <div className="relative aspect-video w-full max-w-sm rounded-md overflow-hidden bg-secondary/20 border border-border">
                                    <img src={block.content} alt={block.alt} className="object-cover w-full h-full" />
                                </div>
                            )}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}

export function ContentBuilder({ initialContent, onChange }: ContentBuilderProps) {
    const [blocks, setBlocks] = useState<ContentBlock[]>([]);
    const lastAddedIdRef = useRef<string | null>(null);

    // Initialize blocks from JSON structure
    useEffect(() => {
        if (initialContent?.root?.children) {
            // Transform existing JSON structure to flat block list if possible
            const loadedBlocks = initialContent.root.children.map((child: any) => ({
                id: Math.random().toString(36).substr(2, 9),
                type: child.type || "paragraph",
                content: child.children?.[0]?.text || child.src || "",
                level: child.level,
                alt: child.alt,
                caption: child.caption,
            }));
            setBlocks(loadedBlocks);
        } else if (typeof initialContent === "string" && initialContent) {
            // Handle legacy string content
            setBlocks([{
                id: "init-1",
                type: "paragraph",
                content: initialContent
            }]);
        }
    }, []);

    // Update parent whenever blocks change
    useEffect(() => {
        const newContent = {
            root: {
                children: blocks.map(block => {
                    if (block.type === "image") {
                        return {
                            type: "image",
                            src: block.content,
                            alt: block.alt,
                            caption: block.caption,
                            children: [{ text: "" }] // Empty text child for consistency
                        };
                    }
                    if (block.type === "heading") {
                        return {
                            type: "heading",
                            level: block.level,
                            children: [{ text: block.content }]
                        };
                    }
                    return {
                        type: "paragraph",
                        children: [{ text: block.content }]
                    };
                })
            }
        };
        onChange(newContent);
    }, [blocks, onChange]);

    // Auto-scroll and focus when a new block is added
    useEffect(() => {
        if (lastAddedIdRef.current) {
            const element = document.getElementById(`block-${lastAddedIdRef.current}`);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "center" });

                // transform transition might interfere with scrolling/focus, small delay helps
                setTimeout(() => {
                    const input = element.querySelector("input, textarea") as HTMLElement;
                    if (input) {
                        input.focus();
                    }
                }, 100);
            }
            lastAddedIdRef.current = null;
        }
    }, [blocks]);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            setBlocks((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    };

    const addBlock = (type: BlockType) => {
        const newBlock: ContentBlock = {
            id: Math.random().toString(36).substr(2, 9),
            type,
            content: "",
            level: type === "heading" ? 2 : undefined,
        };
        lastAddedIdRef.current = newBlock.id;
        setBlocks([...blocks, newBlock]); // Revert to append
    };

    const removeBlock = (id: string) => {
        setBlocks(blocks.filter(b => b.id !== id));
    };

    const updateBlock = (id: string, updates: Partial<ContentBlock>) => {
        setBlocks(blocks.map(b => b.id === id ? { ...b, ...updates } : b));
    };

    return (
        <div className="space-y-6 relative">
            <div className="sticky top-0 z-20 flex gap-2 justify-center p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-lg border border-border border-dashed shadow-sm">
                <Button type="button" onClick={() => addBlock("heading")} variant="outline" size="sm" className="gap-2">
                    <Type className="h-4 w-4" /> Add Heading
                </Button>
                <Button type="button" onClick={() => addBlock("paragraph")} variant="outline" size="sm" className="gap-2">
                    <AlignLeft className="h-4 w-4" /> Add Paragraph
                </Button>
                <Button type="button" onClick={() => addBlock("image")} variant="outline" size="sm" className="gap-2">
                    <ImageIcon className="h-4 w-4" /> Add Image
                </Button>
            </div>

            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext
                    items={blocks.map(b => b.id)}
                    strategy={verticalListSortingStrategy}
                >
                    <div className="space-y-4">
                        {blocks.map((block, index) => (
                            <div key={block.id} id={`block-${block.id}`}>
                                <SortableBlock
                                    block={block}
                                    index={index}
                                    onRemove={removeBlock}
                                    onUpdate={updateBlock}
                                />
                            </div>
                        ))}
                    </div>
                </SortableContext>
            </DndContext>

            {blocks.length === 0 && (
                <div className="text-center py-12 text-muted-foreground border-2 border-dashed border-border rounded-lg">
                    <p>No content blocks yet. Add one above to get started.</p>
                </div>
            )}
        </div>
    );
}
