'use server'

// Import necessary utilities from Next.js and the Supabase client
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/utils/supabase/server'

export async function login(email: string, password: string) {
  // Initialize the Supabase client
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  // Attempt to sign in with email and password
  const { error } = await supabase.auth.signInWithPassword({ email, password })

  // If there's an error, redirect to the error page without attempting to revalidate
  if (error) {
    redirect('/error')
    return; // Ensure the function exits here to avoid further execution
  }

  // Revalidate the home page layout and redirect the user upon successful login
  revalidatePath('/', 'layout')
  redirect('/user')
}

