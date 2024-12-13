import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import arrow from "../navfoot/icons/icon-arrow.svg";

import HeroParamourDektop from "./desktop/image-hero-paramour.jpg";
import HeroParamourTablet from "./tablet/image-hero-paramour.jpg";
import HeroParamourMobile from "./mobile/image-hero-paramour.jpg";

import HeroSeraphDektop from "./desktop/image-hero-seraph.jpg";
import HeroSeraphTablet from "./tablet/image-hero-seraph.jpg";
import HeroSeraphMobile from "./mobile/image-hero-seraph.jpg";

import HeroFederalDektop from "./desktop/image-hero-federal.jpg";
import HeroFederalTablet from "./tablet/image-hero-federal.jpg";
import HeroFederalMobile from "./mobile/image-hero-federal.jpg";

import HeroTrinityDektop from "./desktop/image-hero-trinity.jpg";
import HeroTrinityTablet from "./tablet/image-hero-trinity.jpg";
import HeroTrinityMobile from "./mobile/image-hero-trinity.jpg";

const HomeHero = () => {
  const [currentSlide, setCurrentSlide] = useState("paramour");

  const slides = {
    paramour: {
      title: "Project Paramour",
      description:
        "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
      desktopImage: HeroParamourDektop,
      tabletImage: HeroParamourTablet,
      mobileImage: HeroParamourMobile,
    },
    seraph: {
      title: "Seraph Station",
      description:
        "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
      desktopImage: HeroSeraphDektop,
      tabletImage: HeroSeraphTablet,
      mobileImage: HeroSeraphMobile,
    },
    federal: {
      title: "Federal II Tower",
      description:
        "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
      desktopImage: HeroFederalDektop,
      tabletImage: HeroFederalTablet,
      mobileImage: HeroFederalMobile,
    },
    trinity: {
      title: "Trinity Bank Tower",
      description:
        "Trinity Bank challenged us to make a concept for an 84-story building located in the middle of a city with a high earthquake frequency. For this project, we used curves to blend design and stability to meet our objectives.",
      desktopImage: HeroTrinityDektop,
      tabletImage: HeroTrinityTablet,
      mobileImage: HeroTrinityMobile,
    },
  };

  const current = slides[currentSlide];

  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, []);

  useEffect(() => {
    AOS.refreshHard(); // Refresh AOS animations for the new slide
  }, [currentSlide]);

  return (
    <div className="relative lg:max-w-[1440px] md:max-w-[768px] max-w-[375px] h-full flex justify-center items-center mx-auto">
      {/* Image Container with Overlay */}
      <div key={currentSlide} className="relative">
        <div
          className="absolute inset-0 bg-black/35 z-20"
          data-aos="fade-right"
        />
        <img
          className="lg:block hidden object-cover"
          src={current.desktopImage}
          alt={`${currentSlide} Desktop`}
          data-aos="fade-right"
        />
        <img
          className="md:block lg:hidden hidden object-cover"
          src={current.tabletImage}
          alt={`${currentSlide} Tablet`}
          data-aos="fade-right"
        />
        <img
          className="block md:hidden object-cover"
          src={current.mobileImage}
          alt={`${currentSlide} Mobile`}
          data-aos="fade-right"
        />
      </div>

      {/* Content Section */}
      <div
        key={`${currentSlide}-content`}
        className="absolute lg:w-[544px] md:w-[457px] md:h-[355px] md:top-[180px] lg:left-[355px] md:left-[155px] w-[311px] h-[304px] flex flex-col justify-between items-start text-white z-30"
      >
        <h1
          data-aos="fade-down"
          className="font-bold md:text-[96px] md:leading-[80px] md:tracking-[-2px] text-[48px] leading-[48px] tracking-[-1.2px]"
        >
          {current.title}
        </h1>
        <p
          data-aos="fade-up"
          className="lg:w-[445px] text-[18px] leading-[24px]"
        >
          {current.description}
        </p>
        <button className="w-[252px] h-[72px] bg-[#1B1D23] hover:bg-[#60636D] duration-300">
          <div className="w-[183px] flex justify-between items-center mx-auto font-bold text-[18px]">
            <p>See Our Portfolio</p>
            <img src={arrow} alt="arrow" />
          </div>
        </button>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute hidden left-[85px] top-[642px] w-[320px] h-[80px] z-40 lg:flex justify-between items-center">
        {Object.keys(slides).map((slideKey, index) => (
          <button
            key={slideKey}
            onClick={() => setCurrentSlide(slideKey)}
            className={`flex justify-center items-center w-[80px] h-[80px] font-bold duration-300 ${
              currentSlide === slideKey
                ? "bg-[#1B1D23] text-white"
                : "bg-white text-[#7D828F] hover:bg-[#EEEFF4]"
            }`}
          >
            {`0${index + 1}`}
          </button>
        ))}
      </div>
      {/* Rotated HOME Section */}
      <div className="absolute hidden top-0 left-[-100px] lg:w-[272px] lg:h-[24px] md:flex items-center justify-between rotate-90">
        <hr data-aos="fade-right" className="w-[104px]" />
        <h3
          data-aos="fade-left"
          className="text-[24px] leading-[24px] tracking-[18px] text-[#C8CCD8]"
        >
          HOME
        </h3>
      </div>
    </div>
  );
};

export default HomeHero;
