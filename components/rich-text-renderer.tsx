import { cn } from "@/lib/utils";

interface RichTextRendererProps {
    content: any;
    className?: string;
}

export function RichTextRenderer({ content, className }: RichTextRendererProps) {
    if (!content) return null;

    // Handle simple string content
    if (typeof content === "string") {
        return <div className={cn("prose prose-lg md:prose-xl max-w-none dark:prose-invert", className)}>{content}</div>;
    }

    // Handle JSON structure (simplified for now)
    const renderNode = (node: any, index: number) => {
        if (node.text) {
            return <span key={index}>{node.text}</span>;
        }

        switch (node.type) {
            case "paragraph":
                return (
                    <p key={index} className="mb-4 whitespace-pre-wrap">
                        {node.children?.map((child: any, i: number) => renderNode(child, i))}
                    </p>
                );
            case "heading":
                const Tag = `h${node.level || 2}` as any;
                return (
                    <Tag key={index} className="font-bold mt-6 mb-4">
                        {node.children?.map((child: any, i: number) => renderNode(child, i))}
                    </Tag>
                );
            case "image":
                return (
                    <figure key={index} className="my-8">
                        <img
                            src={node.src}
                            alt={node.alt || ""}
                            className="w-full rounded-lg shadow-md"
                        />
                        {node.caption && (
                            <figcaption className="text-center text-sm text-muted-foreground mt-2">
                                {node.caption}
                            </figcaption>
                        )}
                    </figure>
                );
            // Add more types as needed
            default:
                return (
                    <div key={index}>
                        {node.children?.map((child: any, i: number) => renderNode(child, i))}
                    </div>
                );
        }
    };

    if (content.root && content.root.children) {
        return (
            <div className={cn("prose prose-lg md:prose-xl max-w-none dark:prose-invert", className)}>
                {content.root.children.map((child: any, i: number) => renderNode(child, i))}
            </div>
        );
    }

    return null;
}
