"use client";
import { ArrowBigLeftIcon } from "lucide-react";
import ProfileDetails from "./profile-details";
import WorkPreferences from "./work-preferences";
import { useState } from "react";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";

const FullProfile = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState("ProfileDetails");

  // Function to change the active tab
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <Tabs defaultValue="profile-details" className="w-full md:w-1/2 my-5 mx-auto flex-col justify-around">
      <TabsList className="grid w-full bg-secondary p-1 grid-cols-2 rounded-lg my-10 font-bold">
        <TabsTrigger value="profile-details" className="data-[state=active]:bg-muted p-2 rounded">Profile Details</TabsTrigger>
        <TabsTrigger value="work-preferences" className="data-[state=active]:bg-black p-2  rounded">Work Preferences</TabsTrigger>
      </TabsList>
      <TabsContent value="profile-details" className="">
        <ProfileDetails />
      </TabsContent>
      <TabsContent value="work-preferences" className=""> <WorkPreferences /></TabsContent>
    </Tabs>
  );
};

export default FullProfile;
