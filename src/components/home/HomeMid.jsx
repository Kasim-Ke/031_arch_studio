import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import arrow from "../navfoot/icons/icon-arrow.svg";

import teamDektop from "../home/desktop/image-small-team.jpg";
import teamTablet from "../home/tablet/image-small-team.jpg";
import teamMobile from "../home/mobile/image-small-team.jpg";

const HomeMid = () => {
  useEffect(() => {
    AOS.init({
      offset: 100, // Trigger animation 100px before element enters the viewport
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-out", // Smooth easing for animations
      once: true, // Allow retriggering when scrolling down
      mirror: false, // Prevent triggering on scroll up
    });
  }, []);

  return (
    <div className="relative lg:max-w-[1100px] md:max-w-[573px] max-w-[375px] h-full flex justify-center items-center mx-auto">
      <div
        className="absolute inset-0 bg-black/35 z-20"
        data-aos="fade-right"
      />
      <img
        className="lg:block hidden object-cover"
        src={teamDektop}
        alt="Desktop"
        data-aos="fade-right"
      />
      <img
        className="md:block lg:hidden hidden object-cover"
        src={teamTablet}
        alt="Tablet"
        data-aos="fade-right"
      />
      <img
        className="block md:hidden object-cover"
        src={teamMobile}
        alt="Mobile"
        data-aos="fade-right"
      />
      <div className="absolute md:w-[445px]  md:h-[255px] md:top-[180px] lg:left-[240px] md:left-[32px] w-[311px] h-[200px] flex flex-col justify-between items-start text-white z-30">
        <h1
          data-aos="fade-down"
          className="font-bold md:text-[72px] md:leading-[80px] md:tracking-[-2px] text-[48px] leading-[48px] tracking-[-1.2px]"
        >
          Small team, big ideas
        </h1>
        <p
          data-aos="fade-up"
          className="lg:w-[445px] text-[18px] leading-[24px]"
        ></p>
        <button className="w-[187px] h-[72px] bg-[#1B1D23] hover:bg-[#60636D] duration-300">
          <div className="w-[183px] flex justify-between items-center mx-auto font-bold text-[18px] px-5">
            <p>About Us</p>
            <img src={arrow} alt="arrow" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default HomeMid;
