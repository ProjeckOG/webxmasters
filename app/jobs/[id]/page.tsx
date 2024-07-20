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
import { MapPin, Calendar, Briefcase, DollarSign, User } from 'lucide-react';

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
  dateAdded: string;
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
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  const daysAgo = Math.floor(
    (new Date().getTime() - new Date(job.dateAdded).getTime()) /
      (1000 * 60 * 60 * 24)
  );

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <Card className="border rounded-lg shadow-lg overflow-hidden bg-card">
        <div className="bg-accent p-6 text-accent-foreground">
          <div className="flex items-center gap-4">
            {job.companyLogo && (
              <img
                src={job.companyLogo}
                alt={job.company}
                className="w-20 h-20 object-contain bg-background rounded-full p-2"
              />
            )}
            <div>
              <CardTitle className="text-3xl font-bold">{job.title}</CardTitle>
              <CardDescription className="text-xl text-muted-foreground">
                {job.company}
              </CardDescription>
            </div>
          </div>
        </div>
        
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2">
              <MapPin className="text-primary" size={18} />
              <span className="text-card-foreground">{job.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="text-primary" size={18} />
              <span className="text-card-foreground">Posted {daysAgo} days ago</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="text-primary" size={18} />
              <span className="text-card-foreground">{job.jobType}</span>
            </div>
            {job.salaryRange && (
              <div className="flex items-center gap-2">
                <DollarSign className="text-primary" size={18} />
                <span className="text-card-foreground">{job.salaryRange}</span>
              </div>
            )}
            {job.experienceLevel && (
              <div className="flex items-center gap-2">
                <User className="text-primary" size={18} />
                <span className="text-card-foreground">{job.experienceLevel}</span>
              </div>
            )}
          </div>
          
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-3 text-card-foreground">Job Description</h3>
            <p className="text-card-foreground">{job.description}</p>
          </div>
          
          {job.tools && job.tools.length > 0 && (
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-3 text-card-foreground">Software Required</h3>
              <div className="flex flex-wrap gap-2">
                {job.tools.map((tool) => (
                  <span key={tool} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {job.benefits && job.benefits.length > 0 && (
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-3 text-card-foreground">Benefits</h3>
              <ul className="list-disc list-inside text-card-foreground">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="mb-1">{benefit}</li>
                ))}
              </ul>
            </div>
          )}

          <Button className="w-full mt-6 bg-primary text-primary-foreground font-bold py-3 rounded-full transition-transform hover:scale-105">
            <Link href={job.applyLink}>Apply Now</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobPage;