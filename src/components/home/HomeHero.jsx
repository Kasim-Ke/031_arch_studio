import arrow from "../navfoot/icons/icon-arrow.svg";

import HeroDektop from "./desktop/image-hero-paramour.jpg";
import HeroTablet from "./tablet/image-hero-paramour.jpg";
import HeroMobile from "./mobile/image-hero-paramour.jpg";

const HomeHero = () => {
  return (
    <div className=" relative  lg:max-w-[1440px]  md:max-w-[768px] max-w-[375px] h-full flex justify-center items-center mx-auto">
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-35"></div>
        <img
          className="lg:block hidden object-cover  "
          src={HeroDektop}
          alt="HeroDektop"
        />
        <img
          className="md:block lg:hidden hidden object-cover  "
          src={HeroTablet}
          alt="HeroTablet"
        />
        <img
          className="block md:hidden object-cover  "
          src={HeroMobile}
          alt="HeroMobile"
        />
      </div>

      <div className="absolute lg:w-[544px] lg:h-[355px]  top-[180px] left-[355px] flex flex-col justify-between items-start  text-white ">
        <h1 className="font-bold text-[96px] leading-[80px] tracking-[-2px]  ">
          Project Paramour
        </h1>
        <p className="lg:w-[445px] text-[18px] leading-[24px] ">
          Project made for an art museum near Southwest London. Project Paramour
          is a statement of bold, modern architecture.
        </p>
        <button className="w-[252px] h-[72px] bg-[#1B1D23] hover:bg-[#60636D] duration-300">
          <div className=" w-[183px] flex justify-between items-center mx-auto font-bold text-[18px] ">
            <p>See Our Portfolio</p>
            <img src={arrow} alt="arrow" />
          </div>
        </button>
      </div>

      <div className="absolute hidden top-0 left-[-100px]  lg:w-[272px] lg:h-[24px] lg:flex items-center justify-between   rotate-90">
        <hr className="w-[104px]" />
        <h3 className="text-[24px] leading-[24px] tracking-[18px]  text-[#C8CCD8]">
          HOME
        </h3>
      </div>
    </div>
  );
};

export default HomeHero;
