"use client";
import supabase from "@/lib/utils/supabase/client";
import { useState, useEffect } from "react";
import ProfileHeader from "./components/profileHeader";
import ProfileNav from "./components/profileNav";

export default function Page({ params }: { params: { slug: string } }) {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const {
          data: { user }, error
        } = await supabase.auth.getUser();
        if (user && user.id) {
          // Check if user and user.id are defined
          const { data, error } = await supabase
            .from("users")
            .select("username")
            .eq("id", user.id)
            .single();

          if (data) {
            setUsername(data.username);
          }
        }
      } catch (error) {
        console.error("Error fetching user:", error.message);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="flex flex-col gap-5 justify-center md:w-3/4 mx-auto mt-10">
      <ProfileHeader username={""} jobTitle={""} description={""} twitterUrl={""} linkedinUrl={""} facebookUrl={""} instagramUrl={""} avatarUrl={""} />
      <ProfileNav />
    </div>
  );
}
