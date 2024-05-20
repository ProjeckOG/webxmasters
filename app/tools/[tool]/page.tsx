// pages/tools/[id].tsx

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
}

const ToolPage = () => {
  const { id } = useParams();
  const [tool, setTool] = useState<Tool | null>(null);

  useEffect(() => {
    if (id) {
      fetch('/api/tools.json')
        .then(response => response.json())
        .then((data: Tool[]) => {
          const tool = data.find(tool => tool.id === id);
          setTool(tool || null);
        });
    }
  }, [id]);

  if (!tool) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="border p-4 rounded-lg shadow-sm">
        <CardContent className="flex flex-col gap-4">
          <ToolHeader name={tool.name} imageUrl={tool.imageUrl} />
          <ToolDescription description={tool.description} />
          <ToolDetails categories={tool.categories} />
        </CardContent>
      </Card>
    </div>
  );
};

export default ToolPage;
