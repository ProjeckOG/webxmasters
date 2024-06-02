import React, { FC } from 'react';

interface JobTypeSelectProps {
  selectedJobType: string;
  setSelectedJobType: (jobType: string) => void;
}

const JobTypeSelect: FC<JobTypeSelectProps> = ({ selectedJobType, setSelectedJobType }) => {
  return (
    <div className="">
      <label htmlFor="job-type-select" className="mr-2">Job Type:</label>
      <select
        id="job-type-select"
        value={selectedJobType}
        onChange={(e) => setSelectedJobType(e.target.value)}
        className="p-2 border rounded bg-primary-foreground"
      >
        <option value="">All</option>
        <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
        <option value="Contract">Contract</option>
        <option value="Internship">Internship</option>
      </select>
    </div>
  );
};

export default JobTypeSelect;
