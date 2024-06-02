import React, { useEffect, useState } from 'react';
import FilterComponent from './filterComponent';
import JobCard from './jobCard';

interface Job {
  id: number;
  title: string;
  company: string;
  companyLogo: string;
  profilePicture: string;
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

export default function JobListings() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedJobType, setSelectedJobType] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedPay, setSelectedPay] = useState<string>('');

  useEffect(() => {
    fetch('/api/jobs.json')
      .then(response => response.json())
      .then((data: Job[]) => {
        const sortedJobs = data.sort((a: Job, b: Job) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
        setJobs(sortedJobs);
        setFilteredJobs(sortedJobs); // Initially sort by most recent
      });
  }, []);

  useEffect(() => {
    let filtered = jobs;

    // Filter by selected tools
    if (selectedTools.length > 0) {
      filtered = filtered.filter(job => selectedTools.every(tool => job.tools.includes(tool)));
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(job => job.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    // Filter by selected job type
    if (selectedJobType) {
      filtered = filtered.filter(job => job.jobType === selectedJobType);
    }

    // Filter by selected location
    if (selectedLocation) {
      filtered = filtered.filter(job => job.location === selectedLocation);
    }

    // Filter by selected pay
    if (selectedPay) {
      filtered = filtered.filter(job => {
        const [minPay, maxPay] = selectedPay.split('-').map(Number);
        const [jobMinPay, jobMaxPay] = job.salaryRange.split('-').map(salary => parseInt(salary.replace(/[^0-9]/g, ''), 10));
        return (jobMinPay >= minPay && jobMinPay <= maxPay) || (jobMaxPay >= minPay && jobMaxPay <= maxPay);
      });
    }

    setFilteredJobs(filtered); // Update the state with the filtered and sorted list
  }, [selectedTools, searchTerm, selectedJobType, selectedLocation, selectedPay, jobs]);

  return (
    <div className="flex flex-col gap-2">
      <FilterComponent
        selectedTools={selectedTools}
        setSelectedTools={setSelectedTools}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedJobType={selectedJobType}
        setSelectedJobType={setSelectedJobType}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        selectedPay={selectedPay}
        setSelectedPay={setSelectedPay}
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
          dateAdded={job.dateAdded}
        />
      ))}
    </div>
  );
}
