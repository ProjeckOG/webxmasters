"use client";
import ProjectTiles from "./components/project-tiles";
import ToolTiles from "./components/tools-tiles";
import SkillTiles from "./components/skill-tiles";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import UserNav from "./components/user-nav";
import TileNav from "./components/tile-nav";

export default function User() {
  return (
    <div className="mx-auto items-center mt-10 flex flex-col">
     <UserNav /> 
     <TileNav />
    </div>
  );
}
