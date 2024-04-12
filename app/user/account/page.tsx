import { redirect } from "next/navigation";
import FullAccount from "./components/full-account";
import { createClient } from "@/lib/utils/supabase/server";
import { cookies } from "next/headers";
import { User as SupabaseAuthUser } from "@supabase/supabase-js";

export interface ExtendedUser extends SupabaseAuthUser {
  raw_user_meta_data: {
    name: string;
  };
}

export interface FullAccountProps {
  userData: ExtendedUser;
}

const Account = async () => {

  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }
  return (
    <div className="w-full md:w-1/2 mx-auto mt-10">
      <FullAccount userData={data?.user} />
    </div>
  );
};

export default Account;
