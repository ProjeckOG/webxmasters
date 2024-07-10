import React, { useState } from "react";

import { createClient } from "@/lib/utils/supabase/server";

import GuestSidebar from "./guestSideBar";
import UserSidebar from "./userSidebar";
import { redirect } from "next/navigation";

const Navbar: React.FC = async () => {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    
  }
  

  return <>{!data?.user ? <GuestSidebar /> : <UserSidebar />}</>;
};

export default Navbar;
