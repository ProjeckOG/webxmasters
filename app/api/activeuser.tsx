import supabase from "@/lib/utils/supabase/client";
import { redirect, useRouter } from "next/navigation";

export default async function ActiveUser() {
    const router = useRouter()
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (user) {
    router.push('/');
  }
}
