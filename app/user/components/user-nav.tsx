import { Button } from "@/lib/@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
const UserNav = () => {
  return (
    <div className="flex items-center  p-2 mb-4">
      <Image
        className="rounded-full border mr-4 md:mr-10"
        width={50}
        height={50}
        src="/googlelogo.png" // Replace with actual image path
        alt="User Profile"
      />
      <div>
        <h2 className="text-xl font-semibold ">Jerry Cullen</h2>
        <div className="flex mt-2">
          <Link href="user/account">
            <Button
              variant={"outline"}
              className="bg-secondary-colorr  font-bold p-2 md:p-3 rounded-3xl mr-2 md:mr-10"
            >
              EDIT ACCOUNT
            </Button>
          </Link>
          <Link href="user/profile">
            <Button
              variant={"outline"}
              className="bg-secondary-color  font-bold  p-2 md:p-3  rounded-3xl mr-2 md:mr-10"
            >
              EDIT PROFILE
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserNav;
