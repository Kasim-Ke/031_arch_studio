import conDesktop from "./desktop/image-hero.jpg";
import conTablet from "./tablet/image-hero.jpg";
import conMobile from "./mobile/image-hero.jpg";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const ContactHero = () => {
  useEffect(() => {
    AOS.init({
      offset: 50, // Trigger animation 100px before element enters the viewport
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-out", // Smooth easing for animations
      once: true, // Allow retriggering when scrolling down
      mirror: false, // Prevent triggering on scroll up
    });
  }, []);
  return (
    <div className="relative lg:max-w-[1440px] md:max-w-[768px] max-w-[375px] h-full  mx-auto">
      <div className="relative lg:max-w-[1110px] md:max-w-[768px] max-w-[375px]  flex-row flex justify-between items-center mx-auto ">
        <div data-aos="fade-right" className="relative lg:mx-0  mx-auto ">
          <div className="absolute inset-0 bg-black/35 z-20" />
          <img
            className="lg:block hidden object-cover"
            src={conDesktop}
            alt="Desktop"
          />
          <img
            className="md:block lg:hidden hidden object-cover"
            src={conTablet}
            alt="Tablet"
          />
          <img
            className="block md:hidden object-cover "
            src={conMobile}
            alt="Mobile"
          />
        </div>
        <div className="absolute lg:top-[220px] lg:right-0 md:top-[289px] md:right-[97px] lg:w-[630px] lg:h-[500px] md:w-[516px] md:h-[431px] w-[353px] h-[410px] top-[195px] bg-white z-40 flex justify-end items-end ">
          <div className="flex flex-col items-end justify-between lg:w-[446px] lg:h-[341px] md:w-[456px] md:h-[267px] w-[311px] h-[269px] my-[25%] md:my-0  mx-auto md:mx-0  ">
            <div className="lg:mt-[50px]">
              <h2
                data-aos="fade-down"
                className="md:text-[72px] md:leading-[64px] md:tracking-[-2px] text-[48px] leading-[52px] tracking-[-1.2px] font-bold"
              >
                Your team of professionals
              </h2>
            </div>
            <div
              data-aos="fade-up"
              className="text-[18px] leading-[24px] text-[#60636D]"
            >
              Our small team of world-class professionals will work with you
              every step of the way. Strong relationships are at the core of
              everything we do. This extends to the relationship our projects
              have with their surroundings.
            </div>
          </div>
        </div>
        <div
          data-aos="fade-down"
          className="absolute lg:top-[135px] lg:left-[250px] md:top-[200px] md:left-[280px]  lg:text-[250px]  md:leading-[200px]   md:tracking-[-5px] md:text-[120px] font-bold text-[#EEEFF4] md:block hidden z-50"
        >
          Contact
        </div>
      </div>
      <div className="absolute hidden top-[80px] left-[-168px] lg:w-[400px] lg:h-[4px] md:flex items-center justify-between rotate-90">
        <hr data-aos="fade-right" className="w-[104px] " />
        <h3
          data-aos="fade-left"
          className="text-[24px] leading-[24px] tracking-[18px] mx-5 text-[#C8CCD8]"
        >
          CONTACT
        </h3>
      </div>
    </div>
  );
};

export default ContactHero;
