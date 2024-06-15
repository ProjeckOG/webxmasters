"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/lib/@/components/ui/button';
import { Input } from '@/lib/@/components/ui/input';

interface FormData {
  email: string;
}

const EmailOptInForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Email submitted:', data.email);
    // Handle form submission logic here, e.g., send the email to your backend
  };

  return (
    <div className="border p-6 rounded-lg shadow-md my-20">
      <h2 className="text-xl font-bold text-center mb-4 uppercase">Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex  items-center gap-4">
        <Input
          type="email"
          placeholder="Enter your email"
          {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Enter a valid email' } })}
          className="bg-primary-foreground w-full"
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        <Button type="submit" variant="outline" className="rounded font-bold hover:bg-primary-foreground uppercase">
          Subscribe
        </Button>
      </form>
    </div>
  );
};

export default EmailOptInForm;
