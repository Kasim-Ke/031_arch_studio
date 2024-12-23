import { Link } from "react-router-dom";
import arrow from "../navfoot/icons/icon-arrow.svg";
import logo2 from "./logo2.svg";

const Footer = () => {
  return (
    <div className="relative lg:max-w-[1440px] md:max-w-[768px] max-w-[375px] lg:h-[400px] md:h-[320px] h-[443px] mx-auto md:my-2 flex items-end">
      <div className="relative   lg:w-[1100px] lg:h-[200px] md:w-[768px] md:h-[120px] mx-auto w-[375px] h-[383px]">
        <div className="lg:w-[984px] md:w-[612px] w-full h-full bg-[#EEEFF4] flex md:flex-row flex-col items-center">
          <div className="hidden bg-[#1B1D23] lg:w-[200px] lg:h-[200px] w-[120px] h-[120px] md:flex items-center justify-center">
            <img
              className="mx-auto lg:w-[96px] lg:h-[40px] w-[58px] h-[24px]"
              src={logo2}
              alt="logo2"
            />
          </div>
          <div className="absolute  top-[-60px] md:hidden bg-[#1B1D23] lg:w-[200px] lg:h-[200px] w-[120px] h-[120px] flex items-center justify-center">
            <img
              className="mx-auto lg:w-[96px] lg:h-[40px] w-[58px] h-[24px]"
              src={logo2}
              alt="logo2"
            />
          </div>
          <div className="lg:w-[373px] md:w-[300px] md:ml-[80px] md:h-full text-[18px] w-[82px] h-[160px] flex flex-col md:flex-row justify-between items-center font-bold my-[30%]">
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

          <button className="absolute lg:bottom-[70px] text-white md:right-0 md:bottom-5 bottom-0 w-[240px] h-[72px]  bg-[#1B1D23]  hover:bg-[#60636D] duration-300">
            <Link to="/portfolio">
              <div className="w-[183px]  flex justify-between items-center mx-auto font-bold text-[18px]">
                <p>See Our Portfolio</p>
                <img src={arrow} alt="arrow" />
              </div>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
