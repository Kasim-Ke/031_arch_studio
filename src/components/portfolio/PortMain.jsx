import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

// Importing images from the portfolio directory
import image22abDesktop from "../portfolio/desktop/image-228b.jpg";
import image22abTablet from "../portfolio/tablet/image-228b.jpg";
import image22abMobile from "../portfolio/mobile/image-228b.jpg";

import imageDelSolDesktop from "../portfolio/desktop/image-del-sol.jpg";
import imageDelSolTablet from "../portfolio/tablet/image-del-sol.jpg";
import imageDelSolMobile from "../portfolio/mobile/image-del-sol.jpg";

import imageEdelweissDesktop from "../portfolio/desktop/image-edelweiss.jpg";
import imageEdelweissTablet from "../portfolio/tablet/image-edelweiss.jpg";
import imageEdelweissMobile from "../portfolio/mobile/image-edelweiss.jpg";

import imageEeboxDesktop from "../portfolio/desktop/image-eebox.jpg";
import imageEeboxTablet from "../portfolio/tablet/image-eebox.jpg";
import imageEeboxMobile from "../portfolio/mobile/image-eebox.jpg";

import imageFederalDesktop from "../portfolio/desktop/image-federal.jpg";
import imageFederalTablet from "../portfolio/tablet/image-federal.jpg";
import imageFederalMobile from "../portfolio/mobile/image-federal.jpg";

import imageHypersDesktop from "../portfolio/desktop/image-hypers.jpg";
import imageHypersTablet from "../portfolio/tablet/image-hypers.jpg";
import imageHypersMobile from "../portfolio/mobile/image-hypers.jpg";

import imageNetcryDesktop from "../portfolio/desktop/image-netcry.jpg";
import imageNetcryTablet from "../portfolio/tablet/image-netcry.jpg";
import imageNetcryMobile from "../portfolio/mobile/image-netcry.jpg";

import imageParamourDesktop from "../portfolio/desktop/image-paramour.jpg";
import imageParamourTablet from "../portfolio/tablet/image-paramour.jpg";
import imageParamourMobile from "../portfolio/mobile/image-paramour.jpg";

import imagePrototypeDesktop from "../portfolio/desktop/image-prototype.jpg";
import imagePrototypeTablet from "../portfolio/tablet/image-prototype.jpg";
import imagePrototypeMobile from "../portfolio/mobile/image-prototype.jpg";

import imageSeraphDesktop from "../portfolio/desktop/image-seraph.jpg";
import imageSeraphTablet from "../portfolio/tablet/image-seraph.jpg";
import imageSeraphMobile from "../portfolio/mobile/image-seraph.jpg";

import imageSxivDesktop from "../portfolio/desktop/image-sxiv.jpg";
import imageSxivTablet from "../portfolio/tablet/image-sxiv.jpg";
import imageSxivMobile from "../portfolio/mobile/image-sxiv.jpg";

import imageTrinityDesktop from "../portfolio/desktop/image-trinity.jpg";
import imageTrinityTablet from "../portfolio/tablet/image-trinity.jpg";
import imageTrinityMobile from "../portfolio/mobile/image-trinity.jpg";

