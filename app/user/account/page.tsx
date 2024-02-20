import FullAccount from "./components/full-account";
import Link from "next/link";
import { ArrowBigLeftIcon } from "lucide-react";
import { createClient } from "@/lib/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Account = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div className="w-full md:w-1/2 mx-auto mt-10">
      <Link href="/user" className=" flex uppercase font-bold  p-3  rounded-xl">
        <ArrowBigLeftIcon fill="white" />
        Back to User Activity
      </Link>

      <FullAccount />
    </div>
  );
};

export default Account;
