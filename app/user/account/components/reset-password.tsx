import Image from "next/image";

const ResetPassword = () => {
  return (
    <div className="uppercase">
      <h2 className=" text-center text-2xl font-bold my-10">
        RESET PASSWORD
      </h2>
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

          <button className="w-full bg-secondary-color  py-2 px-4 rounded hover:bg-accent-color">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
