"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, FileText, Briefcase, Download, LogOut, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();
    const supabase = createClient();

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.push("/login");
        router.refresh();
    };

    const SidebarContent = () => (
        <div className="flex flex-col h-full bg-card border-r border-border">
            <div className="p-6 border-b border-border">
                <Link href="/admin" className="flex items-center gap-2 font-bold text-xl text-foreground">
                    <div className="h-8 w-8 bg-orange-600 rounded-lg flex items-center justify-center text-white">I</div>
                    Infeara CMS
                </Link>
            </div>

            <nav className="flex-1 p-4 space-y-1">
                <Link
                    href="/admin"
                    className={cn(
                        "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                        pathname === "/admin"
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    )}
                >
                    <LayoutDashboard className="h-4 w-4" />
                    Dashboard
                </Link>

                <div className="pt-4 pb-2 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Content
                </div>

                <Link
                    href="/admin/posts"
                    className={cn(
                        "flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                        pathname?.startsWith("/admin/posts")
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    )}
                >
                    <FileText className="h-4 w-4" />
                    Blog Posts
                </Link>

                <Link
                    href="/admin/case-studies"
                    className={cn(
                        "flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                        pathname?.startsWith("/admin/case-studies")
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    )}
                >
                    <Briefcase className="h-4 w-4" />
                    Case Studies
                </Link>

                <Link
                    href="/admin/jobs"
                    className={cn(
                        "flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                        pathname?.startsWith("/admin/jobs")
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    )}
                >
                    <Briefcase className="h-4 w-4" />
                    Jobs
                </Link>

                <Link
                    href="/admin/downloads"
                    className={cn(
                        "flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                        pathname?.startsWith("/admin/downloads")
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    )}
                >
                    <Download className="h-4 w-4" />
                    Downloads
                </Link>

                <Link
                    href="/admin/contacts"
                    className={cn(
                        "flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                        pathname?.startsWith("/admin/contacts")
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    )}
                >
                    <FileText className="h-4 w-4" />
                    Contacts
                </Link>
            </nav>

            <div className="p-4 border-t border-border">
                <Button
                    variant="ghost"
                    className="w-full justify-start text-muted-foreground hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20"
                    onClick={handleSignOut}
                >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                </Button>
            </div>
        </div>
    );

    return (
        <div className="flex min-h-screen bg-background">
            {/* Desktop Sidebar */}
            <aside className="hidden md:flex w-64 flex-col fixed inset-y-0 z-50">
                <SidebarContent />
            </aside>

            {/* Main Content Wrapper */}
            <div className="flex-1 md:ml-64 flex flex-col">
                <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm flex items-center justify-between px-4 md:px-6 sticky top-0 z-10">
                    <div className="flex items-center gap-4">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="md:hidden">
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="p-0 w-64 border-r">
                                <SidebarContent />
                            </SheetContent>
                        </Sheet>
                        <h1 className="font-semibold text-lg">Dashboard</h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="sm" asChild>
                            <Link href="/">View Site</Link>
                        </Button>
                    </div>
                </header>

                <main className="flex-1 p-4 md:p-8 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
