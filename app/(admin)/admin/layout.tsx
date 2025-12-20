import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin Dashboard | Infeara",
    description: "Content Management System",
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}
