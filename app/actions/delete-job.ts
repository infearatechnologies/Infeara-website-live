'use server'

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteJob(id: string) {
    const supabase = await createClient();

    const { error } = await supabase
        .from('jobs')
        .delete()
        .eq('id', id);

    if (error) {
        throw new Error(error.message);
    }

    revalidatePath('/admin/jobs');
    revalidatePath('/careers');
}
