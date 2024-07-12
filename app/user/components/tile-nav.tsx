"use client";
import ProjectTiles from "./project-tiles";
import ToolTiles from "./tools-tiles";
import SkillTiles from "./skill-tiles";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { Button } from "@/lib/@/components/ui/button";
import Link from "next/link";

export default function TileNav() {
  return (
    <Tabs defaultValue="projects" className="container ">
      <TabsList className=" w-full p-1 rounded border flex font-bold justify-around mb-10 bg-primary-foreground">
        <TabsTrigger
          value="projects"
          className="data-[state=active]:bg-background p-2 rounded w-full"
        >
          PROJECTS
        </TabsTrigger>
        <TabsTrigger
          value="tools"
          className="data-[state=active]:bg-background p-2 rounded w-full"
        >
          TOOLS
        </TabsTrigger>
        <TabsTrigger
          value="skills"
          className="data-[state=active]:bg-background p-2 rounded w-full"
        >
          SKILLS
        </TabsTrigger>
      </TabsList>
      <TabsContent value="projects" className="flex flex-col items-center">
      <div className="flex items-center "><h2 className="font-bold  uppercase text-3xl"> Projects</h2>
        <Button
          variant={"outline"}
          className="rounded hover:bg-primary-foreground m-5 "
        ><Link href={"/user/new-project"}>+ New Project</Link>
          
        </Button></div>
        
        <ProjectTiles />
      </TabsContent>
      <TabsContent value="tools" className="flex flex-col items-center">
      <div className="flex items-center justify-end"><h2 className="font-bold  uppercase text-3xl"> Tools</h2>
        <Button
          variant={"outline"}
          className="rounded hover:bg-primary-foreground m-5 "
        >
          <Link href={"/tools"}>+ New Tool</Link>
        </Button></div>
        
        <ToolTiles />
      </TabsContent>
      <TabsContent value="skills" className="flex flex-col items-center">
        <div className="flex items-center "><h2 className="font-bold  uppercase text-3xl"> Skills</h2>
        <Button
          variant={"outline"}
          className="rounded hover:bg-primary-foreground m-5 "
        >
          <Link href={"/tool"}>+ New Skill</Link>
        </Button></div>
        
        <SkillTiles />
      </TabsContent>
    </Tabs>
  );
}
