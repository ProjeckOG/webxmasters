import { Button } from "@/lib/@/components/ui/button";
import Image from "next/image";

const ResetPassword = () => {
  return (
    <div className="uppercase">
      <form className="">
        <div className="mb-4">
          <label
            htmlFor="currentPassword"
            className="block mb-2 text-sm font-bold "
          >
            Current Password
          </label>
          <input
            id="currentPassword"
            className="w-full p-2 mb-3 rounded"
            type="password"
          />

          <label
            htmlFor="newPassword"
            className="block mb-2 text-sm font-bold "
          >
            New Password
          </label>
          <input
            id="newPassword"
            className="w-full p-2 mb-3 rounded"
            type="password"
          />

          <label
            htmlFor="repeatNewPassword"
            className="block mb-2 text-sm font-bold "
          >
            Repeat New Password
          </label>
          <input
            id="repeatNewPassword"
            className="w-full p-2 mb-3 rounded"
            type="password"
          />

          <Button variant={"outline"} className="w-full bg-secondary-color font-bold p-4 flex items-center rounded hover:bg-secondary">
            UPDATE PASSWORD
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
