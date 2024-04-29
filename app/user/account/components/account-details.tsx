"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import supabase from "@/lib/utils/supabase/client";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/lib/@/components/ui/form";
import { Button } from "@/lib/@/components/ui/button";
import { Input } from "@/lib/@/components/ui/input";
import { useRouter } from "next/navigation";

// Define AccountDetailsProps type here
interface AccountDetailsProps {
  userData: {
    id: any;
    user_metadata: {
      birthdate: Date | undefined;
      username: string;
      full_name: string;
    };
    email?: string;
  };
}
export const revalidate = 0; 

const formSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters long"),
  name: z.string().min(2, "Full name must be at least 2 characters long"),
  email: z.string().email("Enter a valid email address"),
  birthdate: z
    .string()
    .optional()
    .nullable()
    .refine((date) => {
      return !date || !isNaN(new Date(date).getTime());
    }, "Invalid date format"),
});

const usePersistedForm = (defaultValues: z.infer<typeof formSchema>) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      form.reset(JSON.parse(storedData));
    }
  }, [form]);

  useEffect(() => {
    const subscription = form.watch((value) => {
      localStorage.setItem("formData", JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [form]);

  return form;
};

const AccountDetails: React.FC<AccountDetailsProps> = ({ userData }) => {
  const router = useRouter();

  const defaultValues = {
    username: userData.user_metadata.username || "",
    name: userData.user_metadata.full_name || "",
    email: userData.email || "",
    birthdate: userData.user_metadata.birthdate
      ? new Date(userData.user_metadata.birthdate).toISOString().slice(0, 10)
      : undefined,
  };

  const form = usePersistedForm(defaultValues);
  useEffect(() => {
    // Update form default values on userData change
    form.reset({
      username: userData.user_metadata.username || "",
      name: userData.user_metadata.full_name || "",
      email: userData.email || "",
      birthdate: userData.user_metadata.birthdate
        ? new Date(userData.user_metadata.birthdate).toISOString().slice(0, 10)
        : "",
    });
  }, [userData, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { data, error } = await supabase
      .from("users")
      .update({
        username: values.username,
        full_name: values.name,
        email: values.email,
        birthdate: values.birthdate ? values.birthdate : null,
      })
      .eq("id", userData.id);

    if (error) {
      toast.error("Failed to update: " + error.message);
    } else {
      toast.success("Update successful!");
      // Consider commenting out the next line if you want to avoid refreshing.
      // router.refresh();
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    className="w-full p-2 bg-primary-foreground hover:bg-secondary rounded"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    className="w-full p-2 bg-primary-foreground hover:bg-secondary rounded"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    className="w-full p-2 bg-primary-foreground hover:bg-secondary rounded"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="birthdate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Birthdate</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    className="w-full p-2 bg-primary-foreground hover:bg-secondary rounded"
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
            className="w-full hover:bg-secondary uppercase text-xl font-bold p-10 flex items-center justify-center rounded"
          >
            Update Account
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AccountDetails;
