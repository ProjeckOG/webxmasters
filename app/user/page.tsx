import UserNav from "./components/user-nav";
import TileNav from "./components/tile-nav";
import { createClient } from "@/lib/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function User() {

  return (
    <div className="mx-auto items-center mt-10 flex flex-col">
      <UserNav  />
      
      <TileNav />
    </div>
  );
}
