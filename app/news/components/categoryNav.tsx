"use client"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import React from "react";

export default function categoryNav() {
  return (
    <Tabs defaultValue="all" className="md:w-3/4 mx-auto ">
    <TabsList className=" w-full p-1 rounded border flex font-bold justify-around mb-10 bg-primary-foreground">
      <TabsTrigger
        value="all"
        className="data-[state=active]:bg-background p-2 rounded w-full"
      >
        ALL
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
    <TabsContent value="all" className="flex flex-col items-center">

    </TabsContent>
    <TabsContent value="tools" className="flex flex-col items-center">

    </TabsContent>
    <TabsContent value="skills" className="flex flex-col items-center">

    </TabsContent>
  </Tabs>
  );
}
