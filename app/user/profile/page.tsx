import Image from "next/image";
import Link from "next/link";
import { ArrowBigLeftIcon } from "lucide-react";
const Profile = () => {

  return (
    <div className="flex items-center justify-center mb-5 px-4">
    <div className="w-full md:w-1/2 mt-10  rounded-lg">
      <div className="mb-3 ">
      <div className="w-full md:w-1/2">
      <Link href="/user" className=" flex uppercase font-bold  p-3  rounded-xl"><ArrowBigLeftIcon fill="white"/>Back to User Activity</Link>
      </div>
      <Image width={50} height={50} src='/googlelogo.png'className="bg-gray-300 rounded-3xl mx-auto mb-3" alt="Profile Picture"/>
        <label className="block text-sm text-center font-bold mb-2" htmlFor="profile-picture">
          PROFILE PICTURE
        </label>
        <div className=" ">
         <form method="POST" encType="multipart/form-data" className="flex flex-col md:flex-row p-2 justify-between items-center ">
          <label htmlFor="file">Click here to upload a image</label>
          <input id="file" name="file" type="file" />
          <button className="bg-secondary-color hover:bg-accent-color font-bold py-2 px-4 rounded">
            UPLOAD
          </button>
          </form>
        </div>
      </div>
      <div className="mb-3">
        <label className="block text-sm font-bold mb-2" htmlFor="title">
          TITLE
        </label>
        <input className="w-full p-2 rounded" id="title" type="text" />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-bold mb-2" htmlFor="short-description">
          SHORT DESCRIPTION
        </label>
        <textarea className="w-full p-2  rounded" id="short-description"></textarea>
      </div>
      <div className="mb-3">
        <label className="block text-sm font-bold mb-2" htmlFor="website-domain">
          WEBSITE DOMAIN
        </label>
        <input className="w-full p-2 rounded" id="website-domain" type="text" />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-bold mb-2" htmlFor="website-domain">
          LINKEDIN
        </label>
        <input className="w-full p-2 rounded" id="website-domain" type="text" />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-bold mb-2" htmlFor="website-domain">
          FACEBOOK
        </label>
        <input className="w-full p-2 rounded" id="website-domain" type="text" />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-bold mb-2" htmlFor="website-domain">
          INSTAGRAM
        </label>
        <input className="w-full p-2 rounded" id="website-domain" type="text" />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-bold mb-2" htmlFor="website-domain">
          TWITTER
        </label>
        <input className="w-full p-2 rounded" id="website-domain" type="text" />
      </div>
      <button className="w-full bg-secondary-color hover:bg-accent-color font-bold py-2 px-4 rounded">
        UPDATE PROFILE
      </button>
    </div>
  </div>
  );
};

export default Profile;
