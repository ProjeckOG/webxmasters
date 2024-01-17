"use client";
import FullAccount from "./components/full-account";
import Link from "next/link";
import WorkPreferences from "../profile/components/work-preferences";
import { ArrowBigDownIcon, ArrowBigLeftIcon } from "lucide-react";

const Account = () => {


  return (
      <div className="w-full md:w-1/2 mx-auto mt-10">
      <Link href="/user" className=" flex uppercase font-bold  p-3  rounded-xl"><ArrowBigLeftIcon fill="white"/>Back to User Activity</Link>

    <FullAccount />
    </div>
  );
};

export default Account;
