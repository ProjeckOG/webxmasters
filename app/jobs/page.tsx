"use client"
import { FC, useEffect, useState } from 'react';

import JobCard from './components/jobCard';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  applyLink: string;
}

const JobListings: FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    // Fetch job listings from the static JSON file
    fetch('/api/jobs.json')
      .then(response => response.json())
      .then(data => setJobs(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Job Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
      </div>
    </div>
  );
};

export default JobListings;
