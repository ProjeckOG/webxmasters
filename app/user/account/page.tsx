
'use client'
import FullAccount from "./components/full-account";
import Link from "next/link";
import { useState } from "react";

const Account = () => {
   // State to keep track of the active tab
   const [activeTab, setActiveTab] = useState('accountDetails');

   // Function to change the active tab
   const handleTabClick = (tab: string) => {
     setActiveTab(tab);
   };

  return (
    <div>
    <div className="w-full md:w-1/2 mt-10 mx-auto bg-primary-color p-3 rounded-xl flex justify-around">
      <button
        className={`uppercase font-bold hover:bg-transparent  ${activeTab === 'accountDetails' ? 'active' : ''}`}
        onClick={() => handleTabClick('accountDetails')}
      >
        Account Details
      </button>
      <button
        className={`uppercase font-bold ${activeTab === 'workPreferences' ? 'active' : ''}`}
        onClick={() => handleTabClick('workPreferences')}
      >
        Work Preferences
      </button>
    </div>

    {activeTab === 'accountDetails' && (
      <div className="w-full md:w-1/2 mx-auto">
        <FullAccount />
      </div>
    )}

    {activeTab === 'workPreferences' && (
      <div className="content">
        {/* Content for Work Preferences */}
        {/* ... */}
      </div>
    )}
  </div>
  );
};

export default Account;
