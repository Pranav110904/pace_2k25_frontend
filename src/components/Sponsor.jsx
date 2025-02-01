import React from "react";

const Sponsors = () => {
  const sponsors = [
    { name: "ABC", color: "bg-blue-500" },
    { name: "ABC", color: "bg-red-500" },
    { name: "ABC", color: "bg-yellow-500" },
    { name: "ABC", color: "bg-green-500" },
  ];

  return (
    <div className="bg-black text-white py-10 px-4 w-full">
      <h2 className="text-center text-5xl font-bold font-[Genos] mb-8">OUR SPONSORS</h2>

      <div className="flex justify-start ml-4 mb-8">
        <button className="flex items-center gap-2 px-8 py-3 text-xl font-semibold rounded-lg bg-teal-600 hover:bg-teal-700 transition">
          TITLE SPONSORS
          <span className="text-2xl">&rarr;</span>
        </button>
      </div>

      <div className="flex justify-between flex-wrap w-full  space-y-4 md:space-y-0 md:space-x-4">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className={`relative h-80 w-full md:w-[18%] flex flex-col justify-end rounded-3xl shadow-lg bg-gradient-to-br from-gray-900 to-black`}
            style={{
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5), inset 0 4px 6px rgba(255, 255, 255, 0.1)",
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          >
            <div
              className={`absolute bottom-0 left-0 right-0 flex justify-center rounded-3xl items-center h-16 ${sponsor.color} rounded-b-xl`}
            >
              <p className="text-white font-semibold font-[Genos] text-xl">{sponsor.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
