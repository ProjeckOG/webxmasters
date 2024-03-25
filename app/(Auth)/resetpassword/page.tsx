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
import { createClient } from "@/lib/utils/supabase/server";
import { zodResolver } from "@hookform/resolvers/zod";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ResetPassword = () => {
  const formSchema = z.object({
    password: z.string().min(8, "You must enter a valid password"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="my-32  flex items-center justify-center ">
      <div className="mx-auto p-8 border  md:w-1/3 w-full	 rounded-lg ">
        <h1 className="text-3xl text-center  font-bold mb-6">Reset Your Password</h1>
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
                  <FormLabel>Repeat New Password</FormLabel>
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
              variant={"outline"}
              className="w-full bg-secondary-color font-bold p-4 flex items-center rounded hover:bg-secondary"
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
