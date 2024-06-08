"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/lib/@/components/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/lib/@/components/ui/card";

interface Job {
  id: number;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  date: string;
  dateAdded: string;
}

const JobTeaser = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/jobs.json")
      .then((response) => response.json())
      .then((data: Job[]) => {
        setJobs(data.slice(0, 3)); // Get the first 3 jobs for the teaser
        setLoading(false);
      });
  }, []);

  const calculateDaysAgo = (dateAdded: string) => {
    const currentDate = new Date();
    const addedDate = new Date(dateAdded);
    const differenceInTime = currentDate.getTime() - addedDate.getTime();
    return Math.floor(differenceInTime / (1000 * 3600 * 24));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <h2 className="text-3xl font-bold text-center mb-6 uppercase">
        Recently Added Jobs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <Card key={job.id} className="border p-4 rounded-lg shadow-sm">
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={job.companyLogo}
                  alt={job.company}
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <CardTitle className="text-xl font-semibold">
                    {job.title}
                  </CardTitle>
                  <CardDescription className="text-md ">
                    {job.company} - {" "}
                    <span className="italic">{job.location}</span>
                    <p className="text-sm text-gray-300">
                      Added {calculateDaysAgo(job.dateAdded)} days ago
                    </p>
                  </CardDescription>
                </div>
              </div>

              <Button variant="outline" className="mt-4 rounded-full hover:bg-primary-foreground">
                <Link href={`/jobs/${job.id}`}>View Job</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Button variant="outline" className="rounded-full">
          <Link href="/jobs">See All Jobs</Link>
        </Button>
      </div>
    </div>
  );
};

export default JobTeaser;