const images = [
  {
    name: "Seraph Station",
    description:
      "An innovative transit hub, blending light and structure seamlessly.",
    desktop: imageSeraphDesktop,
    tablet: imageSeraphTablet,
    mobile: imageSeraphMobile,
  },
  {
    name: "Eebox Building",
    description:
      "A statement in bold lines and colors, showcasing modern architecture.",
    desktop: imageEeboxDesktop,
    tablet: imageEeboxTablet,
    mobile: imageEeboxMobile,
  },
  {
    name: "Federal II Tower",
    description:
      "Soaring into the sky, this tower represents elegance and precision.",
    desktop: imageFederalDesktop,
    tablet: imageFederalTablet,
    mobile: imageFederalMobile,
  },
  {
    name: "Project Paramour",
    description:
      "A blend of art and architecture, reflecting creative ambition.",
    desktop: imageParamourDesktop,
    tablet: imageParamourTablet,
    mobile: imageParamourMobile,
  },

  {
    name: "Le Prototype",
    description:
      "A modern concept house that blends form and function beautifully.",
    desktop: imagePrototypeDesktop,
    tablet: imagePrototypeTablet,
    mobile: imagePrototypeMobile,
  },
  {
    name: "228B Tower",
    description:
      "A minimalistic giant, redefining the urban skyline with its curves.",
    desktop: image22abDesktop,
    tablet: image22abTablet,
    mobile: image22abMobile,
  },
  {
    name: "Sxiv Tower",
    description:
      "A symphony of curves and contrast, redefining modern skyscrapers.",
    desktop: imageSxivDesktop,
    tablet: imageSxivTablet,
    mobile: imageSxivMobile,
  },
  {
    name: "Grand Edelweiss Hotel",
    description:
      "Luxury and grandeur in a skyscraper inspired by alpine purity.",
    desktop: imageEdelweissDesktop,
    tablet: imageEdelweissTablet,
    mobile: imageEdelweissMobile,
  },
  {
    name: "Netcry Tower",
    description: "A web of steel and glass showcasing industrial beauty.",
    desktop: imageNetcryDesktop,
    tablet: imageNetcryTablet,
    mobile: imageNetcryMobile,
  },

  {
    name: "Hypers",
    description:
      "A futuristic marvel, drenched in striking red and geometric precision.",
    desktop: imageHypersDesktop,
    tablet: imageHypersTablet,
    mobile: imageHypersMobile,
  },
  {
    name: "Project Del Sol",
    description:
      "Inspired by sunlight, this structure breathes harmony and serenity.",
    desktop: imageDelSolDesktop,
    tablet: imageDelSolTablet,
    mobile: imageDelSolMobile,
  },

  {
    name: "Trinity Bank Tower",
    description:
      "A financial hub embodying strength, symmetry, and sophistication.",
    desktop: imageTrinityDesktop,
    tablet: imageTrinityTablet,
    mobile: imageTrinityMobile,
  },
];
const PortMain = () => {
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
    <div className="relative lg:max-w-[1440px] md:max-w-[768px] max-w-[375px] h-full flex justify-center items-center mx-auto">
      <div className="lg:w-[1110px] grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1">
        {images.map((image, index) => {
          return (
            <div key={index} className="relative flex flex-col items-center">
              {/* Desktop Image */}
              <button
                data-aos="fade-right"
                className="group relative w-[350px] h-[560px] mb-4 lg:block hidden hover:scale-105 duration-300"
              >
                <img
                  className="object-cover w-full h-full shadow-lg"
                  src={image.desktop}
                  alt={`${image.name} Desktop`}
                />
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/75 duration-300 flex flex-col justify-center items-center">
                  {/* Name */}
                  <h2
                    data-aos="fade-up"
                    className="text-white font-bold text-[32px] absolute bottom-5 left-[5%] group-hover:opacity-0 duration-300"
                  >
                    {image.name}
                  </h2>
                  {/* Description */}
                  <p className="text-white text-[24px] font-medium text-center px-4 opacity-0 group-hover:opacity-100 duration-300 ">
                    {image.description}
                  </p>
                </div>
              </button>
              {/* Tablet Image */}
              <button
                data-aos="fade-right"
                className="group relative w-[573px] h-[240px] mb-4 lg:hidden md:block hidden hover:scale-105 duration-300"
              >
                <img
                  className="object-cover w-full h-full shadow-lg"
                  src={image.tablet}
                  alt={`${image.name} Tablet`}
                />
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/75 duration-300 flex flex-col justify-center items-center">
                  <h2
                    data-aos="fade-up"
                    className="text-white font-bold text-[28px] absolute bottom-5 left-[5%] group-hover:opacity-0 duration-300"
                  >
                    {image.name}
                  </h2>
                  <p className="text-white text-[24px] font-medium text-center px-4 opacity-0 group-hover:opacity-100 duration-300">
                    {image.description}
                  </p>
                </div>
              </button>

              {/* Mobile Image */}
              <button
                data-aos="fade-right"
                className="group relative w-[311px] h-[240px] mb-4 lg:hidden md:hidden hover:scale-105 duration-300"
              >
                <img
                  className="object-cover w-full h-full shadow-lg"
                  src={image.mobile}
                  alt={`${image.name} Mobile`}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/75 duration-300 flex flex-col justify-center items-center">
                  {/* Title */}
                  <h2
                    data-aos="fade-left"
                    className="text-white font-bold text-[24px] absolute bottom-5 left-[5%] group-hover:opacity-0 duration-300"
                  >
                    {image.name}
                  </h2>
                  {/* Description */}
                  <p className="text-white font-medium text-center px-4 opacity-0 group-hover:opacity-100 duration-300">
                    {image.description}
                  </p>
                </div>
              </button>
            </div>
          );
        })}
      </div>
      <div className="absolute hidden top-[80px] left-[-170px] lg:w-[423px] lg:h-[24px] md:flex items-center justify-between rotate-90">
        <hr data-aos="fade-right" className="w-[104px]" />
        <h3
          data-aos="fade-left"
          className="text-[24px] leading-[24px] tracking-[18px] mx-5 text-[#C8CCD8]"
        >
          PORTFOLIO
        </h3>
      </div>
    </div>
  );
};

export default PortMain;
