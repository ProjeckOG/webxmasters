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
import supabase from "@/lib/utils/supabase/client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { redirect } from "next/navigation";
import { Toaster } from "@/lib/@/components/ui/sonner";
import { toast } from "sonner";

const ResetPassword = () => {

  const formSchema = z.object({
    password: z.string().min(8, "Your password must be 8 characters long"),
    confirmPassword: z.string().min(8, "Repeat your password above!"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: {
    password: string;
    confirmPassword: string;
  }) {
    const { password, confirmPassword } = values;
    if (password !== confirmPassword) {
      toast("Your passwords do not match");
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: password,
      });

      if (error) throw error;

      toast("Your password updated successfully!");
      redirect('/login')
    } catch (error) {
      if (error instanceof Error) {
        toast(error.message);
      } else {
        // Handle cases where the error might not be an Error instance
        toast("An unexpected error occurred");
      }
    }
  }

  return (
    <div className="my-32  flex items-center justify-center ">
      <div className="mx-auto p-8 border  md:w-1/3 w-full	 rounded-lg ">
        <h1 className="text-3xl text-center  font-bold mb-6">
          Reset Your Password
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Repeat New Password</FormLabel>
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
              variant={"outline"}
              className="w-full bg-secondary-color font-bold p-4 flex items-center rounded hover:bg-secondary"
              type="submit"
            >
              RESET PASSWORD
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;
