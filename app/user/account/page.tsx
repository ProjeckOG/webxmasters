"use client";
import FullAccount from "./components/full-account";
import Link from "next/link";
import { useState } from "react";
import WorkPreferences from "./components/work-preferences";
import { ArrowBigDownIcon, ArrowBigLeftIcon } from "lucide-react";

const Account = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState("accountDetails");

  // Function to change the active tab
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="w-full md:w-1/2 mx-auto mt-10">
      <Link href="/user" className=" flex uppercase font-bold  p-3  rounded-xl"><ArrowBigLeftIcon fill="white"/>Back to User Activity</Link>
      </div>

      <div className="w-full md:w-1/2 mt-5 mx-auto flex justify-around ">
        <button
          className={`uppercase font-bold  p-3 w-full border  hover:underline
          ${activeTab === "accountDetails" ? "bg-primary-color" : ""}
          ${activeTab === "accountDetails" ? "active" : ""}`}
          onClick={() => handleTabClick("accountDetails")}
        >
          Account Details
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

      {activeTab === "accountDetails" && (
        <div className="w-full md:w-1/2 mx-auto">
          <FullAccount />
        </div>
      )}

      {activeTab === "workPreferences" && (
        <div className="w-full md:w-1/2 mx-auto">
          <WorkPreferences />
        </div>
      )}
    </div>
  );
};

export default Account;
