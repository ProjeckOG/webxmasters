"use client"
import { FC } from 'react';
import JobListings from './components/jobListings';
import { Button } from '@/lib/@/components/ui/button';
import Link from 'next/link';




const page: FC = () => {
 

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Job Listings</h1>
      <Button variant={"outline"} className='rounded-full my-5 bg-primary-foreground'><Link href={"/jobs/add"}>Add a Job!</Link></Button>
      <div className="">
       <JobListings />
      </div>
    </div>
  );
};

export default page;
