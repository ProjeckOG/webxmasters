"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/lib/@/components/ui/card";
import { Button } from "@/lib/@/components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";

interface Job {
  id: number;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  description: string;
  applyLink: string;
  tools: string[];
  date: string;
  dateAdded: string; // Add dateAdded field
  jobType: string;
  salaryRange: string;
  experienceLevel: string;
  benefits: string[];
}

const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    if (id) {
      fetch("/api/jobs.json")
        .then((response) => response.json())
        .then((data: Job[]) => {
          const job = data.find((job) => job.id === Number(id));
          setJob(job || null);
        });
    }
  }, [id]);

  if (!job) {
    return <div>Loading...</div>;
  }

  const daysAgo = Math.floor(
    (new Date().getTime() - new Date(job.dateAdded).getTime()) /
      (1000 * 60 * 60 * 24)
  );

  return (
    <div className="container mx-auto p-4">
      <Card className="border p-6 rounded-lg shadow-sm">
        <CardContent className="flex flex-col gap-6">
          <div className="flex items-center gap-6">
            {job.companyLogo && (
              <img
                src={job.companyLogo}
                alt={job.company}
                className="w-20 h-20 object-contain"
              />
            )}
            <div>
              <CardTitle className="text-3xl font-bold">{job.title}</CardTitle>
              <CardDescription className="text-xl text-gray-600">
                {job.company} - <span className="italic">{job.location}</span>
              </CardDescription>
            </div>
          </div>

          <div className="flex gap-4 flex-wrap">
            <span className="border px-3 py-1 rounded-full text-sm font-medium">{job.jobType}</span>
            {job.salaryRange && (
              <span className="border px-3 py-1 rounded-full text-sm font-medium">{job.salaryRange}</span>
            )}
            {job.experienceLevel && (
              <span className="border px-3 py-1 rounded-full text-sm font-medium">{job.experienceLevel}</span>
            )}
            <span className="border px-3 py-1 rounded-full text-sm font-medium">Added {daysAgo} days ago</span>
          </div>
          
          <div className="my-4">
            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <p className="text-base">{job.description}</p>
          </div>
          
          {job.tools && job.tools.length > 0 && (
            <div className="my-4">
              <h3 className="text-xl font-semibold mb-2">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {job.tools.map((tool) => (
                  <span key={tool} className="bg-secondary px-3 py-1 rounded-full text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {job.benefits && job.benefits.length > 0 && (
            <div className="my-4">
              <h3 className="text-xl font-semibold mb-2">Benefits</h3>
              <ul className="list-disc list-inside">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="text-base">{benefit}</li>
                ))}
              </ul>
            </div>
          )}

          <Button variant={"outline"} className="mt-6 rounded-full">
            <Link href={job.applyLink}>Apply Now</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobPage;
