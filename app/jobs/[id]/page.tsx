"use client";
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '@/lib/@/components/ui/card';
import { Button } from '@/lib/@/components/ui/button';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface Job {
  id: number;
  title: string;
  company: string;
  companyLogo: string; // Add company logo
  location: string;
  description: string;
  applyLink: string;
  tools: string[];
  date: string;
  jobType: string; // Add job type
  salaryRange: string; // Add salary range
  experienceLevel: string; // Add experience level
  responsibilities: string[]; // Add responsibilities
  requirements: string[]; // Add requirements
  benefits: string[]; // Add benefits
  applicationDeadline: string; // Add application deadline
}

const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    if (id) {
      fetch('/api/jobs.json')
        .then(response => response.json())
        .then((data: Job[]) => {
          const job = data.find(job => job.id === Number(id));
          setJob(job || null);
        });
    }
  }, [id]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="border p-4 rounded-lg shadow-sm">
        <CardContent className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            {job.companyLogo && (
              <img src={job.companyLogo} alt={job.company} className="w-16 h-16 object-contain" />
            )}
            <div>
              <CardTitle className="text-2xl font-semibold">{job.title}</CardTitle>
              <CardDescription className="text-lg ">
                {job.company} - <span className="italic">{job.location}</span>
              </CardDescription>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="bg-gray-200 px-2 py-1 rounded text-xs">{job.jobType}</span>
            {job.salaryRange && <span className="bg-gray-200 px-2 py-1 rounded text-xs">{job.salaryRange}</span>}
            {job.experienceLevel && <span className="bg-gray-200 px-2 py-1 rounded text-xs">{job.experienceLevel}</span>}
            <span className="bg-gray-200 px-2 py-1 rounded text-xs">{new Date(job.date).toLocaleDateString()}</span>
          </div>
          <p className="text-sm">{job.description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {job.tools.map(tool => (
              <span key={tool} className="bg-secondary  px-2 py-1 rounded text-xs">
                {tool}
              </span>
            ))}
          </div>
          <div>
            <h3 className="text-lg font-semibold">Responsibilities</h3>
            <ul className="list-disc list-inside">
              {job.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Requirements</h3>
            <ul className="list-disc list-inside">
              {job.requirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Benefits</h3>
            <ul className="list-disc list-inside">
              {job.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
          {job.applicationDeadline && (
            <div className="mt-4">
              <strong>Application Deadline:</strong> {new Date(job.applicationDeadline).toLocaleDateString()}
            </div>
          )}
          <Button variant="outline" className="mt-4 rounded-full">
            <Link href={job.applyLink}>Apply Now</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobPage;
