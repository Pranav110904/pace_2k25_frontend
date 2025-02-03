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

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black w-full hero7-container relative">
      <div className="container mx-auto py-5 px-4">
        {/* Desktop Navbar */}
        <nav className="flex items-center justify-between flex-col lg:flex-row">
          <h1 className="text-2xl font-bold text-white cursor-pointer mb-4 lg:mb-0">
            AIT SPORTS CLUB
          </h1>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-xl text-white hover:text-gray-300">Brochure</a>
            <a href="#" className="text-xl text-white hover:text-gray-300">Rulebook</a>
            <span className="text-white">|</span>
            <a href="#" className="text-xl text-white hover:text-gray-300" onClick={handleScrollToAbout}>
              About
            </a>

            <a href="https://linktr.ee/pace2025" className="text-xl text-white hover:text-gray-300">
              Contact Us
            </a>
          </div>

          {/* Desktop Register Button */}
          <div className="hidden lg:flex">
            <button
              className="px-4 py-2 text-sm border-2 rounded-lg border-white text-white hover:bg-white hover:text-black"
              onClick={() => navigate("/register")}
            >
              Register Now
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Button (Positioned to the right side) */}
      <button 
        className="lg:hidden text-white absolute top-5 right-5 z-50" 
        onClick={toggleMobileMenu}
      >
        {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navbar (Imported Component) */}
      <MobileNavbar isMobileOpen={isMobileOpen} />
      <style jsx>{`
        /* Phone View (Below 500px) */
        @media (max-width: 500px) {
          .hero7-container {
            width: 150%;
            height: 200%;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
