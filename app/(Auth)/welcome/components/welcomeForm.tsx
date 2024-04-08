"use client";
import { Button } from "@/lib/@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/lib/@/components/ui/form";
import { Input } from "@/lib/@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { redirect, useRouter } from "next/navigation";
import supabase from "@/lib/utils/supabase/client";

export default function WelcomeForm() {
    const router = useRouter()
  const formSchema = z.object({
    username: z
      .string()
      .min(3, "Your username must be 3 characters long")
      .max(50),
    birthdate: z
      .string()
      .min(3, "Your username must be 3 characters long")
      .max(50),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      birthdate: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log(user)
      const { error } = await supabase
        .from("users")
        .update({ username: values.username, birthdate: values.birthdate })
        .eq("id", user.id);
        router.push("/user")
    } catch (error) {
      // Handle errors (e.g., showing a message to the user)
      console.error(error);
      // Optionally, update state to show an error message on the UI
    }
  }
  return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Choose your Username!</FormLabel>
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
              name="birthdate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Birthdate</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
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
              Finish Registration
            </Button>
          </form>
        </Form>
  );
}
