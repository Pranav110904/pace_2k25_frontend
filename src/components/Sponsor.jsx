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

  // trigger animation whenever the section is in view
  const { ref, inView } = useInView({
    triggerOnce: false, // Allow animation to trigger every time the section is in view
    threshold: 0.5, // 50% visibility to trigger the animation
  });

  return (
    <div
      ref={ref}
      className="bg-black text-white hero3-container py-10 px-4 w-full overflow-hidden"
    >
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        animate={{
          x: inView ? 0 : -100,
          opacity: inView ? 1 : 0,
        }}
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

      <div className="flex justify-between flex-wrap w-full space-y-4 md:space-y-0 md:space-x-4">
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
            } // Reset to initial state when out of view
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: "easeInOut", // Added easing for smooth transitions
            }}
            className="relative h-80 w-full md:w-[18%] flex flex-col justify-end rounded-3xl shadow-lg bg-gradient-to-br from-gray-900 to-black"
            style={{
              boxShadow:
                "0 4px 6px rgba(0, 0, 0, 0.5), inset 0 4px 6px rgba(255, 255, 255, 0.1)",
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          >
            <div
              className={`absolute bottom-0 left-0 right-0 flex justify-center items-center h-16 ${sponsor.color} rounded-b-xl`}
            >
              <p className="text-white font-semibold font-[Genos] text-xl">
                {sponsor.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <style jsx>{`
        /* Phone View (Below 500px) */
        @media (max-width: 500px) {
          .hero3-container {
            width: 150%;
            height: 200%;
          }
        }
      `}</style>
    </div>
  );
};

export default Sponsors;
