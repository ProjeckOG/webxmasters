"use client";
import ProjectTiles from "./project-tiles";
import ToolTiles from "./tools-tiles";
import SkillTiles from "./skill-tiles";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { Button } from "@/lib/@/components/ui/button";
import Link from "next/link";

export default function TileNav() {
  return (
    <Tabs defaultValue="projects" className="md:w-3/4 mx-auto ">
      <TabsList className=" w-full p-1 rounded border flex font-bold justify-around mb-10 bg-secondary">
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
        <h2 className="font-bold  uppercase text-3xl">Your Projects</h2>
        <Button
          variant={"outline"}
          className="rounded hover:bg-primary-foreground m-5 w-32"
        ><Link href={"/user/new-project"}>+ New Project</Link>
          
        </Button>
        <ProjectTiles />
      </TabsContent>
      <TabsContent value="tools" className="flex flex-col items-center">
        <h2 className="font-bold  uppercase text-3xl">Your Tools</h2>
        <Button
          variant={"outline"}
          className="rounded hover:bg-primary-foreground m-5 w-32"
        >
          <Link href={"/tool"}>+ New Tool</Link>
        </Button>
        <ToolTiles />
      </TabsContent>
      <TabsContent value="skills" className="flex flex-col items-center">
        <h2 className="font-bold  uppercase text-3xl">Your Skills</h2>
        <Button
          variant={"outline"}
          className="rounded hover:bg-primary-foreground m-5 w-32"
        >
          <Link href={"/tool"}>+ New Skill</Link>
        </Button>
        <SkillTiles />
      </TabsContent>
    </Tabs>
  );
}
