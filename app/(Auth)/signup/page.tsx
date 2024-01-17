'use client'
import Link from "next/link"
import Image from "next/image"
import { createBrowserClient } from '@supabase/ssr'
import { useRouter } from 'next/navigation'
import { useState } from 'react'



export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const handleSignUp = async () => {
    
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })
    router.refresh()
    setEmail('')
    setPassword('')
  }

    return (
      <div className="my-32 flex items-center justify-center">
      <div className="mx-auto p-8 border bg-transparent 	 border-white rounded-lg">
        <h2 className="text-3xl mb-6 text-center font-bold">JOIN OTHER WEBMASTERS</h2>
        <button className="w-full flex items-center justify-center px-4 py-3 mb-5 bg-accent-color text-white rounded hover:bg-gray-900 focus:outline-none">
          SIGN UP WITH GOOGLE <Image src="/googlelogo.png" alt="google logo" width="50" height="50" />
        </button>
        <hr />
        <div className=" text-center my-4">OR</div>
        <form className="space-y-4">
          <input className="w-full p-2  rounded" type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="EMAIL" />
          <input className="w-full p-2  rounded" type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="PASSWORD"  />
          <button type="button" className="bg-secondary-color  px-4 py-3 w-full font-bold rounded hover:bg-accent-color" onClick={handleSignUp}>
            SIGN UP
          </button>
          <div className="text-center text-white mt-6">
          ALREADY A MEMBER? <Link href="/login" className="hover:underline"> LOGIN HERE</Link>
        </div>
        </form>
      </div>
    </div>
    )
  }
  