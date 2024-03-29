// pages/ProjectForm.tsx or components/ProjectForm.tsx

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import { Button } from "@/lib/@/components/ui/button";
import { Textarea } from "@/lib/@/components/ui/textarea";

// Define the validation schema using zod
const formSchema = z.object({
  name: z.string().min(1, "Project name is required"),
  headline: z.string().min(1, "Headline is required"),
  description: z.string().min(1, "Description is required"),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  skills: z.string(),
  tools: z.string().min(1, "Tools are required"),
});

interface ProjectFormValues {
  name: string;
  headline: string;
  description: string;
  startDate?: string;
  endDate?: string;
  skills: string;
  tools: string;
}

const ProjectForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      headline: "",
      description: "",
      startDate: "",
      endDate: "",
      skills: "",
      tools: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }



return (
  <Form {...form}>
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-6 max-w-xl mx-auto p-4"
    >
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Project Name</FormLabel>
            <FormControl>
              <Input  className="w-full p-2  bg-primary-foreground hover:bg-secondary rounded"  {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="headline"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Project Headline</FormLabel>
            <FormControl>
              <Input className="w-full p-2  bg-primary-foreground hover:bg-secondary rounded"  {...field} />
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
            <FormLabel>Project Description</FormLabel>
            <FormControl>
              <Textarea
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
        name="startDate"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Project Start Date</FormLabel>
            <FormControl>
              <Input className="w-full p-2  bg-primary-foreground hover:bg-secondary rounded" type="date" id="startDate" {...field} />
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
            <FormLabel>Project End Date</FormLabel>
            <FormControl>
              <Input className="w-full p-2  bg-primary-foreground hover:bg-secondary rounded" type="date" id="startDate" {...field} />
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
            <FormLabel>Skills I used</FormLabel>
            <FormControl>
              <Input className="w-full p-2  bg-primary-foreground hover:bg-secondary rounded" type="text" id="skills" {...field} />
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
            <FormLabel>Tools I used</FormLabel>
            <FormControl>
              <Input className="w-full p-2  bg-primary-foreground hover:bg-secondary rounded" type="text" id="skills" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button variant={"outline"} type="submit" className="mt-4 w-full">
        Create New Project
      </Button>
    </form>
  </Form>
);
};
export default ProjectForm;
