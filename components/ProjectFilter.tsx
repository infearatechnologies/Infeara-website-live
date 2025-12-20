"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectFilterProps {
    categories: string[];
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

export function ProjectFilter({ categories, activeCategory, onCategoryChange }: ProjectFilterProps) {
    return (
        <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
                <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    onClick={() => onCategoryChange(category)}
                    className={cn(
                        "rounded-full",
                        activeCategory === category
                            ? "bg-teal-600 hover:bg-teal-700 text-white border-transparent"
                            : "text-slate-600 border-slate-300 hover:bg-slate-100"
                    )}
                >
                    {category}
                </Button>
            ))}
        </div>
    );
}
