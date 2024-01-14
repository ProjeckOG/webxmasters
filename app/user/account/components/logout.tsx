import Image from "next/image";
import { redirect } from "next/navigation";
import router from "next/navigation";

const Logout = () => {

  return (
    <div className="uppercase">
        <h2 className="text-white text-center text-2xl font-bold my-10">
        Do you want to Logout?
      </h2>
      <button formAction="/auth/sign-up" className="w-full bg-gray-600 text-white py-2 px-4 rounded hover:bg-accent-color">
        LOGOUT
      </button>
    </div>
  );
};

export default Logout;
