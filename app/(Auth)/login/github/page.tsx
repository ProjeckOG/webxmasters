import GithubAuth from "../components/githubAuth";
import GoogleAuth from "../components/googleAuth";

export default function Login() {
  return (
    <div className="my-32 flex items-center justify-center">
      <GithubAuth />
      <GoogleAuth />
    </div>
  );
}
