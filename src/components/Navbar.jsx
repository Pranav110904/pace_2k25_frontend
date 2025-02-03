import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons
import MobileNavbar from "./MobileNavbar"; 

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <div className="bg-black w-full relative">
      <div className="container mx-auto py-5 px-4">
        {/* Desktop Navbar */}
        <nav className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white cursor-pointer">
            AIT SPORTS CLUB
          </h1>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-xl text-white hover:text-gray-300">Brochure</a>
            <a href="#" className="text-xl text-white hover:text-gray-300">Rulebook</a>
            <span className="text-white">|</span>
            <a href="#" className="text-xl text-white hover:text-gray-300">Team</a>
            <a href="https://linktr.ee/pace2025" className="text-xl text-white hover:text-gray-300">
              Contact Us
            </a>
          </div>

          {/* Desktop Register Button */}
          <div className="hidden md:flex">
            <button
              className="px-4 py-2 text-sm border-2 rounded-lg border-white text-white hover:bg-white hover:text-black"
              onClick={() => navigate("/register")}
            >
              Register Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white z-50" onClick={toggleMobileMenu}>
            {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navbar (Imported Component) */}
      <MobileNavbar isMobileOpen={isMobileOpen} />
    </div>
  );
};

export default Navbar;