import { Button } from "@/lib/@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/lib/@/components/ui/card";
import Link from "next/link";
import { FC } from "react";

interface JobCardProps {
  id: number;
  title: string;
  company: string;
  location: string;
  applyLink: string;
  tools?: string[];
  date: string;
  profilePicture: string;
  companyLogo: string;
  dateAdded: string;
}

const JobCard: FC<JobCardProps> = ({
  id,
  title,
  company,
  location,
  applyLink,
  tools = [],
  date,
  profilePicture,
  companyLogo,
  dateAdded,
}) => {
  const daysAgo = Math.floor((new Date().getTime() - new Date(dateAdded).getTime()) / (1000 * 60 * 60 * 24));

  return (
    <Card className="flex flex-col md:flex-row items-start border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardContent className="w-full flex flex-col md:flex-row">
        <div className="md:w-1/3 flex flex-col md:flex-row items-center mb-4 md:mb-0 gap-4">
          <img src={companyLogo} alt={`${company} logo`} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <CardTitle className="text-xl font-semibold">{title}</CardTitle>
            <CardDescription className="text-sm flex items-center">
              <img src={profilePicture} alt={`${company} profile`} className="w-6 h-6 rounded-full object-cover mr-2" />
              <div>
                <span>{company}</span>
                <span className="italic ml-2">{location}</span>
              </div>
            </CardDescription>
          </div>
        </div>
        <div className="md:w-2/3 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {tools.map(tool => (
                <span key={tool} className="border bg-secondary px-2 py-1 rounded text-xs">
                  {tool}
                </span>
              ))}
            </div>
            <div className="flex flex-col items-end">
              <span className="text-xs text-gray-500 mb-2">{daysAgo} days ago</span>
              <Button variant="outline" className="rounded-full">
                <Link href={`/jobs/${id}`}>Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
