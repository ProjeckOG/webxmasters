import React, { useState } from 'react';
import { Card, CardContent, CardTitle, CardDescription } from '@/lib/@/components/ui/card';
import { Button } from '@/lib/@/components/ui/button';
import Link from 'next/link';
import { Heart } from 'lucide-react';

interface ToolCardProps {
  tool: {
    id: string;
    name: string;
    description: string;
    website: string;
    logo: string;
    categories?: string[];
    features?: string[];
    promoted?: boolean;
    likes?: number; // Add likes property
  };
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const [likes, setLikes] = useState(tool.likes || 0);

  const likeTool = () => {
    setLikes(likes + 1);
    // Here you would typically also update the server with the new like count
  };

  return (
    <Card className={`${tool.promoted ? 'border-2 border-yellow-300' : ''} w-full md:w-1/3 lg:w-1/4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200`}>
      <CardContent className="flex flex-col items-center p-4">
        <img src={tool.logo} alt={tool.name} className="w-16 h-16 mb-4" />
        <CardTitle className="text-xl font-semibold">{tool.name}</CardTitle>
        <CardDescription className="text-center text-sm text-gray-600 my-2">{tool.description}</CardDescription>
        <div className="flex flex-wrap gap-2 mt-2 justify-center">
          {(tool.categories || []).map((category, index) => (
            <span key={index} className="bg-secondary px-2 py-1 rounded text-xs">
              {category}
            </span>
          ))}
          {(tool.features || []).map((feature, index) => (
            <span key={index} className="border px-2 py-1 rounded text-xs">
              {feature}
            </span>
          ))}
        </div>
        <div className='flex items-center gap-5'>
        <Button variant={"outline"} className='rounded-full my-5 hover:bg-primary-foreground'>
          <Link href={`/tools/${tool.id}`} className="mt-4">
            Visit Page
          </Link>
        </Button>
        <Button variant="outline" className="rounded-full" onClick={likeTool}>
            <Heart className="w-4 h-4" />
          </Button>
          </div>
        {tool.promoted && <span className="text-xs text-yellow-500">Promoted</span>}
      </CardContent>
    </Card>
  );
};

export default ToolCard;
