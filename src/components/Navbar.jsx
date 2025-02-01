import React, { useState, useEffect, useRef } from "react";
import Hamburger from "/icon-menu.svg";
import Close from "/icon-close-menu.svg";
import autoAnimate from "@formkit/auto-animate";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="">
      <div className="container relative py-5 bg-transparent">
        <nav className="flex items-center justify-between bg-transparent">
          {/* Logo */}
          <h1 className="text-2xl font-bold cursor-pointer text-white ml-4">
            AIT SPORTS CLUB
          </h1>
          
          {/* Centered Nav Items */}
          <div className="flex items-center justify-center gap-10">
            <p className="hidden text-sm font-medium duration-75 cursor-pointer md:block text-MediumGray hover:text-AlmostBlack">
              Brochure
            </p>
            <p className="hidden text-sm font-medium duration-75 cursor-pointer md:block text-MediumGray hover:text-AlmostBlack">
              Rulebook
            </p>
            <p className="hidden text-sm font-medium duration-75 cursor-pointer md:block text-MediumGray hover:text-AlmostBlack">
              Team
            </p>
            <p className="hidden text-sm font-medium duration-75 cursor-pointer md:block text-MediumGray hover:text-AlmostBlack">
              Contact Us
            </p>
          </div>

          {/* Register Button */}
          <div className="flex gap-10 mr-4">
            <button className="hidden px-4 py-2 text-sm duration-75 border-2 rounded-lg md:block border-white text-MediumGray hover:text-AlmostBlack hover:border-white">
              Register Now
            </button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <div className="absolute top-0 z-50 text-2xl right-5" ref={parent}>
              <div onClick={handleMenu}>
                {toggleMenu ? <img src={Close} /> : <img src={Hamburger} />}
              </div>
            </div>

            {/* Mobile navbar */}
            <div className="absolute right-0 top-5">
              {toggleMenu ? (
                <>
                  <MobileNavbar />
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;