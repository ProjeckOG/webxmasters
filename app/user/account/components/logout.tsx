import { Button } from "@/lib/@/components/ui/button";
import Image from "next/image";
import { redirect } from "next/navigation";
import router from "next/navigation";

const Logout = () => {
  return (
    <form
      action="/auth/logout"
      method="post"
      className="w-full  py-2 px-4 rounded hover:bg-accent-color"
    >
      <Button type="submit" className="w-full" variant={"outline"}>LOGOUT</Button>
    </form>
  );
};

export default Logout;
