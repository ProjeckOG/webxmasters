"use client";
import ProjectTiles from "./project-tiles";
import ToolTiles from "./tools-tiles";
import SkillTiles from "./skill-tiles";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";

export default function TileNav() {
  return (
    <Tabs defaultValue="projects" className="md:w-3/4 mx-auto ">
      <TabsList className=" w-full p-2 rounded border flex font-bold justify-around mb-10">
        <TabsTrigger value="projects" className=" ">
          PROJECTS
        </TabsTrigger>
        <TabsTrigger value="tools">TOOLS</TabsTrigger>
        <TabsTrigger value="skills">SKILLS</TabsTrigger>
      </TabsList>
      <TabsContent value="projects">
        <ProjectTiles />
      </TabsContent>
      <TabsContent value="tools">
        <ToolTiles />
      </TabsContent>
      <TabsContent value="skills">
        <SkillTiles />
      </TabsContent>
    </Tabs>
  );
}
