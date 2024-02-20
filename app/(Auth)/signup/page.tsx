"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import GoogleLogo from "/public/googlelogo.png";
import { Button } from "@/lib/@/components/ui/button";
import { Input } from "@/lib/@/components/ui/input";
import { signup } from "../auth/sign-up/actions";


export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  return (
    <div className="my-32 flex items-center justify-center">
      <div className="mx-auto p-8 border  md:w-1/3 w-full	 rounded-lg">
        <h2 className="text-3xl mb-6 text-center font-bold">
          JOIN OTHER WEBMASTERS
        </h2>
        <Button
          variant="outline"
          className="w-full flex items-center justify-center p-8 mb-5 hover:bg-accent  rounded  focus:outline-none"
        >
          SIGN UP WITH GOOGLE{" "}
          <Image src={GoogleLogo} alt="google logo" width="50" height="50" />
        </Button>
        <hr />
        <div className=" text-center my-4">OR</div>
        <form className="space-y-4">
          <Input
            className="w-full p-2 bg-secondary rounded"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
          />
          <Input
            className="w-full p-2  mt-2 bg-secondary rounded"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
          />
          <Button
            type="submit"
            variant="outline"
            className="bg-secondary-color  px-4 py-3 w-full  rounded hover:bg-accent-color"
            formAction={signup}
          >
            SIGN UP
          </Button>
          <div className="text-center  mt-6">
            ALREADY A MEMBER?{" "}
            <Link href="/login" className="hover:underline">
              {" "}
              LOGIN HERE
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
