import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Sponsors = () => {
  const sponsors = [
    { name: "ABC", color: "bg-blue-500" },
    { name: "XYZ", color: "bg-red-500" },
    { name: "DEF", color: "bg-yellow-500" },
    { name: "GHI", color: "bg-green-500" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className="bg-black text-white hero3-container py-10 px-4 w-full overflow-hidden"
    >
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="text-center text-5xl font-bold font-[Genos] mb-8"
      >
        OUR SPONSORS
      </motion.h2>

      <div className="flex justify-start ml-4 mb-8">
        <button className="flex items-center gap-2 px-8 py-3 text-xl font-semibold rounded-lg bg-teal-600 hover:bg-teal-700 transition">
          TITLE SPONSORS
          <span className="text-2xl">&rarr;</span>
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeInOut" }}
            className="relative h-48 sm:h-56 md:h-64 w-full sm:w-64 md:w-72 flex flex-col justify-end rounded-2xl shadow-lg bg-gradient-to-br from-gray-900 to-black"
            style={{
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5), inset 0 4px 6px rgba(255, 255, 255, 0.1)",
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          >
            <div className={`absolute bottom-0 left-0 right-0 flex justify-center items-center h-12 ${sponsor.color} rounded-b-xl`}>
              <p className="text-white font-semibold font-[Genos] text-sm sm:text-lg">
                {sponsor.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
