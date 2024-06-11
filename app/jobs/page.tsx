"use client";
import { FC } from "react";
import JobListings from "./components/jobListings";
import { Button } from "@/lib/@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AddAJob from "./components/addAJob";

const page: FC = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2 text-primary">Job Listings</h1>
        <p className="text-lg text-muted-foreground">
          Explore the latest job opportunities tailored just for you. Click on a job to learn more and apply!
        </p>
      </div>

     <AddAJob/>

      <div className="mt-10">
        <JobListings />
      </div>
    </div>
  );
};

export default page;
