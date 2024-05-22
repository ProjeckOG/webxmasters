"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Card, CardContent } from '@/lib/@/components/ui/card';
import ToolDescription from './components/toolDescription';
import ToolDetails from './components/toolDetail';
import ToolHeader from './components/toolHeader';


interface Tool {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  categories: string[];
  features: string[];
}

const ToolPage = () => {
  const params = useParams();
  const toolId = params?.tool; // Use the correct parameter name
  const [tool, setTool] = useState<Tool | null>(null);
  
  console.log('Page params:', params); // Debug log
  console.log('Tool ID:', toolId); // Debug log

  useEffect(() => {
    if (toolId) {
      console.log('Fetching tool with id:', toolId); // Debug log
      fetch('/api/tools.json')
        .then(response => response.json())
        .then((data: Tool[]) => {
          console.log('Fetched data:', data); // Debug log
          const tool = data.find(tool => tool.id === toolId);
          console.log('Found tool:', tool); // Debug log
          setTool(tool || null);
        })
        .catch(error => console.error('Error fetching data:', error)); // Debug log
    }
  }, [toolId]);

  if (!tool) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="border p-4 rounded-lg shadow-sm">
        <CardContent className="flex flex-col gap-4">
          <ToolHeader name={tool.name} imageUrl={tool.imageUrl} />
          <ToolDescription description={tool.description} />
          <ToolDetails categories={tool.categories} features={tool.features} />
        </CardContent>
      </Card>
    </div>
  );
};

export default ToolPage;
