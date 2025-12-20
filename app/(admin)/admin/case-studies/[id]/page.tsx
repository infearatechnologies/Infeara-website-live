import { createClient } from "@/lib/supabase/server";
import { CaseStudyForm } from "@/components/admin/case-study-form";
import { notFound } from "next/navigation";

interface EditCaseStudyPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditCaseStudyPage({ params }: EditCaseStudyPageProps) {
    const { id } = await params;
    const supabase = await createClient();
    const { data: caseStudy, error } = await supabase
        .from("case_studies")
        .select("*")
        .eq("id", id)
        .single();

    if (error || !caseStudy) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Edit Case Study</h1>
            <CaseStudyForm caseStudy={caseStudy} />
        </div>
    );
}
