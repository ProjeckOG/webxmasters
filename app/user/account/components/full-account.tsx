'use client'
import ResetPassword from "./reset-password";
import AccountDetails from "./account-details";
import Logout from "./logout";
const FullAccount = () => {
  return (
    <div className="mb-10">
      <h2 className=" text-center text-2xl font-bold my-10">ACCOUNT DETAILS</h2>
      <AccountDetails />
      <h2 className=" text-center text-2xl font-bold my-10">RESET PASSWORD</h2>
      <ResetPassword />
      <h2 className=" text-center text-2xl font-bold my-10">
        DO YOU WANT TO LOGOUT?
      </h2>
      <Logout />
    </div>
  );
};

export default FullAccount;
