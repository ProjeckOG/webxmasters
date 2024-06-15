'use client'
import { Button } from "@/lib/@/components/ui/button";
import { useState } from "react";
import ProjectForm from "./components/project-form";



export default  function NewProject() {
    
  return (
    <div className="mx-auto md:w-3/4">
      <h1 className="text-2xl font-bold text-center my-4">Add New Project</h1>
      <ProjectForm />
    </div>
  );
}
