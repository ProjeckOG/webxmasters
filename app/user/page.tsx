import UserNav from "./components/user-nav";
import TileNav from "./components/tile-nav";
import supabase from "@/lib/utils/supabase/client";


export default async function User() {
  
  const { data: { user } } = await supabase.auth.getUser()
  return (
    <div className="mx-auto items-center mt-10 flex flex-col">
      <UserNav user={user} />
      <TileNav />
    </div>
  );
}
