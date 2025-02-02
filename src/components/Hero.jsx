import React, { useEffect, useRef, useState } from "react";
import cricket from "../assets/cricket.png";
import football from "../assets/football.png";
import logo from "../assets/paceLogo.png"; // Import the logo

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative bg-black hero-container text-white h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

      {/* Cricket and Football Images */}
      <img
        src={cricket}
        alt="Cricketer"
        className={`absolute left-[10%] bottom-25 w-1/6 z-10 transform transition-transform duration-1000 ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        } hidden md:block`} // Hide on mobile/tablet (using md:block to show on desktop)
      />
      <img
        src={football}
        alt="Footballer"
        className={`absolute right-[10%] bottom-27 w-1/6 z-10 transform transition-transform duration-1000 ${
          isVisible ? "translate-x-0" : "translate-x-full"
        } hidden md:block`} // Hide on mobile/tablet (using md:block to show on desktop)
      />

      <div className="relative text-center z-20">
        {/* Background Logo Image (Further Increased Size) */}
        <img
          src={logo}
          alt="PACE Logo"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] opacity-15 z-0" // Increased size further
        />

        {/* PACE Text */}
        <h1
          className={`relative text-[200px] font-bold font-[Genos] tracking-wide uppercase transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            color: "transparent",
            WebkitTextStroke: "2px white",
            zIndex: 10, // Ensures text is above the logo
          }}
        >
          PACE
        </h1>

        {/* Button */}
        <button
          className="relative mt-3 text-xl font-semibold px-16 py-4 rounded-full text-white"
          style={{
            background: "rgba(0, 8, 16, 0.2)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            position: "relative",
            overflow: "hidden",
            border: "none",
          }}
        >
          <span
            style={{
              content: '""',
              position: "absolute",
              inset: 0,
              borderRadius: "inherit",
              padding: "2px",
              background:
                "linear-gradient(200deg, #80C2FF 10%, rgba(18, 15, 15, 0) 60%)",
              WebkitMask:
                "linear-gradient(white 0 0) content-box, linear-gradient(white 0 0)",
              WebkitMaskComposite: "destination-out",
              maskComposite: "exclude",
            }}
          ></span>
          2024-25
        </button>
      </div>

      {/* Add media queries for responsive design */}
      <style jsx>{`
        /* Tablet View */
        @media (max-width: 1024px) {
          .absolute {
            position: absolute;
          }
          .w-1\\/6 {
            width: 10%;
          }
          .text-[200px] {
            font-size: 150px;
          }
        }

        /* Mobile View */
        @media (max-width: 768px) {
          .w-1\\/6 {
            width: 50%;
          }
          .text-[200px] {
            font-size: 120px;
          }
          .w-[90%] {
            width: 100%;
          }

        }
          /* Phone View (Below 500px) */
        @media (max-width: 500px) {
          .hero-container {
            width: 150%;
            height: 200%;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
