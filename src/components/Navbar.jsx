import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto relative py-5">
        <nav className="flex items-center justify-between bg-transparent">
          <h1 className="text-2xl font-bold cursor-pointer text-white ml-4">
            AIT SPORTS CLUB
          </h1>

         
          <div className="hidden md:flex items-center justify-center gap-10">
            <p className="text-xl font-medium cursor-pointer font-[Genos] text-white hover:text-gray-300">
              Brochure
            </p>
            <p className="text-xl font-medium cursor-pointer font-[Genos] text-white hover:text-gray-300">
              Rulebook
            </p>

     
            <span className="text-white mx-4">|</span>

            <p className="text-xl font-medium cursor-pointer font-[Genos] text-white hover:text-gray-300">
              Team
            </p>
            <p className="text-xl font-medium cursor-pointer font-[Genos] text-white hover:text-gray-300">
              Contact Us
            </p>
          </div>

    
          <div className="hidden md:flex items-center mr-4">
            <button className="px-4 py-2 text-sm border-2 font-[Genos] rounded-lg border-white text-white hover:text-black hover:bg-white cursor-pointer">
              Register Now
            </button>
          </div>

     
          <div className="md:hidden">
            <div className="absolute top-0 z-50 text-2xl right-5" ref={parent}>
              <div onClick={handleMenu} className="cursor-pointer">
                {toggleMenu ? <img src={Close} alt="Close Menu" /> : <img src={Hamburger} alt="Open Menu" />}
              </div>
            </div>

        
            <div className={`absolute right-0 top-14 transition-all duration-300 ${toggleMenu ? "block" : "hidden"}`}>
              {toggleMenu && <MobileNavbar />}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;