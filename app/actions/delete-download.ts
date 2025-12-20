"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function deleteDownload(id: string) {
    const supabase = await createClient();

    const { error } = await supabase
        .from("downloads")
        .delete()
        .eq("id", id);

    if (error) {
        return { error: error.message };
    }

    revalidatePath("/admin/downloads");
    revalidatePath("/resources/downloads");
    return { success: true };
}
