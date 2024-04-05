
import Link from "next/link";

import GoogleAuth from "./components/googleAuth";
import GithubAuth from "./components/githubAuth";
import EmailForm from "./components/emailForm";

export default function Login() {
  return (
    <div className="my-32 flex items-center justify-center">
      <div className=" mx-auto p-8 border  md:w-1/3 w-full	 rounded-lg">
        <h2 className="text-3xl mb-6 text-center font-bold">LOG IN</h2>
        <GithubAuth />
        <GoogleAuth />
        <hr />
        <div className="text-center  my-4">OR</div>
        <EmailForm />
        <div className="text-center text-gray-400 mt-6 ">
          <Link href="/forgotpassword" className="hover:underline">
            FORGOT YOUR PASSWORD?
          </Link>
        </div>
        <div className="text-center  mt-6">
          NOT A MEMBER?{" "}
          <Link href="/signup" className=" hover:underline">
            REGISTER HERE
          </Link>
        </div>
      </div>
    </div>
  );
}
function getSession() {
  throw new Error("Function not implemented.");
}
