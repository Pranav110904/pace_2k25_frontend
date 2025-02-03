import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black">
      <div className="container mx-auto relative py-5 px-4">
        <nav className="flex items-center justify-between bg-transparent">
          <h1 className="text-2xl font-bold cursor-pointer text-white">
            AIT SPORTS CLUB
          </h1>

          <div className="hidden md:flex items-center justify-center gap-10">
            <a
              href="#"
              className="text-xl font-medium cursor-pointer font-[Genos] text-white hover:text-gray-300"
            >
              Brochure
            </a>
            <a
              href="#"
              className="text-xl font-medium cursor-pointer font-[Genos] text-white hover:text-gray-300"
            >
              Rulebook
            </a>
            <span className="text-white mx-4">|</span>
            <a
              href="#"
              className="text-xl font-medium cursor-pointer font-[Genos] text-white hover:text-gray-300"
            >
              Team
            </a>
            <a
              href="https://linktr.ee/pace2025"
              className="text-xl font-medium cursor-pointer font-[Genos] text-white hover:text-gray-300"
            >
              Contact Us
            </a>
          </div>

          <div className="hidden md:flex items-center">
            <button
              className="px-4 py-2 text-sm border-2 font-[Genos] rounded-lg border-white text-white hover:text-black hover:bg-white cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Register Now
            </button>
          </div>
        </nav>

        {/* Mobile & Tablet View */}
        <div className="md:hidden flex flex-col items-center gap-4 mt-4">
          <a
            href="#"
            className="text-lg font-medium cursor-pointer font-[Genos] text-white hover:text-gray-300"
          >
            Brochure
          </a>
          <a
            href="#"
            className="text-lg font-medium cursor-pointer font-[Genos] text-white hover:text-gray-300"
          >
            Rulebook
          </a>
          <a
            href="#"
            className="text-lg font-medium cursor-pointer font-[Genos] text-white hover:text-gray-300"
          >
            Team
          </a>
          <a
            href="https://linktr.ee/pace2025"
            className="text-lg font-medium cursor-pointer font-[Genos] text-white hover:text-gray-300"
          >
            Contact Us
          </a>
          <button
            className="px-4 py-2 text-sm border-2 font-[Genos] rounded-lg border-white text-white hover:text-black hover:bg-white cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;