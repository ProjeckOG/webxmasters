"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import {  useForm } from "react-hook-form"
import { z } from "zod"
import Select from "react-select"
import { useEffect, useState } from "react"
import { Button } from "@/lib/@/components/ui/button"
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "@/lib/@/components/ui/form"
import { Textarea } from "@/lib/@/components/ui/textarea"
import { Input } from "@/lib/@/components/ui/input"


const customStyles = {
    control: (base: any) => ({
      ...base,
      borderRadius: "0.375rem",
      backgroundColor: "hsl(var(--primary-foreground))", // Tailwind primary-foreground color
      boxShadow: "none",
      "&:hover": {
        borderColor: "#9ca3af",
      },
    }),
    menu: (base: any) => ({
      ...base,
      backgroundColor: "hsl(var(--primary-foreground))", // Tailwind primary-foreground color
    }),
    multiValue: (base: any) => ({
      ...base,
      backgroundColor: "hsl(var(--secondary))", // Tailwind primary-foreground color
    }),
    multiValueLabel: (base: any) => ({
      ...base,
      color: "#ffffff",
    }),
    multiValueRemove: (base: any) => ({
      ...base,
      color: "#ffffff",
      ":hover": {
        backgroundColor: "#1f2937", // A darker shade
        color: "red",
      },
    }),
  };

const formSchema = z.object({
  toolName: z.string().min(2, {
    message: "Tool name must be at least 2 characters.",
  }),
  toolDescription: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  toolWebsite: z.string().url({
    message: "Please enter a valid URL.",
  }),
  categories: z.array(z.string()).nonempty({
    message: "Please select at least one category.",
  }),
  features: z.array(z.string()).nonempty({
    message: "Please select at least one feature.",
  }),
})

export function SuggestToolForm() {
  const [categories, setCategories] = useState([])
  const [features, setFeatures] = useState([])

  useEffect(() => {
    fetch('/api/categories.json')
      .then(response => response.json())
      .then(data => setCategories(data))
    fetch('/api/features.json')
      .then(response => response.json())
      .then(data => setFeatures(data))
  }, [])

  const form = useForm({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (values: any) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="toolName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tool Name</FormLabel>
              <FormControl>
                <Input placeholder="Tool Name" className="bg-primary-foreground" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="toolDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Tool Description" className="bg-primary-foreground" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="toolWebsite"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com" className="bg-primary-foreground" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="categories"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categories</FormLabel>
              <FormControl>
                <Select
                  isMulti
                  options={categories.map((category: any) => ({ value: category.id, label: category.name }))}
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
          name="features"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Features</FormLabel>
              <FormControl  className="bg-primary-foreground">
                <Select
                  isMulti
                  options={features.map((feature: any) => ({ value: feature.id, label: feature.name }))}
                  onChange={(selected) => field.onChange(selected.map((option: any) => option.value))}
                  styles={customStyles}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-primary-foreground" variant={"outline"} className="w-full rounded font-bold">Submit Tool</Button>
      </form>
    </Form>
  )
}
