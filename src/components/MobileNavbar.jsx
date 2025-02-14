import React from "react";
import { useNavigate } from "react-router-dom";
import brochure from "../assets/pace2025brochure.pdf"
import pace from "../assets/rulebook.pdf"

const MobileNavbar = ({ isMobileOpen, setIsMobileOpen }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center gap-6 transform ${
        isMobileOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-40`}
    >
      <a
        href={brochure}
        className="text-lg text-white hover:text-gray-300"
        download
      >
        Brochure
      </a>

      <a
        href={pace}
        className="text-lg font-[Genos] text-white hover:text-gray-300"
        download
      >
        Rulebook
      </a>
      <a href="#" className="text-lg text-white hover:text-gray-300">
        Team
      </a>
      <a
        href="https://linktr.ee/PACE2K25"
        className="text-lg text-white hover:text-gray-300"
      >
        Contact Us
      </a>
      <button
        className="px-4 py-2 text-sm border-2 rounded-lg border-white text-white hover:bg-white hover:text-black"
        onClick={() => {
          setIsMobileOpen(false); // Close navbar
          navigate("/register"); // Navigate to register page
        }}
      >
        Register Now
      </button>
    </div>
  );
};

export default MobileNavbar;