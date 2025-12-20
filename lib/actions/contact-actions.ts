'use server';

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function updateContactStatus(id: string, status: string) {
    const supabase = await createClient();
    const { error } = await supabase
        .from('contacts')
        .update({ status })
        .eq('id', id);

    if (error) {
        console.error('Error updating contact status:', error);
        throw new Error('Failed to update status');
    }

    revalidatePath('/admin/contacts');
}

export async function deleteContact(id: string) {
    const supabase = await createClient();
    const { error } = await supabase
        .from('contacts')
        .delete()
        .eq('id', id);

    if (error) {
        console.error('Error deleting contact:', error);
        throw new Error('Failed to delete contact');
    }

    revalidatePath('/admin/contacts');
}
