// components/SimilarTools.tsx

import React, { useState, useEffect } from 'react';
import ToolCard from '../../components/toolCard';

interface Tool {
  id: string;
  name: string;
  description: string;
  logo: string;
  website: string;
  categories: string[];
  features: string[];
  promoted: boolean;
}

interface SimilarToolsProps {
  currentToolId: string;
  currentToolCategories: string[];
}

const fetchTools = async (): Promise<Tool[]> => {
  const response = await fetch('/api/tools.json');
  const data = await response.json();
  return data;
};

const SimilarTools: React.FC<SimilarToolsProps> = ({ currentToolId, currentToolCategories }) => {
  const [tools, setTools] = useState<Tool[]>([]);

  useEffect(() => {
    fetchTools().then(setTools);
  }, []);

  const similarTools = tools
    .filter(tool => tool.id !== currentToolId && tool.categories.some(category => currentToolCategories.includes(category)))
    .slice(0, 3);

  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold">Similar Tools</h3>
      <div className="flex flex-wrap gap-4 mt-2">
        {similarTools.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default SimilarTools;
