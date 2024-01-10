import Image from "next/image"
import Link from "next/link"

export default function Login() {
    return (
      <div className="my-32 flex items-center justify-center">
      <div className=" mx-auto p-8 border bg-transparent 	 border-white rounded-lg">
        <h2 className="text-white text-3xl mb-6 text-center font-bold">LOG IN</h2>
        <button className="w-full flex items-center justify-center px-4 py-3 mb-5 bg-accent-color text-white rounded hover:bg-gray-900 focus:outline-none">
          LOG IN WITH GOOGLE <Image src="/googlelogo.png" alt="google logo" width="50" height="50" />
        </button>
        <hr />
        <div className="text-center text-white my-4">OR</div>
        <div className="space-y-4">
          <input type="text" placeholder="USERNAME" className="w-full p-2 rounded"/>
          <input type="password" placeholder="PASSWORD" className="w-full p-2  rounded"/>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-white">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">REMEMBER ME</span>
            </label>
          </div>
          <button className="bg-secondary-color text-white px-4 py-3 w-full font-bold rounded hover:bg-accent-color">LOG IN</button>
        </div>
        <div className="text-center text-gray-400 mt-6 ">
          <Link href="/forgotpassword" className="hover:underline">FORGOT YOUR PASSWORD?</Link>
        </div>
        <div className="text-center text-white mt-6">
          NOT A MEMBER? <Link href="/signup" className=" hover:underline">REGISTER HERE</Link>
        </div>
      </div>
    </div>
    )
  }
  