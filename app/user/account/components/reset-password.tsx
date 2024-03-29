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
import { Toaster } from "@/lib/@/components/ui/sonner";
import supabase from "@/lib/utils/supabase/client";
import { createClient } from "@/lib/utils/supabase/server";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";



const ResetPassword: React.FC = () => {
  const formSchema = z.object({
    currentPassword: z.string().min(8, "Enter your current Password"),
    password: z.string().min(8, "You must enter a valid password"),
    confirmPassword: z.string().min(8, "Repeat your new password!"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentPassword: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.currentPassword !== userData?.password) {
      toast("Your current password is incorrect");
      return;
    }
     // Check if the new password and confirm password match
     if (values.password !== values.confirmPassword) {
      toast("Your passwords do not match");
      return;
    }
    try {
      const { error } = await supabase.auth.updateUser({
        password: values.password,
      });

      if (error) throw error;

      toast("Your password was updated successfully!");
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
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="currentPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Password</FormLabel>
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
          type="submit"
            variant={"outline"}
            className="w-full bg-secondary-color font-bold p-4 flex items-center rounded hover:bg-secondary"
          >
            UPDATE PASSWORD
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ResetPassword;
