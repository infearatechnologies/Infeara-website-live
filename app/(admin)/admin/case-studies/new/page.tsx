import { CaseStudyForm } from "@/components/admin/case-study-form";

export default function NewCaseStudyPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Create New Case Study</h1>
            <CaseStudyForm />
        </div>
    );
}
