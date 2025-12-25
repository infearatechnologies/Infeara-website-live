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
        try {
            if (!node) return null;

            if (node.text) {
                return <span key={index}>{node.text}</span>;
            }

            const children = Array.isArray(node.children) ? node.children : [];

            switch (node.type) {
                case "paragraph":
                    return (
                        <p key={index} className="mb-4 whitespace-pre-wrap">
                            {children.map((child: any, i: number) => renderNode(child, i))}
                        </p>
                    );
                case "heading":
                    const level = node.level || 2;
                    const Tag = `h${level}` as any;
                    return (
                        <Tag key={index} className="font-bold mt-6 mb-4">
                            {children.map((child: any, i: number) => renderNode(child, i))}
                        </Tag>
                    );
                case "image":
                    if (!node.src) return null;
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
                            {children.map((child: any, i: number) => renderNode(child, i))}
                        </div>
                    );
            }
        } catch (e) {
            console.error("Error rendering node:", e, node);
            return null; // Skip malformed nodes
        }
    };

    if (content.root && Array.isArray(content.root.children)) {
        return (
            <div className={cn("prose prose-lg md:prose-xl max-w-none dark:prose-invert", className)}>
                {content.root.children.map((child: any, i: number) => renderNode(child, i))}
            </div>
        );
    }

    return null;
}
