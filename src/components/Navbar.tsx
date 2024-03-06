import { useState } from 'react';
import logo from "../assets/logo.svg";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative z-10 shadow-md bg-[#FFFFFF]">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        <div>
          <img src={logo} alt="Logo" className="w-24 h-6"></img>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 fill-current text-[#0F1629]"
              viewBox="0 0 24 24"
            >
              {showMenu ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 8h18V6H3v2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden md:flex items-center">
          <div className="text-lg font-semibold text-[#0F1629] mr-6">
            Crypto Taxes
          </div>
          <div className="text-lg font-semibold text-[#0F1629] mr-6">
            Free Tools{" "}
          </div>
          <div className="text-lg font-semibold text-[#0F1629] mr-6">
            Resource Center{" "}
          </div>
          <div>
            <button className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] px-8 py-2 text-white rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="md:hidden px-4 py-2 bg-[#1026490F]">
          <div className="text-lg font-semibold text-[#0F1629] mb-2">
            <a href="#" className="block">Crypto Taxes</a>
          </div>
          <div className="text-lg font-semibold text-[#0F1629] mb-2">
            <a href="#" className="block">Free Tools</a>
          </div>
          <div className="text-lg font-semibold text-[#0F1629] mb-2">
            <a href="#" className="block">Resource Center</a>
          </div>
          <div className="text-lg font-semibold text-[#0F1629]">
            <button className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] px-8 py-2 text-white rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
