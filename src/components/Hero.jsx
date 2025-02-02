import React, { useEffect, useRef, useState } from "react";
import cricket from "../assets/cricket.png";
import football from "../assets/football.png";

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
      className="relative bg-black text-white h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

      <img
        src={cricket}
        alt="Cricketer"
        className={`absolute left-70 bottom-25 w-1/6 z-10 transform transition-transform duration-1000 ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      />
      <img
        src={football}
        alt="Footballer"
        className={`absolute right-70 bottom-27 w-1/6 z-10 transform transition-transform duration-1000 ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      />

      <div className="relative text-center z-20">
        <h1
          className={`text-[200px] font-bold font-[Genos] tracking-wide uppercase transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            color: "transparent", // Makes fill transparent
            WebkitTextStroke: "2px white", // Stroke effect for text
          }}
        >
          PACE
        </h1>

        {/* Button */}
        <button
          className="relative mt-3 text-xl font-semibold px-16 py-4 rounded-full text-white"
          style={{
            background: "rgba(0, 8, 16, 0.2)", // More transparent for glass effect
            backdropFilter: "blur(10px)", // Frosted glass blur effect
            WebkitBackdropFilter: "blur(10px)", // Safari support
            position: "relative",
            overflow: "hidden",
            border: "none",
          }}
        >
          {/* Border effect */}
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
    </div>
  );
};

export default Hero;
