import { useState } from "react";


const MobileNavbar = () => {

  const [mobileCompany, setMobileCompany] = useState(false);

  const handleCompanyDropDown = () => {
    setMobileCompany(!mobileCompany);
  };

  return (
    <>
      <div className="w-[200px] h-screen bg-transparent py-20 px-5 flex flex-col gap-5">
        <div onClick={handleCompanyDropDown}></div>
        <p className="font-medium text-lg text-MediumGray hover:text-AlmostBlack duration-75">
          Brochure
        </p>
        <p className="font-medium text-lg text-MediumGray hover:text-AlmostBlack duration-75">
          Rulebook
        </p>

        <p className="font-medium text-lg text-MediumGray hover:text-AlmostBlack duration-75">
          Team
        </p>

        <p className="font-medium text-lg text-MediumGray hover:text-AlmostBlack duration-75">
          Contact Us
        </p>
        <button className="text-sm border-2 border-MediumGray py-1 px-3 text-MediumGray rounded-lg">
          Register
        </button>
      </div>
    </>
  );
};

export default MobileNavbar;
