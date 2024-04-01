"use client";
import { Button } from "@/lib/@/components/ui/button";
import supabase from "@/lib/utils/supabase/client";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import Link from "next/link";


const UserNav = ({userData}) => {



  return (
    <div className="flex items-center text-center md:text-left	 flex-col md:flex-row p-2 mb-4">
      <Avatar>
        <AvatarImage
          src={userData?.avatar_url || "/default-photo.png"}
          alt="Profile Picture"
          className="flex items-center  ring-secondary	h-20 w-20 mr-4 mb-5 md:mb-0 rounded-full ring "
        />
        <AvatarFallback>Profile Picture</AvatarFallback>
      </Avatar>
      <div>
        <h2 className="text-xl font-semibold ">{userData?.full_name || "John Doe"}</h2>
        <div className="flex mt-2">
          <Link href="user/account">
            <Button
              variant={"outline"}
              className="bg-secondary-color flex  justify-center  p-3 rounded-3xl mr-2 md:mr-10"
            >
              Edit Account
            </Button>
          </Link>
          <Link href="user/profile">
            <Button
              variant={"outline"}
              className="bg-secondary-color flex  justify-center   p-3  rounded-3xl mr-2 md:mr-10"
            >
              Edit Profile
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserNav;
