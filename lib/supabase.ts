import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY

if (!supabaseUrl) {
    console.error('Error: NEXT_PUBLIC_SUPABASE_URL is missing from environment variables.')
    throw new Error('NEXT_PUBLIC_SUPABASE_URL is required.')
}

if (!supabaseAnonKey) {
    console.error('Error: NEXT_PUBLIC_SUPABASE_ANON_KEY (or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY) is missing.')
    throw new Error('Supabase Key is required.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
