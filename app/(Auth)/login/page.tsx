'use client'
import Image from "next/image"
import Link from "next/link"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

import type { Database } from "@/lib/lib/database.types"

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const supabase = createClientComponentClient<Database>()


  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password, 
    })
    router.refresh()
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }
    return (
      <div className="my-32 flex items-center justify-center">
      <div className=" mx-auto p-8 border bg-transparent 	 border-white rounded-lg">
        <h2 className="text-white text-3xl mb-6 text-center font-bold">LOG IN</h2>
        <button className="w-full flex items-center justify-center px-4 py-3 mb-5 bg-accent-color text-white rounded hover:bg-gray-900 focus:outline-none">
          LOG IN WITH GOOGLE <Image src="/googlelogo.png" alt="google logo" width="50" height="50" />
        </button>
        <hr />
        <div className="text-center text-white my-4">OR</div>
        <div className="space-y-4">
          <input type="email" name="email" placeholder="EMAIL" onChange={(e) => setEmail(e.target.value)} value={email} className="w-full p-2 rounded"/>
          <input type="password" name="password" placeholder="PASSWORD" onChange={(e) => setPassword(e.target.value)}  value={password} className="w-full p-2  rounded"/>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-white">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">REMEMBER ME</span>
            </label>
          </div>
          <button onClick={handleSignIn} className="bg-secondary-color text-white px-4 py-3 w-full font-bold rounded hover:bg-accent-color">LOG IN</button>
        </div>
        <div className="text-center text-gray-400 mt-6 ">
          <Link href="/forgotpassword" className="hover:underline">FORGOT YOUR PASSWORD?</Link>
        </div>
        <div className="text-center text-white mt-6">
          NOT A MEMBER? <Link href="/signup" className=" hover:underline">REGISTER HERE</Link>
        </div>
      </div>
    </div>
    )
  }
  