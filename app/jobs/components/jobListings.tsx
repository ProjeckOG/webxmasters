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
  dateAdded: string;
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
  
    // Filter by selected date
    if (selectedDate) {
      filtered = filtered.filter(job => job.date === selectedDate);
    }
  
    // Sort by selected sort option
    filtered.sort((a, b) => {
      if (sortOption === 'recent') {
        return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
      } else { // Sort by oldest
        return new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime();
      }
    });
  
    setFilteredJobs(filtered); // Update the state with the filtered and sorted list
  }, [selectedTools, searchTerm, selectedDate, sortOption, jobs]); // Include sortOption in the dependency array
  

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
          dateAdded={job.dateAdded}
        />
      ))}
    </div>
  );
}
