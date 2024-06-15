"use client"
import { Badge } from "@/lib/@/components/ui/badge";
import { Card, CardContent, CardTitle, CardDescription } from "@/lib/@/components/ui/card";
import React from "react";


interface ProjectDetailsProps {
  project: {
    name: string;
    description: string;
    startDate: string;
    endDate?: string;
    skills: string[];
    tools: string[];
  };
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  return (
    <Card className="mb-6">
      <CardContent>
        <CardTitle className="text-2xl font-bold">{project.name}</CardTitle>
        <CardDescription className="mt-4">{project.description}</CardDescription>
        <div className="mt-4">
          <strong>Start Date:</strong> {new Date(project.startDate).toLocaleDateString()}
        </div>
        {project.endDate && (
          <div>
            <strong>End Date:</strong> {new Date(project.endDate).toLocaleDateString()}
          </div>
        )}
        <div className="mt-4">
          <strong>Skills Used:</strong>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.skills.map((skill, index) => (
              <Badge key={index} variant="outline">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <strong>Tools Used:</strong>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tools.map((tool, index) => (
              <Badge key={index} variant="outline">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectDetails;
