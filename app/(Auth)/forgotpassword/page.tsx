"use client";
import { Button } from "@/lib/@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/lib/@/components/ui/form";
import { Input } from "@/lib/@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import supabase from "@/lib/utils/supabase/client";
import { toast } from "sonner";
import { Mail } from "lucide-react";

const ForgotPassword = () => {

  const [emailSent, setEmailSent] = useState(false);

  const formSchema = z.object({
    email: z.string().min(2, "You need to enter a valid email address").max(50),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: { email: string }) {
    try {
      
      const { error } = await supabase.auth.resetPasswordForEmail(values.email, {
        redirectTo: 'http://localhost:3000/resetpassword',
      });
      if (error) throw error;
      toast("Check your email for the reset password link!");
      setEmailSent(true);
      form.reset({
        email: "", // You can set the email field back to an empty string or to its default value
      });

    } catch (error) {
      if (error instanceof Error) {
        toast(error.message);
      } else {
        toast("An unexpected error occurred");
      }
    }
  }
  if (emailSent) {
    return (
      <div className="my-32 flex items-center justify-center">
        <div className="w-full max-w-md p-8 border rounded-lg text-center">
          <Mail size={32} className="mx-auto my-5" />
          <h1 className="text-xl font-bold mb-6">
            Email Sent Successfully!
          </h1>
          <p>Please check your email for the reset password reset link.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="my-32  flex items-center justify-center ">
      <div className="w-full max-w-md p-8 border rounded-lg">
        <h1 className="text-3xl text-center  font-bold mb-6">
          FORGOT PASSWORD
        </h1>
        <p className=" mb-4 text-center">
          Enter your email and we will send you instructions to reset your
          password.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Email</FormLabel>
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
            <Button
              type="submit"
              variant={"outline"}
              className="w-full px-4 py-2 mb-4 rounded bg-primary-color  hover:bg-accent-color"
            >
              SEND RESET LINK
            </Button>
          </form>
        </Form>
        <div className=" my-3 text-center">
          REMEMBER YOUR PASSWORD?{" "}
          <Link href="/login" className="text-accent-color hover:underline">
            LOG IN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
