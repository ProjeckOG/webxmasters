import { Button } from "@/lib/@/components/ui/button";
import { Checkbox } from "@/lib/@/components/ui/checkbox";
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
import { Switch } from "@/lib/@/components/ui/switch";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const WorkPreferences = () => {
  const formSchema = z.object({
    availability: z.enum([
      "FULL-TIME",
      "PART-TIME",
      "FREELANCE/CONTRACT",
      "FLEXIBLE",
      "UNAVAILABLE",
    ]),
    jobPosition: z.string(),
    company: z.string(),
    dateStarted: z.string(),
    dateEnded: z.string(),
    college: z.string(),
    degreeType: z.string(),
    gradYear: z.string(),
    lookingForWork: z.boolean(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      availability: "UNAVAILABLE",
      jobPosition: "",
      company: "",
      dateStarted: "",
      dateEnded: "",
      college: "",
      degreeType: "",
      gradYear: "",
      lookingForWork: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="flex flex-col justify-center mb-10 ">
      <h1 className="  text-center text-2xl font-bold my-10">
        WORK PREFERENCES
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <h2 className="text-xl font-bold block mt-10">WORK AVAILABILITY</h2>
          <FormField
            control={form.control}
            name="jobPosition"
            render={({ field }) => (
              <FormItem className="flex items-center">
                <FormControl>
                  <Input
                    type="radio"
                    name="availability"
                    className="form-radio h-5 w-5 mr-2"
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
              <FormItem className="flex items-center">
                <FormControl>
                  <Input
                    type="radio"
                    name="availability"
                    className="form-radio h-5 w-5 mr-2"
                  />
                </FormControl>
                <FormLabel>Part-time</FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="jobPosition"
            render={({ field }) => (
              <FormItem className="flex items-center">
                <FormControl>
                  <Input
                    type="radio"
                    name="availability"
                    className="form-radio h-5 w-5 mr-2"
                  />
                </FormControl>
                <FormLabel>Freelance / Contract</FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="jobPosition"
            render={({ field }) => (
              <FormItem className="flex items-center">
                <FormControl>
                  <Input
                    type="radio"
                    name="availability"
                    className="form-radio h-5 w-5 mr-2"
                  />
                </FormControl>
                <FormLabel>Flexible</FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="jobPosition"
            render={({ field }) => (
              <FormItem className="flex items-center">
                <FormControl>
                  <Input
                    type="radio"
                    name="availability"
                    className="form-radio h-5 w-5 mr-2"
                  />
                </FormControl>
                <FormLabel>Unavailable</FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          <h2 className="text-xl font-bold mb-3 block mt-10">WORK HISTORY</h2>

          <FormField
            control={form.control}
            name="jobPosition"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Position</FormLabel>
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
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
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
          <div className="flex w-full md:w-3/4 justify-between mb-3">
            <FormField
              control={form.control}
              name="dateStarted"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date Started</FormLabel>
                  <FormControl>
                    <Input
                      type="month"
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
              name="dateEnded"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date Ended</FormLabel>
                  <FormControl>
                    <Input
                      type="month"
                      className="w-full p-2  bg-primary-foreground hover:bg-secondary rounded"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button variant={"outline"} className="flex items-center p-3 rounded">
            + Add Another Job
          </Button>

          <h2 className="text-xl font-bold mb-3 block mt-10">Education</h2>
          <FormField
            control={form.control}
            name="college"
            render={({ field }) => (
              <FormItem>
                <FormLabel>School / University</FormLabel>
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
            name="degreeType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Degree Type</FormLabel>
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
            name="gradYear"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Completion Year</FormLabel>
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
          <Button variant={"outline"} className="flex items-center p-3 rounded">
            + Add Another School
          </Button>
          <FormField
            control={form.control}
            name="lookingForWork"
            render={({ field }) => (
              <FormItem
                className={`flex flex-row items-center justify-between rounded-lg border p-4 hover:ring ${
                  field.value ? "bg-secondary " : "bg-primary-foreground"
                }`}
              >
                <FormLabel className="text-base font-bold underline">
                  {`${
                    field.value
                      ? "You are available for Work"
                      : "You are unavaible for Work"
                  }`}
                </FormLabel>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className={`w-12 ring-current rounded-full ${
                      field.value
                        ? "bg-success"
                        : "bg-primary-foreground"
                    }`}
                  />
                </FormControl>
              </FormItem>
            )}
          />
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
