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
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Password</FormLabel>
                <FormControl>
                  <Input
                    className="w-full p-2  bg-secondary rounded"
                    
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
                    className="w-full p-2  bg-secondary rounded"
                    
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
                    className="w-full p-2  bg-secondary rounded"
                    
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
            UPDATE PASSWORD
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ResetPassword;
