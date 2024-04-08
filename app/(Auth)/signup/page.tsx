import Link from "next/link";
import GoogleAuth from "./components/googleAuth";
import GithubAuth from "./components/githubAuth";
import EmailForm from "./components/emailForm";

export default function SignUp() {
  return (
    <div className="my-32 flex items-center justify-center">
      <div className="mx-auto p-8 border  lg:w-1/3 w-full	 rounded-lg">
        <h2 className="text-3xl mb-6 text-center font-bold">
          JOIN OTHER WEBMASTERS
        </h2>
        <GithubAuth />
        <GoogleAuth />
        <hr />
        <div className=" text-center my-4">OR</div>
        <EmailForm />
        <div className="text-center  mt-6">
          ALREADY A MEMBER?{" "}
          <Link href="/login" className="hover:underline">
            {" "}
            LOGIN HERE
          </Link>
        </div>
      </div>
    </div>
  );
}
