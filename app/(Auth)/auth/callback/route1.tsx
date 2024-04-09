import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { type CookieOptions, createServerClient } from '@supabase/ssr'

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');  // OAuth 'code' from query params
  const next = url.searchParams.get('next') ?? '/welcome';  // Default redirect is to '/welcome'

  if (code) {
    const cookieStore = cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
          set(name: string, value: string, options: CookieOptions) {
            cookieStore.set({ name, value, ...options })
          },
          remove(name: string, options: CookieOptions) {
            cookieStore.delete({ name, ...options })
          },
        },
      }
    )
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (!error) {
      // No error, redirect to the specified 'next' page
      return NextResponse.redirect(`${url.origin}${next}`);
    } else {
      // Log the error for debugging purposes
      console.error('Error exchanging OAuth code:', error);
    }
  }

    // Redirect to an error page if the OAuth exchange fails or code is missing

  return NextResponse.redirect(`${url.origin}/auth/auth-code-error`)
}