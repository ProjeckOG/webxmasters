
import UserNav from "./components/user-nav";
import TileNav from "./components/tile-nav";
import { createClient } from "@/lib/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function User() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }
  return (
    <div className="mx-auto items-center mt-10 flex flex-col">
      <UserNav />
      <TileNav />
    </div>
  );
}
