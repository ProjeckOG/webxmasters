import { Button } from "@/lib/@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/lib/@/components/ui/form";
import { Input } from "@/lib/@/components/ui/input";
import { Textarea } from "@/lib/@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ProfileDetails = () => {

  const formSchema = z.object({
    profilePicture: z.string(),
    title: z.string().min(1, "Your Title must be longer than 1 character"),
    shortDescription: z.string().min(20, "Your short description must be longer 20 characters"),
    website: z.string(),
    github: z.string(),
    linkedin: z.string(),
    facebook: z.string(),
    instagram: z.string(),
    twitter: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      shortDescription: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div>
      <div className="mb-3 ">
      <Image width={50} height={50} src='/googlelogo.png'className="bg-gray-300 rounded-3xl mx-auto mb-3" alt="Profile Picture"/>
        <h2 className="block text-sm text-center font-bold mb-2">
          PROFILE PICTURE
        </h2>
       
      </div>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <FormField
            control={form.control}
            name="profilePicture"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profile Picture</FormLabel>
                <FormControl>
                  <Input
                  type="file"
                    className="w-full p-2  bg-primary-foreground hover:bg-secondary rounded"
                    placeholder=""
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                Click here to upload a image
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
      <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    className="w-full p-2  bg-primary-foreground hover:bg-secondary rounded"
                    placeholder=""
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="shortDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Short Description</FormLabel>
                <FormControl>
                  <Textarea
                    className="w-full p-2  bg-primary-foreground hover:bg-secondary rounded"
                    placeholder=""
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input
                    className="w-full p-2  bg-primary-foreground hover:bg-secondary rounded"
                    placeholder=""
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="github"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Github</FormLabel>
                <FormControl>
                  <Input
                    className="w-full p-2  bg-primary-foreground hover:bg-secondary rounded"
                    placeholder=""
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="linkedin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>LinkedIn</FormLabel>
                <FormControl>
                  <Input
                    className="w-full p-2  bg-primary-foreground hover:bg-secondary rounded"
                    placeholder=""
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="facebook"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Facebook</FormLabel>
                <FormControl>
                  <Input
                    className="w-full p-2  bg-primary-foreground hover:bg-secondary rounded"
                    placeholder=""
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="instagram"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Instagram</FormLabel>
                <FormControl>
                  <Input
                    className="w-full p-2  bg-primary-foreground hover:bg-secondary rounded"
                    placeholder=""
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="twitter"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Twitter</FormLabel>
                <FormControl>
                  <Input
                    className="w-full p-2  bg-primary-foreground hover:bg-secondary rounded"
                    placeholder=""
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
      <Button variant={"outline"} type="submit" className="w-full bg-secondary-color hover:bg-accent-color font-bold py-2 px-4 rounded">
        UPDATE PROFILE
      </Button>
      </form>
    </Form>
    </div>

  );
};

export default ProfileDetails;
