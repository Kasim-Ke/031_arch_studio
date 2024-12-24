import jake from "./desktop/avatar-jake.jpg";
import tom from "./desktop/avatar-thompson.jpg";
import jackson from "./desktop/avatar-jackson.jpg";
import maria from "./desktop/avatar-maria.jpg";

const AboutLeaders = () => {
  return (
    <div className="lg:max-w-[1440px] md:max-w-[768px] max-w-[375px] mx-auto ">
      <div className="lg:w-[1110px] lg:h-[862px]  md:w-[574px]  md:h-[950px]  h-[1900px] py-[60px] w-[311px] flex lg:flex-row flex-col justify-between items-start mx-auto ">
        <div
          data-aos="fade-down"
          className="lg:w-[380px] md:w-[446px] md:text-[72px] w-[311px] text-[48px] leading-[52px] tracking-[-1.71px] md:leading-[64px] md:tracking-[-2px] font-bold md:pb-9 "
        >
          The
          <span className="block ">Leaders</span>
        </div>
        <div className="lg:w-[730px] lg:h-[860px] md:w-[572px] md:h-[773px] w-[311px]  flex flex-col justify-between ">
          <div className="flex  justify-between items-center  md:flex-row flex-col">
            <div
              data-aos="fade-right"
              className="md:w-[350px] md:h-[400px] h-[400px] "
            >
              <img className="object-cover " src={jake} alt="jake" />
              <div className="py-2">
                <h3 className="font-bold text-[32px] leading-[40px]">
                  Jake Richards
                </h3>
                <p className="text-[#60636D]">Chief Architect</p>
              </div>
            </div>
            <div
              data-aos="fade-down"
              className="lg:w-[350px] lg:h-[400px] h-[400px]  "
            >
              <img src={tom} alt="tom" />
              <div className="py-2">
                <h3 className="font-bold text-[32px] leading-[40px]">
                  Jake Richards
                </h3>
                <p className="text-[#60636D]">Head of Finance</p>
              </div>
            </div>
          </div>
          <div className="flex  justify-between items-center md:flex-row flex-col ">
            <div
              data-aos="fade-right"
              className="lg:w-[350px] lg:h-[400px] h-[400px] "
            >
              <img className="object-cover " src={jackson} alt="jackson" />
              <div className="py-2">
                <h3 className="font-bold text-[32px] leading-[40px]">
                  Jackson Rourke
                </h3>
                <p className="text-[#60636D]">Lead Designer</p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="lg:w-[350px] lg:h-[400px] h-[400px]"
            >
              <img src={maria} alt="maria" />
              <div className="py-2">
                <h3 className="font-bold text-[32px] leading-[40px]">
                  Maria Simpson
                </h3>
                <p className="text-[#60636D]">Senior Architect</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLeaders;
