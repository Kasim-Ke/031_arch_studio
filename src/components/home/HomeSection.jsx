import welcomDektop from "./desktop/image-welcome.jpg";

const HomeSection = () => {
  return (
    <div className="  lg:max-w-[1440px] md:max-w-[768px] max-w-[375px] h-full  my-[80px] mx-auto">
      <div className=" relative lg:w-[1110px]  lg:h-[655px] md:w-[581px] md:h-[570px] w-[311px] h-[627px]  flex justify-between   flex-col items-start mx-auto ">
        <h1 className="lg:absolute lg:top-[-90px] lg:text-[250px] md:text-[120px] font-bold md:text-[#EEEFF4] md:block hidden  z-10 ">
          Welcome
        </h1>
        <div className="lg:absolute lg:top-[160px] lg:left-[180px] lg:w-[446px] lg:h-[483px] md:h-[411px] h-full   flex flex-col  mx-auto justify-between   ">
          <h2 className="md:text-[72px] md:leading-[64px] text-[48px] leading-[52px] tracking-[-1.71px]  font-bold md:tracking-[-2x] md:py-0 py-5 z-20 text-[#1B1D23] ">
            Welcome to Arch Studio
          </h2>
          <p className="lg:h-[312px] md:h-[240px] h-full text-[#60636D] flex flex-col justify-between lg:leading-[24px] ">
            <div>
              We have a unique network and skillset to help bring your projects
              to life. Our small team of highly skilled individuals combined
              with our large network put us in a strong position deliver
              exceptional results.
            </div>
            <div>
              Over the past 10 years, we have worked on all kinds of projects.
              From stations to high-rise buildings, we create spaces that
              inspire and delight.
            </div>
            <div>
              We work closely with our clients so that we understand the
              intricacies of each project. This allows us to work in harmony the
              surrounding area to create truly stunning projects that will stand
              the test of time.
            </div>
          </p>
        </div>
        <img
          className=" object-cover right-0 absolute bottom-0 lg:block hidden"
          src={welcomDektop}
          alt="welcomDektop"
        />
      </div>
    </div>
  );
};

export default HomeSection;
