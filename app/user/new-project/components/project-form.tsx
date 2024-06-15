"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import Select from "react-select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/lib/@/components/ui/form";
import { Input } from "@/lib/@/components/ui/input";
import { Textarea } from "@/lib/@/components/ui/textarea";
import { Button } from "@/lib/@/components/ui/button";


const projectSchema = z.object({
  name: z.string().min(2, { message: "Project name must be at least 2 characters." }),
  description: z.string().min(10, { message: "Description must be at least 10 characters." }),
  startDate: z.string().nonempty({ message: "Start date must be selected." }),
  endDate: z.string().optional(),
  skills: z.array(z.string()).nonempty({ message: "Please select at least one skill." }),
  tools: z.array(z.string()).nonempty({ message: "Please select at least one tool." }),
});

const customStyles = {
  control: (base: any) => ({
    ...base,
    borderRadius: "0.375rem",
    backgroundColor: "hsl(var(--primary-foreground))",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#9ca3af",
    },
  }),
  menu: (base: any) => ({
    ...base,
    backgroundColor: "hsl(var(--primary-foreground))",
  }),
  multiValue: (base: any) => ({
    ...base,
    backgroundColor: "hsl(var(--secondary))",
  }),
  multiValueLabel: (base: any) => ({
    ...base,
    color: "#ffffff",
  }),
  multiValueRemove: (base: any) => ({
    ...base,
    color: "#ffffff",
    ":hover": {
      backgroundColor: "#1f2937",
      color: "red",
    },
  }),
};

const CreateProjectForm = () => {
  const form = useForm({
    resolver: zodResolver(projectSchema),
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Name</FormLabel>
              <FormControl>
                <Input placeholder="Project Name" {...field} className="bg-primary-foreground" />
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
                <Textarea placeholder="Project Description" {...field} className="bg-primary-foreground" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Start Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} className="bg-primary-foreground" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="endDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>End Date (optional)</FormLabel>
              <FormControl>
                <Input type="date" {...field} className="bg-primary-foreground" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="skills"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Skills Used</FormLabel>
              <FormControl>
                <Select
                  isMulti
                  options={[
                    { value: "React", label: "React" },
                    { value: "Node.js", label: "Node.js" },
                    { value: "Tailwind CSS", label: "Tailwind CSS" },
                    { value: "Next.js", label: "Next.js" },
                    // Add more skills as needed
                  ]}
                  onChange={(selected) => field.onChange(selected.map((option: any) => option.value))}
                  styles={customStyles}
                />
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
              <FormLabel>Tools Used</FormLabel>
              <FormControl>
                <Select
                  isMulti
                  options={[
                    { value: "GitHub", label: "GitHub" },
                    { value: "JIRA", label: "JIRA" },
                    { value: "Slack", label: "Slack" },
                    { value: "VS Code", label: "VS Code" },
                    // Add more tools as needed
                  ]}
                  onChange={(selected) => field.onChange(selected.map((option: any) => option.value))}
                  styles={customStyles}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="outline" className="w-full rounded font-bold">Submit Project</Button>
      </form>
    </Form>
  );
};

export default CreateProjectForm;
