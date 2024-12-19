import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "./logo.svg";
import burger from "./icons/icon-hamburger.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const showNavBar = () => {
    setNav(!nav);
  };

  const closeNavBar = () => {
    setNav(false);
  };

  return (
    <div className="flex flex-col mx-auto">
      <div className="lg:max-w-[1440px] lg:h-[150px] md:max-w-[768px] max-w-[375px] h-[100px] flex flex-col justify-center items-center mx-auto">
        <div className="lg:w-[1110px] lg:h-[40px]">
          <div className="lg:w-[554px] md:w-[500px] w-[311px] mx-6 flex justify-between font-bold">
            <img src={logo} alt="logo" />
            <button
              onClick={showNavBar}
              className="flex justify-between items-center md:hidden"
            >
              <img src={burger} alt="burger" />
            </button>
            <div className="lg:w-[373px] lg:text-[18px] md:w-[300px] hidden md:flex justify-between items-center">
              <Link
                to="/"
                className="text-[#7D828F] hover:text-[#1B1D23] duration-300"
              >
                Home
              </Link>
              <Link
                to="/portfolio"
                className="text-[#7D828F] hover:text-[#1B1D23] duration-300"
              >
                Portfolio
              </Link>
              <Link
                to="/about"
                className="text-[#7D828F] hover:text-[#1B1D23] duration-300"
              >
                About Us
              </Link>
              <button className="text-[#7D828F] hover:text-[#1B1D23] duration-300">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[100px] inset-0 z-50 navbar bg-[#EEEFF4] w-[330px] h-[285px] flex justify-center items-center mx-auto md:hidden ${
          nav ? "visible" : "invisible"
        }`}
      >
        <div className="flex flex-col items-start w-[247px] h-[224px] font-bold text-[32px]">
          <Link onClick={closeNavBar} to="/" className="mb-4">
            Home
          </Link>
          <Link onClick={closeNavBar} to="/portfolio" className="mb-4">
            Portfolio
          </Link>

          <Link onClick={closeNavBar} to="/about" className="mb-4">
            About Us
          </Link>
          <button>Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
