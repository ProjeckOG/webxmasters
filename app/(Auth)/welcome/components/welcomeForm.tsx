'use client'
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
import { useRouter } from "next/navigation";
import supabase from "@/lib/utils/supabase/client";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

export default function WelcomeForm({ user }) {
 
  const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB
  const ACCEPTED_FILE_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
  ];
  const router = useRouter();
  const formSchema = z.object({
    avatar_url: z.union([z.instanceof(File), z.null()]).optional().refine((file) => {
      return !file || (file.size <= MAX_UPLOAD_SIZE && ACCEPTED_FILE_TYPES.includes(file.type));
    }, {
      message: "File must be less than 3MB and of type JPG, PNG, JPEG, or WEBP"
    }),
    username: z.string().min(3).max(50),
    birthdate: z.string(),
  });
  

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: user?.username || "",
      birthdate: user?.birthdate || "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
     
      // Check if the user object is available and has an id
      if (!user || !user.id) {
        toast.error("User is not authenticated or user data is not available.");
        return;  // Stop execution if there is no user data
      }
      
      const { error } = await supabase
        .from("users")
        .update({ avatar_url: values.avatar_url, username: values.username, birthdate: values.birthdate })
        .eq("id", user.id);  // Now we are sure user and user.id exist
  
      if (error) throw error;
      router.push("/user");
    } catch (error) {
      console.error(error);
      toast.error(`Failed to update profile: ${error.message}`);
    }
  }
  

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <Avatar>
          <AvatarImage
            src={user?.avatar_url || "/default-photo.png"}
            alt="Profile Picture"
            className="h-20 w-20 mx-auto mb-5 md:mb-0 rounded-full"
          />
          <AvatarFallback>Profile Picture</AvatarFallback>
        </Avatar>
        <FormField
          control={form.control}
          name="avatar_url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profile Picture</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept={ACCEPTED_FILE_TYPES.join(',')}
                  onChange={(e) => form.setValue('avatar_url', e.target.files[0] || null)}  // Manually handle file input
                  className="w-full mx-auto p-2 bg-primary-foreground hover:bg-secondary rounded"
              
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
          className="flex items-center p-8 w-full rounded hover:bg-accent-color bg-secondary-color"
        >
          Finish Registration
        </Button>
      </form>
    </Form>
  );
}
function uploadAvatar(arg0: any) {
  throw new Error("Function not implemented.");
}

