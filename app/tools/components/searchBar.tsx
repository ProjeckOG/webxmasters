"use client";
import { Input } from "@/lib/@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/lib/@/components/ui/select";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from "@/lib/@/components/ui/form";
import { Button } from "@/lib/@/components/ui/button";

// Define the schema using Zod
const ToolSearchSchema = z.object({
  searchTerm: z.string().optional(),
  category: z.string().optional(),
  feature: z.string().optional(),
});

export default function Tools() {
  const form = useForm<z.infer<typeof ToolSearchSchema>>({
    resolver: zodResolver(ToolSearchSchema),
    defaultValues: {
      searchTerm: "",
    },
  });
  function onSubmit(values: z.infer<typeof ToolSearchSchema>) {
    console.log(values);
  }

  return (
    <div className="">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-wrap justify-around items-center w-full md:w-3/4 mx-auto gap-4"
        >
          <div className="flex-grow">
            <FormField
              control={form.control}
              name="searchTerm"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Search Tools by Name"
                      className="w-full bg-primary-foreground p-2"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Controller
            name="category"
            control={form.control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="px-4 py-2 border rounded w-40">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="website">Websites</SelectItem>
                    <SelectItem value="webapp">Web Apps</SelectItem>
                    <SelectItem value="mobile">Mobile Apps</SelectItem>
                    <SelectItem value="ecommerce">Ecommerce</SelectItem>
                    <SelectItem value="email">Email Marketing</SelectItem>
                    <SelectItem value="ai">Artificial Intelligence</SelectItem>
                    <SelectItem value="hosting">Web Hosting</SelectItem>
                    <SelectItem value="database">Database</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />

          <Controller
            name="feature"
            control={form.control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="px-4 py-2 border rounded w-40">
                  <SelectValue placeholder="All Features" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="seo">SEO Tools</SelectItem>
                    <SelectItem value="analytics">Analytics</SelectItem>
                    <SelectItem value="ecommerce">
                      eCommerce Integration
                    </SelectItem>
                    <SelectItem value="crm">CRM Features</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />

          <Button
            type="submit"
            variant="outline"
            className="hover:bg-primary-foreground font-bold py-2 px-4 rounded"
          >
            Search
          </Button>
        </form>
      </Form>

      <div className="results-container">
        {/* Results will be displayed here */}
      </div>
    </div>
  );
}
