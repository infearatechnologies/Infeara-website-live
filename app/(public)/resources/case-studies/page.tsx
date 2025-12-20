import { createClient } from "@/lib/supabase/server";
import { CaseStudyList, CaseStudy } from "@/components/resources/case-studies/case-study-list";

// Don't use revalidate = 0, use dynamic = 'force-dynamic' to ensure no caching of stale data
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export const metadata = {
    title: "Case Studies | Infeara",
    description: "Real-world IT outcomes and success stories.",
};

export default async function CaseStudiesPage() {
    const supabase = await createClient();
    const { data: caseStudies } = await supabase
        .from("case_studies")
        .select("*")
        .order("created_at", { ascending: false });

    // Cast data if needed
    const formattedCaseStudies = (caseStudies as unknown as CaseStudy[]) || [];

    return <CaseStudyList initialCaseStudies={formattedCaseStudies} />;
}
