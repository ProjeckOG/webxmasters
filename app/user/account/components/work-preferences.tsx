import Image from "next/image";

const WorkPreferences = () => {
  return (
    <div className="flex flex-col justify-center mb-10 ">
      <h2 className="  text-center text-2xl font-bold my-10">
        WORK PREFERENCES
      </h2>
      <form>
        <div className="mb-6">
          <label className="text-xl font-bold mb-3 block mt-10">WORK AVAILABILITY</label>
          <div className="mb-3">
            <label className="block ">
              <input
                type="radio"
                name="availability"
                className="form-radio h-5 w-5"
              />{" "}
              FULL-TIME
            </label>
            <label className="block ">
              <input
                type="radio"
                name="availability"
                className="form-radio h-5 w-5"
              />{" "}
              PART-TIME
            </label>
            <label className="block ">
              <input
                type="radio"
                name="availability"
                className="form-radio h-5 w-5"
              />{" "}
              FREELANCE/CONTRACT
            </label>
            <label className="block ">
              <input
                type="radio"
                name="availability"
                className="form-radio h-5 w-5"
              />{" "}
              ANY
            </label>
          </div>
        </div>
        <div className="uppercase">
          <label className="text-xl font-bold mb-3 block mt-10">Work History</label>

          <label className="block mb-2 text-sm font-bold">
            Job Position
            <input className="w-full p-2 mb-3 rounded" type="text" />
          </label>

          <label className="block mb-2 text-sm font-bold">
            Company
            <input className="w-full p-2 mb-3 rounded" type="text" />
          </label>

          <div className="flex mb-3">
            <label className="w-1/2 mr-2 block">
              Date Started
              <input className="w-full p-2 rounded" type="text" />
            </label>

            <label className="w-1/2 block">
              Date End
              <input className="w-full p-2 rounded" type="text" />
            </label>
          </div>

          <button className="text-sm bg-blue-600 hover:bg-blue-700 py-1 px-2 rounded">
            + Add Another Job
          </button>
        </div>
        <div className="mb-6">
          <label className="text-xl font-bold mb-3 block mt-10">Education</label>

          <label className="block mb-2 text-sm font-bold">
            School / University
            <input className="w-full p-2 mb-3 rounded" type="text" />
          </label>

          <div className="flex mb-3">
            <label className="w-1/2 mr-2 block">
              Degree Type
              <input className="w-full p-2 rounded" type="text" />
            </label>

            <label className="w-1/2 block">
              Completion Year
              <input className="w-full p-2 rounded" type="text" />
            </label>
          </div>

          <button className="text-sm bg-blue-600 hover:bg-blue-700 py-1 px-2 rounded">
            + Add More Education
          </button>
        </div>

        <div className="mb-6">
          <label className="block  text-sm font-bold mb-2">
            ARE YOU LOOKING FOR WORK
          </label>
          <div className="relative inline-block w-10 align-middle select-none">
            <input
              type="checkbox"
              name="looking_for_work"
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
            <label
              htmlFor="looking_for_work"
              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
            ></label>
          </div>
        </div>
        <button className="w-full bg-blue-600  py-2 px-4 rounded hover:bg-blue-700">
          UPDATE
        </button>
      </form>
    </div>
  );
};

export default WorkPreferences;
