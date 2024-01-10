import Image from "next/image";
import Link from "next/link";
import UserNav from "./components/user-nav";
const User = () => {

  return (
    <div className=" flex flex-col w-full md:w-1/2 mx-auto mt-10  items-center justify-center">
      <div><UserNav /></div>
      
      <div className="border-t  pt-2 flex justify-start">
        <Link href="#" className="hover:bg-secondary-color rounded-lg   px-4 py-2 md:px-10">MY PROJECTS</Link>
        <Link href="#" className=" hover:bg-secondary-color rounded-lg px-4 py-2 md:px-10">MY TOOLS</Link>
        <Link href="#" className=" hover:bg-secondary-color rounded-lg px-4 py-2 md:px-10">MY SKILLS</Link>
      </div>
    </div>
  );
};

export default User;
