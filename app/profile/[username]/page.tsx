"use client";
import supabase from "@/lib/utils/supabase/client";
import { useState, useEffect } from "react";

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
    <div>
      {username ? (
        <div>
          My Post: {username}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
