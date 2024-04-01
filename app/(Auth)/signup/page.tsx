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
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/lib/@/components/ui/form";
import { toast } from "sonner";
import supabase from "@/lib/utils/supabase/client";
import { useState } from "react";
import { Inbox, Wrench } from "lucide-react";

export default function SignUp() {
  const [emailSent, setEmailSent] = useState(false);

  async function googleAuth() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
    if (error) {
      console.error("Login error", error.message);
    } else if (data) {
      console.log("Login success", data);
      // You might want to redirect the user to the homepage or dashboard here
    }
  }
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
    try {
      await signup(values.email, values.password);
      toast("You have successfully signed up! Now go Check your email");
      // Navigate to the dashboard or home page on successful login
      setEmailSent(true);
    } catch (error) {
      // Handle errors (e.g., showing a message to the user)
      console.error(error);
      // Optionally, update state to show an error message on the UI
    }
  }
  if (emailSent) {
    return (
      <div className=" items-center w-full sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 mx-auto mt-5 p-10 border shadow-lg rounded-lg">
        <div className="flex justify-center mb-4">
          <Inbox size={50} />
        </div>
        <h2 className="text-3xl text-center font-bold underline mb-4">
          Please Check Your Inbox!
        </h2>
        <p className="text-base leading-relaxed">
          To complete your signup process and <b>activate</b> your account,
          we've sent a confirmation email.
          <br />
          <br />
          Please check your inbox (and the spam/junk folder, just in case) for
          an email from us and click on the "Confirm your email" button within
          that email.
        </p>
        <hr className="my-10" />
        <div className="flex justify-center mb-4">
          <Wrench size={40} />
        </div>
        <h2 className="font-bold text-center text-2xl underline mt-6 mb-3">
          Need Assistance?
        </h2>
        <p className="text-base mb-3">
          We're here to help! If you encounter any issues or have questions,
          please don't hesitate to contact our support team. You can reach us at{" "}
          <a
            href="mailto:support@webxmasters.io"
            className="underline hover:text-indigo-800"
          >
            support@webxmasters.io
          </a>{" "}
          or visit our Help Center for quick answers and support resources.
        </p>
      </div>
    );
  }

  return (
    <div className="my-32 flex items-center justify-center">
      <div className="mx-auto p-8 border  md:w-1/3 w-full	 rounded-lg">
        <h2 className="text-3xl mb-6 text-center font-bold">
          JOIN OTHER WEBMASTERS
        </h2>
        <Button
          onClick={googleAuth}
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
                      className="w-full p-2  bg-primary-foreground hover:bg-secondary rounded"
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
                      className="w-full p-2  bg-primary-foreground hover:bg-secondary rounded"
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
