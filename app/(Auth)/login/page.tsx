"use client";
import Image from "next/image";
import Link from "next/link";
import { createBrowserClient } from "@supabase/ssr";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import GoogleLogo from "/public/googlelogo.png";

import type { Database } from "@/lib/lib/database.types";
import { Button } from "@/lib/@/components/ui/button";
import { Form } from "@/lib/@/components/ui/form";
import { Input } from "@/lib/@/components/ui/input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.refresh();
    setEmail("");
    setPassword("");
  };

  return (
    <div className="my-32 flex items-center justify-center">
      <div className=" mx-auto p-8 border  md:w-1/3 w-full	 rounded-lg">
        <h2 className="text-3xl mb-6 text-center font-bold">LOG IN</h2>
        <Button
          variant="outline"
          className="w-full flex items-center justify-center px-4 py-3 mb-5 hover:bg-accent  rounded  focus:outline-none"
        >
          LOG IN WITH GOOGLE{" "}
          <Image src={GoogleLogo} alt="google logo" width="50" height="50" />
        </Button>
        <hr />
        <div className="text-center  my-4">OR</div>
        <Form>
          <Input
            type="email"
            name="email"
            placeholder="EMAIL"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full p-2  bg-secondary rounded"
          />
          <Input
            type="password"
            name="password"
            placeholder="PASSWORD"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-full p-2  mt-2 bg-secondary rounded"
          />
          <Button
            variant="outline"
            onClick={handleSignIn}
            className=" px-4 py-3 w-full mt-2 font-bold rounded hover:bg-accent-color"
          >
            LOG IN
          </Button>
        </Form>
        <div className="text-center text-gray-400 mt-6 ">
          <Link href="/forgotpassword" className="hover:underline">
            FORGOT YOUR PASSWORD?
          </Link>
        </div>
        <div className="text-center  mt-6">
          NOT A MEMBER?{" "}
          <Link href="/signup" className=" hover:underline">
            REGISTER HERE
          </Link>
        </div>
      </div>
    </div>
  );
}
