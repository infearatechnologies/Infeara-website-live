import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { CareersContent } from "@/components/careers/careers-content";

export const metadata: Metadata = {
    title: "Careers at Infeara Technologies | Remote IT Jobs",
    description: "Join Infeara Technologies, a remote-first IT company. Explore open roles in Engineering, Security, and Operations. Work from anywhere in India.",
    openGraph: {
        title: "Careers at Infeara Technologies | Remote IT Jobs",
        description: "Build the future of IT infrastructure with us. We are hiring passionate engineers and problem solvers. Remote-first culture.",
        url: "https://infeara.com/careers",
        siteName: "Infeara Technologies",
        locale: "en_US",
        type: "website",
    },
};

export default async function CareersPage() {
    // Fetch jobs from Supabase
    const supabase = await createClient();
    const { data: jobs } = await supabase
        .from('jobs')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

    return <CareersContent jobs={jobs} />;
}
