import { Button } from "@/lib/@/components/ui/button";
import { createClient } from "@/lib/utils/supabase/server";

import { Github } from "lucide-react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default function GithubAuth() {
  async function signInWithGithub() {
    "use server"
    const supabase = createClient();
    const origin = headers().get("origin");

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${origin}/auth/callback`,
      },
    });
    if (error) {
      console.log(error);
    } else {
      return redirect(data.url);
    }
  }

  return (
    <form action={signInWithGithub}>
      <Button
        type="submit"
        variant="outline"
        className="w-full flex items-center justify-center mb-5 p-8"
      >
        LOG IN WITH GITHUB
        <Github size={30} />
      </Button>
    </form>
  );
}
