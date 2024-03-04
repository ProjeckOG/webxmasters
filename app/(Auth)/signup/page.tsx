"use client";
import Link from "next/link";
import Image from "next/image";
import GoogleLogo from "/public/googlelogo.png";
import { Button } from "@/lib/@/components/ui/button";
import { Input } from "@/lib/@/components/ui/input";
import { signup } from "../auth/sign-up/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { login } from "../auth/login/actions";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/lib/@/components/ui/form";

export default function SignUp() {
  const formSchema = z.object({
    email: z.string().min(2, "You need to enter a valid email address").max(50),
    password: z.string().min(8, "You password must be 8 characters long"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    try {
      await signup(values.email, values.password);
      // Navigate to the dashboard or home page on successful login
    } catch (error) {
      // Handle errors (e.g., showing a message to the user)
      console.error(error);
      // Optionally, update state to show an error message on the UI
    }
  }

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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full p-2  bg-secondary rounded"
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="w-full p-2  bg-secondary rounded"
                      placeholder="Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              variant="outline"
              className="flex  bg-secondary-color items-center p-8 w-full  rounded hover:bg-accent-color"
            >
              SIGN UP
            </Button>
          </form>
        </Form>
        <div className="text-center  mt-6">
          ALREADY A MEMBER?{" "}
          <Link href="/login" className="hover:underline">
            {" "}
            LOGIN HERE
          </Link>
        </div>
      </div>
    </div>
  );
}
