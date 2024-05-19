import { Button } from "@/lib/@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/lib/@/components/ui/card";
import Link from "next/link";
import { FC } from "react";

interface JobCardProps {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  applyLink: string;
  tools?: string[]; // Make tools optional
}

const JobCard: FC<JobCardProps> = ({
  id,
  title,
  company,
  location,
  description,
  applyLink,
  tools = [],
}) => {
  // Default to an empty array if tools is undefined
  return (
    <Card className="flex flex-col md:flex-row items-start border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardContent className="w-full flex flex-col md:flex-row">
        <div className="md:w-1/3 flex flex-col mb-4 md:mb-0">
          <CardTitle className="text-xl font-semibold mb-2">{title}</CardTitle>
          <CardDescription className="text-sm text-gray-600 mb-2">
            {company}
          </CardDescription>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
        <div className="md:w-2/3 flex flex-col justify-between">
          <p className="text-sm mb-4">{description}</p>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="border bg-secondary px-2 py-1 rounded text-xs"
                >
                  {tool}
                </span>
              ))}
            </div>
            <Button variant="outline" className="mt-4 rounded-full">
              <Link href={`/jobs/${id}`}>Apply Now</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
