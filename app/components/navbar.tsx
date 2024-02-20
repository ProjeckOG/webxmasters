import React, { useState } from "react";

import { createClient } from "@/lib/utils/supabase/server";
import { cookies } from "next/headers";

import GuestNavbar from "./guestnavbar";
import UserNavbar from "./usernavbar";

const Navbar: React.FC = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase.auth.getUser();
  

  return <>{!data?.user ? <GuestNavbar /> : <UserNavbar />}</>;
};

export default Navbar;
