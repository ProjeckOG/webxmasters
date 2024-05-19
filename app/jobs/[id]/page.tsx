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
  location: string;
  description: string;
  applyLink: string;
  tools: string[];
  date: string;
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
          <CardTitle className="text-2xl font-semibold">{job.title}</CardTitle>
          <CardDescription className="text-lg ">
            {job.company} - <span className="italic">{job.location}</span>
          </CardDescription>
          <p className="text-sm">{job.description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {job.tools.map(tool => (
              <span key={tool} className="bg-secondary  px-2 py-1 rounded text-xs">
                {tool}
              </span>
            ))}
          </div>
          <Button variant="outline" className="mt-4 rounded-full">
            <Link href={job.applyLink}>Apply Now</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobPage;
