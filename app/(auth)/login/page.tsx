"use client"

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { Checkbox } from "@/lib/@/components/ui/checkbox";
import { Button } from "@/lib/@/components/ui/button";

const loginSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const signupSchema = loginSchema.extend({
  terms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const schema = isLogin ? loginSchema : signupSchema;

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      terms: false,
    },
  });

  const onSubmit = (values: z.infer<typeof schema>) => {
    console.log(values);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    form.reset(); // Reset form fields when toggling between login and signup
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md" style={{ backgroundColor: 'hsl(var(--card))', color: 'hsl(var(--card-foreground))', borderColor: 'hsl(var(--border))' }}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel style={{ color: 'hsl(var(--foreground))' }}>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} className="mt-1 block w-full p-2 border rounded-md shadow-sm" style={{ backgroundColor: 'hsl(var(--input))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel style={{ color: 'hsl(var(--foreground))' }}>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Enter your password" {...field} className="mt-1 block w-full p-2 border rounded-md shadow-sm" style={{ backgroundColor: 'hsl(var(--input))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {!isLogin && (
            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-3">
                  <Checkbox id="terms" {...field} />
                  <FormLabel htmlFor="terms" style={{ color: 'hsl(var(--foreground))' }}>
                    I accept the terms and conditions
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <Button type="submit" style={{ backgroundColor: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }}>
            {isLogin ? "Log in" : "Sign up"}
          </Button>
        </form>
      </Form>
      <Button variant="link" onClick={toggleForm} className="mt-4" style={{ color: 'hsl(var(--accent))' }}>
        {isLogin ? "Don't have an account? Sign up" : "Already have an account? Log in"}
      </Button>
    </div>
  );
}
