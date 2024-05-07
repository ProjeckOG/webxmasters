import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/lib/@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import React from "react";
import { AboutCard, ToolStack, SkillStack } from "./homeCards";
import { ProjectCard } from "./projectCards";

export default function ProfileNav() {
  return (
    <Tabs defaultValue="about">
      <TabsList className="flex bg-primary-foreground border  rounded-lg p-2 mx-auto md:w-1/2 mb-5">
        <TabsTrigger
          value="about"
          className="data-[state=active]:bg-background p-2 rounded w-full"
        >
          ABOUT
        </TabsTrigger>
        <TabsTrigger
          value="projects"
          className="data-[state=active]:bg-background p-2 rounded w-full"
        >
          PROJECTS
        </TabsTrigger>
      </TabsList>
      <TabsContent value="about">
        <div className="flex flex-col gap-5 ">
          <AboutCard />
          <ToolStack />
          <SkillStack />
        </div>
      </TabsContent>
      <TabsContent value="projects">
          <ProjectCard />
      </TabsContent>
    </Tabs>
  );
}
