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
  promoted: boolean;
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
  promoted,
}) => {
  const daysAgo = Math.floor(
    (new Date().getTime() - new Date(dateAdded).getTime()) /
      (1000 * 60 * 60 * 24)
  );

  return (
    <Card
      className={`${
        promoted ? "border-2 border-yellow-300" : ""
      } border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200`}
    >
      <CardContent className="flex flex-col md:flex-row">
        <div className="md:w-1/2 flex flex-col lg:flex-row items-center gap-4 mb-4 md:mb-0 text-center md:text-left">
          <img
            src={companyLogo}
            alt={`${company} logo`}
            className="w-10 h-10 rounded-full object-cover "
          />
          <div>
            <CardTitle className="text-xl font-semibold">{title}</CardTitle>
            <CardDescription className="text-sm">
              <div>
                <span>{company}</span>
                <span className="italic ml-2">{location}</span>
                <br />
                <span>{promoted ? "Promoted" : ""}</span>
              </div>
            </CardDescription>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col items-center md:items-end justify-between gap-2">
          <div className="flex flex-wrap gap-2 justify-center md:justify-end">
            {tools.map((tool) => (
              <span
                key={tool}
                className="border bg-secondary px-2 py-1 rounded text-xs"
              >
                {tool}
              </span>
            ))}
          </div>
          <div className="flex flex-col items-center md:items-end mt-4 md:mt-0">
            <span className="text-xs text-gray-500 mb-2">
              {daysAgo} days ago
            </span>
            <Button
              variant="outline"
              className="rounded-full hover:bg-primary-foreground"
            >
              <Link href={`/jobs/${id}`} className="text-xs">
                Apply Now
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
