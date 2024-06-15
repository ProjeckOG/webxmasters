"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent, CardTitle, CardDescription } from "@/lib/@/components/ui/card";

interface Project {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  skills: string[];
  tools: string[];
}

const ProjectPage = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (projectId) {
      fetch("/api/projects.json") // Adjusted path to match your folder structure
        .then((response) => response.json())
        .then((data: Project[]) => {
          const project = data.find((proj) => proj.id === projectId);
          setProject(project || null);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching project data:", error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [projectId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <Card className="border p-4 rounded-lg shadow-sm">
        <CardContent className="flex flex-col gap-4">
          <CardTitle className="text-2xl font-semibold">{project.name}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
          <p><strong>Start Date:</strong> {project.startDate}</p>
          {project.endDate && <p><strong>End Date:</strong> {project.endDate}</p>}
          <div>
            <h3 className="font-semibold">Skills</h3>
            <ul>
              {project.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Tools</h3>
            <ul>
              {project.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectPage;
