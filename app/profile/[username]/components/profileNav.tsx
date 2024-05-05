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

export default function ProfileNav() {
  return (
    <Card className="text-center bg-primary-foreground p-2 mx-auto md:w-1/2">
      <CardHeader></CardHeader>
      <CardContent>
        <Tabs defaultValue="home" className="">
          <TabsList className="flex items-center justify-around ">
            <TabsTrigger
              value="home"
              className="data-[state=active]:bg-background p-2 rounded w-full"
            >
              HOME
            </TabsTrigger>
            <TabsTrigger
              value="projects"
              className="data-[state=active]:bg-background p-2 rounded w-full"
            >
              PROJECTS
            </TabsTrigger>
            <TabsTrigger
              value="activity"
              className="data-[state=active]:bg-background p-2 rounded w-full"
            >
             ACTIVITY
            </TabsTrigger>
          </TabsList>
          <TabsContent value="home">
            
          </TabsContent>
          <TabsContent value="projects">
            
            </TabsContent>
          <TabsContent value="activity">
            
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
