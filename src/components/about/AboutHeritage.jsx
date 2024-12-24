import herDesk from "../about/desktop/image-heritage.jpg";

const AboutHeritage = () => {
  return (
    <div className=" lg:max-w-[1440px] md:max-w-[768px] max-w-[375px] h-full mx-auto ">
      <div className="relative md:top-0 top-[200px] lg:w-[1110px] lg:h-[568px] my-[200px] md:w-[574px] md:h-[485px] h-[620px] w-[311px] flex justify-between items-start mx-auto  ">
        <div className="lg:w-[440px] w-full h-full flex flex-col justify-between">
          <div className="mt-[65px]  w-full flex  ">
            <h2
              data-aos="fade-down"
              className="text-[48px] leading-[52px] tracking-[-1.71px] font-bold md:text-[72px] md:leading-[64px] md:tracking-[-2px]"
            >
              Our <span className="block">Heritage</span>
            </h2>
          </div>
          <div data-aos="fade-up" className="lg:h-[288px] text-[#60636D] ">
            <p>
              Founded in 2007, we started as a trio of architects. Our
              complementary skills and relentless attention to detail turned
              Arch into one of the most sought-after boutique firms in the
              country.
              <span className="block">
                <br />
                Specializing in Urban Design allowed us to focus on creating
                exceptional structures that live in harmony with their
                surroundings. We consider every detail from every surrounding
                element to inform our designs.
              </span>
              <span className="block">
                <br />
                Our small team of world-class professionals provides input on
                every project.
              </span>
            </p>
          </div>
        </div>
        <div data-aos="fade-right" className="lg:block hidden object-cover">
          <img src={herDesk} alt="herDesk" />
        </div>
      </div>
    </div>
  );
};

export default AboutHeritage;
