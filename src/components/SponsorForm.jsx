import React from "react";

const SponsorForm = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black px-4">
      {/* Title Outside the Form */}
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-[Heavitas]" >
        WANT TO 
      </h2>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-[Heavitas]" >
        SPONSOR US</h2>
      {/* Form Container */}
      <div className="bg-white rounded-2xl p-8 shadow-lg w-[500px] md:w-[600px]">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Company Name</label>
            <input
              type="text"
              placeholder="Placeholder"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Your Name</label>
            <input
              type="text"
              placeholder="Placeholder"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Phone No.</label>
            <input
              type="text"
              placeholder="Placeholder"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Placeholder"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
            />
          </div>
          <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white font-semibold px-6 py-2 rounded-md shadow-md transition-all hover:scale-105"
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
