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
import { login } from "@/lib/app/(Auth)/auth/login/actions";
import supabase from "@/lib/utils/supabase/client";
import { createClient } from "@/lib/utils/supabase/server";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

interface ResetPasswordProps {
  userData: {
    email: string;
    app_metadata: {
      // Changed from raw_app_meta_data to app_metadata
      provider: string;
      providers: string[];
    };
  };
}

const ResetPassword: React.FC<ResetPasswordProps> = ({ userData }) => {
  const [emailSent, setEmailSent] = useState(false);

  const formSchema = z.object({
    provider: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      provider: "",
    },
  });

  async function onSubmit() {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(
        userData.email,
        {
          redirectTo: "http://localhost:3000/resetpassword",
        }
      );
      if (error) throw error;
      toast("Check your email for the reset password link!");
      setEmailSent(true);
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
          <h1 className="text-xl font-bold mb-6">Email Sent Successfully!</h1>
          <p>Please check your email for the reset password reset link.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <Button
            type="submit"
            variant={"outline"}
            className="w-full uppercase text-xl m-3 p-10 flex items-center font-bold hover:bg-destructive"
          >
            SEND PASSWORD RESET TO YOUR EMAIL
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ResetPassword;
function setEmailSent(arg0: boolean) {
  throw new Error("Function not implemented.");
}
