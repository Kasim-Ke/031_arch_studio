import mapDesktop from "./desktop/image-map.png";
import mapTablet from "./tablet/image-map.png";
import mapMobile from "./mobile/image-map.png";

const ContactMap = () => {
  return (
    <div
      data-aos="fade"
      className="lg:w-[1110px]  md:w-[573px]  w-[311px] mx-auto "
    >
      <img
        className="lg:block hidden object-cover"
        src={mapDesktop}
        alt="Desktop"
      />
      <img
        className="md:block lg:hidden hidden object-cover"
        src={mapTablet}
        alt="Tablet"
      />
      <img
        className="block md:hidden object-cover "
        src={mapMobile}
        alt="Mobile"
      />
    </div>
  );
};

export default ContactMap;
