'use client'
import UserNav from "./components/user-nav";
import TileNav from "./components/tile-nav";
import { useState, useEffect } from "react";
import supabase from "@/lib/utils/supabase/client";

// Define a type for the user state if you have a User type defined elsewhere, use it here
// Assuming 'User' is a type you have, otherwise define the necessary properties you expect from the user object
type User = {
  id: string;
  email?: string;
  [key: string]: any; // For additional dynamic properties
};

export default function User() {
  // Initialize user state with a more appropriate type
  const [user, setUser] = useState<User | null>(null);

  async function getUser() {
    try {
      const { data, error } = await supabase.auth.getUser();
      if (error) throw error;
      setUser(data.user); // Assuming data.user is the user object, adjust if the structure is different
    } catch (error) {
      console.error("Error fetching user:", error.message);
    }
  }

  useEffect(() => {
    getUser(); // Fetch user on component mount
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="mx-auto items-center mt-10 flex flex-col">
      <UserNav user={user} />
      <TileNav />
    </div>
  );
}
