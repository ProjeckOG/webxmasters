"use client";
import Image from "next/image";
import Link from "next/link";
import GoogleLogo from "/public/googlelogo.png";
import { login } from "../auth/login/actions";
import { Button } from "@/lib/@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/lib/@/components/ui/form";
import { Input } from "@/lib/@/components/ui/input";

export default async function Login() {
  const formSchema = z.object({
    email: z.string().min(2).max(50),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="my-32 flex items-center justify-center">
      <div className=" mx-auto p-8 border  md:w-1/3 w-full	 rounded-lg">
        <h2 className="text-3xl mb-6 text-center font-bold">LOG IN</h2>
        <Button
          variant="outline"
          className="w-full flex items-center justify-center  mb-5  p-8"
        >
          LOG IN WITH GOOGLE{" "}
          <Image src={GoogleLogo} alt="google logo" width="50" height="50" />
        </Button>
        <hr />
        <div className="text-center  my-4">OR</div>
        <Form>
          <form onSubmit={login} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2  bg-secondary rounded"
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-2  mt-2 bg-secondary rounded"
            />
            <Button
              type="submit"
              variant="outline"
              className=" flex bg-secondary-color items-center p-8 w-full  rounded hover:bg-accent-color"
            >
              LOG IN
            </Button>
          </form>
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
