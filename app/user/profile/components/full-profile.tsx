"use client";
import ProfileDetails from "./profile-details";
import WorkPreferences from "./work-preferences";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";

const FullProfile = () => {
  return (
    <Tabs
      defaultValue="profile-details"
      className="w-full md:w-1/2 my-5 mx-auto flex-col  justify-around"
    >
      <TabsList className=" w-full p-1 rounded border flex font-bold justify-around mb-10 bg-primary-foreground">
        <TabsTrigger
          value="profile-details"
          className="data-[state=active]:bg-background p-2 rounded w-full"
        >
          PROFILE DETAILS
        </TabsTrigger>
        <TabsTrigger
          value="work-preferences"
          className="data-[state=active]:bg-background p-2 rounded w-full"
        >
          WORK PREFERENCES
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile-details" className="">
        <ProfileDetails />
      </TabsContent>
      <TabsContent value="work-preferences" className="">
        {" "}
        <WorkPreferences />
      </TabsContent>
    </Tabs>
  );
};

export default FullProfile;
