'use client'
import { ArrowBigLeftIcon } from "lucide-react";
import ProfileDetails from "./components/profile-details";
import WorkPreferences from "./components/work-preferences";
import { useState } from "react";
import Link from "next/link";

const Profile = () => {
    // State to keep track of the active tab
    const [activeTab, setActiveTab] = useState("ProfileDetails");

    // Function to change the active tab
    const handleTabClick = (tab: string) => {
      setActiveTab(tab);
    };

  return (
    <div>
        <div className="w-full md:w-1/2 mt-5 mx-auto flex justify-start ">
      <Link href="/user" className=" flex uppercase font-bold  p-3  rounded-xl"><ArrowBigLeftIcon fill="white"/>Back to User Activity</Link>
      </div>
      <div className="w-full md:w-1/2 my-5 mx-auto flex justify-around ">
        <button
          className={`uppercase font-bold  p-3 w-full border  hover:underline
          ${activeTab === "ProfileDetails" ? "bg-primary-color" : ""}
          ${activeTab === "ProfileDetails" ? "active" : ""}`}
          onClick={() => handleTabClick("ProfileDetails")}
        >
          Profile Details
        </button>
        <button
          className={`uppercase font-bold w-full border p-3 hover:underline
          ${activeTab === "workPreferences" ? "bg-primary-color" : ""} 
          ${activeTab === "workPreferences" ? "active" : ""}`}
          onClick={() => handleTabClick("workPreferences")}
        >
          Work Preferences
        </button>
      </div>
    <div className="flex items-center justify-center mb-5 px-4">
    {activeTab === "ProfileDetails" && (
        <div className="w-full md:w-1/2 mx-auto">
          <ProfileDetails />
        </div>
      )}

      {activeTab === "workPreferences" && (
        <div className="w-full md:w-1/2 mx-auto">
          <WorkPreferences />
        </div>
      )}
  </div>
  </div>
  );
};

export default Profile;
