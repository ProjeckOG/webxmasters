
import Link from "next/link"
import Image from "next/image"

export default function SignUp() {
    return (
      <div className="my-32 flex items-center  justify-center bg-dark-blue">
      <div className="w-full max-w-lg p-8 border rounded-lg bg-darker-blue shadow-xl">
        <h2 className="text-3xl text-center text-white font-bold mb-6">JOIN OTHER WEBMASTERS</h2>
        <button className="w-full flex items-center justify-center px-4 py-3 mb-5 bg-accent-color text-white rounded hover:bg-gray-900 focus:outline-none">
          SIGN UP WITH GOOGLE <Image src="/googlelogo.png" alt="google logo" width="50" height="50" />
        </button>
        <hr />
        <div className="text-white text-center my-4">OR</div>
        <form>
          <input className="w-full p-2 mb-4 rounded " type="text" placeholder="USERNAME" />
          <div className="flex -mx-2">
            <input className="w-1/2 mx-2 p-2 mb-4 rounded " type="text" placeholder="FIRST NAME" />
            <input className="w-1/2 mx-2 p-2 mb-4 rounded " type="text" placeholder="LAST NAME" />
          </div>
          <input className="w-full p-2 mb-4 rounded " type="password" placeholder="PASSWORD" />
          <input className="w-full p-2 mb-6 rounded  " type="password" placeholder="REPEAT PASSWORD" />
          <button className="w-full px-4 py-2 mb-4 rounded bg-primary-color text-white hover:bg-accent-color">
            SUBMIT
          </button>
          <div className="text-center text-white mt-6">
          ALREADY A MEMBER? <Link href="/login" className=" hover:underline">LOGIN HERE</Link>
        </div>
        </form>
      </div>
    </div>
    )
  }
  