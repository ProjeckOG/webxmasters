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
import { signup } from "../../auth/sign-up/actions";
import { useRouter } from "next/navigation";

export default function EmailForm() {
  const router = useRouter();

  const formSchema = z.object({
    full_name: z.string().min(1, "Your name must be 1 characters long").max(60),
    username: z
      .string()
      .min(3, "Your username must be 3 characters long")
      .max(50),
    email: z.string().min(2, "You need to enter a valid email address").max(50),
    password: z.string().min(8, "You password must be 8 characters long"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await signup(
        values.full_name,
        values.username,
        values.email,
        values.password
      );

      toast("You have successfully signed up! Now go Check your email");
      router.push("/signup/check-email");
    } catch (error) {
      // Handle errors (e.g., showing a message to the user)
      console.error(error);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex-wrap justify-between md:flex w-full">
          <FormField
            control={form.control}
            name="full_name"
            render={({ field }) => (
              <FormItem className="flex-1 mr-0 md:mr-2">
                <FormLabel>Name</FormLabel>
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
            name="username"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Username</FormLabel>
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
        </div>
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
  );
}
