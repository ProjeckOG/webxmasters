'use server'
import { createClient } from '@/lib/utils/supabase/server'
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signup(email: string, password: string) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
 

  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    // Redirect to an error page if sign-up failed
    console.log(error)
    redirect("/error");
    return; // Make sure to return here so that no further code is executed after a redirect
  }

 return 

}
