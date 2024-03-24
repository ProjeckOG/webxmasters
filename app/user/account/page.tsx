import { redirect } from "next/navigation";
import FullAccount from "./components/full-account";
import { createClient } from "@/lib/utils/supabase/server";
import { cookies } from "next/headers";

interface User {
  email: string;
  // Add other user properties as needed
}

const Account = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

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
