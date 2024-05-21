import React from 'react';
import Link from 'next/link';
import { Button } from '@/lib/@/components/ui/button';
import { Card, CardContent, CardTitle, CardDescription } from '@/lib/@/components/ui/card';

interface ToolCardProps {
  tool: {
    id: string;
    name: string;
    description: string;
    logo: string;
    categories?: string[];
    features?: string[];
  };
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <Card className="w-full md:w-1/3 lg:w-1/4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardContent className="flex flex-col items-center p-4">
        <img src={tool.logo} alt={tool.name} className="w-16 h-16 mb-4" />
        <CardTitle className="text-xl font-semibold">{tool.name}</CardTitle>
        <CardDescription className="text-center text-sm text-gray-600 my-2">{tool.description}</CardDescription>
        <div className="flex flex-wrap gap-2 mt-2 justify-center">
          {(tool.categories || []).map((category, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
              {category}
            </span>
          ))}
          {(tool.features || []).map((feature, index) => (
            <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
              {feature}
            </span>
          ))}
        </div>
        <Button variant="outline" className="mt-4 rounded-full">
          <Link href={`/tools/${tool.id}`}>Learn More</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ToolCard;
