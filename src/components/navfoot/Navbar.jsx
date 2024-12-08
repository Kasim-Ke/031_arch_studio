import logo from "./logo.svg";
import burger from "./icons/icon-hamburger.svg";

const Navbar = () => {
  return (
    <div className="lg:max-w-[1440px] lg:h-[150px] md:max-w-[768px] h-[100px] min-w-[375px] flex justify-center items-center mx-auto ">
      <div className="lg:w-[1110px] lg:h-[40px]  ">
        <div className="lg:w-[554px] md:w-[500px] w-[311px]  flex justify-between font-bold ">
          <img src={logo} alt="logo" />
          <div className=" flex justify-between  items-center md:hidden">
            <img className=" " src={burger} alt="burger" />
          </div>

          <div className=" lg:w-[373px] lg:text-[18px] md:w-[300px]  hidden   md:flex justify-between  items-center">
            <button className="text-[#7D828F] hover:text-[#1B1D23] duration-300">
              Home
            </button>
            <button className="text-[#7D828F] hover:text-[#1B1D23] duration-300">
              Portfolio
            </button>
            <button className="text-[#7D828F] hover:text-[#1B1D23] duration-300">
              About Us
            </button>
            <button className="text-[#7D828F] hover:text-[#1B1D23] duration-300">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
