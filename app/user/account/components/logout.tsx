import React from 'react';
import { Button } from '@/lib/@/components/ui/button';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/utils/supabase/client';
import { redirect } from 'next/navigation';


const Logout = () => {


  const handleLogout = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Error logging out:', error);
        // Handle the error (e.g., show a notification to the user)
      } else {
        redirect('/login'); // Redirect to the login page after successful logout
      }
    } catch (error) {
      console.error('Logout failed:', error);
      // Handle the error (e.g., show a notification to the user)
    }
  };

  return (
    <form onSubmit={handleLogout}>
      <Button
        type="submit"
        className="w-full uppercase text-xl m-3 p-10 flex items-center font-bold hover:bg-destructive"
        variant={"outline"}
      >
        Do you want to Logout?
      </Button>
    </form>
  );
};

export default Logout;
