import delDektop from "../home/desktop/image-del-sol.jpg";
import delTablet from "../home/tablet/image-del-sol.jpg";
import delMobile from "../home/mobile/image-del-sol.jpg";

import TowDektop from "../home/desktop/image-228b.jpg";
import TowTablet from "../home/tablet/image-228b.jpg";
import TowMobile from "../home/mobile/image-228b.jpg";

import LeDektop from "../home/desktop/image-hypers.jpg";
import LeTablet from "../home/tablet/image-hypers.jpg";
import LeMobile from "../home/mobile/image-hypers.jpg";

import arrow from "../navfoot/icons/icon-arrow.svg";

const HomeFeatured = () => {
  return (
    <div className="lg:max-w-[1440px] md:max-w-[768px] max-w-[375px] h-full my-[80px] mx-auto">
      <div className="lg:max-w-[1110px] lg:h-[692px] md:max-w-[573px] md:h-[925px] max-w-[311px] h-[959px] flex-col flex justify-between items-center mx-auto ">
        <div className="w-full h-[95px] flex justify-between items-center ">
          <h1 className="md:text-[72px] md:leading-[64px] md:tracking-[-2px] leading-[52px] tracking-[-1.71px] text-[48px] font-bold">
            Featured
          </h1>
          <button className="w-[169px] h-[72px] bg-[#1B1D23] hover:bg-[#60636D] duration-300 text-white md:block hidden">
            <div className="w-[183px] flex justify-between items-center mx-auto font-bold text-[18px] px-8">
              <p>See All</p>
              <img src={arrow} alt="arrow" />
            </div>
          </button>
        </div>
        <div className="lg:w-[1110px] w-[311px] md:w-[573px] lg:h-[560px] md:h-[768px] h-[959px] flex lg:flex-row flex-col justify-between items-center ">
          {/* Project Del Sol */}
          <div className="lg:h-full lg:w-[350px] md:w-[573px] w-full h-[240px] relative">
            <picture>
              <source srcSet={delDektop} media="(min-width: 1324px)" />
              <source srcSet={delTablet} media="(min-width: 768px)" />
              <img
                src={delMobile}
                alt="Project Del Sol"
                className="w-full h-full object-cover"
              />
            </picture>
            <div className="absolute inset-0 bg-black opacity-35"></div>
            <div className="absolute text-[32px] text-white font-bold md:bottom-16 md:left-12 bottom-12 left-6 ">
              <h2>Project Del Sol</h2>
            </div>
            <div className="absolute top-[-50px] lg:right-[-6px] right-3 ">
              <h1 className="md:text-[250px] opacity-60 text-white font-bold hidden md:block">
                1
              </h1>
            </div>
          </div>
          {/* 228B Tower */}
          <div className="lg:h-full lg:w-[350px] md:w-[573px] w-full h-[240px] relative">
            <picture>
              <source srcSet={TowDektop} media="(min-width: 1324px)" />
              <source srcSet={TowTablet} media="(min-width: 768px)" />
              <img
                src={TowMobile}
                alt="228B Tower"
                className="w-full h-full object-cover"
              />
            </picture>
            <div className="absolute inset-0 bg-black opacity-35"></div>
            <div className="absolute text-[32px] text-white font-bold md:bottom-16 md:left-12 bottom-12 left-6 ">
              <h2>228B Tower</h2>
            </div>
            <div className="absolute top-[-50px] lg:right-[-6px] right-3 ">
              <h1 className="md:text-[250px] opacity-60 text-white font-bold hidden md:block">
                2
              </h1>
            </div>
          </div>
          {/* Le Prototype */}
          <div className="lg:h-full lg:w-[350px] md:w-[573px] w-full h-[240px] relative">
            <picture>
              <source srcSet={LeDektop} media="(min-width: 1324px)" />
              <source srcSet={LeTablet} media="(min-width: 768px)" />
              <img
                src={LeMobile}
                alt="Le Prototype"
                className="w-full h-full object-cover"
              />
            </picture>
            <div className="absolute inset-0 bg-black opacity-35"></div>
            <div className="absolute text-[32px] text-white font-bold md:bottom-16 md:left-12 bottom-12 left-6 ">
              <h2>Hypers</h2>
            </div>
            <div className="absolute top-[-50px] lg:right-[-6px] right-3 ">
              <h1 className="md:text-[250px] opacity-60 text-white font-bold hidden md:block">
                3
              </h1>
            </div>
          </div>
        </div>
        <div className="h-[130px] flex items-end md:hidden w-full">
          <button className="w-full h-[72px] bg-[#1B1D23] hover:bg-[#60636D] duration-300 text-white">
            <div className="w-[183px] flex justify-between items-center mx-auto font-bold text-[18px] px-10">
              <p>See All</p>
              <img src={arrow} alt="arrow" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatured;
