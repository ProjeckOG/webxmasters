import { FC } from 'react';

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  description: string;
  applyLink: string;
}

const JobCard: FC<JobCardProps> = ({ title, company, location, description, applyLink }) => {
  return (
    <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{company}</p>
      <p className="text-gray-500">{location}</p>
      <p className="mt-2">{description}</p>
      <a href={applyLink} className="text-blue-500 mt-4 inline-block">
        Apply Now
      </a>
    </div>
  );
};

export default JobCard;
