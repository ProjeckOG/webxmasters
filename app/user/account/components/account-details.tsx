import React, { useEffect } from "react";
import { Button } from "@/lib/@/components/ui/button";
import { useForm } from "react-hook-form";
import { Input } from "@/lib/@/components/ui/input";
import {
  FormField,
  FormItem,
  FormLabel,
  Form,
  FormControl,
  FormMessage,
} from "@/lib/@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import supabase from "@/lib/utils/supabase/client";
import { toast } from "sonner";
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
    name?: string;
    email?: string;
    phone?: string;
  };
}

const AccountDetails: React.FC<AccountDetailsProps> = ({ userData }) => {
  
  const router = useRouter()
  const formSchema = z.object({
    username: z.string().min(2, "Username must be at least 2 characters long"),
    name: z.string().min(2, "Full name must be at least 2 characters long"),
    email: z.string().min(2, "Enter a valid email address"),
    birthdate: z.date().optional()
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: userData.user_metadata.username || "", // Adjust according to the actual user data structure
      name: userData.user_metadata.full_name || "",
      email: userData.email || "",
      birthdate: userData.user_metadata.birthdate ? new Date(userData.user_metadata.birthdate) : undefined
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { data, error } = await supabase
      .from("users")
      .update({ full_name: values.name, username: values.username, email: values.email, birthdate: values.birthdate})
      .eq("id", userData.id)
      .select();
      if (error) {
        toast("Failed to update: " + error.message); // Simple alert, consider integrating with a UI component for better UX
      } else {
        
        router.refresh()
        toast("Update successful!");
      }
      
  }
  
  useEffect(() => {
    form.reset({
      username: userData.user_metadata.username || "",
      name: userData.user_metadata.full_name || "",
      email: userData.email || "",
      birthdate: userData.user_metadata.birthdate ? new Date(userData.user_metadata.birthdate) : undefined
    });
  }, [userData, form]);
  
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
            name="name"
            render={({ field }) => (
              <FormItem>
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
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
                <FormLabel>BirthDate</FormLabel>
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
            variant={"outline"}
            className="w-full  hover:bg-secondary  font-bold p-4 flex items-center rounded"
          >
            UPDATE ACCOUNT
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AccountDetails;
