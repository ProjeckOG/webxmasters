import { Button } from "@/lib/@/components/ui/button";
import supabase from "@/lib/utils/supabase/client";
import Image from "next/image";
import GoogleLogo from "/public/googlelogo.png";
import { redirect, useRouter } from "next/navigation";

export default function GoogleAuth() {
  const router = useRouter()
  // Register this immediately after calling createClient!
  // Because signInWithOAuth causes a redirect, you need to fetch the
  // provider tokens from the callback.
  supabase.auth.onAuthStateChange((event, session) => {
    if (session && session.provider_token) {
      console.log(session);
      window.localStorage.setItem(
        "oauth_provider_token",
        session.provider_token
      );
    }

    if (session && session.provider_refresh_token) {
      window.localStorage.setItem(
        "oauth_provider_refresh_token",
        session.provider_refresh_token
      );
    }

    if (event === "SIGNED_OUT") {
      window.localStorage.removeItem("oauth_provider_token");
      window.localStorage.removeItem("oauth_provider_refresh_token");
    }
  });
  async function handleSignIn() {
    // Redirects the user to Google's consent form
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    redirect.push('/user')
  }

  return (
    <Button
      type="submit"
      onClick={handleSignIn}
      variant="outline"
      className="w-full flex items-center justify-center mb-5 p-8"
    >
      LOG IN WITH GOOGLE{" "}
      <Image src={GoogleLogo} alt="google logo" width="50" height="50" />
    </Button>
  );
}
