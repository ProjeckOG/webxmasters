"use client"
import supabase from "@/lib/utils/supabase/client";
import WelcomeForm from "./components/welcomeForm";
import { useEffect, useState } from "react";

export default function Welcome() {
 
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const { data, error } = await supabase.auth.getUser();
        if (error) throw error;
        setUser(data.user);
      } catch (error) {
        console.error('Error fetching user:', error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Or any other loading state indicator
  }
  return (
    <div className="my-32 flex items-center justify-center">
      <div className="mx-auto p-8 border  md:w-1/3 w-full	 rounded-lg">
        <h2 className="text-3xl mb-6 text-center font-bold">
          One More Step...
        </h2>
        <WelcomeForm user={user}/>
      </div>
    </div>
  );
}
