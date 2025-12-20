"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function deleteCaseStudy(id: string) {
    const supabase = await createClient();

    const { error } = await supabase
        .from("case_studies")
        .delete()
        .eq("id", id);

    if (error) {
        return { error: error.message };
    }

    revalidatePath("/admin/case-studies");
    revalidatePath("/resources/case-studies");
    return { success: true };
}
