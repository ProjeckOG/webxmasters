import React, { useState, useEffect } from 'react';
import ToolCard from '../../components/toolCard';
import { Card, CardContent } from "@/lib/@/components/ui/card";
import { Skeleton } from "@/lib/@/components/ui/skeleton";
import { AlertCircle, Layers } from 'lucide-react';

interface Tool {
  id: string;
  name: string;
  description: string;
  logo: string;
  website: string;
  categories: string[];
  features: string[];
  promoted: boolean;
  likes?: number;
}

interface SimilarToolsProps {
  currentToolId: string;
  currentToolCategories: string[];
}

const fetchTools = async (): Promise<Tool[]> => {
  const response = await fetch('/api/tools.json');
  if (!response.ok) {
    throw new Error('Failed to fetch tools');
  }
  return response.json();
};

const SimilarTools: React.FC<SimilarToolsProps> = ({ currentToolId, currentToolCategories }) => {
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchTools()
      .then(fetchedTools => {
        console.log('Fetched tools:', fetchedTools);
        setTools(fetchedTools);
      })
      .catch(err => {
        console.error('Error fetching tools:', err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  const similarTools = tools
    .filter(tool => {
      const isNotCurrentTool = tool.id !== currentToolId;
      const hasCommonCategory = tool.categories.some(category => currentToolCategories.includes(category));
      return isNotCurrentTool && hasCommonCategory;
    })
    .slice(0, 3);

  console.log('Current tool ID:', currentToolId);
  console.log('Current tool categories:', currentToolCategories);
  console.log('Similar tools:', similarTools);

  if (loading) {
    return (
      <Card className="bg-gray-900 text-white">
        <CardContent className="p-6">
          <div className="flex items-center mb-6">
            <Layers className="mr-2 h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold">Similar Tools</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => (
              <Skeleton key={index} className="h-64 w-full bg-gray-800" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="bg-gray-900 text-white border-destructive">
        <CardContent className="p-6 flex items-center">
          <AlertCircle className="text-destructive mr-2" />
          <span className="text-destructive font-semibold">Error loading similar tools: {error}</span>
        </CardContent>
      </Card>
    );
  }

  if (similarTools.length === 0) {
    return (
      <Card className="bg-gray-900 text-white">
        <CardContent className="p-6">
          <div className="flex items-center mb-6">
            <Layers className="mr-2 h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold">Similar Tools</h3>
          </div>
          <p className="text-gray-400">No similar tools found.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gray-900 text-white">
      <CardContent className="p-6">
        <div className="flex items-center mb-6">
          <Layers className="mr-2 h-5 w-5 text-primary" />
          <h3 className="text-xl font-semibold">Similar Tools</h3>
        </div>
        <div className="grid  md:grid-cols-3 gap-6">
          {similarTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SimilarTools;