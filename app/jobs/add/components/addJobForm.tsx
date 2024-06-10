"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import Select from "react-select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/lib/@/components/ui/form";
import { Input } from "@/lib/@/components/ui/input";
import { Button } from "@/lib/@/components/ui/button";
import { Textarea } from "@/lib/@/components/ui/textarea";

const jobSchema = z.object({
  title: z.string().min(2, { message: "Title must be at least 2 characters." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  companyLogo: z.string().optional(), // File upload will handle validation
  location: z.string().min(2, { message: "Location must be selected." }),
  description: z.string().min(10, { message: "Description must be at least 10 characters." }),
  applyLink: z.string().url({ message: "Please enter a valid URL for the application link." }),
  tools: z.array(z.string()).nonempty({ message: "Please select at least one tool." }),
  jobType: z.string().min(2, { message: "Job type must be selected." }),
  salaryRangeMin: z.number().min(0, { message: "Minimum salary must be at least 0." }),
  salaryRangeMax: z.number().min(0, { message: "Maximum salary must be at least 0." }),
  experienceLevel: z.string().min(2, { message: "Experience level must be selected." }),
  benefits: z.array(z.string()).nonempty({ message: "Please add at least one benefit." }),
});

const customStyles = {
  control: (base: any) => ({
    ...base,
    padding: "0.5rem",
    borderColor: "var(--input)",
    borderRadius: "0.375rem",
    backgroundColor: "hsl(var(--primary-foreground))",
    boxShadow: "none",
    "&:hover": {
      borderColor: "var(--input)",
    },
  }),
  menu: (base: any) => ({
    ...base,
    backgroundColor: "hsl(var(--primary-foreground))",
  }),
  multiValue: (base: any) => ({
    ...base,
    backgroundColor: "hsl(var(--primary-foreground))",
  }),
  multiValueLabel: (base: any) => ({
    ...base,
    color: "var(--foreground)",
  }),
  multiValueRemove: (base: any) => ({
    ...base,
    color: "var(--foreground)",
    ":hover": {
      backgroundColor: "var(--foreground)",
      color: "var(--primary-foreground)",
    },
  }),
};

const JobForm = () => {
  const form = useForm({
    resolver: zodResolver(jobSchema),
  });
  
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "benefits",
  });

  const onSubmit = (values: any) => {
    console.log(values);
    // Handle form submission logic here
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
                <Input placeholder="Job Title" {...field} />
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
                <Input placeholder="Company Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormItem>
          <FormLabel>Company Logo</FormLabel>
          <FormControl>
            <Input type="file" {...form.register("companyLogo")} />
          </FormControl>
          <FormMessage />
        </FormItem>
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Select
                  styles={customStyles}
                  options={[
                    { value: "United States", label: "United States" },
                    { value: "Canada", label: "Canada" },
                    { value: "United Kingdom", label: "United Kingdom" },
                    // Add more countries as needed
                  ]}
                  classNamePrefix="react-select"
                  onChange={(selected) => field.onChange(selected?.value)}
                />
              </FormControl>
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
                <Textarea placeholder="Job Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="applyLink"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Application Link</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com/apply" {...field} />
              </FormControl>
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
                <Select
                  isMulti
                  styles={customStyles}
                  options={[
                    { value: "React", label: "React" },
                    { value: "Node.js", label: "Node.js" },
                    { value: "Tailwind CSS", label: "Tailwind CSS" },
                    { value: "Next.js", label: "Next.js" },
                  ]}
                  classNamePrefix="react-select"
                  onChange={(selected) =>
                    field.onChange(selected.map((option: any) => option.value))
                  }
                />
              </FormControl>
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
                  styles={customStyles}
                  options={[
                    { value: "Full-Time", label: "Full-Time" },
                    { value: "Part-Time", label: "Part-Time" },
                    { value: "Contract", label: "Contract" },
                  ]}
                  classNamePrefix="react-select"
                  onChange={(selected) => field.onChange(selected?.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="salaryRangeMin"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Minimum Salary</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Minimum Salary" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="salaryRangeMax"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Maximum Salary</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Maximum Salary" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="experienceLevel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Experience Level</FormLabel>
              <FormControl>
                <Select
                  styles={customStyles}
                  options={[
                    { value: "Junior", label: "Junior" },
                    { value: "Mid-Level", label: "Mid-Level" },
                    { value: "Senior", label: "Senior" },
                  ]}
                  classNamePrefix="react-select"
                  onChange={(selected) => field.onChange(selected?.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <FormLabel>Benefits</FormLabel>
          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center gap-2 mb-2">
              <Input {...form.register(`benefits.${index}`)} placeholder="Benefit" className="flex-grow" />
              <Button type="button" variant="outline" onClick={() => remove(index)}>
                Remove
              </Button>
            </div>
          ))}
          <Button type="button" variant="outline" onClick={() => append('')}>
            Add Benefit
          </Button>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default JobForm;
