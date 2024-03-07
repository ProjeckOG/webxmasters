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

 // If there's an error, throw a custom error
 if (error) {
  throw new Error("Incorrect login credentials");
  // No need to redirect here
}

  // Revalidate the home page layout and redirect the user upon successful login
  revalidatePath('/', 'layout')
  redirect('/user')
}

