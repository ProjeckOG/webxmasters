"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent } from "@/lib/@/components/ui/card";
import ToolDescription from "./components/toolDescription";
import ToolDetails from "./components/toolDetail";
import ToolHeader from "./components/toolHeader";
import SimilarTools from "./components/similarTools";

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
  const toolId = params?.id; // Ensure this matches the dynamic route [id].tsx
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
          setTool(tool || null);
          setLoading(false);
        })
        .catch((error) => {
          setError("Error fetching data");
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [toolId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!tool) {
    return <div>No tool found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="border p-4 rounded-lg shadow-sm">
        <CardContent className="flex flex-col gap-4">
          <ToolHeader name={tool.name} imageUrl={tool.logo} />
          <ToolDescription description={tool.description} website={tool.website} />
          <ToolDetails categories={tool.categories} features={tool.features} />
          
        </CardContent>
      </Card>
      <SimilarTools currentToolId={tool.id} currentToolCategories={tool.categories} />
    </div>
  );
};

export default ToolPage;
