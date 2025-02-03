import React from "react";

const SponsorForm = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black px-4 py-10">
      {/* Title Outside the Form */}
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-2 text-center font-[Genos]">
        WANT TO
      </h2>
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center font-[Genos]">
        SPONSOR US
      </h2>

      {/* Form Container */}
      <div className="bg-[00000] rounded-t-2xl rounded-b-none p-8 shadow-lg w-full max-w-lg md:max-w-2xl">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-white">Company Name</label>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full text-white px-3 py-2 mt-1 border border-[rgb(0,191,255)] rounded-md focus:ring focus:ring-indigo-300"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-white">Your Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 text-white py-2 mt-1 border border-[rgb(0,191,255)] rounded-md focus:ring focus:ring-indigo-300"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-white">Phone No.</label>
            <input
              type="text"
              placeholder="Phone No."
              className="w-full px-3 text-white py-2 mt-1 border border-[rgb(0,191,255)] rounded-md focus:ring focus:ring-indigo-300"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-white">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 text-white py-2 mt-1 border border-[rgb(0,191,255)] rounded-md focus:ring focus:ring-indigo-300"
            />
          </div>
          <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white font-semibold px-6 py-2 rounded-md shadow-md transition-all hover:scale-105 animate-gradient-flow bg-[length:200%_200%]"
            >
              SUBMIT FORM
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SponsorForm;
