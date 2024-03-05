import { Button } from "@/lib/@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/lib/@/components/ui/form";
import { Input } from "@/lib/@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

const WorkPreferences = () => {
  const formSchema = z.object({
    profilePicture: z.string(),
    title: z.string().min(1, "Your Title must be longer than 1 character"),
    shortDescription: z
      .string()
      .min(20, "Your short description must be longer 20 characters"),
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
    <div className="flex flex-col justify-center mb-10 ">
      <h2 className="  text-center text-2xl font-bold my-10">
        WORK PREFERENCES
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
            control={form.control}
            name="dateEnd"
            render={({ field }) => (
              <FormItem>
                
                <FormControl>
                  <Input
                  type="radio"
                    className="w-full p-2  bg-secondary rounded"
                    placeholder="Full-Time"
                    {...field}
                  />
                </FormControl>
                <FormLabel>Full-time</FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="jobPosition"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Position</FormLabel>
                <FormControl>
                  <Input
                    className="w-full p-2  bg-secondary rounded"
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
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input
                    className="w-full p-2  bg-secondary rounded"
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
            name="dateStart"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date Started</FormLabel>
                <FormControl className="w-full md:w-1/2">
                  <Input
                    className="w-full p-2  bg-secondary rounded"
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
            name="dateEnd"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date End</FormLabel>
                <FormControl className="w-full md:w-1/2">
                  <Input
                    className="w-full p-2  bg-secondary rounded"
                    placeholder=""
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="mb-6">
            <label className="text-xl font-bold mb-3 block mt-10">
              WORK AVAILABILITY
            </label>
            <div className="mb-3">
              <label className="block ">
                <input
                  type="radio"
                  name="availability"
                  className="form-radio h-5 w-5"
                />{" "}
                FULL-TIME
              </label>
              <label className="block ">
                <input
                  type="radio"
                  name="availability"
                  className="form-radio h-5 w-5"
                />{" "}
                PART-TIME
              </label>
              <label className="block ">
                <input
                  type="radio"
                  name="availability"
                  className="form-radio h-5 w-5"
                />{" "}
                FREELANCE/CONTRACT
              </label>
              <label className="block ">
                <input
                  type="radio"
                  name="availability"
                  className="form-radio h-5 w-5"
                />{" "}
                ANY
              </label>
            </div>
          </div>
          <div className="uppercase">
            <label className="text-xl font-bold mb-3 block mt-10">
              Work History
            </label>

            <label className="block mb-3 text-sm font-bold ">
              Job Position
            </label>
            <input className="w-full p-2  bg-secondary rounded" type="text" />

            <label className="block mb-3 text-sm font-bold">Company</label>
            <input className="w-full p-2  bg-secondary rounded" type="text" />
            <div className="flex mb-3">
              <div className="w-full md:w-1/2 mr-2">
                <label className="block mb-2 text-sm font-bold">
                  Date Started
                </label>
                <input
                  className="w-full p-2  bg-secondary rounded"
                  type="text"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block mb-2 text-sm font-bold">Date EnD</label>
                <input
                  className="w-full p-2  bg-secondary rounded"
                  type="text"
                />
              </div>
            </div>
            <button className="text-sm bg-blue-600 hover:bg-blue-700 py-1 px-2 rounded">
              + Add Another Job
            </button>
          </div>
          <div className="mb-6 uppercase">
            <label className="text-xl font-bold mb-3 block mt-10">
              Education
            </label>

            <label className="block mb-2 text-sm font-bold">
              School / University
            </label>
            <input className="w-full p-2  bg-secondary rounded" type="text" />

            <div className="flex mb-3">
              <div className="w-full md:w-1/2 mr-2">
                <label className="block mb-2 text-sm font-bold">
                  DEGREE TYPE
                </label>
                <input
                  className="w-full p-2  bg-secondary rounded"
                  type="text"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block mb-2 text-sm font-bold">
                  COMPLETION YEAR
                </label>
                <input
                  className="w-full p-2  bg-secondary rounded"
                  type="text"
                />
              </div>
            </div>

            <button className="text-sm bg-blue-600 hover:bg-blue-700 py-1 px-2 rounded">
              + Add More Education
            </button>
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold">
              ARE YOU LOOKING FOR WORK
            </label>
            <div className="relative inline-block w-10 align-middle select-none">
              <input
                type="checkbox"
                name="looking_for_work"
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label
                htmlFor="looking_for_work"
                className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
          </div>
          <Button
            variant={"outline"}
            className="w-full bg-secondary-color py-2 px-4 rounded hover:bg-accent-color"
          >
            UPDATE
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default WorkPreferences;
