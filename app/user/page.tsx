"use client";
import Image from "next/image";
import Link from "next/link";
import UserNav from "./components/user-nav";
import ProjectTiles from "./components/project-tiles";
import ToolTiles from "./components/tools-tiles";
import SkillTiles from "./components/skill-tiles";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";

export default function User() {


  return (
    <div className="  flex  flex-col  mt-10  items-center justify-center">
      <UserNav />

      <div className="border-t  pt-2 flex text-center">
        <Tabs defaultValue="tools" className="md:w-3/4 mx-auto ">
          <TabsList className="bg-secondary w-full p-2 rounded flex font-bold justify-around">
            <TabsTrigger value="projects">PROJECTS</TabsTrigger>
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
        </div>
    </div>
  );
}
