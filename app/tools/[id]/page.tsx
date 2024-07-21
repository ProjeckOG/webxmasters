"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent } from "@/lib/@/components/ui/card";
import ToolDescription from "./components/toolDescription";
import ToolDetails from "./components/toolDetail";
import ToolHeader from "./components/toolHeader";
import SimilarTools from "./components/similarTools";
import { Skeleton } from "@/lib/@/components/ui/skeleton";
import { AlertCircle } from 'lucide-react';

interface Tool {
  id: string;
  name: string;
  description: string;
  logo: string;
  website: string;
  categories: string[];
  features: string[];
}

const ToolPage = () => {
  const params = useParams();
  const toolId = params?.id;
  const [tool, setTool] = useState<Tool | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (toolId) {
      fetch("/api/tools.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data: Tool[]) => {
          const tool = data.find((tool) => tool.id === toolId);
          if (tool) {
            setTool(tool);
          } else {
            setError("Tool not found");
          }
          setLoading(false);
        })
        .catch((error) => {
          setError("Error fetching data");
          setLoading(false);
        });
    } else {
      setError("Invalid tool ID");
      setLoading(false);
    }
  }, [toolId]);

  if (loading) {
    return (
      <div className="container mx-auto p-4 max-w-4xl">
        <Card className="border rounded-lg shadow-md overflow-hidden mb-8">
          <CardContent className="p-6">
            <Skeleton className="h-20 w-full mb-4" />
            <Skeleton className="h-4 w-2/3 mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-4" />
            <Skeleton className="h-32 w-full" />
          </CardContent>
        </Card>
        <Skeleton className="h-64 w-full" /> {/* For Similar Tools */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 max-w-4xl">
        <Card className="border-destructive bg-destructive/10 rounded-lg">
          <CardContent className="p-6 flex items-center">
            <AlertCircle className="text-destructive mr-2" />
            <span className="text-destructive font-semibold">{error}</span>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!tool) {
    return null; // We're handling the "Tool not found" case in the error state
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">

          <ToolHeader 
            name={tool.name} 
            imageUrl={tool.logo} 
            websiteUrl={tool.website} 
            category={tool.categories[0]} 
          />
          <ToolDescription description={tool.description} website={tool.website} />
          <ToolDetails categories={tool.categories} features={tool.features} />

      
      <SimilarTools currentToolId={tool.id} currentToolCategories={tool.categories} />
    </div>
  );
};

export default ToolPage;