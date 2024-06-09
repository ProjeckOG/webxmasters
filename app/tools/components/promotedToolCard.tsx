"use client"
import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "@/lib/@/components/ui/card";
import { Button } from "@/lib/@/components/ui/button";

interface PromotedToolCardProps {
  tool: {
    id: string;
    name: string;
    description: string;
    website: string;
    logo: string;
  };
}

const PromotedToolCard: React.FC<PromotedToolCardProps> = ({ tool }) => {
  return (
    <Card className="border-2 border-yellow-300 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardContent className="flex items-center gap-4">
        <img src={tool.logo} alt={tool.name} className="w-16 h-16 object-contain" />
        <div>
          <CardTitle className="text-2xl font-semibold">{tool.name}</CardTitle>
          <CardDescription className="text-sm">{tool.description}</CardDescription>
          <Button href={tool.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Visit Page
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PromotedToolCard;
