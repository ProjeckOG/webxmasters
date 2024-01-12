'use client'
import Image from "next/image";
import Link from "next/link";
import UserNav from "./components/user-nav";
import { useState } from "react";
import ProjectTiles from "./components/project-tiles";
import ToolTiles from "./components/tools-tiles";
import SkillTiles from "./components/skill-tiles";
const User = () => {

    // State to keep track of the active tab
    const [activeTab, setActiveTab] = useState("MyProjects");

    // Function to change the active tab
    const handleTabClick = (tab: string) => {
      setActiveTab(tab);
    };
  return (
    <div className="  flex  flex-col  mx-auto mt-10  items-center justify-center">
     <UserNav />
      
      <div className="border-t  pt-2 flex overflow-x-auto text-center">
        <Link href="#" className="hover:bg-secondary-color rounded-lg  px-4 py-2  md:px-10" onClick={() => handleTabClick("MyProjects")}>MY PROJECTS</Link>
        <Link href="#" className=" hover:bg-secondary-color rounded-lg px-4 py-2 md:px-10" onClick={() => handleTabClick("MyTools")}>MY TOOLS</Link>
        <Link href="#" className=" hover:bg-secondary-color rounded-lg px-4 py-2 md:px-10" onClick={() => handleTabClick("MySkills")}>MY SKILLS</Link>
        
      </div>
      {activeTab === "MyProjects" && (
        <div className="">
          <ProjectTiles />
        </div>
      )}
      {activeTab === "MyTools" && (
        <div className="">
          <ToolTiles />
        </div>
      )}
      {activeTab === "MySkills" && (
        <div className="">
          <SkillTiles />
        </div>
      )}
      
    </div>
  );
};

export default User;
