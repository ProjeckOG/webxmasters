import { createClient } from "@/lib/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const AccountDetails = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }
  return (
    <div className="uppercase">
      <form>
        <div className=" ">
          <label htmlFor="username" className="block mb-2 text-sm font-bold ">
            Username
          </label>
          <input
            id="username"
            className="w-full p-2 mb-3 rounded"
            type="text"
          />

          <div className="flex mb-3">
            <div className="w-full md:w-1/2 mr-2">
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-bold "
              >
                First Name
              </label>
              <input
                id="firstName"
                className="w-full p-2 rounded"
                type="text"
              />
            </div>

            <div className="w-full md:w-1/2">
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-bold "
              >
                Last Name
              </label>
              <input id="lastName" className="w-full p-2 rounded" type="text" />
            </div>
          </div>

          <label htmlFor="email" className="block mb-2 text-sm font-bold ">
            Email
          </label>
          <input id="email" className="w-full p-2 mb-3 rounded" type="email" value={data?.user.email} />

          <div className="flex mb-3">
            <div className="w-1/2 mr-2">
              <label
                htmlFor="mobilePhone"
                className="block mb-2 text-sm font-bold "
              >
                Mobile Phone
              </label>
              <input
                id="mobilePhone"
                className="w-full p-2 rounded"
                type="tel"
              />
            </div>

            <div className="w-1/2">
              <label
                htmlFor="birthday"
                className="block mb-2 text-sm font-bold "
              >
                Birthday
              </label>
              <input
                id="birthday"
                className="w-full p-2 text-gray-400 rounded"
                type="date"
              />
            </div>
          </div>

          <button className="w-full bg-secondary-color  py-2 px-4 rounded hover:bg-accent-color">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountDetails;
