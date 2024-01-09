import Image from "next/image";

const Profile = () => {

  return (
    <div className=" bg-dark-blue flex items-center justify-center px-4">
    <div className="w-full md:w-1/2 mt-10 p-8 rounded-lg">
      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="profile-picture">
          PROFILE PICTURE
        </label>
        <div className="flex items-center justify-between">
          <div className="rounded-full bg-gray-300 w-12 h-12"></div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            UPLOAD
          </button>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="title">
          TITLE
        </label>
        <input className="w-full p-2 rounded" id="title" type="text" />
      </div>
      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="short-description">
          SHORT DESCRIPTION
        </label>
        <textarea className="w-full p-2  rounded" id="short-description"></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="website-domain">
          WEBSITE DOMAIN
        </label>
        <input className="w-full p-2 rounded" id="website-domain" type="text" />
      </div>
      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2">SKILLS</label>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {/* Skill tags */}
          <span className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-1 px-2 rounded">HTML</span>
          {/* More skill tags */}
          <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white py-1 px-2 rounded">
            + ADD MORE SKILLS
          </button>
        </div>
      </div>
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        UPDATE PROFILE
      </button>
    </div>
  </div>
  );
};

export default Profile;
