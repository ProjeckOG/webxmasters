"use client";
import React, { useEffect, useState } from 'react';
import JobCard from './jobCard';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  applyLink: string;
}

export default function JobListings() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    // Fetch job listings from the static JSON file
    fetch('/api/jobs.json')
      .then(response => response.json())
      .then(data => setJobs(data));
  }, []);

  return (
    <>
      {jobs.map(job => (
        <JobCard
          key={job.id}
          title={job.title}
          company={job.company}
          location={job.location}
          description={job.description}
          applyLink={job.applyLink}
        />
      ))}
    </>
  );
}
