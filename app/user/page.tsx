'use client'
import UserNav from "./components/user-nav";
import TileNav from "./components/tile-nav";
import supabase from "@/lib/utils/supabase/client";
import { useState, useEffect } from "react";


export default  function User() {
  
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
    <div className="mx-auto items-center mt-10 flex flex-col">
      <UserNav user={user} />
      <TileNav />
    </div>
  );
}
