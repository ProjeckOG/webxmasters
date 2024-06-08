"use client";
import { Button } from "@/lib/@/components/ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, Form } from "@/lib/@/components/ui/form";
import { Input } from "@/lib/@/components/ui/input";
import { Textarea } from "@/lib/@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@radix-ui/react-select";
import { useForm } from "react-hook-form";
import { z } from "zod";



const formSchema = z.object({
  title: z.string().min(2, { message: "Title must be at least 2 characters." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  companyLogo: z.string().url({ message: "Invalid URL" }),
  location: z.string().min(2, { message: "Location must be at least 2 characters." }),
  description: z.string().min(10, { message: "Description must be at least 10 characters." }),
  applyLink: z.string().url({ message: "Invalid URL" }),
  tools: z.array(z.string()).min(1, { message: "At least one tool is required." }),
  date: z.string().min(2, { message: "Date is required." }),
  dateAdded: z.string().min(2, { message: "Date added is required." }),
  jobType: z.string().min(2, { message: "Job type is required." }),
  salaryRange: z.string().min(2, { message: "Salary range is required." }),
  experienceLevel: z.string().min(2, { message: "Experience level is required." }),
  benefits: z.array(z.string()).min(1, { message: "At least one benefit is required." }),
});

export function AddJobForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      company: "",
      companyLogo: "",
      location: "",
      description: "",
      applyLink: "",
      tools: [""],
      date: "",
      dateAdded: "",
      jobType: "",
      salaryRange: "",
      experienceLevel: "",
      benefits: [""],
    },
  });

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    // Handle form submission, e.g., send data to API
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input className="bg-primary-foreground"  placeholder="Job Title" {...field} />
              </FormControl>
              <FormDescription>This is the job title.</FormDescription>
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
                <Input className="bg-primary-foreground"  placeholder="Company Name" {...field} />
              </FormControl>
              <FormDescription>This is the company name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyLogo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Logo URL</FormLabel>
              <FormControl>
                <Input className="bg-primary-foreground"  placeholder="https://example.com/logo.png" {...field} />
              </FormControl>
              <FormDescription>This is the URL for the company logo.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input className="bg-primary-foreground"  placeholder="Job Location" {...field} />
              </FormControl>
              <FormDescription>This is the job location.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea className="bg-primary-foreground"  placeholder="Job Description" {...field} />
              </FormControl>
              <FormDescription>This is the job description.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="applyLink"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apply Link</FormLabel>
              <FormControl>
                <Input className="bg-primary-foreground"  placeholder="https://example.com/apply" {...field} />
              </FormControl>
              <FormDescription>This is the URL for applying to the job.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tools"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tools</FormLabel>
              <FormControl>
                <Input className="bg-primary-foreground"  placeholder="Comma separated tools" {...field} />
              </FormControl>
              <FormDescription>List of tools required for the job.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormDescription>This is the job posting date.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="jobType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Type</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue className="bg-primary-foreground"  placeholder="Select Job Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Full-Time">Full-Time</SelectItem>
                    <SelectItem value="Part-Time">Part-Time</SelectItem>
                    <SelectItem value="Contract">Contract</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>This is the job type.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="salaryRange"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Salary Range</FormLabel>
              <FormControl>
                <Input className="bg-primary-foreground"  placeholder="$50,000 - $70,000" {...field} />
              </FormControl>
              <FormDescription>This is the salary range for the job.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="experienceLevel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Experience Level</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue className="bg-primary-foreground"  placeholder="Select Experience Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Junior">Junior</SelectItem>
                    <SelectItem value="Mid-Level">Mid-Level</SelectItem>
                    <SelectItem value="Senior">Senior</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>This is the required experience level.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="benefits"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Benefits</FormLabel>
              <FormControl>
                <Textarea className="bg-primary-foreground"  placeholder="Comma separated benefits" {...field} />
              </FormControl>
              <FormDescription>List of benefits for the job.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit Job</Button>
      </form>
    </Form>
  );
}
