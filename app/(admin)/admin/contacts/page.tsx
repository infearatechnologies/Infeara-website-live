"use client";

import { useState, useMemo } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { Mail, Search, Trash2, Filter, ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { createClient } from "@/lib/supabase/client";
import { updateContactStatus, deleteContact } from "@/lib/actions/contact-actions";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";

const ITEMS_PER_PAGE = 10;

export default function ContactsPage() {
    const [contacts, setContacts] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const { toast } = useToast();
    const supabase = createClient();

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        setIsLoading(true);
        const { data, error } = await supabase
            .from('contacts')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching contacts:', error);
            toast({
                title: "Error",
                description: "Failed to load contacts.",
                variant: "destructive",
            });
        } else {
            setContacts(data || []);
        }
        setIsLoading(false);
    };

    const handleStatusUpdate = async (id: string, newStatus: string) => {
        try {
            await updateContactStatus(id, newStatus);
            setContacts(contacts.map(c => c.id === id ? { ...c, status: newStatus } : c));
            toast({
                title: "Status Updated",
                description: `Contact status changed to ${newStatus}.`,
            });
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to update status.",
                variant: "destructive",
            });
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this contact?")) return;

        try {
            await deleteContact(id);
            setContacts(contacts.filter(c => c.id !== id));
            toast({
                title: "Contact Deleted",
                description: "The contact submission has been removed.",
            });
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to delete contact.",
                variant: "destructive",
            });
        }
    };

    // Filter Logic
    const filteredContacts = useMemo(() => {
        return contacts.filter(contact => {
            const matchesSearch =
                (contact.name?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
                (contact.last_name?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
                (contact.email?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
                (contact.company?.toLowerCase() || "").includes(searchQuery.toLowerCase());

            const matchesStatus = statusFilter === "all" || contact.status === statusFilter;

            return matchesSearch && matchesStatus;
        });
    }, [contacts, searchQuery, statusFilter]);

    // Pagination Logic
    const totalPages = Math.ceil(filteredContacts.length / ITEMS_PER_PAGE);
    const paginatedContacts = filteredContacts.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, statusFilter]);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'In-Progress': return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'Completed': return 'bg-green-100 text-green-800 border-green-200';
            case 'Follow Up': return 'bg-purple-100 text-purple-800 border-purple-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <h1 className="text-3xl font-bold tracking-tight">Contact Submissions</h1>
                <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-sm py-1">
                        Total: {contacts.length}
                    </Badge>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-card p-4 rounded-lg border shadow-sm">
                <div className="relative w-full sm:w-72">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search by name, email, company..."
                        className="pl-9"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                    <Filter className="h-4 w-4 text-muted-foreground" />
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Filter by Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Statuses</SelectItem>
                            <SelectItem value="Pending">Pending</SelectItem>
                            <SelectItem value="In-Progress">In-Progress</SelectItem>
                            <SelectItem value="Completed">Completed</SelectItem>
                            <SelectItem value="Follow Up">Follow Up</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Table */}
            <div className="rounded-md border bg-card shadow-sm">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Contact Info</TableHead>
                            <TableHead>Company</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Requirements</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading ? (
                            <TableRow>
                                <TableCell colSpan={7} className="text-center py-10">Loading...</TableCell>
                            </TableRow>
                        ) : paginatedContacts.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={7} className="text-center py-10">
                                    <div className="flex flex-col items-center gap-2 text-muted-foreground">
                                        <Mail className="h-8 w-8" />
                                        <p>No contacts found.</p>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ) : (
                            paginatedContacts.map((contact) => (
                                <TableRow key={contact.id}>
                                    <TableCell className="whitespace-nowrap text-sm text-muted-foreground">
                                        {format(new Date(contact.created_at), "MMM d, yyyy")}
                                        <br />
                                        {format(new Date(contact.created_at), "HH:mm")}
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        {contact.name} {contact.last_name}
                                    </TableCell>
                                    <TableCell>
                                        <div className="text-sm">{contact.email}</div>
                                        <div className="text-xs text-muted-foreground">{contact.phone}</div>
                                        {contact.whatsapp && <div className="text-xs text-green-600">WA: {contact.whatsapp}</div>}
                                    </TableCell>
                                    <TableCell>{contact.company}</TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className={`${getStatusColor(contact.status || 'Pending')} whitespace-nowrap`}>
                                            {contact.status || 'Pending'}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="max-w-xs truncate text-sm text-muted-foreground" title={contact.requirement_description || contact.message}>
                                        {contact.requirement_description || contact.message}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" className="h-8 w-8 p-0">
                                                    <span className="sr-only">Open menu</span>
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">Update Status</DropdownMenuLabel>
                                                <DropdownMenuItem onClick={() => handleStatusUpdate(contact.id, 'Pending')}>
                                                    Mark as Pending
                                                </DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => handleStatusUpdate(contact.id, 'In-Progress')}>
                                                    Mark as In-Progress
                                                </DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => handleStatusUpdate(contact.id, 'Completed')}>
                                                    Mark as Completed
                                                </DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => handleStatusUpdate(contact.id, 'Follow Up')}>
                                                    Mark as Follow Up
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem onClick={() => handleDelete(contact.id)} className="text-red-600 focus:text-red-600">
                                                    <Trash2 className="mr-2 h-4 w-4" /> Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-4">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="text-sm font-medium text-muted-foreground">
                        Page {currentPage} of {totalPages}
                    </span>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            )}
        </div>
    );
}
