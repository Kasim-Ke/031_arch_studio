import HeroDektop from "./desktop/image-hero-paramour.jpg";
import HeroTablet from "./tablet/image-hero-paramour.jpg";
import HeroMobile from "./mobile/image-hero-paramour.jpg";

const HomeHero = () => {
  return (
    <div className="  lg:max-w-[1440px]  md:max-w-[768px] max-w-[375px] h-full flex justify-center items-center mx-auto">
      <div>
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
    </div>
  );
};

export default HomeHero;
