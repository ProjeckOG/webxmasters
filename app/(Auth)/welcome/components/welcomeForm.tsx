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
   const getUser = async () => {

    const {
      data: { user },
    } = await supabase.auth.getUser();
  }
  getUser()

  const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB
  const ACCEPTED_FILE_TYPES = ['image/jpeg','image/jpg','image/png','image/webp'];
  const router = useRouter()
  const formSchema = z.object({
    avatar: z
    .instanceof(File)
    .optional()
    .refine((file) => {
      return !file || file.size <= MAX_UPLOAD_SIZE;
    }, 'File size must be less than 3MB')
    .refine((file) => {
      return ACCEPTED_FILE_TYPES.includes(file.type);
    }, 'File must be a jpg, png, jpeg, or webp'),
    username: z
      .string()
      .min(3, "Your username must be 3 characters long")
      .max(50),
    birthdate: z
    .date()
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      avatar: user?.avatar_url || 'public/default-photo.png',
      username: "",
      birthdate: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      
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
              name="avatar"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Profile Picture</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      className="w-1/4 p-2  bg-primary-foreground hover:bg-secondary rounded-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Choose your Username!</FormLabel>
                  <FormControl>
                    <Input
                    type="text"
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
