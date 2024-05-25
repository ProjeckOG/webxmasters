import React, { useEffect, useState } from 'react';
import FilterComponent from './filterComponent';
import JobCard from './jobCard';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  applyLink: string;
  tools: string[];
  date: string;
  profilePicture: string;
  companyLogo: string;
}

export default function JobListings() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [sortOption, setSortOption] = useState<string>('recent');

  useEffect(() => {
    fetch('/api/jobs.json')
      .then(response => response.json())
      .then(data => {
        const jobsWithTools = data.map((job: Job) => ({
          ...job,
          tools: job.tools || [],
        }));
        setJobs(jobsWithTools);
        setFilteredJobs(jobsWithTools);
      });
  }, []);

  useEffect(() => {
    let filtered = jobs;

    if (selectedTools.length > 0) {
      filtered = filtered.filter(job =>
        selectedTools.every(tool => job.tools.includes(tool))
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedDate) {
      filtered = filtered.filter(job => job.date === selectedDate);
    }

    if (sortOption === 'recent') {
      filtered = filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sortOption === 'oldest') {
      filtered = filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }

    setFilteredJobs(filtered);
  }, [selectedTools, searchTerm, selectedDate, sortOption, jobs]);

  return (
    <div className="flex flex-col gap-2">
      <FilterComponent
        selectedTools={selectedTools}
        setSelectedTools={setSelectedTools}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      {filteredJobs.map(job => (
        <JobCard
          key={job.id}
          id={job.id}
          title={job.title}
          company={job.company}
          location={job.location}
          applyLink={job.applyLink}
          tools={job.tools}
          date={job.date}
          profilePicture={job.profilePicture}
          companyLogo={job.companyLogo}
        />
      ))}
    </div>
  );
}
