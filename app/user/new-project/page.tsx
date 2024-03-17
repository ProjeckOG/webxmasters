'use client'
import { Button } from "@/lib/@/components/ui/button";
import { useState } from "react";
import ProjectForm from "./components/project-form";



export default async function NewProject() {
    
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">Add New Project</h1>
      <ProjectForm />
    </div>
  );
}
