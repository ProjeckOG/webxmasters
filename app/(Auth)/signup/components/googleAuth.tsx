import { Button } from "@/lib/@/components/ui/button";
import Image from "next/image";
import GoogleLogo from "/public/googlelogo.png";
import { redirect, useRouter } from "next/navigation";
import { createClient } from "@/lib/utils/supabase/server";
import { headers } from "next/headers";

export default function GoogleAuth() {
  async function signUpWithGoogle() {
    "use server"
    const supabase = createClient();
    const origin = headers().get("origin");

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${origin}/auth/callback?next=/welcome`,
      },
    });
    if (error) {
      console.log(error);
    } else {
      return redirect(data.url);
    }
  }

  return (
  <form action={signUpWithGoogle}> 
    <Button
      type="submit"
      variant="outline"
      className="w-full flex items-center justify-center mb-5 p-8"
    >
      SIGN UP WITH GOOGLE{" "}
      <Image src={GoogleLogo} alt="google logo" width="50" height="50" />
    </Button>
    </form>
  );
}
