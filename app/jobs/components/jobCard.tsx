import { Button } from '@/lib/@/components/ui/button';
import { Card, CardContent, CardTitle, CardDescription } from '@/lib/@/components/ui/card';
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
    <Card className="flex items-center border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardContent className="flex flex-col md:flex-row w-full">
        <div className="md:w-1/3">
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          <CardDescription className="">{company}</CardDescription>
          <p className="">{location}</p>
        </div>
        <div className="md:w-2/3 flex-col md:flex-row flex items-center justify-between mt-2 md:mt-0 md:ml-4">
          <p className="text-sm flex-grow">{description}</p>
          <Button  variant="outline" className="ml-4 rounded-full whitespace-nowrap">
            Apply Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
