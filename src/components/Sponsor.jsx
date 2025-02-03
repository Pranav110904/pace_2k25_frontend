import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import udchalo from "../assets/udchalo.png";
import yogi from "../assets/yogi-motors.png";
import budani from "../assets/budhanibros.png";
import campus from "../assets/campus.png";

const Sponsors = () => {
  const sponsors = [
    { name: "UdChalo", color: "bg-blue-500", image: udchalo },
    { name: "Yogi Motors", color: "bg-red-500", image: yogi },
    { name: "Budhani Bros", color: "bg-yellow-500", image: budani },
    { name: "Campus Times", color: "bg-green-500", image: campus },
  ];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="bg-black text-white py-10 px-4 w-full">
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="text-center text-5xl font-bold font-[Genos] mb-8"
      >
        PREVIOUS SPONSORS
      </motion.h2>

      {/* Sponsor Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-8">
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeInOut" }}
            className="relative w-full flex flex-col items-center rounded-2xl shadow-lg bg-gray-900"
          >
            {/* Sponsor Image */}
            <div className="w-full h-48 bg-black flex justify-center items-center rounded-t-2xl overflow-hidden">
              <img src={sponsor.image} alt={sponsor.name} className="w-3/4 h-3/4 object-contain" />
            </div>

            {/* Sponsor Name Section */}
            <div className={`w-full h-12 flex justify-center items-center ${sponsor.color} rounded-b-2xl`}>
              <p className="text-white font-bold uppercase">{sponsor.name}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-8">
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeInOut" }}
            className="relative h-60 sm:h-52 md:h-64 w-full flex flex-col justify-end rounded-2xl shadow-lg bg-gradient-to-br from-gray-900 to-black"
            style={{
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5), inset 0 4px 6px rgba(255, 255, 255, 0.1)",
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          >
            <div className={`absolute bottom-0 left-0 right-0 flex justify-center items-center h-14 ${sponsor.color} rounded-b-xl`}>
              <p className="text-white font-semibold font-[Genos] text-lg">{sponsor.name}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 500px) {
          .hero3-container {
            width: 100%;
            height: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default Sponsors;
